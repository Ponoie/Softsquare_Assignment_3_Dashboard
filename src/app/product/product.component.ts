import { Component, OnInit, inject } from '@angular/core';
// import { ShareService } from '../share.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Item, ShareService } from '../share.service';
import { AppRoutingModule } from '../app.routes';
import { tap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,FormsModule],
  providers: [ShareService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  myData: any = [];
  myData$: any;
  search: string = '';

  constructor(private shareService: ShareService) { }

  ngOnInit(): void { 
    this.myData$ = this.shareService
      .fetchData()
      .pipe(tap((data) => (this.myData = data)));
  }
  
  filterData() {
    if (this.search.trim() !== '') {
      this.myData$ = this.shareService.fetchData()
        .pipe(
          tap((data: any) => (this.myData = data.filter((item: any) =>
            item.name.toLowerCase().includes(this.search.toLowerCase())
          )))
        );
    } else {
      this.myData$ = this.shareService.fetchData()
        .pipe(tap((data) => (this.myData = data)));
    }
  }
}
