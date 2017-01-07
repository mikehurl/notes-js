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

function testPageShowsSingleNote(){
  var cont = new NoteController();
  cont.makeURLChangeShowNoteForCurrentPage();
  cont.createNote("Favourite food: pesto")
  cont.getHTML();
  document.getElementsByTagName("a")[0].click();
  window.addEventListener("hashchange", function(){
    console.log("TEST: PageShowsSingleNote");
    assert.isTrue(document.getElementById("app").innerHTML === "<div>Favourite food: pesto</div>")
  });
}

function testWhenAppLoadsAnEmptyListIsDisplayed() {
  var cont = new NoteController();
  console.log("TEST: testWhenAppLoadsAnEmptyListIsDisplayed")
  assert.isTrue(document.getElementById("app").innerHTML === "<ul></ul>");
};

noteControllerIsInstantiated();
innerPropertyOfAppContainsHTML();
testPageShowsSingleNote();
testWhenAppLoadsAnEmptyListIsDisplayed();
