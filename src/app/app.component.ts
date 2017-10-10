import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ebookList: Array<any>;

  constructor(private http: Http) {
    //   this.http.get('api/getAllEbooks')
    //     .map(response => response.json())
    //     .subscribe(res => this.ebookList = res);
      this.http.get('/assets/books.json')
        .map(response => response.json())
        .subscribe(res => this.ebookList = res);
        console.log('ebookData', this.ebookList);
    }
}
