import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { HomePageComponent } from './home-page.component';


const routes = [
    {
        path     : '',
        component: HomePageComponent
    }
];

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

     

        FuseSharedModule
    ]
})
export class HomePageModule
{
}
