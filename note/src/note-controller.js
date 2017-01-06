'use strict';

(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.createNote = function(text) {
    this.noteList.newNote(text)
  };

  NoteController.prototype.getHTML = function() {
   var app = document.getElementById("app");
   app.innerHTML = this.noteListView.returnHTML();
 };

  NoteController.prototype.makeURLChangeShowNoteForCurrentPage = function(){
    var self = this;
    window.addEventListener("hashchange", function(){
      var id = parseInt(window.location.href.split("notes/")[1]);
      var note = self.noteList.seeList()[id];
      var singleNoteView = new SingleNoteView(note);
      var app = document.getElementById("app");
      app.innerHTML = singleNoteView.returnHTML();
    });
  };

  exports.NoteController = NoteController;

})(this);
