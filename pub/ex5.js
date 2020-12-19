/* JS Library usage examples */
("use strict");

const decease = new FamilyTreeMaker("Example5");
function tree_example5() {
  decease.makeMember(2, "Jerry");
  decease.makeMember(1, "Ethan");
  decease.makeMember(1, "Catherine");
  decease.drawTree("decease");
  decease.markDeceased(2);
  decease.addDeathday(2, "01/01/2020");
}

tree_example5();
