# skipAD

Browser Addon to skip Adf.ly, Zo.ee and similars.


This plugin has been developed to try browser's APIs. It is not supposed to be used.

Actual Version: 0.0.0

Website supported:

**Legend**: F (Full support), B (Supported with bugs)

| HOST  | Website   | Supported | version |
| ---------------- | --------- | - | ----- |
| zo.ee            | [Adult.xyz](http://adult.xyz/) | F | 0.0.0 |
| threadsphere.bid | [Adf.ly](http://adf.ly/)       | B | 0.0.0 |
| adf.ly           | [Adf.ly](http://adf.ly/)       | F | 0.0.0 |


**Advertisement!!!**

Do not use this addon, at least not yet. Is a work in progress ;)

## Server Side

### MySQL Tables

```SQL
CREATE TABLE table_name (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
link TEXT NOT NULL COMMENT "Original AD LINK",
link_hash VARCHAR(32) NOT NULL UNIQUE COMMENT "md5(link)",
link_id TEXT NOT NULL COMMENT "ID got from link", 
destination TEXT NOT NULL COMMENT "Destination URL" , 
latest_update TIMESTAMP COMMENT "Latest update"
) 
```

### Tables name

| Table Name | since version | 
| --- | --- |
| adf_ly| 0.0.0 |
| adult_xyz | 0.0.0 |
| threadsphere_bidNascondi | 0.0.0 | 

### Folders Anatomy


 > /0.0.0/ <br />
 ---------index.php <br />
 ---------save.php <br />
 ---------functions.php <br />
 ---------errors.txt
 
 ## Addon Side
 
 ### Folders Anatomy
 
> / <br />
> ---/html <br />
> ------ Empty <br />
> ---/icons <br /> 
> ------default.png <br />
> ---manifest.json <br />
> ---skipAD.js

 
