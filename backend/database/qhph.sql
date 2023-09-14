CREATE DATABASE IF NOT EXISTS qhph;

USE qhph;

CREATE TABLE usuarios(
    id_usuario int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    apellido Varchar(45) DEFAULT NULL,
    correo Varchar(45) NOT NULL,
    intereses Varchar(100) NOT NULL,
    contraseña Varchar(20) NOT NULL
);

INSERT INTO usuarios VALUES
(1,'Diego','Cortes','diego.cortes@misena.edu.co','123'),
(2,'Andrea','Rodriguez','andrea@misena.edu.co','123'),
(3,'Carlos','Bejarano','carlos@misena.edu.co','123'),
(3,'Diego','Arenas','carlos@misena.edu.co','123');

/* ---------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS planes(
    id_plan int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    descripcion Varchar(45) NOT NULL,
    fecha Varchar(45) NOT NULL,
    hora Varchar(45) NOT NULL,
    contraseña Varchar(20) NOT NULL
);

INSERT INTO planes VALUES
(1,'Diego','Cortes','diego.cortes@misena.edu.co','123'),
(2,'Andrea','Rodriguez','andrea@misena.edu.co','123'),
(3,'Carlos','Bejarano','carlos@misena.edu.co','123'),
(3,'Diego','Arenas','carlos@misena.edu.co','123');

/* ---------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS sitios(
    id_sitio NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    descripcion Varchar(45) NOT NULL,
    fecha Varchar(45) NOT NULL,
    hora Varchar(45) NOT NULL,
    contraseña Varchar(20) NOT NULL
);

INSERT INTO sitios VALUES
(1,'Diego','Cortes','diego.cortes@misena.edu.co','123'),
(2,'Andrea','Rodriguez','andrea@misena.edu.co','123'),
(3,'Carlos','Bejarano','carlos@misena.edu.co','123'),
(3,'Diego','Arenas','carlos@misena.edu.co','123');


/* ---------------------------------------------------------- */