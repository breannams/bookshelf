
class BookService{
  
    //read method
    fetchBooks(){
        fetch(`${base_url}/books`)
        .then(resp => resp.json())
        .then(book =>{
         
            let bookArr = book.data
            for (const book of bookArr){
                let attributes = book.attributes
     
                const b = new Book(attributes)
                b.renderBook(attributes) 
               
      
            }
        })
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
                .then( book =>{
                    if(book.error){
                    alert(book.error)
                    }
                    else  {
                  
                            let attributes = book.data.attributes
                            const b = new Book(attributes)
                            b.renderBook(attributes)
                           
                            
                    }
             })
            
             
            
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