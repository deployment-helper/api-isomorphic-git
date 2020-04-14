import express from 'express';
import { apiRouter } from './src/api'
import { customErrorHandler } from './src/middleware'
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use('/api', apiRouter);
app.get("/", (req: any, res: any) => {
    res.send("Application Under Development");
});
app.use(customErrorHandler);
app.listen(port, () => console.log(`App listening on port ${port}!`));
