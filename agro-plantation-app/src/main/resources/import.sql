-- Modifications To user_type

INSERT INTO user_type (type) VALUES ('USER'), ('ADMIN'), ('PRODUCER'), ('PRODUCER_VIP');
-- Poner el usuario que va a conectarse a la base de datos
--REVOKE INSERT, UPDATE, DELETE ON user_type FROM 'username'@'hostname';

-- Modifications state_request
INSERT INTO state_request (state) VALUES ('PENDING'), ('ACCEPTED'), ('DECLINED');
--REVOKE INSERT, UPDATE, DELETE ON state_request FROM 'username'@'hostname';

INSERT INTO user (user_type_id, email, lastname, name, address, password) VALUES (2, 'admin@gmail.com', 'Admin', 'Admin', 'Direccion', 'admin');

INSERT INTO plantation (area, harvest_type, irrigation_type, production_type, details) VALUES ('150 sqm', 'organic', 'drip', 'type3', 'semillas de tomate para cultivo en verano'), ('120 sqm', 'organic', 'drip', 'type2', 'semillas de zanahoria para cultivo en primavera'), ('100 sqm', 'organic', 'drip', 'type1', 'semillas de lechuga para plantacion en otonio'), ('200 sqm', 'conventional', 'sprinkler', 'type3', 'semillas de maiz para cosecha en verano'), ('140 sqm', 'organic', 'drip', 'type1', 'semillas de pepino para plantacion en primavera'), ('160 sqm', 'conventional', 'sprinkler', 'type2', 'semillas de calabaza para cultivo en verano'), ('130 sqm', 'organic', 'drip', 'type3', 'semillas de papa para plantacion en otonio'), ('110 sqm', 'organic', 'drip', 'type1', 'semillas de fresa para cosecha en primavera'), ('170 sqm', 'conventional', 'sprinkler', 'type2', 'semillas de sandia para cultivo en verano'), ('125 sqm', 'organic', 'drip', 'type3', 'semillas de rabano para plantacion en otonio') ON DUPLICATE KEY UPDATE details = VALUES(details);
INSERT INTO image (id, url) VALUES ('publications/oaduochtlivtwaob7ouj', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212052/publications/oaduochtlivtwaob7ouj.png'), ('publications/khmjecxfpw1c2lh2byk0', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212773/publications/khmjecxfpw1c2lh2byk0.png'), ('publications/ehcjqq4jkcy2aomkyxo3', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212837/publications/ehcjqq4jkcy2aomkyxo3.png'), ('publications/ezf6x1rhblki1p3l3kzi', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212872/publications/ezf6x1rhblki1p3l3kzi.png'), ('publications/y4in5jrlfi14eag2vnwl', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212905/publications/y4in5jrlfi14eag2vnwl.png'), ('publications/uui7ncpdsa4ba5zhkq9p', 'https://res.cloudinary.com/dvckhdihm/image/upload/v1711212926/publications/uui7ncpdsa4ba5zhkq9p.png') ON DUPLICATE KEY UPDATE url = VALUES(url);
INSERT INTO publication (title, plantation_id, author_id, publication_date, visibility, main_image_id, score, authorization_status_id) VALUES ('Cultivo de tomates', 1, 1, '2024-03-23 10:00:00', true, 'publications/oaduochtlivtwaob7ouj', 1, 2), ('Cultivo de zanahorias', 2, 1, '2024-03-23 11:00:00', true, 'publications/khmjecxfpw1c2lh2byk0', 2, 1), ('Plantacion de lechugas', 3, 1, '2024-03-23 12:00:00', true, 'publications/ehcjqq4jkcy2aomkyxo3', 3, 1), ('Cosecha de maiz', 4, 1, '2024-03-23 13:00:00', true, 'publications/ezf6x1rhblki1p3l3kzi', 4, 2), ('Plantacion de pepinos', 5, 1, '2024-03-23 14:00:00', true, 'publications/y4in5jrlfi14eag2vnwl', 5,2), ('Cultivo de calabazas', 6, 1, '2024-03-23 15:00:00', true, 'publications/uui7ncpdsa4ba5zhkq9p', 6, 2) ON DUPLICATE KEY UPDATE title = VALUES(title);;
