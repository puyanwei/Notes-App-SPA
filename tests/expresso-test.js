describe("Expresso #testing-expresso", function() {
  expect.isEqual("testing that words match", "hello", "hello");
  expect.isNull("testing that null is indeed null", null);
  expect.isTrue("testing that one plus one is two", 1 + 1 == 2);
});
