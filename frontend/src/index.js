 /////index
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
const addNewBookBttn = document.getElementById("add-new-book")

addNewBookBttn.addEventListener("click", bookService.newBookForm)
bookService.fetchBooks()