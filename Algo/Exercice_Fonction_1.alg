<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#ComparaisonNombre#Nb1,Nb2" algoitem="FONCTION ComparaisonNombre(Nb1,Nb2)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="6#Nombre1>Nombre2" algoitem="SI (Nombre1>Nombre2) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#Nb1" algoitem="RENVOYER Nb1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="205#Nb2" algoitem="RENVOYER Nb2"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Nombre1" algoitem="Nombre1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nombre2" algoitem="Nombre2 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Resultat" algoitem="Resultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Sasir un premier nombre : #0" algoitem="AFFICHER &quot;Sasir un premier nombre : &quot;"/>
        <item code="2#Nombre1#pasliste" algoitem="LIRE Nombre1"/>
        <item code="4#Saisir un deuxième nombre : #0" algoitem="AFFICHER &quot;Saisir un deuxième nombre : &quot;"/>
        <item code="2#Nombre2#pasliste" algoitem="LIRE Nombre2"/>
        <item code="5#Resultat#ComparaisonNombre(Nombre1,Nombre2)#pasliste" algoitem="Resultat PREND_LA_VALEUR ComparaisonNombre(Nombre1,Nombre2)"/>
        <item code="4#Le nombre le plus grand est : #0" algoitem="AFFICHER &quot;Le nombre le plus grand est : &quot;"/>
        <item code="3#Resultat#0#pasliste" algoitem="AFFICHER Resultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
