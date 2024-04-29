const express = require('express');
const app = express();

// Middleware to restrict access to working hours
app.use((req, res, next) => {
const date = new Date();
const day = date.getDay();
const hour = date.getHours();
if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
} else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
}
});

// Routes
app.get('/', (req, res) => {
res.send(`
    <h1>Home Page</h1>
    <nav>
<a href="/">Home</a> |
<a href="/services">Our Services</a> |
<a href="/contact">Contact us</a>
    </nav>
    <p>Welcome to our home page!</p>
`);
});

app.get('/services', (req, res) => {
res.send(`
    <h1>Our Services</h1>
    <nav>
<a href="/">Home</a> |
<a href="/services">Our Services</a> |
<a href="/contact">Contact us</a>
    </nav>
    <p>Check out our amazing services!</p>
`);
});

app.get('/contact', (req, res) => {
res.send(`
    <h1>Contact Us</h1>
    <nav>
<a href="/">Home</a> |
<a href="/services">Our Services</a> |
<a href="/contact">Contact us</a>
    </nav>
    <p>Get in touch with us!</p>
`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
