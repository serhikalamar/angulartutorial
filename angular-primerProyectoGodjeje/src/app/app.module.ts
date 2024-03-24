import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//componente principal
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HeroesComponent } from "./heroes/heroes.component";
import { CommonModule } from "@angular/common";



@NgModule({  
    declarations: [],
    imports : [
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    providers:[],
})
export class AppModule {}
