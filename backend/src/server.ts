import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

//localhost:3333
app.listen(3333);