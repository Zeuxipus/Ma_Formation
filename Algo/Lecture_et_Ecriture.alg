<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER A"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez saisir un nombre : &quot;" code="4#Veuillez saisir un nombre : #0"/>
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="B PREND_LA_VALEUR 2*A" code="5#B#2*A#pasliste"/>
        <item algoitem="AFFICHER &quot;Le double de &quot;" code="4#Le double de #0"/>
        <item algoitem="AFFICHER A" code="3#A#0#pasliste"/>
        <item algoitem="AFFICHER &quot;est &quot;" code="4#est #0"/>
        <item algoitem="AFFICHERCALCUL B" code="20#B#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
