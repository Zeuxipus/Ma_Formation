<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_ALGORITHME"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" totalBoucles="5000000" maxBoucle="500000" epaisseurPoint="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Taux EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taux"/>
        <item algoitem="CapitalInitial EST_DU_TYPE NOMBRE" code="1#NOMBRE#CapitalInitial"/>
        <item algoitem="NbAnnees EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbAnnees"/>
        <item algoitem="CapitalFinal EST_DU_TYPE NOMBRE" code="1#NOMBRE#CapitalFinal"/>
        <item algoitem="Interets EST_DU_TYPE NOMBRE" code="1#NOMBRE#Interets"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrer le capital de départ (en €) : &quot;" code="4#Entrer le capital de départ (en €) : #0"/>
        <item algoitem="LIRE CapitalInitial" code="2#CapitalInitial#pasliste"/>
        <item algoitem="AFFICHER &quot;Taux de rendement (en %) : &quot;" code="4#Taux de rendement (en %) : #0"/>
        <item algoitem="LIRE Taux" code="2#Taux#pasliste"/>
        <item algoitem="AFFICHER &quot;Durée du placement (en années) : &quot;" code="4#Durée du placement (en années) : #0"/>
        <item algoitem="LIRE NbAnnees" code="2#NbAnnees#pasliste"/>
        <item algoitem="CapitalFinal PREND_LA_VALEUR floor(CapitalInitial*pow((1+Taux/100),NbAnnees))        " code="5#CapitalFinal#floor(CapitalInitial*pow((1+Taux/100),NbAnnees))        #pasliste"/>
        <item algoitem="Interets PREND_LA_VALEUR CapitalFinal-CapitalInitial" code="5#Interets#CapitalFinal-CapitalInitial#pasliste"/>
        <item algoitem="AFFICHER &quot;Le capital final s'élève à : &quot;" code="4#Le capital final s'élève à : #0"/>
        <item algoitem="AFFICHER CapitalFinal" code="3#CapitalFinal#0#pasliste"/>
        <item algoitem="AFFICHER &quot; Euros&quot;" code="4# Euros#1"/>
        <item algoitem="AFFICHER &quot;Le montant des intérêts s'élèvent à :&quot;" code="4#Le montant des intérêts s'élèvent à :#0"/>
        <item algoitem="AFFICHER Interets" code="3#Interets#0#pasliste"/>
        <item algoitem="AFFICHER &quot; Euros&quot;" code="4# Euros#1"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
