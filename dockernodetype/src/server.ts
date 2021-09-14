import express from "express";

const app = express();

app.use(express.json());

app.use("/", (request, response) => {
    response.send("Hello World 123");
});

app.listen(3333, () => console.log("Server is running!"));