

exports.seed = function (knex) {
    return knex("users")
    .truncate()
    .then(function(){
        return knex('users').insert([
            { username: 'testing@test.com', password: 'this'},
            {username: 'testing2@test.com', password: 'does'},
        {username: 'testing3@test.com', password: 'work'}
        ])
    })
}
