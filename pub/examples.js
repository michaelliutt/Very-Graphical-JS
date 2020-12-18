/* JS Library usage examples */
("use strict");

const tree = new FamilyTreeMaker("Bezos");
function tree_example1() {
  tree.makeMember(1, "Bob");
  tree.makeMember(1, "Tom");
  tree.makeMember(2, "Jerry");
  tree.makeMember(4, "Ethan");
  tree.makeMember(4, "Catherine");
  tree.makeMember(5, "Emily");
  tree.makeMember(3, "Cathy");
  tree.makeMember(3, "Rachel");
  tree.makeMember(3, "Victoria");
  tree.makeMember(2, "Jack");
  tree.makeMember(1, "Bill");
  tree.makeMember(2, "Alex");
  tree.makeMember(1, "David");
  tree.makeMember(2, "Jason");
  tree.makeMember(1, "Jackson");
  tree.makeMember(1, "Mary");
  tree.drawTree();
  tree.addAncestor(6, 5);
  tree.addAncestor(6, 4);
  tree.addAncestor(6, 7);
  tree.addAncestor(6, 10);
  tree.addAncestor(6, 11);
  tree.markDeceased(12);
  tree.addDeathday(12, "06/12/1990");
  tree.changeColor(12, "white");
  tree.addAge(5, 18);
  tree.removeAge(5);
  tree.addAge(12, 65);
  tree.addGeneration(3);
  tree.addGeneration(6);
  tree.specifyGender(7, "F");
  tree.specifyGender(2, "M");
  tree.addBirthday(6, "12/25/2000");
  tree.changeBackground("./images/snow.jpg");
}

const tree2 = new FamilyTreeMaker("Gates");
function tree_example2() {
  tree2.makeMember(3, "Jerry");
  tree2.makeMember(2, "Ethan");
  tree2.makeMember(2, "Catherine");
  tree2.makeMember(1, "Emily");
  tree2.makeMember(1, "Cathy");
  tree2.makeMember(1, "Bill");
  tree2.makeMember(1, "Linda");
  tree2.drawTree();
  tree2.changeBackground("./images/mountain.jpg");
}

tree_example1();
tree_example2();
