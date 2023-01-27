import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsHeaderComponent } from './components/pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './components/pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './components/pages/home/components/product-box/product-box.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,HeaderComponent,HomeComponent,
        ProductsHeaderComponent, FiltersComponent, ProductBoxComponent,
        CartComponent
    ],
    providers: [CartService,StoreService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule, MatGridListModule,
        MatMenuModule, MatSnackBarModule,
        MatButtonModule, MatCardModule,
        MatIconModule, MatExpansionModule,
        MatListModule, MatToolbarModule,
        MatTableModule, MatBadgeModule,
        HttpClientModule
        
    ]
})
export class AppModule { }
