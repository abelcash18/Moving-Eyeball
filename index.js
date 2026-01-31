const ratio = 1
const eyeballs = document.querySelectorAll('.eyeball')
const handleEyesMove = (e) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const x = ((e.clientX - centerX) / centerX) * ratio
    const y = ((e.clientY - centerY) / centerY) * ratio
    if (!eyeballs || eyeballs.length === 0) return
    eyeballs.forEach(el => {
        const tx = `${x * 100}%`
        const ty = `${y * 100}%`
        // Preferred: broader support
        el.style.transform = `translate(${tx}, ${ty})`
        // Newer CSS `translate` property (space-separated values)
        el.style.translate = `${tx} ${ty}`
    })
}
document.addEventListener('mousemove', handleEyesMove)
