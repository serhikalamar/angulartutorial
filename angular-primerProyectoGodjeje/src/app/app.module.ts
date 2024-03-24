import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HeroesComponent } from "./heroes/heroes.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";



@NgModule({  
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    imports : [
        BrowserModule,
        FormsModule
    ],
    providers:[],
    bootstrap:[AppComponent]

})
export class AppModule {}
