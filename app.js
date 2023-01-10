// Using arrayn of color
// function color()
//     {
//         let arr = ["red","blue","pink","yellow","orange","black","brown"];
//        document.getElementById("canvas").style.backgroundColor = arr[Math.floor(Math.random()*arr.length)]; //this will fetch the random joke from 
//     //    0 to arr lenegth
//   }

// Randomly generating hex code
// function to generate randome hex code
function RandomColor()
{
  let value = "0123456789ABCDEFG"; // values to generted
  let constVal = "#";

  for(let i=0; i<6; i++) // since hex code having only 6 charater
  {
    constVal = constVal + value[Math.floor(Math.random() * 16)]; 
    // breking down the above logic:
    // Math.random() => generated random number between 0 to 1. Ex: 0.19467163606211413
    // Math.random() * 16 => we are having 16 charated "0123456789ABCDEFG", ex: 0.19467163606211413*16 = 3.1147
    // Math.floor(Math.random() * 16 => Convertes the randomly gerated number to whole number i.e. 3 in this case
    // So now it value[3], hence it will return index 3 charter i.e.3
    // now the loop iterated 6 times and generated hex code
  }

  return constVal;
}

//targeting hex code

function bgColor()
{
  document.getElementById("canvas").style.backgroundColor = RandomColor();
}

// Event listner
let btn = document.getElementById("button");
btn.addEventListener("click", bgColor);
