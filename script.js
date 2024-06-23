const buttons = document.querySelectorAll(".car-name-btn");
const data = document.querySelectorAll("td");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(button => {
      button.classList.remove("selected")
    })
    button.classList.toggle("selected");
  })
})
function changeImg(imgName) {
  const img = document.getElementById("car-pic")
  img.src = imgName;
}
let i=0;
function changeData(car) {
  data.forEach(data => {
    if(car=='audi'){
      data=detailaudi[i];
    }
    i=i+1;
  })
}
const detailaudi=["Model","2036","Mark","Ali","Year","2017","Doors","4/5"]
const detailcamry=["Model","2016","Mark","Ali","Year","2017","Doors","4/5"]
const detailbmw=["Model","2016","Mark","Ali","Year","2017","Doors","4/5"]
const detailmercedes=["Model","2016","Mark","Ali","Year","2017","Doors","4/5"]

const hamburger=document.querySelector(".hamburger");
const navItems=document.querySelector(".nav-links")
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
})
const icon1=document.querySelectorAll(".icon");
const xyz=document.querySelector(".xyz")
icon1.forEach(icon => {
  icon.addEventListener("click",()=>{
    xyz.classList.toggle("active")
  })
})

