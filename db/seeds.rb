15.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )

  10.times do
    i = Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph_by_chars(256, false),
      price: Faker::Commerce.price(range = 0..1000.00, as_string = false),
      department_id: d.id,
    )

    10.times do
      i.reviews.create(
        title: Faker::Cannabis.health_benefit,
        body: Faker::Quote.famous_last_words,
        author: Faker::Books::Dune.character,
        rating: rand(1..5),
        image_url: Faker::Avatar.image,
        item_id: i.id
      )
    end
  end
end

puts "Database succuessfully create 15 depts, 10 items/dept, and 10 reviews/item."