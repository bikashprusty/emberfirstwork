import EmberObject from '@ember/object';
import validNumberMixin from '../mixins/valid_number';
import focusableMixin from '../mixins/focusable';

export default EmberObject.extend(validNumberMixin,focusableMixin,{
   text:""
});