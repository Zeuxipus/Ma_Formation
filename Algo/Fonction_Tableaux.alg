<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER nbre"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbre" algoitem="nbre EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#tableau" algoitem="tableau EST_DU_TYPE LISTE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#nbre#0#pasliste" algoitem="nbre PREND_LA_VALEUR 0"/>
        <item code="5#tableau#15#0" algoitem="tableau[0] PREND_LA_VALEUR 15"/>
        <item code="5#tableau#9#1" algoitem="tableau[1] PREND_LA_VALEUR 9"/>
        <item code="5#tableau#17#2" algoitem="tableau[2] PREND_LA_VALEUR 17"/>
        <item code="5#tableau#8#3" algoitem="tableau[3] PREND_LA_VALEUR 8"/>
        <item code="5#tableau#5#4" algoitem="tableau[4] PREND_LA_VALEUR 5"/>
        <item code="5#tableau#11#5" algoitem="tableau[5] PREND_LA_VALEUR 11"/>
        <item code="12#i#0#6" algoitem="POUR i ALLANT_DE 0 A 6">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#tableau[i]>10" algoitem="SI (tableau[i]>10) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#nbre#nbre+1#pasliste" algoitem="nbre PREND_LA_VALEUR nbre+1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Le nombre de notes supérieur à 10 est : #0" algoitem="AFFICHER &quot;Le nombre de notes supérieur à 10 est : &quot;"/>
        <item code="3#nbre#0#pasliste" algoitem="AFFICHER nbre"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
