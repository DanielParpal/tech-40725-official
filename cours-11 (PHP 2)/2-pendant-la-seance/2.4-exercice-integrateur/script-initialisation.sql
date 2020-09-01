DROP TABLE IF EXISTS `recettes_chocolats_favoris`;

CREATE TABLE `recettes_chocolats_favoris` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `recettes_chocolats_favoris` (`id`, `titre`, `description`, `image`, `url`)
VALUES
	(1,'ÉCORCES MAGIQUES AU CHOCOLAT, AUX ÉPICES ET AUX CANNEBERGES BIO','Écorces « magiques »? Oui, oui! La magie s’opère dès que les canneberges fraîches entrent en contact avec le chocolat!','images/gateau-canneberges.png','https://www.chocolatsfavoris.com/recettes/ecorces-magiques-au-chocolat-aux-epices-et-aux-canneberges-bio'),
	(2,'GÂTEAU ÉCLATÉ',"Le seul, l'unique... Le gâteaux Éclaté maison!",'images/gateau-eclate.png','https://www.chocolatsfavoris.com/recettes/gateau-eclate'),
	(3,'PÂTE À CHOUX','Pour faire votre pâte à choux favorite!','images/pate-choux.png','https://www.chocolatsfavoris.com/recettes/puff-pastry');
