CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(100),
    "gender" VARCHAR(10),
    "age" INT,
    "transfer_ready" BOOLEAN,
    "notes" VARCHAR(255)
);

INSERT INTO "koalas" ("name", "gender", "age", "transfer_ready", "notes")
VALUES 
('Scotty', 'M', 4, true, 'Born in Guatemala'), 
('Jean', 'F', 4, true, 'Allergic to lots of lava'),
('Ororo', 'F', 7, false, 'Loves listening to Paula (Abdul)'),
('Logan', 'M', 15, false, 'Loves the sauna '),
('Charlie', 'M', 9, true, 'Favorite band is Nirvana'),
('Betsy', 'F', 4, true, 'Has a pet iguana');