const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
  count.innerHTML++;
  applyColor();
});

sub.addEventListener('click', () => {
  count.innerHTML--;
  applyColor();
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
  applyColor();
});

function applyColor() {
  if ((count.innerHTML % 2)==0) {
    count.style.backgroundColor = 'red';
  } else if ((count.innerHTML % 2)!= 0) {
    count.style.backgroundColor = 'green';
  
  }
}