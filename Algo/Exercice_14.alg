<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER Somme"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="Nb_User EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nb_User"/>
        <item algoitem="Somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#Somme"/>
        <item algoitem="Resultat EST_DU_TYPE CHAINE" code="1#CHAINE#Resultat"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Choisir un nombre :&quot;" code="4#Choisir un nombre :#1"/>
        <item algoitem="LIRE Nb_User" code="2#Nb_User#pasliste"/>
        <item algoitem="Somme PREND_LA_VALEUR 0" code="5#Somme#0#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 1 A Nb_User" code="12#i#1#Nb_User">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (i==1) ALORS" code="6#i==1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="Resultat PREND_LA_VALEUR i" code="5#Resultat#i#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="Resultat PREND_LA_VALEUR Resultat +&quot;+&quot;+i" code="5#Resultat#Resultat +&quot;+&quot;+i#pasliste"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="Somme PREND_LA_VALEUR Somme+i" code="5#Somme#Somme+i#pasliste"/>
            <item algoitem="AFFICHER Resultat" code="3#Resultat#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;La somme des entiers jusqu'à &quot;" code="4#La somme des entiers jusqu'à #0"/>
        <item algoitem="AFFICHER Nb_User" code="3#Nb_User#0#pasliste"/>
        <item algoitem="AFFICHER &quot; est : &quot;" code="4# est : #0"/>
        <item algoitem="AFFICHER Somme" code="3#Somme#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
