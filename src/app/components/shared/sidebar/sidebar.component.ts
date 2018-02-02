import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import * as walk from 'walk';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import { Folder } from 'app/model/folder.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private isClassVisible:boolean=false;

  @Input() foldersList: Folder[];
  @Output() onFolderSelectedEvt: EventEmitter<Folder> = new EventEmitter<Folder>();

  private basePath: any = __dirname + '../../CSE/';

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

  public gotoFileListe(event, index) {
    /*console.log('File', this.foldersList[index].files);console.log('Index: ', index);*/
    this.onFolderSelectedEvt.emit(this.foldersList[index]);
    this.isClassVisible = true;
    //this.router.navigate(['listing']);
  }

}
