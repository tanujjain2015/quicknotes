const fs = require ('fs');
const path = require ('path');

//Function to  validate JSON Input. 
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

//Validation function for post request
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

//Function to retrieve notes by id from Array
function getNotesById(id, dbFile){
    for (var i =0; i < dbFile.length; i++){
        if (dbFile[i].id === id){
           const selectArr = dbFile[i];
           return selectArr;
        }
    }
}

//Function to retrieve index of on item from an array.
function getDeleteIndex(id, dbFile){
    var counter = 0;
    for (var i =0; i < dbFile.length; i++){
        if (dbFile[i].id === id){
            counter++;
           return i;
        }
    }
    if (counter == 0) {
        return null;
    }
}

module.exports = {
    validateNotes,
    validJSON,
    getNotesById,
    getDeleteIndex
};