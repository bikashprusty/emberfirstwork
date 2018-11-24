import Route from '@ember/routing/route';

export default Route.extend({
  redirect: function(){
    window.console.log("redirect() @ routes/index.js")  ;
    //this.transitionTo("commits.index");
    //this.transitionTo("books.index");    
  },
  model: function() {
    return {
      name: "Ravi Kumar",
      avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
      bio: "Famous painter"
    };
  }
  
});