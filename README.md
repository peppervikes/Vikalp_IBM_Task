# Vikalp_IBM_Task


TO run the website 
clone the repo 


run this on the terminal 
    npm init -y
    npm install express mysql ejs body-parser
    npm install -D nodemon

Create database
CREATE DATABASE website_manager;

Use the database
USE website_manager;

Create blog_posts table
CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Create contact_requests table
CREATE TABLE contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


change user, password in server.js


enter in the terminal 
        npm run dev
to start the website


here are the final looks of the website 
![alt text](https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/6e61b/MainAfter.avif)
