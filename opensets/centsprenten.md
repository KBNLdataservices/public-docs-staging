---
sort: 3
---

# Catchpenny prints (Centsprenten)
<img src="../assets/images/collage_prentenboeken1810-1880.jpg" alt="banner" width="50%" align="right"/>

Tesy inline code ``` ffdgdgfdg ```

highlighter-rouge text 
<code class="highlighter-rouge">This is inline code 1 -- This is inline code 1 </code>

Inlimne comment 

```
This is inline code 2 -- This is inline code 2 
This is inline code 2 -- This is inline code 2 
This is inline code 2 -- This is inline code 2 

This is inline code 2 -- This is inline code 2 
``` 


## Description
This collection of 1.280 catchpenny prints gives a good picture of the topics the population was interested in. For researchers and people interested in the history of the Netherlands this is a real treasure-house containing images and texts from the past. This remarkable heritage is now digitally available so that everyone can become acquainted with it.

The catchpenny prints can be regarded as source material for research of text and language; of the daily life of our ancestors plying trades (that have disappeared), children's games, transport, fashion, role patterns, housing and housekeeping; tilling the land, poverty and wealth; of values and standards and pedagogical views and of image with illustration techniques and styles.

## Access
This dataset is accessible via 4 different websites:

### 1) Geheugen 
* Website: [https://geheugen.delpher.nl/en/geheugen/results?query=&facets%5BcollectionStringEN%5D%5B%5D=Catchpenny+prints+of+the+Koninklijke+Bibliotheek&page=1&maxperpage=36&coll=ngvn](https://geheugen.delpher.nl/en/geheugen/results?query=&facets%5BcollectionStringEN%5D%5B%5D=Catchpenny+prints+of+the+Koninklijke+Bibliotheek&page=1&maxperpage=36&coll=ngvn) and [background info](https://geheugen.delpher.nl/en/geheugen/pages/collectie/Centsprenten+van+de+Koninklijke+Bibliotheek)
* SRU (XML): 
  - Records 1-1000: [http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1&maximumRecords=1000&query=isPartOf%3DKONB14](http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1&maximumRecords=1000&query=isPartOf%3DKONB14) 
  - Records 1001-1280: [http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1001&maximumRecords=300&query=isPartOf%3DKONB14](http://jsru.kb.nl/sru?version=1.2&operation=searchRetrieve&x-collection=GVN&stylesheet=&recordSchema=dcx&startRecord=1001&maximumRecords=300&query=isPartOf%3DKONB14)
  - Note: In the XML response you'll see URLs to **thumail** images, such as [http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:BORMS0835&role=thumbnail](http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:BORMS0835&role=thumbnail). As you can see from [this XML file](http://services.kb.nl/mdo/oai?verb=GetRecord&identifier=gvn:KONB14:BORMS0835&metadataPrefix=didl), you can also request other image size:  
    - **Tiny**: replace *role=thumbnail* with *role=tiny* ([example](http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:BORMS0835&role=tiny))
    - **Large**: replace *role=thumbnail* with *&role=image&size=variable* or equivalently *size=large* ([example](http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:BORMS0835&size=large))
* OAI-PMH (XML): [http://services.kb.nl/mdo/oai?verb=ListRecords&set=GVNRC&metadataPrefix=dcx&from=2012-08-15T11:11:22.171Z&until=2012-08-15T11:11:41.234Z](http://services.kb.nl/mdo/oai?verb=ListRecords&set=GVNRC&metadataPrefix=dcx&from=2012-08-15T11:11:22.171Z&until=2012-08-15T11:11:41.234Z) (first 50 records) 

### 2) Linked open data 
This dataset is also available as linked open data, as described at [http://data.bibliotheken.nl/id/dataset/rise-centsprenten](http://data.bibliotheken.nl/id/dataset/rise-centsprenten), or in [RDF/XML](http://data.bibliotheken.nl/doc/dataset/rise-centsprenten.rdf) or [JSON](http://data.bibliotheken.nl/doc/dataset/rise-centsprenten.json))

Example items: 
* [http://data.bibliotheken.nl/doc/gvn/KONB14Borms0007](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0007) ([RDF/XML](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0007.rdf), [JSON](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0007.json))
* [http://data.bibliotheken.nl/doc/gvn/KONB14Borms0023](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0023) ([RDF/XML](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0023.rdf), [JSON](http://data.bibliotheken.nl/doc/gvn/KONB14Borms0023.json))

#### SPARQL queries
1) Number of prints: 1.255
```sparql
SELECT COUNT(?print) AS ?aantal WHERE {
   ?print schema:isPartOf "Centsprenten van de Koninklijke Bibliotheek"@nl . }
```
*[Try it!](http://data.bibliotheken.nl/sparql?qtxt=SELECT+COUNT%28%3Fprint%29+AS+%3Faantal+WHERE+%7B%0D+++%3Fprint+schema%3AisPartOf+%22Centsprenten+van+de+Koninklijke+Bibliotheek%22%40nl+.+%7D%0D%0A&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)* - *[Result (HTML)](http://data.bibliotheken.nl/sparql?default-graph-uri=&query=SELECT+COUNT%28%3Fprint%29+AS+%3Faantal+WHERE+%7B%0D%0A+++%3Fprint+schema%3AisPartOf+%22Centsprenten+van+de+Koninklijke+Bibliotheek%22%40nl+.+%7D%0D%0A&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)* - *[JSON](http://data.bibliotheken.nl/sparql?default-graph-uri=&query=SELECT+COUNT%28%3Fprint%29+AS+%3Faantal+WHERE+%7B%0D%0A+++%3Fprint+schema%3AisPartOf+%22Centsprenten+van+de+Koninklijke+Bibliotheek%22%40nl+.+%7D%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+)*

2) Table of all 1.255 prints with labels, descriptions and images
```sparql
SELECT ?print ?label ?description ?image WHERE {
   ?print schema:isPartOf "Centsprenten van de Koninklijke Bibliotheek"@nl.
   ?print rdfs:label ?label.
   ?print schema:description ?description.
   ?print schema:image ?image.
} 
```
*[Try it!](http://data.bibliotheken.nl/sparql?qtxt=SELECT+%3Fprint+%3Flabel+%3Fdescription+%3Fimage+WHERE+%7B%0D%0A+++%3Fprint+schema%3AisPartOf+"Centsprenten+van+de+Koninklijke+Bibliotheek"%40nl.%0D%0A+++%3Fprint++rdfs%3Alabel+%3Flabel.%0D%0A+++%3Fprint+schema%3Adescription+%3Fdescription.%0D%0A+++%3Fprint+schema%3Aimage+%3Fimage.%0D%0A%7D+&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)* - *[Result (HTML)](http://data.bibliotheken.nl/sparql?default-graph-uri=&query=SELECT+%3Fprint+%3Flabel+%3Fdescription+%3Fimage+WHERE+%7B%0D%0A+++%3Fprint+schema%3AisPartOf+%22Centsprenten+van+de+Koninklijke+Bibliotheek%22%40nl.%0D%0A+++%3Fprint++rdfs%3Alabel+%3Flabel.%0D%0A+++%3Fprint+schema%3Adescription+%3Fdescription.%0D%0A+++%3Fprint+schema%3Aimage+%3Fimage.%0D%0A%7D+&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)* - *[JSON](http://data.bibliotheken.nl/sparql?default-graph-uri=&query=SELECT+%3Fprint+%3Flabel+%3Fdescription+%3Fimage+WHERE+%7B%0D%0A+++%3Fprint+schema%3AisPartOf+%22Centsprenten+van+de+Koninklijke+Bibliotheek%22%40nl.%0D%0A+++%3Fprint++rdfs%3Alabel+%3Flabel.%0D%0A+++%3Fprint+schema%3Adescription+%3Fdescription.%0D%0A+++%3Fprint+schema%3Aimage+%3Fimage.%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on&run=+Run+Query+)*

We can also display this table embedded into this page, using a HTML-iframe. We do this by using [this federated query](https://w.wiki/$2b) in the Wikidata Query Service (the KB LOD service does not support the use of iframes to display its results)
```sparql
PREFIX schema: <http://schema.org/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?print ?label ?description ?image WHERE {
  
  SERVICE <http://data.bibliotheken.nl/sparql>{
    ?print schema:isPartOf "Centsprenten van de Koninklijke Bibliotheek"@nl.
    ?print rdfs:label ?label.
    ?print schema:description ?description.
    ?print schema:image ?image.
}}
ORDER BY ?print
```
*[Try it!](https://w.wiki/$2b)* - *[Result](https://w.wiki/$2e)*

The embbedded table looks like this. Note than we can used the embedded search box to narrow down the results:
<iframe style="position: float; height: 400px; width: 100%; border: 1px; font-size: 10px" src="https://query.wikidata.org/embed.html#PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0A%0ASELECT%20DISTINCT%20%3Fprint%20%3Flabel%20%3Fdescription%20%3Fimage%20WHERE%20%7B%0A%20%20%0A%20%20SERVICE%20%3Chttp%3A%2F%2Fdata.bibliotheken.nl%2Fsparql%3E%7B%0A%20%20%20%20%3Fprint%20schema%3AisPartOf%20%22Centsprenten%20van%20de%20Koninklijke%20Bibliotheek%22%40nl.%0A%20%20%20%20%3Fprint%20rdfs%3Alabel%20%3Flabel.%0A%20%20%20%20%3Fprint%20schema%3Adescription%20%3Fdescription.%0A%20%20%20%20%3Fprint%20schema%3Aimage%20%3Fimage.%0A%7D%7D%0AORDER%20BY%20%3Fprint" referrerpolicy="origin" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
<br clear="all"/>

3) All prints created between 1830 and 1860, and their creatiors
```sparql
```


#### Datadump
* Datadump in RDF/XML dd. 16-10-2020: [http://data.bibliotheken.nl/files/centsprenten_20201016.ttl.gz](http://data.bibliotheken.nl/files/centsprenten_20201016.ttl.gz) (XX MB)

### 3) Wikimedia Commons
[https://commons.wikimedia.org/wiki/Category:Catchpenny_prints_from_Koninklijke_Bibliotheek](https://commons.wikimedia.org/wiki/Category:Catchpenny_prints_from_Koninklijke_Bibliotheek)

See Wikimedia section how to interact programtically REST-API with this dataset

* https://commons.wikimedia.org/w/index.php?title=Special:Search&limit=500&offset=0&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1&search=haswbstatement%3AP180+incategory%3A%22Catchpenny+prints+from+Koninklijke+Bibliotheek%22&advancedSearch-current={}
* Strcuctued search: 
https://hay.toolforge.org/sdsearch/#q=haswbstatement:P180%20incategory:%22Catchpenny%20prints%20from%20Koninklijke%20Bibliotheek%22 --> make api/json version 

### 4) Europeana
All 1.255 prints in the Europeana webinterface: [https://www.europeana.eu/en/search?query=europeana_collectionName%3A%2810_KB_RiseOfLiteracy_Centsprenten%29&view=grid](https://www.europeana.eu/en/search?query=europeana_collectionName%3A%2810_KB_RiseOfLiteracy_Centsprenten%29&view=grid). This is the same set as at 2) Linked open data. 

#### Europeana REST API
In JSON-interface: 

As this st has not been properly indexed by Euroeana, we cna't query for the exact set. Instead we can seach for 
https://www.europeana.eu/api/v2/search.json?wskey=api2demo&query="Centsprent"+AND+"National Library of the Netherlands" (maar bevat ook andere centsprnt dan van RoL)

Example item 
* https://www.europeana.eu/nl/item/10/id_gvn_KONB14Borms0471
* https://api.europeana.eu/record/10/id_gvn_KONB14Borms0471.json?wskey=api2demo

https://api.europeana.eu/thumbnail/v2/url.json?uri=http%3A%2F%2Fresolver.kb.nl%2Fresolve%3Furn%3Durn%3Agvn%3AKONB14%3ABORMS0471%26role%3Dimage%26size%3Dvariable&type=IMAGE

http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:BORMS0471&role=image&size=variable"
"http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:Borms0471"
  "http://resolver.kb.nl/resolve?urn=urn:gvn:KONB14:Borms0471"


https://api.europeana.eu/record/10/id_gvn_KONB14Borms0471.json?wskey=api2demo


https://api.europeana.eu/aggregation/provider/10/id_gvn_KONB14Borms0471.json?wskey=api2demo
https://data.europeana.eu/aggregation/europeana/10/id_gvn_KONB14Borms0471
https://data.europeana.eu/proxy/provider/92065/10/id_gvn_KONB14Borms0471
https://data.europeana.eu/proxy/europeana/92065/10/id_gvn_KONB14Borms0471
https://data.europeana.eu/item/10/id_gvn_KONB14Borms0471






<!--- #### Europena SPARQL
 http://sparql.europeana.eu/ 

```sparql

```
*[Try it!]()* - *[Result (HTML)]()* - *[JSON]()* --->



## Examples of reuse

## License
This dataset is in the <a target="_blank" href="https://creativecommons.org/publicdomain/mark/1.0/deed.en">Public Domain</a> 
<a target="_blank" href="https://creativecommons.org/publicdomain/mark/1.0/deed.en"><img src="../assets/images/public-domain-logo.png" alt="banner" width="100" align="left"/></a> 
