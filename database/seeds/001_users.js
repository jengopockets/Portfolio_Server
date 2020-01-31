const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync(process.env.USER, 10);

exports.seed = function (knex) {
    return knex("users")
    .truncate()
    .then(function(){
        return knex('users').insert([
            {username: 'jengodev@gmail.com', password: hash}
        ])
    })
}
