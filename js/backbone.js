// 
// This is the View of the GitlapsePlayer
//
(function($){
  // var ListView = Backbone.View.extend({
  var GitlapsePlayer = Backbone.View.extend({
    //el: $('body'), // attaches (instead of saying attaches it should say that it binds) `this.el` to an existing element.
    el: $('tty-player'), // binds `this.el` to an tty-player.

      initialize: function(){
	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

	this.render(); // not all views are self-rendering. This one is.
      },

      render: function(){
	// $(this.el).append("<ul> <li>hello world</li> </ul>");
	// $('#amount').attr( 'datamin','1000');
	$(this.el).attr('src', 'myurl');
      }
  });
  // var listView = new ListView();
  var gitlapsePlayer = new GitlapsePlayer();
})(jQuery);

