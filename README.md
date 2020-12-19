# js-library-liutia86

# Landing Page URL

https://very-graphical-library.herokuapp.com/

# Documentation URL

https://very-graphical-library.herokuapp.com/api_doc.html

# Getting Started

## Installing the library

-> Before the library is published on NPM, developers need to download the library JS file and save in their project folder
-> This library will soon be available to download on <a href="https://github.com/michaelliutt/Very-Graphical-JS"> github

## Adding this library to HTML

-> Include provided css file named "veryGraphical.css" wrapped in "link" tag
-> Include the library JS file named "veryGraphical.js" wrapped in "script" tag

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="veryGraphical.css">
    <script defer type="text/javascript" src='veryGraphical.js'></script>

</head>
</html>

```

## Main functionalities snippets

#### \*\*Note: The order of having methods called matters. Please read drawTree section for detailed explanation.

### Constructor

```

const example_tree = new FamilyTreeMaker("family_name");


params: [family name in string format]
return: a FamilyTreeMaker object

```

### makeMember() - Adding new member to the family

```

    example_tree.makeMember(1, "Catherine");


    params: [generation of the member to add], [name of the member to add]

```

### drawTree() - Display family tree with given members in HTML

#### \*\*Note: Call this function after adding all wanted members, and before other tree modifying function

```

example_tree.makeMember(1, "Catherine");
example_tree.makeMember(2, "Tom");
example_tree.makeMember(3, "Jerry");
... (making more members)

example_tree.drawTree("div1");

params: [id of the container element]

```
