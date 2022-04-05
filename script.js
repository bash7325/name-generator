//pick names randomly from an array

var students = [
"Bird Jon",
"Canez Alex",
"Carver Kansas",
"Clark Spencer",
"Cowley Jayden",
"Eddie Cody",
"Edwards Jace",
"Endrek Emiliano",
"Garcia V",
"Goodsell Morgan",
"Goodwin Jennifer",
"Grout William",
"Haag Dre",
"Hays Gerus",
"Heward Keaton",
"Horne Kyra",
"Johnson David",
"Kagei Hiro",
"Lathrop Alex",
"Lawver Richard",
"Lee Shek chun",
"Maddock Kody",
"Mello Miranda",
"Ngafua Janice",
"Peck Sterling",
"Pineda Luis",
"Richardson Stevon",
"Riveros Luis",
"Sandgren Braden",
"Shearer Tess",
"Smith Janea",
"Smith Paul",
"Sosa Kaeleb",
"Standfield Alex",
"Vatuvei Bryson",
"Watts Merrick",
"Waugaman Bjorn",
"Whiteman Matthew",
"Wogerman Dawn",
"Wolaver Laura",
"Zabriskie Mark"
];

//pick a random name from students array
$("#button").click(function(){
  var random = Math.floor(Math.random() * students.length);
  $("#name").text(students[random]);
});

//animate the button
$("#button").hover(function(){
    $(this).animate({
        "font-size": "30px",
        "margin-top": "10px"
    }, "fast");
    }, function(){
    $(this).animate({
        "font-size": "20px",
        "margin-top": "0px"
    }, "fast");
});
//change #name text to random color 
$("#button").click(function(){
    var random = Math.floor(Math.random() * 16777215).toString(16);
    $("#name").css("color", "#" + random);
    });





