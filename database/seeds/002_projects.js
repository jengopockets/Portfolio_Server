
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Crime Stats For Travelers',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Crime.png',
          project_description:'This was a project where we mapped US crime data from the FBI Database.',
          git: 'https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe',
          site: 'https://crimestatsfortravelers.com/'
          },
          {
          id: 2,
          project_name: 'Random Act Generator',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Random.png',
          project_description:'I wrote the backend to this project where I allowed for full CRUD fuctionallity and included an endpoint that would randomize data from the database to give to the front-end.',
          git: 'https://github.com/buildweek-random-acts-generator/back-end',
          site: 'https://lucid-panini-415838.netlify.com/'
          },
          {
          id: 3,
          project_name: 'Secret Family Recipie Cookbook',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Secret.png',
          project_description:'I was one of the front-end engineers on this project where I was responsible for CRUD fuctionallity.',
          git: 'https://github.com/secret-family-recipe-s-cookbook/cookbook-fe',
          site: 'https://secret-recipes.netlify.com/' 
          },
          {
          id: 4,
          project_name: 'Connect Our Kids',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Connect.png',
          project_description:'I was one of the UI designers on this project where we created a landing page with some JavaScript.',
          git: 'https://github.com/jengopockets/connect-our-kids.github.io',
          site: 'https://connect-our-kids.github.io/'
          }
      ]);
    });
};