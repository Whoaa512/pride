var TEDLiveFeed = {}; // Namespace for app view & model


google.load("feeds", "1"); // Load the feed api

function feedLoaded() {
  var tedFeed = TEDLiveFeed.feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  tedFeed.includeHistoricalEntries();
  tedFeed.setNumEntries(25);

  var feedEntries = new FeedList();

  tedFeed.load(function(result) {
    if (!result.error) {
      result.feed.entries.forEach(function(entry, key, list) {
        feedEntries.add(entry);
      });
      var app = TEDLiveFeed.app = new App({
        feedList: feedEntries
      });
      TEDLiveFeed.appView = new AppView({
        model: app
      });
    } else {
      console.log(result.error);
      throw new Error('Feed wasn\'t loaded properly.');
    }
  });
}

google.setOnLoadCallback(feedLoaded);