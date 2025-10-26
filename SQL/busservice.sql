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

INSERT INTO buses VALUES (1, 'BUS1001', 'Delhi', 'Agra', '2025-11-01 08:00:00', 'AC', 40, 28, 12);
INSERT INTO buses VALUES (2, 'BUS1002', 'Agra', 'Jaipur', '2025-11-01 12:00:00', 'Non-AC', 40, 22, 18);
INSERT INTO buses VALUES (3, 'BUS1003', 'Jaipur', 'Lucknow', '2025-11-01 16:00:00', 'Sleeper', 40, 18, 22);
INSERT INTO buses VALUES (4, 'BUS1004', 'Lucknow', 'Delhi', '2025-11-01 20:00:00', 'AC', 40, 30, 10);
INSERT INTO buses VALUES (5, 'BUS1005', 'Kanpur', 'Agra', '2025-11-01 08:00:00', 'Non-AC', 40, 26, 14);
INSERT INTO buses VALUES (6, 'BUS1006', 'Agra', 'Delhi', '2025-11-01 12:00:00', 'AC', 40, 24, 16);
INSERT INTO buses VALUES (7, 'BUS1007', 'Jaipur', 'Kanpur', '2025-11-01 16:00:00', 'Sleeper', 40, 19, 21);
INSERT INTO buses VALUES (8, 'BUS1008', 'Delhi', 'Jaipur', '2025-11-01 20:00:00', 'AC', 40, 32, 8);
INSERT INTO buses VALUES (9, 'BUS1009', 'Lucknow', 'Kanpur', '2025-11-01 08:00:00', 'Non-AC', 40, 25, 15);
INSERT INTO buses VALUES (10, 'BUS1010', 'Kanpur', 'Jaipur', '2025-11-01 12:00:00', 'Sleeper', 40, 20, 20);
INSERT INTO buses VALUES (11, 'BUS1011', 'Delhi', 'Agra', '2025-11-02 08:00:00', 'AC', 40, 27, 13);
INSERT INTO buses VALUES (12, 'BUS1012', 'Agra', 'Jaipur', '2025-11-02 12:00:00', 'Non-AC', 40, 21, 19);
INSERT INTO buses VALUES (21, 'BUS1041', 'Delhi', 'Lucknow', '2025-11-03 08:00:00', 'AC', 40, 29, 11);


-- November 1, 2025
INSERT INTO buses VALUES (22, 'BUS6022', 'Agra', 'Lucknow', '2025-11-01 10:15:00', 'Non-AC', 40, 19, 21);
INSERT INTO buses VALUES (23, 'BUS6023', 'Jaipur', 'Agra', '2025-11-01 13:45:00', 'Sleeper', 40, 30, 10);
INSERT INTO buses VALUES (24, 'BUS6024', 'Lucknow', 'Delhi', '2025-11-01 18:00:00', 'AC', 40, 24, 16);
INSERT INTO buses VALUES (25, 'BUS6025', 'Kanpur', 'Jaipur', '2025-11-01 22:30:00', 'Non-AC', 40, 28, 12);

-- November 2, 2025
INSERT INTO buses VALUES (26, 'BUS6026', 'Delhi', 'Agra', '2025-11-02 07:30:00', 'Sleeper', 40, 21, 19);
INSERT INTO buses VALUES (27, 'BUS6027', 'Agra', 'Kanpur', '2025-11-02 10:15:00', 'AC', 40, 25, 15);
INSERT INTO buses VALUES (28, 'BUS6028', 'Jaipur', 'Lucknow', '2025-11-02 13:45:00', 'Non-AC', 40, 29, 11);
INSERT INTO buses VALUES (29, 'BUS6029', 'Lucknow', 'Agra', '2025-11-02 18:00:00', 'AC', 40, 22, 18);
INSERT INTO buses VALUES (30, 'BUS6030', 'Kanpur', 'Delhi', '2025-11-02 22:30:00', 'Sleeper', 40, 32, 8);

