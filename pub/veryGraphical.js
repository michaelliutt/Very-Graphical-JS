function FamilyMember(generation, name, family_name, family_id) {
  this.name = name; // First name by default
  this.last_name = null; // Can specify is different from family name
  this.family_name = family_name; // family name
  this.family_id = family_id; // index of this person in the family
  this.age = null; // Can specify
  this.age_display = false;
  this.generation = generation;
  this.generation_display = false;
  this.birthday = null;
  this.birthday_display = false;
  this.diedOn = "Currently Alive";
  this.diedOn_display = false;
  this.element = null;
  this.descendents = [];
  this.ancestors = [];
}

FamilyMember.prototype = {
  makeMember: function () {
    const bold = document.createElement("strong");
    const element = document.createElement("div");
    const text = document.createTextNode(`${this.name}`);
    element.id = `${this.family_name}${this.family_id}`;
    bold.id = element.id + "name";
    if (this.generation == 1) {
      element.className = "gen_one";
    } else if (this.generation == 2) {
      element.className = "gen_two";
    } else if (this.generation == 3) {
      element.className = "gen_three";
    } else if (this.generation == 4) {
      element.className = "gen_four";
    } else if (this.generation == 5) {
      element.className = "gen_five";
    }
    bold.appendChild(text);
    element.appendChild(bold);
    const br = document.createElement("br");
    element.appendChild(br);
    this.element = element;
    return element;
  },
  get_id: function () {
    return this.family_id;
  },
  get_family_name: function () {
    return this.family_name;
  },
  get_element: function () {
    return this.element;
  },
  get_ancestors: function () {
    return this.ancestors;
  },
  get_descendents: function () {
    return this.descendents;
  },
};

function FamilyTreeMaker(family_name) {
  this.family_name = family_name;
  this.population = 0;
  this.members = [];
  this.youngest_generation = 0;
  this.members_by_generation = {};
  this.highlighted = false; // if a part of the tree is currently being highlighted
}

