/* JS Library usage examples */
("use strict");

const bg = new FamilyTreeMaker("Example6");
function tree_example6() {
  bg.makeMember(2, "Jerry");
  bg.makeMember(1, "Ethan");
  bg.makeMember(1, "Catherine");
  bg.drawTree("bg");
  bg.changeBackground("./images/mountain.jpg");
}
tree_example6();
