
CREATE TABLE IF NOT EXISTS application_user(
    uuid text,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)