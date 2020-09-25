function onLoad() {    
    // divElem = document.querySelector('div')
    tab = document.createElement("table");
    tab.setAttribute("border","1");
    row = document.createElement("tr");
    col = document.createElement("th");
    col.innerHTML="ID";
    row.appendChild(col);
    col = document.createElement("th");
    col.innerHTML="Value";
    row.appendChild(col);
    col = document.createElement("th");
    col.innerHTML="Try Me";
    row.appendChild(col);
    tab.appendChild(row);
    for (let index = 0; index < 200; index++) {
        // table row
        row = document.createElement("tr");
        // table data
        col = document.createElement("td");
        col.innerHTML = (index+1);
        row.appendChild(col);
        col = document.createElement("td");
        col.innerHTML = (index*5+100);
        row.appendChild(col);
        col = document.createElement("th");
        b = document.createElement("input");
        b.setAttribute("type","button");
        b.setAttribute("value","Click me for "+(index+1));
        col.appendChild(b);
        row.appendChild(col);
        tab.appendChild(row);
    }

    document.body.appendChild(tab)
    // divElem.appendChild(tab);
}

    