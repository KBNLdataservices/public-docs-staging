---
sort: 1
---

# data.bibliotheken.nl
On data.bibliotheken.nl, descriptions of an important part of the KB collection are made available according to linked data principles. The data can be browsed, data can be downloaded in various forms and via the SPARQL interface, the data can help answer all kinds of research questions. 


## Datasets
See [https://data.bibliotheken.nl](https://data.bibliotheken.nl) and [https://www.kb.nl/bronnen-zoekwijzers/dataservices-en-apis/linked-data-van-de-kb](https://www.kb.nl/bronnen-zoekwijzers/dataservices-en-apis/linked-data-van-de-kb) (Dutch)


## Documentation and SPARQL-examples in Dutch
* [Tips for using linked data environment data.bibliotheken.nl](http://data.bibliotheken.nl/files/hulptekst_data.bibliotheken.nl.pdf) (PDF in Dutch, version 1.2 - September 4, 2020). In order to work properly with the data, some insight is needed into how the data is organized. This organization of the data is the subject of the first part of this document. In the second part of this document, several examples are given of how SPARQL can be used to answer questions with the data. As an attachment, this document provides an overview of updates and changes to the provided data. This document expects the user to have basic knowledge of linked data and SPARQL. 

## SPARQL queries

Deze query werkt dus niet
```sparql
   SELECT count(?nta) as ?aantal WHERE {
   ?nta foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/persons> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000
```
En deze wel

```sparql
   SELECT count(?nta) as ?aantal WHERE {
   ?nta foaf:isPrimaryTopicOf/void:inDataset <http://data.bibliotheken.nl/id/dataset/nbt> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000
```
Het verschil zit ‘m dus ergens tussen de opbouw van items in http://data.bibliotheken.nl/id/dataset/persons en  de opbouw van items in http://data.bibliotheken.nl/id/dataset/nbt

Dus we pakken er een voorbeelditem van de NBT bij: http://data.bibliotheken.nl/doc/nbt/p750008644
 
OK, komt overeen met de werkende NBT-query erboven….

Voorbeelditem voor de NTA: http://data.bibliotheken.nl/doc/thes/p120000083


Dus zou de query moeten worden
```sparql
   SELECT count(?nta) as ?aantal WHERE {
   ?nta schema:mainEntityOfPage/schema:isPartOf <http://data.bibliotheken.nl/id/dataset/persons> .
   #?nta owl:sameAs ?wikidata .
   #FILTER(regex(?wikidata, 'wikidata', 'i'))
   } limit 1000
```




