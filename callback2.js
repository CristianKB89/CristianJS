function agregarHttp(url) {
    return "http://" + url;
}

function procesar(arrStr,func){
    let links = arrStr.map(element=>{func(element)});
    return links;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));