import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * 
 * @param form
 */

function passwordsMatchValidator(form){
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if(password.value !== confirmPassword.value) 
    confirmPassword.setErrors({ passwordMatch: true })
  else
    confirmPassword.setErrors(null)


  return null
}

/** 
 * If the data is valid return null else return object.
*/
function symbolValidator(control){  //control = registerForm.get('password').
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  console.log(control.value); //here we get all properties of ngModel that is pristine, dirty, etc.
  if(control.value.indexOf('@') > -1) //if we don't have @ in our string then it will return -1.
    return null
  else
    return { symbol: true }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), symbolValidator]],
      confirmPassword: '',
    }, {
      validators: passwordsMatchValidator
    })

  //  this.registerForm = new FormGroup({
  //    name: new FormControl('Shivam'),
  //    email: new FormControl('Sid@gmail.com'),
  //    username: new FormControl('Sid23'),
  //    password: new FormControl('abcd1234'),
  //    confirmPassword: new FormControl('abcd1234'),
  //  })
  }

  register(){
    console.log(this.registerForm.value);
  }

}
