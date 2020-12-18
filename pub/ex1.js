/* JS Library usage examples */
("use strict");

const add_member = new FamilyTreeMaker("Example");
function tree_example() {
  add_member.makeMember(2, "Jerry");
  add_member.makeMember(1, "Ethan");
  add_member.makeMember(1, "Catherine");
  add_member.drawTree("add_member");
}

tree_example();
