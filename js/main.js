let wallSecond = document.querySelector(".wall .second");
let wallMinute = document.querySelector(".wall .minute");
let wallHour = document.querySelector(".wall .hour");
let digitalSecond = document.querySelector(".digital .second");
let digitalMinute = document.querySelector(".digital .minute");
let digitalHour = document.querySelector(".digital .hour");

setInterval(() => {
   let dateNow = new Date() ;

   if (dateNow.getHours() > 12) {
      wallHour.style.transform = ` translateX(-50%) rotate(${((dateNow.getHours()-12)+(dateNow.getMinutes()/60))*360/12}deg) `
   }else {
      wallHour.style.transform = ` translateX(-50%) rotate(${(dateNow.getHours()+(dateNow.getMinutes()/60))*360/12}deg) `
   }
   wallMinute.style.transform = ` translateX(-50%) rotate(${dateNow.getMinutes()*360/60}deg) `
   wallSecond.style.transform = ` translateX(-50%) rotate(${dateNow.getSeconds()*360/60}deg) `

   if ( dateNow.getHours() < 10) {
      digitalHour.innerHTML = ` 0${dateNow.getHours()} ` ;
   }else if (dateNow.getHours() > 12) {
      digitalHour.innerHTML = dateNow.getHours() - 12 ;
   } else {
      digitalHour.innerHTML = dateNow.getHours() ;
   }
   if ( dateNow.getMinutes() < 10) {
      digitalMinute.innerHTML = ` 0${dateNow.getMinutes()} ` ;
   }else {
      digitalMinute.innerHTML = dateNow.getMinutes() ;
   }
   if ( dateNow.getSeconds() < 10) {
      digitalSecond.innerHTML = ` 0${dateNow.getSeconds()} ` ;
   }else {
      digitalSecond.innerHTML = dateNow.getSeconds() ;
   }

}, 1000);



















