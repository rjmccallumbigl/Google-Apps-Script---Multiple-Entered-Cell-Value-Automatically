/**
* Multiply cell with function.
* @param thisRow {Object} The row of the current cell being edited
* @param thisCol {Object} The column of the current cell being edited
* @param multiple {Number} The value our cell is being multiplied by
*
* https://www.reddit.com/r/googlesheets/comments/hbzags/is_there_a_way_to_automatically_multiply_entered/
*
*/

function multiplyRange(thisRow, thisCol, multiple) {     
  var destinationSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var destinationCell = destinationSheet.getRange(thisRow, thisCol);     
  var cellData = destinationCell.getDisplayValue();

  //  If it's a number, multiply the cell
  if(!isNaN(cellData)){
    destinationCell.setValue(cellData * multiple);    
  }  
}

/**
* Script that modifies the sheet whenever it is edited
* @param e {Object} The current cell being edited
*
* Sources:
* https://developers.google.com/apps-script/guides/triggers/#Simple
* https://webapps.stackexchange.com/questions/103976/how-to-add-a-note-containing-date-to-a-cell-in-column-x-when-it-is-edited
* https://stackoverflow.com/questions/12583187/google-spreadsheet-script-check-if-edited-cell-is-in-a-specific-range
* https://stackoverflow.com/questions/12995262/how-can-i-return-the-range-of-an-edited-cell-using-an-onedit-event
*
*/

function onEdit(e){
  // Edited cell gets passed into function
  var range = e.range;  

  //  Returns the number of the edited row and column
  var thisRow = e.range.getRow();
  var thisCol = e.range.getColumn();
  Logger.log(thisRow);
  Logger.log(thisCol);

  //  Modify this value by whatever number you want
  var multiple = 1000;

  //  Run function
  multiplyRange(thisRow, thisCol, multiple);
}
