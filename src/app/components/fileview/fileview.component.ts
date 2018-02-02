import { Component, OnInit , Input, Output, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { FilelistService } from 'app/providers/filelist.service';
import { PDFDocumentProxy, PDFProgressData } from 'pdfjs-dist';
// import { File } from 'app/model/file.model';

import * as $ from 'jquery';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.scss']
})
export class FileviewComponent implements OnChanges, OnInit {

  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';

  // or pass options as object
  // pdfSrc: any = {
  //   url: './pdf-test.pdf',
  //   withCredentials: true,
  //// httpHeaders: { // cross domain
  ////   'Access-Control-Allow-Credentials': true
  //// }
  // };
  error: any;
  page: number = 1;
  rotation: number = 0;
  zoom: number = 1.0;
  originalSize: boolean = false;
  pdf: any;
  renderText: boolean = false;
  progressData: PDFProgressData;
  isLoaded: boolean = false;
  stickToPage = false;
  showAll: boolean = true;
  autoresize: boolean = false;
  fitToPage: boolean = false;
  outline: any[];
  isOutlineShown: boolean = false;

    constructor(private fileService:FilelistService){}
  @Input() fileUrl: string;

  ngOnInit() {
    //this.pdfSrc = this.fileService.getPDF();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const fileSrc: SimpleChange = changes.fileUrl;
    console.log('prev value: ', fileSrc.previousValue);
    console.log('got name: ', fileSrc.currentValue);
    
  }

 onFileSelected() {
    let img: any = document.querySelector("#file");

    if(typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }

  }
  onError(error: any) {
    console.log(error);
  }
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.isLoaded = true;

    this.loadOutline();
  }
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }
 onProgress(progressData: PDFProgressData) {
   console.log(progressData)
}
}
