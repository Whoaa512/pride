var RowView = Backbone.View.extend({
  className: 'row',

  initialize: function(params) {
    this.models = params.models;
  },

  render: function() {
    return this.$el.html( // append a new ItemView per model
    _(this.models).map(function(item, key) {
      if (item) {
        return new ItemView({
          model: item
        }).render();
      }
    }));
  }
});