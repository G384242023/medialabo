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



function print(data){

  let tbl  = document.createElement("table");
  let tblBody = document.createElement("tbody");

  
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

   let x = document.querySelector('div#result');

   x.insertAdjacentElement('beforeend', tbl);
}
   let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);


  

let value = 0;
let url;
function printAnswer() {

    let rs = document.querySelectorAll('input[name="toshi"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            value = r.value;
        }
    }
  }

  let c = document.querySelector('#answer');
c.addEventListener('click', sendRequest);



  
  // 通信を開始する処理
  function sendRequest() {
    let w = document.querySelector('table');
    if(w != undefined || w != null){
      w.remove();
    }
      // URL を設定
      if(value==360630){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';
      }
      if(value==524901){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json';
      }
      if(value==993800){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json';
      }
      if(value==1816670){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';
      }
      if(value==1850147){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';
      }
      if(value==1880252){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json';
      }
      if(value==2147714){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';
      }
      if(value==2643743){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
      }
      if(value==2968815){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json';
      }
      if(value==3451189){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json';
      }
      if(value==5128581){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';
      }
      if(value==5368361){
        url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json';
      }
       
  
      // 通信開始
      axios.get(url)
          .then(showResult)   // 通信成功
          .catch(showError)   // 通信失敗
          .then(finish);      // 通信の最後の処理
                 
                 
}
  // 通信が成功した時の処理
  function showResult(resp) {
      // サーバから送られてきたデータを出力
      let data = resp.data;
  
      // data が文字列型なら，オブジェクトに変換する
      if (typeof data === 'string') {
          data = JSON.parse(data);
      }

      print(data);
  }
  
  // 通信エラーが発生した時の処理
  function showError(err) {
      console.log(err);
  }
  
  // 通信の最後にいつも実行する処理
  function finish() {
      console.log('Ajax 通信が終わりました');
  }
   


  





