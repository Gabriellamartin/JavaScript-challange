// from data.js
// basic js table code from vanuan on Stackoverflow https://stackoverflow.com/questions/14643617/create-table-using-javascript
function createTable(objectArray, fields, fieldTitles) {
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');
    fieldTitles.forEach((fieldTitle) => {
      let th = document.createElement('th');
      th.appendChild(document.createTextNode(fieldTitle));
      thr.appendChild(th);
    });
    thead.appendChild(thr);
    tbl.appendChild(thead);
  
    let tbdy = document.createElement('tbody');
    let tr = document.createElement('tr');
    objectArray.forEach((object) => {
      let tr = document.createElement('tr');
      fields.forEach((field) => {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(object[field]));
        tr.appendChild(td);
      });
      tbdy.appendChild(tr);    
    });
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    return tbl;
  }
  
  createTable([
    {Date: 'Banana', City: '3.04'},
    {Date: 'Orange', City: '2.56'},
    {Date: 'Apple', City: '1.45'}
  ],
  ['Date', 'City'], ['Date', 'City']);
  
// YOUR CODE HERE!
