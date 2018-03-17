var speed = 2000;
var pts = 0;
var seconde = 500;
var sizeMin = 12;
var sizeMax = 72;
var level = 0;
var newLevel = 0;

$(document).ready(function(){    
    $("#start").click(function(){
        $(".container:nth-child(2)").fadeOut(300);
        $(".navbar").fadeOut(300);
        $("#score").fadeIn(300);
        $("#time").fadeIn(300);
        $("#game").fadeIn(300);
        
        function timer() {
            $("#time>h1").html(seconde);
            seconde--;
            if(seconde == 0) {
                alert('fini');
                window.location = 'index.php';
            }
            setTimeout(function(){timer()},1000);
        }
        
        timer();
        genLettre();
    });
    
});

$(document).keydown(function(event){
    var keycode = String.fromCharCode(event.which);
    $('.lettre'+keycode).animate({"top":"100%"},'fast');
    $('.lettre'+keycode).fadeOut('500').hide('500', function() {
        pts += 5;
        $("#score h1").html("Score: "+pts);
        $(this).remove();
    });
});

function rand(a,b){var c=arguments.length;if(0===c)a=0,b=2147483647;else if(1===c)throw Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(b-a+1))+a};

function lvlMSG() {
    $("#lvlMSG").html("Level: "+level);
    $("#lvlMSG").parent().parent().parent().fadeIn(300).delay(500).fadeOut(300);
}

function genLettre() {
    if(pts > 100 && pts < 150){ speed=1800; sizeMin=12; sizeMax=62; newLevel=1;}//Level 1
    else if(pts > 150 && pts < 200){ speed=1600; sizeMin=10; sizeMax=62; newLevel=2;}//Level 2
    else if(pts > 200 && pts < 300){ speed=1400; sizeMin=10; sizeMax=52; newLevel=3;}//Level 3
    else if(pts > 300 && pts < 350){ speed=1000; sizeMin=10; sizeMax=45; newLevel=4;}//Level 4
    else if(pts > 350 && pts < 400){ speed=900; sizeMin=12; sizeMax=40; newLevel=5;}//Level 5
    else if(pts > 400 && pts < 450){ speed=800; sizeMin=12; sizeMax=35; newLevel=6;}//Level 6
    else if(pts > 450 && pts < 500){ speed=700; sizeMin=8; sizeMax=52; newLevel=7;}//Level 7
    else if(pts > 500 && pts < 700){ speed=600; sizeMin=12; sizeMax=22; newLevel=8;}//Level 8
    else if(pts > 700 && pts < 1000){ speed=400; sizeMin=4; sizeMax=52; newLevel=9;}//Level 9
    else if(pts > 1000){ speed=200; sizeMin=3; sizeMax=33; newLevel=10;}//Level 10+
    if(level != newLevel) {level = newLevel; lvlMSG();}
    
    $("#score>h4").html("Level: "+level);
    $("#score>h5").html("Vitesse: 1 lettre par "+((speed/2)/1000)+" à "+(speed/1000)+" secondes");
   
    var lettre = 'ABCDEFGHIJKLMONOP';
    var num = Math.floor(Math.random() * lettre.length);
    $("#game").append("<span id='lettre' class='lettre"+lettre.substring(num, num+1)+"' style='top:"+rand(0,94)+"%;left:"+rand(0,94)+"%;background:rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+");font-size:"+rand(sizeMin,sizeMax)+"px;'>"+lettre.substring(num, num+1)+"</span>");
    setTimeout(function() {genLettre();},rand((speed/2),speed));
}