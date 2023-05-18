const { json } = require('body-parser');
const generator = require('../Util/generator.js');
const memStorage = require('../Util/memory.storage.js');

const model = require('../model/note.model.js');

  exports.getAllNotes = (req,res)=>{

    //   var seqId = generator.generate();
    //   memStorage.store.setItem(seqId,"1st_key");

    //   var seqId_2 = generator.generate();
    //   memStorage.store.setItem(seqId,"2nd_key");

    // var keys = memStorage.getKeys(memStorage.store); 
    var values = memStorage.getValues(memStorage.store); 

    console.log("values ........"+JSON.stringify(values));
    
    return res.status(200).send(SON.stringify(values))
  }

  exports.saveNote = (req,res)=>{

    var seqId = generator.generate();
    var title = req.body.title;
    var content = req.body.content;
    if (!title||!content) {

      return res.status(500).send({error:"title and content shouldn't be empty "})
    } 
    var Note = model.Note;
    var createdBy = 'admin';
    var createdOn = new Date();
    var noteObj = new Note(seqId,title,content,createdBy, createdOn )
    memStorage.store.setItem(seqId,noteObj);

    return res.status(201).send("succesfully note saved ..........");
  }
  
  exports.updateNote = (req,res)=>{
    res.send("update Note ...........");
  }
  
  exports.deleteNote = (req,res)=>{
    res.send("delete note .............");
  }
  
       