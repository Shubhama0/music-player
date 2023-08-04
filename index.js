let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")
 
 
 
console.log(song_play)
 
 
let songs_list = [
    {
        name : 's',
        Image :"img/music cover.png",
        Song : 'music/a.mp3',
        Singer : 'k'
    },
    {
        name : 't',
        Image :"img/music cover.png",
        Song : 'music/b.mp3',
        Singer : 'a'
    },
    {
        name : 'd',
        Image : "img/music cover.png",
        Song : 'music/a.mp3',
        Singer : 'a'
    },
    {
        name : 'a',
        Image : "img/music cover.png",
        Song : 'music/b.mp3',
        Singer : 'a'
    }
]
 
let i=0;
let flag=false;
 
 
//showing song name and image on screen
var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer
 
//play/pause
song_play.addEventListener("click", function(){
 
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})
 
// nx
song_next.addEventListener("click", function(){
   
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
       
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
   
})
 
// pre
song_prev.addEventListener("click", function(){
   
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
   
   
})