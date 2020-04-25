let c = document.querySelector(".time");
let d = document.querySelector(".date");

setInterval(()=>{
     let today = new Date();
     let hh= today.getHours();
     let mm= today.getMinutes();
     let ss= today.getSeconds();

     var am_pm ="AM";

     if(hh > 12){
      hh-=12;
      am_pm ="PM";
     }
     if (hh == 0){
      hh = 12;
     }

    // let date =today.toDateString();
//let date= today.toLocaleDateString();
    // let date= today.toLocaleString();
//let date= today.toLocaleTimeString();
// let date= today.getDay ();
     c.innerText =`${padding(hh)} : ${padding(mm)} : ${padding(ss)}  ${am_pm}`;
     d.innerText = date;
},1000);

function padding(n){
    return n.toString().padStart(2,"0")
}

