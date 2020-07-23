import { Component } from '@angular/core';

@Component({
	selector: 'my-work',
	templateUrl: './my-work.component.html',
	styleUrls: ['./my-work.component.css']
})

export class MyWorkComponent {

	title = "My work";

	array = [
		{
			title: 'M & H Property Services',
			languages: 'PHP/Concrete5',
			imagePath: 'assets/m&h.PNG',
			link: 'https://mandhpropertyservices.com',
			job: 'freelance'
		},
		{
			title: 'Viola Arena',
			languages: 'PHP/Concrete5',
			imagePath: 'assets/viola.png',
			link: 'https://www.violaarena.com/',
			job: 'lgt'
		}
	]

}
