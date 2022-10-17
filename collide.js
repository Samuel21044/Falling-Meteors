export function collisionDetection(type, mouseX, mouseY, obj1, obj2) {
  switch(type) {
    case 1:
        return mouseX >= obj1.x && mouseX <= obj1.x + obj1.w && mouseY >= obj1.y && mouseY <= obj1.y + obj1.h;
      break;
    case 2:
        return obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x && obj1.y < obj2.y + obj2.h && obj1.y + obj1.h > obj2.y; 
      break;
  }
}