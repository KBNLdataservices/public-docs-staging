---
sort: 
---

[test](AAPM.html)

# Delpher - TO SORT OUT

## Resolver



# Geheugen
Ik zie uit die SRU-respons dat je wel een thumbnail kan opvragen: http://resolver.kb.nl/resolve?urn=urn:gvn:RAA01:CA701-B-575&role=thumbnail
http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1&maximumRecords=1000&query=isPartOf%3DRAA01

Maar ik weet een workaround: http://resolver.kb.nl/resolve?urn=urn:gvn:RAA01:CA701-B-575&size=large

Dat werkt vergelijkbaar met de objecten in bv https://geheugen.delpher.nl of alle KB-objectidentifiers die je vindt via 

https://nl.wikipedia.org/w/index.php?title=Speciaal:VerwijzingenZoeken&limit=5000&offset=0&target=https%3A%2F%2Fresolver.kb.nl
en
https://nl.wikipedia.org/w/index.php?title=Speciaal:VerwijzingenZoeken&limit=5000&offset=0&target=http%3A%2F%2Fresolver.kb.nl

•	JSRU
- http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GGC&query=EuropeanaTravel:131H26&recordSchema=dcx&startRecord=1&maximumRecords=1000&sort=
- http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1&maximumRecords=1000&query=isPartOf%3DAHM01

======================

De stappen die je zelf kunt volgen voor het verkrijgen van de pdfs en de beelden (waarbij ik 
•	programeer/scripts skills aanneem, en 
•	dat je die scripts een beetje throttlet/afremt, anders gaan de bulkdownloadalarmbellen bij onze IT-afdeling rinkelen, en 
•	dat de PD-check die je gedaan hebt correct en voor eigen risico is: 

1)	Krantenidentifier (voor 1 krantenaflevering ) heeft steeds de vorm:  ddd:010109729:mpeg21 of MMHCO01:000079808:mpeg21 (de eerste 2 blokjes kunnen anders zijn , maar steeds eindigend op :mpeg21)

2)	Wat je dus moet/wilt hebben/maken is een lijst van identifiers van alle krantenafleveringen waarin je geïnteresseerd bent, waar die fotobladen in voor komen. Dit kan/zal een hele lange lijst worden. Dat zou ik zelf als volgt doen:

Via https://www.delpher.nl/nl/kranten/results?page=1&sortfield=datedesc&cql%5B%5D=(date%3D%2206-02-1903%22)&coll=dddtitel kun je alle krantenafleveringen van een bepaalde datum (in dit geval 6-2-1903) opvragen. 

Uit zo’n pagina met zoekresultaten kun je dan via webscraping de URLs trekken, bij het eerste zoekresultaat is dat https://www.delpher.nl/nl/kranten/view?page=1&sortfield=datedesc&cql%5B%5D=%28date%3D%2206-02-1903%22%29&coll=ddd&format=json&redirect=true&maxperpage=50&resultscoll=dddtitel&identifier=MMHCO01:000079808:mpeg21
, met aan het einde dus die identifier die je wilt hebben

3)	Scriptmatig over alle datums die je wilt hebben itereren en zo een lijst met identifiers van alle krantenafleveringen bouwen

4)	Dan kun je via http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21:pdf de pfd automatisch downloaden (Python-scriptje maken, downloadsnelheid beetje throttelen)

5)	Vervolgens kun je via http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21  http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=DDD:ddd:010109729:mpeg21&metadataPrefix=didl (= didl-bestand) de scans/jpgs gaan opvragen

In dat bestand zie je http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21:p001 voor de eerste pagina (p001) staan. Via http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21:p001:image kun je een JP2 bestand downloaden, maar daar heb je niet zoveel aan, via  

https://imageviewer.kb.nl/ImagingService/imagingService?&id=ddd%3A010109729%3Ampeg21%3Ap001%3Aimage (let op encoding) kun je de bijbehoredne JPG opvragen

En dan itereren over alle krantenpagina’s die in dat didl-bestand genoemd worden

Je zie ook links als http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21:a0002 en http://resolver.kb.nl/resolve?urn=ddd:010109729:mpeg21:a0002:ocr staan, daarmee kun je nog op artikelniveau OCR opvragen. Er zijn helaas geen kant-en-klare jpgs op artikelniveau beschikbaar (dus alleen scans op paginaniveau beschikbaar)
===============================

