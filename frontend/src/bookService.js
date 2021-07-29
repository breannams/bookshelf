//for all of book's fetches :)

class BookService{
    constructor(endpoint){
        this.endpoint = endpoint
    }


    //read method

    fetchBooks(){
        fetch(`${this.endpoint}/books`)
        .then(resp => resp.json())
        .then(books => {
            for (const book of books){
                let b = new Book(book)
                b.renderBooks();
            }
        })
    }
    //create method
     newBookForm(){ 
        let bookForm = document.getElementById("form-container")
        bookForm.innerHTML +=
        `
        <form>
        <h3>Enter In a New Book!</h3>
            Title:<input type= "text" id= "title"><br>
            Author:<input type = "text" id= "author"><br>
            Number of Pages:<input type = "text" id = "pages"><br>
            Genre_id: <input type = "text" id = "genre_id"> <br>
        <input type = "submit" value = "Create!">
        </form>
        `
        bookForm.addEventListener("submit", handleBookSubmit)
    }

    bookFormSubmit(){
          
            const book = {
                title: document.getElementById("title").value,
                author: document.getElementById("author").value,
                pages: document.getElementById("pages").value,
                genre_id: document.getElementById("genre_id").value
            }
           
            const configObj ={
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        
             fetch(`${this.endpoint}/books`,configObj)
             .then(resp => resp.json())
             .then( book =>{
                let b = new Book(book)
                b.renderBooks()
               
             })
          
        }
        

    //delete

    deleteBook(){
            let bookId = parseInt(event.target.dataset.id)
            fetch(`${this.endpoint}/books/${bookId}`,{
                method: "DELETE"
            })
       
    }

        //editing
    editBookForm(){
        let bookTitle = document.getElementById("book-title").textContent
        let bookAuthor = document.getElementById("book-author").textContent
        let bookPages = document.getElementById("book-pages").textContent
        
        title.value = bookTitle
        author.value = bookAuthor
        pages.value = bookPages
      ///add in something for the genre field at a later time
    }
    
}