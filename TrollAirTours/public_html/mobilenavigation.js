  function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }    
    
    
  function toggle_visibilitydual(id,id2) {
       var e = document.getElementById(id);
       var f = document.getElementById(id2);
       e.style.display = 'none';
       f.style.display = 'block';
  }   
  
  function showmenuopen() {
       var e = document.getElementById('opennav');
       var f = document.getElementById('closenav');
       if(e.style.display == 'none')
          e.style.display = 'block';
          f.style.display = 'none';
       
    }    
    
     function imagebig(image) {
       var e = document.getElementById('overlay');
       document.getElementById("imgoverlay").src=image;
       e.style.display = 'block';
       
    }     
     function closeimg() {
       var e = document.getElementById('overlay'); 
       e.style.display = 'none';
       
    }
    
    function toggle_visibilityQuad(id,id2,id3,id4) {
       var e = document.getElementById(id);
       var f = document.getElementById(id2);
       var g = document.getElementById(id3);
       var h = document.getElementById(id4);
       e.style.display = 'block';
       f.style.display = 'none';
       g.style.display = 'none';
       h.style.display = 'none';
  }   
