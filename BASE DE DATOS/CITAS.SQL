CREATE TABLE Citas (
    idCitas INT AUTO_INCREMENT,
    idEstilos INT,
    idClientes INT,
    idEmpleados INT,
    idPromociones INT NULL,
    fecha DATE,
    hora TIME,
    estado VARCHAR(20),
    PRIMARY KEY (idCitas),
    FOREIGN KEY (idEstilos) REFERENCES Estilos(idEstilos),
    FOREIGN KEY (idClientes) REFERENCES Clientes(idClientes),
    FOREIGN KEY (idEmpleados) REFERENCES Empleados(idEmpleados),
    FOREIGN KEY (idPromociones) REFERENCES Promociones(idPromociones)
);
