import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../services/entry.list.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Object[];
  constructor(private entryList: EntryListService) { }

  ngOnInit() {
    this.entryList.getEntries()
      .subscribe(info =>{
        this.entries = info;
      });
  }
}
