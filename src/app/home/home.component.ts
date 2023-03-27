import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import {  interval, Observable, observable, Subscription } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:Data) =>{
      console.log(data)
    })
  

  // this.intervalSubscription = interval(1000).subscribe(count => {
  //   console.log(count)
  // })

  let customObservale = Observable.create((data :any) =>{
    let count = 0;
    setInterval( () => {
      data.next(count);
      if(count > 3) {
        data.error("count is exceede the limit");
      }
      if(count >2){
        data.complete()
      }
      count++
    },1000);
  });

 this.intervalSubscription = customObservale.pipe
 (
//   filter(data => {
//   if(data>0){
//     return true;
//   }
//  })
//  ,
 map((data:number) =>{
    return 'count is ' +(data+1)
 })).subscribe((data:any) =>{
    console.log(data)
  },(error:any) => {
    console.log(error)
  }, () =>{
    console.log('completed')
  })
}

ngOnDestroy(): void {
  this.intervalSubscription.unsubscribe()
}

  

}
