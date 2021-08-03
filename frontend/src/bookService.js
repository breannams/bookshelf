
class BookService{
  
    //read method

    fetchBooks(){
        fetch(`${base_url}/books`)
        .then(resp => resp.json())
        .then(Book.renderBooks) //data set gets passed into renderBooks implicitly
    }
      

    //create method


    createBook(){
        event.preventDefault()
      
          const {title, author, pages, genre} = event.target.parentElement

            const book = {
                title: title.value,
                author: author.value,
                pages: pages.value,
                genre_id: genre.value
            }
           
            const configObj ={
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        
             fetch(`${base_url}/books`,configObj)
             .then(resp => resp.json())
             .then(data =>{debugger})
        }
        

    //delete

    deleteBook(){
        event.target.parentElement.remove()
        let bookId = parseInt(event.target.dataset.id)
         
        fetch(`${base_url}/books/${bookId}`,{
                method: "DELETE"
        })
        .then(resp => resp.json())
        .then(msg => {
            alert(msg.message)
        })
      
       
    }

    
}