import Controller from '@ember/controller';
import mathjs from 'mathjs';
import  { set } from '@ember/object';

export default Controller.extend({

    init() {
        this._super(...arguments);
        this.results = [];
    },

    actions: {
        evaluate(input) {

            try {
                let result = mathjs.evaluate(input);
                let evalSet = {input,result };
                this.results.pushObject(evalSet);
                set(this, 'input', "");
            }
            catch(e) {
                this.toast.error(e, 'Error', {});
            }
        },

        reassign(oldInput) {
            set(this, 'input', oldInput);
        }
    }
});
