// Datum och tid
  function startDateTime(){
  var today = new Date();

  //  Visa datum
    var dd = today.getDate();

  // Visa månadens namn
    var month = new Array();

    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Mars";
    month[3] = "April";
    month[4] = "Maj";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Augusti";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "December";

    var monthnr = new Date();
    var monthname = month[monthnr.getMonth()];

    var yyyy = today.getFullYear();

    // Visa tid
     var h = today.getHours();
     var m = today.getMinutes();
     var s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);

   // Infoga allt och presentera i namngiven div
     document.getElementById('addDateTime').innerHTML =
     dd + " " + monthname + " " + yyyy + " | " + h + ":" + m;

     setTimeout(startDateTime, 500);

     function checkTime(i){
       if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
             return i;
      }
}
// ----------------------------------------------------------------------------------------------------------
