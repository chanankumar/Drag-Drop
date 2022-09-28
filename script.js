let toBeDoneArray = [];
let inProgress = [];
let completed = [];
let extra = [];


function updateLocalStorage (listToBeUpdated) {
    switch(listToBeUpdated) {
        case 'ToBeDone' : 
            // if(toBeDoneArray.length === 0 ){
            //     return
            // }
            localStorage.setItem('ToBeDone',JSON.stringify(toBeDoneArray));
            break;
        case 'InProgress' :
            // if(inProgress.length === 0 ){
            //     return
            // } 
            localStorage.setItem('InProgress',JSON.stringify(inProgress));
            break;
        case 'Completed' : 
            // if(completed.length === 0 ){
            //     return
            // }
            localStorage.setItem('Completed',JSON.stringify(completed));
            break;
        case 'Extra' : 
            // if(extra.length === 0 ){
            //     return
            // }
            localStorage.setItem('Extra',JSON.stringify(extra));
            break;
    }
}

function getValueLocalStorage (listToBeUpdated) {
    let value;
    switch(listToBeUpdated) {
        case 'ToBeDone' : 
            value = JSON.parse(localStorage.getItem('ToBeDone'));
            if(value === null){
                return []
            } else {
                return value
            }

        case 'InProgress' : 
            value = JSON.parse(localStorage.getItem('InProgress'));
            if(value === null){
                return []
            } else {
                return value
            }

        case 'Completed' : 
            value = JSON.parse(localStorage.getItem('Completed'));
            if(value === null){
                return []
            } else {
                return value
            }

        case 'Extra' : 
            value = JSON.parse(localStorage.getItem('Extra'));
            if(value === null){
                return []
            } else {
                return value
            }
    }
}

function renderDomOnLoad (listToBeUpdated) {
    let deleteAllItem;
    switch(listToBeUpdated) { 
        case 'ToBeDone' :
            toBeDoneArray = getValueLocalStorage('ToBeDone')
            deleteAllItem = document.querySelectorAll('.containerForToBeDone');
            if(deleteAllItem.length > 0) {
                deleteAllItem.forEach(value => {
                    value.remove();
                  });
            }
            if(toBeDoneArray.length !== 0) {
                toBeDoneArray.forEach( (value,index) => {
                    var containerForItem = document.createElement('div');
                    containerForItem.classList.add('containerForToBeDone');
                    document.getElementById("containerForToBeDone").appendChild(containerForItem)
                    var item = document.createElement("span");
                    item.innerHTML = value;
                    item.contentEditable = true;
                    item.addEventListener("focusout", (event) => itemUpdated(index,'ToBeDone',event));
                    var deleteIcon = document.createElement("span");
                    deleteIcon.innerHTML = " X ";
                    deleteIcon.contentEditable = false;
                    deleteIcon.classList.add('deleteIcon');
                    deleteIcon.addEventListener("click", () => deleteParticularItem(index,'ToBeDone'));
                    // item.appendChild(deleteIcon) 
                    item.classList.add("item")
                    containerForItem.appendChild(item);
                    containerForItem.appendChild(deleteIcon);
                })
            }
            break

        case 'InProgress' :
            inProgress = getValueLocalStorage('InProgress')
            deleteAllItem = document.querySelectorAll('.containerForInprogress');
            if(deleteAllItem.length > 0) {
                deleteAllItem.forEach(value => {
                    value.remove();
                  });
            }
            if(inProgress.length !== 0) {
                inProgress.forEach( (value,index) => {
                    var containerForItem = document.createElement('div');
                    containerForItem.classList.add('containerForInprogress');
                    document.getElementById("containerForInprogress").appendChild(containerForItem)
                    var item = document.createElement("span");
                    item.innerHTML = value;
                    item.contentEditable = true;
                    item.addEventListener("focusout", (event) => itemUpdated(index,'Inprogress',event));
                    var deleteIcon = document.createElement("span");
                    deleteIcon.innerHTML = " X ";
                    deleteIcon.contentEditable = false;
                    deleteIcon.classList.add('deleteIcon');
                    deleteIcon.addEventListener("click", () => deleteParticularItem(index, 'InProgress'));
                    // item.appendChild(deleteIcon) 
                    item.classList.add("item")
                    containerForItem.appendChild(item);
                    containerForItem.appendChild(deleteIcon);
                })
            }
            break

        case 'Completed' : 
        completed = getValueLocalStorage('Completed')
        deleteAllItem = document.querySelectorAll('.containerForCompleted');
        if(deleteAllItem.length > 0) {
            deleteAllItem.forEach(value => {
                value.remove();
              });
        }
        if(completed.length !== 0) {
            completed.forEach( (value,index) => {
                var containerForItem = document.createElement('div');
                containerForItem.classList.add('containerForCompleted');
                document.getElementById("containerForCompleted").appendChild(containerForItem)
                var item = document.createElement("span");
                item.innerHTML = value;
                item.contentEditable = true;
                item.addEventListener("focusout", (event) => itemUpdated(index,'Completed',event));
                var deleteIcon = document.createElement("span");
                deleteIcon.innerHTML = " X ";
                deleteIcon.contentEditable = false;
                deleteIcon.classList.add('deleteIcon');
                deleteIcon.addEventListener("click", () => deleteParticularItem(index, 'Completed'));
                // item.appendChild(deleteIcon) 
                item.classList.add("item")
                containerForItem.appendChild(item);
                containerForItem.appendChild(deleteIcon);
            })
        }
        break

        case 'Extra' :
            extra = getValueLocalStorage('Extra')
            deleteAllItem = document.querySelectorAll('.containerForExtra');
            if(deleteAllItem.length > 0) {
                deleteAllItem.forEach(value => {
                    value.remove();
                });
            }
            if(extra.length !== 0) {
                extra.forEach( (value,index) => {
                    var containerForItem = document.createElement('div');
                    containerForItem.classList.add('containerForExtra');
                    document.getElementById("containerForExtra").appendChild(containerForItem)
                    var item = document.createElement("span");
                    item.innerHTML = value;
                    item.contentEditable = true;
                    item.addEventListener("focusout", (event) => itemUpdated(index,'Extra',event));
                    var deleteIcon = document.createElement("span");
                    deleteIcon.innerHTML = " X ";
                    deleteIcon.contentEditable = false;
                    deleteIcon.classList.add('deleteIcon');
                    deleteIcon.addEventListener("click", () => deleteParticularItem(index, 'Extra'));
                    // item.appendChild(deleteIcon) 
                    item.classList.add("item")
                    containerForItem.appendChild(item);
                    containerForItem.appendChild(deleteIcon);
                })
            }
            break
    }
}

