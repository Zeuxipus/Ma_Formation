<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; année(s), votre capital vaut : &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Taux EST_DU_TYPE NOMBRE" code="1#NOMBRE#Taux"/>
        <item algoitem="CapitalInitial EST_DU_TYPE NOMBRE" code="1#NOMBRE#CapitalInitial"/>
        <item algoitem="NbAnnees EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbAnnees"/>
        <item algoitem="CapitalFinal EST_DU_TYPE NOMBRE" code="1#NOMBRE#CapitalFinal"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Quel est le capital de départ (en €) : &quot;" code="4#Quel est le capital de départ (en €) : #1"/>
        <item algoitem="LIRE CapitalInitial" code="2#CapitalInitial#pasliste"/>
        <item algoitem="AFFICHER &quot;Quel taux :&quot;" code="4#Quel taux :#1"/>
        <item algoitem="LIRE Taux" code="2#Taux#pasliste"/>
        <item algoitem="NbAnnees PREND_LA_VALEUR 0" code="5#NbAnnees#0#pasliste"/>
        <item algoitem="TANT_QUE (CapitalFinal&lt;(CapitalInitial*2) ) FAIRE" code="15#CapitalFinal&lt;(CapitalInitial*2) ">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="NbAnnees PREND_LA_VALEUR NbAnnees+1" code="5#NbAnnees#NbAnnees+1#pasliste"/>
            <item algoitem="CapitalFinal PREND_LA_VALEUR floor(CapitalInitial*pow(1+Taux/100,NbAnnees))" code="5#CapitalFinal#floor(CapitalInitial*pow(1+Taux/100,NbAnnees))#pasliste"/>
            <item algoitem="AFFICHER &quot;Après &quot;" code="4#Après #1"/>
            <item algoitem="AFFICHER NbAnnees" code="3#NbAnnees#0#pasliste"/>
            <item algoitem="AFFICHER &quot; année(s), votre capital vaut : &quot;" code="4# année(s), votre capital vaut : #1"/>
            <item algoitem="AFFICHER CapitalFinal" code="3#CapitalFinal#0#pasliste"/>
            <item algoitem="AFFICHER &quot; Euros&quot;" code="4# Euros#1"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Pour doubler le capital de départ il faut : &quot;" code="4#Pour doubler le capital de départ il faut : #1"/>
        <item algoitem="AFFICHER NbAnnees" code="3#NbAnnees#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
