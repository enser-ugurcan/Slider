var models=[{
    name:'cake',
    image:'cake.png',
},
{
    name:'circus',
    image:'circus.png',
},
{
    name:'game',
    image:'game.png',
},
{
    name:'cabin',
    image:'cabin.png'
},
{
    name:'submarine',
    image:'submarine.png'
},
{
    name:'safe',
    image:'safe.png'
}
];
var index=0;
var slaytcount=models.length;
var inteval;
showSlide(index);
var settings={
    duration:'2000',
    random:false
};
init(settings);
document.querySelector('.fa-arrow-left').addEventListener('click',
function(){
    
    index--;
    showSlide(index);
});;
document.querySelector('.fa-arrow-right').addEventListener('click',
function(){
    
    index++;
    showSlide(index);
});;
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})
function init(settings){
  var prev;
    interval=setInterval(function(){
        if(settings.random){
            do{
                index=Math.floor(Math.random()*slaytcount);
            }while(index==prev)
            prev=index;
        }else{
            if(slaytcount==index+1){
                index=-1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i){

    index=i;
    if(i<0){
        index=slaytcount-1;
    }
    if(i>=slaytcount){
        index=0;
    }

    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',
    models[index].image);
}



