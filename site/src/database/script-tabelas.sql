-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE O_Terno;
USE O_Terno;

CREATE TABLE usuario (
id_user INT PRIMARY KEY auto_increment,
Nome varchar(45),
email varchar(45),
senha varchar(45),
idade int,
album varchar(30), check (album = "66" or album = "Melhor do que parece" or album = "O terno" or album = "atras/alem")
);