import Controller from '@ember/controller'; 

export default Controller.extend({
    name: "Ember Controller",
    changecolor:false,
    actions: {
        changeColorStatus: function(){
            window.console.log("Change Edit @ controller");
            this.toggleProperty('changecolor');
        }
    }
});
console.log("in Controller.") ;