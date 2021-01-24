import { BookDetails } from './../models/book_details.model';
import { Book } from './../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly http: HttpClient) { }

  public getBooks(page: number, limit: number, search: string, sortby: string): Observable<BookDetails> {
    return this.http.get<BookDetails>(`${environment.api}/book?page=${page}&limit=${limit}&search=${search}&sortby=${sortby}`, { headers: { skip: 'true' } });
  }
}