Concrete re-use cases waarvoor ik KB-APIs bevraagd heb
-	Alternatief front-end voor GvN Kinderboeken : https://ookgezellig.github.io/GVN-Prentenboeken1810-1950/output/06333948X.html  vs https://www.geheugenvannederland.nl/nl/geheugen/view/moeder-hubbard-haar-hond-gekleurde-plaatjes?coll=ngvn&maxperpage=36&page=1&query=hubbard&identifier=PRB01%3A06333948X 
-	Album Jacob Heybloq : https://github.com/ookgezellig/AlbumAmicorumJacobHeyblocq (CCG via SRU)
-	Beelddonaties van GvN-sets aan WMCommons m.b.v. GWToolset bv https://commons.wikimedia.org/wiki/Category:Atlas_van_der_Hagen 


Minpunten die ik tegenkomt bij gebruik van deze APIs in de praktijk, of die ik via feedback uit de Dataredactie en mijn Wikimedia-netwerk oppik
-	Slecht vindbaar, informatie staat verspreid // Geen centraal KB- data-portaal (zoals bv bij https://data.nls.uk/  
-	Verschillende domeinen/afzenders : Kb.nl , bibliotheken.nl, KB-research, Delpher
-	Voor Delpher zijn bv wel datadump (zipfiles) in het Open Kranten Archief beschikbaar, maar er zit geen (publieke) API op Delpher om er dynamisch data uit te kunnen trekken
-	Onvolledig beschreven, of verouderde documentatie (kb.nl/dataservices)
-	Verbinding tussen website/front-end en API onduidelijk : bv waar op GvN.nl staat dat de collecties ook via SRU ontsloten zijn??? Geen “API / For developers” ingang
-	Geen, povere of niet-praktische licentie/rechten-informatie (OCLC-licentie op catalogi = grote hindernis, alleen CC0 werkt in de praktijk)
-	Geen resources om de datasets + APIs actief te onderhouden (dataredactie signaleert wel het hier vermelde soort problemen, maar geen tijd/kennis om dat effectief op te pakken)
-	Geen samenwerkingsomgevingen (zie bv https://www.wikidata.org/wiki/Category:WikiProjects) 

SRU + OAI-PMH
-	Slecht gedocumenteerd: bv . welke zoekindexen (GGC, GVN..) zijn er beschikbaar voor SRU
-	Monolitisch, geen losse velden opvraagbaar
-	Geen flexibel output formaat (alleen xml, bv geen json)
-	Geen code-implementaties/wrappers (Python, JavaScript, C, PHP, Jupyter Notebooks)  - maar zie wel https://github.com/KBNLresearch/KB-python-API

data.bibliotheken.nl
-	Afschrikwekkende, kale, ruwe interface, zowel op http://data.bibliotheken.nl als op http://data.bibliotheken.nl/sparql
-	Geen sparql-query-voorbeelden aldaar (zie bv https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples) 
-	Geen Sandbox  of andere online experimenteeromgeving (zie bv https://pro.europeana.eu/page/api-rest-console)
-	Geen community: waar kan ik hulp vinden en vragen stellen? 
-	Geen support + documentatie // waar vind ik informatie/personen over projecten die obv deze data/dienst gemaakt zijn (https://www.wikidata.org/wiki/Category:WikiProjects)
-	Geen (te vinden, beschreven ) API

====================================






Alles anders dan /layout/fullscreen bij redirect negeren.
 
2	Benodigde resolver-aanpassingen

De volgende resolver-verwijzingen zijn in het kader van Delpher aangepast zodat ze nu (vanaf lancering Delpher) redirecten naar het betreffende object in de Delpher website:


 
3	Openstaande vragen

1.	Wat doen we met zoekacties? Nu staat alleen http://kranten.kb.nl/search/show/ppn/851995985 op de nominatie voor de redirect. Alle andere zoekacties naar de homepage verwijzen? 
 Ja moet wel, zoekacties uit kranten.kb.nl werken met Post en kunnen dus niet geredirect worden

2.	Resolver-url naar een plaatje van de hele pagina/pagina-niveau in Delpher-context?
Dus bijvoorbeeld: 
http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:p003  http://kranten.delpher.nl/nl/view/index/image/ddd:010177653:mpeg21:p003 

 BUG: deze resolver-url moet zeker ook werken, wordt ook aangeboden op Delpher. Zie bijvoorbeeld vakje voor Resolver-URL bij: http://kranten.delpher.nl/nl/view/index/coll/ddd/image/ddd:010562423:mpeg21:p002 
In overzicht hoofdtuk 2 opgenomen en als Bug gemeld voor Delpher.

3.	Is er een resolver-url nodig om plaatjes zonder Delpher context op te vragen? Dus m.b.v. :image laat alleen het plaatje zien vanaf de resources machines?

OJ: Ja, zeer graag! De huidige resolver-aanroep http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:p003:image 
laat de JP2 zien. Omdat er veel meer klantvraag is naar JPGs dan naar JP2s, zou ik  liever zien dat bij deze resolver-aanroep de hi-res JPG (buiten de Delpher-context dus) teruggegeven wordt (zoals nu dus gebeurt via http://imageviewer.kb.nl/ImagingService/imagingService?&id=ddd:010177653:mpeg21:p003:image ). De JP2 hoeft w.m.b. niet online beschikbaar te zijn, het is immers geen gangbaar webformaat



4.	Moeten we, eerder verzoek van Hans H, ook ipv :image/:ocr e.d. de syntax &role=image/&role=ocr etc toevoegen. Uit eerdere mail van Hans H:

Ik stel voor om ook &role=presentation toe te voegen. Voor GVN en GGC is dat al eerder gedaan.
Een expliciet verzoek met “role=presentation” resulteert in het presenteren van het object in de, op dat moment bestaande, webstek. (Nu http://kranten.kb.nl en later http://www.delpher.nl/kranten ).
Identifiers en resolver requesten die niet expliciet om een bepaald formaat vragen (bv :image, :alto, &role=image,&role=alto) worden resolved naar &role=presentation 

OJ: Ja, dat kan nuttig zijn. Wat ik dan ook van belang vind is dat dit dan consistent voor alle datasets binnen Delpher (en als het kan ook voor de niet-Delpher sets) doorgevoerd wordt. Er zijn nu sets waarbij de &role= wel geimplementeerd is, en sets waarbij dat niet het geval is. Dat is lastig uitleggen aan onze Dataservices klanten.  Ook zie ik dat voor de ALTO-request soms “:alto” en soms “:wordPositions” gebruikt wordt.. en zo zijn er nog meer inconsistenties tussen de datasets..

 In overleg met Huib, Joao, Rene Voorburg, Olaf J en Robert op 5/12/2013 besloten dat dit een te zware wijziging is om nu uit te voeren. Moet als los traject aangepakt worden.


5.	OJ: http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21 gaat nu naar http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=DDD:ddd:010177653:mpeg21&metadataPrefix=didl   
Blijft dit zo? (ik hoop van wel)
 Ja blijft ongewijzigd.

6.	http://kranten.delpher.nl/nl/view/index/image/ddd:010177653:mpeg21:p003#ocr  toont nu de OCR van de hele pagina – het moet ook mogelijk blijven (zoals nu het geval is bij de oude kranten-site) OCR van 1 enkel artikel binnen de webinterface op te roepen
Is het m.a.w. mogelijk om een URL zoals http://kranten.delpher.nl/nl/view/index/image/ddd:010177653:mpeg21:p003:a0039#ocr  te construeren (die dan de OCR van 1 artikel (a0039) in de webinterface toont)?
 Kan min of meer. Onderstaande URL geeft een pagina met alle OCR waarbij alleen de OCR van het betreffende artikel is uitgeklapt: 
http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21:a0012#ocr

7.	Het is nu mogelijk om de OCR-XML van 1 artikel op te vragen, bv. http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:a0039:ocr  . Is het mogelijk om de OCR-XML van 1 hele pagina en/of hele krant in 1 XML-file op te vragen??
 Nee niet mogelijk. OCR is alleen per artikel op te vragen of kan uit de ALTO worden geabstraheerd.

8.	http://kranten.kb.nl/search/show/ppn/851995985   en http://kranten.delpher.nl/nl/results/index/coll/dddtitel/query//cql/%28ppn+exact+851995985%29  leiden naar 2 verschillende resultaten. Hoe rijmen die met elkaar?

 Geeft wel zelfde resultaat maar bij het aanklikken van bovenstaande URL wordt // niet overgenomen. Bij copy-paste gaat het wel goed.







