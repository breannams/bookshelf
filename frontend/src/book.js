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
        <h2 id = "book-title">${this.title}</h2> <h3 id = "book-author"> Written by ${this.author} </h3>
            <li id = "book-pages">number of pages: ${this.pages}</li>
        </ul>
        <button class = "delete-bttn", data-id = ${this.id} onclick ="bookService.deleteBook()"> Delete Book </button>
        <button class = "edit-bttn", data-id = ${this.id} onclick = "bookService.editBookForm()">Edit Book </button>
        
        `
    }


 }