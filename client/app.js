var App = Backbone.Model.extend({
  initialize: function(params) {
    // Use the hydrated collection or create one
    this.feedList = params.feedList || new FeedList();
  }
});
