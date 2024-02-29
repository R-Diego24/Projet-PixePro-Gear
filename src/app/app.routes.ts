import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConnectComponent } from './pages/connect/connect.component';

export const routes: Routes = [
    { 
        path: '', redirectTo: 'homepage', pathMatch: 'full' 
    },
    { 
        path: 'homepage', component: HomepageComponent
    },
    { 
        path: 'products', component: ProductsComponent 
    },
    {
        path: 'product/:id', component: SingleProductComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'connect', component: ConnectComponent
    }
];
