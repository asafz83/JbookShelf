var books = [];


$.get("/books", function(data){
  console.log(data);
  for (var i=0;i<data.length;i++) {
    addBookToDom(data[i]);
  }
});

function addBookToDom(newBook) {
    var newLi = $("<li>");
    newLi.attr("id", newBook.id);
    var nameSpan = $("<div>");
    nameSpan.html(newBook.bookName);
    var authorSpan = $("<div>");
    authorSpan.html(newBook.authorName);
    var scoreSpan = $("<div>");
    scoreSpan.html(newBook.score);
    var xSpan = $("<div>");
    xSpan.html("X");
    xSpan.on("click", function(){
      $("#" + newBook.id).remove();
      $.delete("/books/update/" + newBook.id, {}, function(data){
        alert("remove: " + data.removed);
      })
      //todo send DELETE with newBook.id as url parameter to the url /books/remove/<put newBook.id here>
    });
     var editSpan = $("<div>");
    editSpan.html("Edit");
    editSpan.on("click", function(){
      if ($(this).html() === "Edit") {
        var input1 = $("<input>");
      input1.attr("type", "text");
      input1.val($("#" + newBook.id + " div:nth(0)").html());
      var input2 = $("<input>");
      input2.attr("type", "text");
      input2.val($("#" + newBook.id + " div:nth(1)").html());
      var input3 = $("<input>");
      input3.attr("type", "text");
      input3.val($("#" + newBook.id + " div:nth(2)").html());
      
      $("#" + newBook.id + " div:nth(0)").html(input1);
      $("#" + newBook.id + " div:nth(1)").html(input2);
      $("#" + newBook.id + " div:nth(2)").html(input3);
      $(this).html("Save");
      } else {
        var bookName = $("#" + newBook.id + " div:nth(0) input").val();
        var authorName = $("#" + newBook.id + " div:nth(1) input").val();
        var score = $("#" + newBook.id + " div:nth(2) input").val();
        $("#" + newBook.id + " div:nth(0)").html(bookName);
        $("#" + newBook.id + " div:nth(1)").html(authorName);
        $("#" + newBook.id + " div:nth(2)").html(score);
        $(this).html("Edit");
        //todo send POST with newBook.id as url parameter and the updated Book as data object to the url /books/udpate/<put newBook.id here>
      }
});
  newLi.append(nameSpan).append(authorSpan).append(scoreSpan).append(xSpan).append(editSpan);
    $("ul").append(newLi);
    books.push(newBook);
}




$(document).ready(function(){
  $(".addBookForm button").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    newBook.id = "book_" + new Date().getTime();
    //console.log(newBook);
    
    $.post("/books/new", newBook, function(){
      alert("save successfully");
      addBookToDom(newBook);
    });
    
      
    });
    
  });

