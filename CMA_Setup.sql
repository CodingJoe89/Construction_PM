CREATE DATABASE  IF NOT EXISTS `CMA` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `CMA`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: CMA
-- ------------------------------------------------------
-- Server version	5.6.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies_has_projects`
--

DROP TABLE IF EXISTS `companies_has_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies_has_projects` (
  `companies_company_id` int(11) NOT NULL,
  `projects_project_id` int(11) NOT NULL,
  KEY `fk_companies_has_projects_companies1_idx` (`companies_company_id`),
  KEY `fk_companies_has_projects_projects1_idx` (`projects_project_id`),
  CONSTRAINT `fk_companies_has_projects_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_has_projects_projects1` FOREIGN KEY (`projects_project_id`) REFERENCES `projects` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies_has_projects`
--

LOCK TABLES `companies_has_projects` WRITE;
/*!40000 ALTER TABLE `companies_has_projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies_has_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies_has_specialty`
--

DROP TABLE IF EXISTS `companies_has_specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies_has_specialty` (
  `specialty_specialty_id` int(11) NOT NULL,
  `companies_company_id` int(11) NOT NULL,
  KEY `fk_companies_has_specialty_specialty1_idx` (`specialty_specialty_id`),
  KEY `fk_companies_has_specialty_companies1_idx` (`companies_company_id`),
  CONSTRAINT `fk_companies_has_specialty_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_has_specialty_specialty1` FOREIGN KEY (`specialty_specialty_id`) REFERENCES `specialty` (`specialty_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies_has_specialty`
--

LOCK TABLES `companies_has_specialty` WRITE;
/*!40000 ALTER TABLE `companies_has_specialty` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies_has_specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `project_name` varchar(45) NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialty`
--

DROP TABLE IF EXISTS `specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialty` (
  `specialty_id` int(11) NOT NULL,
  `specialty_name` varchar(45) NOT NULL,
  PRIMARY KEY (`specialty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialty`
--

LOCK TABLES `specialty` WRITE;
/*!40000 ALTER TABLE `specialty` DISABLE KEYS */;
/*!40000 ALTER TABLE `specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `task_name` varchar(45) NOT NULL,
  `projects_project_id` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `estimated_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  KEY `fk_tasks_projects1_idx` (`projects_project_id`),
  CONSTRAINT `fk_tasks_projects1` FOREIGN KEY (`projects_project_id`) REFERENCES `projects` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `profile` varchar(45) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_companies`
--

DROP TABLE IF EXISTS `users_has_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_has_companies` (
  `users_user_id` int(11) NOT NULL,
  `companies_company_id` int(11) NOT NULL,
  KEY `fk_users_has_companies_users1_idx` (`users_user_id`),
  KEY `fk_users_has_companies_companies1_idx` (`companies_company_id`),
  CONSTRAINT `fk_users_has_companies_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_companies_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_companies`
--

LOCK TABLES `users_has_companies` WRITE;
/*!40000 ALTER TABLE `users_has_companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_has_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_specialty`
--

DROP TABLE IF EXISTS `users_has_specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_has_specialty` (
  `specialty_specialty_id` int(11) NOT NULL,
  `users_user_id` int(11) NOT NULL,
  KEY `fk_users_has_specialty_specialty1_idx` (`specialty_specialty_id`),
  KEY `fk_users_has_specialty_users1_idx` (`users_user_id`),
  CONSTRAINT `fk_users_has_specialty_specialty1` FOREIGN KEY (`specialty_specialty_id`) REFERENCES `specialty` (`specialty_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_specialty_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_specialty`
--

LOCK TABLES `users_has_specialty` WRITE;
/*!40000 ALTER TABLE `users_has_specialty` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_has_specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_has_tasks`
--

DROP TABLE IF EXISTS `users_has_tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_has_tasks` (
  `users_user_id` int(11) NOT NULL,
  `tasks_task_id` int(11) NOT NULL,
  KEY `fk_users_has_tasks_users1_idx` (`users_user_id`),
  KEY `fk_users_has_tasks_tasks1_idx` (`tasks_task_id`),
  CONSTRAINT `fk_users_has_tasks_tasks1` FOREIGN KEY (`tasks_task_id`) REFERENCES `tasks` (`task_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_tasks_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_has_tasks`
--

LOCK TABLES `users_has_tasks` WRITE;
/*!40000 ALTER TABLE `users_has_tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_has_tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-28 19:50:18
