<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Afin de déterminer la nature du triangle&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="AB EST_DU_TYPE NOMBRE" code="1#NOMBRE#AB"/>
        <item algoitem="BC EST_DU_TYPE NOMBRE" code="1#NOMBRE#BC"/>
        <item algoitem="CA EST_DU_TYPE NOMBRE" code="1#NOMBRE#CA"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Afin de déterminer la nature du triangle&quot;" code="4#Afin de déterminer la nature du triangle#1"/>
        <item algoitem="AFFICHER &quot;Veuillez entrer la longueur du segment AB (en cm) : &quot;" code="4#Veuillez entrer la longueur du segment AB (en cm) : #1"/>
        <item algoitem="LIRE AB" code="2#AB#pasliste"/>
        <item algoitem="AFFICHER &quot;Veuillez entrer la longueur du segment BC (en cm) : &quot;" code="4#Veuillez entrer la longueur du segment BC (en cm) : #1"/>
        <item algoitem="LIRE BC" code="2#BC#pasliste"/>
        <item algoitem="AFFICHER &quot;Veuillez entrer la longueur du segment CA (en cm) : &quot;" code="4#Veuillez entrer la longueur du segment CA (en cm) : #1"/>
        <item algoitem="LIRE CA" code="2#CA#pasliste"/>
        <item algoitem="SI (AB+BC ==CA+AB) ALORS" code="6#AB+BC ==CA+AB">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Le triangle est équilatéral&quot;" code="4#Le triangle est équilatéral#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (AB==CA) ALORS" code="6#AB==CA">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Le triangle est isocèle en A mais n'est pas équilatéral&quot;" code="4#Le triangle est isocèle en A mais n'est pas équilatéral#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (BC==AB) ALORS" code="6#BC==AB">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Le triangle est isocèle en B mais n'est pas équilatéral&quot;" code="4#Le triangle est isocèle en B mais n'est pas équilatéral#1"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (BC==CA) ALORS" code="6#BC==CA">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="AFFICHER &quot;Le triangle est isocèle en C mais n'est pas équilatéral&quot;" code="4#Le triangle est isocèle en C mais n'est pas équilatéral#1"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="AFFICHER &quot;Le triangle n'est ni isocèle en A, ni en B, ni en C&quot;" code="4#Le triangle n'est ni isocèle en A, ni en B, ni en C#1"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
