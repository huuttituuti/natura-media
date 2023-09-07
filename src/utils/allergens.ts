export function allergens() {
  const allergensH = document.querySelector("[allergens='header']");
  const allergens = Array.from(document.querySelectorAll("[allergens='item']"));
  const finalArray = [];
  let string = [];

  const array = [];
  for (let i = 0; i < allergens.length; i++) {
    if (!allergens[i].innerHTML.includes('Vegaani-leima')) {
      array.push(allergens[i].textContent);
    }
  }

  for (let i = 0; i < array.length; i++) {
    // Remove vegaani -leima from allergens
    if (array[i].includes('Vegaani-leima')) {
      array.splice(array.indexOf(array[i]), 1);
    }
  } // for

  array.join('');
  // if only one
  if (array.length === 1) {
    array[0] = ' ' + array[0] + '.';
    allergensH.textContent = 'Ei sisällä ' + array[0];
  } else if (array.length === 2) {
    array[0] = ' ' + array[0] + ' eikä ';
    array[1] += '.';
    allergensH.textContent = 'Ei sisällä ' + array[0] + array[1];
  } else if (array.length >= 3) {
    // first
    const first = ' ' + array[0] + ', ';
    // last
    const last = array[array.length - 1] + '.';
    // second last
    const secondlast = array[array.length - 2] + ' eikä ';
    // All in between
    const others = array.slice(1, array.length - 2);
    //console.log(others);
    for (let i = 0; i < others.length; i++) {
      others[i] = others[i] + ', ';
    }
    finalArray.push(first, others, secondlast, last);
    string = finalArray.flat();
    string = string.join('');

    allergensH.textContent = 'Ei sisällä ' + string;
  }
  // Remove original collection list
  document.querySelector("[allergens='list']")?.remove();
}
