import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  date: DS.attr(),
  rating: DS.attr('number'),
  body: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
