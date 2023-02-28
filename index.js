const express = require('express')
const fireStore = require('./config')

const app = express()
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const cors = require('cors');
// Use this to allow CROS request. Add domain of the hosted frontend app.
app.use(cors({
  origin: ['https://bfs-dev.tynker.com', 'https://snack-web-player.s3.us-west-1.amazonaws.com']
}));

app.get('/', (req, res) => {
  res.send('Hello!')
  console.log(fireStore)
})

app.use(express.json())
app.use('/api/feeds', require('./routes/feeds'))
app.use('/api/user', require('./routes/user'))

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})  
