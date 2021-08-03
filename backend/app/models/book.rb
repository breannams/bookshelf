class Book < ApplicationRecord
    belongs_to :genre
    validates_presence_of :title, :author, :pages 
end
