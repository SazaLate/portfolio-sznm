document.querySelector('p').onclick = function(){
    alert('裏ページに進みますか？　Yes/No')
}

var myHTML = document.querySelector('li');
myHTML.onclick = function(){
    alert('やけどするよ')
};


// 以下、画像クリックすると画像が差し替わるプログラム
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_5604.JPG'){
        myImage.setAttribute('src','images/WSML2872.JPG');
    } else {
        myImage.setAttribute('src','images/IMG_5604.JPG');
    } 
}


//　ここからボタンを作って自己紹介を改ざんするプログラム
var myButton = document.querySelector('button');
var myHeading = document.querySelector('p');

// ここで関数を作る。setUserName()
function setUserName(){
    let myName = prompt('Please enter your introduction.');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = myName + ' Writer/Programmer';
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '　Writer/Programmer';
}

myButton.onclick = function(){
    setUserName();
