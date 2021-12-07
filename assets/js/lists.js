// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘

// Print the first List
const printFirstList = () => {
  if (CONFIG.lists.firstList[0].hasOwnProperty("image")) {
    list_1.style.backgroundImage = `url(${CONFIG.lists.firstList[0].image})`;
  } else {
    let icon = `<i class="list__head" icon-name="${CONFIG.firstListIcon}"></i>`;
    const position = 'beforeend';
    list_1.insertAdjacentHTML(position, icon);
    for (const link of CONFIG.lists.firstList) {
      // List item
      let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
      const position = 'beforeend';
      list_1.insertAdjacentHTML(position, item);
    }
  }
};

// Print the second List
const printSecondList = () => {
  if (CONFIG.lists.secondList[0].hasOwnProperty("image")) {
    list_2.style.backgroundImage = `url(${CONFIG.lists.secondList[0].image})`;
  } else {
    let icon = `<i class="list__head" icon-name="${CONFIG.secondListIcon}"></i>`;
    const position = 'beforeend';
    list_2.insertAdjacentHTML(position, icon);
    for (const link of CONFIG.lists.secondList) {
      // List item
      let item = `
            <a
            target="${CONFIG.openInNewTab ? '_blank' : ''}"
            href="${link.link}"
            class="list__link"
            >${link.name}</a
            >
        `;
      const position = 'beforeend';
      list_2.insertAdjacentHTML(position, item);
    }
  }
};

printFirstList();
printSecondList();
