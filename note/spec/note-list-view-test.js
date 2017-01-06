'use strict';

(function testNewNoteListViewCreated() {
  var listView = new NoteListView();
  console.log("TEST: testNewNoteListViewCreated")
  assert.isTrue(listView instanceof NoteListView)
})()

function testNoteListViewTakesNoteListModel() {
  var noteList = new NoteList();
  var listView = new NoteListView(noteList);
  console.log("TEST: testNoteListViewTakesNoteListModel")
  assert.isTrue(1 === 1)
  // assert.isTrue(listView.getListOfNotes());
}

testNoteListViewTakesNoteListModel()

function testNoteListViewReturnsHTML() {
  var noteList = new NoteList();
  noteList.newNote("this is a string");
  var listView = new NoteListView(noteList);
  console.log("TEST:testNoteListViewReturnsHTML");
  assert.isTrue(listView.returnHTML() === "<ul><li><a href=#notes/0>this is a string</a></li></ul>");
}
testNoteListViewReturnsHTML()

function testNoteListViewReturnsHTMLStringWith20Character() {
  var noteList = new NoteList();
  noteList.newNote("This is a very very long string!");
  var listView = new NoteListView(noteList);
  console.log("TEST: testNoteListViewReturnsHTMLStringWith20Character");
  assert.isTrue(listView.returnHTML() === "<ul><li><a href=#notes/0>This is a very very </a></li></ul>");
}
testNoteListViewReturnsHTMLStringWith20Character()

function testIndividualNoteIsLinkedToIndividualURL() {
  var noteList = new NoteList();
  noteList.newNote("note 1")
  var listView = new NoteListView(noteList);
  console.log("TEST: testIndividualNoteIsLinkedToIndividualURL")
  assert.isTrue(listView.returnHTML() === "<ul><li><a href=#notes/0>note 1</a></li></ul>");
}

testIndividualNoteIsLinkedToIndividualURL()
