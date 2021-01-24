import { Book } from './../shared/models/book.model';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchQuery='';
  public books: Book[];
  private currentPage = 1;
  public currPage: number;
  public sortby = '';
  public totalCount = 0;

  constructor(
    private readonly bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getBooks(this.currentPage);
  }

  public getBooks(page: number){
    this.currentPage = page;
    this.bookService.getBooks(page-1,12,this.searchQuery, this.sortby).subscribe(bookDetails=>{
      this.books = bookDetails.books;
      this.totalCount = bookDetails.count;
    });
  }
  public onSearch(){
    this.getBooks(this.currentPage);
  }

  public sortByAverage(){
    this.sortby = this.sortby==='average'?'':'average';
    this.getBooks(this.currentPage);
  }
}
