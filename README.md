# Task-Manager_API
# register
# POST request ==> https://omobolaji-task-api.herokuapp.com/users/register
# req.body name,email,password

# login
# POST request ==> https://omobolaji-task-api.herokuapp.com/users/login
# req.body email,password

# get your details
# GET request ==> https://omobolaji-task-api.herokuapp.com/users/:yourObjectId

# logout user on current device
# POST request ==> https://omobolaji-task-api.herokuapp.com/users/logout

# logout user on all device
# POST request ==> https://omobolaji-task-api.herokuapp.com/users/logoutall

# Read user profile after they are authorized
# GET request ==> https://omobolaji-task-api.herokuapp.com/users/me

# Update fields of an authorized user
# PATCH request ==> https://omobolaji-task-api.herokuapp.com/users/me
# allowedFields are [name, email, password, age]

# Delete user account
# DELETE request ==> https://omobolaji-task-api.herokuapp.com/users/me
# allowedFields are [name, email, password, age]

# Upload profile pics
# POST request ==> https://omobolaji-task-api.herokuapp.com/users/me/avatar
# field ==> pics ==> jpg,png

# delete profile pics
# DELETE request ==> https://omobolaji-task-api.herokuapp.com/users/me

# Get user profile pics from database
# GET request ==> https://omobolaji-task-api.herokuapp.com/users/:yourId/avatar

# To create a task you must first be authenticated

# create a new task
# POST request ==> https://omobolaji-task-api.herokuapp.com/tasks
# req.body => [description *, completed] ==> * signifies required

# get all your tasks
# GET request ==> https://omobolaji-task-api.herokuapp.com/tasks/me

# get a particular task
# GET request ==> https://omobolaji-task-api.herokuapp.com/tasks/:taskId

# update a task
# PATCH request ==> https://omobolaji-task-api.herokuapp.com/tasks/:taskId
# req.body => [description, completed]

# Delete a task
# DELETE request ==> https://omobolaji-task-api.herokuapp.com/tasks/:taskId
























