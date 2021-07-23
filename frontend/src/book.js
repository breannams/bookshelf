class Book{
    constrctor(id, title, author, pages){
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
    }


    //instance method to render obj to DOM

    renderBooks(){
        let bookDiv = document.getElementById("books-container")
        bookDiv.innerHTML +=
        `
        <ul>
        <h3>${this.title}</h3>
        </ul>
        <button class = "delete-bttn", data-id = ${this.id} onclick ="deleteBook()">Delete Book </button>
        `
    }

 }