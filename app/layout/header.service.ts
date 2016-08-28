import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService{
    getCategories(){
        return ['home', 'historic' , 'current' , 'forecast' , 'simluations' ];
    }
}  