FamilyTreeMaker.prototype = {
  makeMember: function (generation, name) {
    const member = new FamilyMember(
      generation,
      name,
      this.family_name,
      this.population + 1
    );
    const member_element = member.makeMember();
    member_element.addEventListener("click", () => {
      this.displayFullDesc(member);
    });
    member_element.addEventListener("click", () => {
      this.highlightDirectRelatives(member.family_id);
    });
    if (generation > this.youngest_generation) {
      this.youngest_generation = generation;
    }
    this.members.push(member);
    if (generation in this.members_by_generation) {
      this.members_by_generation[generation].push(member);
    } else {
      this.members_by_generation[generation] = [member];
    }
    this.population += 1;
  },

  findMemberElement: function (id) {
    const member = document.getElementById(`${this.family_name}${id}`);
    return member;
  },

  findMemberByElement: function (element) {
    const id = element.id;
    let member = null;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].element.id == id) {
        member = this.members[i];
      }
    }
    return member;
  },

  get_name: function () {
    return this.family_name;
  },
  get_pop: function () {
    return this.population;
  },
  get_members: function () {
    return this.members;
  },
  get_members_by_gen: function (gen) {
    return this.members_by_generation[gen];
  },

  // Mark the family member with given id as deceased
  markDeceased: function (id) {
    const member_element = this.findMemberElement(id);
    member_element.style.outline = "2px solid red";
    member_element.style.borderRadius = "0%";
    this.changeColor(id, "white");
  },

  // Mark the family member with given id as ancestor
  addAncestor: function (id, parent_id) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    const parent_element = this.findMemberElement(parent_id);
    const parent = this.findMemberByElement(parent_element);
    console.log(parent);
    member.ancestors.push(parent);
    parent.descendents.push(member);
  },

  // Mark the family member with given id as descendent
  addDescendent: function (id, parent_id) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    const parent_element = this.findMemberElement(parent_id);
    const parent = this.findMemberByElement(parent_element);
    console.log(parent);
    member.descendents.push(parent);
    parent.ancestors.push(member);
  },

  // Highlight this member
  highlightDirectRelative: function (id) {
    const member_element = this.findMemberElement(id);
    // if it is not already highlighted
    if (!this.highlighted) {
      setTimeout(() => {
        this.highlighted = true;
      }, 50);
      const curr = member_element.style.outline;
      member_element.style.outline = "6px solid green";
      member_element.style.borderRadius = "0%";
      setTimeout(() => {
        member_element.style.outline = curr;
        member_element.style.borderRadius = "25px";
        this.highlighted = false;
      }, 3000);
    }
  },

  // Highlight direct relatives of this member
  highlightDirectRelatives: function (id) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    // if it is not already highlighted
    this.highlightDirectRelative(member.family_id);
    member.ancestors.forEach((relative) => {
      this.highlightDirectRelative(relative.family_id);
    });
    member.descendents.forEach((relative) => {
      this.highlightDirectRelative(relative.family_id);
    });
  },
  // Specify gender of the family member with given id
  specifyGender: function (id, gender) {
    const member_element = this.findMemberElement(id);
    if (gender == "male" || gender == "M") {
      member_element.style.backgroundColor = "LightBlue";
    } else if (gender == "female" || gender == "F") {
      member_element.style.backgroundColor = "LightPink";
    } else {
      member_element.style.backgroundColor = "PeachPuff";
    }
  },

  // Add age display to family member with given id
  addAge: function (id, age) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    member.age = age;
    if (!member.age_display) {
      const container = document.createElement("span");
      const br = document.createElement("br");
      const text = document.createTextNode(`Age: ${member.age}`);
      container.id = member.element.id + "age";
      container.appendChild(text);
      container.appendChild(br);
      member_element.appendChild(container);
      member.age_display = true;
    }
  },

  // Hide age display to family member with given id
  removeAge: function (id) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    if (member.age_display) {
      const age_element = document.getElementById(`${member_element.id}age`);
      member_element.removeChild(age_element);
      member.age_display = false;
    }
  },

  // Add bday display to family member with given id
  addBirthday: function (id, date) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    member.birthday = date;
    if (!member.birthday_display) {
      const container = document.createElement("span");
      const br = document.createElement("br");
      const text = document.createTextNode(`Birthday: ${member.birthday}`);
      container.id = member.element.id + "bday";
      container.appendChild(text);
      container.appendChild(br);
      member_element.appendChild(container);
      member.birthday_display = true;
    }
  },

  // Add date of death, if deceased
  addDeathday: function (id, date) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    member.diedOn = date;
    if (!member.diedOn_display) {
      const container = document.createElement("span");
      const br = document.createElement("br");
      const text = document.createTextNode(`Died on: ${member.diedOn}`);
      container.id = member.element.id + "dday";
      container.appendChild(text);
      container.appendChild(br);
      member_element.appendChild(container);
      member.diedOn_display = true;
    }
  },

  // Add generation number display to family member of given id
  addGeneration: function (id) {
    const member_element = this.findMemberElement(id);
    const member = this.findMemberByElement(member_element);
    if (!member.generation_display) {
      const container = document.createElement("span");
      const br = document.createElement("br");
      const text = document.createTextNode(`Generation: ${member.generation}`);
      container.id = member.element.id + "gen";
      container.appendChild(text);
      container.appendChild(br);
      member_element.appendChild(container);
      member.age_display = true;
    }
  },

  displayFullDesc: function (member) {
    const tree = document.getElementById(this.family_name + "tree");

    // if there is already a description present
    if (
      // length for each member, yongest_gen for br, 1 for existing desc
      tree.childElementCount >=
      this.members.length + this.youngest_generation + 1
    ) {
      tree.removeChild(document.getElementById(this.family_name + "desc"));
    }
    const desc = document.createElement("div");
    desc.className = "desc";
    desc.id = this.family_name + "desc";
    desc.appendChild(
      document.createTextNode("Full Description of " + member.name)
    );
    desc.appendChild(document.createElement("br"));

    desc.appendChild(document.createTextNode("Age:" + member.age));
    desc.appendChild(document.createElement("br"));

    desc.appendChild(
      document.createTextNode("Generation:" + member.generation)
    );
    desc.appendChild(document.createElement("br"));

    desc.appendChild(document.createTextNode("Birthday:" + member.birthday));
    desc.appendChild(document.createElement("br"));

    desc.appendChild(document.createTextNode("Died on:" + member.diedOn));
    desc.appendChild(document.createElement("br"));

    desc.appendChild(
      document.createTextNode("Id in the family: " + member.family_id)
    );
    desc.appendChild(document.createElement("br"));
    tree.appendChild(desc);
  },

  // Change background of tree to image at given path
  changeBackground: function (url) {
    const tree = document.getElementById(this.family_name + "tree");
    tree.style.backgroundImage = ` url(${url})`;
    tree.style.backgroundSize = " 100% 100%";
  },
  changeColor: function (id, color) {
    const member = this.findMemberElement(id);
    member.style.backgroundColor = color;
  },

  // draw the tree inside element with given id
  drawTree: function (element_id) {
    const body = document.getElementById(element_id);
    const tree = document.createElement("div");
    tree.className = "tree";
    tree.style.outline = "2px solid grey";
    tree.style.padding = "50px";
    tree.style.margin = "10px";
    tree.style.marginBottom = "0px";
    tree.style.width = `${this.members_by_generation["1"].length * 200}px`;
    tree.style.height = `${this.youngest_generation * 130 + 250}px`;
    tree.style.backgroundColor = "white";
    tree.id = this.family_name + "tree";
    for (let gen = 1; gen < this.youngest_generation + 1; gen++) {
      for (let i = 0; i < this.members_by_generation[gen].length; i++) {
        tree.append(this.members_by_generation[gen][i].element);
      }
      const br = document.createElement("br");
      tree.append(br);
    }
    body.append(tree);
  },
};
