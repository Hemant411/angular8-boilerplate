import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HeaderComponent, FooterComponent } from '../layout';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    imports: [
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class PagesModule { }