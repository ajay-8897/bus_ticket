from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_db():
    try:
        # Remove auth_plugin argument to let MySQL use the user's default plugin
        return mysql.connector.connect(
            host='localhost',
            user='root',
            password='Ajay@176084',
            database='himbuses',
            use_pure=True
        )
    except Error as e:
        print(f"Error connecting with mysql-connector: {e}")
        try:
            import pymysql
            return pymysql.connect(
                host='localhost',
                user='root',
                password='Ajay@176084',
                database='himbuses',
                autocommit=True,
                cursorclass=pymysql.cursors.DictCursor
            )
        except Exception as ex:
            print(f"Fallback pymysql also failed: {ex}")
            raise

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('userName')
    useremail = data.get('userEmail')
    password = data.get('userPassword')
    if not username or not useremail or not password:
        return jsonify({'error': 'Missing fields'}), 400
    hashed = generate_password_hash(password)
    try:
        conn = get_db()
        cur = conn.cursor()
        try:
            cur.execute(
                'INSERT INTO users (userName, userEmail, userPassword) VALUES (%s, %s, %s)',
                (username, useremail, hashed)
            )
            try:
                conn.commit()
            except Exception:
                pass
            user_id = cur.lastrowid if hasattr(cur, 'lastrowid') else None
        except Exception as e:
            if 'Duplicate entry' in str(e):
                return jsonify({'error': 'User exists'}), 400
            return jsonify({'error': str(e)}), 500
        cur.close()
        conn.close()
        return jsonify({'success': True, 'userId': user_id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    username = data.get('userName')
    password = data.get('userPassword')
    conn = get_db()
    try:
        # Use dictionary cursor for both connectors
        try:
            cur = conn.cursor(dictionary=True)
        except TypeError:
            # For pymysql, cursor is already DictCursor
            cur = conn.cursor()
        cur.execute('SELECT * FROM users WHERE userName = %s', (username,))
        user = cur.fetchone()
        print("Fetched user from DB:", user)  # Debug print
        cur.close()
        conn.close()
        if not user or not user.get('userPassword') or not check_password_hash(user['userPassword'], password):
            return jsonify({'error': 'Invalid credentials'}), 401
        return jsonify({'success': True, 'userId': user['id']})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
if __name__ == '__main__':
    app.run(port=5000)
