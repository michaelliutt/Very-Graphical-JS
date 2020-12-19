/* JS Library usage examples */
("use strict");

const relatives = new FamilyTreeMaker("Example2");
function tree_example2() {
  relatives.makeMember(2, "Jerry");
  relatives.makeMember(1, "Ethan");
  relatives.makeMember(1, "Catherine");
  relatives.drawTree("add_relatives");
  relatives.addAncestor(1, 2);
  relatives.addAncestor(1, 3);
}

tree_example2();
