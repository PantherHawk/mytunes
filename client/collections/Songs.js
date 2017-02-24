// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'http://parse.hrr.hackreactor.com/mytunes/classes/songs',


  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: { limit: 47 }
    });
  },

  model: SongModel

});
