/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ScorePageComponent } from './score-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: ScorePageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//