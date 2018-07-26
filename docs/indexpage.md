--------------------------------------------------------------------------------------------------------------
Function: Get a list of publicly available photos sorted by like count

URL : /photo/publicsorted 

Method : GET

URL Params :  None 

Data Params : None 

Response Codes: Success (200 OK), Bad Request (400)

Response Body: Json of a list of photo infos sorted by like count of each photo. Example:

```json
{
  "data": [
    {
      "id": 18,
      "event": "Evergreen Autocross",
      "likecount": 2,
      "url": "https://s3-us-west-2.amazonaws.com/fatgoosebucket/1530557415115-WX20180607-152526.png"
    },
    {
      "id": 17,
      "event": "Evergreen Autocross",
      "likecount": 1,
      "url": "https://s3.us-west-2.amazonaws.com/fatgoosebucket/1530557380985-11026025_922257457808118_6754770859746471693_n.jpg"
    },
    {
      "id": 23,
      "event": "Evergreen Autocross",
      "likecount": 0,
      "url": "https://s3.us-west-2.amazonaws.com/fatgoosebucket/1532045413406-828469CV2005_044.jpg"
    }
  ],
  "error": {
    "canRetry": true,
    "message": ""
  }
}
```

--------------------------------------------------------------------------------------------------------------
Function: Get a list of all events 

URL : /events 

Method : GET

URL Params :  newOnly, not required, default to false. Retrieve new events only when true.

Data Params : None 

Response Codes: Success (200 OK), Bad Request (400)

Response Body: Json of a list of event info. Example:

1. curl http://ec2-18-191-255-17.us-east-2.compute.amazonaws.com:8080/events 

or 

curl http://ec2-18-191-255-17.us-east-2.compute.amazonaws.com:8080/events?newOnly=false

```json
{
  "data": [
    {
      "date": "2018-07-26 01:14:55.0",
      "venue": "evergreen speedway",
      "name": "Evergreen Autocross",
      "host": "Peng Du",
      "description": "autocross",
      "status": "CREATED"
    },
    {
      "date": "2018-07-26 01:14:59.0",
      "venue": "Dirtfish Rally School",
      "name": "Rallycross Fest",
      "host": "Peng Du",
      "description": "rallycross",
      "status": "CREATED"
    },
    {
      "date": "2019-04-02 14:22:00.0",
      "venue": "evergreen speedway",
      "name": "Formula D",
      "host": "Peng Du",
      "description": "test",
      "status": "CREATED"
    }
  ],
  "error": {
    "canRetry": true,
    "message": ""
  }
}
```
2. curl http://ec2-18-191-255-17.us-east-2.compute.amazonaws.com:8080/events?newOnly=true

```json
{
  "data": [
    {
      "date": "2019-04-02 14:22:00.0",
      "venue": "evergreen speedway",
      "name": "Formula D",
      "host": "Peng Du",
      "description": "test",
      "status": "CREATED"
    }
  ],
  "error": {
    "canRetry": true,
    "message": ""
  }
}
```
