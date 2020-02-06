function mostrar()
{
//tomo la edad  
var num1;

num1 = parseInt(document.getElementById("edad").value);

if (num1 <=12 && num1 >=18 ) 
{ 

    alert("Usted no es adolecente");
                
}    
else 
{
    alert("Usted es adolecente")
}


}//FIN DE LA FUNCIÓN