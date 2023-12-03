import {default as express} from 'express'
import {default as dotenv} from 'dotenv'
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

dotenv.config();

const PORT = process.env.SERVER_PORT_NUMBER;

app.listen(PORT, () => console.log(`Server running successfully on port 8800!!`));




