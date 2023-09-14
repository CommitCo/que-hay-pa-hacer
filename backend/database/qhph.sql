CREATE DATABASE IF NOT EXISTS qhph;

USE qhph;

CREATE TABLE usuarios(
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    apellido Varchar(45) DEFAULT NULL,
    correo Varchar(45) NOT NULL,
    intereses Varchar(100) NOT NULL,
    contraseña Varchar(20) NOT NULL
);

INSERT INTO usuarios VALUES
(1,'Diego','Cortes','diego.cortes@misena.edu.co','deportes','123'),
(2,'Andrea','Rodriguez','andrea@misena.edu.co','fiestas','123'),
(3,'Carlos','Bejarano','carlos@misena.edu.co','capacitaciones','123'),
(4,'Diego','Arenas','carlos@misena.edu.co','tecnologia','123');

/* ---------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS planes(
    id_plan INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    descripcion TEXT,
    fecha Varchar(45) NOT NULL,
    hora Varchar(45) NOT NULL
);

INSERT INTO planes VALUES
(1,'Ciclo paseo','Rato recreativo desde el parque principal','20-06-2023','06:30:00'),
(2,'Fiesta en el mirador','En el mirador del huila se iniciara la primera fiesta de electro','01-10-2023','16:30:00'),
(3,'Concurso de feos','Se desarrollará en la jagua huila','15-01-2023','08:30:00'),
(4,'Concierto rock','En el parque principal se reunirá las mejores bandas de rock para dar la mejor fiesta','30-07-2023','18:30:00');

/* ---------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS sitios(
    id_sitio INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre Varchar(45) NOT NULL,
    ubicacion Varchar(45) NOT NULL,
    telefono Varchar(45) NOT NULL,
    horario Varchar(45) NOT NULL,
    servicios TEXT
);

INSERT INTO sitios VALUES
(1,'SENA','Calle 2 B','3112912831','7 A.M - 6 P.M','Aprendizaje'),
(2,'Alcaldia','Carrera 1 # 5','3209183562','7 A.M - 6 P.M',''),
(3,'Mirador Del Huila','Vereda Santa Lucia','3130098187','7 A.M - 6 P.M','Comida, Caballa, fotos'),
(4,'Cinema los Andes','Carrera 5','3217767311','7 A.M - 6 P.M','Peliculas');


/* ---------------------------------------------------------- */