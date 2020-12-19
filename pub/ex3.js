/* JS Library usage examples */
("use strict");

const gender = new FamilyTreeMaker("Example3");
function tree_example3() {
  gender.makeMember(2, "Jerry");
  gender.makeMember(1, "Ethan");
  gender.makeMember(1, "Catherine");
  gender.drawTree("gender");
  gender.specifyGender(1, "male");
}

tree_example3();
