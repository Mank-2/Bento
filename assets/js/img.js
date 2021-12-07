const dropEventHandler = (evt) => {
    ev.preventDefault();
    localStorage.setItem(`${evt.target.id}_img`, URL.createObjectURL(evt.dataTransferItem.items[0].getAsFile()));
};