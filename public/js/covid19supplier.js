function addRowToTablesupplier()
{
  var tbl = document.getElementById('tblSample2');
  var lastRow = tbl.rows.length;
  // if there's no header row in the table, then iteration = lastRow + 1
  var iteration = lastRow;
  var row = tbl.insertRow(lastRow);

  // left cell
  var cellLeft = row.insertCell(0);
  var el = document.createElement('input');
  el.type = 'text';
  el.name = 'txtRow' + iteration;
  el.id = 'txtRow' + iteration;
  el.size = 58;
  el.value="jsdk"

  cellLeft.appendChild(el);

  // right cell
  var cellRight = row.insertCell(1);
  var el = document.createElement('input');
  el.type = 'text';
  el.name = 'txtRow' + iteration;
  el.id = 'txtRow' + iteration;
  el.size = 58;
  el.value="jsdk"
  cellRight.appendChild(el);


	var cellRight2 = row.insertCell(2);
  var el = document.createElement('input');
  el.type = 'text';
  el.name = 'txtRow' + iteration;
  el.id = 'txtRow' + iteration;
  el.size = 58;
  el.value="jsndvsd"
  cellRight2.appendChild(el);
 }

function removeRowFromTablesupplier()
{
  var tbl = document.getElementById('tblSample2');
  var lastRow = tbl.rows.length;
  if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}

window.onload =  function () {

}
