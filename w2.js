var img=["/nostalgiabypranav/images/im1.jpg","/nostalgiabypranav/images/hulk.jpg","/nostalgiabypranav/images/im2.jpg","/nostalgiabypranav/images/thor1.jpg","/nostalgiabypranav/images/cap1.jpg","/nostalgiabypranav/images/avg1.jpg","/nostalgiabypranav/images/p2.png","/nostalgiabypranav/images/im3.jpg","/nostalgiabypranav/images/thor2.jpg","/nostalgiabypranav/images/cap2.jpg","/nostalgiabypranav/images/gg1.jpg","/nostalgiabypranav/images/avg2.jpg","/nostalgiabypranav/images/ant1.jpg","/nostalgiabypranav/images/p3.jpg","/nostalgiabypranav/images/cap3.jpg","/nostalgiabypranav/images/ds1.jpg","/nostalgiabypranav/images/gg2.jpg","/nostalgiabypranav/images/sm1.jpg","/nostalgiabypranav/images/thor3.jpg","/nostalgiabypranav/images/bp1.jpg","/nostalgiabypranav/images/avg3.jpg","/nostalgiabypranav/images/ant2.jpg","/nostalgiabypranav/images/cm1.jpg","/nostalgiabypranav/images/avg4.jpg","/nostalgiabypranav/images/sm2.jpg","/nostalgiabypranav/images/p4.jpg","/nostalgiabypranav/images/bw.jpg","/nostalgiabypranav/images/sct.jpg","/nostalgiabypranav/images/etern.jpg","/nostalgiabypranav/images/sm3.jpg","/nostalgiabypranav/images/ds2.jpg","/nostalgiabypranav/images/thor4.jpg","/nostalgiabypranav/images/bp2.jpg","/nostalgiabypranav/images/END.png","/nostalgiabypranav/images/the_end.png"]
var i=0 ,b,id,time=3490;
var audio = new Audio('/music/avg_theme.mp3');
function animated() {
    audio.play();
    document.getElementById("logo").src ="/images/p1.jpg";
    id = setInterval("ss()",time);
}
function ss(){
    if (i==img.length-1) {
        document.getElementById("logo").src ="/images/paisa.png";
        clearInterval(id);
    } 
    else {
        document.getElementById("logo").src = img[i];
        i=(i < img.length - 1)? i+1 : 0;  
        console.log(i); 
    }
    document.getElementById("button").style.display="none"; 
    console.log(i);
}
