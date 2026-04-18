<h1 align="center">Website Manager Application</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
</p>

## Overview
The **Website Manager** is a classic server-side rendered application focused on managing blog content and handling external contact queries. It demonstrates essential skills in building traditional Model-View-Controller (MVC) style workflows via Express and EJS templating.

## 🚀 Key Highlights
- **Server-Side Rendering (SSR)**: Employs EJS view engine to dynamically inject server data into HTML templates before serving it to the client.
- **Content Management**: An interface tailored for dynamically creating, storing, and reviewing blog posts.
- **Relational Data Mapping**: Incorporates MySQL database for persisting separate tables for website blogs and public contact requests.

## 💻 Tech Stack
- **Server**: Node.js, Express.js
- **Templates**: EJS
- **Database**: MySQL

## 🛠️ Local Environment Setup

### 1. Database Definition
First, ensure your MySQL service is running, then execute the following SQL to prep your database:
```sql
CREATE DATABASE website_manager;
USE website_manager;

CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Node Initialization
1. Clone the repository and navigate inside:
   ```bash
   git clone https://github.com/peppervikes/Vikalp_IBM_Task.git
   cd Vikalp_IBM_Task
   ```
2. Setup the required Node modules:
   ```bash
   npm install
   ```
3. Update `server.js` matching your specific database `user` and `password`.

### 3. Execution
```bash
npm run dev
```

## 🎥 Preview
[![Video Title](https://img.youtube.com/vi/zXH1GnmXqpE/0.jpg)](https://www.youtube.com/watch?v=zXH1GnmXqpE)
