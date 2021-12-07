const dropEventHandler = (evt) => {
    evt.preventDefault();
    localStorage.setItem(`${evt.target.id}_img`, URL.createObjectURL(evt.dataTransfer.items[0].getAsFile()));
};