dropEventHandler = (ev) => {
    ev.preventDefault();
    var url = URL.createObjectURL(ev.dataTransfer.items[0].getAsFile());
    localStorage.setItem(`${ev.target.id}_img`, url);
    document.getElementById(ev.target.id).style.backgroundImage = `url(${url})`;
};

dragOverEventHandler = (ev) => {
    ev.preventDefault()
};