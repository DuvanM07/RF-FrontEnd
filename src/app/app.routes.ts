import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { DeliverysComponent } from './pages/private/deliverys/deliverys.component';
import { ProductsComponent } from './pages/public/products/products.component';
import { CategoriasComponent } from './pages/private/categorias/categorias.component';
import { CategorysComponent } from './pages/private/adminCategorys/categorys/categorys.component';


export const routes: Routes = [ 
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'credits', component: CreditsComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '404', component: PageNotFoundComponent},
    { path: 'dashboard/users', component: UsersComponent},
    { path: 'dashboard/deliverys', component: DeliverysComponent},
    { path: 'dashboard/categorias', component: CategorysComponent},
    { path: 'products', component: ProductsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '404', pathMatch: 'full' }
]; 
 