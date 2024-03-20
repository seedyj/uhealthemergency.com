const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-firebase-adminsdk.json'); // Update the path

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Get a Firestore instance

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'YourSecretKey', resave: true, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.render('index'); // Your landing page
});

app.get('/login', (req, res) => {
    res.render('login'); // Your login form page
});

app.post('/login', async (req, res) => {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('username', '==', req.body.username).get();
    if (!snapshot.empty) {
        const userDoc = snapshot.docs[0];
        const user = userDoc.data();
        if (bcrypt.compareSync(req.body.password, user.password)) {
            req.session.userId = userDoc.id; // Set a session cookie with user ID
            res.redirect('/profile');
        } else {
            res.redirect('/login'); // Redirect back if login fails
        }
    } else {
        res.redirect('/login'); // Redirect back if user not found
    }
});

app.get('/signup', (req, res) => {
    res.render('signup'); // Your signup form page
});

app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUserRef = await db.collection('users').add({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            medicalHistory: '', // Assume string, adjust based on actual structure
            profilePicture: ''  // Assume URL or path to image
        });
        res.redirect('/login');
    } catch {
        res.redirect('/signup');
    }
});

app.get('/profile', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    const userDoc = await db.collection('users').doc(req.session.userId).get();
    if (userDoc.exists) {
        const user = userDoc.data();
        res.render('profile', { user: user }); // Pass the user data to the profile page
    } else {
        res.redirect('/login'); // Redirect if user not found (or session invalid)
    }
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
