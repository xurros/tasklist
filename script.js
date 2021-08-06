function newItem() {

//jquery
//1. Adding a new item to the list of items:

    let lists = $("<li></li>");
    let inputValue = $("#input").val();
      lists.append(inputValue);

    if (inputValue === "") {
      alert ("Please add your task for today");
        } else {
      $("#list").append(lists);
    }

// Crossing out the item from the List
lists.on("dblclick", function cossOut() {
  lists.addClass("strike");
});
    // function crossOut() {
    //   lists.addClass("strike");
    // }
    // lists.on("dblclick", crossOut);


// Adding the delete button
let crossOutButton = $("<crossOutButton> X </crossOutButton>");
      lists.append(crossOutButton);

// Adding class delete (display: none) from the css
crossOutButton.on("click", function deleteListItem() {
  lists.addClass("delete");
});


// Re-ordeing the task lists
  $("#list").sortable();
}
