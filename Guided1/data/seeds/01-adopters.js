
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adopters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('adopters').insert([
        {first_name: 'Marshall', last_name: 'Mathers', email: 'mm@yahoo.com', phone_number: 5058675309},
        {first_name: 'Wilson', last_name: 'Phillips', email: 'old@yahoo.com', phone_number: 5058675309},
        {first_name: 'Bett', last_name: 'Middler', email: 'wind@yahoo.com', phone_number: 5058675309}
      ]);
    });
};
