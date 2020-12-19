function isColllision(t1,t2) {
    if(t1.x-t2.x<=t1.width/2+t2.width/2
      && t2.x-t1.x<=t1.width/2+t2.width/2
      && t1.y-t2.y<=t1.height/2+t2.height/2&&
      t2.y-t1.y<=t1.height/2+t2.height/2)
    {
  
         return true;
    }
    else
    {
  
      return false;
    }
  
  
  
  
  
  
    
  }