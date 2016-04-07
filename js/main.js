// use the backbone route to get the SHA from the url 
// use the SHA in a Backbone.sync
// make a model instance and populate it with the SHA 
// make a lapse.fetch()
var lapse = new GitlapseVideo({SHA: "zerocool"});
Backbone.sync(GET, GitlapseVideo, {sha: "zerocool"});
console.log(lapse.fetch());
