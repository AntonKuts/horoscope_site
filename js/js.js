$(document).ready(function() {
  var x = "";
  var h = [];
  var s = [];
  var n = [];
  var den = 0;
  var mesyac = 0;
  var god = 0;

  var znak = "";
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 35 // Creates a dropdown of 15 years to control year
  });
  $.getJSON('./horos.json', function FunH(data) {
    h = data;
  });

  $.getJSON('./stones.json', function FunS(data) {
    s = data;
  });
  $.getJSON('./number.json', function FunH(data) {
    n = data;
  });


  $('.datepicker').on('change', fun1);


  function fun1() {
    x = $('.datepicker').val();
    fun2(x);
  }

  function fun2(x) {

    var arr = x.split(' ');
    // console.log("день ---- " + arr[0], "месяц ---- " + arr[1], "год ---- " + arr[2]);

    den = arr[0];
    god = arr[2];
    switch (arr[1]) {
      case "January,":
        mesyac = 1;
        break;
      case "February,":
        mesyac = 2;
        break;
      case "March,":
        mesyac = 3;
        break;
      case "April,":
        mesyac = 4;
        break;
      case "May,":
        mesyac = 5;
        break;
      case "June,":
        mesyac = 6;
        break;
      case "July,":
        mesyac = 7;
        break;
      case "August,":
        mesyac = 8;
        break;
      case "September,":
        mesyac = 9;
        break;
      case "October,":
        mesyac = 10;
        break;
      case "November,":
        mesyac = 11;
        break;
      case "December,":
        mesyac = 12;
        break;
    }
    // console.log("день ---- " + den, "месяц ---- " + mesyac);
    var znak;
    switch (mesyac) {
      case 1:
        if (den <= 19)
          znak = 'Козерог';
        else
          znak = 'Водолей';
        break;
      case 2:
        if (den <= 18)
          znak = 'Водолей';
        else
          znak = 'Рыбы';
        break;
      case 3:
        if (den <= 20)
          znak = 'Рыбы';
        else
          znak = 'Овен';
        break;
      case 4:
        if (den <= 19)
          znak = 'Овен';
        else
          znak = 'Телец';
        break;
      case 5:
        if (den <= 20)
          znak = 'Телец';
        else
          znak = 'Близнецы';
        break;
      case 6:
        if (den <= 21)
          znak = 'Близнецы';
        else
          znak = 'Рак';
        break;
      case 7:
        if (den <= 22)
          znak = 'Рак';
        else
          znak = 'Лев';
        break;
      case 8:
        if (den <= 22)
          znak = 'Лев';
        else
          znak = 'Дева';
        break;
      case 9:
        if (den <= 22)
          znak = 'Дева';
        else
          znak = 'Весы';
        break;
      case 10:
        if (den <= 22)
          znak = 'Весы';
        else
          znak = 'Скорпион';
        break;
      case 11:
        if (den <= 22)
          znak = 'Скорпион';
        else
          znak = 'Стрелец';
        break;
      case 12:
        if (den <= 21)
          znak = 'Стрелец';
        else
          znak = 'Козерог';
        break;
    }
    // console.log(znak);
    fun3(znak, h);
  }

  function fun3(znak, h) {


    var out = ""
    for (var key in h) {
      if (key == znak) {
        out += '<div class="cart row">';
        out += '<div class="col s12 m4 l4">';
        out += '<p>Ваш знак задиака:</p>';
        out += '<h4 id="test1">' + key + '</h4>';
        out += '<p>' + h[key].data + '</p>';
        out += '</div>';
        out += '<div class="col s12 m4 l4">';
        out += '<img class = "img" src="' + h[key].logo + '" alt="знак зодиака">';
        out += '<p></p>';
        out += '</div>';
        out += '<div class="col s12 m12 l12">';
        out += '<p>Описание знака:</p>';
        out += '<p>' + h[key].about + '</p>';
        out += '</div>';
        out += '</div>';
      }
    }
    $('.out2').html(out);
    fun5(znak, s);
  }

  function fun5(znak, s) {
    var out5 = "";
    var i = 1;
    var i2 = 2;
    for (var key in s) {
      if (s[key].horos == znak || s[key].horos2 == znak) {
        out5 += '<div class="cart2 row">';
        out5 += '<h4 id="test' + i2 + '">Ваш талисман №' + i + ' ' + key + '</h4>'
        out5 += '<div class="col s12 m4 l4">';
        out5 += '<img class = "img" src="' + s[key].img + '" alt="фото камня">';
        out5 += '</div>';
        out5 += '<div class="col s12 m8 l8">';
        out5 += '<p>Описание камня:</p>'
        out5 += '<p>' + s[key].about + '</p>';
        out5 += '</div>';
        out5 += '<div class="col s12 m12 l12">';
        out5 += '<p>Покупайте камни у нас!</p>';
        out5 += '<hr>';
        out5 += '</div>';
        out5 += '</div>';
        i = i + 1;
        i2 = i2 + 1;
      }
    }
    $('.out5').html(out5);
    fun6(den, mesyac, god, n);
  }
  var s1 = 0;

  function fun6(den, mesyac, god, n) {
    // console.log(den, mesyac, god);
    den = '' + den;
    mesyac = '' + mesyac;
    god = '' + god;
    var Sum = 0;
    for (var i = 0; i < god.length; i++) {
      Sum = Sum + +god[i];
    }
    for (var i = 0; i < den.length; i++) {
      Sum = Sum + +den[i];
    }
    for (var i = 0; i < mesyac.length; i++) {
      Sum = Sum + +mesyac[i];
    }
    // console.log(Sum);
    var out6 = "";
    for (var key in n) {
      if (key == Sum) {
        // console.log(key);
        // console.log(n[key])
        out6 += '<div class="cart3 row">';
        out6 += '<div class="col s12 m4 l4">';
        out6 += '<img class = "img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vI1ccfNIGYgGJmB8Mo3Gyb1hp30Fhh0L9dv3uRtVP4VWIjwkVA" alt="Кармическое число">';
        out6 += '</div>';
        out6 += '<div class="col s12 m8 l8">';
        out6 += '<h4 id="test4">Кармическое число: ' + key + ' </h4>'
        out6 += '<p>' + n[key] + '</p>';
        out6 += '</div>';
        out6 += '<div class="col s12 m12 l12">';
        out6 += '<p>Изготовляем амулеты с Вашим кармическим числом</p>';
        out6 += '<hr>';
        out6 += '</div>';
        out6 += '</div>';
      }
    }
    $('.out6').html(out6);

  }
});
