function radians(degrees) {
  return degrees * Math.PI / 180;
};

function sqrt(n){
  return Math.sqrt(n)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function fancyNumbers (arr,f){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( 1-Math.pow(cos(arr[i]),f) )
  } return box
}

function fancyww1 (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function fancyww2 (arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    if(radians(1/arr[i]) != Infinity){
    box.push( radians(1/arr[i]) )
    }else{
      box.push( 0 )
    }
  } return box
}

function wrapRad(arr){
  var box1 = [];
  for(i = 0; i < arr.length; i++){
    if(i == 0){
      box1.push(0)
    }else if(i == 1){
      box1.push(arr[i])
    }else{
      box1.push(arr[i]+box1[i-1])
    }
  } return box1
}

function arrMultiply(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( arr[i]*n )
  } return box
}

function arrSin(arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]))
  } return box
}

function arrCos(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(cos(arr[i])*n)
  } return box
}

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
  } return box
}
function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function getFront (x,y,s){
  var obj = {
    frontCount: 0,
    backCount: 0
  }
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        obj.frontCount = i+1;
        obj.backCount = x.length - obj.frontCount;
      }
    }
  }
  return (obj)
}

function separate(xArr,yArr,frontCount,backcount){
  var obj = {
    xFront: [],
    yFront: [],
    xBack: [],
    yBack: [],
  }
  for(i=0;i<xArr.length;i++){
    if(i<=frontCount){
      obj.xFront.push(xArr[i]);
      obj.yFront.push(yArr[i]);
    }else{
      obj.xBack.push(xArr[i]);
      obj.yBack.push(yArr[i]);
    }
  }
  return obj
}

function equalOut(arr1,arr2){
  var obj = {
    arr1: arr1,
    arr2: arr2
  }
  var length;
  var toCopy;
  if(obj.arr1.length >= obj.arr2.length){
    length = obj.arr1.length
    toCopy = obj.arr2[obj.arr2.length-1];
    for(i=0;i<length;i++){
      if(!obj.arr2[i]){
        obj.arr2.push(toCopy);
      }
    }
  } else{
    length = obj.arr2.length
    toCopy = obj.arr1[obj.arr1.length-1];
    for(i=0;i<length;i++){
      if(!obj.arr1[i]){
        obj.arr1.push(toCopy);
      }
    }
  } return obj
}
//**********************END FUNCTIONS*********************

var obj = {
  a: {
    x: [],
    y: [],
    frontCount: 0,
    backCount: 0,
    xBack: [],
    yBack: [],
  },
  b: {
    x: [],
    y: [],
    frontCount: 0,
    backCount: 0,
    xBack: [],
    yBack: [],
  },
  c: {
    x: [],
    y: [],
    frontCount: 0,
    backCount: 0,
    xBack: [],
    yBack: [],
  },
  d: {
    x: [],
    y: [],
    frontCount: 0,
    backCount: 0,
    xBack: [],
    yBack: [],
  }
}
console.log(obj);

//***************************VARIABLES**********************************
var d = 500;
var n = 15;
var a = sqrt(2);
var f1 = 1;
var f2 = 1;
var bAndDSize = .9;
var baseRingStart = radians(0);
var ringStart = radians(360);
var aToCAdd = radians(20);




//*********************DERIVED*********************
var e = 1/a;
var aAndBStart = baseRingStart + ringStart;
var cAndDStart = aAndBStart + aToCAdd;
var conicE = sqrt((a*a)-1)/a;
var radUse = radians(180)/d;
var numbersArr = numbers(0,d,1);
var radUseArr = numbers(0,d,radUse);
var oneMinusCos = fancyNumbers(radUseArr,f1);
var pathNum = arrMultiply(oneMinusCos,d/2);
var pathRad = arrMultiply(pathNum,radUse);
var pathx = arrSin(pathRad);
var pathy = arrCos(pathRad,conicE);
var ww1 = fancyww1(radUseArr,f2,n);
var ww2 = fancyww2(ww1);
var wrapRadArr = wrapRad(ww2);

//MAKING WRAPS
var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,1);
var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,1);
var wrapBx = wrapXFun(wrapRadArr,ringStart,pathx,bAndDSize);
var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,bAndDSize);
var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,1);
var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,1);
var wrapDx = wrapXFun(wrapRadArr,cAndDStart,pathx,bAndDSize);
var wrapDy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,bAndDSize);

//PUTING WRAPS IN OBJ
obj.a.x = wrapAx;
obj.b.x = wrapBx;
obj.c.x = wrapCx;
obj.d.x = wrapDx;
obj.a.y = wrapAy;
obj.b.y = wrapBy;
obj.c.y = wrapCy;
obj.d.y = wrapDy;

//PUTTING FRONT AND BACK COUNTS IN OBJ
obj.a.frontCount = getFront(obj.a.x,obj.a.y,.99).frontCount;
obj.a.backCount = getFront(obj.a.x,obj.a.y,.99).backCount;
obj.b.frontCount = getFront(obj.b.x,obj.b.y,.99).frontCount;
obj.b.backCount = getFront(obj.b.x,obj.b.y,.99).backCount;
obj.c.frontCount = getFront(obj.c.x,obj.c.y,.99).frontCount;
obj.c.backCount = getFront(obj.c.x,obj.c.y,.99).backCount;
obj.d.frontCount = getFront(obj.d.x,obj.d.y,.99).frontCount;
obj.d.backCount = getFront(obj.d.x,obj.d.y,.99).backCount;

//SEPARATING FRONT AND BACK IN OBJ
var separateA = separate(obj.a.x,obj.a.y,obj.a.frontCount,obj.a.backCount);
var separateB = separate(obj.b.x,obj.b.y,obj.b.frontCount,obj.b.backCount);
var separateC = separate(obj.c.x,obj.c.y,obj.c.frontCount,obj.b.backCount);
var separateD = separate(obj.d.x,obj.d.y,obj.c.frontCount,obj.b.backCount);
obj.a.xFront = separateA.xFront;
obj.a.xBack = separateA.xBack;
obj.b.xFront = separateB.xFront;
obj.b.xBack = separateB.xBack;
obj.c.xFront = separateC.xFront;
obj.c.xBack = separateC.xBack;
obj.d.xFront = separateD.xFront;
obj.d.xBack = separateD.xBack;

console.log(obj);

var plotObj = {
  ab: {
    front: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    },
    back: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    }
  },
  ac: {
    front: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    },
    back: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    }
  },
  cd: {
    front: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    },
    back: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    }
  },
  bd: {
    front: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    },
    back: {
      x1: [],
      y1: [],
      x2: [],
      y2: []
    }
  }
}
console.log(plotObj)
