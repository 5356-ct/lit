# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.20)
# Database: lit_development
# Generation Time: 2017-12-01 22:45:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table haulers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `haulers`;

CREATE TABLE `haulers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `truck_description` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `haulers` WRITE;
/*!40000 ALTER TABLE `haulers` DISABLE KEYS */;

INSERT INTO `haulers` (`id`, `full_name`, `phone_number`, `truck_description`, `code`)
VALUES
	(1,'Meh','foo','small truck',NULL),
	(2,'Mr Man','bar','huge truck',NULL),
	(3,'NULL','6262367572',NULL,NULL),
	(4,'NULL','6262367573',NULL,5315);

/*!40000 ALTER TABLE `haulers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table jobs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `jobs`;

CREATE TABLE `jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hauler_id` int(11) DEFAULT NULL,
  `mover_id` int(11) DEFAULT NULL,
  `number_of_rooms` int(11) DEFAULT NULL,
  `job_start_time` datetime DEFAULT NULL,
  `job_end_time` datetime DEFAULT NULL,
  `max_price` decimal(10,0) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `done` tinyint(1) DEFAULT NULL,
  `in_progress` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;

INSERT INTO `jobs` (`id`, `hauler_id`, `mover_id`, `number_of_rooms`, `job_start_time`, `job_end_time`, `max_price`, `description`, `active`, `done`, `in_progress`)
VALUES
	(1,NULL,4,NULL,NULL,NULL,NULL,NULL,0,0,0),
	(2,NULL,4,NULL,NULL,NULL,NULL,NULL,0,0,0),
	(3,NULL,4,NULL,NULL,NULL,NULL,NULL,0,0,0),
	(4,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(5,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(6,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(7,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(8,1,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(9,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(10,4,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(11,NULL,4,4,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(12,NULL,4,20,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,0,0),
	(13,4,4,25,'2015-03-25 12:00:00','2015-03-25 20:30:00',450,'moving on up',0,1,0);

/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table movers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `movers`;

CREATE TABLE `movers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `movers` WRITE;
/*!40000 ALTER TABLE `movers` DISABLE KEYS */;

INSERT INTO `movers` (`id`, `full_name`, `phone_number`, `code`)
VALUES
	(1,NULL,'6262367570',NULL),
	(2,NULL,'foo',NULL),
	(3,'NULL','6262367571',9535),
	(4,'NULL','6262367572',3444);

/*!40000 ALTER TABLE `movers` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
