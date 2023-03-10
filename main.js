'use strict';
function copy(elem){
  if(navigator.clipboard){
    navigator.clipboard.writeText(elem.value).then(e=>alert("copyed!"));
  }else
    alert("faied copy...");
  
}
function priUni({n,text}){
  let data="";
  data+=text;
  for(let i=0;i!==n;i++){
    const point=Math.floor(data.length*Math.random());
    const code=Math.floor((879-768)*Math.random()+768);
    data=data.slice(0,point)+String.fromCodePoint(code)+data.slice(point);
  }
  return data;
}
document.getElementById("main-inputs").addEventListener("submit",e=>{
  e.preventDefault();
  const result=priUni({
    n:parseInt(document.getElementById("length").value),
    text:document.getElementById("text").value,
  });
  document.getElementById("text-result").value=result;
  document.getElementById("sum-length").textContent=result.length;
  document.getElementById("utf8-byte").textContent=new Blob([result],{
    type:"text/plain;charset=utf-8"
  }).size;
  document.getElementById("utf16-byte").textContent=new Blob([result],{
    type:"text/plain;charset=utf-16"
  }).size;
  document.getElementById("utf32-byte").textContent=new Blob([result],{
    type:"text/plain;charset=UTF-32"
  }).size;
  document.getElementById("jis-byte").textContent=new Blob([result],{
    type:"text/plain;charset=ISO-2022-JP"
  }).size;
});
document.getElementById("copy").addEventListener("click",e=>{
  copy(document.getElementById("text-result"));
});