const fs = require ('fs');
const path = require ('path');


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

//Function to retrieve index of on item from an array.
function getUniqueId(dbFile){
    var id = 0;
    if (dbFile.length == 0){
        id = 1;
    } else {
        id = (parseInt(dbFile[dbFile.length -1].id) + 1).toString();
    }
    return id.toString();
}

module.exports = {
    validateNotes,
    getNotesById,
    getDeleteIndex,
    getUniqueId
};