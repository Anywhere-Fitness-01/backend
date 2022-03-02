# Anywhere-Fitness-01-Backend

Deployed URL: https://anywhere-fitness-01.herokuapp.com

## API Endpoints
Authentication

| Method | URL                | Description                                                                                                                                                         |
|--------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POST   | /api/auth/register | Creates a new user sending `username`, `password`, and `role` into `req.body`.                                                                                      |
| POST   | /api/auth/login    | Logs in users who already exist and returns message: "Welcome, (username used)". If unregistered users try and login, it returns the message: "Invalid credentials" |

Users

| Method | URL            | Description                                                                                            |
|--------|----------------|--------------------------------------------------------------------------------------------------------|
| GET    | /api/users     | Returns an array of users.                                                                             |

Classes

| Method | URL                    | Description                                                                                                                                                                                                                                                                     |
|--------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | /api/classes           | Returns an array of classes                                                                                                                                                                                                                                                     |
| POST   | /api/classes           | Need to have a token to access this endpoint. Also need to be an `instructor` to add a class. Creates a new class sending `class_name`, `class_type`, `start_time`, `class_duration`, `intensity_level`, `location`, `registered_number`, and `registered_max` into `req.body`. |
| PUT    | /api/classes/:class_id | Need to have a token to access this endpoint. Also need to be an `instructor` to update a class. Updates the class with the specified `class_id` using data from the `request body`. If no `class_id`, returns the message: "Class not found". Returns the modified class.      |
| DELETE | /api/classes/:class_id | Removes the class with the specified `class_id`.                                                                                                                                                                                                                                |

###Meet me!

####Hannah Brog

Github: https://github.com/bugsbrog

LinkedIn: https://linkedin.com/in/hannah-brog