const base_url = "http://127.0.0.1:3000"
const bookService = new BookService
const addNewBookBttn = document.getElementById("add-new-book")

const genreInput = document.getElementById("genre_id")
addNewBookBttn.addEventListener("click", bookService.newBookForm)
bookService.fetchBooks()


const genreService = new GenreService
const genre = new Genre
genreService.fetchGenres()