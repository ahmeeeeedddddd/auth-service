const { findUser } = require("./users");

function login(username, password) {

    if(typeof username!='string'||username.trim() ===''){
        console.log(`${new Date().toISOString()} failed login attempt for ${username}`)
        return{success:false, message: "invalidn username!"};
    }

    if(typeof password!='string'||password.trim()===''){
        console.log(`${new Date().toISOString()} failed login attempt for ${username}`)
        return{success:false, message:"invalid password!"};
    }

    if (password.length < 8) {
    console.log(`${new Date().toISOString()} failed login attempt for ${username}`)
    return { success: false, message: "Password must be at least 8 characters" };
    }

    const user = findUser(username);

    if (!user) {
    console.log(`${new Date().toISOString()} failed login attempt for ${username}`)
    return { success: false, message: "Invalid credentials" };
    }

    if (user.password !== password) {
    console.log(`${new Date().toISOString()} failed login attempt for ${username}`)
    return { success: false, message: "Invalid credentials" };
    }


    return {
    success: true,
    message: "Login successful",
    role: user.role
    };
}

module.exports = { login };
