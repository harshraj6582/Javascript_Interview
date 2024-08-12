const user = {
    name : "John",
    age: 30,
};

function getUserInfo(){
    return `${user.name} is ${user.age} years old`;

}

export {user , getUserInfo};