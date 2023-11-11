import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../../data/models/post';
import { DataService } from '../../data/data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items$: Observable<Post[]>;

  constructor(public service: DataService) {
    this.items$ = this.service.getLatestPosts();
  }
  

}
