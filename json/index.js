const data = require("./friends.json");
delete data.friends[0].name;
console.log(data);