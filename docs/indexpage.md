--------------------------------------------------------------------------------------------------------------
Function: Get a list of publicly available photos sorted by like count

URL : /photo/publicsorted 

Method : GET

URL Params :  None 

Data Params : None 

Response Codes: Success (200 OK), Bad Request (400)

Response Body: Json of a list of photo infos sorted by like count of each photo. Example:

```json
[
	{
		"id": 17,
		"event": "Evergreen Autocross",
		"likecount": 2,
		"url": "https://s3.us-west-2.amazonaws.com/fatgoosebucket/1530557380985-11026025_922257457808118_6754770859746471693_n.jpg"
	},
	{
		"id": 23,
		"event": "Evergreen Autocross",
		"likecount": 1,
		"url": "https://s3.us-west-2.amazonaws.com/fatgoosebucket/1532034864487-10382173_814846368586351_6044081325129694464_n.jpg"
	},
	{
		"id": 18,
		"event": "Evergreen Autocross",
		"likecount": 0,
		"url": "https://s3-us-west-2.amazonaws.com/fatgoosebucket/1530557415115-WX20180607-152526.png"
	}
]
```

--------------------------------------------------------------------------------------------------------------
Function: Get a list of all events 

URL : /events 

Method : GET

URL Params :  None 

Data Params : None 

Response Codes: Success (200 OK), Bad Request (400)

Response Body: Json of a list of event info. Example:

```json
[
	{
		"date": "2018-07-19 14:15:05.0",
		"venue": "evergreen speedway",
		"name": "Evergreen Autocross",
		"description": "autocross"
	},
	{
		"date": "2018-07-19 14:15:09.0",
		"venue": "Dirtfish Rally School",
		"name": "Rallycross Fest",
		"description": "rallycross"
	}
]
```