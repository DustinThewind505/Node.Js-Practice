exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adopters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('adopters').insert([
        {adopterName: 'Marshall Mathers', phoneNumber: 5058675309},
        {adopterName: 'Wilson Phillips', phoneNumber: 5058675309},
        {adopterName: 'Bett Heart', phoneNumber: 5058675309}
      ]);
    });
};