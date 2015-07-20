import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    addNew: function() {
      var user = this.store.createRecord('user', {
        name: this.controller.get('name')
      });

      user.save().then(function afterSave() {
        console.log('save successful');
        this.controller.set('message', 'A new user "' + this.controller.get('name') + '" was added!');
        this.controller.set('name', null);
      }.bind(this), function failedSave() {
        console.log('save failed');
      });
    }
  }

});
