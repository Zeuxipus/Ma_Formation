<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FONCTIONS_UTILISEES" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" epaisseurLigne="2" totalBoucles="5000000" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nbCopies EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbCopies"/>
        <item algoitem="Prix EST_DU_TYPE NOMBRE" code="1#NOMBRE#Prix"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez saisir le nombre de copies&quot;" code="4#Veuillez saisir le nombre de copies#0"/>
        <item algoitem="LIRE nbCopies" code="2#nbCopies#pasliste"/>
        <item algoitem="SI (nbCopies&lt;10) ALORS" code="6#nbCopies&lt;10">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="Prix PREND_LA_VALEUR nbCopies * 0.5" code="5#Prix#nbCopies * 0.5#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (nbCopies>=10 ET nbCopies&lt;=20) ALORS" code="6#nbCopies>=10 ET nbCopies&lt;=20">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="Prix PREND_LA_VALEUR nbCopies*0.4" code="5#Prix#nbCopies*0.4#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="Prix PREND_LA_VALEUR nbCopies*0.3" code="5#Prix#nbCopies*0.3#pasliste"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Le prix à payer est de &quot;" code="4#Le prix à payer est de #0"/>
        <item algoitem="AFFICHER Prix" code="3#Prix#0#pasliste"/>
        <item algoitem="AFFICHER &quot;  Euros&quot;" code="4#  Euros#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
