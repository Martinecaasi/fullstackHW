export default class Counter {
  num;
  dynamicOutput;

  Initialize(num) {
      this.num = num;
  }

  Increment() {
      this.num++;
  }

  DisplayC() {
      let para = document.querySelector('#counter');
      para.innerHTML = "";
      for (let i = 0; i <= this.num; i++) {
          para.innerHTML += i;
      }
  }

  Go() {
      this.dynamicOutput = '';
      for (let i = 0; i <= this.num; i++) {
          this.dynamicOutput += i.toString();
      }
  }

  GetDynamicOutput() {
      return this.dynamicOutput;
  }
}

