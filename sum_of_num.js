in1=document.createElement("input")
in1.type="number"
in1.id="num1"
in1.style.width="100px"
in1.value=0
in1.style.marginBottom="10px"
document.body.append(in1)
br1 = document.createElement("br");
document.body.append(br1)

in2=document.createElement("input")
in2.type="number"
in2.id="num2"
in2.value=0
in2.style.marginBottom="10px"
in2.style.width="100px"
document.body.append(in2)
document.body.append(document.createElement("br"))

out=document.createElement("button")
out.id="sum"
out.innerText="Add_Numbers"
out.style.marginBottom="10px"

document.body.append(out)
document.body.append(document.createElement("br"))


ans=document.createElement("input")
ans.type="text"
ans.id="ans"
ans.style.width="100px"
document.body.append(ans)
ans.placeholder="Result"

out.addEventListener("click",()=>{
    let num1=in1.value
    let num2=in2.value
    console.log(+num1 + +num2)
    ans.value=+num1 + +num2
    ans.style.border="2px solid green"
})

in1.addEventListener("focus",()=>{
    in1.style.border="2px solid red"
})
in2.addEventListener("focus",()=>{
    in2.style.border="2px solid red"
})
in1.addEventListener("blur",()=>{
    in1.style.border="2px solid black"
})
in2.addEventListener("blur",()=>{
    in2.style.border="2px solid black"
})