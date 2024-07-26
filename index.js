const {log} = console
function rainingAnimation(height,width,runTimeInSeconds,speedMultiplier,imageQuantityMultiplier,delayInMilliseconds,...images){
    if(typeof height === 'number' && typeof width === 'number' && typeof runTimeInSeconds === 'number' && typeof speedMultiplier === 'number' && typeof imageQuantityMultiplier === 'number' && typeof delayInMilliseconds === 'number' && images.length && images.map(a => typeof a === 'string').reduce((a,b) => a && b)){
        if(imageQuantityMultiplier != Math.floor(imageQuantityMultiplier)){
            return 'Image quantity multiplier must be a whole number'
        }
        document.body.style.cursor = 'none'
        setTimeout(() => {
            for(let i = 0; i<Math.floor(Math.random()*imageQuantityMultiplier); i++){
                let defaultInterval = 1000
                let runTime = runTimeInSeconds * 1000
                let int = setInterval(() => {
                    let randomImage = images[Math.floor(Math.random() * images.length)]
                    let randomX = Math.floor(Math.random() * innerWidth)
                    let imageElement = document.createElement('img')
                    let sizeDeviation = Math.min(Math.floor(Math.random()*10+6)/10,1)
                    imageElement.height = height*sizeDeviation
                    imageElement.width = width*sizeDeviation
                    imageElement.src = randomImage
                    imageElement.style.position = 'absolute'
                    imageElement.style.left = randomX
                    document.body.appendChild(imageElement)
                    let innerInterval = setInterval(() => {
                        let top = +(imageElement.style.top.replace('px',''))
                        imageElement.style.top = (top + innerHeight/10) + 'px'
                        if(top >= innerHeight){
                            clearInterval(innerInterval)
                            document.body.removeChild(imageElement)
                        }
                    },defaultInterval/(Math.floor(Math.random()*15))/speedMultiplier)
                },defaultInterval/(Math.floor(Math.random()*5*speedMultiplier)))
                document.body.style.overflow = 'hidden'
                setTimeout(() =>{
                    document.body.style.cursor = ''
                    document.body.style.overflow = ''
                    clearInterval(int)
                },runTime)
            }
        },delayInMilliseconds)
        return 'Animation successfully ran'
    }
    return 'Enter proper variables'
}