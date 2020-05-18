
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Aang", password: 'Air'},
        {username: "Katara", password: 'Water'},
        {username: "Sokka", password: 'Sword'}
      ]);
    });
};
