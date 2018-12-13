//music player
var aud = document.getElementById("imperia"); 

//change music
function changeImperium(){
        //var rand = Math.floor((Math.random() * 7) + 1);

        var rand = parseInt(document.getElementById("number").rand, 10);
        rand = isNaN(rand) ? 2 : rand;    
        //rand++;
        if(rand ==1){
                document.getElementById("parade").src = "music/Rome_Forum.mp3";
                rand++;
        } 
        else if(rand ==2){
                document.getElementById("parade").src = "music/Rome_5.mp3";
                rand++;
        } 
        else if(rand ==3){
                document.getElementById("parade").src = "music/Rome_4.mp3";
                rand++;
        } 
        else if (rand ==4){
                document.getElementById("parade").src = "music/rome_imperium.mp3";
                rand++;
        }
        else if(rand ==5){
                document.getElementById("parade").src = "music/ancient_egyptian_cleopatra.mp3";
                rand++;
        }
        else if(rand ==6){
                document.getElementById("parade").src = "music/parade_of_charioteers.mp3";
                rand++;
        }
        else if(rand ==7){
                document.getElementById("parade").src = "music/celtic_king_of_the_fairies.mp3";
                rand++;
        }
        else if(rand ==8){
                document.getElementById("parade").src = "music/Combat_Long.mp3";
                rand++;
        } 
        else if(rand ==9){
                document.getElementById("parade").src = "music/Marcus_Antonius.mp3";
                rand++;
        } 
        else if(rand ==10){
                document.getElementById("parade").src = "music/Rome_composer.mp3";
                rand++;
        } 
        else if(rand ==11){
                document.getElementById("parade").src = "music/Rome_Death_Pompey.mp3";
                rand =1;
        } 
        document.getElementById('number').rand = rand;
        document.getElementById("imperia").load();
        aud.play(); 
        aud.volume = 0.1;  
}

//pause music
function pauseImperium(){        
        aud.pause(); 
}

//play music
function playImperium(){        
        aud.play(); 
        aud.volume = 0.1;        
}

//load music
function loadImperium(){        
        aud.play(); 
        aud.volume = 0.1;        
}