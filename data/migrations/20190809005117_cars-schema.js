exports.up = function(knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments('id');
    tbl
      .text('vin', 16)
      .unique()
      .notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.enu('transmission_type', ['AT', 'MT', 'AM', 'CVT']);
    tbl.enu('title_status', [
      'Clear',
      'Salvage',
      'Reconstructed',
      'Rebuilt',
      'Statement of Origin',
      'Parts Only',
    ]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
