// GitlapseVideo View 
// if no tagName then it will create root div tag in the DOM
var GitlapseVideoView = Backbone.View.extend({
  tagName: 'li',
    className: 'gitlapsevideo css',
    id: 'can give it an id',

    initialize: function(){
      console.log('gitlapseview console msgs');
      console.log(this.model);
      this.render();
    },
    template: _.template("<tty-player autoplay loop controls src='<%= contnet %>'></tty-player>")
  // template: _.template("<tty-player autoplay loop controls src='https://api.gitlapse.com/v1/lapses/dd'></tty-player>")
  render: function(){
    this.$el.html()
  }
});
