import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: any = [];
  sortOptions: SelectItem[] | undefined;
  sortOrder: number | undefined;
  sortField: string | undefined;
  
  constructor() {}

  ngOnInit(): void {
  }

}

