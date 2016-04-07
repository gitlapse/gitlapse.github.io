// GitlapseVideo Model
var GitlapseVideo = Backbone.Model.extend({
  // urlRoot : '/v1/lapses',
  urlRoot : 'https://api.gitlapse.com/v1/lapses/',
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

// GitlapseVideo.fetch();

// Backbone.sync(get, GitlapseVideo, {sha: 24324244})

var lapse = new GitlapseVideo({SHA: "zerocool"});
console.log(lapse.fetch());
