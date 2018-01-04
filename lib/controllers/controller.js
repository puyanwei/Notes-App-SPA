(function(exports) {
  function Controller(list, listView, tag) {
    this.list = list;
    this.listView = listView;
    this.tag = tag;
  }

  Controller.prototype.getListView = function() {
    return this.listView.converted;
  };

  Controller.prototype.outputHTML = function() {
    return (document.getElementById(this.tag).innerHTML = this.getListView());
  };

  Controller.prototype.getNoteView = function(number) {
    return "<div>" + this.list.notelist[number].text + "</div>";
  };

  Controller.prototype.makeURLChangeToSeeNote = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    controller.getNoteView(getNoteIdFromUrl(window.location));
    console.log(getNoteIdFromUrl(window.location));
  }
  //
  // function getNoteIdFromUrl(location) {
  //   return location.hash.split("#")[1].split("/")[1];
  // }
  //
  // function submitListen() {
  //   document.getElementById("text").addEventListener("submit", function(event) {
  //     console.log(event);
  //     event.preventDefault();
  //   });

  //
  // function showNote(animal) {
  //   document.getElementById("animal").innerHTML = animal;
  // }

  // ------

  //   makeURLChangeShowIndividualNote()
  //
  // function makeURLChangeShowIndividualNote() {
  //   window.addEventListener("hashchange", showIndividualNote);
  // }
  //
  // function showIndividualNote() {
  //   controller.showNote(getNoteIdFromUrl(window.location), element);
  // }
  //
  // function getNoteIdFromUrl(location) {
  //   return location.hash.split("#")[1].split("/")[1]
  // }
  //
  // function submitListen() {
  //   document.getElementById("text").addEventListener("submit", function(event) {
  //     console.log(event);
  //     event.preventDefault();
  //   })
  // };
  //
  // submitListen();
  // }

  exports.Controller = Controller;
})(this);