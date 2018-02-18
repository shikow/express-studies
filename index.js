import bluebird from 'bluebird';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
const app = express();
const PORT = 3001;

//mongoose connection
mongoose.Promise = bluebird.Promise; // maybe use bluebird?
mongoose.connect('mongodb://localhost:32769/CRMdb',{
    
}); //12factorapp doesnt approve :P

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => res.send(`Node and Express server is running on port ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
