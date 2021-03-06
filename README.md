# sessionLite

A web application for those who want to book and hire musicians. 

Reason for build

> When I first started out producing music, I was using some software that was not very intuitive or beginner friendly. I watched and read many tutorials on how to do certain actions in that software but always felt that I needed to have a conversation with someone and ask as many questions as I could think of. I tried fiverr before but would always run into some sort of problem with connecting as many sellers are in different time zones. With my app, you are able to decide if you want to meet this person over zoom or possibly in person so that you can work together! 

[Link to the live site!](https://session-lite.herokuapp.com/)

# Technologies Used

* HTML5
* CSS3
* JavaScript
* React.js
* Node.js
* Express
* PostgreSQL
* Socket.io
* AWS S3
* Heroku
* Babel
* Webpack

# Features

* User can create a post
* User can view the marketplace
* User can view a post's details
* User can make an offer on a post
* User can create an account
* User can sign in to their account
* User can sign out of their account 
* User can view their inbox
* User can view messages
* User can reply to offers
* User can send message to seller
* User can save a post
<img src="https://user-images.githubusercontent.com/85080021/152854942-ff311baa-98ea-4033-9119-a734ff60ec4a.gif"  />

**Future Features**

* User can edit posts
* User can delete posts
* User can view saved posts



# System Requirements

* Node.js 14 or higher
* NPM 6 or higher

# Getting Started

1. Clone repository
   ```
   git clone git@github.com:addy-abid/session-lite.git
   cd session-lite
   ```
2. Install all dependencies with NPM 
   ```
   npm install
   ```
3. Create copy of `.env.example`
    ```
    cp .env.exmaple
    ```
    
4. Start postgreSQL
   ```
   sudo service postgresql start
   ```
4. Start project and view it at [local host 3000](http://localhost:3000/)
    ```
    npm run dev
    ```

