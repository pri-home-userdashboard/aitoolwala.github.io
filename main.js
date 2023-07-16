// window.addEventListener('click',function(e){
//     var a = e.buttons;
//    this.alert(a)
   
// })

let endDate = "16 July 2023 11:00 pm"

let countdown = document.querySelectorAll(".countdown");
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    countdown[0].innerHTML = Math.floor(diff / 3600 )% 24;
    countdown[1].innerHTML = Math.floor(diff / 60 )% 60 
    countdown[2].innerHTML = Math.floor(diff )% 60
    countdown[3].innerHTML = Math.floor(diff / 3600 )% 24;
    countdown[4].innerHTML = Math.floor(diff / 60 )% 60 
    countdown[5].innerHTML = Math.floor(diff )% 60
}


setInterval(clock,1000)

let q1 = document.querySelectorAll('.q1');
let ans = document.querySelectorAll('.ans')
let downAroww = document.querySelectorAll('.fa-angle-down');

q1[0].onclick = ()=>{
ans[0].classList.toggle('collapse')
downAroww[0].classList.toggle('rotate')
}
q1[1].onclick = ()=>{
    ans[1].classList.toggle('collapse')
downAroww[1].classList.toggle('rotate')

    }
    q1[2].onclick = ()=>{
        ans[2].classList.toggle('collapse')
downAroww[2].classList.toggle('rotate')

        }
        q1[3].onclick = ()=>{
            ans[3].classList.toggle('collapse')
downAroww[3].classList.toggle('rotate')

            }
            q1[4].onclick = ()=>{
                ans[4].classList.toggle('collapse')
downAroww[4].classList.toggle('rotate')

                }
                q1[5].onclick = ()=>{
                    ans[5].classList.toggle('collapse')
downAroww[5].classList.toggle('rotate')

                    }
