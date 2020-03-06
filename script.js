
alert("Its a Beta version You can only type 4516 or 4527 those are my old school friends School No. :)) ")

function hit(){
    const container=document.querySelector("#container")
    container.style.display="grid"
    let input=document.getElementById("inpt").value
    
   
    if(input==4516){
        let ugur= document.querySelector("#container")


      const welcome= document.createElement("h3")
        welcome.id="welcome16"
       const yaz= welcome.innerText="WELCOME  UGUR"

       let bos=document.createElement("p")
       bos.innerHtml="Lütfen yeni bir girdi icin sayfayi yenile devrem"

      
      
      let video=document.createElement("video")
        video.id="bingol"
        video.setAttribute("src","bingölshort.mp4")
       
        video.play();
        ugur.appendChild(welcome)
        
        ugur.appendChild(video)
        ugur.appendChild(bos)
        

    }
    if(input==4527){
    let yasin = document.querySelector("#container")


    const welcome27 = document.createElement("h3")
    welcome27.id = "welcome27"
    welcome27.innerText = "WELCOME  YASIN"


    yasin.appendChild(welcome27)
    let video27 = document.createElement("video")
    video27.id = "Lion"
    video27.setAttribute("src", "Lion.mp4")
    yasin.appendChild(video27)
    video27.play();

}}


       
