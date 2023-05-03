<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="MoyNote PREND_LA_VALEUR round(MoyNote*100)/100" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Notes" algoitem="Notes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#GrdeNote" algoitem="GrdeNote EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#PttNote" algoitem="PttNote EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#MoyNote" algoitem="MoyNote EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NbdeNotes" algoitem="NbdeNotes EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#GrdeNote#0#pasliste" algoitem="GrdeNote PREND_LA_VALEUR 0"/>
        <item code="5#PttNote#20#pasliste" algoitem="PttNote PREND_LA_VALEUR 20"/>
        <item code="5#MoyNote#0#pasliste" algoitem="MoyNote PREND_LA_VALEUR 0"/>
        <item code="4#Veuillez saisir les notes de l'élève :#0" algoitem="AFFICHER &quot;Veuillez saisir les notes de l'élève :&quot;"/>
        <item code="15#Notes!=777" algoitem="TANT_QUE (Notes!=777) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#Notes#pasliste" algoitem="LIRE Notes"/>
            <item code="6#Notes>GrdeNote ET Notes!=777" algoitem="SI (Notes>GrdeNote ET Notes!=777) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#GrdeNote#Notes#pasliste" algoitem="GrdeNote PREND_LA_VALEUR Notes"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#Notes&lt;PttNote ET Notes!=777" algoitem="SI (Notes&lt;PttNote ET Notes!=777) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#PttNote#Notes#pasliste" algoitem="PttNote PREND_LA_VALEUR Notes"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#Notes!=777" algoitem="SI (Notes!=777) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#NbdeNotes#NbdeNotes+1#pasliste" algoitem="NbdeNotes PREND_LA_VALEUR NbdeNotes+1"/>
                <item code="5#MoyNote#MoyNote+Notes#pasliste" algoitem="MoyNote PREND_LA_VALEUR MoyNote+Notes"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#MoyNote#MoyNote/NbdeNotes#pasliste" algoitem="MoyNote PREND_LA_VALEUR MoyNote/NbdeNotes"/>
        <item code="5#MoyNote#round(MoyNote*100)/100#pasliste" algoitem="MoyNote PREND_LA_VALEUR round(MoyNote*100)/100"/>
        <item code="4#La note max est :#0" algoitem="AFFICHER &quot;La note max est :&quot;"/>
        <item code="3#GrdeNote#1#pasliste" algoitem="AFFICHER GrdeNote"/>
        <item code="4#La note min est : #0" algoitem="AFFICHER &quot;La note min est : &quot;"/>
        <item code="3#PttNote#1#pasliste" algoitem="AFFICHER PttNote"/>
        <item code="4#Moyenne de l'élève : #0" algoitem="AFFICHER &quot;Moyenne de l'élève : &quot;"/>
        <item code="3#MoyNote#0#pasliste" algoitem="AFFICHER MoyNote"/>
        <item code="4# /20#0" algoitem="AFFICHER &quot; /20&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
