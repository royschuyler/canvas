console.log('here1');
function look(arrx,arry){
  var text = '';

  for(i=0;i<arrx.length;i++){
    text += arrx[i] + ' ' + arry[i] + '\n'
  }
  console.log(text)
}

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

//*********************shade functions*********************
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
        obj.frontCount = i+2;
        obj.backCount = x.length - obj.frontCount;
      }
    }
  }
  return (obj)
}

  function frontAndBack(frontCount,x,y){
    var obj = {
      xb: [],
      yb: [],
      xf: [],
      yf: []
    }

    for(i=0;i<x.length;i++){
      if(i<frontCount){
        obj.xf.push(x[i]);
        obj.yf.push(y[i]);
      }else{
        obj.xb.push(x[i-1]);
        obj.yb.push(y[i-1]);
      }
    }
    return obj
  }


//VARS
var bigN = 200;
var smallN = 200;
var rings = 1;
var d = 500;
var a = sqrt(2);
var n = 15;
var f1 = 1;
var f2 = 1.1;
var additionalStart = radians(0);
var aToCAdd = radians(15);
var abBase = radians(0);
var abBorder = additionalStart + abBase;
var cdBorder = abBorder + aToCAdd;
var aToCUse = Math.abs(abBorder-cdBorder)/bigN;

var smallSize = .9;
var sizeUse = (1-smallSize)/smallN;
      var wrapSizeB = 1;
      var ringRad = radians(360/rings);
      var e = 1/a;
      var conicE = sqrt((a*a)-1)/a;
      var rad360 = radians(360);
      var rad180 = radians(180);
      var rad90 = radians(90);
      var radUse = radians(180)/d;
      var numArr = numbers(0,1,d);
      var radUseArr = numbers(0,d,radUse);
      var oneMinusCos = fancyNumbers (radUseArr,f1);
      var pathNum = arrMultiply(oneMinusCos,d/2);
      var pathRad = arrMultiply(pathNum,radUse);
      var pathx = arrSin(pathRad);
      var pathy = arrCos(pathRad,conicE);
      var ww1 = fancyww1 (radUseArr,f2,n);
      var ww2 = fancyww2 (ww1);
      var wrapRadArr = wrapRad(ww2);

var aToCArr = [];
for(i=0;i<bigN+1;i++){
  aToCArr.push(abBorder + (i*aToCUse))
}

var sizeArr = [];
var hypArr = [];
for(i=0;i<smallN+1;i++){
  sizeArr.push(smallSize + (i*sizeUse));
  hypArr.push(.99*(smallSize + (i*sizeUse)));
}

  var obj = {
    ac: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    bd: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    ab: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    cd: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    }
  }
 //***************AC AND BD LONG************************************
  //get wraps for ac and bd
  for(y=0;y<aToCArr.length;y++){
      var wrapAx = wrapXFun(wrapRadArr,aToCArr[y],pathx,wrapSizeB);
      var wrapAy = wrapYFun(pathx,e,wrapRadArr,aToCArr[y],pathy,wrapSizeB);
      var wrapBx = wrapXFun(wrapRadArr,aToCArr[y],pathx,smallSize);
      var wrapBy = wrapYFun(pathx,e,wrapRadArr,aToCArr[y],pathy,smallSize);
      obj.ac.x.push(wrapAx);
      obj.ac.y.push(wrapAy);
      obj.bd.x.push(wrapBx);
      obj.bd.y.push(wrapBy);
  }
//get front/back counts for ac and bd
for(t=0;t<obj.ac.x.length;t++){
  obj.ac.frontCount.push(getFront(obj.ac.x[t],obj.ac.y[t],.99).frontCount);
  obj.ac.backCount.push(getFront(obj.ac.x[t],obj.ac.y[t],.99).backCount);
  obj.bd.frontCount.push(getFront(obj.bd.x[t],obj.bd.y[t],smallSize).frontCount);
  obj.bd.backCount.push(getFront(obj.bd.x[t],obj.bd.y[t],smallSize).backCount);
}
// separate back and front for ac and bd
for(t=0;t<obj.ac.x.length;t++){
  var acObj = frontAndBack(obj.ac.frontCount[t],obj.ac.x[t],obj.ac.y[t]);
  var bdObj = frontAndBack(obj.bd.frontCount[t],obj.bd.x[t],obj.bd.y[t]);
  obj.ac.xf.push(acObj.xf);
  obj.ac.xb.push(acObj.xb);
  obj.ac.yf.push(acObj.yf);
  obj.ac.yb.push(acObj.yb);
  obj.bd.xf.push(bdObj.xf);
  obj.bd.xb.push(bdObj.xb);
  obj.bd.yf.push(bdObj.yf);
  obj.bd.yb.push(bdObj.yb);
}

