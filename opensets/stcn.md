---
sort: 
---

# STCN - Short-Title Catalogue Netherlands


## Description
* De Short-Title Catalogus Nederland is de retrospectieve nationale bibliografie van Nederland voor de periode 1540-1800; ook opgenomen zijn summiere beschrijvingen van Nederlandse (post-)incunabelen. Het bestand staat als wetenschappelijk bibliografisch onderzoeksinstrument aan iedereen ter beschikking. Uiteindelijk zal de STCN beschrijvingen bevatten van alle boeken die voor 1801 in Nederland zijn verschenen, en van alle boeken die buiten Nederland in de Nederlandse taal zijn gepubliceerd. De STCN wordt samengesteld op basis van collecties in binnen- en buitenland. Alle boeken zijn met het boek in de hand (in autopsie) beschreven.
* Structured data: http://data.bibliotheken.nl/id/dataset/stcn

## License
([CC0 license](http://creativecommons.org/publicdomain/zero/1.0/))

## SPARQL
(http://data.bibliotheken.nl/id/dataset/stcn)
Example queries 

Top 10 auteurs met de meeste publicaties in dataset STCN:ReceptIn de kern is de oplossing gelijk aan de voorgaande. De modellering van auteurs in de STCN gebeurt echter op een andere wijze. Anders dan in de overige datasets zijn de publicaties via een tussenentiteit aan de auteurs gekoppeld. Deze tussenentiteit (een schema:Role) wordt gebruikt om de naam vast te leggen die de auteur gebruikt in de context van de betreffende publicatie. Met andere woorden, dankzij de schema:Role tussenentiteit kan er voor één auteur (schema:Person) vastgelegd worden onder welke naam, bijvoorbeeld onder welk pseudoniem, een publicatie is uitgegeven. Oplossing
```sparql
select ?naam count(?naam) as ?aantal where {  ?s foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/stcn> .   ?s schema:author/schema:author ?author .  ?author a schema:Person .  ?author schema:name ?naam . } group by ?author ?naam order by desc (?aantal) limit 10
```
[ bekijk: query, resultaat]DiscussieBinnen de schema:Role (via ?s schema:author ?role) is meer dan alleen de hier gebruikte schema:name te vinden. Via een pnv:hasName9relatie is er meer detailinformatie over de gebruikte auteursnaam te vinden. Zo geeft daar predicaat pnv:nameSpecification aan of de gebruikte naam een pseudoniem (waarde “pseudonym”) of een mystificatie (waarde “mystification”) betreft.  We zouden de orginele vraagzo bijvoorbeeld nader kunnen beperken tot de top 5 van auteurs die een pseudoniem hebben gebruikt:select ?naam count(?naam) as ?aantal where {  ?s foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/stcn> .   ?s schema:author ?role .  ?role pnv:hasName/pnv:nameSpecification "pseudonym" .  ?role schema:author ?author .  ?author a schema:Person .  ?author schema:name ?naam .  } group by ?author ?naam order by desc (?aantal) limit 5[ bekijk: query, resultaat]


## Datadump
http://data.bibliotheken.nl/files/stcn_20201105.ttl.gz (xx GB), datum...

## Examples of reuse