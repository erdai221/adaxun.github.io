let myImage=document.querySelector("img");

myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/wukong1.jpg"){
        myImage.setAttribute("src","images/wukong2.jpg")
    } else{
        myImage.setAttribute("src","images/wukong1.jpg")
    }
}