import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!:{id:string,name:string}
  constructor(
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params.subscribe((data:Params)=>{
      this.user = {
        id:data['id'],
        name:data['name']
      }
    })

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(data =>{
      console.log(data)
    })
    this.route.queryParams.subscribe(data =>{
      console.log(data)
    })
  }


  oncategoryNavigate(){
  // this.router.navigateByUrl('/categories')
  this.router.navigate(['/categories'])
  }

  getDetails(){
    this.router.navigate(['/users',2,'Vinod'],{
      queryParams:{page:1,search:'vinod@'},
      fragment:'Loading',
    });
  }


  onUserEdit(){
    this.router.navigate(['/users',this.user.id,this.user.name,'edit'],{
      queryParamsHandling:'preserve'
    });
  }



}
