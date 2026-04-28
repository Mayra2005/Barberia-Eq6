CREATE TABLE Citas (
    idCitas INT AUTO_INCREMENT,
    cliente VARCHAR(50),
    telefono VARCHAR(15),
    servicio VARCHAR(50),
    barbero VARCHAR(50),
    fecha DATE,
    hora TIME,
    estado VARCHAR(20),
    PRIMARY KEY (idCitas)
);
