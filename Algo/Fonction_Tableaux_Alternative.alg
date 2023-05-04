<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER notes[i]"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbre" algoitem="nbre EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#notes" algoitem="notes EST_DU_TYPE LISTE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="12#i#0#29" algoitem="POUR i ALLANT_DE 0 A 29">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#notes#floor(20*random())#i" algoitem="notes[i] PREND_LA_VALEUR floor(20*random())"/>
            <item code="4#Note #0" algoitem="AFFICHER &quot;Note &quot;"/>
            <item code="3#i#0#pasliste" algoitem="AFFICHER i"/>
            <item code="4# : #0" algoitem="AFFICHER &quot; : &quot;"/>
            <item code="3#notes#0#i" algoitem="AFFICHER notes[i]"/>
            <item code="4# /20#1" algoitem="AFFICHER &quot; /20&quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#nbre#0#pasliste" algoitem="nbre PREND_LA_VALEUR 0"/>
        <item code="12#i#0#29" algoitem="POUR i ALLANT_DE 0 A 29">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#notes[i]>10" algoitem="SI (notes[i]>10) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#nbre#nbre+1#pasliste" algoitem="nbre PREND_LA_VALEUR nbre+1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Le nombre de notes supérieur à la moyenne est de #0" algoitem="AFFICHER &quot;Le nombre de notes supérieur à la moyenne est de &quot;"/>
        <item code="3#nbre#0#pasliste" algoitem="AFFICHER nbre"/>
        <item code="4# notes#0" algoitem="AFFICHER &quot; notes&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
