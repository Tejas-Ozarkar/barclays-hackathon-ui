import { SnackbarService } from './../../shared/components/snackbar/snackbar.service';
import { CartService } from './../../shared/services/cart.service';
import { Book } from './../../shared/models/book.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public bookCovers = [
    'https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvLEmYZ45AZixnu5VcpiT2Bi4IMgEZlkfpQ&usqp=CAU',
    'https://images.squarespace-cdn.com/content/v1/513a230ae4b0f3422dd7d5ad/1602462270023-AGM0OMGPTYXNR0Z76ISQ/ke17ZwdGBToddI8pDm48kJme_vyRngthM-lqQfhlIH1Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHdR4tGE0fFJHT7ppaMbI8l68Pv4V3IjdRIUtf6KN3cEolyXOhr1HlgtlqrKgcoGR0/premade-crime-thriller-kindle-covers-for-self-published-authors.jpg',
    'https://www.creativeparamita.com/wp-content/uploads/2018/09/vanished-in-the-wood.jpg',
    'https://www.creativeparamita.com/wp-content/uploads/2018/09/vanished-in-the-wood.jpg',
    'https://i.pinimg.com/originals/aa/11/6a/aa116a773d6049b0d9d778aae0650062.jpg',
    'https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1538106685490-DIMFXLGDPR8TVNZ0BWKU/ke17ZwdGBToddI8pDm48kN4oao1PlpO_GApQgaaGf-tZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFJUL5AUtbP3jMD8Tueu1148GE851RCRrqmyR4NB93uwFW4jCyXLPvvdR287iymYt8/A-Time-of-Witches.jpg',
    'https://www.creativindie.com/wp-content/uploads/2020/06/51kgIYwbZL.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a76386f-1d10-401d-a8b8-dbfc10cdd2e9/dahy6ti-0405a656-87ad-4543-b045-ed87bc117bf4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWE3NjM4NmYtMWQxMC00MDFkLWE4YjgtZGJmYzEwY2RkMmU5XC9kYWh5NnRpLTA0MDVhNjU2LTg3YWQtNDU0My1iMDQ1LWVkODdiYzExN2JmNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3pHLogwe8-d7qNOl66l0Mi1ZcEkWw3ZEeBkbJ4Dph9g',
    'https://images.squarespace-cdn.com/content/v1/5d6ac7257f94b100012685d4/1567291178349-DCIHSV0R1V95GS1J100D/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/rebeldragon_ebook.jpg?format=2500w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhKMPnRnEjIh6zwiFVSU84ivFyRqWCv100A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhS-fhGHABjb0CnuTUJ-67pwyxzi3Ym2Ij5g&usqp=CAU',
    'https://www.derangeddoctordesign.com/uploads/2/4/4/7/24472801/web-2016-919-ebook-rebecca-vickers-lostport_orig.jpg'
  ]

  @Input() book: Book;

  constructor(private readonly cartService: CartService, private readonly snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.book.cover = this.getRandomBookCover();
  }

  public addToCart() {
    this.cartService.addToCart(this.book);
    this.snackbar.show(`${this.book.title} added to cart`);
  }

  public getRandomBookCover() {
    return this.bookCovers[Math.floor(Math.random() * this.bookCovers.length)];
  }
  
}
