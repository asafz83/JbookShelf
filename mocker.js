$.mockjax({
			  url: "/books",
			  response: function(){
			    if (localStorage.getItem("refael") == null || localStorage.getItem("refael").length == 0) {
          	localStorage.setItem("refael", "[]"); 	
          	this.responseText = {"data": []};
          	} else {
          		var a = localStorage.getItem("refael");
          		booksArray = JSON.parse(a);
            	this.responseText = {"data": booksArray};	
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
