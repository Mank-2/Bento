dropEventHandler = (ev) => {
    ev.preventDefault();

    var imgFile = ev.dataTransfer.items[0].getAsFile();
    // Perhaps this could be useful for later...
    // var imgURL = URL.createObjectURL(imgFile); 

    // Can’t use images over 5 mb. Not exactly a big deal, however. 
    // Maybe I’ll find a better way in the future.
    var fr = new FileReader;
    fr.onload = function() {
        localStorage.setItem(`${ev.target.id}_img`, fr.result);
        document.getElementById(ev.target.id).style.backgroundImage = `url(${fr.result})`;
    };
    
    fr.readAsDataURL(imgFile);
};

dragOverEventHandler = (ev) => {
    ev.preventDefault()
};