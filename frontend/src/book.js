class Book{
    static  addNewBookBttn = document.getElementById("add-new-book")
    static formContainer = document.getElementById("form-container")
    static formHidden = true


    constructor({id, title, author, pages, genre_id}){
        this.id = id
        this.title = title
        this.author = author
        this.pages = pages
        this.genre = genre_id
    }

    static newBookForm(){ 
      
       Book.formContainer.innerHTML +=
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


        <input class = "create-bttn" id = "submit-bttn" type = "submit" value = "Create!">
        </form>
        `
       let submitBttn = document.getElementById("submit-bttn")
       submitBttn.addEventListener('click', Book.handleSubmit)

    }

    static handleSubmit(event){
        event.preventDefault()
        bookService.createBook()
        event.target.parentElement.reset()
    }

     renderBook(attributes){

        booksContainer.innerHTML +=
        `
        <div data-id = ${this.id} class = "genre-goes-here-plz">
        <ul>
        <li><h2 id = "book-title">${this.title}</h2> </li>
        <h3> Written by ${this.author} </h3>
        <h3>number of pages: ${this.pages}</h>
        <h3>genre: ${attributes.genre.name}
        </ul>
        <button class = "delete-bttn", data-id = ${this.id}> Delete Book </button>
        </div>
       
        `
        Book.handleDelete()
    }

   static handleDelete(){
        let deleteBttn = document.getElementsByClassName('delete-bttn')
        for (const bttn of deleteBttn) {
         
            bttn.addEventListener('click', bookService.deleteBook)}
        }

    static handleForm(){
        Book.addNewBookBttn.addEventListener('click', Book.toggleForm)
    }

    static toggleForm(){
        if (Book.formHidden === true){
            Book.newBookForm()
            Book.addNewBookBttn.innerText = "Hide Form"
            Book.formHidden = false
        }
        else{
            Book.formContainer.innerHTML = ''
            Book.addNewBookBttn.innerText = "Add a New Book!"
            Book.formHidden = true
        }
    }

 }