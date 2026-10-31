const express = require("express");

const app = express();

app.use(express.json());

var users = [
    {
        id: 1,
        name: "karan",
    },
    {
        id: 2,
        name: "Laksha",
    },
];

app.get("/users", (req, res) => {
    res.json({
        status: "success",
        data: users
    })
})
app.get("/users/:id", (req, res) => {

    const idToRetrive = req.params.id;

    const [user] = users.filter((u) => { return u.id == idToRetrive });

    res.json({
        status: "success",
        data: user
    })
})



app.post("/users", (req, res) => {
    const { srno, data } = req.body;
    users.push({
        id: srno,
        name: data
    })
    res.json({
        status: "success",
        message: "User added successfully"
    })
})

app.delete("/users/:id", (req, res) => {

    const idToDelete = req.params.id;

    users = users.filter((user) => {
        return user.id != idToDelete
    });
    res.json({
        status: "success",
        message: "User Deleted successfully"
    })
})

app.put("/users/:id", (req, res) => {

    const idToUpdate = req.params.id;
    const { data } = req.body;

    users = users.map((user) => {
        if (user.id == idToUpdate) {
            return {
                id: parseInt(idToUpdate),
                name: data
            }
        } else {
            return user
        }
    });
    res.json({
        status: "success",
        message: "User Updated successfully"
    })
})



app.listen(3000, (err) => {
    console.log("Server is listening on port http://localhost:3000");
    // console.log(err)
})