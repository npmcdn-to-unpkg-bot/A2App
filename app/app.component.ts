import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header.component';
import { FooterComponet } from './layout/footer.component';
import { LandingComponent  } from './defaults/landing.component';

@Component({
    selector : 'shell',
    templateUrl : 'app/app.component.html',
    directives:[HeaderComponent , FooterComponet ,LandingComponent]

})
export class AppComponent{ 
    
}



