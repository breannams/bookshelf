class Genre{
    constructor(name){
        this.name = name
    }
    selectGenre(){
        genreDropdown.addEventListener("change", genreService.fetchGenre)
    }


    showGenre(genre){
        
    }

 }