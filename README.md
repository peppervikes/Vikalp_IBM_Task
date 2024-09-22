# Vikalp IBP Task - Website Manager Project

## Description
This project is a simple website manager built with Express, MySQL, and EJS, allowing you to create and manage blog posts and handle contact form submissions.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MySQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/peppervikes/Vikalp_IBM_Task.git
   cd Vikalp_IBM_Task
   ```

2. **Install necessary packages:**
   ```bash
   npm init -y
   npm install express mysql ejs body-parser
   npm install -D nodemon
   ```

### Database Setup

1. **Create the database:**
   ```sql
   CREATE DATABASE website_manager;
   ```

2. **Use the database:**
   ```sql
   USE website_manager;
   ```

3. **Create the `blog_posts` table:**
   ```sql
   CREATE TABLE blog_posts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Create the `contact_requests` table:**
   ```sql
   CREATE TABLE contact_requests (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### Configuration

1. Open the `server.js` file.
2. Update the MySQL `user` and `password` with your own credentials.

### Running the Application

To start the website, run the following command in the terminal:
```bash
npm run dev
```

### Final Look of the Website
[![Video Title](https://img.youtube.com/vi/zXH1GnmXqpE/0.jpg)](https://www.youtube.com/watch?v=zXH1GnmXqpE)


