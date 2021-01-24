<image src="images/logos/KB_Nationale-Bibliotheek_Logo_RGB-Zwart-EN.png" width="400" align="right"/>
Tips & tricks about the public data architecture of the KB, national library of the Netherlands 

https://www.kb.nl/en/organisation/research-expertise/digitization-projects-in-the-kb/digitization-at-the-kb-backgrounds-and-documentation/standards
https://www.kb.nl/organisatie/onderzoek-expertise/digitaliseringsprojecten-in-de-kb/beleid-documentatie-en-techniek-van-digitalisering/gebruikte-standaarden-bij-digitalisering


# Delpher newspapers

## Resolver

•	Krantenartikelen: 
http://resolver.kb.nl/resolve?urn=ddd:010562423:mpeg21:a0162  http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21:a0162

•	Pagina:
http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:p003  http://kranten.delpher.nl/nl/view/index/image/ddd:010177653:mpeg21:p003

•	Krant: 
http://resolver.kb.nl/resolve?urn=ddd:010562423  http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21


Resolver-URLs die ongewijzigd blijven en niet in Delpher context worden getoond:

1.	http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:p003:image  http://resources2.kb.nl/010175000/accessimages/010177653/DDD_010177653_003_access.jp2

2.	http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:pdf  http://resources2.kb.nl/010175000/pdf/DDD_010177653.pdf
3.	
http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:a0039:ocr  http://resources2.kb.nl/010175000/articletext/010177653/DDD_010177653_0039_articletext.xml 

4.	http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21:p003:alto  http://resources2.kb.nl/010175000/alto/010177653/DDD_010177653_003_alto.xml 

5.	http://resolver.kb.nl/resolve?urn=ddd:010177653:mpeg21  http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=DDD:ddd:010177653:mpeg21&metadataPrefix=didl
 


* http://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21:a00083:ocr
* http://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21:a00083
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21 (= http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=KRANTEN:MMKB12:MMKB12:000157121:mpeg21&metadataPrefix=didl)
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121:pdf
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21:p00007
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21:p00007:alto
* https://resolver.kb.nl/resolve?urn=MMKB12:000157121:mpeg21:p00007:image

## Imageviewer
* http://imageviewer.kb.nl/ImagingService/imagingService?r=180&h=530&id=MMKB12:000157121:mpeg21:p00007:image
Calls naar de Image-viewer zoals http://imageviewer.kb.nl/ImagingService/imagingService?&id=ddd:010177653:mpeg21:p003:image  of http://imageviewer.kb.nl/ImagingService/imagingService?r=180&h=300&id=ddd:010177653:mpeg21:p003:image  blijven toch gewoon onveranderd??
 Ja

## jSRU
na klikken op periode face:
http://jsru.kb.nl/sru/sru?query=tas&version=1.2&operation=searchRetrieve&startRecord=1&maximumRecords=10&recordSchema=ddd&x-collection=DDD_artikel&x-fields=OaiPmhIdentifier%2CdateString%2Czones&x-facets=facets%3A+periode%2Cspatial%2Ctype

facet Nederlands Indie:
http://jsru.kb.nl/sru/sru?query=tas&version=1.2&operation=searchRetrieve&startRecord=1&maximumRecords=10&recordSchema=ddd&x-collection=DDD_artikel&x-fields=OaiPmhIdentifier%2CdateString%2Czones&x-facets=facets%3A+periode%2Cspatial%2Ctype&x-filter=%28spatial+exact+%22Nederlands-Indi%C3%AB+%2F+Indonesi%C3%AB%22%29

Zoeken in de Telegraaf (ppn any 832675288):
http://jsru.kb.nl/sru/sru?query=%28content+all+%22tas%22%29+AND++ppn+any+%28832675288%29&version=1.2&operation=searchRetrieve&startRecord=1&maximumRecords=10&recordSchema=ddd&x-collection=DDD_artikel&x-fields=OaiPmhIdentifier%2CdateString%2Czones&x-facets=facets%3A+periode%2Cspatial%2Ctype

Ik hoor t wel als er meer info nodig is (JSON output wellicht nog?)
========================
Overigens zijn er drie 'kranten'-collecties:

DDD_krantennr
DDD_artikel
DDD_titels
=======================

## OAI-PMH
- http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=DDD:ddd:010109729:mpeg21&metadataPrefix=didl
- http://services.kb.nl/mdo/oai?verb=ListSets

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


# data.bibliotheken.nl

