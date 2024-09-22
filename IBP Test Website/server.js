const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Vikalp',
    password: 'root',
    database: 'website_manager'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact', { successMessage: null }); // Ensure successMessage is initialized
});

app.post('/contact/new', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO contact_requests (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) throw err;
        res.render('contact', { successMessage: 'Your message has been sent successfully!' });
    });
});

app.get('/blog', (req, res) => {
    const query = 'SELECT * FROM blog_posts ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('blog', { posts: results });
    });
});

app.post('/blog/new', (req, res) => {
    const { title, content } = req.body; // Assuming your form sends title and content
    const query = 'INSERT INTO blog_posts (title, content) VALUES (?, ?)';
    
    db.query(query, [title, content], (err, result) => {
        if (err) throw err;
        res.redirect('/blog'); // Redirect to the blog page after successful insertion
    });
});

app.post('/blog/delete/:id', (req, res) => {
    const blogId = req.params.id;
    const query = 'DELETE FROM blog_posts WHERE id = ?';

    db.query(query, [blogId], (err, result) => {
        if (err) throw err;
        res.redirect('/blog'); // Redirect back to the blog page after deletion
    });
});


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
