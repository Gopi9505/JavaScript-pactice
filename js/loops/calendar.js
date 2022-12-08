
for(var month=1;month<=12;month++){
  for(var day=1;day<=31;day++){
    var mon;
    var days;
    switch(month){
      case 1: mon = "jan";
        days = 31;
        break;
      case 2: mon = "feb"; 
        days = 28;
        break;
      case 3: mon = "mar";
        days = 31;
        break;
      case 4: mon = "apr";
        days = 30;
        break;
      case 5: mon = "may"; 
        days = 31;
        break;
      case 6: mon = "jun";
        days = 30;
        break;
      case 7: mon = "jul"; 
        days = 31;
        break;
      case 8: mon = "aug"; 
        days = 31;
        break;
      case 9: mon = "sep"; 
        days = 30;
        break;
      case 10: mon = "oct"; 
        days = 31;
        break;
      case 11: mon = "nov";
        days = 30;
        break;
      case 12: mon = "dec"; 
        days = 31;
        break;
      default: console.log("ERROR");
    }

    if(month==2 && day==29){
      break;
    }
    else {
      if(month==4 || month==6 || month==9 || month==11){
        if(day == 31){
          break;
        }
      }
    }
    console.log(mon,"  ",day);
  }
}