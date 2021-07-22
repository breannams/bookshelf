# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

horror = Genre.create(name: 'horror')
fantasy = Genre.create(name: 'fantasy')

Book.create([
    {title: 'The Stand', author: 'Stephen King', pages: 1153, genre_id: 1}
])

Book.create([
    {title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', pages: 205, genre_id: 2}
])