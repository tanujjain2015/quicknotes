const fs = require ('fs');
const path = require ('path');

function validJSON(text){
    if (typeof text!=="string"){
        return false;
    }
    try{
        JSON.parse(text);
        return true;
    }
    catch (error){
        return false;
    }
}

function validateNotes(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
      return false;
    }
    if (!notes.text || typeof notes.text !== 'string') {
      return false;
    }
    if (!notes.id || typeof notes.id !== 'string') {
      return false;
    }
    return true;
  }

function readLocalFile (filePath) {
    console.log(filePath)
    /*let filePath = path.join(__dirname,'../../db/db.json');
    fs.readFile(filePath, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const dbFile = JSON.parse(jsonString);
            console.log(dbFile);
            console.log("printing data");
            res.json(dbFile);
            //return dbFile;
    } catch(err) {
            console.log('Error parsing JSON string:', err);
            res.status('500').send('Error parsing JSON string:');
        }
    });*/
}

module.exports = {
    readLocalFile,
    validateNotes,
    validJSON
}