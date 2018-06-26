exports.up = function (knex, Promise) {
    return knex.schema.createTable('contracts', (table) => { //this function allows us to assign the properites below.
        table.increments(); //defaults to id-serial.
        table.integer('client_id');
        table.integer('budget');
        table.integer('target_id');
        table.boolean('completed');
        table.integer('assassins_id');
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('contracts');
};
