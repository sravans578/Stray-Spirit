Readme file for the Work done by Aadesh Shah (B00802629) for Assignment 2:

Note: Since we are using Angular 7 and Material design for it, W3 validations won't be possible by just copy-pasting the HTML and CSS source code as Angular and Material design provides a lot of different selectors and dependencies on HTML structure. We have ensured that we have followed the W3 standards for creating web pages

Pages Developed by Me - 

Login Page (path - http://localhost:4200/login),
Register Page (path - http://localhost:4200/register),
Profile Page (path - http://localhost:4200/profile),
Profile Inventory Page (path - http://localhost:4200/profile/inventory)

Please check the Installation_steps.pdf file provided in the zip and on Git to compile and Run my application

Login Page - 

How to access the page?
In the Navigation bar, click user dropdown icon and then click on 'Login' option

The Login page allows user to enter email as username and their chosen password and until the form is valid, the sign in button won't be active to be submitted.

Register Page - 

How to access the page?
In the Navigation bar, click user dropdown icon and then click on 'Register' option

There are two types of registrations - Personal and Organization. Thus I have created tab view for the same using angular material tabs available at - https://material.angular.io/components/tabs/examples
The submit buttons won't be active until forms are valid.
Phone number validations - 
XXXXXXXXXX,
XXX-XXX-XXXX,
(XXX)-(XXX)-(XXXX)

Profile Page - 

How to access the page?
In the Navigation bar, click on 'My Profile' option

I've created a sidenav as there are multiple pages in Profile Management which can be accessed by the sidenav. I've used angular material sidenav generated using angular command ng g @angular/material:material-nav --name=profile-nav available at: https://material.angular.io/guide/schematics
User can edit the profile by clicking on edit icon and also update the profile picture by clicking on the profile picture which opens up a modal created using material design for bootstrap available at : https://mdbootstrap.com/docs/angular/modals/basic/


Profile Inventory Page -

The profile inventory page has two functionalities - to view my inventory and to add a product to the inventory and ultimately on the shop page. Thus again used the angular material tab.


Also, I am responsible to create the Navigation bar for the website, the footer and Not Found Page. The Logo used is the work in progress logo for the application provided by the agency with whom I'm working.