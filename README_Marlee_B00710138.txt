Assignment 4 
Marlee Donnelly (B00710138)
*****************************************************************************

GitLab repository: https://git.cs.dal.ca/akshah/strayspirit
Link: http://129.173.22.35:14785/user_management (make sure you're logged in with the super admin credentials I provided)

Related files:
backend/api/models/user.js (MODIFIED) 
backend/api/routes/user.js (MODIFIED) 
frontend/src/app/user.service.spec.ts (NEW) 
frontend/src/app/user.service.ts (NEW) 
frontend/src/app/admin-user-management/admin-user-management.component.html (NEW)
frontend/src/app/admin-user-management/admin-user-management.component.ts (NEW)
frontend/src/app/auth.sevice.ts (MODIFIED) 
frontend/src/app/app-routing.module.ts (MODIFIED) 
frontend/src/app/nav/nav.component.html (MODIFIED) 
frontend/src/app/admin.guard.spec.ts (NEW) 
frontend/src/app/admin.guard.ts (NEW) 
frontend/src/app/super-admin.guard.spec.ts (NEW) 
frontend/src/app/super-admin.guard.ts (NEW) 
frontend/src/app/unauthorized/unauthorized.component.html (NEW) 
frontend/src/app/unauthorized/unauthorized.component.scss (NEW) 
frontend/src/app/unauthorized/unauthorized.component.spec.ts (NEW) 
frontend/src/app/unauthorized/unauthorized.component.ts (NEW)

*****************************************************************************

Note that administrative tools can only be accessed by users who are both logged in and possess the proper credentials. Feel free to use the following Super Admin organization account to explore these tools.

Email:fakeOrg@organization.com
Password: password

Note that this is an ORGANIZATION account and you'll have to use the organization login page to sign in!
*****************************************************************************

This project is a continuation of the work done by A. Shah, A. Gadhvi, A. Sridhar, and D. Varshney in the winter semester, so some of the files I worked with contain a significant amount of code not written by me. These files include the original author's name in the comments, as well as a note that the code was modified (not authored) by me. I have indicated large additions with comments in the code, as well as a more general overview of the changes I made below.


backend/api/models/user.js:
- Added isAdmin and isSuperAdmin booleans to the schema (lines 17-24)

backend/api/routes/user.js
- Added get methods to return a list of all users (lines 14-44)
- Modified the user_signup method to fill in values for isAdmin and isSuperAdmin
- On lines 304 and 330, added an extra parameter so that put actions no longer overwrite fields that aren't provided in the put request as null
- Added catch blocks to the router.get methods (lines 268-271 and 282-285) so that errors would actually show if applicable
- Added routes for deleting users and organizations

frontend/src/app/auth.sevice.ts
- Added methods to check for and update the logged in user's admin status (lines 45-51)
- Added methods for deleting users and organizations
- Changed update methods so that they return a value that can be subscribed to to see when the process is done (lines 93, 99)

frontend/src/app/app-routing.module.ts
- Added guards to the user_management and approve_content pages (lines 101-102)
- Added path for unauthorized error page

frontend/src/app/nav/nav.component.html, frontend/src/app/nav/nav.component.ts
- Added checks so the admin section only shows if the user has the right privileges


*****************************************************************************

References

A. Shah, A. Gadhvi, A. Sridhar, D. Varshney, “StraySpirit (An application for Pet Adoption and Rescue).” Dalhousie University, [online document], 2019. [Accessed May 13, 2019]

Guideline for the Material Table used in admin-user-management.component.html:
https://material.angular.io/components/table/overview
This resource was used to figure out the syntax required to specify a table as specifically material, as well as to learn the name of the method used to reload table cells. All content, categories, data, and styling for this table are my own.

Guideline for mongoose syntax:
https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete
I used this resource to figure out the name of the methods I'd need and the parameters they take in when adding the DELETE actions in routes/user.js.