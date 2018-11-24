import Application from '@ember/application';
import EmberObject, { computed } from '@ember/object';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import numericBox from './helpers/numeric_box';
import timeManager from './helpers/time_manager';
import father from './helpers/father';
import child from './helpers/child';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// 1st programme
let textbox = numericBox.create();   // am:  lines added.
window.console.log("number: ", textbox.valid("12"));
textbox.onFocus();

console.log("arithmetic: " ,textbox.valid("12 * 4"));  // false
textbox.onFocus();

console.log("string: " , textbox.valid("abc"));
textbox.onFocus();



// 2nd programme

let Person = EmberObject.extend({
    firstName: null,
    lastName: null,
  
    fullName: computed('firstName', 'lastName', function() {
      return `${this.firstName} ${this.lastName}`;
    })
  });
  
  let p1 = Person.create({
    firstName: 'Ajay',
    lastName:  'Kumar'
  });
  
  console.log(p1.fullName);

  let myTimeManager = timeManager.create({
    time: 2  // init value.
  });
  myTimeManager.set("time",22);

  // 3rd programme
  let ajay = father.create({
    name:'Ajay',
    age:40,
    address:'Whitefield'
  });
  
  var ram = child.create({
    school:'Whitefield High School',
    father: ajay
  });
  
  console.log("child's addr: " ,  ram.get('address'));
  ajay.set('address','Mysore');
  console.log("child's addr: " , ram.get('address'));

export default App;
