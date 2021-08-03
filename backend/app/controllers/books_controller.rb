class BooksController < ApplicationController


  # GET /books
  def index
    books = Book.all
   
    render json: BookSerializer.new(books)
  end


  # GET /books/1
  def show
    book = Book.find(params[:id])
    render json: BookSerializer.new(book)
  end

  # POST /books
  def create
    book = Book.new(book_params)

    if book.save
      render json: BookSerializer.new(book), status: :created, location: book
    else
      render json: {error: "Book not successfully saved. Please ensure you fill out all of the form."}
    end
  end

  # DELETE /books/1
  def destroy
    book = Book.find(params[:id])
    book.destroy
    render json: {message: "#{book.title} was deleted."}
  end

  private


    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :author, :pages, :genre_id)
    end
end
