import { Component, OnInit, OnDestroy } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

import * as anime from 'animejs';

declare var RevealFx:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private test: string;

  constructor(private router: Router) { }

  ngOnInit() {
    
    var btn_block = new RevealFx(document.querySelector('#veille .btn-block'),
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

      btn_block.reveal();
  }

  ngOnDestroy(): void {
  }

  public gotoViewPage() {
    this.router.navigate(['recap']);
  }

}
