// GitlapseVideo Model
var GitlapseVideo = Backbone.Model.extend({
  defaults: {
    title: 'some title',
    content: 'an placeholder advertisment for coder link'
  },
    // Validate when we are setting an attribute
    validate: function(attrs){
      if ( ! attrs.title) {
	"Every video must have a title"
      },
    if ( ! attrs.content ) {
      "Every video must have a content"
    }
    }

});
