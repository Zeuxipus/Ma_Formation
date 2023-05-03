<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot; ----&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Multiple" algoitem="Multiple EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="12#i#1#10" algoitem="POUR i ALLANT_DE 1 A 10">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Table de #0" algoitem="AFFICHER &quot;Table de &quot;"/>
            <item code="3#i#1#pasliste" algoitem="AFFICHER i"/>
            <item code="12#Multiple#1#10" algoitem="POUR Multiple ALLANT_DE 1 A 10">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="3#i#0#pasliste" algoitem="AFFICHER i"/>
                <item code="4# * #0" algoitem="AFFICHER &quot; * &quot;"/>
                <item code="3#Multiple#0#pasliste" algoitem="AFFICHER Multiple"/>
                <item code="4# = #0" algoitem="AFFICHER &quot; = &quot;"/>
                <item code="20#i*Multiple#1" algoitem="AFFICHERCALCUL i*Multiple"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="4# ----#1" algoitem="AFFICHER &quot; ----&quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
