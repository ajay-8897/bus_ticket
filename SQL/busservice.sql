create database himbuses;
use himbuses;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(100) NOT NULL,
    userEmail VARCHAR(255) NOT NULL UNIQUE,
    userPassword VARCHAR(255) NOT NULL
);

select * from users;

CREATE TABLE buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_number VARCHAR(20),
    start_location VARCHAR(50),
    destination VARCHAR(50),
    departure_datetime DATETIME,
    bus_type VARCHAR(20), -- e.g., 'AC', 'Non AC', 'Sleeper'
    number_of_seats INT,
    booked_seats INT,
    empty_seats INT
);

CREATE TABLE seats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_id INT,
    seat_number VARCHAR(10),
    booking_status VARCHAR(10), -- e.g., 'Booked', 'Available'
    FOREIGN KEY (bus_id) REFERENCES buses(id)
);

INSERT INTO buses VALUES
(1, 'BUS101', 'Delhi', 'Jaipur', '2025-08-26 08:00:00', 'AC', 40, 25, 15),
(2, 'BUS102', 'Mumbai', 'Pune', '2025-08-26 09:30:00', 'Sleeper', 30, 20, 10),
(3, 'BUS103', 'Chennai', 'Bangalore', '2025-08-26 07:45:00', 'Non AC', 35, 10, 25),
(4, 'BUS104', 'Kolkata', 'Durgapur', '2025-08-26 06:00:00', 'AC', 40, 35, 5),
(5, 'BUS105', 'Hyderabad', 'Vizag', '2025-08-26 10:15:00', 'Sleeper', 32, 16, 16),
(6, 'BUS106', 'Ahmedabad', 'Surat', '2025-08-26 11:00:00', 'Non AC', 28, 12, 16),
(7, 'BUS107', 'Lucknow', 'Kanpur', '2025-08-26 05:30:00', 'AC', 40, 40, 0),
(8, 'BUS108', 'Bhopal', 'Indore', '2025-08-26 12:00:00', 'Sleeper', 30, 5, 25),
(9, 'BUS109', 'Patna', 'Ranchi', '2025-08-26 07:00:00', 'Non AC', 36, 18, 18),
(11, 'BUS111', 'Delhi', 'Jaipur', '2025-08-26 08:00:00', 'AC', 40, 25, 15),
(10,'BUS110', 'Shimla', 'Manali', '2025-08-26 09:00:00', 'AC', 40, 22, 18);

INSERT INTO buses VALUES
(11, 'BUS111', 'Delhi', 'Jaipur', '2025-08-26 08:00:00', 'AC', 40, 25, 15);

INSERT INTO seats VALUES
(1, 1, 'A1', 'Booked'),
(2, 1, 'A2', 'Available'),
(3, 2, 'B1', 'Booked'),
(4, 2, 'B2', 'Booked'),
(5, 3, 'C1', 'Available'),
(6, 3, 'C2', 'Available'),
(7, 4, 'D1', 'Booked'),
(8, 5, 'E1', 'Available'),
(9, 6, 'F1', 'Booked'),
(10,7, 'G1', 'Booked');

