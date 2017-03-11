-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 05, 2017 at 09:36 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cma`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`company_id`, `company_name`, `updated_at`) VALUES
(0, 'MICROSOFT', '2017-03-05 11:39:43'),
(1, 'GOOGLE', '2017-03-05 11:40:45'),
(2, 'AMAZON', '2017-03-05 11:43:51'),
(3, 'FACEBOOK', '2017-03-05 11:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `companies_has_projects`
--

CREATE TABLE IF NOT EXISTS `companies_has_projects` (
  `companies_company_id` int(11) NOT NULL,
  `projects_project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies_has_projects`
--

INSERT INTO `companies_has_projects` (`companies_company_id`, `projects_project_id`) VALUES
(0, 0),
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `companies_has_specialty`
--

CREATE TABLE IF NOT EXISTS `companies_has_specialty` (
  `specialty_specialty_id` int(11) NOT NULL,
  `companies_company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies_has_specialty`
--

INSERT INTO `companies_has_specialty` (`specialty_specialty_id`, `companies_company_id`) VALUES
(0, 0),
(1, 0),
(1, 1),
(2, 1),
(2, 2),
(3, 2),
(3, 3),
(4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` int(11) NOT NULL,
  `project_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `project_name`) VALUES
(0, 'Project 1'),
(1, 'Project 2'),
(2, 'Project 3'),
(3, 'Project 4');

-- --------------------------------------------------------

--
-- Table structure for table `specialty`
--

CREATE TABLE IF NOT EXISTS `specialty` (
  `specialty_id` int(11) NOT NULL,
  `specialty_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `specialty`
--

INSERT INTO `specialty` (`specialty_id`, `specialty_name`) VALUES
(0, 'Structural'),
(1, 'Mechanical'),
(2, 'Electrical'),
(3, 'Security'),
(4, 'Finishings');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `task_id` int(11) NOT NULL,
  `task_name` varchar(45) NOT NULL,
  `projects_project_id` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `estimated_time` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `task_name`, `projects_project_id`, `start_date`, `end_date`, `estimated_time`) VALUES
