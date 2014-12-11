var books = [];

addAllBooks(books) {
  for (var i=0;i<books.length;i++) {
    var newLi = $("<li>");
    newLi.attr("id", books[i].id);
    var nameSpan = $("<div>");
    nameSpan.html(books[i].bookName);
    var authorSpan = $("<div>");
    authorSpan.html(books[i].authorName);
    var scoreSpan = $("<div>");
    scoreSpan.html(books[i].score);
    var xSpan = $("<div>");
    xSpan.html("X");
    xSpan.on("click", function(){
      $("#" + books[i].id).remove();
    });
     var editSpan = $("<div>");
    editSpan.html("Edit");
    
    editSpan.on("click", function(){
      if ($(this).html() === "Edit") {
        var input1 = $("<input>");
      input1.attr("type", "text");
      input1.val($("#" + books[i].id + " div:nth(0)").html());
      var input2 = $("<input>");
      input2.attr("type", "text");
      input2.val($("#" + books[i].id + " div:nth(1)").html());
      var input3 = $("<input>");
      input3.attr("type", "text");
      input3.val($("#" + books[i].id + " div:nth(2)").html());
      
      $("#" + books[i].id + " div:nth(0)").html(input1);
      $("#" + books[i].id + " div:nth(1)").html(input2);
      $("#" + newBook.id + " div:nth(2)").html(input3);
      $(this).html("Save");
      } else {
        var bookName = $("#" + books[i].id + " div:nth(0) input").val();
        var authorName = $("#" + books[i].id + " div:nth(1) input").val();
        var score = $("#" + books[i].id + " div:nth(2) input").val();
        $("#" + books[i].id + " div:nth(0)").html(bookName);
        $("#" + books[i].id + " div:nth(1)").html(authorName);
        $("#" + books[i].id + " div:nth(2)").html(score);
        $(this).html("Edit");
      }
  }
}


console.log("Welcome");
$.get("/books", function(data){
  addAllBooks(data);
})



$(document).ready(function(){
  $(".addBookForm button").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    newBook.id = "book_" + new Date().getTime();
    //console.log(newBook);
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
    });
     var editSpan = $("<div>");
    editSpan.html("Edit");
    $.post("/books/new", newBook, function(){
      alert("save successfully");
    });
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
      }
      
    });
    newLi.append(nameSpan).append(authorSpan).append(scoreSpan).append(xSpan).append(editSpan);
    $("ul").append(newLi);
    books.push(newBook);
  });
});
