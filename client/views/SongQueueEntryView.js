// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<td>(<%= artis %/>)</td><td><%= title %/></td>'),

  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
