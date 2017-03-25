var $mousedown=false
$('td').mousedown(function(e){
   //alert(e );
   console.log(e);
   e.target.innerHTML='/'
   $mousedown=true
});
$('td').mousemove(function(e){
   //alert(e );
   console.log(e);
   if ($mousedown==true){
     e.target.innerHTML='/'
   }

});

$('body').mouseup(function(e){
  //alert(e );
  $mousedown=false
  console.log(e);
});
