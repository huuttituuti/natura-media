export function articleSchedule(daysUntilChange: number) {
  //console.log(array);
  const array = Array.from(document.querySelectorAll("[swiper='slide']"));
  // Set const for timer
  const total = array.length + 1;
  const endDate = new Date(Date.now());
  //let startDate;
  //const timeInterval = 1; // 14000 (= 2 weeks)
  // Transform days into seconds
  //const intoSeconds = daysUntilChange * 1000;
  const timeTotal = total * daysUntilChange;

  console.log(timeTotal);

  // Change card index by timer
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    // Filter articles out of product cards
    if (date !== null) {
      const a = array[i].querySelector('a');
      const published = new Date(Date.parse(a?.getAttribute('published')));
      //const updated = new Date(Date.parse(a?.getAttribute('updated')));
      //const created = new Date(Date.parse(a?.getAttribute('created')));

      const startIndex = array.indexOf(array[i]);
      //console.log(startDate)
      const seconds = Math.floor((endDate - published) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      //console.log(days);

      // Change element position for every nth times
      let index = 0;
      for (let j = 1; j < timeTotal; j++) {
        if (j % daysUntilChange === 0) {
          console.log(j + 'iterations have passed');
          index++;
          if (array[i].nextElementSibling !== null) {
            console.log(array[i].nextElementSibling);
            //array[i].parentNode.insertBefore(array[i], array[i].nextElementSibling);
          }
          console.log('index: ' + index);
        }
        console.log(j);
      }
    }
  }

  // Run timer
  /*while (true) {
    console.log('hello');
    if (re > end) {
      break;
    }*/
}
