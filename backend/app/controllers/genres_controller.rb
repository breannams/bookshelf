class GenresController < ApplicationController

  # GET /genres
  def index
    genres = Genre.all
   
    render json: GenreSerializer.new( genres)
  end

  # GET /genres/1
  def show
    genre = Genre.find(params[:id])
    render json: GenreSerializer.new(genre)
  end

 
  private
 

    # Only allow a list of trusted parameters through.
    def genre_params
      params.require(:genre).permit(:name)
    end
end
