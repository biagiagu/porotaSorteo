drop database if exists porota;
create database porota;
use porota;


drop table if exists usuarios;
CREATE TABLE `usuarios` (
  `id` int,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `dni` int,
  `mail` varchar(50),
  `tel` int,
  `foto` varchar(50),
  `idPerfil` int,
  `sexo` varchar(20),
  PRIMARY KEY (`id`)
);

drop table if exists grupos;
CREATE TABLE `grupos` (
  `id` int,
  `fecha` date,
  `nombre` varchar(50),
  `status` varchar(10),
  `fechaSorteo` date,
  `fechaVigencia` date,
  PRIMARY KEY (`id`)
);

drop table if exists parejas;
CREATE TABLE `parejas` (
  `idPareja` int,
  `idGrupo` int,
  `idPersona1` int,
  `idPersona2` int,
  PRIMARY KEY (`idPareja`),
  KEY `FK` (`idGrupo`)
);

drop table if exists perfiles;
CREATE TABLE `perfiles` (
  `id` int,
  `nombre` varchar(20),
  KEY `pk` (`id`)
);


