StraySpirit
Strayspirit is an application aimed at providing a digital infrastructure for the pet lovers to adopt and post a pet animal for adoption. In addition, it provides an additional feature of purchasing the pet products such as toys, pet food, etc and posting the products for sale. 
Frameworks used: 
For the front-end development, we have used the Angular 7 framework along with the material bootstrap design for Angular. Angular framework is one of the well-known frameworks known for its rich variety of components fulfilling the growing requirements of the modern web applications. On a comparison with other front-end frameworks, Angular provides a component structure which can be easily reused, maintained, and read. Angular CLI in association with NodeJS provides smooth rendering of elements in the web page to provide the best of User eXperience[1]. 
Installation Instructions: 
1.	Install the latest version of NodeJs[4](11.9.0). The latest version of NodeJS will have npm(node packet manager) pre-installed. If not, use the command “npm install” to install npm
2.	Install Angular CLI(Angular Command-line Interpreter) using the command “npm install -g @angular/cli”
3.	Use the command “ng serve -o” to run the project in your localhost
4.	An IDE might be required to investigate the source code. Eg, Sublime Text, Web Storm or Visual Studio code.
Please get in touch with me if you encounter any problem while setting up the environment. 
The following are the list of pages worked by me: 
Home Page: 
Path: http:// http://localhost:4200/
The home page is the first page that appears when the project is loaded. The home page contains a search bar that allows the user to search and filter the breed of their choice. 
The “top events list” section displays all the events that are being conducted in a particular location. The events are added dynamically as and when an event is posted on the platform by an organisation or a welfare unit. For the sake of this assignment, the “register” and “share” button has been routed to an inherent page of the application. 
A sample of the featured dogs and pets are also displayed on the home page. Clicking on the image will provide a more detailed information about the pet. This information will be populated as per the record found in the database. 
Registration Page: 
Path: http://localhost:4200/register-aparna
The registration page can be accessed from the Register-Aparna tab on the Navigation bar. This page allows the user to register with StraySpirit. The address information of the organisation is also gathered as the organisation information has to be provided to the ordinary users who are willing to adopt the pet from any of these organisations. 
The validation is done in all the fields of the form. The passwords selection is restricted to a minimum of 8 characters and maximum of 12 characters for security purposes. 
Contact page: 
Path: http://localhost:4200/contact
This page can be accessed from the “contact” tab available on the navigation bar. The contact page allows the users to get in touch with the StraySpirit community to report a fraudulent posts by a fraudulent organisation. Validation is done on the name and e-mail fields. The “send” button is programmed to produce an alert to make it reactive. However, a mail copy of this message will be sent when the check button is turned on. This will be done later during the back-end development. 
Why rescue page: 
Path: http://localhost:4200/rescue
This page can be accessed from the Resources dropdown bar Why Rescue? 
This page lists the top few pet abusive incidents and provide a reason as to why the pets should be rescued and protected. To show the content hierarchy of this page, Lorem Ipsum[2] random text generator has been used. 
Git Repository Link: https://git.cs.dal.ca/akshah/strayspirit

Problems faced: 
As we are using Angular7 and material bootstrap design for Angular, W3C Validator will not recognise the selectors and dependencies added to the HTML file.
Therefore, pasting the HTML and CSS code to the W3C validator will not identify the classes, selectors, and tags provided by bootstrap and angular and hence will identify those as errors. 

















References: 
[1]"AltexSoft - Technology & Solution Consulting Company", Altexsoft.com, 2019. [Online]. Available: https://www.altexsoft.com. [Accessed: 10- Feb- 2019].
[2]Loremipsum.io, 2019. [Online]. Available: https://loremipsum.io/generator/?n=2&t=p. [Accessed: 10- Feb- 2019].
[3]"Material Design for Bootstrap 4 - the most popular & free UI KIT", Material Design for Bootstrap, 2019. [Online]. Available: https://mdbootstrap.com. [Accessed: 10- Feb- 2019].
[4]N. Foundation, "Download | Node.js", Node.js, 2019. [Online]. Available: https://nodejs.org/en/download/. [Accessed: 10- Feb- 2019].
[5]"Angular Docs", Angular.io, 2019. [Online]. Available: https://angular.io/. [Accessed: 10- Feb- 2019].


