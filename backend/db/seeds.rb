# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.create(name: 'horror')
Genre.create(name: 'fantasy')
Genre.create(name: 'Sci-fi')
Genre.create(name:'Suspense')
Genre.create(name: 'Religion')
Genre.create(name: 'Action')
Genre.create(name:'Classics')
Genre.create(name:'Comic Books')



Book.create([
    {title: 'The Stand', author: 'Stephen King', pages: 1153, genre_id: 1}
])

Book.create([
    {title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', pages: 205, genre_id: 3}
])