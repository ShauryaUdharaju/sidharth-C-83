

var last_position_of_X
var last_position_of_Y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"

var width_of_the_line=2
var width=screen.width
var new_width=screen.width-70
var height=screen.height
var new_height=screen.height-300
if(width<992)
{
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", mytouch_start)
function mytouch_start(e)
{
last_position_of_X=e.touches[0].clientX-canvas.offsetLeft
last_position_of_Y=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove", mytouchmove_Event)
function mytouchmove_Event(e)
{
current_position_of_touch_X=e.touches[0].clientX-canvas.offsetLeft
current_position_of_touch_Y=e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_the_line
    ctx.moveTo(last_position_of_X, last_position_of_Y)
    ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y)
    ctx.stroke()

last_position_of_X=current_position_of_touch_X
last_position_of_Y=current_position_of_touch_Y
}

function clear_area(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}