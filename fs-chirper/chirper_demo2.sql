
CREATE SCHEMA chirper_demo;
USE chirper_demo;

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE chirps (
	id INT AUTO_INCREMENT,
    userid INT NOT NULL,
    content VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE mentions (
	chirpid INT NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY (chirpid, userid),
    FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (chirpid) REFERENCES chirps (id) ON DELETE CASCADE
);

INSERT INTO users (username, password) VALUES
('Batman', 'password123'),
('Poison Ivy', 'password123'),
('Harley Quinn', 'password123'),
('Joker', 'password123');

INSERT INTO chirps (userid, content) VALUES
(1, 'I AM BATMAN!'),
(2, 'Nature always WINS!'),
(3, 'Puddin! Get your RECYCLE ON!'),
(4, 'Why so SERIOUS?!'),
(1, 'Because this is serious! @Joker');

INSERT INTO mentions (chirpid, userid) VALUE (5, 4);

SELECT * FROM users;
SELECT * FROM chirps;
SELECT * FROM mentions;

SELECT 
	users.username,
    chirps.*
FROM chirps
JOIN users ON users.id = chirps.userid;