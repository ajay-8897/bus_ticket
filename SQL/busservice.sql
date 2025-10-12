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
(32, 'BUS132', 'Delhi', 'Haridwar', '2025-10-13 08:00:00', 'AC', 40, 20, 20),
(33, 'BUS133', 'Mumbai', 'Aurangabad', '2025-10-14 09:30:00', 'Sleeper', 30, 15, 15),
(34, 'BUS134', 'Chennai', 'Madurai', '2025-10-15 07:45:00', 'Non AC', 35, 12, 23),
(35, 'BUS135', 'Kolkata', 'Asansol', '2025-10-16 06:00:00', 'AC', 40, 30, 10),
(36, 'BUS136', 'Hyderabad', 'Nizamabad', '2025-10-17 10:15:00', 'Sleeper', 32, 18, 14),
(37, 'BUS137', 'Ahmedabad', 'Bhavnagar', '2025-10-18 11:00:00', 'Non AC', 28, 10, 18),
(38, 'BUS138', 'Lucknow', 'Prayagraj', '2025-10-19 05:30:00', 'AC', 40, 35, 5),
(39, 'BUS139', 'Bhopal', 'Jabalpur', '2025-10-20 12:00:00', 'Sleeper', 30, 8, 22),
(40, 'BUS140', 'Patna', 'Muzaffarpur', '2025-10-21 07:00:00', 'Non AC', 36, 20, 16),
(41, 'BUS141', 'Shimla', 'Chamba', '2025-10-22 09:00:00', 'AC', 40, 18, 22),
(42, 'BUS142', 'Delhi', 'Amritsar', '2025-10-23 08:00:00', 'AC', 40, 28, 12),
(43, 'BUS143', 'Mumbai', 'Nagpur', '2025-10-24 09:30:00', 'Sleeper', 30, 17, 13),
(44, 'BUS144', 'Chennai', 'Tirupati', '2025-10-25 07:45:00', 'Non AC', 35, 14, 21),
(45, 'BUS145', 'Kolkata', 'Malda', '2025-10-26 06:00:00', 'AC', 40, 32, 8),
(46, 'BUS146', 'Hyderabad', 'Karimnagar', '2025-10-27 10:15:00', 'Sleeper', 32, 20, 12),
(47, 'BUS147', 'Ahmedabad', 'Rajkot', '2025-10-28 11:00:00', 'Non AC', 28, 14, 14),
(48, 'BUS148', 'Lucknow', 'Bareilly', '2025-10-29 05:30:00', 'AC', 40, 38, 2),
(49, 'BUS149', 'Bhopal', 'Satna', '2025-10-30 12:00:00', 'Sleeper', 30, 10, 20),
(50, 'BUS150', 'Patna', 'Bhagalpur', '2025-10-31 07:00:00', 'Non AC', 36, 22, 14),
(51, 'BUS151', 'Shimla', 'Dalhousie', '2025-11-01 09:00:00', 'AC', 40, 20, 20);

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

