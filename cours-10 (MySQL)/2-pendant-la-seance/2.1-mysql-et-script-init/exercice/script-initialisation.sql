
DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `picture_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `articles` (`id`, `description`, `price`, `picture_url`, `created_at`, `updated_at`)
VALUES
	(1,'Chemise en jeans',49.99,'resources/images/shirt.jpg',NULL,NULL),
	(2,'Pull en laine',64.99,'resources/images/pull.jpg',NULL,NULL),
	(3,'Sac à dos',54.99,'resources/images/bag.jpg',NULL,NULL);
