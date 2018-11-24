import Controller from '@ember/controller';

export default Controller.extend({
    pressCount: 0,
    appName:'My Ember',
    data: "5",
    actions: {
        buttonClick: function() {
            window.console.log("buttonClick() @ contr")    ;
            this.incrementProperty('pressCount');
        }
    }
});
