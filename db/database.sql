CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE usuarios(
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    apellido Varchar(45) NOT NULL,
    correo Varchar(45) NOT NULL,
    contraseña Varchar(20) NOT NULL
);
DESCRIBE usuarios;

INSERT INTO usuarios VALUES
(1,'Diego','Cortes','diego.cortes@misena.edu.co'),
(2,'Andrea','Rodriguez','andrea@misena.edu.co'),
(3,'Carlos','Bejarano','carlos@misena.edu.co');
(3,'Diego','Arenas','carlos@misena.edu.co');