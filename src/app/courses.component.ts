import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ 
    selector: 'courses',
    template: `
        {{ course.title | uppercase }} <br/>
        {{ course.students | number}} <br/>
        {{ course.rating | number:'1.1-1' }} <br/>
        {{ course.price | currency:'AUD' :'symbol' :'3.2-2' }} <br/>
        {{ course.releaseDate |date:'shortDate' }} <br/>

    `
})

export class CoursesComponent {
    course = {
        title: "The complete angular course",
        rating: 4.975,
        students: 30212,
        price: 190.00,
        releaseDate: new Date(2016, 3, 1)
    }
}