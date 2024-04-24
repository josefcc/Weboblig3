CREATE TABLE if not exists Billett
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    filmNavn VARCHAR(100) NOT NULL,
    antall INTEGER NOT NULL,
    fornavn VARCHAR(100) NOT NULL,
    etternavn VARCHAR(100) NOT NULL,
    telefonnr INTEGER NOT NULL,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );