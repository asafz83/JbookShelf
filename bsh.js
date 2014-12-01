var books = [];

console.log("Welcome");
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
    editSpan.on("click", function(){
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
    });
    newLi.append(nameSpan).append(authorSpan).append(scoreSpan).append(xSpan).append(editSpan);
    $("ul").append(newLi);
    books.push(newBook);
  });
});
