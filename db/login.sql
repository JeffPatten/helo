SELECT u.username, u.profile_pic
FROM users u
WHERE u.username = $1 and u.password = $2