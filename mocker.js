
$.mockjax({
  // matches /author/{any number here}/isbn/{any number with dashes here}
  // for example: "/author/1234/isbn/1234-5678-9012-0"
  url: /^\/books\/update\/book_([\d]+)$/,
  // names of matching params
  urlParams: ["bookId"],
  response: function (settings) {
    var bookId = settings.urlParams.bookId;
    var a = localStorage.getItem("refael");
    booksArray = JSON.parse(a);
    indexToRemove = -1;
    for (var i=0;i<booksArray.length;i++) {
    	if (booksArray[i].id === "book_" + bookId) {
    		indexToRemove = i;break;
    	}
    }
    if (indexToRemove > -1) {
    	booksArray.splice(indexToRemove, 1);
    	localStorage.setItem("refael", JSON.stringify(booksArray));
		      this.responseText = {"removed": "1"};
    }
    else {
    	this.responseText = {"removed": "0"};
    }
    
  }
});


$.mockjax({
			  url: "/books",
			  response: function(){
			    if (localStorage.getItem("refael") == null || localStorage.getItem("refael").length == 0) {
          	localStorage.setItem("refael", "[]"); 	
          	this.responseText = {"data": []};
          	} else {
          		var a = localStorage.getItem("refael");
          		booksArray = JSON.parse(a);
            	this.responseText = booksArray;	
          	}
			  }
			});
			
			$.mockjax({
			  url: "/books/new",
			  response: function(settings) {
		      var book = settings.data;
		      var a = localStorage.getItem("refael");
		      booksArray = JSON.parse(a);
		      if (!booksArray) {
		      	booksArray = [];
		      }
		      booksArray.push(book);
		      localStorage.setItem("refael", JSON.stringify(booksArray));
		      this.responseText = {"status": "200"};
				}
			});
