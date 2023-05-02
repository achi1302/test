const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/legiamo',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log('Ya esta conectada'))
.catch((err) => console.log(err));