function addItem(index) {
    document.getElementById("addItemButton" + index).removeAttribute('onclick');
    let addPlace = document.getElementById("addItemButton" + index);
    addPlace.innerHTML = "";
    // addPlace.classList.add('addNewItemOnButton');
    var typingPlace = document.createElement("span");
    typingPlace.contentEditable = true;
    typingPlace.setAttribute("id", "addValue");
    typingPlace.autofocus = "true";
    var buttonContainter = document.createElement("div");
    var add = document.createElement("span");
    var cancel = document.createElement("span");
    add.innerHTML = " x ";
    // add.classList.add('widthToType')
    cancel.innerHTML = " + ";
    cancel.addEventListener("click", (evt) => addItemToList(index, evt));
    add.addEventListener("click", (evt) => closeAddValue(index, evt));
    buttonContainter.classList.add('deleteIcon');
    document.getElementById("addItemButton" + index).appendChild(typingPlace);
    buttonContainter.appendChild(add);
    buttonContainter.appendChild(cancel);
    document.getElementById("addItemButton" + index).appendChild(buttonContainter);
}

function closeAddValue(index,event) {
    let parent = document.getElementById('addItemButton' + index);
    parent.remove();
    let parent2 = document.createElement("div");
    parent2.classList.add('addbutton');
    parent2.setAttribute("id","addItemButton"+index);
    parent2.innerHTML = " + "; 
    switch(index) {
        case 1 : 
        document.getElementById('tobedone').appendChild(parent2);
        break;

        case 2 : 
        document.getElementById('inprogress').appendChild(parent2);
        break;

        case 3 : 
        document.getElementById('completed').appendChild(parent2);
        break;

        case 4 : 
        document.getElementById('extra').appendChild(parent2);
        break;
    }
    parent2.setAttribute('onclick','addItem('+index+')');
}

function addItemToList(index,evt)  {
    let valueToAppend = document.getElementById('addValue').innerHTML;
    switch(index) {
        case 1 : 
            toBeDoneArray.push(valueToAppend);
            updateLocalStorage('ToBeDone')
            renderDomOnLoad('ToBeDone');
            closeAddValue(1);
        break;

        case 2 : 
            inProgress.push(valueToAppend);
            updateLocalStorage('InProgress')
            renderDomOnLoad('InProgress');
            closeAddValue(2);
        break;

        case 3 : 
            completed.push(valueToAppend);
            updateLocalStorage('Completed')
            renderDomOnLoad('Completed');
            closeAddValue(3);
        break;

        case 4 : 
            extra.push(valueToAppend);
            updateLocalStorage('Extra')
            renderDomOnLoad('Extra');
            closeAddValue(4);
        break;

    }

}

function deleteParticularItem(index,listName) {
    switch(listName) { 
        case 'ToBeDone' : 
            toBeDoneArray.splice(index, 1);
            updateLocalStorage('ToBeDone')
            renderDomOnLoad('ToBeDone');
        break

        case 'InProgress' : 
            inProgress.splice(index,1);
            updateLocalStorage('InProgress');
            renderDomOnLoad('InProgress');
        break
    
        case 'Completed' : 
            completed.splice(index, 1);
            updateLocalStorage('Completed');
            renderDomOnLoad('Completed');
        break

        case 'Extra' : 
            extra.splice(index,1);
            updateLocalStorage('Extra');
            renderDomOnLoad('Extra');
        break

    }
}

function itemUpdated(index,listName,event) {
    switch(listName) { 
        case 'ToBeDone' : 
            toBeDoneArray[index] = event.path[0].innerHTML;
            // toBeDoneArray.splice(index, 1);
            updateLocalStorage('ToBeDone')
        break

        case 'InProgress' : 
            inProgress[index] = event.path[0].innerHTML;
            // inProgress.splice(index,1);
            updateLocalStorage('InProgress');
        break
    
        case 'Completed' : 
            completed[index] = event.path[0].innerHTML;
            // completed.splice(index, 1);
            updateLocalStorage('Completed');
        break

        case 'Extra' : 
            extra[index] = event.path[0].innerHTML;
            // extra.splice(index,1);
            updateLocalStorage('Extra');
        break

    }
}

renderDomOnLoad('ToBeDone');
renderDomOnLoad('InProgress');
renderDomOnLoad('Completed');
renderDomOnLoad('Extra');