// //document.addEventListener("DOMContentLoaded", () =>{

//     //something you want to happen upon page loading
// //})


// //read - fetch book index


// const base_url = "http://127.0.0.1:3000"


// function fetchBooks(){
//     fetch(`${base_url}/books`)
//     .then(resp => resp.json())
//     .then(books =>{
//            for (const book of books){
//             let b = new Book(book)
              
//                 b.renderBooks();
//            }
//         })

//     }
// //create - create new book
//         //create form & add event listener
//         //fetch POST request to backend

// function newBookForm(){
//     let bookForm = document.getElementById("form-container")
//     bookForm.innerHTML +=
//     `
//     <form>
//     <h3>Enter In a New Book!</h3>
//         Title:<input type= "text" id= "title"><br>
//         Author:<input type = "text" id= "author"><br>
//         Number of Pages:<input type = "text" id = "pages"><br>
        
//     <input type = "submit" value = "Create!">
//     </form>
//     `
//     bookForm.addEventListener("submit", bookFormSubmit)
// }

// function bookFormSubmit(){
//     event.preventDefault();

//     let title = document.getElementById("title").value
//     let author = document.getElementById("author").value
//     let pages = document.getElementById("pages").value

//     let book = {
//         title: title,
//         author: author,
//         pages: pages
//     }

//     fetch(`${base_url}/books`,{
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(book)
//     })
//     .then(resp => resp.json())
//     .then( book =>{
//         let b = new Book(book.id, book.title, book.author, book.pages)
//         b.renderBooks()
//     })
  
// }

// function deleteBook(){
//     let bookId = parseInt(event.target.dataset.id)
//     fetch(`${base_url}/books/${bookId}`,{
//         method: "DELETE"
//     })
//     this.location.reload()
// }


// /////index
// function fetchGenres(){
//     //  let genresContainer = document.getElementById("genres-container")
//       fetch(`${base_url}/genres`)
//       .then(resp => resp.json())
//       .then(renderGenres)
//   }

//   //render the genres...
//   function renderGenres(genres){
      
//   }

//   fetchBooks()
//   newBookForm()
//   fetchGenres()







///trying it out with the Service files again:

const base_url = "http://127.0.0.1:3000"
const bookService = new BookService(base_url)

bookService.fetchBooks()
bookService.newBookForm()

function handleSubmit(){
    event.preventDefault();
    bookService.bookFormSubmit();
    event.target.reset()
}
