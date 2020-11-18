export function setDefaultType(style) {
    style.color = '#868a8d'
    style.backgroundColor = '#e2e3e5';
}

export function checkOnEmptyMessage(message) {
    let empty = true;

    if(message != undefined && message != "") {
        empty = false;
    }

    return empty;
}