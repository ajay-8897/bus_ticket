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
(21, 'BUS201', 'Delhi', 'Agra', '2025-10-13 08:00:00', 'AC', 40, 25, 15),
(22, 'BUS202', 'Mumbai', 'Nashik', '2025-10-14 09:30:00', 'Sleeper', 30, 20, 10),
(23, 'BUS203', 'Chennai', 'Coimbatore', '2025-10-15 07:45:00', 'Non AC', 35, 10, 25),
(24, 'BUS204', 'Kolkata', 'Siliguri', '2025-10-16 06:00:00', 'AC', 40, 35, 5),
(25, 'BUS205', 'Hyderabad', 'Warangal', '2025-10-17 10:15:00', 'Sleeper', 32, 16, 16),
(26, 'BUS206', 'Ahmedabad', 'Vadodara', '2025-10-18 11:00:00', 'Non AC', 28, 12, 16),
(27, 'BUS207', 'Lucknow', 'Varanasi', '2025-10-19 05:30:00', 'AC', 40, 40, 0),
(28, 'BUS208', 'Bhopal', 'Gwalior', '2025-10-20 12:00:00', 'Sleeper', 30, 5, 25),
(29, 'BUS209', 'Patna', 'Gaya', '2025-10-21 07:00:00', 'Non AC', 36, 18, 18),
(30, 'BUS210', 'Delhi', 'Chandigarh', '2025-10-22 08:00:00', 'AC', 40, 25, 15),
(31, 'BUS211', 'Shimla', 'Dehradun', '2025-10-23 09:00:00', 'AC', 40, 22, 18);

INSERT INTO buses VALUES
(21, 'BUS201', 'Delhi', 'Agra', '2025-10-13 08:00:00', 'AC', 40, 25, 15),
(22, 'BUS202', 'Mumbai', 'Nashik', '2025-10-14 09:30:00', 'Sleeper', 30, 20, 10),
(23, 'BUS203', 'Chennai', 'Coimbatore', '2025-10-15 07:45:00', 'Non AC', 35, 10, 25),
(24, 'BUS204', 'Kolkata', 'Siliguri', '2025-10-16 06:00:00', 'AC', 40, 35, 5),
(25, 'BUS205', 'Hyderabad', 'Warangal', '2025-10-17 10:15:00', 'Sleeper', 32, 16, 16),
(26, 'BUS206', 'Ahmedabad', 'Vadodara', '2025-10-18 11:00:00', 'Non AC', 28, 12, 16),
(27, 'BUS207', 'Lucknow', 'Varanasi', '2025-10-19 05:30:00', 'AC', 40, 40, 0),
(28, 'BUS208', 'Bhopal', 'Gwalior', '2025-10-20 12:00:00', 'Sleeper', 30, 5, 25),
(29, 'BUS209', 'Patna', 'Gaya', '2025-10-21 07:00:00', 'Non AC', 36, 18, 18),
(30, 'BUS210', 'Delhi', 'Chandigarh', '2025-10-22 08:00:00', 'AC', 40, 25, 15),
(31, 'BUS211', 'Shimla', 'Dehradun', '2025-10-23 09:00:00', 'AC', 40, 22, 18);

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

