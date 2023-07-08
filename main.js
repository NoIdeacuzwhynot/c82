var mouseEvent="";
var lastposition_x;
var lastposition_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline = 2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") 
    { ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = widthofline;
        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + lastposition_x + "y = " + lastposition_y); 
        ctx.moveTo(lastposition_x, lastposition_y);
        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); 
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke();}
        lastposition_x = current_position_of_mouse_x; 
        lastposition_y = current_position_of_mouse_y; }
