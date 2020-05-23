const router = require ('express').Router();
var dbFile = require ('../../db/db.json');
const fs = require ('fs');
const path = require("path");
const { readLocalFile, validateNotes, validJSON } = require('../../lib/notes');

//Route to post data to existing notes.
router.post('/notes', (req,res)=>{
    req.body.id = dbFile.length.toString();
    if (!validateNotes(req.body)){
        res.status(400).send('The note is not properly formatted.');
    } else {
        dbFile.push(req.body);
        fs.writeFileSync(path.join(__dirname,'../../db/db.json'), JSON.stringify(dbFile));    
        }
    res.json(dbFile);
 });

 //Delete data by ID
router.delete('/notes/:id', (req,res)=>{
    const newArr = [];
    for (var i =0; i < dbFile.length; i++){
        if (dbFile[i].id != req.params.id){
           newArr.push(dbFile[i]);
        }
    }
    dbFile = newArr;
    fs.writeFileSync(path.join(__dirname,'../../db/db.json'), JSON.stringify(newArr));
    res.status('200').send("Successfully deleted");
});

 //Get data by ID
router.get('/notes/:id', (req,res)=>{
     for (var i =0; i < dbFile.length; i++){
         if (dbFile[i].id === req.params.id){
            const selectArr = dbFile[i];
            res.json(selectArr);
         }
     }
 });

//Route to fetch all Notes
router.get('/notes', (req,res)=>{
    res.json(dbFile);
 });

 module.exports  = router;