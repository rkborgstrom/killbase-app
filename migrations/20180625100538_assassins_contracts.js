exports.up = function (knex, Promise) {
    return knex.schema.createTable('assassins_contracts', (table) => { //this function allows us to assign the properites below.
        table.integer('assassins_id')
        table.integer('contract_id')

    })
};


exports.down = function (knex, Promise) {
return knex.schema.dropTable('assassins_contracts');
};