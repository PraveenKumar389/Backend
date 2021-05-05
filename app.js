const express = require('express');

const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4200;
require('dotenv/config');
const cors = require('cors');
app.use(cors());
app.use(express.json());

//Import router





//Routes

app.get('/', (req,res)=>{
    res.send(" Hello World");
});
app.use('/posts', require('./router/posts'));


//Connect DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser:true , useUnifiedTopology: true , useFindAndModify:true},
    () => console.log('Connected to DB!')
);


//Star listening to the server


app.listen(PORT, console.log(`Server started on port ${PORT}`));
