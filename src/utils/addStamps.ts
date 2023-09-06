export function addStamps() {
    const stampItems = document.querySelectorAll("[stamp='item']");
    const cards = document.querySelectorAll("[stamp='card']");
    let productsArray = [];
  
    for (let i = 0; i < stampItems.length; i++) {
      const type = stampItems[i].querySelector("[stamp='type']")?.textContent;
      const image = stampItems[i].querySelector("[stamp='image']");
      const products = stampItems[i].querySelectorAll("[stamp='product']");
      const cardProductName = document.querySelector("[stamp='name']")?.textContent;
  
      productsArray = Array.from(products).map((x) => x.textContent);
  
      for (let c = 0; c < cards.length; c++) {
        productsArray.some((el) => {
          if (cardProductName?.includes(el)) {
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
  } // export
  