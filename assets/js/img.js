const dropEventHandler = (evt) => {
    localStorage.setItem(`${evt.target.id}_img`, URL.createObjectURL(DataTransferItem.items[0].getAsFile()));
};