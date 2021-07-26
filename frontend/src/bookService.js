//for all of book's fetches :)

class BookService{
    constructor(endpoint){
        this.endpoint = endpoint
    }


    //read method

    fetchBooks(){
        fetch(`${this.endpoint}/books`)
        .then(resp => resp.json())
        .then(books => {
            
        })
    }
    //create method

    //delete

}