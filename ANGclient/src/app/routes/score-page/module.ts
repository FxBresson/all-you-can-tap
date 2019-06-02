/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { ScorePageComponent } from './score-page.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ ScorePageComponent ],
        imports: [ 
            CommonModule, 
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//