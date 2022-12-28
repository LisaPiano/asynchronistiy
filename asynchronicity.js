function func3() {
  console.log('Guys!');
}

function func2() {
  console.log('you');
}

function func1() {
  console.log('Hey');
  func2();
  func3();
}

func1();  

