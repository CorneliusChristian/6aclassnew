if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	if(document.querySelector(".masonry-grid")){
	    document.querySelector(".masonry-grid").style.columnCount = 2; 	
	}else{
    	document.querySelector('#grid1').className = "grid grid-rows-2 p-12 px-8"
    	document.querySelector('#img2').className = "rounded-xl"
	}
}
var a = setInterval(() => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.querySelector('#grid1').className = "grid grid-rows-2 p-12 px-8"
        document.querySelectorAll('#realbody')[0].className = "px-8 mb-2"
        document.querySelectorAll('#realbody')[1].className = "px-8 mt-2"
        document.querySelector('#grid1').className = "grid grid-rows-2 p-12 px-8"
        document.querySelector('#img2').className = "rounded-xl"
	}
},10)
function home(){
    open('/alpha', '_self')
}