(0, 'Task 1', 0, NULL, NULL, NULL),
(1, 'Task 2', 0, NULL, NULL, NULL),
(2, 'Task 3', 0, NULL, NULL, NULL),
(3, 'Task 4', 1, NULL, NULL, NULL),
(4, 'Task 5', 1, NULL, NULL, NULL),
(5, 'Task 6', 1, NULL, NULL, NULL),
(6, 'Task 7', 2, NULL, NULL, NULL),
(7, 'Task 8', 2, NULL, NULL, NULL),
(8, 'Task 9', 2, NULL, NULL, NULL),
(9, 'Task 10', 0, NULL, NULL, NULL),
(10, 'Task 11', 0, NULL, NULL, NULL),
(11, 'Task 12', 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `profile` varchar(45) DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `profile`, `updated_at`) VALUES
(0, 'First 1', 'Last 1', NULL, NULL),
(1, 'First 2', 'Last 2', NULL, NULL),
(2, 'First 3', 'Last 3', NULL, NULL),
(3, 'First 4', 'Last 4', NULL, NULL),
(4, 'First 5', 'Last 5', NULL, NULL),
(5, 'First 6', 'Last 6', NULL, NULL),
(6, 'First 7', 'Last 7', NULL, NULL),
(7, 'First 8', 'Last 8', NULL, NULL),
(8, 'First 9', 'Last 9', NULL, NULL),
(9, 'First 10', 'Last 10', NULL, NULL),
(10, 'First 11', 'Last 11', NULL, NULL),
(11, 'First 12', 'Last 12', NULL, NULL),
(12, 'First 13', 'Last 13', NULL, NULL),
(13, 'First 14', 'Last 14', NULL, NULL),
(14, 'First 15', 'Last 15', NULL, NULL),
(15, 'First 16', 'Last 16', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_has_companies`
--

CREATE TABLE IF NOT EXISTS `users_has_companies` (
  `users_user_id` int(11) NOT NULL,
  `companies_company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_has_companies`
--

INSERT INTO `users_has_companies` (`users_user_id`, `companies_company_id`) VALUES
(0, 0),
(1, 0),
(2, 0),
(3, 0),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 3),
(13, 3),
(14, 3),
(15, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users_has_specialty`
--

CREATE TABLE IF NOT EXISTS `users_has_specialty` (
  `specialty_specialty_id` int(11) NOT NULL,
  `users_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_has_specialty`
--

INSERT INTO `users_has_specialty` (`specialty_specialty_id`, `users_user_id`) VALUES
(0, 0),
(1, 0),
(2, 1),
(3, 1),
(4, 2),
(0, 2),
(1, 3),
(2, 3),
(3, 4),
(4, 4),
(0, 5),
(1, 5),
(2, 6),
(3, 6),
(4, 7),
(0, 7),
(1, 8),
(2, 8),
(3, 9),
(4, 9),
(0, 10),
(1, 10),
(2, 11),
(3, 11),
(4, 12),
(0, 12),
(1, 13),
(2, 13),
(3, 14),
(4, 14),
(0, 15),
(1, 15);

-- --------------------------------------------------------

--
-- Table structure for table `users_has_tasks`
--

CREATE TABLE IF NOT EXISTS `users_has_tasks` (
  `users_user_id` int(11) NOT NULL,
  `tasks_task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_has_tasks`
--

INSERT INTO `users_has_tasks` (`users_user_id`, `tasks_task_id`) VALUES
(0, 0),
(0, 1),
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 3),
(3, 4),
(4, 4),
(4, 5),
(5, 5),
(5, 6),
(6, 6),
(6, 7),
(7, 7),
(7, 8),
(8, 8),
(8, 9),
(9, 9),
(9, 10),
(10, 10),
(10, 11),
(11, 11),
(11, 0),
(12, 0),
(12, 1),
(13, 1),
(13, 2),
(14, 2),
(14, 3),
(15, 3),
(15, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `companies_has_projects`
--
ALTER TABLE `companies_has_projects`
  ADD KEY `fk_companies_has_projects_companies1_idx` (`companies_company_id`),
  ADD KEY `fk_companies_has_projects_projects1_idx` (`projects_project_id`);

--
-- Indexes for table `companies_has_specialty`
--
ALTER TABLE `companies_has_specialty`
  ADD KEY `fk_companies_has_specialty_specialty1_idx` (`specialty_specialty_id`),
  ADD KEY `fk_companies_has_specialty_companies1_idx` (`companies_company_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `specialty`
--
ALTER TABLE `specialty`
  ADD PRIMARY KEY (`specialty_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `fk_tasks_projects1_idx` (`projects_project_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users_has_companies`
--
ALTER TABLE `users_has_companies`
  ADD KEY `fk_users_has_companies_users1_idx` (`users_user_id`),
  ADD KEY `fk_users_has_companies_companies1_idx` (`companies_company_id`);

--
-- Indexes for table `users_has_specialty`
--
ALTER TABLE `users_has_specialty`
  ADD KEY `fk_users_has_specialty_specialty1_idx` (`specialty_specialty_id`),
  ADD KEY `fk_users_has_specialty_users1_idx` (`users_user_id`);

--
-- Indexes for table `users_has_tasks`
--
ALTER TABLE `users_has_tasks`
  ADD KEY `fk_users_has_tasks_users1_idx` (`users_user_id`),
  ADD KEY `fk_users_has_tasks_tasks1_idx` (`tasks_task_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `companies_has_projects`
--
ALTER TABLE `companies_has_projects`
  ADD CONSTRAINT `fk_companies_has_projects_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_companies_has_projects_projects1` FOREIGN KEY (`projects_project_id`) REFERENCES `projects` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `companies_has_specialty`
--
ALTER TABLE `companies_has_specialty`
  ADD CONSTRAINT `fk_companies_has_specialty_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_companies_has_specialty_specialty1` FOREIGN KEY (`specialty_specialty_id`) REFERENCES `specialty` (`specialty_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `fk_tasks_projects1` FOREIGN KEY (`projects_project_id`) REFERENCES `projects` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users_has_companies`
--
ALTER TABLE `users_has_companies`
  ADD CONSTRAINT `fk_users_has_companies_companies1` FOREIGN KEY (`companies_company_id`) REFERENCES `companies` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_companies_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users_has_specialty`
--
ALTER TABLE `users_has_specialty`
  ADD CONSTRAINT `fk_users_has_specialty_specialty1` FOREIGN KEY (`specialty_specialty_id`) REFERENCES `specialty` (`specialty_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_specialty_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users_has_tasks`
--
ALTER TABLE `users_has_tasks`
  ADD CONSTRAINT `fk_users_has_tasks_tasks1` FOREIGN KEY (`tasks_task_id`) REFERENCES `tasks` (`task_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_tasks_users1` FOREIGN KEY (`users_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