Deze query werkt dus niet

   SELECT count(?nta) as ?aantal WHERE {
   ?nta foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/persons> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000

En deze wel

   SELECT count(?nta) as ?aantal WHERE {
   ?nta foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/nbt> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000

Het verschil zit ‘m dus ergens tussen de opbouw van items in http://data.bibliotheken.nl/id/dataset/persons en  de opbouw van items in http://data.bibliotheken.nl/id/dataset/nbt

Dus we pakken er een voorbeelditem van de NBT bij: http://data.bibliotheken.nl/doc/nbt/p750008644
 
OK, komt overeen met de werkende NBT-query erboven….

Voorbeelditem voor de NTA: http://data.bibliotheken.nl/doc/thes/p120000083


Dus zou de query moeten worden

   SELECT count(?nta) as ?aantal WHERE {
   ?nta schema:mainEntityOfPage/schema:isPartOf <http://data.bibliotheken.nl/id/dataset/persons> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000
0

# KB catalogue
•	JSRU
- http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GGC&query=EuropeanaTravel:131H26&recordSchema=dcx&startRecord=1&maximumRecords=1000&sort=


==========



=====================

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

KB Diensten / APIs / open datasets die ik als ontwikkelaar/hacker gebruik, zou kunnen of zou willen gebruiken (excl onze OB-georiënteerde sets)

•	KB-Dataservices : https://www.kb.nl/dataservices

•	KB-Labs : https://lab.kb.nl/ + https://github.com/KBNLresearch

•	LOD thesauri: https://data.bibliotheken.nl + https://www.kb.nl/bronnen-zoekwijzers/dataservices-en-apis/linked-data-van-de-kb 

•	Delpher Open Kranten Archief // Zipfiles - https://www.delpher.nl/nl/platform/pages/helpitems?title=data+in+delpher + https://www.delpher.nl/nl/platform/pages/helpitems?title=delpher+open+krantenarchief&scrollitem=true 

•	JSRU
- http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GGC&query=EuropeanaTravel:131H26&recordSchema=dcx&startRecord=1&maximumRecords=1000&sort=
- http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1&maximumRecords=1000&query=isPartOf%3DAHM01



•	KB-beelden op Wikimedia Commons: https://commons.wikimedia.org/wiki/Commons:Koninklijke_Bibliotheek 


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





1.2.2	Krantnummer
Normale view:
•	http://kranten.kb.nl/view/paper/id/ddd:010533562:mpeg21:p001:a0001 
•	http://kranten.delpher.nl/nl/view/index/image/ddd:010533562:mpeg21 
•	Of bij gebruik resolver: http://resolver.kb.nl/resolve?urn=ddd:010533562 
Full screen view:
•	Kranten.kb.nl kent alleen een full-screen modus op artikel-niveau
•	http://kranten.delpher.nl/nl/view/fullscreen/image/ddd%3A010533562%3Ampeg21 

1.2.3	Pagina:
Normale view:
•	http://kranten.kb.nl/view/paper/id/ddd:010562423:mpeg21:p002   
•	http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21:p002

Full screen view:
•	Kranten.kb.nl kent alleen een full-screen modus op artikel-niveau
•	http://kranten.delpher.nl/nl/view/fullscreen/image/ddd%3A010691816%3Ampeg21%3Ap003 

1.2.4 Artikelen

Normale view:
•	http://kranten.kb.nl/view/article/id/ddd:010562423:mpeg21:p001:a0162   
•	http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21:a0162 
•	Of bij gebruik resolver: http://resolver.kb.nl/resolve?urn=ddd:010562423:mpeg21:a0162  
Full screen view:
•	http://kranten.kb.nl/view/article/id/ddd%3A010691816%3Ampeg21%3Ap003%3Aa0530/layout/fullscreen (laat niet hele pagina zien, niet ingezoomd) 
http://kranten.delpher.nl/nl/view/fullscreen/image/ddd%3A010691816%3Ampeg21%3Ap003
(In overleg met Huib, Joao, Rene Voorburg, Olaf J en Robert op 5/12/2013 besloten dat we naar deze Delpher URL verwijzen en niet naar de URL die inzoomt op het artikel omdat de bovengenoemde URL op kranten.kb.nl ook de hele pagina toont).
 1.2.5	PDF
•	http://kranten.kb.nl/view/pdf/id/ddd%3A010562423%3Ampeg21    
•	http://kranten.delpher.nl/nl/api/resource?coll=ddd&id=ddd:010562423:mpeg21&operation=download&type=pdf 
1.2.6	OCR
•	http://kranten.kb.nl/view/text/id/ddd%3A010562423%3Ampeg21%3Ap001%3Aa0012    
•	http://kranten.delpher.nl/nl/view/index/image/ddd:010562423:mpeg21:a0012#ocr 

1.2.7	Variaties
Verder kan er op veel plekken nog van alles achter de url komen. Voorbeelden:
1.	http://kranten.kb.nl/view/article/id/ddd:011109029:mpeg21:p018:a0259.ece 
2.	http://kranten.kb.nl/view/paper/id/ddd:010318224:mpeg21:p001:a0001/layout/main  
3.	http://kranten.kb.nl/view/paper/id/ddd:010533562:mpeg21:p001:a0001/backlink/home 
4.	http://kranten.kb.nl/view/article/id/ddd:011168421:mpeg21:p002:a0031}  (die accolade op het einde)
5.	http://kranten.kb.nl/view/article/id/ddd:010654130:mpeg21:p002:a0068%7C 
6.	http://kranten.kb.nl/search/index/state/load http://kranten.kb.nl/search/index is een statische pagina en zou dus naar kranten.delpher.nl gaan wijzen.

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





