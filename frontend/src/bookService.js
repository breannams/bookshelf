
class BookService{
  
    //read method

    fetchBooks(){
        fetch(`${base_url}/books`)
        .then(resp => resp.json())
        .then(bookService.renderBooks) //data set gets passed into renderBooks implicitly
    }
        renderBooks(books){
            let booksArr = books.data
            booksArr.forEach(book =>{
                bookService.renderBook(book)
            })
        }
    renderBook(book){
            let bookDetails = book.attributes
         
            booksContainer.innerHTML +=
            `
            <ul>
            <div id = specific-book>
            <h2 id = "book-title">${bookDetails.title}</h2> <h3 id = "book-author"> Written by ${bookDetails.author} </h3>
                <li id = "book-pages">number of pages: ${bookDetails.pages}</li>
                <li id = "book-genre">genre: ${bookDetails.genre.name}
            
            </ul>
            <button class = "delete-bttn", data-id = ${bookDetails.id} onclick ="bookService.deleteBook()"> Delete Book </button>
        
            </div>
            `
   
    }

    //create method
     newBookForm(){ 
        let bookForm = document.getElementById("form-container")
        bookForm.innerHTML +=
        `
        <form>
        <h3>Enter In a New Book!</h3>
            <label> Title:<input type= "text" id= "title"></label><br>
            <label>Author:<input type = "text" id= "author"></label><br>
            <label>Number of Pages:<input type = "text" id = "pages"></label><br>

            <label>Select a Genre: </label>
            <select id = "book-genre" name = "genre">
            <option value = "1">Horror</option>
            <option value = "2">Fantasy</option>
            <option value = "3">Sci-Fi</option>
            <option value = "4">Suspense</option>
            <option value = "5">Religion</option>
            <option value = "6">Action</option>
            <option value = "7">Classics</option>
            <option value = "9">Comic Books</option>
            
            </select>
            <br>


        <input type = "submit" value = "Create!">
        </form>
        `
        bookForm.addEventListener("submit", bookService.handleBookSubmit)
    }

     handleBookSubmit(event){
        event.preventDefault();
        bookService.bookFormSubmit();
        event.target.reset()
    }

    bookFormSubmit(){
          const {title, author, pages, genre} = event.target
           
            const book = {
                title: title.value,
                author: author.value,
                pages: pages.value,
                genre_id: genre.value
            }
           
            const configObj ={
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        
             fetch(`${base_url}/books`,configObj)
             .then(resp => resp.json())
             .then( book =>{
                let b = new Book(book)
                b.bookService.renderBook()
               
             })
         
        }
        

    //delete

    deleteBook(){
 
            let bookId = parseInt(event.target.dataset.id)
            fetch(`${base_url}/books/${bookId}`,{
                method: "DELETE"
            })
      
     
    }

    
}