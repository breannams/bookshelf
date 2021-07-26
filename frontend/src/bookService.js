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

    bookFormSubmit(){
        debugger
            // event.preventDefault();
        
            // let title = document.getElementById("title").value
            // let author = document.getElementById("author").value
            // let pages = document.getElementById("pages").value
        
            // let book = {
            //     title: title,
            //     author: author,
            //     pages: pages
            // }
        
            // fetch(`${base_url}/books`,{
            //     method: "POST",
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(book)
            // })
            // .then(resp => resp.json())
            // .then( book =>{
            //     let b = new Book(book.id, book.title, book.author, book.pages)
            //     b.renderBooks()
            // })
          
        }
        

    //delete

}