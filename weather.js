let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.name);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.weather[0].description);

let x = document.querySelector('div#result'); 

const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  
  let row = document.createElement("tr");
   let cell = document.createElement("td");
      let cellText = document.createTextNode('都市');
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);
  
      
      cell = document.createElement("td");
       cellText = document.createTextNode('最低気温');
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      cell = document.createElement("td");
       cellText = document.createTextNode('最高気温');
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      cell = document.createElement("td");
       cellText = document.createTextNode('天気');
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

       row = document.createElement("tr");
       cell = document.createElement("td");
       cellText = document.createTextNode(data.name);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      cell = document.createElement("td");
       cellText = document.createTextNode(data.main.temp_min);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      cell = document.createElement("td");
       cellText = document.createTextNode(data.main.temp_max);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      cell = document.createElement("td");
       cellText = document.createTextNode(data.weather[0].description);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      
   // <tbody> を <table> の中に追加
   tbl.appendChild(tblBody);
   // <table> を <body> の中に追加
   document.body.appendChild(tbl);
   // tbl の border 属性を 2 に設定
   tbl.setAttribute("border", "2");


   let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);


// 2. イベントハンドラの定義

function printAnswer() {
    // name 属性が year の input 要素をすべて検索
    let rs = document.querySelectorAll('input[name="toshi"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            console.log(r.value);
        }
    }
  }


   


  





