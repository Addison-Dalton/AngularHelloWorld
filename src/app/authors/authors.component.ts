import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "list of authors";
  authors;

  constructor(services: AuthorsService) { 
	  this.authors = services.getAuthors();
  }

  ngOnInit() {
  }

}
