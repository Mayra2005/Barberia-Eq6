CREATE TABLE Citas (
    idCitas INT AUTO_INCREMENT,
    idEstilos INT,
    idClientes INT,
    idEmpleados INT,
    fecha DATE,
    hora TIME,
    estado VARCHAR(20),
    PRIMARY KEY (idCitas),
    FOREIGN KEY (idEstilos) REFERENCES Estilos(idEstilos),
    FOREIGN KEY (idClientes) REFERENCES Clientes(idClientes),
    FOREIGN KEY (idEmpleados) REFERENCES Empleados(idEmpleados)
);
