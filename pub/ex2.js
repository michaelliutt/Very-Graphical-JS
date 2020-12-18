/* JS Library usage examples */
("use strict");

const tree = new FamilyTreeMaker("Example2");
function tree_example2() {
  tree.makeMember(2, "Jerry");
  tree.makeMember(1, "Ethan");
  tree.makeMember(1, "Catherine");
  tree.drawTree("add_relatives");
  tree.addAncestor(1, 2);
  tree.addAncestor(1, 3);
}

tree_example2();
