var FeedItem = Backbone.Model.extend({

  initialize: function(params) {
    params = params || {};

    // Create easy access to pertinent data
    this.set('thumbnail', params.mediaGroups[0].contents[0].thumbnails[0].url);
    this.set('videoLink', params.mediaGroups[0].contents[0].url);
    this.set('title', params.title);
    this.set('tedLink', params.link);
    this.set('publishedDate', params.publishedDate);
    this.set('category', params.categories[0]);
    this.set('description', params.content);
    this.set('teaser', params.contentSnippet);
  },

  details: function() {
    this.trigger('itemClicked', this);
  }

});

var FeedList = Backbone.Collection.extend({
  model: FeedItem
});
