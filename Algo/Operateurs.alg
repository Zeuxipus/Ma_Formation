<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Le nombre n'est pas divisible par 3&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="X EST_DU_TYPE NOMBRE" code="1#NOMBRE#X"/>
        <item algoitem="Y EST_DU_TYPE NOMBRE" code="1#NOMBRE#Y"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuiller saisir un nombre : &quot;" code="4#Veuiller saisir un nombre : #0"/>
        <item algoitem="LIRE X" code="2#X#pasliste"/>
        <item algoitem="Y PREND_LA_VALEUR 3" code="5#Y#3#pasliste"/>
        <item algoitem="SI (X%Y==0) ALORS" code="6#X%Y==0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Le nombre est divisible par 3&quot;" code="4#Le nombre est divisible par 3#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Le nombre n'est pas divisible par 3&quot;" code="4#Le nombre n'est pas divisible par 3#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
