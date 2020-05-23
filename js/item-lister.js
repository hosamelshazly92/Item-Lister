let form = document.getElementById("addForm"),
    itemList = document.getElementById("items"),
    filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete item event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

//add item function
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById("item").value;

    //create new li element
    let li = document.createElement("li");

    //add classes
    li.className = "list-group-item";

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    let deleteBtn = document.createElement("button");

    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //append text node to the buton
    deleteBtn.appendChild(document.createTextNode("-"));

    //add delete button to li
    li.appendChild(deleteBtn);

    //add li to the list    
    itemList.appendChild(li);
}

//remove item function
function removeItem(e) {
    //click delete button
    if (e.target.classList.contains("delete")) {
        //confirmation message
        if (confirm("Press ok to proceed")) {
            //get the li of the clicked button
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items function
function filterItems(e) {
    //convert all text to lowercase
    let text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName("li");
    //convert html collection to array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        //check for matchings
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
