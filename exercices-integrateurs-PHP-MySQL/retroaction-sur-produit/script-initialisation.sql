
# Dump of table exercice_retroactions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `exercice_retroactions_produits`;

CREATE TABLE `exercice_retroactions_produits` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `auteur` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `retroaction` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
