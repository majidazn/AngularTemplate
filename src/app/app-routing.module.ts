import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@fuse/guards/auth.guard';




const routes: Routes = [
    {
        'path': '',
        //canActivate: [AuthGuard],
        //'component': ,
        'children': [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
          
            {
                path: 'home',
                loadChildren: './main/pages/home-page/home.page.module#HomePageModule'
            },
        ]
    },
    {
        path: 'auth',
        loadChildren: './main/pages/auth/auth.module#AuthModule'
    },

]




@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // AuthService, AuthGuard
    ]
})


export class AppRoutingModule {
}