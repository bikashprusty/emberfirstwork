import Route from '@ember/routing/route'; 

export default Route.extend({
    model: function() {
        //console.log("model @ Route."),
        let companies = [{
            "name" : "Google",
            "headquarters": "Mountain View",
            "revenue":"59b"
            },{
              "name" : "Facebook",
              "headquarters":"Menlo Park",
              "revenue":"7b"
            },{
              "name" : "twitter",
              "revenue": "664m",
              "headquarters":"San Francisco"
            }];
            return companies;
    }
});
console.log("in Route.");