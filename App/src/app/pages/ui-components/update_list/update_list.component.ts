import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update_list',
  templateUrl: './update_list.component.html',
  styleUrls: ['./update_list.component.css']
})
export class Update_listComponent implements OnInit {


  id: string;
  listInfo: dataInfo[]
  displayedColumns: string[] = ['name', 'age'];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const list: dataInfo[] = [
      { name: "anass", age: 22 },
      { name: "aziz", age: 18 }
    ]
    this.listInfo = list
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      console.log(this.id);
    });

  }

}
export interface dataInfo {
  name: string;
  age: number;
}

