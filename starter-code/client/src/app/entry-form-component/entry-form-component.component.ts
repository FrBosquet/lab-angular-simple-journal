import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EntryListService } from '../services/entry.list.service';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {
  visible: boolean = false;

  @Output() onNew = new EventEmitter<any>();
  constructor(private entryList: EntryListService) { }

  ngOnInit() {
  }

  toggleVisible(){
    this.visible = !this.visible;
  }

  submitNew(form){
    let {title, content} = form.value;
    console.log(title, content);
    this.entryList.newEntry(title, content).subscribe(
      res => this.onNew.emit(res)
    );
  }
}
