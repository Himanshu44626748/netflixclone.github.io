var acc = document.getElementsByClassName("faq");
var i;
for(i=0;i<acc.length;i++)
{
    acc[i].addEventListener("click", function(){
        var pannel = this.nextElementSibling;
        var c = this.children;
        if(pannel.style.display == "none" && c[1].style.display == "none")
        {
            pannel.style.display = "block";
            c[0].style.display = "none";
            c[1].style.display = "block";
        }
        else{
             pannel.style.display = "none";
             c[0].style.display = "block";
             c[1].style.display = "none";
        }
    });
}