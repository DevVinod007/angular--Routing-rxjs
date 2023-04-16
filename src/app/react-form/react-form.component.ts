import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  genders = ['male','female'];
  restrictedName = ['Vinod']
  signUpForm! :FormGroup
  constructor() { }

  get hobbyControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }

  get errorControls(){
    return this.signUpForm.get('userData.username')
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required,this.isRestricted.bind(this)]),
          'email':new FormControl(null,[Validators.required,Validators.email],this.isRestrictedEmails),
        }),
  
        'gender':new FormControl('female'),
        'hobbies':new FormArray([])
    })
    this.signUpForm.statusChanges.subscribe((data)=>{
      console.log("DATA",data);
    })
    
    this.signUpForm.setValue({
      userData : {
        username:"vinod11",
        email:"vinod@9685"
      },
      gender:"",
      hobbies:"none"
    })

  }

  onSubmit(){
    console.log(this.signUpForm)
    this.signUpForm.reset()
  }

  // isRestricted(control:FormControl):{[s:string]:boolean}{
  // if(this.restrictedName.includes(control.value)){
  //   return {nameIsRestricted:true}
  // }
  //  return  null
  // }

  isRestricted(control: FormControl): {[key: string]: boolean} | null {
    if (this.restrictedName.includes(control.value)) {
      return { nameIsRestricted: true };
    }
    return null;
  }

  isRestrictedEmails(control:AbstractControl) :Promise<any> | Observable<any>{
    let promise = new Promise((resolve,reject) => {
      setTimeout(()=>{
      if(control.value ==='test@test.com'){
        resolve({emailIsResticted:true});
      } else {
        resolve(null)
      }
      },2000)
    });
     return promise
  }

  onAddHobby(){
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }
}
