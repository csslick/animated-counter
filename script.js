const counter = document.querySelectorAll('.counter');
const speed = 200;

for(let i = 0; i< counter.length; i++) {
  const updateCount = function() {
    var target = counter[i].getAttribute('data-target');
    // +를 앞에 넣으면 문자형이 숫자형으로 변환됨
    console.log(typeof +target);
    // DOM 시작 카운트 읽어오기
    var count = +counter[i].innerText;
    
    // 증가값 = target / speed
    var inc = target / speed;
    console.log(inc)

    if(count < target) {
      counter[i].innerText = count + inc;
      setTimeout(updateCount, 10)
    } else {
      count.innerText = target;
    }
  }

  updateCount();
}
