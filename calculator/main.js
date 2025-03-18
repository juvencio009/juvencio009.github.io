confirm("Nesta página só tem uma calculadora simples.pretendes continuar?")
 
 
 function insert(num)
 {
 var numero = document.getElementById('answer').innerHTML;

 document.getElementById('answer').innerHTML=numero + num;
 }

 function clean()
  {
    document.getElementById('answer').innerHTML =" ";
    
   }

   function back()
      {
      var answer =
      document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML.substring(0, document.getElementById('answer').innerHTML.length -1);
      }


      function calc()
      {
        var answer =
      document.getElementById('answer').innerHTML;
      if('answer'){
        document.getElementById('answer').innerHTML=eval(answer);
      }

      else
      {
       document.getElementById('answer').innerHTML='Error'
      }
      }

      function raiz()
       {
        document.getElementById('answer').innerHTML='num**2';
       }

   