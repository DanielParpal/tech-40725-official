DROP TABLE IF EXISTS `examen_commandes`;

CREATE TABLE `examen_commandes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_reception` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correcte` boolean COLLATE utf8_unicode_ci NOT NULL,
  `description_probleme` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `examen_commandes` (`id`, `description`, `date_reception`, `correcte`, `description_probleme`)
VALUES
	(1, '8 CONVERSE CTAS SMILEY', '2020-03-17' , 1, ''),
	(2, '9 DR MARTENS 1461 BEX', '2020-03-17', 1, ''),
	(3, '12 ADIDAS STAN SMITH', '2020-03-17', 0, 'Le talon d\'une des paires est abimé');
