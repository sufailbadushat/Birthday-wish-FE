import { FormControl, FormGroup } from "@angular/forms";

export default class ValidateForm {
    static validateAllFields(fg: FormGroup) {
        Object.keys(fg.controls).forEach(filed => {
          const controls = fg.get(filed);
          if(controls instanceof FormControl) {
            controls.markAsDirty({onlySelf:true})
          } else if (controls instanceof FormGroup) {
            this.validateAllFields(controls);
          }
        })
      }
}