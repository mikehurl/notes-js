"use strict";

function testSingleNoteViewCanBeInstantiated() {
  var singleNote = new SingleNoteView();
  console.log("TEST: testSingleNoteViewCanBeInstantiated")
  assert.isTrue(singleNote instanceof SingleNoteView);
}

function testSingleNoteViewInstantiatesWithNoteModel() {
  var note = new Note("testing")
  var singleNote = new SingleNoteView(note);
  console.log("TEST: testSingleNoteViewInstantiatesWithNoteModel")
  assert.isTrue(singleNote.getSingleNote() === note);

}

function testHTMLRepresentsNoteModel(){
  var note = new Note("some sort of note")
  var singleNote = new SingleNoteView(note)
  console.log("TEST: testHTMLRepresentsNoteModel")
  assert.isTrue(singleNote.returnHTML() === "<div>some sort of note</div>");
}

testSingleNoteViewCanBeInstantiated();
testSingleNoteViewInstantiatesWithNoteModel();
testHTMLRepresentsNoteModel();
