<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="Annee EST_DU_TYPE NOMBRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Taux" algoitem="Taux EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbHab" algoitem="nbHab EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbAnnee" algoitem="nbAnnee EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Annee" algoitem="Annee EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Taux#0.089#pasliste" algoitem="Taux PREND_LA_VALEUR 0.089"/>
        <item code="5#nbHab#96209#pasliste" algoitem="nbHab PREND_LA_VALEUR 96209"/>
        <item code="5#Annee#2015#pasliste" algoitem="Annee PREND_LA_VALEUR 2015"/>
        <item code="15#nbHab&lt;120000" algoitem="TANT_QUE (nbHab&lt;120000) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#nbHab#nbHab+(Taux*nbHab/100)#pasliste" algoitem="nbHab PREND_LA_VALEUR nbHab+(Taux*nbHab/100)"/>
            <item code="5#nbHab#nbAnnee+1#pasliste" algoitem="nbHab PREND_LA_VALEUR nbAnnee+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Il faut #0" algoitem="AFFICHER &quot;Il faut &quot;"/>
        <item code="3#nbAnnee#0#pasliste" algoitem="AFFICHER nbAnnee"/>
        <item code="4# années pour atteindre la population de #0" algoitem="AFFICHER &quot; années pour atteindre la population de &quot;"/>
        <item code="3#nbHab#0#pasliste" algoitem="AFFICHER nbHab"/>
        <item code="4# habitants. Nous serons en #0" algoitem="AFFICHER &quot; habitants. Nous serons en &quot;"/>
        <item code="20#2015-nbAnnee#0" algoitem="AFFICHERCALCUL 2015-nbAnnee"/>
        <item code="103#commentaire" algoitem=""/>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
