import Service from '@ember/service';

export default Service.extend({
    isAuthenticated: true,
    myhandler: function() {
        console.log("In myhandler");
        return "btn clicked: reported @ service.";
    }
});
