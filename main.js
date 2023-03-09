const favoContainer = document.getElementById("favo-container");
const favoTitle = document.getElementById("favo-title");
const favoText = document.getElementById("favo-text");
const favoPhoto = document.getElementById("favo-photo");
const favoButton = document.getElementById("favo-button");
const favoBackButton = document.getElementById("favo-back-button");
let count = 0;
const listProButton = document.getElementById("list-pro-button");
const listFavoButton = document.getElementById("list-favo-button");

listProButton.onclick = function () {
  window.scrollTo({
    top: 700, //上からの位置
    behavior: "smooth", //smoothでスクロールしながら移動
  });
};

listFavoButton.onclick = function () {
  window.scrollTo({
    top: 1400, //上からの位置
    left: 0, //左からの位置
    behavior: "smooth", //smoothでスクロールしながら移動
  });
};

favoButton.onclick = function () {
  if (count < 3) {
    favoTitle;
    count++;
    changeContent(count);
  }
};

const changeContent = function (num) {
  if (num == 0) {
    changeContent0();
  }
  if (num == 1) {
    changeContent1();
  }
  if (num == 2) {
    changeContent2();
  }
  if (num == 3) {
    count = 0;
    changeContent0();
  }
};

const changeContent0 = function () {
  favoTitle.innerHTML = "<p>J-Rock</p>";
  favoText.innerHTML =
    "<div>KANA-BOON, My Hair is Bad, Saucy Dog, etc...</div>";
  favoPhoto.style.backgroundImage = 'url("./images/IMG_7410.jpg")';
};

const changeContent1 = function () {
  favoTitle.innerHTML = "<p>Soccer</p>";
  favoText.innerHTML = "<div>ElementarySchool~HighSchool</div>";
  favoPhoto.style.backgroundImage = 'url("./images/IMG_4677.jpg")';
};

const changeContent2 = function () {
  favoTitle.innerHTML = "<p>Dog</p>";
  favoText.innerHTML = "<div>Pet's Name : Lea</div>";
  favoPhoto.style.backgroundImage = 'url("./images/IMG_7302.jpg")';
};
