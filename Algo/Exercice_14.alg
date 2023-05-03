<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="TANT_QUE (Nb&lt;=10) FAIRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Nb" algoitem="Nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Entier" algoitem="Entier EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez un chiffre : #0" algoitem="AFFICHER &quot;Entrez un chiffre : &quot;"/>
        <item code="2#Nb#pasliste" algoitem="LIRE Nb"/>
        <item code="5#Nb#Nb+Entier#pasliste" algoitem="Nb PREND_LA_VALEUR Nb+Entier"/>
        <item code="15#Nb&lt;=10" algoitem="TANT_QUE (Nb&lt;=10) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#Entier#Entier+1#pasliste" algoitem="Entier PREND_LA_VALEUR Entier+1"/>
            <item code="5#Nb#Nb+1#pasliste" algoitem="Nb PREND_LA_VALEUR Nb+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="3#Entier#0#pasliste" algoitem="AFFICHER Entier"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
