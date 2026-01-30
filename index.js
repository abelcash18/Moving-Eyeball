const ratio =1
const eyeballs = document.querySelectorAll('.eyeball')
const handleEyesMove = (e)=>{
    const centerX = window.innerWidth/2
    const centerY = window.innerHeight/2
    const x =((e.clientX - centerX)/ centerX)* ratio
    const y = ((e.clientY - centerY)/ centerY)* ratio
    eyeballs.forEach(el =>{
        el.style.translate = `${x * 100}%${y * 100}%`
    })
}
document.addEventListener('mousemove', handleEyesMove)