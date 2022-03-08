/* typing animation*/

var typed = new Typed(".typing", {
    strings:["","passionate Front-End", "graduate of a Front-End course"],
    typeSpeed:100,
    BackSpeed: 60,
    loop: true
})

/* ASIDE*/

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++){
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function(){
              for(let j=0; j<totalNavList;j++) {
                  navList[j].querySelector("a").classList.remove("active")
              }
             this.classList.add("active")
             showSection(this);
          })
      }

        function showSection(element){
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active");
            console.log(2);
        }