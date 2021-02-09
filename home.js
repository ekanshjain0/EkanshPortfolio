
    const cursor=document.querySelector('.cursor');
    document.addEventListener('mousemove',e=>{
        cursor.setAttribute("style","top: "+(e.pageY -40)+"px; left: "+(e.pageX-40)+"px;")
    })

    document.addEventListener('click',()=>{
        cursor.classList.add("expand");
        setTimeout(()=>{
            cursor.classList.remove("expand");
        },500)
    })
        document.querySelector('body').addEventListener('mousemove',eyeball);
        function eyeball(){
            var eye=document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x =(eye.getBoundingClientRect().left)+(eye.clientWidth / 2);
                let y =(eye.getBoundingClientRect().top)+(eye.clientHeight / 2);
                let radian = Math.atan2(event.pageX - x, event.pageY -y);
                let rot=(radian*(180 / Math.PI) * -1)+270;
                eye.style.transform="rotate("+rot+"deg)";
                
            })
        }