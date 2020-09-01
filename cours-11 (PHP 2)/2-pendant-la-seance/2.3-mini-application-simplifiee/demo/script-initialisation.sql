DROP TABLE IF EXISTS `cours_fitness`;

CREATE TABLE `cours_fitness` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `instructeur` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `cours_fitness` (`id`, `date`, `instructeur`, `titre`)
VALUES
	(1,'22 octobre 2019','Martha','X-fit (Klub)'),
	(2,'26 octobre 2019','Paul','Yoga Flow avec musique'),
	(3,'31 octobre 2019','Caroline','Bootcamp et course');
