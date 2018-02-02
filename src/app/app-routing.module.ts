import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecapComponent } from 'app/components/recap/recap.component';
import { ListingComponent } from 'app/components/listing/listing.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'recap',
        component: RecapComponent
    },
    {
        path: 'listing',
        component: ListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
