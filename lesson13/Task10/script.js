

let panes = document.querySelector('#panes');

for (let i = 0; i<panes.children.length; i++){
    let closeBtn = document.createElement('button');
    closeBtn.textContent = '[x]';
    closeBtn.className = 'remove-button';
    panes.children[i].prepend(closeBtn);
}

panes.addEventListener('click', function(event){
    if (!event.target.classList.contains('remove-button')) return;
    event.target.parentNode.remove();
})