-- Modifications To user_type
INSERT INTO user_type (type) VALUES ('USER'), ('ADMIN'), ('PRODUCER'), ('PRODUCER_VIP');
-- Poner el usuario que va a conectarse a la base de datos
--REVOKE INSERT, UPDATE, DELETE ON user_type FROM 'username'@'hostname';

-- Modifications state_request
INSERT INTO state_request (state) VALUES ('PENDING'), ('ACCEPTED'), ('DECLINED');
--REVOKE INSERT, UPDATE, DELETE ON state_request FROM 'username'@'hostname';


INSERT INTO user (name, lastname, email, address, password ,user_type_id) VALUES ('gaston', 'Johnson', 'gaston.johnson@example.com', '123 Pine St', 'mySecretPass',1);
INSERT INTO user (name, lastname, email, address, password, user_type_id) VALUES ('John', 'Doe', 'john.doe@example.com', '456 Oak Ave', 'strongPassword', 2);

INSERT INTO user (name, lastname, email, address, password, user_type_id) VALUES ('Jane', 'Smith', 'jane.smith@example.com', '789 Maple Blvd', '$2a$10$ON/i1ukskC4eyGzWhfkLB.ADXsVmvJe7qouWXrPjg9Kk6qv5WppHy', 3);


INSERT INTO plantation (plant_type, seasson, water_amount, details) VALUES('tomate', 'verano', 1500, 'semillas de tomate para cultivo en verano'),('zanahoria', 'primavera', 1200, 'semillas de zanahoria para cultivo en primavera'),('lechuga', 'otonio', 1000, 'semillas de lechuga para plantacion en otonio'),('maiz', 'verano', 1800, 'semillas de maiz para cosecha en verano'),('pepino', 'primavera', 1400, 'semillas de pepino para plantacion en primavera'),('calabaza', 'verano', 1600, 'semillas de calabaza para cultivo en verano'),('papa', 'otonio', 1300, 'semillas de papa para plantacion en otonio'),('fresa', 'primavera', 1100, 'semillas de fresa para cosecha en primavera'),('sandia', 'verano', 1700, 'semillas de sandia para cultivo en verano'),('rabano', 'otonio', 1250, 'semillas de rabano para plantacion en otonio');



INSERT INTO publication (title, plantation_id, author_id, publication_date, visibility, main_image_id, score, authorization_status_id) VALUES('Cultivo de tomates', 1, 1, '2024-03-23 10:00:00', false, null, 1, 2),('Cultivo de zanahorias', 2, 1, '2024-03-23 11:00:00', true, null, 2, 2),('Plantación de lechugas', 3, 1, '2024-03-23 12:00:00', true, null, 3, 2),('Cosecha de maiz', 4, 1, '2024-03-23 13:00:00', true, null, 4, 2),('Plantacion de pepinos', 5, 1, '2024-03-23 14:00:00', true, null, 5,2),('Cultivo de calabazas', 6, 1, '2024-03-23 15:00:00', true, null, 6, 2),('Plantacion de papas', 7, 1, '2024-03-23 16:00:00', true, null, 7, 2),('Cosecha de fresas', 8, 1, '2024-03-23 17:00:00', true, null, 8, 2),('Cultivo de sandias', 9, 1, '2024-03-23 18:00:00', true, null, 9, 2),('Plantacion de rabanos', 10, 1, '2024-03-23 19:00:00', true, null, 10, 2);


