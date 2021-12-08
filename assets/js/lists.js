// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘


// Print the first List
const printFirstList = () => {
  if (CONFIG.lists.firstList[0].hasOwnProperty("image")) {
    // When there is no image stored in localStorage, set the image to the one defined in ../config.js 
    let imgURL = localStorage.hasOwnProperty(`${list_1.id}_img`) ? localStorage.getItem(`${list_1.id}_img`) : CONFIG.lists.firstList.image;

    // I will most likely have to add more CSS declarations in the future
    Object.assign(list_1.style, {
      'backgroundImage': `url(${imgURL})`
    });
    list_1.setAttribute('ondrop', 'dropEventHandler(event);');
    list_1.setAttribute('ondragover', 'dragOverEventHandler(event);');
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
    // When there is no image stored in localStorage, set the image to the one defined in ../config.js 
    let imgURL = localStorage.hasOwnProperty(`${list_2.id}_img`) ? localStorage.getItem(`${list_2.id}_img`) : CONFIG.lists.secondList.image;

    // I will most likely have to add more CSS declarations in the future
    Object.assign(list_2.style, {
      'backgroundImage': `url(${imgURL})`
    });
    list_2.setAttribute('ondrop', 'dropEventHandler(event);');
    list_2.setAttribute('ondragover', 'dragOverEventHandler(event);');
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
