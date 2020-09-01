DROP TABLE IF EXISTS `examen_refrigerateurs`;

CREATE TABLE `examen_refrigerateurs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prix` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `examen_refrigerateurs` (`id`, `titre`, `prix`, `image`)
VALUES
	(1,'Fisher & Paykel Bottom Freezer Refrigerator - RF170BLPX6-N',2699,'images/FisherPaykel.png'),
	(2,'Hisense Bottom Freezer Refrigerator - RB15N6ASE',699,'images/Hisense.png'),
	(3,'LG Bottom Freezer and French Doors Door-in-Door® Refrigerator - LFXS28566M',2599,'images/LG.png'),
	(4,'Samsung Bottom Freezer and French Doors Refrigerator - RF18HFENBSGAC',1499,'images/Samsung.png'),
	(5,'Frigidaire Top Freezer Refrigerator - FGTR1837TD',1099,'images/Frigidaire.png');