//******************AB ABD CD SHORT***********************************
  //get wraps for ac and bd
  for(y=0;y<sizeArr.length;y++){
      var wrapAx = wrapXFun(wrapRadArr,abBorder,pathx,sizeArr[y]);
      var wrapAy = wrapYFun(pathx,e,wrapRadArr,abBorder,pathy,sizeArr[y]);
      var wrapBx = wrapXFun(wrapRadArr,cdBorder,pathx,sizeArr[y]);
      var wrapBy = wrapYFun(pathx,e,wrapRadArr,cdBorder,pathy,sizeArr[y]);
      obj.ab.x.push(wrapAx);
      obj.ab.y.push(wrapAy);
      obj.cd.x.push(wrapBx);
      obj.cd.y.push(wrapBy);
  }

//get front/back counts for ab and cd
for(t=0;t<obj.ab.x.length;t++){
  obj.ab.frontCount.push(getFront(obj.ab.x[t],obj.ab.y[t],smallSize).frontCount);
  obj.ab.backCount.push(getFront(obj.ab.x[t],obj.ab.y[t],smallSize).backCount);
  obj.cd.frontCount.push(getFront(obj.cd.x[t],obj.cd.y[t],smallSize).frontCount);
  obj.cd.backCount.push(getFront(obj.cd.x[t],obj.cd.y[t],smallSize).backCount);
}

// separate back and front for ac and bd
for(t=0;t<obj.ab.x.length;t++){
  var abObj = frontAndBack(obj.ab.frontCount[t],obj.ab.x[t],obj.ab.y[t]);
  var cdObj = frontAndBack(obj.cd.frontCount[t],obj.cd.x[t],obj.cd.y[t]);
  obj.ab.xf.push(abObj.xf);
  obj.ab.xb.push(abObj.xb);
  obj.ab.yf.push(abObj.yf);
  obj.ab.yb.push(abObj.yb);
  obj.cd.xf.push(cdObj.xf);
  obj.cd.xb.push(cdObj.xb);
  obj.cd.yf.push(cdObj.yf);
  obj.cd.yb.push(cdObj.yb);
}

// for(i=0;i<obj.ab.xb.length;i++){
//   obj.ab.xb[i].reverse();
//   obj.ab.yb[i].reverse();
//   obj.cd.xb[i].reverse();
//   obj.cd.yb[i].reverse();
// }

// for(i=0;i<obj.ac.xb.length;i++){
//   obj.ac.xb[i].reverse();
//   obj.ac.yb[i].reverse();
//   obj.bd.xb[i].reverse();
//   obj.bd.yb[i].reverse();
// }

console.log(obj);
var sizer = 400;
console.log(obj.ab.xb[0][0])
for(i=0;i<obj.ab.xb.length;i++){
  for(z=0;z<obj.ab.xb[i].length;z++){
    obj.ab.xb[i][z] = obj.ab.xb[i][z]*sizer;
    obj.ab.yb[i][z] = obj.ab.yb[i][z]*sizer;
  }
}
for(i=0;i<obj.ac.xb.length;i++){
  for(z=0;z<obj.ac.xb[i].length;z++){
    obj.ac.xb[i][z] = obj.ac.xb[i][z]*sizer;
    obj.ac.yb[i][z] = obj.ac.yb[i][z]*sizer;
  }
}
for(i=0;i<obj.bd.xb.length;i++){
  for(z=0;z<obj.bd.xb[i].length;z++){
    obj.bd.xb[i][z] = obj.bd.xb[i][z]*sizer;
    obj.bd.yb[i][z] = obj.bd.yb[i][z]*sizer;
  }
}
for(i=0;i<obj.cd.xb.length;i++){
  for(z=0;z<obj.cd.xb[i].length;z++){
    obj.cd.xb[i][z] = obj.cd.xb[i][z]*sizer;
    obj.cd.yb[i][z] = obj.cd.yb[i][z]*sizer;
  }
}
//front
for(i=0;i<obj.ab.xf.length;i++){
  for(z=0;z<obj.ab.xf[i].length;z++){
    obj.ab.xf[i][z] = obj.ab.xf[i][z]*sizer;
    obj.ab.yf[i][z] = obj.ab.yf[i][z]*sizer;
  }
}
for(i=0;i<obj.ac.xf.length;i++){
  for(z=0;z<obj.ac.xf[i].length;z++){
    obj.ac.xf[i][z] = obj.ac.xf[i][z]*sizer;
    obj.ac.yf[i][z] = obj.ac.yf[i][z]*sizer;
  }
}
for(i=0;i<obj.bd.xf.length;i++){
  for(z=0;z<obj.bd.xf[i].length;z++){
    obj.bd.xf[i][z] = obj.bd.xf[i][z]*sizer;
    obj.bd.yf[i][z] = obj.bd.yf[i][z]*sizer;
  }
}
for(i=0;i<obj.cd.xf.length;i++){
  for(z=0;z<obj.cd.xf[i].length;z++){
    obj.cd.xf[i][z] = obj.cd.xf[i][z]*sizer;
    obj.cd.yf[i][z] = obj.cd.yf[i][z]*sizer;
  }
}

console.log(obj);


//*******************NEW*************************

