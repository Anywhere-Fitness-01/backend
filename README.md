# Anywhere-Fitness-01-Backend

Deployed URL: https://anywhere-fitness-01.herokuapp.com

## API Endpoints
Authentication

| Method | URL                | Description                                                                                                                                    |
|--------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| POST   | /api/auth/register | Creates a new user sending `username`, `password`, and `role` into `req.body`.                                                                 |
| POST   | /api/auth/login    | Logs in users who already exist and returns message "Welcome, (username used)". If unregistered users try and login, it returns the message "" |
| DELETE | /api/users/:id     | Removes the user with the specified `id` and returns the deleted user.                                                                         |
| PUT    | /api/users/:id     | Updates the user with the specified `id` using data from the `request body`. Returns the modified user                                         |
