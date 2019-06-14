15.times do 
  d = Department.create(
    name: Faker::Commerce.department,
  ) 10.times do 
    i = d.items.create(
      name: Faker::Commerce.product_name ,
      description: Faker::Lorem.paragraph_by_chars(256, false),
      price: Faker::Commerce.price(range = 0..1000.00, as_string = false) 
    )

    10.times do 
      i.reviews.create(
        title: Faker::Cannibis.health_benefit,
        body: Faker::FamousLastWords.last_words,
        author: Faker::Dune.character,
        rating: rand(1..5),
        image: Faker::Avatar.image,
      )
    end
  end
end

puts "Database successfully create 15 depts, 10items/dep, 10 review/item."