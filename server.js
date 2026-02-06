

// let product = {
//     id: 101,
//     name: "Mobile",
//     price: 15000
// };
// let jsonData = JSON.stringify(product);
// console.log(jsonData);

// // decerilization stringify data how i can convet  into json data 
// let productObj = JSON.parse(jsonData);
// console.log(productObj.name);
// console.log(productObj.price);



const net = require("net");

// Create Server
const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        const message = data.toString();
        console.log("Client says:", message);

        const reply = "Hello Client, \nI received: " + message;
        socket.write(reply);
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

// Start listening
server.listen(5000, () => {
    console.log("Server started on port 5000");
});
