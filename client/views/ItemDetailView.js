var ItemDetailView = Backbone.View.extend({
  template: _.template(
    "<div class='modal-header'>" +
    "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
    "<p><video class='video-js vjs-default-skin' id='embeddedVideo' controls>" +
    "<source src='<%= videoLink %>' type='video/mp4'>" +
    "Your browser does not support the video tag." +
    "</video>" +
    "<h3><a href='<%= tedLink %>'><%= title %></a></h3></p>" +
    "<p><%= category %> - <%= moment(publishedDate).calendar() %></p>" +
    "</div>" +
    "<div class='modal-body'>" +
    "<p><%= description %></p>" +
    "</div>" +
    "<div class='modal-footer'>" +
    "<a href='#' data-dismiss='modal' class='btn btn-inverse'>Close</a>" +
    "</div>"),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});