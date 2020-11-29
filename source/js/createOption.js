'use strict';
(function () {

var data = [
  {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/22px-Flag_of_Australia.svg.png",
    "name_ru" : "Австралия",
    "iso_code2" : "AU",
    "iso_code3" : "AUS"
  }, {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/22px-Flag_of_Austria.svg.png",
    "name_ru" : "Австрия",
    "iso_code2" : "AT",
    "iso_code3" : "AUT"
  }, {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/22px-Flag_of_Azerbaijan.svg.png",
    "name_ru" : "Азербайджан",
    "iso_code2" : "AZ",
    "iso_code3" : "AZE"
  }, {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/22px-Flag_of_%C3%85land.svg.png",
    "name_ru" : "Аландские острова",
    "iso_code2" : "AX",
    "iso_code3" : "ALA"
  }, {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/22px-Flag_of_Albania.svg.png",
    "name_ru" : "Албания",
    "iso_code2" : "AL",
    "iso_code3" : "ALB"
  }, {
    "flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/22px-Flag_of_Algeria.svg.png",
    "name_ru" : "Алжир",
    "iso_code2" : "DZ",
    "iso_code3" : "DZA"
  }
]


function countryFunction(data) {
  for (var i = 0; i <= data.length; i++) {
    var countryName = document.createElement('option');
    countryName.setAttribute("value", " ")
    countryName.value = data[i].name_ru;
    countryName.innerHTML = data[i].name_ru;
    var country = document.querySelector('#countries');
    country.append(countryName);

    countryName = document.createElement('option').value = country.value;
    // countryName.value = this.name;

    // country.onchange = function(){

    // }
  }
};







})();
