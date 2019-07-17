# Assignment 4 (CSCI 5709) 
Name - Richa Khatri
Student ID - B00792218

The feature that I developed for assignment 4 is Blogs/Post module.

The pages that I have developed are:

1) Adding Blog : Only admin will be allowed to add a blog which will be listed on Blogs/Stories page. The admin login can be created through registration. Although I have created admin user, the credentials of the login is Email : admin@gmail.com Password: admin@123. The URL for Add Blog is:

2) Adding Post: The user is allowed to add Post but it will not be displayed on the blog/stories page until admin approve the stories. The admin approve story list will display all the stories which are pending approval. Once story is approved by admin it will be seen on blogs/story page. The added  The URL for Adding Post is:   

3) Approval Content: The approve content functionality is build so that abusive stories are not displayed directly on the frontend, the admin can delete the story if its not proper. It will provide more control on the stories posted on the website. The URL is:

4) The list of blogs and stories which are approved by the admin is displayed on the blogs/stories page. This page be accessed by any user who visits the website but only logged in user can add story or blog. The URL for list of blogs and posts is  


## Code Snippit

1) ./blog-stories-richa.component
<div class="col-lg-4 col-md-6" *ngFor="let story of Stories | paginate: { itemsPerPage: 6, currentPage: page }">
            <mdb-card class="cards" narrower="true" >
              <div class="view view-cascade overlay waves-light" mdbWavesEffect>
                <mdb-card-img
                [src]="story.storyPicModel" [alt]="story.storyTitle">
                </mdb-card-img>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <mdb-card-body cascade="true" class="text-center">
                <h4 class="card-title">
                  <strong> {{story.storyTitle}}</strong>
                </h4>
                <mdb-card-text>
                  {{story.storycontentModel}}
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </div>

2) ./add-blog-richa.component.html  
<p><b>{{myTxt}}</b></p>

## Credentials

Admin Login:

Email: admin@gmail.com
Password: admin@123

UserName Login:

Email: aadesh.ks@somaiya.edu
Password: pass@123