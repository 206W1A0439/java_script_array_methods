
document.body.style.backgroundColor = "lightblue";
let heading = document.createElement("h1");
heading.innerText = "Water Reminder";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
heading.style.color = "darkblue";

document.body.append(heading);


let start_time=new Date();
start_time.setHours(7,0,0) 
let end_time=new Date();
end_time.setHours(20,0,0)

let Int=setInterval(()=>{
    let current_time=new Date();
    let current_hour=current_time.getHours();
    
    if (current_hour >=start_time.getHours() && current_hour < end_time.getHours()){
        
        alert("Time to drink water!")
        console.log("Drink Water");
        

    }
},30*60*1000)




// let Int=setInterval(()=>{
//     console.log("Drink Water")
//     alert("Time to drink water! Stay hydrated!")
// },30*60*1000)

// setTimeout(()=>{
//     clearInterval(Int)
// },8*60*60*1000)