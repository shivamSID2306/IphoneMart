import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/shop',
        pathMatch: 'full' //Here we need to use full coz, by default it will match the prefix only i.e "/" and hence, full will match entire route and then returnt to the following page.
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'shop',
        component: ShoppingCartComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}