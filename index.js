const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const gen = require('generate-password')
var adminkey = "oksurn"
var adminid = gen.generate()
db.defaults({ posts: [] })
  .write()
app.use('/fonts', express.static(__dirname+'/fonts'))
app.use('/a', express.static(__dirname+'/assets'))
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/alpha.html')
})
app.get('/alpha', (req, res) => {
  res.sendFile(__dirname+'/alpha.html')
})
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname+'/gallery copy.html')
})
app.get('/news', (req, res) => {
  res.sendFile(__dirname+'/news.html')
})
app.get('/dev', (req, res) => {
  res.sendFile(__dirname+'/dev.html')
})
app.get('/student', (req, res) => {
  res.sendFile(__dirname+'/student.html')
})
app.get('/admin/:adminid', (req, res) => {
  if((req.params.adminid) == adminid){
    res.sendFile (__dirname+'/adminpage.html')
    setTimeout(function(){
  
    }, 60000*5)
  }else{
    res.redirect('/admin')
  }
})
app.get('/admin/', (req, res) => {
  res.redirect('/adminlog')
})
app.get('/adminlog', (req, res) => {
  res.sendFile(__dirname+'/admin.html')
})
app.get('/post/:postid', (req, res) => {
  res.sendFile(__dirname+'/post.html')
})
db._.mixin({
  fivelast: function(array) {
    return array[1]
  }
})
io.on('connection', (socket) => {
  console.log('a user connected');
    
  socket.on('reqp', () => {
    socket.emit('poster',
      db.get('posts')
        .slice(-6)
    )
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('administration', (pwpw) => {
    console.log('admkfekenfkef')
    if(pwpw == adminkey){
      adminid = gen.generate({
        length: 32,
        numbers: true
      }); 
      socket.emit('passy', adminid)
    }else{
      socket.emit('passy', 0)
    }
  });
  socket.on('news', (arr) => {
    console.log(arr)
    db.read()
    db.get('posts').push(arr).write()
  })
});
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
