const express = require("express");
const axios = require("axios");
const {createUser, validateUser} = require("./db");


const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://randomuser.me/api/");
        const user = validateUser(response.data.results[0]);
        await createUser(user);
        res.send("Пользователь был добавлен в базу данных")
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => console.log("Server has been started on 3000 port"));