<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="nombre1 PREND_LA_VALEUR perimetreRectangle(longueur,largeur)"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#perimetreRectangle#Nb1,Nb2" algoitem="FONCTION perimetreRectangle(Nb1,Nb2)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#perimetre" algoitem="perimetre EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#perimetre#2*(Nb1+Nb2)#pasliste" algoitem="perimetre PREND_LA_VALEUR 2*(Nb1+Nb2)"/>
            <item code="205#perimetre" algoitem="RENVOYER perimetre"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nombre1" algoitem="nombre1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#longueur" algoitem="longueur EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#largeur" algoitem="largeur EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez saisir la longueur en cm : #0" algoitem="AFFICHER &quot;Veuillez saisir la longueur en cm : &quot;"/>
        <item code="2#longueur#pasliste" algoitem="LIRE longueur"/>
        <item code="4#Veuillez saisir la largeur en cm : #0" algoitem="AFFICHER &quot;Veuillez saisir la largeur en cm : &quot;"/>
        <item code="2#largeur#pasliste" algoitem="LIRE largeur"/>
        <item code="5#nombre1#perimetreRectangle(longueur,largeur)#pasliste" algoitem="nombre1 PREND_LA_VALEUR perimetreRectangle(longueur,largeur)"/>
        <item code="4#Le périmetre du rectangle est de : #0" algoitem="AFFICHER &quot;Le périmetre du rectangle est de : &quot;"/>
        <item code="3#nombre1#0#pasliste" algoitem="AFFICHER nombre1"/>
        <item code="4# cm#0" algoitem="AFFICHER &quot; cm&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
