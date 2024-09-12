import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  books: Book[] = [];

  constructor(private bookservice: BookService) {}

  ngOnInit(): void {}

  getAllBooks() {
    this.bookservice.getBooks().subscribe(
      (data) => {this.books = data}
    );
  }

}
