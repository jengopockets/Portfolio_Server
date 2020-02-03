
exports.up = function(knex) {
    return knex.schema.createTable('projects', projects => {
        projects.increments();

        projects
            .string('project_name', 255)
            .notNullable()
            .unique();
        projects
            .string('project_img', 500);
        projects
            .string('project_description', 1000);
        projects
            .string('git', 255);
        projects
            .string('site', 255);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');  
};
