let x = tick
function f(r){ return r - (r % 9) }

function lauf(x){
  const grid = x % 81
  const tmp = Math.floor(x/81) % 9
  const rot = (grid * 9 + tmp + 27) % 756
}