-- November 3, 2025
INSERT INTO buses VALUES (31, 'BUS6031', 'Delhi', 'Jaipur', '2025-11-03 07:30:00', 'Non-AC', 40, 20, 20);
INSERT INTO buses VALUES (32, 'BUS6032', 'Agra', 'Delhi', '2025-11-03 10:15:00', 'AC', 40, 27, 13);
INSERT INTO buses VALUES (33, 'BUS6033', 'Kanpur', 'Lucknow', '2025-11-03 13:45:00', 'Sleeper', 40, 23, 17);
INSERT INTO buses VALUES (34, 'BUS6034', 'Jaipur', 'Kanpur', '2025-11-03 18:00:00', 'AC', 40, 30, 10);
INSERT INTO buses VALUES (35, 'BUS6035', 'Lucknow', 'Agra', '2025-11-03 22:30:00', 'Non-AC', 40, 18, 22);

-- November 4, 2025
INSERT INTO buses VALUES (36, 'BUS6036', 'Delhi', 'Lucknow', '2025-11-04 07:30:00', 'Sleeper', 40, 25, 15);
INSERT INTO buses VALUES (37, 'BUS6037', 'Agra', 'Jaipur', '2025-11-04 10:15:00', 'Non-AC', 40, 19, 21);
INSERT INTO buses VALUES (38, 'BUS6038', 'Jaipur', 'Delhi', '2025-11-04 13:45:00', 'AC', 40, 28, 12);
INSERT INTO buses VALUES (39, 'BUS6039', 'Lucknow', 'Kanpur', '2025-11-04 18:00:00', 'AC', 40, 26, 14);
INSERT INTO buses VALUES (40, 'BUS6040', 'Kanpur', 'Agra', '2025-11-04 22:30:00', 'Sleeper', 40, 21, 19);

-- November 5, 2025
INSERT INTO buses VALUES (41, 'BUS6041', 'Delhi', 'Agra', '2025-11-05 07:30:00', 'AC', 40, 24, 16);
INSERT INTO buses VALUES (42, 'BUS6042', 'Agra', 'Lucknow', '2025-11-05 10:15:00', 'Non-AC', 40, 23, 17);
INSERT INTO buses VALUES (43, 'BUS6043', 'Jaipur', 'Kanpur', '2025-11-05 13:45:00', 'AC', 40, 30, 10);
INSERT INTO buses VALUES (44, 'BUS6044', 'Lucknow', 'Delhi', '2025-11-05 18:00:00', 'Sleeper', 40, 20, 20);
INSERT INTO buses VALUES (45, 'BUS6045', 'Kanpur', 'Jaipur', '2025-11-05 22:30:00', 'AC', 40, 22, 18);

-- November 6, 2025
INSERT INTO buses VALUES (46, 'BUS6046', 'Delhi', 'Jaipur', '2025-11-06 07:30:00', 'Non-AC', 40, 29, 11);
INSERT INTO buses VALUES (47, 'BUS6047', 'Agra', 'Delhi', '2025-11-06 10:15:00', 'Sleeper', 40, 27, 13);
INSERT INTO buses VALUES (48, 'BUS6048', 'Kanpur', 'Lucknow', '2025-11-06 13:45:00', 'AC', 40, 25, 15);
INSERT INTO buses VALUES (49, 'BUS6049', 'Jaipur', 'Agra', '2025-11-06 18:00:00', 'Non-AC', 40, 30, 10);
INSERT INTO buses VALUES (50, 'BUS6050', 'Lucknow', 'Kanpur', '2025-11-06 22:30:00', 'AC', 40, 28, 12);

-- November 7, 2025
INSERT INTO buses VALUES (51, 'BUS6051', 'Delhi', 'Kanpur', '2025-11-07 07:30:00', 'AC', 40, 26, 14);
INSERT INTO buses VALUES (52, 'BUS6052', 'Agra', 'Jaipur', '2025-11-07 10:15:00', 'Sleeper', 40, 30, 10);
INSERT INTO buses VALUES (53, 'BUS6053', 'Lucknow', 'Delhi', '2025-11-07 13:45:00', 'Non-AC', 40, 20, 20);
INSERT INTO buses VALUES (54, 'BUS6054', 'Kanpur', 'Agra', '2025-11-07 18:00:00', 'AC', 40, 27, 13);
INSERT INTO buses VALUES (55, 'BUS6055', 'Jaipur', 'Lucknow', '2025-11-07 22:30:00', 'Sleeper', 40, 23, 17);

