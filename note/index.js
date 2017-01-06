"use strict";

(function() {
 window.addEventListener("load", function() {
   var controller = new NoteController();
   controller.createNote("Test string 1");
   controller.createNote("Test string 2");
   controller.getHTML();
 });
})();
// (function() {
// var test = "a string"
// var controller = new NoteController();
// controller.createNote("Test string 1");
// controller.createNote("Test string 2");
// controller.getHTML();
// })();
