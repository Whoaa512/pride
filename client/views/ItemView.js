var ItemView = Backbone.View.extend({
  className: 'span4 text-center',

  events: {
    "click": function() {
      // trigger event on the model to show details view
      this.model.details();
    }
  },

  template: _.template(
    "<img class='thumbnail-main' src='<%= thumbnail %>'/>"+
    "<h4><%= title %></h4>"+
    "<p><%= moment(publishedDate).calendar() %></p>"+
    "<p><a class='teaser' href='#' data-toggle='tooltip' data-placement='left' >"+
    "<%= teaser %></a></p>"
  ),

  render: function() {
    return this.$el.append(this.template(this.model.attributes));
  }
});
