const net = require("net");
const readline =require("readline"); 

// Create Client
const client = new net.Socket();

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// Connect to server
client.connect(5999, "192.168.1.90", () => {
    console.log("Connected to server");
    r1.question("type msg:",(msg) =>{
        client.write(msg+"\n");
    });
});

// Receive data
client.on("data", (data) => {
    console.log("Server says:", data.toString());
    // client.end();
});

// On close
client.on("close", () => {
    console.log("Connection closed");
});
