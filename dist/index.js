"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/addStamps.ts
  function addStamps() {
    const stampItems = document.querySelectorAll("[stamp='item']");
    const cards = document.querySelectorAll("[stamp='card']");
    let productsArray = [];
    const cardProductNameArray = [];
    for (let i = 0; i < stampItems.length; i++) {
      const type = stampItems[i].querySelector("[stamp='type']")?.textContent;
      const image = stampItems[i].querySelector("[stamp='image']");
      const products = stampItems[i].querySelectorAll("[stamp='product']");
      const cardProductName = document.querySelectorAll("[stamp='name']");
      for (let i2 = 0; i2 < cardProductName.length; i2++) {
        cardProductNameArray.push(cardProductName[i2].textContent);
      }
      productsArray = Array.from(products).map((x) => x.textContent);
      productsArray.some((el) => {
        if (cardProductNameArray?.includes(el)) {
          for (let i2 = 0; i2 < cards.length; i2++) {
            if (cards[i2].innerHTML.includes(el)) {
              const cmsItem = cards[i2].parentElement;
              const parentList = cmsItem?.parentElement;
              parentList?.prepend(cmsItem);
              if (type?.includes("Suosittelee")) {
                cards[i2].append(image?.cloneNode(true));
                cards[i2].setAttribute("fs-cmssort-field", "ajankohtaiset");
              } else if (type?.includes("Uutuus")) {
                image?.classList.add("uutuus");
                cards[i2].append(image?.cloneNode(true));
                cards[i2].setAttribute("fs-cmssort-field", "ajankohtaiset");
              }
            }
          }
        }
      });
    }
    const stampList = document.querySelector("[stamp='list-wrp']");
    stampList?.remove();
  }

  // src/utils/allergens.ts
  function allergens() {
    const removeVegan = document.querySelector("[allergen-name='Vegaaninen']");
    if (removeVegan) {
      removeVegan.remove();
    }
  }

  // src/utils/htmlTable.ts
  function htmlTable() {
    const content = document.querySelector("[html-table='content']");
    if (content.textContent) {
      let exponent2 = function() {
        const exponents = document.querySelectorAll("td");
        for (let i = 0; i < exponents.length; i++) {
          if (exponents[i].textContent?.includes("^")) {
            const number = exponents[i].textContent.substring(
              exponents[i].textContent.indexOf("^"),
              exponents[i].textContent.length - 1 + 1
            );
            exponents[i].textContent = exponents[i].textContent?.replace(number, "");
            const span = document.createElement("sup");
            span.textContent = number.replace("^", "");
            span.classList.add("exponent");
            exponents[i].appendChild(span);
          }
        }
      };
      var exponent = exponent2;
      const headers = content.querySelector("strong").textContent;
      const container = document.querySelector("[html-table='container");
      const tbl = document.createElement("table");
      tbl.classList.add("table");
      container?.appendChild(tbl);
      const tblHead = tbl.createTHead();
      tblHead.classList.add("table_thead");
      const tblBody = tbl.createTBody();
      const headersArray = Array.from(headers.split("|"));
      const head = tblHead.insertRow(0);
      const first = headersArray[0];
      head.insertCell(0).innerHTML = first;
      const middle = headersArray.slice(1, -1);
      for (let i = 0; i < middle.length; i++) {
        const cell2 = head.insertCell();
        cell2.innerHTML = middle[i];
        cell2.style.paddingLeft = ".25rem";
        cell2.style.paddingRight = ".25rem";
        cell2.style.textAlign = "center";
      }
      const last = headersArray.slice(-1);
      const cell = head.insertCell(-1);
      cell.innerHTML = last;
      cell.style.textAlign = "right";
      cell.style.paddingRight = "1rem";
      const amountOfColumns = tblHead.querySelectorAll("td").length;
      const lines = [];
      const filterLines = content.querySelectorAll("p");
      for (let i = 0; i < filterLines.length; i++) {
        if (!filterLines[i].innerHTML.includes("<strong>")) {
          lines.push(filterLines[i]);
        }
      }
      const linesArray = [];
      for (let i = 0; i < lines.length; i++) {
        const row = tblBody.insertRow();
        const line = lines[i].textContent;
        if (line[0] === "*") {
          linesArray.push(lines[i]);
        } else {
          const ingrArray = Array.from(line.split("|"));
          const first2 = ingrArray[0];
          const firstRow = row.insertCell(0);
          firstRow.innerHTML = first2;
          firstRow.style.paddingRight = ".25rem";
          const others = ingrArray.slice(1);
          for (let i2 = 0; i2 < others.length; i2++) {
            const otherRows = row.insertCell();
            otherRows.innerHTML = others[i2];
            otherRows.style.paddingLeft = ".25rem";
            otherRows.style.paddingRight = ".25rem";
            if (amountOfColumns === 2) {
              otherRows.style.textAlign = "right";
              otherRows.style.paddingRight = "1rem";
            } else if (others[i2].includes("%")) {
              otherRows.style.textAlign = "right";
              otherRows.style.paddingRight = "1rem";
            } else {
              otherRows.style.textAlign = "center";
            }
          }
        }
        const tds = document.querySelectorAll("td");
        for (let i2 = 0; i2 < tds.length; i2++) {
          const tdsText = tds[i2].textContent;
          if (tdsText[0] === "-") {
            tds[i2].classList.add("padThisCell");
          }
        }
        if (lines[i].textContent?.includes("^")) {
          exponent2();
        }
        if (lines[i].innerHTML.includes("<em>")) {
          const italics = lines[i].querySelector("em").textContent;
          const toBeItalics = tblBody.querySelectorAll("td");
          for (let i2 = 0; i2 < toBeItalics.length; i2++) {
            const it = toBeItalics[i2].innerHTML;
            if (it.includes(italics)) {
              toBeItalics[i2].innerHTML = toBeItalics[i2].innerHTML.replace(
                italics,
                `<em>${italics}</em>`
              );
            }
          }
        }
        content.style.display = "none";
      }
      if (linesArray.length > 0) {
        for (let i = 0; i < linesArray.length; i++) {
          const line = linesArray[i].textContent;
          const row = tblBody.insertRow();
          if (line[1] === "%") {
            const cell2 = row.insertCell(0);
            cell2.innerHTML = line;
            cell2.colSpan = 100;
          } else {
            const starRemoved = line.slice(1);
            const cell2 = row.insertCell(0);
            cell2.innerHTML = starRemoved;
            cell2.colSpan = 100;
          }
        }
        const firstLine = linesArray[0].textContent.slice(1);
        const trs = tblBody.querySelectorAll("tr");
        for (let i = 0; i < trs.length; i++) {
          if (trs[i].innerHTML.includes(firstLine)) {
            trs[i].classList.add("table_first-footnote");
          }
        }
      }
    }
  }

  // src/utils/splideImagesOrder.ts
  function splideImagesOrder() {
    const mainImage = document.querySelector("[gallery='main-image']");
    const noImage = document.querySelector("[gallery='no-image']");
    const list = document.querySelector("[gallery='list']");
    const infoCard = document.querySelector("[gallery='info-card']");
    const videoCard = document.querySelector("[gallery='video-card']");
    const listWrp = document.querySelector("[gallery='list-wrp']");
    const galleryDesktop = document.querySelector("[gallery='desktop']");
    let infoCardPosition;
    let videoCardPosition;
    if (noImage?.classList.contains("w-condition-invisible")) {
      noImage.remove();
    }
    if (infoCard.getAttribute("gallery-location")) {
      infoCardPosition = Number(infoCard.getAttribute("gallery-location")) - 1;
    }
    if (videoCard) {
      if (list.childElementCount > 1 && window.innerWidth > 991) {
        list?.appendChild(videoCard);
      }
      if (videoCard.getAttribute("gallery-location")) {
        videoCardPosition = Number(videoCard.getAttribute("gallery-location")) - 1;
      }
    }
    if (list.childElementCount === 0) {
      listWrp.remove();
      if (!infoCard.getAttribute("gallery-location")) {
        infoCard.insertAdjacentElement("afterend", mainImage);
      } else {
        list.insertBefore(infoCard, list.children[infoCardPosition]);
      }
    } else if (list.childElementCount === 1) {
      if (!videoCard) {
        if (!infoCard.getAttribute("gallery-location")) {
          galleryDesktop.insertBefore(mainImage, list.children[1]);
        } else {
          list.insertBefore(infoCard, list.children[infoCardPosition]);
        }
      } else if (videoCard && window.innerWidth > 991) {
        galleryDesktop.insertBefore(videoCard, galleryDesktop.children[videoCardPosition]);
        galleryDesktop.insertBefore(infoCard, galleryDesktop.children[infoCardPosition]);
      }
    } else if (list.childElementCount > 1) {
      list.insertBefore(mainImage, list.children[1]);
      if (!infoCard.getAttribute("gallery-location")) {
        list.insertBefore(infoCard, list.children[3]);
      } else if (window.innerWidth > 991) {
        list.insertBefore(infoCard, list.children[infoCardPosition]);
        if (videoCard) {
          list.insertBefore(videoCard, list.children[videoCardPosition]);
        }
        list.insertBefore(mainImage, list.children[1]);
      }
    }
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    if (document.querySelector("[swiper='index-hero']")) {
    } else {
      addStamps();
      splideImagesOrder();
      htmlTable();
      allergens();
    }
  });
})();
//# sourceMappingURL=index.js.map
