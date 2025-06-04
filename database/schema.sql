CREATE DATABASE IF NOT EXISTS university_management;
USE university_management;

CREATE TABLE IF NOT EXISTS Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    CreditsEarned INT NOT NULL
);

INSERT INTO Student (StudentID, Name, CreditsEarned) VALUES
(345, 'John Walker', 93),
(202, 'David Jameson', 87),
(103, 'Emma Wells', 57);