var str = "{ \"id\": 1, \"username\": \"patty\" }";
var user = JSON.parse(str);
console.log(user.id, user.address.zipCode);
