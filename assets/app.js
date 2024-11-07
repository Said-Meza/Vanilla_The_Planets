

const $btn_overview =document.getElementById("btn_overview"),
 $btn_structure =document.getElementById("btn_structure"),
 $btn_surface =document.getElementById("btn_surface"),
    $img1=document.getElementById("img1"),
    $img2=document.getElementById("img2"),
    $img3=document.getElementById("img3"),
    $paragraph1=document.getElementById("paragraph1"),
    $paragraph2=document.getElementById("paragraph2"),
    $paragraph3=document.getElementById("paragraph3"),
    $wiki1=document.getElementById("wiki"),
    $wiki2=document.getElementById("wiki2"),
    $wiki3=document.getElementById("wiki3"),
    $rotation=document.getElementById("rotation"),
    $revolution=document.getElementById("revolution"),
    $radius=document.getElementById("radius"),
    $temp=document.getElementById("temp"),
    $title=document.getElementById("title");

   
    apistart();
    
    window.addEventListener("hashchange",apistart);
    
    function apistart(){
        const {hash}=location,
        param = hash.substring(1)
       const [key,value] = param.split("=");
        
        fetch("../db.json")
        .then(data=>data.ok?data.json():Promise.reject({msg:"hubo un error",code:"404"}))
        .then(json=>{
            let start = json[value];
            $title.textContent=start.name;
            $img1.src=start.images.planet;
            $img2.src=start.images.internal;
            $img3.src=start.images.geology;
            $paragraph1.textContent=start.overview.content;
            $paragraph2.textContent=start.structure.content;
            $paragraph3.textContent=start.geology.content;
            $wiki1.href=start.overview.source;
            $wiki2.href=start.structure.source;
            $wiki3.href=start.geology.source;
            $rotation.textContent=start.rotation;
            $revolution.textContent=start.revolution;
            $radius.textContent=start.radius;
            $temp.textContent=start.temperature;
            console.log(json[value])
        })
        .catch(err=>console.log(err))
    }

document.addEventListener("click",(e)=>{
    
    if(e.target.dataset.menu === "overview"){
        e.preventDefault()
        $btn_overview.classList.add("active")
        $btn_structure.classList.remove("active")
        $btn_surface.classList.remove("active")
        $img1.style.display="block"
        $img2.style.display="none"
        $img3.style.display="none"
        $paragraph1.style.display="block"
        $paragraph2.style.display="none"
        $paragraph3.style.display="none"
        $wiki1.style.display="block"
        $wiki2.style.display="none"
        $wiki3.style.display="none"
        

    }
    if(e.target.dataset.menu === "structure"){
        e.preventDefault()
        $btn_structure.classList.add("active")
        $btn_overview.classList.remove("active")
        $btn_surface.classList.remove("active")
        $img2.style.display="block"
        $img1.style.display="none"
        $img3.style.display="none"
        $paragraph2.style.display="block"
        $paragraph1.style.display="none"
        $paragraph3.style.display="none"
        $wiki2.style.display="block"
        $wiki1.style.display="none"
        $wiki3.style.display="none"
        
    }
    if(e.target.dataset.menu === "surface"){
        e.preventDefault()
        $btn_surface.classList.add("active")
        $btn_structure.classList.remove("active")
        $btn_overview.classList.remove("active")
        $img1.style.display="block"
        $img3.style.display="block"
        $img2.style.display="none"
        $paragraph3.style.display="block"
        $paragraph1.style.display="none"
        $paragraph2.style.display="none"
        $wiki1.style.display="none"
        $wiki2.style.display="none"
        $wiki3.style.display="block"
    }

})