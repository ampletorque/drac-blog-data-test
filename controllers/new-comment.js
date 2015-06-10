Blogger.NewCommentController = Ember.Controller.exted({
  needs: ['post'],
  actions: {
    save: function() {
      var comment = this.store.createRecord('comment', {
        text: this.get('text')
      });
      comment.save();

      this.transitionToRoute('post', post.id);
    }
  }
});
