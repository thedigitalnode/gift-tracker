/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE birthday RESTART IDENTITY CASCADE')
  await knex('birthday').insert([
    { name: 'Averys Housewarming', birthdate: '2024-10-14', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false , user_id: 6, wishlist_id: 1 },
    { name: 'Jamiel Trimble', birthdate: '2024-06-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Stephen Milburn', birthdate: '2024-06-28', interests: 'Coding', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Nikki Khurshed', birthdate: '2024-09-25', interests: 'Cyber', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 4, wishlist_id: 1 },
    { name: 'G. Noel', birthdate: '2024-06-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 5, wishlist_id: 1 },
    { name: 'Will Dallmanns Promotion Party', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 3, wishlist_id: 1 },
    { name: 'George Washington Anniversary', birthdate: '2024-02-22', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Thomas Jefferson', birthdate: '2024-04-07', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'John Adams Kindey Transplant', birthdate: '2024-05-02', interests: 'Cooking', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Benjamin Franklin', birthdate: '2024-07-13', interests: 'Cooking', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 4, wishlist_id: 1 },
    { name: 'Alexander Hamilton', birthdate: '2024-11-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 5, wishlist_id: 1 },
    { name: 'John Jay 7th Marriage', birthdate: '2024-09-22', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 3, wishlist_id: 1 },
    { name: 'Cinco De Mayo Party', birthdate: '2024-05-05', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Robert De Niro', birthdate: '2024-06-22', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Leonardo DiCaprio', birthdate: '2024-05-23', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Marilyn Monroe White House Visit', birthdate: '2024-09-20', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 4, wishlist_id: 1 },
    { name: 'Morgan Freeman', birthdate: '2024-11-29', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 5, wishlist_id: 1 },
    { name: 'Johnny Depp Trial', birthdate: '2024-08-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 3, wishlist_id: 1 },
    { name: 'OJs Memorial Party', birthdate: '2024-10-12', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Al Pacino', birthdate: '2024-03-27', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Bruce Lee Bar Fight', birthdate: '2024-02-28', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Angelina Jolie', birthdate: '2024-07-20', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 4, wishlist_id: 1 },
    { name: 'Anthony Hopkins', birthdate: '2024-11-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 5, wishlist_id: 1 },
    { name: 'Natalie Portman', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 3, wishlist_id: 1 },
    { name: 'Sandys Costume Party', birthdate: '2024-10-31', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Tom Cruise', birthdate: '2024-06-12', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Heath Ledger', birthdate: '2024-07-28', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Antonio Banderas Puss In Boots Movie Premiere', birthdate: '2024-09-18', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 4, wishlist_id: 1 },
    { name: 'Nicole Kidman', birthdate: '2024-11-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 5, wishlist_id: 1 },
    { name: 'Robin Williams', birthdate: '2024-08-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 3, wishlist_id: 1 },
    { name: 'ABC Party', birthdate: '2024-11-22', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Bruce Willis', birthdate: '2024-06-17', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Russell Crowe', birthdate: '2024-06-28', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Nicolas Cage', birthdate: '2024-09-26', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 4, wishlist_id: 1 },
    { name: 'Brad Pitt', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 3, wishlist_id: 1 },
    { name: 'White Elephant Party', birthdate: '2024-12-21', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 6, wishlist_id: 1 },
    { name: 'Demi Moore', birthdate: '2024-06-11', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 1, wishlist_id: 1 },
    { name: 'Mel Gibson', birthdate: '2024-06-28', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false, user_id: 2, wishlist_id: 1 },
    { name: 'Jim Carrey', birthdate: '2024-09-07', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought : false,user_id: 4, wishlist_id: 1 },
    { name: 'Mark Wahlberg', birthdate: '2024-11-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 5, wishlist_id: 1 },
    { name: 'Arnold Schwarzenegger', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 3, wishlist_id: 1 },
    { name: 'Book Club', birthdate: '2024-08-24', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 6, wishlist_id: 1 },
    { name: 'Deadpool/Wolverine Watch Party', birthdate: '2024-06-25', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 1, wishlist_id: 1 },
    { name: 'Bradley Cooper', birthdate: '2024-06-28', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here',bought:false, user_id: 2, wishlist_id: 1 },
    { name: 'Post Eclipse Eye Surgery', birthdate: '2024-09-16', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 4, wishlist_id: 1 },
    { name: 'Matt Damon', birthdate: '2024-11-29', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 5, wishlist_id: 1 },
    { name: 'Fyodor Dostoevsky', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 3, wishlist_id: 1 },
    { name: 'Mark Twain', birthdate: '2024-12-14', interests: 'Fitness', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought:false, user_id: 6, wishlist_id: 1 },
    { name: 'Leo Tolstoy ', birthdate: '2024-06-18', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 1, wishlist_id: 1 },
    { name: 'George Orwell', birthdate: '2024-06-28', interests: 'Outdoors', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 2, wishlist_id: 1 },
    { name: 'Aldous Huxley ', birthdate: '2024-09-25', interests: 'Jewelry', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 4, wishlist_id: 1 },
    { name: 'Arthur Conan Doil', birthdate: '2024-11-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 5, wishlist_id: 1 },
    { name: 'Miguel de Cervantes Saavedra', birthdate: '2024-09-01', interests: 'Sports', relationship: 'family', priority: 1, gift_ideas: 'gift ideas here', notes: 'notes entered here', bought: false, user_id: 3, wishlist_id: 1 },
 ]);
};