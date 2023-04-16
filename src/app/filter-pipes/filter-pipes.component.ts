import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css'],
})
export class FilterPipesComponent implements OnInit {
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
}
