import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryListService {
    constructor(private http: Http) { }

    getEntries() {
      return this.http.get('http://localhost:3000/api/journal-entries')
        .map((res) => res.json());
    }

    getEntry(id){
      return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
        .map((res) => res.json());
    }

    newEntry(title, content){
      return this.http.post('http://localhost:3000/api/journal-entries', {title, content})
        .map((res) => res.json());
    }
}
