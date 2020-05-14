drop database if exists porota;
create database porota;
use porota;

drop table if exists usuarios;
CREATE TABLE `usuarios` (
    `id_usuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `dni` INT UNSIGNED,
    `password` VARCHAR(50) not null,
    `mail` VARCHAR(50) not null,
    `telefono` INT UNSIGNED,
    `fecha_nacimiento` DATE,
    `foto` VARCHAR(50),
    `id_perfil` INT1 UNSIGNED,
    `sexo` VARCHAR(20),
    `direccion_l1` VARCHAR(50),
    `direccion_l2` VARCHAR(50),
    `codigo_postal` VARCHAR(10),
    `ciudad` VARCHAR(20),
    `id_provincia` INT2 UNSIGNED,
    `id_pais` INT2 UNSIGNED,
    PRIMARY KEY (`id_usuario`)
);

drop table if exists provincias;
CREATE TABLE `provincias` (
  id_provincia INT2 UNSIGNED NOT NULL AUTO_INCREMENT,
  id_pais int2 unsigned,
  nombre_provincia varchar(50),
  PRIMARY KEY (id_provincia)
);

drop table if exists paises;
CREATE TABLE `paises` (
  id_pais INT2 UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_pais varchar(50),
  flag varchar(50),
  PRIMARY KEY (id_pais)
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


