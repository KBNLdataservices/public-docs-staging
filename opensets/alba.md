---
sort: 1
---

# Alba amicorum

<img src="../assets/images/AlbaAmicorumKB_BannerWikimedia_EN.jpg" width="100%" alt="topbanner"/>

### [Alba amicorum van de Koninklijke Bibliotheek](http://data.bibliotheken.nl/id/dataset/rise-alba)
([CC0 license](http://creativecommons.org/publicdomain/zero/1.0/))
* RoL, same as (this set) on Europeana

## Description

## Where

### Alba in data.bibliotheken.nl 
* http://data.bibliotheken.nl/id/dataset/rise-alba
* https://www.wikidata.org/wiki/Wikidata:WikiProject_Alba_amicorum_National_Library_of_the_Netherlands/Extract-KB-LOD-AA
* SPARQL queries
* Datadump

### Alba in Europeana 
* https://www.europeana.eu/en/search?query=europeana_collectionName%3A%2816_RoL_KB_AlbaAmicorum%29
* Sparql - RoL + ET
* REST API


### Alba in KB cataloque
*  JSRU

### Alba in Wikimedia
* Sparql wikidata
* REST API Wikidata
* REST API Commons 
* Examples of reuse https://nl.wikipedia.org/wiki/Wikipedia:GLAM/Koninklijke_Bibliotheek_en_Nationaal_Archief/Topstukken/Hergebruik/Voorbeelden/Smoelenboek_bijdragers_AAJH
* https://www.wikidata.org/wiki/Wikidata:WikiProject_Alba_amicorum_National_Library_of_the_Netherlands/Source_data
* https://www.wikidata.org/wiki/Wikidata:WikiProject_Alba_amicorum_National_Library_of_the_Netherlands

<iframe style="position: float; height: 400px; width: 100%; border: 1px" src="https://query.wikidata.org/embed.html#%23defaultView%3AImageGrid%7B%22hide%22%3A%5B%22%3Fgender%22%2C%22%3Fportrait%22%5D%7D%0ASELECT%20DISTINCT%20%3FcontributorDescription%20%3Fcontributor%20%3FcontributorLabel%20%3Fgender%20%3Fportrait%20WHERE%20%7B%20%0A%20%20BIND(wd%3AQ72752496%20as%20%3Falbum)%0A%20%0A%20%20%3Falbum%20wdt%3AP767%20%3Fcontributor.%0A%20%20%3Fcontributor%20wdt%3AP21%20%3Fgender.%0A%20%20OPTIONAL%7B%3Fcontributor%20wdt%3AP18%20%3Fimage.%7D%0A%0A%20%20BIND%20(wd%3AQ82985930%20as%20%3Fmaledummy)%20%0A%20%20BIND%20(wd%3AQ82992173%20as%20%3Ffemaledummy)%20%20%0A%20%20%3Fmaledummy%20wdt%3AP18%20%3Fmaledummyimage.%0A%20%20%3Ffemaledummy%20wdt%3AP18%20%3Ffemaledummyimage.%0A%20%20BIND(IF(%3Fgender%3Dwd%3AQ6581072%2C%3Ffemaledummyimage%2C%3Fmaledummyimage)%20as%20%3Fdummyimage).%20%23Choose%20the%20dummyimage%20dependent%20on%20gender%20(female%2Fmale)%0A%20%20%20%0A%20%20BIND(IF(BOUND(%3Fimage)%2C%20%3Fimage%2C%3Fdummyimage)%20as%20%3Fportrait).%20%23If%20no%20image%20is%20known%2C%20substitute%20the%20dummy%20image%0A%20%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%2Cnl%22.%20%7D%0A%7D%20%0AORDER%20BY%20DESC%20(%3Fimage)" referrerpolicy="origin" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
<br clear="all"/>

### Github
* https://github.com/KBNLwikimedia/Alba-Amicorum