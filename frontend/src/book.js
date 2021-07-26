class Book{

    constructor({id, title, author, pages, genre_id}){
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
        this.genre_id = genre_id
        
    }


    //instance method to render obj to DOM

    renderBooks(){
        let bookDiv = document.getElementById("books-container")
        bookDiv.innerHTML +=
        `
        <ul>
        <h3>${this.title} by ${this.author}</h3>
            <li>number of pages: ${this.pages}</li>
        </ul>
        <button class = "delete-bttn", data-id = ${this.id} onclick ="deleteBook()">Delete Book </button>
        `
    }

 }