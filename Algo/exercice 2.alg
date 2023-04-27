<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL B"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
        <item algoitem="TMP EST_DU_TYPE NOMBRE" code="1#NOMBRE#TMP"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="A PREND_LA_VALEUR 1" code="5#A#1#pasliste"/>
        <item algoitem="TMP PREND_LA_VALEUR A" code="5#TMP#A#pasliste"/>
        <item algoitem="B PREND_LA_VALEUR 2" code="5#B#2#pasliste"/>
        <item algoitem="A PREND_LA_VALEUR B" code="5#A#B#pasliste"/>
        <item algoitem="B PREND_LA_VALEUR A" code="5#B#A#pasliste"/>
        <item algoitem="AFFICHERCALCUL A" code="20#A#1"/>
        <item algoitem="AFFICHERCALCUL B" code="20#B#1"/>
        <item algoitem="AFFICHERCALCUL TMP" code="20#TMP#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
