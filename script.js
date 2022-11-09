var player=document.getElementById('player');
var comp=document.getElementById('house');
var t;
var pa;
 var p;
 var arr=['rock',"paper","scissors"];
var ran=Math.floor( Math.random()*arr.length);
var house=arr[ran];
var img;


function rules(){
   document.getElementById('rulesback').style.display="block";
   
}
function closeModal(){
    document.getElementById('rulesback').style.display="none";
}
function playAgain(){
    document.getElementById('PA').style.display='none'
    house='';
    p='';
    ran=Math.floor( Math.random()*arr.length);
    house=arr[ran];
    document.getElementById('game').style.display="none"
    document.getElementById('tri').style.display='flex'
    document.getElementById('blank').style.display="block";
    var r=event.target.parentElement.previousElementSibling.children[1];
    r.parentElement.removeChild(r);
    var n=event.target.parentElement.nextElementSibling.children[2];
    n.parentElement.removeChild(n)
   
}
function choose(){
    p=event.target.id;
   
    if(event.target.id=="rock")
    {
        document.getElementById('tri').style.display='none'
        document.getElementById('game').style.display="flex" 
        //create element
        img= document.createElement('img');
       img.setAttribute('src','/images/icon-rock.svg');
       img.classList.add('rock');
       player.appendChild(img);
        t=setTimeout(houseplay,2000);
       
        
    }
     
    if(event.target.id=="scissors")
    {
        document.getElementById('tri').style.display='none';
        document.getElementById('game').style.display="flex" ;
          //create element
       var img= document.createElement('img');
       img.setAttribute('src','/images/icon-scissors.svg');
       img.classList.add('scissors');
       player.appendChild(img);
        t=setTimeout(houseplay,2000);
       
    }
     
    if(event.target.id=="paper")
    {
        document.getElementById('tri').style.display='none';
        document.getElementById('game').style.display="flex" ;
           //create element
       var img= document.createElement('img');
       img.setAttribute('src','/images/icon-paper.svg');
       img.classList.add('paper');
       player.appendChild(img);
        t=setTimeout(houseplay,2000);
       
    }
}
    

function houseplay(){
    document.getElementById('blank').style.display="none";
    
    
    if(house=="rock")
    {
        document.getElementById('tri').style.display='none'
        document.getElementById('game').style.display="flex" 
        //create element
       var img= document.createElement('img');
       img.setAttribute('src','/images/icon-rock.svg');
       img.classList.add('rock');
       comp.appendChild(img);
       pa=setTimeout(score,1000);

       
        
    }
     
    if(house=="scissors")
    {
        document.getElementById('tri').style.display='none';
        document.getElementById('game').style.display="flex" ;
          //create element
       var img= document.createElement('img');
       img.setAttribute('src','/images/icon-scissors.svg');
       img.classList.add('scissors');
       comp.appendChild(img);
       pa=setTimeout(score,1000);
       
    }
     
    if(house=="paper")
    {
        document.getElementById('tri').style.display='none';
        document.getElementById('game').style.display="flex" ;
           //create element
       var img= document.createElement('img');
       img.setAttribute('src','/images/icon-paper.svg');
       img.classList.add('paper');
       comp.appendChild(img);
       pa=setTimeout(score,1000);
       
    }
    
}


function score(){
    var w;
    var sc= document.getElementById('scorenum');

    
    
    if(p==house){
        w="draw"
    }
    else{
        if(p=="rock"){
            if(house=="paper"){
            w="you lost"}
        
        else{
            w="you win";
            sc.textContent++

        }}
    
        else if(p=="paper"){
            if(house=="scissors"){
                w="you lost"
    
            }
        else{
            w="you win";
            sc.textContent++
        }}
    
        else if(p=="scissors"){
            if( house=="rock"){
                w="you lost";
            }
           
        
        else{
            w="you win";
            sc.textContent++
        }}
    }
    document.querySelector('#PA p').textContent=w;
    document.getElementById('PA').style.display='block'

}
