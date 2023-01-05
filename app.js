function color()
    {
        let arr = ["red","blue","pink","yellow","orange","black","brown"];
       document.getElementById("canvas").style.backgroundColor = arr[Math.floor(Math.random()*arr.length)]; //this will fetch the random joke from 
    //    0 to arr lenegth
  }