class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :books
  
end
