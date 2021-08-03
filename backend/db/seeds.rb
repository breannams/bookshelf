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
    {title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', pages: 205, genre_id: 2}
])

Book.create([
    {title: 'First Strike', author: 'Eric Nylund', pages: 340, genre_id: 3}
])

Book.create([
    {title:'Gone Girl', author: 'Gillian Flynn', pages: 432, genre_id: 4}
])

Book.create([
    {title:'The Art of Ritual', author: 'Rachel Patterson', pages: 232, genre_id: 5}
])
Book.create([
    {title:'The Bourne Identity', author: 'Robert Ludlum', pages: 523, genre_id: 6}
])
Book.create([
    {title:'The Count of Monte-Cristo', author: 'Alexandre Dumas', pages: 1276, genre_id: 7}
])
Book.create([
    {title:'Green Lantern, Vol. 1: Sinestro (The New 52)', author: 'Geoff Johns / Doug Mahnke', pages: 160, genre_id: 8}
])