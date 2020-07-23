import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent {

	title="About me";

	array = [
		{
			title: "Continuing professional development",
			description: "Freelance work developing and designing a website for M & H Property Services, or carrying out courses on Udemy inlcuding 'The Complete ASP.NET MVC 5 Course', 'Compelte C# Masterclass'. I am always looking for ways to improve my techincal and professional abilities.",
			link: "https://mandhpropertyservices.co.uk",
			imagePath: "assets/udemy.png"
		},
		{
			title: "Where am I now",
			description: "Now a Commerical Web Developer for Assured Futures Ltd in Cheltenham, Gloucester. I am working with new languages such as C#, Asp.net, and Angular, developing my CV, and imporving daily helping create systems that link to our CRM via restful API's. Working with clients lik Compare The Market, Go Compare and Money Supermarket, to generate leads and support our call centre staff.",
			link: "https://www.assuredfutures.co.uk",
			imagePath: "assets/assuredfutures.png"
		},

		{
			title: "My first job",
			description: "Fresh out of University and eager to learn. I jumped right in to a Web Developer job at Limegreentangerine, a Web Agency based in Cardiff, South Wales. Here I was able to learn everything from the basics HTML, CSS and Javascript, along with MySql, PHP, and Concrete5 CMS. Working with some big clients like Ice Arena Wales, FAW, and more.",
			link: "https://www.limegreentangerine.co.uk",
			imagePath: "assets/lgt.jpg"
		},

		{
			title: "Where it all started",
			description: "Finishing my A Levels at Bryntirion Comprehensive School, with Computing, Maths, Biology. I moved onto Aberyswtyth Univeristy Graduating in Internet Computing with Systems Administration in 2017.",
			link: "https://www.aber.ac.uk/en/",
			imagePath: "assets/aberystwyth-university-logo.jpg"
		}
	]
}
