var socket = io();
var urlk = document.URL;
var idN = urlk.split("/").at(urlk.split("/").length - 1)
var profileUrl = "https://upload.cornel629.repl.co/u/755bf3af-3380-454b-b5fe-3eaa8a2a9602.png";
var headerImg = "https://picsum.photos/1000"
var content = "Diketahui Pak Agus (President of AMOGUS) telah pergi ke Ohio"
socket.emit('reqp')
socket.on('poster', (msg) => {
    for(var i = 0;i < (msg).length;i++){
        if(msg[i]['id'] == idN){
            var title = (msg[i]['title'])
            headerImg = (msg[i]['image'])
            content = (msg[i]['content'])
            document.querySelector("#grid1 > a > div").style.background = "url("+headerImg+")";
            document.querySelector("#grid1 > a").href = headerImg;
            document.querySelector("#grid1 > a > div").style.backgroundSize = "cover";
            
            if (headerImg.toString().length < 3){
                document.querySelector("#grid1 > a > div").remove();
            }
        }
    }
    
    document.querySelector("#gambar").src = profileUrl
    document.querySelector("#grid1 > h1").innerHTML = title;
    document.querySelector("#grid1 > p.text-lg").innerText = content;
})


// Set profile picture.
