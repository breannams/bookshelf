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

    newBookForm(){ //maybe moving this to book class since its just rendering instead of fetching?
        let bookForm = document.getElementById("form-container")
        bookForm.innerHTML +=
        `
        <form>
        <h3>Enter In a New Book!</h3>
            Title:<input type= "text" id= "title"><br>
            Author:<input type = "text" id= "author"><br>
            Number of Pages:<input type = "text" id = "pages"><br>
            
        <input type = "submit" value = "Create!">
        </form>
        `
        bookForm.addEventListener("submit", bookFormSubmit)
    }

    bookFormSubmit(){
            event.preventDefault();
        
            let title = document.getElementById("title").value
            let author = document.getElementById("author").value
            let pages = document.getElementById("pages").value
        
            let book = {
                title: title,
                author: author,
                pages: pages
            }
        
            fetch(`${base_url}/books`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
            .then(resp => resp.json())
            .then( book =>{
                let b = new Book(book.id, book.title, book.author, book.pages)
                b.renderBooks()
            })
          
        }
        

    //delete

}