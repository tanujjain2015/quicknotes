const router = require ('express').Router();
const dbFile = require ('../../db/db.json');
const fs = require ('fs');
const path = require("path");
const { validateNotes, getNotesById, getDeleteIndex, getUniqueId } = require('../../lib/notes');

//Route to post data to existing notes.
router.post('/notes', (req,res)=>{
    req.body.id = getUniqueId(dbFile);
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
    const index = getDeleteIndex(req.params.id,dbFile);
    if (index != null) {
        dbFile.splice(index, 1);
        fs.writeFileSync(path.join(__dirname,'../../db/db.json'), JSON.stringify(dbFile));
        res.json(dbFile);
    }else {
        res.status('200').send("No item to delete");
    }
});

 //Get data by ID
router.get('/notes/:id', (req,res)=>{
    const result = getNotesById(req.params.id, dbFile);
    if (result) {
        res.json(result);
        } else {
            res.send(404);
        }
 });

//Route to fetch all Notes
router.get('/notes', (req,res)=>{
    res.json(dbFile);
 });

 module.exports  = router;