-- November 8, 2025
INSERT INTO buses VALUES (56, 'BUS6056', 'Delhi', 'Jaipur', '2025-11-08 07:30:00', 'AC', 40, 25, 15);
INSERT INTO buses VALUES (57, 'BUS6057', 'Agra', 'Kanpur', '2025-11-08 10:15:00', 'Non-AC', 40, 29, 11);
INSERT INTO buses VALUES (58, 'BUS6058', 'Lucknow', 'Agra', '2025-11-08 13:45:00', 'Sleeper', 40, 18, 22);
INSERT INTO buses VALUES (59, 'BUS6059', 'Kanpur', 'Delhi', '2025-11-08 18:00:00', 'AC', 40, 30, 10);
INSERT INTO buses VALUES (60, 'BUS6060', 'Jaipur', 'Agra', '2025-11-08 22:30:00', 'Non-AC', 40, 24, 16);

-- November 9, 2025
INSERT INTO buses VALUES (61, 'BUS6061', 'Delhi', 'Lucknow', '2025-11-09 07:30:00', 'Sleeper', 40, 21, 19);
INSERT INTO buses VALUES (62, 'BUS6062', 'Agra', 'Jaipur', '2025-11-09 10:15:00', 'AC', 40, 28, 12);
INSERT INTO buses VALUES (63, 'BUS6063', 'Kanpur', 'Jaipur', '2025-11-09 13:45:00', 'Non-AC', 40, 19, 21);
INSERT INTO buses VALUES (64, 'BUS6064', 'Lucknow', 'Delhi', '2025-11-09 18:00:00', 'AC', 40, 31, 9);
INSERT INTO buses VALUES (65, 'BUS6065', 'Jaipur', 'Kanpur', '2025-11-09 22:30:00', 'Sleeper', 40, 26, 14);

-- November 10, 2025
INSERT INTO buses VALUES (66, 'BUS6066', 'Delhi', 'Agra', '2025-11-10 07:30:00', 'AC', 40, 20, 20);
INSERT INTO buses VALUES (67, 'BUS6067', 'Agra', 'Lucknow', '2025-11-10 10:15:00', 'Sleeper', 40, 30, 10);
INSERT INTO buses VALUES (68, 'BUS6068', 'Jaipur', 'Delhi', '2025-11-10 13:45:00', 'Non-AC', 40, 22, 18);
INSERT INTO buses VALUES (69, 'BUS6069', 'Kanpur', 'Agra', '2025-11-10 18:00:00', 'AC', 40, 27, 13);
INSERT INTO buses VALUES (70, 'BUS6070', 'Lucknow', 'Kanpur', '2025-11-10 22:30:00', 'Sleeper', 40, 24, 16);

-- November 11, 2025
INSERT INTO buses VALUES (71, 'BUS6071', 'Delhi', 'Jaipur', '2025-11-11 07:30:00', 'AC', 40, 19, 21);
INSERT INTO buses VALUES (72, 'BUS6072', 'Agra', 'Kanpur', '2025-11-11 10:15:00', 'Non-AC', 40, 25, 15);
INSERT INTO buses VALUES (73, 'BUS6073', 'Lucknow', 'Agra', '2025-11-11 13:45:00', 'Sleeper', 40, 29, 11);
INSERT INTO buses VALUES (74, 'BUS6074', 'Kanpur', 'Delhi', '2025-11-11 18:00:00', 'AC', 40, 22, 18);
INSERT INTO buses VALUES (75, 'BUS6075', 'Jaipur', 'Lucknow', '2025-11-11 22:30:00', 'Non-AC', 40, 30, 10);
-- November 12, 2025
INSERT INTO buses VALUES (76, 'BUS6076', 'Delhi', 'Agra', '2025-11-12 07:30:00', 'Sleeper', 40, 26, 14);
INSERT INTO buses VALUES (77, 'BUS6077', 'Agra', 'Jaipur', '2025-11-12 10:15:00', 'AC', 40, 21, 19);
INSERT INTO buses VALUES (78, 'BUS6078', 'Kanpur', 'Lucknow', '2025-11-12 13:45:00', 'Non-AC', 40, 28, 12);
INSERT INTO buses VALUES (79, 'BUS6079', 'Lucknow', 'Delhi', '2025-11-12 18:00:00', 'AC', 40, 24, 16);
INSERT INTO buses VALUES (80, 'BUS6080', 'Jaipur', 'Kanpur', '2025-11-12 22:30:00', 'Sleeper', 40, 27, 13);
select * from buses;