var layer1=document.getElementById('layer1');
var context1=layer1.getContext('2d');
context1.lineWidth = .5;
context1.translate(layer1.width/2,layer1.height/2);

var layer2=document.getElementById('layer2');
var context2=layer2.getContext('2d');
context2.translate(layer2.width/2,layer2.height/2);

var layer3=document.getElementById('layer3');
var context3=layer3.getContext('2d');
context3.translate(layer3.width/2,layer3.height/2);

var layer4=document.getElementById('layer4');
var context4=layer4.getContext('2d');
context4.translate(layer4.width/2,layer4.height/2);


var bigWidth = 2;
var smallWidth = 2;
var bigColor = '#7C8792';
var smallColor = '#E7EAED';
var bigColorStart = 255;

//******AB BACK*********************************************************
for(q=0;q<obj.ab.xb.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.ab.xb[q].length/2)).toFixed(1);
  for(i=0;i<obj.ab.xb[q].length;i++){
    if(obj.ab.xb[q][i+1]){
       context1.beginPath();
       context1.moveTo(obj.ab.xb[q][i], obj.ab.yb[q][i]);
       context1.lineTo(obj.ab.xb[q][i+1], obj.ab.yb[q][i+1]);
      if(k<obj.ab.xb[q].length/2){
        context1.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context1.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context1.stroke();
        context1.closePath();
    }
  }
}

//******CD BACK*********************************************************
for(q=0;q<obj.cd.xb.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.cd.xb[q].length/2)).toFixed(1);
  for(i=0;i<obj.cd.xb[q].length;i++){
    if(obj.cd.xb[q][i+1]){
       context1.beginPath();
       context1.moveTo(obj.cd.xb[q][i], obj.cd.yb[q][i]);
       context1.lineTo(obj.cd.xb[q][i+1], obj.cd.yb[q][i+1]);
      if(k<obj.cd.xb[q].length/2){
        context1.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context1.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context1.stroke();
        context1.closePath();
    }
  }
}

//******BD BACK*********************************************************
for(q=0;q<obj.bd.xb.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.bd.xb[q].length/2)).toFixed(1);
  for(i=0;i<obj.bd.xb[q].length;i++){
    if(obj.bd.xb[q][i+1]){
       context2.beginPath();
       context2.moveTo(obj.bd.xb[q][i], obj.bd.yb[q][i]);
       context2.lineTo(obj.bd.xb[q][i+1], obj.bd.yb[q][i+1]);
      if(k<obj.bd.xb[q].length/2){
        context2.strokeStyle = 'rgb(' + colorUse*m + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context2.strokeStyle = 'rgb(' + colorUse*m + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context2.stroke();
        context2.closePath();
    }
  }
}

//******AB FRONT*********************************************************
for(q=0;q<obj.ab.xf.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.ab.xf[q].length/2)).toFixed(1);
  for(i=0;i<obj.ab.xf[q].length;i++){
    if(obj.ab.xf[q][i+1]){
       context3.beginPath();
       context3.moveTo(obj.ab.xf[q][i], obj.ab.yf[q][i]);
       context3.lineTo(obj.ab.xf[q][i+1], obj.ab.yf[q][i+1]);
      if(k<obj.ab.xb[q].length/2){
        context3.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context3.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context3.stroke();
        context3.closePath();
    }
  }
}

//******CD FRONT*********************************************************
for(q=0;q<obj.cd.xf.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.cd.xf[q].length/2)).toFixed(1);
  for(i=0;i<obj.cd.xf[q].length;i++){
    if(obj.cd.xf[q][i+1]){
       context3.beginPath();
       context3.moveTo(obj.cd.xf[q][i], obj.cd.yf[q][i]);
       context3.lineTo(obj.cd.xf[q][i+1], obj.cd.yf[q][i+1]);
      if(k<obj.cd.xb[q].length/2){
        context3.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context3.strokeStyle = 'rgb(' + 50 + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context3.stroke();
        context3.closePath();
    }
  }
}

//******AC FRONT*********************************************************
for(q=0;q<obj.ac.xf.length;q++){
  var m = 0
  var k = 0;
  var colorUse = (255/(obj.ac.xf[q].length/2)).toFixed(1);
  for(i=0;i<obj.ac.xf[q].length;i++){
    if(obj.ac.xf[q][i+1]){
       context4.beginPath();
       context4.moveTo(obj.ac.xf[q][i], obj.ac.yf[q][i]);
       context4.lineTo(obj.ac.xf[q][i+1], obj.ac.yf[q][i+1]);
      if(k<obj.ac.xb[q].length/2){
        context4.strokeStyle = 'rgb(' + colorUse*m + ',' + colorUse*m + ',' + colorUse*m + ')';
        m++
      }else{
        context4.strokeStyle = 'rgb(' + colorUse*m + ',' + colorUse*m + ',' + colorUse*m + ')';
        m--
      }
        k++
        context4.stroke();
        context4.closePath();
    }
  }
}






