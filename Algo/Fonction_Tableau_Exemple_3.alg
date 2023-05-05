<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;La liste des notes saisies est :&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="n EST_DU_TYPE LISTE" code="1#LISTE#n"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Merci de bien vouloir saisir 15 notes :&quot;" code="4#Merci de bien vouloir saisir 15 notes :#1"/>
        <item algoitem="POUR i ALLANT_DE 0 A 14" code="12#i#0#14">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE n[i]" code="2#n#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;La liste des notes saisies est :&quot;" code="4#La liste des notes saisies est :#1"/>
        <item algoitem="POUR i ALLANT_DE 0 A 14" code="12#i#0#14">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER n[i]" code="3#n#0#i"/>
            <item algoitem="AFFICHER &quot;  &quot;" code="4#  #0"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
