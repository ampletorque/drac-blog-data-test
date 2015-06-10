Blogger.Post = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  properties: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
})
