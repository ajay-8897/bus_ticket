import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Adjust the API URL as needed

export const signIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, { email, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error('Sign In failed');
    }
};

export const signUp = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { userName: username, userEmail: email, userPassword: password });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error('Sign Up failed');
    }
};

export const registerUser = signUp;

export const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return JSON.parse(atob(token.split('.')[1])); // Decode JWT to get user info
    }
    return null;
};

export const logout = () => {
    localStorage.removeItem('token');
};

export function login(username: string, password: string) {
  // Implement actual login logic here or update as needed
  return Promise.resolve({ success: true });
}