
exports.seed=function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('assassins_codename').del() //updates data from multiple api's
    //, knex('contracts').del() --put at end of .del()above

.then(function() {
    return knex('assassins_codename').insert([
        {assassin_id: 1, code_names: 'The Jackal'},
        {assassin_id: 2, code_names: 'Old Man'},
        {assassin_id: 3, code_names: 'Ghost Dog'},
        {assassin_id: 4, code_names: 'Baba Yaga'},
        {assassin_id: 5, code_names: 'The Professional'},
        {assassin_id: 6, code_names: 'Nikita, La Femme Nikita'},
        {assassin_id: 7, code_names: 'Solenya'},
        ]);

    });

};