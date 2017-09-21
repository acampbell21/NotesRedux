100.times do
  Note.create(
    name: Faker::Ancient.god,
    description: Faker::Lorem.sentence,
  )
end

puts 'Your database has been seeded!'
