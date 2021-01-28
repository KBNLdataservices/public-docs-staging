# jSRU.kn.nl
http://jsru.kb.nl/sru/sru?operation=explain&version=1.1&recordPacking=xml

Search/Retrieve via URL (SRU) is een standaard zoekprotocol voor internetzoekquery's.
Het makat gebruik van Contextual Query Language (CQL), een standard querysyntax.
De KB heeft een eigen implementatie van SRU (versie 1.1).
Met jSRU kan je zoeken in geïndexeerde metadata uit de KB-metadata-opslag-database (MDO).

*SRU volgens Library of Congres*
https://www.loc.gov/standards/sru/sru-1-1.html
    
*OASIS*
http://docs.oasis-open.org/search-ws/searchRetrieve/v1.0/searchRetrieve-v1.0-part0-overview.html

## Wijzigingen

## 2021
Binnenkort zal de set EDBO (Early Dutch Books Online) alleen nog via Delpher.nl doorzoekbaar zijn.
http://jsru.kb.nl/sru/sru?query=(%22koning%22)&x-version=1.2&startRecord=1&operation=searchRetrieve&x-collection=DPO_boekdeel&version=1.2&maximumRecords=10&x-fields=extent%2Cvdkpbsummary%2Cthumbnail

DPO is al een tijd doorzoekbaar gemaakt in Delpher.nl
https://www.delpher.nl/nl/boeken/results?query=koning+AND+digitizationProject+any+%22dpo%22&page=1&maxperpage=20&coll=boeken