'use strict';

function noteControllerIsInstantiated(){
  var cont = new NoteController();
  console.log("TEST: noteControllerIsInstantiated");
  assert.isTrue(cont instanceof NoteController);
}

function innerPropertyOfAppContainsHTML(){
  var cont = new NoteController();
  cont.createNote("Favourite food: pesto")
  cont.getHTML();
  console.log("TEST: innerPropertyOfAppContainsHTML");
  assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><a href="#notes/0">Favourite food: pest</a></li></ul>');
}

noteControllerIsInstantiated();
innerPropertyOfAppContainsHTML();
