export function addStamps() {
  const stampItems = document.querySelectorAll("[stamp='item']");
  const cards = document.querySelectorAll("[stamp='card']");
  let productsArray = [];
  const cardProductNameArray: (string | null)[] = [];

  for (let i = 0; i < stampItems.length; i++) {
    const type = stampItems[i].querySelector("[stamp='type']")?.textContent;
    const image = stampItems[i].querySelector("[stamp='image']");
    const products = stampItems[i].querySelectorAll("[stamp='product']");
    const cardProductName = document.querySelectorAll("[stamp='name']");
    for (let i = 0; i < cardProductName.length; i++) {
      cardProductNameArray.push(cardProductName[i].textContent);
    }

    productsArray = Array.from(products).map((x) => x.textContent);

    productsArray.some((el) => {
      if (cardProductNameArray?.includes(el)) {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].innerHTML.includes(el)) {
            // Move products with stamp as first slides
            const cmsItem = cards[i].parentElement;
            const parentList = cmsItem?.parentElement;
            parentList?.prepend(cmsItem);
            // Add stamps
            if (type?.includes('Suosittelee')) {
              cards[i].append(image?.cloneNode(true));
              cards[i].setAttribute('fs-cmssort-field', 'ajankohtaiset');
            } else if (type?.includes('Uutuus')) {
              image?.classList.add('uutuus');
              cards[i].append(image?.cloneNode(true));
              cards[i].setAttribute('fs-cmssort-field', 'ajankohtaiset');
            } // if type
          } // if cards[i]
        } // for cards[i]
      } // if cardProductNameArray
    }); // productsArray.some
  } // stampItems for
  //console.log(cardProductNameArray);
  const stampList = document.querySelector("[stamp='list-wrp']");
  stampList?.remove();
} // export

// Copy of old code
/*export function addStamps() {
  const stampItems = document.querySelectorAll("[stamp='item']");
  const cards = document.querySelectorAll("[stamp='card']");
  let productsArray = [];

  for (let i = 0; i < stampItems.length; i++) {
    const type = stampItems[i].querySelector("[stamp='type']")?.textContent;
    const image = stampItems[i].querySelector("[stamp='image']");
    const products = stampItems[i].querySelectorAll("[stamp='product']");
    const cardProductName = document.querySelector("[stamp='name']")?.textContent;
    //console.log(cardProductName);

    productsArray = Array.from(products).map((x) => x.textContent);
    //console.log(productsArray);

    for (let c = 0; c < cards.length; c++) {
      productsArray.some((el) => {
        if (cardProductName?.includes(el)) {
          //console.log(cards[c]);
          if (type?.includes('Suosittelee')) {
            cards[c].append(image?.cloneNode(true));
            cards[c].setAttribute('fs-cmssort-field', 'ajankohtaiset');
          } else if (type?.includes('Uutuus')) {
            image?.classList.add('uutuus');
            cards[c].append(image?.cloneNode(true));
            cards[c].setAttribute('fs-cmssort-field', 'ajankohtaiset');
          }
        }
      }); // products.some()
    } // cards for
  } // stampItems for
  const stampList = document.querySelector("[stamp='list-wrp']");
  stampList?.remove();
} // export*/
