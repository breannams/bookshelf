class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :author, :pages, :genre_id, :genre
  
end
