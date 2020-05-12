
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
          project_description:'Crime Stat for Travelers is a ReactJS web application created to visualize crime statistics in the US. We used Mapbox Gl to create the US map, and a custom filter to show crime rates in each state. I developed the logic that rendered state crime statistics in our filter system.',
          git: 'https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe',
          site: 'https://crimestatsfortravelers.com/'
          },
          {
          id: 2,
          project_name: 'Random Act Generator',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Random.png',
          project_description:'The Random Act Generator is a web application created to help people get ideas to do random good deeds for others. On this project I developed the backend using NodeJS with Express.',
          git: 'https://github.com/buildweek-random-acts-generator/back-end',
          site: 'https://lucid-panini-415838.netlify.com/'
          },
          {
          id: 3,
          project_name: 'Secret Family Recipe Cookbook',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Secret.png',
          project_description:'Secret Family Recipe Cookbook is a web application created to let people catalog their family recipes. We developed using ReactJS. For global state managment we implemented Redux. This site was styled using Semantic UI.',
          git: 'https://github.com/secret-family-recipe-s-cookbook/cookbook-fe',
          site: 'https://secret-recipes.netlify.com/' 
          },
          {
          id: 4,
          project_name: 'Connect Our Kids',
          project_img: 'https://raw.githubusercontent.com/jengopockets/Portfolio/master/src/image/Connect.png',
          project_description:'This project is a landing page create for the Connect Our Kids React Native application. This is a static HTML Page with some JavaScript functionality.',
          git: 'https://github.com/jengopockets/connect-our-kids.github.io',
          site: 'https://connect-our-kids.github.io/'
          }
      ]);
    });
};
