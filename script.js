const endDate = "29 August 2025 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//const clock = () =>{

//}

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
// convert into days

}
//initial call
clock()
/*
  1 day = 24hrs
  1 hr = 60 mins
  60 mins = 3600sec
*/

 setInterval (
   () => {
      clock()
   },
   1000
 )