<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="TANT_QUE (Chiffre &lt;=1 OU Chiffre>=3) FAIRE"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#Chiffre"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Merci de saisir un chiffre entre 1 et 3 : &quot;" code="4#Merci de saisir un chiffre entre 1 et 3 : #1"/>
        <item algoitem="LIRE Chiffre" code="2#Chiffre#pasliste"/>
        <item algoitem="TANT_QUE (Chiffre &lt;=1 OU Chiffre>=3) FAIRE" code="15#Chiffre &lt;=1 OU Chiffre>=3">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;Try Again&quot;" code="4#Try Again#1"/>
            <item algoitem="LIRE Chiffre" code="2#Chiffre#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Nice !&quot;" code="4#Nice !#1"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
