var img=["/images/im1.jpg","/images/hulk.jpg","/images/im2.jpg","/images/thor1.jpg","/images/cap1.jpg","/images/avg1.jpg","/images/p2.png","/images/im3.jpg","/images/thor2.jpg","/images/cap2.jpg","/images/gg1.jpg","/images/avg2.jpg","/images/ant1.jpg","/images/p3.jpg","/images/cap3.jpg","/images/ds1.jpg","/images/gg2.jpg","/images/sm1.jpg","/images/thor3.jpg","/images/bp1.jpg","/images/avg3.jpg","/images/ant2.jpg","/images/cm1.jpg","/images/avg4.jpg","/images/sm2.jpg","/images/p4.jpg","/images/bw.jpg","/images/sct.jpg","/images/etern.jpg","/images/sm3.jpg","/images/ds2.jpg","/images/thor4.jpg","/images/bp2.jpg","/images/END.png","/images/the_end.png"]
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
