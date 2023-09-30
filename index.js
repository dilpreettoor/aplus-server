const express = require('express');
const knex = require('knex');


// Middleware for creating a session id on server and a session cookie on client
const expressSession = require('express-session');

// Add http headers
const helmet = require('helmet');

// Passport library and Github Strategy
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();
const cors = require('cors');
require('dotenv').config();

// Fallback for .env
const PORT = process.env.PORT || 5051;

// Initialize HTTP Headers middleware
app.use(helmet());

// Using express json to receive request body in JSON for post call
app.use(express.json());

// Enable CORS (with additional config options required for cookies)
app.use(
    cors({
      origin: true,
      credentials: true
    })
  );

  // Include express-session middleware (with additional config options required for Passport session)
app.use(
    expressSession({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
  );

  // =========== Passport Config ============

app.use(passport.initialize());

app.use(passport.session());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    (_accessToken, _refreshToken, profile, done) => {
      console.log('GitHub profile:', profile);

      knex('users')
        .select('id')
        .where({ github_id: profile.id })
        .then(user => {
          if (user.length) {
            done(null, user[0]);
          } else {
        knex('users')
              .insert({
                github_id: profile.id,
                avatar_url: profile._json.avatar_url,
                username: profile.username
              })
              .then(userId => {
                // Pass the user object to serialize function
                done(null, { id: userId[0] });
              })
              .catch(err => {
                console.log('Error creating a user', err);
              });
          }
        })
        .catch(err => {
          console.log('Error fetching a user', err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serializeUser (user object):', user);

  // Store only the user id in session
  done(null, user.id);
});

// `deserializeUser` receives a value sent from `serializeUser` `done` function
// We can then retrieve full user information from our database using the userId
passport.deserializeUser((userId, done) => {
  console.log('deserializeUser (user id):', userId);

  // Query user information from the database for currently authenticated user
knex('users')
    .where({ id: userId })
    .then(user => {
      console.log('req.user:', user[0]);

      done(null, user[0]);
    })
    .catch(err => {
      console.log('Error finding user', err);
    });
});

const productsRouter = require('./routes/products');
const productRouter = require('./routes/product');
const authRoutes = require('./routes/auth');

app.use('/products', productsRouter);
app.use('/auth', authRoutes);
app.use('/product', productRouter);

app.listen(PORT, () => {
    console.log('Listening on', PORT);
});
