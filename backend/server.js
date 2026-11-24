import express from "express"

const app = express();

app.get("/",(req,res) => {
    res.json({
        message : "hello i am runninnggg ....."
    })
})
app.listen(3000,() => {
    console.log("Server is running at port 3000");

})


