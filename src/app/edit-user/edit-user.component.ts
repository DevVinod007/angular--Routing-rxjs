import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactiveGuard } from '../services/gaurds/deactivate-gaurd.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit ,IDeactiveGuard {
   user!: {id:string,name:string}
   editUserDetail!:{id:string,name:string}

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.user ={
        // id:data['user']['id'],
        // name:data['user']['name'],
        id:data['user']['id'],
        name:data['user']['name'],
      }
      this.editUserDetail = {...this.user};
    })
  }

  canExit(){
    console.log(this.user)
    console.log(this.editUserDetail)

    if(this.editUserDetail.id! == this.user.id || this.editUserDetail.name! == this.user.name){
      if(confirm('Are you sure want to exit')){
        return true 
      } else{
        return false;
    }
  }
   return true; //if not equal 

  }

}
