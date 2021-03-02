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
    {Date: '1/1/2010', City: 'benton', State: 'ar', Country: 'us', Shape: 'circle', Minutes: '5 min', Comments: '4 bright green circles high in the sky going in circles then one bright green light at my front door.'},
    {Date: '1/1/2010', City: 'bonita', State: 'ca', Country: 'us', Shape: 'light', Minutes: '13 min', Comments: 'Three bright red lights witnessed floating stationary over San Diego New Years Day 2010'},
    {Date: '1/1/2010', City: 'el cajon', State: 'ca', Country: 'us', Shape: 'triangle', Minutes: '6 min', Comments: 'On New Years Eve I went outside to hear the celebration and fireworks in my neighbor hood. And noticed 3 red lights above my house and'},
    {Date: '1/1/2010', City: 'el cajon', State: 'ca', Country: 'us', Shape: 'triangle', Minutes: '12 min', Comments: '3 Red objects hovering over El Cajon CA.'},
    {Date: '1/1/2010', City: 'fresno', State: 'ca', Country: 'us', Shape: 'light', Minutes: '1 min', Comments: 'Fresno cal. bright light hovers over head then vanished'},
    {Date: '1/1/2010', City: 'grant pass', State: 'or', Country: 'us', Shape: 'triangle', Minutes: 'A few min', Comments: 'Triangle shaped craft with three red lights at points hovering over Grants Pass&#44 Oregon.'},
    {Date: '1/1/2010', City: 'la mesa', State: 'ca', Country: 'us', Shape: 'light', Minutes: '10 min', Comments: 'Three red lights over southern California that made a triangle shape'},],
  ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'],  ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'], ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'], ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'],  ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'],  ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments'],  ['Date', 'City', 'State', 'Country', 'Shape', 'Minutes', 'Comments']);
  
// YOUR CODE HERE!