

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