let items = {
  item1: {
    name: "Item 1",
    description: "This is item 1",
    price: 20,
  },
  item2: {
    name: "Item 2",
    description: "This is item 2",
    price: 30,
  },
  item3: {
    name: "Item 3",
    description: "This is item 3",
    price: 40,
  },
  item4: {
    name: "Item 4",
    description: "This is item 4",
    price: 50,
  },
};

function listItems(object) {
  let itemContainer = document.querySelector("#item-list-container");

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      let item = object[key];

      let listItem = document.createElement("li");
      listItem.innerHTML = `<strong>Name:</strong> ${item.name}, <strong>Description:</strong> ${item.description}, <strong>Price:</strong> ${item.price}`;
      itemContainer.appendChild(listItem);
    }
  }
}

listItems(items);
