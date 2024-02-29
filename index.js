const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./DataBase/db.jsx');
const UserRoute = require('./Routes/UserRoute.jsx')
const cors = require('cors')

dotenv.config()

connectDB();

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;


//Routes
app.use('/api/user', UserRoute);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})