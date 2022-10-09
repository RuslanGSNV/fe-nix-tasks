  function positionAt(anchor, position, elem) {
    
    function anchorPageCoords(elem) {
        let element = elem.getBoundingClientRect();
    
        return {
          top: element.top + pageYOffset,
          left: element.left + pageXOffset
        };
      }
      let coordinats = anchorPageCoords(anchor);

    if (position == "top-out" ){
        elem.style.left = coordinats.left + "px";
        elem.style.top = coordinats.top - elem.offsetHeight + "px";
    } else if (position == "right-out"){
        elem.style.left = coordinats.left + anchor.offsetWidth + "px";
        elem.style.top = coordinats.top + "px";
    } else if (position == "bottom-out"){
        elem.style.left = coordinats.left + "px";
        elem.style.top = coordinats.top + anchor.offsetHeight + "px";
    } else if (position == "top-in"){
        elem.style.left = coordinats.left + "px";
        elem.style.top = coordinats.top + "px";
    } else if (position == "right-in"){
        elem.style.left = coordinats.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = coordinats.top + "px";
    } else if (position == "bottom-in"){
        elem.style.left = coordinats.left + "px";
        elem.style.top = coordinats.top + anchor.offsetHeight - elem.offsetHeight + "px";
    }
}
    
function showNote(anchor, position, html) {
let note = document.createElement('div');
note.className = "note";
note.innerHTML = html;
document.body.append(note);
positionAt(anchor, position, note);    
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");