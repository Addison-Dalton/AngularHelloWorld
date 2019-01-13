import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ 
    selector: 'courses',
    template: `
        {{ text | summary:10 }}

    `
})

export class CoursesComponent {
    text = `
        long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text long dummy text 
    `
}