import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css'],
})
export class FilterPipesComponent implements OnInit {
  appStatus = new Promise ((resolve,reject) =>{
    setTimeout(() =>{
    resolve('user data is Recived')
    },3000)
  })
  filteredString: string = ''
  users = [
    {
      name: 'Vinod',
      joinedDate: new Date(12, 1, 2016),
    },
    {
      name: 'Vinod2',
      joinedDate: new Date(12, 2, 2017),
    },

    {
      name: 'Vinod3',
      joinedDate: new Date(12, 3, 2018),
    },
  ];
  constructor() {}

  ngOnInit(): void {}


  AddUser(){
    this.users.push({
      name: 'sample',
      joinedDate: new Date(12, 3, 2018),
    })
  }
}
