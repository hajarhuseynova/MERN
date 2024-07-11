const p1=document.querySelector(".descAbout1")
const p2=document.querySelector(".descAbout2")
const a1=document.querySelector(".btn-1")
const a2=document.querySelector(".btn-2")

export const bindAboutPart=(data)=>{
    console.log(data)
    p1.textContent=data.desc1
    p2.textContent=data.desc2
    a1.textContent=data.a1
    a2.textContent=data.a2
}