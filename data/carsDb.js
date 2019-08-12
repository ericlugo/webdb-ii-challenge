const db = require('./dbConfig');

const carHelper = (module.exports = {});

carHelper.insert = function(car) {
  return db('cars')
    .insert(car)
    .then(([id]) => this.get(id));
};

carHelper.get = function(id) {
  if (id)
    return db('cars')
      .where('id', id)
      .first();
  return db('cars');
};

carHelper.update = function(id, changes) {
  return db('cars')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? this.get(id) : null));
};

carHelper.remove = function(id) {
  return db('cars')
    .where('id', id)
    .del();
};
