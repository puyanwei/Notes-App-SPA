describe("#initialize", function() {
  var list = new List();
  expect.isEqual("blank array is loaded", list.notelist.length, 0);
});

describe("#add", function() {
  var list = new List();
  list.add("hello");
  expect.isEqual(
    "can create and store a note",
    list.notelist[0].view(),
    "hello"
  );
  list.add("goodbye");
  expect.isEqual(
    "second note says goodbye",
    list.notelist[1].view(),
    "goodbye"
  );
  expect.isEqual("there are two notes in the list", list.notelist.length, 2);
});