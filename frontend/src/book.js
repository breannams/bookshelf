class Book{

    constructor({id, title, author, pages, genre_id}){
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
        this.genre = genre_id
        
    }

   static newBookForm(){ 
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


        <input id = "submit-bttn" type = "submit" value = "Create!">
        </form>
        `
       let submitBttn = document.getElementById("submit-bttn")
       submitBttn.addEventListener('click', Book.handleSubmit)

    }

    static handleSubmit(event){
       
        event.preventDefault()
       bookService.createBook()
    }

  static  renderBooks(books){
        let booksArr = books.data
        booksArr.forEach(book =>{
            Book.renderBook(book)
        })
    }

    static renderBook(book){
        let bookDetails = book.attributes
     
        booksContainer.innerHTML +=
        `
        <ul>
        <div id = specific-book>
        <h2 id = "book-title">${bookDetails.title}</h2> <h3 id = "book-author"> Written by ${bookDetails.author} </h3>
            <li id = "book-pages">number of pages: ${bookDetails.pages}</li>
            <li id = "book-genre">genre: ${bookDetails.genre.name}
        
        </ul>
        <button class = "delete-bttn", data-id = ${bookDetails.id}> Delete Book </button>
    
        </div>
        `
        let deleteBttn = document.getElementsByClassName('delete-bttn')
        for (const bttn of deleteBttn) {
            bttn.addEventListener('click', bookService.deleteBook)}
    }

 }