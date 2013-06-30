var AppView = Backbone.View.extend({
  el: $('div#feed'),

  initialize: function() {
    this.model.get('feedList').on('itemClicked', function(itemModel) {
      // set modal div to new detailView
      $('div#detailsModal').html(new ItemDetailView({model: itemModel}).render());
      // show the modal div
      $('div#detailsModal').modal();
    });
    $('div#detailsModal').on('hide', function(e) {
      $('video#embeddedVideo').get(0).pause();
    });

    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var feedList = this.model.get('feedList');
    return this.$el.html(
      feedList.map(function(item, index, list) {
        if(index % 3 === 0) {
          // then create new Row with 3 models each
          return new RowView({
            id:"row"+index/3,
            models: [list[index],list[index+1],list[index+2]]
          }).render();
        }
      })
    );
  }
});
