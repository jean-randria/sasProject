import { Injectable } from '@angular/core';

@Injectable()
export class FilelistService {

  constructor() { }

  getPDF():string {
    return '/assets/demo.pdf';
  }

}
