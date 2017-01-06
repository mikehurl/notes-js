"use strict";

(function() {
 window.addEventListener("load", function() {
   var controller = new NoteController();
   controller.createNote("Test string 10000000000000000000000001");
   controller.createNote("Test string 20000000000000000000000001");
   controller.getHTML();
   controller.makeURLChangeShowNoteForCurrentPage();
 });
})();
