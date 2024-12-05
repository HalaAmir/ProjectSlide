var allImg = Array.from(document.querySelectorAll("img"));
//  console.log(allImg);
var imgRight = document.querySelector(".fa-circle-chevron-right");
var imgLeft = document.querySelector(".fa-circle-chevron-left");
var imgClose = document.querySelector(".fa-circle-xmark");
var imgIndex;
var clasItem = document.querySelector(".itembox");
var allItem = document.getElementById("itembox-container");

for (var i = 0; i < allImg.length; i++) {
  allImg[i].addEventListener("click", function (e) {
    // console.log('hello');

    //  console.log(allItem);
    allItem.classList.remove("d-none");

    // console.log(e);
    var evntItem = e.target.getAttribute("src");
    imgIndex = allImg.indexOf(e.target);
    // console.log(imgIndex);

    // console.log(evntItem);

    // console.log(clasItem);
    clasItem.style.backgroundImage = `url(${evntItem})`;
  });
}

function allImgRight() {
  imgIndex--;
  if (imgIndex == -1) {
    imgIndex = allImg.length - 1;
  }
  //   console.log(imgIndex);
  var nextImg = allImg[imgIndex].getAttribute("src");
  // console.log(nextImg);
  clasItem.style.backgroundImage = `url(${nextImg})`;
}
function allImgLeft() {
  imgIndex++;
  if (imgIndex == allImg.length) {
    imgIndex = 0;
  }
  //   console.log(imgIndex);
  var nextImg = allImg[imgIndex].getAttribute("src");
  // console.log(nextImg);
  clasItem.style.backgroundImage = `url(${nextImg})`;
}
function allImgClose() {
  allItem.classList.add("d-none");
}

imgRight.addEventListener("click", allImgRight);
imgLeft.addEventListener("click", allImgLeft);
imgClose.addEventListener("click", allImgClose);

document.addEventListener("keydown", function (e) {
  // console.log('hello');
  // console.log(e);
  if (e.code == "Escape") {
    allImgClose();
  } else if (e.code == "ArrowRight") {
    allImgRight();
  } else if (e.code == "ArrowLeft") {
    allImgLeft();
  }
});

allItem.addEventListener("click", function (e) {
  if (e.target == allItem) {
    allImgClose();
  }
});

///test code revision
// for (var i=0 ; i<10 ; i+=2) {

//    console.log("hello");

// }

//global scope
// var hmbozo = 50;
// function test(n1, n2) {
//   //local scope
//   var res = n1 + n2 + hmbozo;
//   var avg = res / 2;
//   console.log(avg);
// }
// test(20, 20);


// var myarray=[2,5,12,'ahmed',30,60];

// var carray=myarray.splice(3,0,'ahmed');
// console.log(myarray)

// var testcode=document.querySelector('.testcode');
// testcode.style.width='50%';
// testcode.style.height='10rem';
// testcode.style.backgroundColor='aqua';
// testcode.style.color='blue';


// testcode.classList.add('csstest');
// testcode.classList.remove('csstest');
// testcode.classList.replace('testcode','csstest');
// testcode.classList.contains('csstest');
// console.log(testcode.classList.contains('csstest'));

// testcode.style.cssText='background-color:green !important ;color:#fff';



// testcode.onclick=function(){
//   alert('welcome');
// }


// testcode.addEventListener('click',function(){
//   test('loley')
// })

// function test(name)
// {
//   alert('welcome'+name);
// }

