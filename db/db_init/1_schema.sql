DROP SCHEMA IF EXISTS todo;
CREATE SCHEMA todo;
USE todo;

CREATE TABLE todo (
    todo_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    todo_title VARCHAR(50),
    todo_status INT UNSIGNED,
    explanation VARCHAR(500),
    create_user VARCHAR(50),
    update_user VARCHAR(50),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    PRIMARY KEY(todo_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;