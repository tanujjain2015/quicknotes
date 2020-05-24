# Note Taker Starter Code

Purpose: 
--------

The objective of this app to create, store and delete Notes on cloud. 

Github Link:
-----------
https://github.com/tanujjain2015/quicknotes 


Heroku Deployed Link:
--------------------

https://qucknotes.herokuapp.com/ 


Version: 
-------
1.1


Usage:  
------
1. API Usage: 
   ---------
  1.  To retrieve all existing Notes: 
        Request: GET
        Usage:  /api/notes 
  2.  To retrieve notes by Id: 
        Request: GET 
        Usage: /api/notes/:id
  3.  To delete notes based on Id: 
        Request: Delete
        Usage: /api/notes/:id
  4.  To create New notes:
        Request: POST
        Usage: /api/notes
2. UI Usage: 
   --------
    1.  Access Heroku Link for deployed application: https://qucknotes.herokuapp.com/
    2.  Functionality Supported:
        1. Create and save New Notes 
        2. Delete Notes