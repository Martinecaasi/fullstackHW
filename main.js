import Counter from './counter.js';
import Duck from './duck.js';

const myCounter = new Counter();

document.getElementById('startButton').addEventListener('click', function () {
    const inputNum = document.getElementById('inputNum').value;
    myCounter.Initialize(parseInt(inputNum));
    myCounter.Increment();
    myCounter.DisplayC();
});

document.getElementById('incrementButton').addEventListener('click', function () {
    myCounter.Increment();
    myCounter.DisplayC();
    document.getElementById('inputNum').value = myCounter.num;
});

document.getElementById('goButton').addEventListener('click', function () {
    myCounter.Go();
    document.getElementById('dynamicOutput').innerText = myCounter.GetDynamicOutput();
});



function createDuck() {
          const name = document.getElementById("name").value;
          const color = document.getElementById("color").value;
          const age = parseInt(document.getElementById("age").value);
          const weight = parseInt(document.getElementById("weight").value);
          const picture = document.getElementById("picture").value;
        
          let myDuck = new Duck(name, color, age, weight, picture);
        
          document.getElementById("showBtn").disabled = false;
          document.getElementById("quackBtn").disabled = false;
}

function showDuck(){
          const duckInfoDiv=document.getElementById("duckInfo");
          duckInfoDiv.innerHTML="";

          Duck.Show();

          document.getElementById("showBtn").disabled=true;
          document.getElementById("quackBtn").disabled=true;
}

function quackDuck(){

          Duck.Quack();
          document.getElementById("showBtn").disabled=true;
          document.getElementById("quackBtn").disabled=true;

}

     