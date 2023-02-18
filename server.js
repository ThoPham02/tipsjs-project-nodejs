//init port start server
const app = require("./src/app");

const PORT = 8000

const server = app.listen(PORT, () => {
    console.log("WSV eCommerce start with port " + PORT)
})

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server closed")
    })

    //notify server(ping ...)
})
