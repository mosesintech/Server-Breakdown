
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {name: 'Moses', email: 'mosesintech@gmail.com', avatar: 'default.jpg'},
        {name: 'MoMo', email: 'moses@totalityworks.com', avatar: 'momo.png', catchphrase: 'I am actually the avatar the whole time.'},
      ]);
    });
};
