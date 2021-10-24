//クラゲを動かす
const faceContainer = document.getElementById("face-container");
const face = document.getElementById("face");

//動かすための関数
const randomMove = function () {
  let topMove = 50;
  let leftMove = 50;

  //動かす
  const move = function () {
    //radianは0~360°まで
    let radian = Math.floor(Math.random() * 361);

    let x = Math.cos(radian);
    let y = Math.sin(radian);

    topMove += y;
    leftMove += x;

    const faceContainerHeight = faceContainer.clientHeight;
    const faceHeight = face.clientHeight;

    //faceの半径がfaceContainerの高さに占める割合を求める。
    const feceHeightRateHalf = (faceHeight / faceContainerHeight) * 50;

    //はみださないようにする
    if (topMove < feceHeightRateHalf) {
      topMove += feceHeightRateHalf - topMove;

      radian = Math.floor(Math.random() * 181) + 180;
      x = Math.cos(radian);
      y = Math.sin(radian);

      topMove += y;
      leftMove += x;

    } else if (leftMove > 90) {
      leftMove -= leftMove - 90;

      radian = Math.floor(Math.random() * 181) + 90;
      x = Math.cos(radian);
      y = Math.sin(radian);

      topMove += y;
      leftMove += x;

    } else if (topMove > 100 - feceHeightRateHalf) {
      topMove -= topMove - (100 - feceHeightRateHalf);

      radian = Math.floor(Math.random() * 181);
      x = Math.cos(radian);
      y = Math.sin(radian);

      topMove += y;
      leftMove += x;

    } else if (leftMove < 10) {
      leftMove += 10 - leftMove;

      radian = Math.floor(Math.random() * 181) + 270;
      x = Math.cos(radian);
      y = Math.sin(radian);

      topMove += y;
      leftMove += x;

    }

    //動く
    face.style.top = `${topMove}%`;
    face.style.left = `${leftMove}%`;
  };

  //永遠に繰り返す
  setInterval(move, 100);
};

randomMove();


//クラゲ→me me→クラゲ
let identification = "jerryfish";

face.onclick = function () {
  if (identification === "jerryfish") {
    face.src = "images/face.jpg";
    identification = "me"
  }else{
    face.src = "images/jerryfish_facial.svg"
    identification = "jerryfish"
  }
};


//hobbyの写真を変更
const hobbyImage = document.getElementById("hobby-image")
const drumButton = document.getElementById("drum")
const soccerButton = document.getElementById("soccer")

drumButton.onclick = function() {
  hobbyImage.src = "images/drum.jpg"
}

soccerButton.onclick = function() {
  hobbyImage.src = "images/soccer.jpg"
  console.log(window.scrollY)
}


//墨
const hobby = document.getElementById("hobby")
let judge = 0

if(window.scrollY >= 850 && judge == 0){    
  const black = document.createElement("div")
  black.className = "black"
  hobby.append(black)
  judge = 1
}