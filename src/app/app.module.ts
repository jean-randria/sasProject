import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

//Pour eviter erreur: static injector error
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Service Electron
import { ElectronService } from './providers/electron.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ListingComponent } from './components/listing/listing.component';
import { RecapComponent } from './components/recap/recap.component';
import { FileviewComponent } from './components/fileview/fileview.component';
import { HttpClient } from '@angular/common/http';
import { FilelistService } from 'app/providers/filelist.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent,
    ListingComponent,
    RecapComponent,
    FileviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PdfViewerModule,
    TranslateModule.forRoot({ 
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService, FilelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
