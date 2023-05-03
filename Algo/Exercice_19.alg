<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nb_User" algoitem="Nb_User EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Somme" algoitem="Somme EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#Resultat" algoitem="Resultat EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Choisir un nombre :#1" algoitem="AFFICHER &quot;Choisir un nombre :&quot;"/>
        <item code="2#Nb_User#pasliste" algoitem="LIRE Nb_User"/>
        <item code="5#Somme#0#pasliste" algoitem="Somme PREND_LA_VALEUR 0"/>
        <item code="12#i#1#Nb_User" algoitem="POUR i ALLANT_DE 1 A Nb_User">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#i==1" algoitem="SI (i==1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#Resultat#i#pasliste" algoitem="Resultat PREND_LA_VALEUR i"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="5#Resultat#Resultat +&quot; &quot;+i#pasliste" algoitem="Resultat PREND_LA_VALEUR Resultat +&quot; &quot;+i"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="5#Somme#Somme+i#pasliste" algoitem="Somme PREND_LA_VALEUR Somme+i"/>
            <item code="3#Resultat#1#pasliste" algoitem="AFFICHER Resultat"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
