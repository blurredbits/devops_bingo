function VER5_Check() {
var b = navigator.appName;
if (b == "Netscape") this.b = "NS"; 
else if (b == "Microsoft Internet Explorer") this.b = "IE"; 
this.v = parseInt(navigator.appVersion); 
this.IE5 = (navigator.userAgent.indexOf('MSIE 5') > 0); 
this.NS5 = (this.b >= "NS" && this.v >= 5);
this.VER5 = (this.IE5 || this.NS5); 
}
 
is = new VER5_Check();
  
var jargonSelect = new Array(); 
var c2=0;
 
function highlight($el) {
    myId = $el.find(".table-cell").attr("id");
  // don't allow toggling of free square
  if ($el.hasClass("free") && $el.hasClass("selected")) {
    return;
  }
  else if ($el.hasClass("selected")) {
    // already selected..remove
    $el.removeClass("selected");
    jargonSelect = jQuery.grep(jargonSelect, function(value) {
        return value != myId;
    });
    c2--;
    console.log(jargonSelect)
    return;
  }
    $el.addClass("selected");
  var myCell = document.getElementById(myId);
  // myCell.style.backgroundColor = "\#00ffc0";
  jargonSelect[c2]=myId;
  console.log(jargonSelect)
  if(jargonSelect.length>=5){
 
    //alert("check to see if its a winner");
    var row=new Array();
    var row2=new Array();
    var row3=new Array();
    var row4=new Array();
    var row5=new Array();
 
    var rowCount=0;
    var row2Count=0;
    var row3Count=0;
    var row4Count=0;
    var row5Count=0;
 
    var column=new Array();
    var column2=new Array();
    var column3=new Array();
    var column4=new Array();
    var column5=new Array();
 
    var colCount=0;
    var col2Count=0;
    var col3Count=0;
    var col4Count=0;
    var col5Count=0;
 
 
 
    var diagonal=new Array();
    var diagonal2=new Array();
    var diagCount=0;
    diag2Count=0;
    for(i=0;i<jargonSelect.length;++i){
 
        //Checking for diagonal match
 
        if(jargonSelect[i]=="5:1" || jargonSelect[i]=="4:2" || jargonSelect[i]=="3:3" || jargonSelect[i]=="2:4" || jargonSelect[i]=="1:5"){
            diagonal[diagCount]=jargonSelect[i];
            diagCount++;
            if(diagonal.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="1:1" || jargonSelect[i]=="2:2" || jargonSelect[i]=="3:3" || jargonSelect[i]=="4:4" || jargonSelect[i]=="5:5"){
            diagonal2[diag2Count]=jargonSelect[i];
            diag2Count++;
            if(diagonal2.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        //Checking for column match
 
        if(jargonSelect[i]=="1:1" || jargonSelect[i]=="2:1" || jargonSelect[i]=="3:1" || jargonSelect[i]=="4:1" || jargonSelect[i]=="5:1"){
            column[colCount]=jargonSelect[i];
            colCount++;
            if(column.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="1:2" || jargonSelect[i]=="2:2" || jargonSelect[i]=="3:2" || jargonSelect[i]=="4:2" || jargonSelect[i]=="5:2"){
            column2[col2Count]=jargonSelect[i];
            col2Count++;
            if(column2.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="1:3" || jargonSelect[i]=="2:3" || jargonSelect[i]=="3:3" || jargonSelect[i]=="4:3" || jargonSelect[i]=="5:3"){
            column3[col3Count]=jargonSelect[i];
            col3Count++;
            if(column3.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="1:4" || jargonSelect[i]=="2:4" || jargonSelect[i]=="3:4" || jargonSelect[i]=="4:4" || jargonSelect[i]=="5:4"){
            column4[col4Count]=jargonSelect[i];
            col4Count++;
            if(column4.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="1:5" || jargonSelect[i]=="2:5" || jargonSelect[i]=="3:5" || jargonSelect[i]=="4:5" || jargonSelect[i]=="5:5"){
            column5[col5Count]=jargonSelect[i];
            col5Count++;
            if(column5.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }

        //Checking for row match
 
        if(jargonSelect[i]=="1:1" || jargonSelect[i]=="1:2" || jargonSelect[i]=="1:3" || jargonSelect[i]=="1:4" || jargonSelect[i]=="1:5"){ 
            row[rowCount]=jargonSelect[i];
            rowCount++;
            if(row.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="2:1" || jargonSelect[i]=="2:2" || jargonSelect[i]=="2:3" || jargonSelect[i]=="2:4" || jargonSelect[i]=="2:5"){
            row2[row2Count]=jargonSelect[i];
            row2Count++;
            if(row2.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="3:1" || jargonSelect[i]=="3:2" || jargonSelect[i]=="3:3" || jargonSelect[i]=="3:4" || jargonSelect[i]=="3:5"){
            row3[row3Count]=jargonSelect[i];
            row3Count++;
            if(row3.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="4:1" || jargonSelect[i]=="4:2" || jargonSelect[i]=="4:3" || jargonSelect[i]=="4:4" || jargonSelect[i]=="4:5"){
            row4[row4Count]=jargonSelect[i];
            row4Count++;
            if(row4.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
 
        if(jargonSelect[i]=="5:1" || jargonSelect[i]=="5:2" || jargonSelect[i]=="5:3" || jargonSelect[i]=="5:4" || jargonSelect[i]=="5:5"){
            row5[row5Count]=jargonSelect[i];
            row5Count++;
            if(row5.length==5){
                alert("BINGO");
               window.location = window.location.origin + "/card"
            }
        }
    }
  }
 
  c2++;
 
}
 
 
 
var _id;
var _ff = 0;
var _rawId = null;
var _pages = 0;
var _chgFlag = null;
_cellZero = null;
 
var jargon = new Array( 'the notion of',
                        'commodity',
                        'cycles',
                        'friction',
                        'space',
                        'leverage',
                        'physics',
                        'directionally correct',
                        'crisp',
                        'mind share',
                        'channel',
                        'partner',
                        'drain',
                        'touch point',
                        'blocking and tackling',
                        'framework',
                        'multi-modal',
                        'enterprise',
                        'end of the day',
                        'cash flow positive',
                        'spot on',
                        'fierce',
                        'facts and data',
                        'domain',
                        'integration'
                        );

var _tableData = new Array();
 
function randArray() { 
  var count = 0;
  while (jargon.length != 0) { 
     var f = Math.round(Math.random() * (jargon.length - 1));
     _tableData[count]=jargon[f];
     jargon[f] = jargon[jargon.length - 1];
     jargon.length -= 1;
     count++;
  }
}
 
 
 
/*Called on page load*/
 
function loadJargon() {
    // only load if displaying the board
    if ($('.square').length == 0) return;
    randArray();
    count=0;
    for(i = 1; i < 6; ++i) {
        for(j = 1; j < 6; ++j) {
            cellId=i+":"+j;
            cell=document.getElementById(cellId);
            cell.appendChild(document.createTextNode(_tableData[count]));
            count++;
        }
    }
    // select the free square
    highlight($(".square.free"))
}