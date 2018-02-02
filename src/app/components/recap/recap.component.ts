import { Component, OnInit } from '@angular/core';

import * as walk from 'walk';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Folder } from 'app/model/folder.model';
import { File } from 'app/model/file.model';

import * as $ from 'jquery';

declare var RevealFx:any;

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  private basePath: any = __dirname + '../../CSE/';
  private folders: Folder[] = new Array<Folder>();
  private filesArr: File[] = new Array<File>();
  private foldersName: string[] = new Array<string>();
  private fileSelected: File;
  private urlOfSelectedFile:string;


  constructor(private router: Router) { }

  ngOnInit() {

    var folder_block = new RevealFx(document.querySelector('#home .folder-block'),
    {
      revealSettings :
      {
        bgcolor: '#878787',
        direction: 'lr',
        duration: 500,
        onCover: function(contentEl, revealerEl)
        {
          contentEl.style.opacity = 1;
        }
      }
    });

    folder_block.reveal();

    var logo_block = new RevealFx(document.querySelector('#home .logo-block'),
    {
      revealSettings :
      {
        bgcolor: '#cb3a1a',
        direction: 'lr',
        duration: 500,
        onCover: function(contentEl, revealerEl)
        {
          contentEl.style.opacity = 1;
        }
      }
    });

    logo_block.reveal();

    const options = {};
    let walker = walk.walk(path.resolve(__dirname, '..', '..', 'CSE'), options);
    walker.on('file', function (root, fileStats, next) {
      fs.readFile(fileStats.name, function () {
        // doStuff
        //console.log('FILES IN THIS DIRECTORIES', fileStats);
        next();
      });
    });

    walker.on('errors', function (root, nodeStatsArray, next) {
      next();
    });

    walker.on('directories',  (root, stat, next) => {
      // console.log('root',root);
      console.log('stat Directories',stat);

      let newWalker: any;
      let _Folder: Folder;
      // console.log('LES DOSSIERS: ', stat);

      this.foldersName = _.map(stat, 'name'); // console.log(_.zipObject(['name'], _.map(stat, 'name')));
      this.foldersName.forEach((value) => {

        // console.log('value', value);
        fs.readdir(root + '/' + value, (err, files) => {
         // console.log('Length:', files.length);
              if (files.length > 0) {
                newWalker = walk.walk(path.resolve(__dirname, '..', '..', 'CSE', value));
                let arrFile: File[] = [];

                 newWalker.on('file', (roots, fileStats, nexts) => {
                   // console.log('The roots', roots);
                   console.log(fileStats);
                   if ((fileStats.name).substr(-3) === 'pdf') {
                     fs.readFile(fileStats.name, () => {
                      // console.log('Fichier', fileStats);
                      arrFile.push(new File(fileStats.name, roots, fileStats.type));
                      nexts();
                    });
                   }
                    

                  });
                  _Folder = new Folder(value, root + '\\' + value, files.length, arrFile);

                newWalker.on('errors', function (roots, nodeStatsArray, next_) {
                    next_();
                });

                newWalker.on('end', function () {
                  // console.log('all done');
                });
              } else {
                _Folder = new Folder(value, root + '/' + value, files.length, []);
              }
              this.folders.push(_Folder);

            });

        });

        // console.log('_folder', _Folder);
      })
     // console.log('foldersName:', this.foldersName);
     // console.log('Folders', this.folders);
      /*
      for (const dir of this.foldersName) {
        console.log('testeur', dir);
        newWalker = walk.walk(path.resolve(__dirname, '..', '..', 'CSE', dir));

        newWalker.on('file', (roots, fileStats, nexts) => {
          console.log(roots);
          fs.readFile(fileStats.name, () => {
            console.log('Fichier', fileStats);
            nexts();
          });
        });

        newWalker.on('errors', function (roots, nodeStatsArray, next_) {
          next_();
        });

      }
      */

    walker.on('end', function () {
     // console.log('all done');
    });

  }

  public onFolderSelectChange(event) {
    var file_block = new RevealFx(document.querySelector('#home .file-block'),
    {
      revealSettings :
      {
        bgcolor: '#878787',
        direction: 'lr',
        duration: 500,
        onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
				onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; },
				onComplete: function()
				{					
					setTimeout(function()
					{
						$('#home .file').removeClass('uk-invisible');
						$('#home .file').addClass('uk-animation-slide-top-small');
					}, 100);
				}
      }
    });
  
    file_block.reveal();
    // Envoyer la liste de fichier à Listing
    this.filesArr = event.files;
  }

  public onFileSelectChange(event) {
    var iframe_block = new RevealFx(document.querySelector('#home .iframe-block'),
    {
      revealSettings :
      {
        bgcolor: '#cb3a1a',
        direction: 'lr',
        duration: 500,
        onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
				onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; }
      }
    });
  
    iframe_block.reveal();
    // Envoyer le pdf à ouvrir à fileview
    console.log('Event recu',event);
    let url = event.path + '\\'+ event.name;
    console.log(url);

    this.fileSelected = event;
    this.urlOfSelectedFile = event.path + '\\'+ event.name;

   // this.filesArr = event.files;
  }


}
