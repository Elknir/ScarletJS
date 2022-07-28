//import every images
import platform from '../Assests/PixelPlatform.png'
import hills from '../Assests/PixelHills.png'
import background from '../Assests/PixelBackground.png'
import scarlet from '../Assests/scarlet.png'
import flag from '../Assests/Flag.png'



//Canvas Properties
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.2

//Player Properties
class Player {
    constructor(){
        //Start Position
        this.position = {
            x: 100,
            y: 300
        }
        //Start Velocity
        this.velocity = {
            x: 0,
            y: 0
        }

        //Player Size
        this.width = 64
        this.height = 64
        

        //Player Speed
        this.speed = 7

        this.image = createImage(scarlet)
    }

    draw(){
        //Player Image
        c.drawImage(this.image, this.position.x, this.position.y , this.width, this.height)
    }

    update(){
        this.position.x += this.velocity.x
        //player falling
        this.position.y += this.velocity.y
        this.draw()

        //If player not touching the ground = fall
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            //Increse velocity w/ time    
            this.velocity.y += gravity
    }
}


//Platforms
class Platform{
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }

        //Get platform image
        this.image = image


        this.width = image.width
        this.height = image.height

        
    }


    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//Background
class GenericObject{
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }

        //Get image
        this.image = image


        this.width = image.width
        this.height = image.height

        
    }


    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//image
function createImage(imageSrc){
    const image = new Image() 
    image.src = imageSrc
    return image
}



//Init Player 
let player = new Player()
//Init Platforms
let platformImage = createImage(platform)
let platforms = []

let genericObjects = []



//All the keys
const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    },
}


//How far screen has scrolled
let scrollOffset = 0

function restart(){
    //Init Player 
    player = new Player()
    platformImage = createImage(platform)
    //Init Platforms
    platforms = 
    [
        new Platform({x: 0, y: 475, image: platformImage}),
        new Platform({x: platformImage.width, y: 475, image: platformImage }), 
        new Platform({x: platformImage.width * 2 + 100, y: 475, image: platformImage }),
        new Platform({x: platformImage.width * 3 + 400, y: 350, image: platformImage }),
        new Platform({x: platformImage.width * 3 + 400, y: 235, image: platformImage }),
        new Platform({x: 3100 , y: -10, image: createImage(flag) }),
        new Platform({x: platformImage.width * 5 , y: 120, image: platformImage }),
        new Platform({x: platformImage.width/2 , y: 350, image: platformImage })
    ]




    genericObjects = [
        new GenericObject({
        x: -500,
        y: -1,
        image: createImage(background)
    }),
        new GenericObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
    ]

    //How far screen has scrolled
    scrollOffset = 0
}



//Update like function
function animate(){
    //Calls function again and again  
    requestAnimationFrame(animate)

    //Clears old player position 
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width, canvas.height)

    //Draw Background
    genericObjects.forEach(genericObjects =>{
        genericObjects.draw()
    })

    //Draw Platform
    platforms.forEach((platform) => {platform.draw()
    })
    
    //Draw player after platforms to make him infront
    player.update()

    if((keys.right.pressed && player.position.x < 600) || ((keys.right.pressed && scrollOffset === 2500))){
        player.velocity.x = player.speed
        
    }
    else if((keys.left.pressed && player.position.x > 300  || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0))){
        player.velocity.x = -player.speed
    }
    else{
        player.velocity.x = 0

        if(keys.right.pressed && scrollOffset < 2500){
            platforms.forEach((platform) => {platform.position.x -= player.speed})
            scrollOffset += player.speed
            genericObjects.forEach((genericObject) => {genericObject.position.x -= player.speed * 0.4})
        }

        if(keys.left.pressed && scrollOffset > 0){
            platforms.forEach((platform) => {platform.position.x += player.speed})
            scrollOffset -= player.speed
            genericObjects.forEach((genericObject) => {genericObject.position.x += player.speed * 0.4})
        }
    }


    //Win condition
    if(scrollOffset > 2000){
        console.log('you win')
    }

    //Loose condition
    if(player.position.y > canvas.height){
        restart()
    }

    //Platform collision detection

    //1. Stops player when height > platform
    //2. when falling
    //3. only when same x position as the platform
    platforms.forEach((platform) => {if(player.position.y + player.height <= platform.position.y 
        && player.position.y + player.height + player.velocity.y >= platform.position.y
        && player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width
    
    ){
        
            player.velocity.y = 0
    }
    })


    
}
restart()
animate()



//When a key is pressed
addEventListener('keydown', ({keyCode}) => {
    //console.log(keyCode)
    switch (keyCode){
        //Q
        case 81:
            keys.left.pressed = true
            break
        //D
        case 68:
            keys.right.pressed = true
            break

        //Space
        case 32:
            console.log('up')
            if(player.velocity.y == 0){
                player.velocity.y -= 10
            }
            break
    }
})

//When a key is released
addEventListener('keyup', ({keyCode}) => {
    switch (keyCode){
        //Q
        case 81:
            keys.left.pressed = false
            break
        //D
        case 68:
            keys.right.pressed = false
            break
    }
})