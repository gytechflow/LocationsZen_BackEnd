CREATE DATABASE location_zen;

\c location_zen

CREATE TABLE IF NOT EXISTS bailleurs (
    id SERIAL PRIMARY KEY NOT NULL,
    nom CHARACTER VARYING(512),
    prenom CHARACTER VARYING(512),
    residence_ids INTEGER[]
);

INSERT INTO bailleurs (nom, prenom, residence_ids)
    VALUES ('Onana', 'jean', '{1, 3, 5}'),
        ('makoun', 'pierre', '{1, 4}');