import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { File } from 'app/model/file.model';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  @Input() fileList: File[];
  @Output() onFileSelectedEvt: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  ngOnInit() {
  }

  public gotoFileView(event,index) {
    console.log(event);
    this.onFileSelectedEvt.emit(this.fileList[index]);
  
  }
}
