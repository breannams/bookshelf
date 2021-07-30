class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :pages, :genre_id, :genre
  
end
