const express = require('express');
const router = express.Router();

const passport = require('passport');

require('dotenv').config();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback', 
  passport.authenticate('github', {
    failureRedirect: `${process.env.CLIENT_URL}/auth-fail`,
  }),
  (_req, res) => {
    // Successful authentication, redirect to client-side application
    res.redirect(process.env.CLIENT_URL);
  }
);

// User profile endpoint th00at requires authentication
router.get('/profile', (req, res) => {
  // Passport stores authenticated user information on `req.user` object.
  // Comes from done function of `deserializeUser`
  if (req.user === undefined) return res.status(401).json({ message: 'Unauthorized' });

  // If user is currently authenticated, send back user info
  res.status(200).json(req.user);
});

// Create a logout endpoint
router.get('/logout', (req, res) => {
  // Passport adds the logout method to request, will end user session
  req.logout((error) => {
    // This callback is called after logout
    if (error) {
        return res.status(500).json({message: "Server error. Please try again later",error: error});
    }
    // Redirect the user back to client-side application
    res.redirect(process.env.CLIENT_URL);
  });
});

router.get('/success-callback', (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: 'User is not logged in' });
  }
});

// Export this module
module.exports = router;
