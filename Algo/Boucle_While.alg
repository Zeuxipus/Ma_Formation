<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;La valeur cherchée de N est N = &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" totalBoucles="5000000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Somme" algoitem="Somme EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#I#0#pasliste" algoitem="I PREND_LA_VALEUR 0"/>
        <item code="5#Somme#0#pasliste" algoitem="Somme PREND_LA_VALEUR 0"/>
        <item code="15#Somme&lt;=100" algoitem="TANT_QUE (Somme&lt;=100) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#I#I+1#pasliste" algoitem="I PREND_LA_VALEUR I+1"/>
            <item code="5#Somme#Somme+I#pasliste" algoitem="Somme PREND_LA_VALEUR Somme+I"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#La valeur cherchée de N est N = #0" algoitem="AFFICHER &quot;La valeur cherchée de N est N = &quot;"/>
        <item code="3#I#1#pasliste" algoitem="AFFICHER I"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
