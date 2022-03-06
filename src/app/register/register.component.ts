import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {

this.RegisterForm = this.fb.group({
  Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  Name:['',Validators.required],
  userName:['',
  [
    Validators.required,
    Validators.pattern("^[a-z]*$")]],
  password:['',[
    Validators.required,
    Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$")]],
  confirmPassword:['',Validators.required]
},{validator: this.checkIfMatchingPasswords('password', 'confirmPassword')})
}
checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
return (group: FormGroup) => {
  let passwordInput = group.controls[passwordKey],
      passwordConfirmationInput = group.controls[passwordConfirmationKey];
  if (passwordInput.value !== passwordConfirmationInput.value) {
    return passwordConfirmationInput.setErrors({notEquivalent: true})
  }
  else {
      return passwordConfirmationInput.setErrors(null);
  }
}
}
get formControls() {
return this.RegisterForm.controls;
}
ngOnInit(): void {
}

submitRegisterForm() {
console.log(this.RegisterForm);
}

}