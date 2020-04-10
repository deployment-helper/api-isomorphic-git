import express from 'express';
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req:any, res:any) => {
    res.send("Application Under Development");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
