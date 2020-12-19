/* JS Library usage examples */
("use strict");

const attributes = new FamilyTreeMaker("Example4");
function tree_example4() {
  attributes.makeMember(2, "Jerry");
  attributes.makeMember(1, "Ethan");
  attributes.makeMember(1, "Catherine");
  attributes.drawTree("attributes");
  attributes.addBirthday(1, "01/01/1900"); // display birthday
  attributes.addAge(1, 20); // display age
  attributes.addGeneration(1); //display generation
}

tree_example4();
