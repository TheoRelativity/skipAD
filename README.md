# skipAD
Browser Addon to skip Adf.ly, Zo.ee and similar.

Actual Version: 0.0.0

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

#### Tables name

| Table Name |
| --- |
| adf_ly|
| adult_xyz |
| threadsphere_bidNascondi | 
