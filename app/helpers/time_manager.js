import EmberObject, { observer } from '@ember/object';

export default EmberObject.extend({
    time:0,
    timeChanged: observer('time', function (){  // an observer.
      console.log('time changed');
    })
 
  });