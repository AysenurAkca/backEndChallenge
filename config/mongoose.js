const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aysnr0204:aysnrakca01@cluster0.1p0zvyl.mongodb.net/')
.then(()=>  console.log('Connected DB'))
.catch((err)=> console.log('There is something wrong about DB', err))

