import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f')
  signUpForm!: NgForm;
  gender:string= 'Female'
  about = ''
  submitted =false;
  user ={
    username: '',
    email: '',
    gender:'',
    about:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  

  // onFormSubmit(f:NgForm){
  //   console.log("Submitted",f)
  // }

  onFormSubmit(){
    console.log(this.signUpForm)
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.about = this.signUpForm.value.about;
    this.signUpForm.reset();

    
  }

  checkData(){
    console.log(this.signUpForm)
  }

  onFillForm(){
    this.signUpForm.form.patchValue({
      userData : {
        email:'Vinod@7879@gmail.com',
        username:"Vinod"
      }
      // gender:"Male",
      // about:"about Us"
    })
  }

}
