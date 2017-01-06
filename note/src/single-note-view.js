"use strict";

(function(exports) {

  function SingleNoteView(note) {
    this.singleNote = note
  }

  SingleNoteView.prototype.getSingleNote = function() {
      return this.singleNote
  }

  SingleNoteView.prototype.returnHTML = function() {
    var singleNote = this.singleNote._text;
    return "<div>" + singleNote + "</div>"
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
