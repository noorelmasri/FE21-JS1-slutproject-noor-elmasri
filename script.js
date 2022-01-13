const input = document.querySelector("#input");
const idagP = document.querySelector("#idagP");
const dag1P = document.querySelector("#dag1P");
const dag2P = document.querySelector("#dag2P");
const dag3P = document.querySelector("#dag3P");
const dag4P = document.querySelector("#dag4P");
const dag5P = document.querySelector("#dag5P");


$("#btn").click(function () {
  const KEY = '0dfd77cf23ff4e86a2b0a2b599e3574b';
  let city = input.value;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${KEY}&lang=sv`;
  fetch(url).then(
    function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      else {
        throw 'Something went wrong. :(';
      }
    }
  ).then(
    function (data) {
      // console.log(data);
      // Idag
      const temp0 = data.data[0].temp;
      const fukt0 = data.data[0].rh;
      const vind0 = data.data[0].wind_spd;
      const bskrv0 = data.data[0].weather.description;
      const icon0 = data.data[0].weather.icon;
      console.log(icon0)
      idagP.innerHTML = `Temprature: ${temp0} C............${bskrv0}............Luftfuktighet: ${fukt0}...........Vindhastighet: ${vind0}`;
      $("#idagImg").attr("src", `https://www.weatherbit.io/static/img/icons/${icon0}.png`);
      //Fem dagar framåt
      const bskrv1 = data.data[1].weather.description;
      const temp1 = data.data[1].temp;
      const icon1 = data.data[1].weather.icon;
      const datum1 = data.data[1].datetime;
      dag1P.innerHTML = `${datum1}......${temp1} C......${bskrv1}`
      $("#dag1Img").attr("src", `https://www.weatherbit.io/static/img/icons/${icon1}.png`);

      const bskrv2 = data.data[2].weather.description;
      const temp2 = data.data[2].temp;
      const icon2 = data.data[2].weather.icon;
      const datum2 = data.data[2].datetime;
      dag2P.innerHTML = `${datum2}......${temp2} C......${bskrv2}`
      $("#dag2Img").attr("src", `https://www.weatherbit.io/static/img/icons/${icon2}.png`);

      const bskrv3 = data.data[3].weather.description;
      const temp3 = data.data[3].temp;
      const icon3 = data.data[3].weather.icon;
      const datum3 = data.data[3].datetime;
      dag3P.innerHTML = `${datum3}......${temp3} C......${bskrv3}`
      $("#dag3Img").attr("src", `https://www.weatherbit.io/static/img/icons/${icon3}.png`);

      const bskrv4 = data.data[4].weather.description;
      const temp4 = data.data[4].temp;
      const icon4 = data.data[4].weather.icon;
      const datum4 = data.data[4].datetime;
      dag4P.innerHTML = `${datum4}......${temp4} C......${bskrv4}`
      $("#dag4Img").attr("src", `https://www.weatherbit.io/static/img/icons/${icon4}.png`);

      const bskrv5 = data.data[5].weather.description;
      const temp5 = data.data[5].temp;
      const icon5 = data.data[5].weather.icon;
      const datum5 = data.data[5].datetime;
      dag5P.innerHTML = `${datum5}......${temp5} C......${bskrv5}`
      $("#dag5Img").attr("src", `https://www.weatherbit.io/static/img/icons/${icon5}.png`);
    }
  ).catch(
    function (error) {
      idagP.innerHTML = "Staden kunde inte hittas försök med en sånt formlärt -Malmö -Malmö SE";
      dag1P.innerHTML = " "
      dag2P.innerHTML = " "
      dag3P.innerHTML = " "
      dag4P.innerHTML = " "
      dag5P.innerHTML = " "
      idagImg.src = " "
      dag1Img.src = " "
      dag2Img.src = " "
      dag3Img.src = " "
      dag4Img.src = " "
      dag5Img.src = " "
    }
  );
})