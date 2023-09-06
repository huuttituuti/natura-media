export function htmlTable() {
  /* GENERATE HTML TABLE */
  const content = document.querySelector("[html-table='content']");
  if (content.textContent) {
    const headers = content.querySelector('strong').textContent;
    const container = document.querySelector("[html-table='container");

    /* CREATE TABLE */
    const tbl = document.createElement('table');
    tbl.classList.add('table');
    container?.appendChild(tbl);
    const tblHead = tbl.createTHead();
    tblHead.classList.add('table_thead');
    const tblBody = tbl.createTBody();

    /* HEADERS */
    const headersArray = Array.from(headers.split('|'));
    const head = tblHead.insertRow(0);
    const first = headersArray[0];
    head.insertCell(0).innerHTML = first;

    const middle = headersArray.slice(1, -1);
    for (let i = 0; i < middle.length; i++) {
      const cell = head.insertCell();
      cell.innerHTML = middle[i];
      cell.style.paddingLeft = '.25rem';
      cell.style.paddingRight = '.25rem';
      cell.style.textAlign = 'center';
    }

    const last = headersArray.slice(-1);
    const cell = head.insertCell(-1);
    cell.innerHTML = last;
    cell.style.textAlign = 'right';
    cell.style.paddingRight = '1rem';
    /* END OF HEADERS */

    const amountOfColumns = tblHead.querySelectorAll('td').length;

    /* INGREDIENTS */
    // For some reason this line doesn't work in Firefox but does in Chrome:
    //const filterLines = content.querySelectorAll('p:not(:has(strong))');
    const lines = [];
    // Get all the paragraphs that are not bolded
    const filterLines = content.querySelectorAll('p');
    for (let i = 0; i < filterLines.length; i++) {
      if (!filterLines[i].innerHTML.includes('<strong>')) {
        lines.push(filterLines[i]);
      }
    }

    const linesArray = [];

    for (let i = 0; i < lines.length; i++) {
      const row = tblBody.insertRow();
      const line = lines[i].textContent;

      // if starts with * symbol, it's a footnote
      if (line[0] === '*') {
        linesArray.push(lines[i]);
      } else {
        // For all the actual ingredients
        const ingrArray = Array.from(line.split('|'));

        const first = ingrArray[0];
        const firstRow = row.insertCell(0);
        firstRow.innerHTML = first;
        firstRow.style.paddingRight = '.25rem';

        const others = ingrArray.slice(1);
        for (let i = 0; i < others.length; i++) {
          const otherRows = row.insertCell();
          otherRows.innerHTML = others[i];
          otherRows.style.paddingLeft = '.25rem';
          otherRows.style.paddingRight = '.25rem';

          if (amountOfColumns === 2) {
            // If there's only 2 columns, make last column align right
            otherRows.style.textAlign = 'right';
            otherRows.style.paddingRight = '1rem';
          } else if (others[i].includes('%')) {
            otherRows.style.textAlign = 'right';
            otherRows.style.paddingRight = '1rem';
          } else {
            /* If there's more than 2 columns,
            make all the other columns align center
            and only last column right*/
            otherRows.style.textAlign = 'center';
          }
        }
      }
      // If contains "-", remove symbol and add padding to that cell
      const tds = document.querySelectorAll('td');
      for (let i = 0; i < tds.length; i++) {
        const tdsText = tds[i].textContent;
        if (tdsText[0] === '-') {
          //tds[i].textContent = tds[i].textContent.replace('-', '');
          tds[i].classList.add('padThisCell');
        }
      } // for tds

      // If contains <em>, add italics back
      if (lines[i].innerHTML.includes('<em>')) {
        const italics = lines[i].querySelector('em').textContent;
        const toBeItalics = tblBody.querySelectorAll('td');
        for (let i = 0; i < toBeItalics.length; i++) {
          const it = toBeItalics[i].innerHTML;
          if (it.includes(italics)) {
            toBeItalics[i].innerHTML = toBeItalics[i].innerHTML.replace(
              italics,
              `<em>${italics}</em>`
            );
          }
        } // for toBeItalics
      }

      // Hide original content
      content.style.display = 'none';
    }

    /* FOOTNOTES */
    // if there are any footnotes
    if (linesArray.length > 0) {
      for (let i = 0; i < linesArray.length; i++) {
        const line = linesArray[i].textContent;
        const row = tblBody.insertRow();

        if (line[1] === '%') {
          // Lines with % symbol, e.g. % vuorokautisen saanniin...
          const cell = row.insertCell(0);
          cell.innerHTML = line;
          cell.colSpan = 100;
        } else {
          // All the other lines, always remove the first * symbol
          const starRemoved = line.slice(1);
          const cell = row.insertCell(0);
          cell.innerHTML = starRemoved;
          cell.colSpan = 100;
        }
      } // for linesArray
      // Add class to the first footnote
      const firstLine = linesArray[0].textContent.slice(1);
      const trs = tblBody.querySelectorAll('tr');
      for (let i = 0; i < trs.length; i++) {
        if (trs[i].innerHTML.includes(firstLine)) {
          trs[i].classList.add('table_first-footnote');
        }
      }
    }
  }
} // export
