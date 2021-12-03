function yt_thumb() 
{  
  var link = document.getElementById("thumb_ip").value;
  var id=link.substring(link.length-11,link.length);
  document.getElementById("thumb_a").innerHTML =  "<img src='http://img.youtube.com/vi/" + id + "/hqdefault.jpg' height='200px'><br/><a href='http://img.youtube.com/vi/" + id + "/hqdefault.jpg'target='_blank'>DOWNLOAD SD</a>";
  document.getElementById("thumb_b").innerHTML = "<a href='http://img.youtube.com/vi/" + id + "/maxresdefault.jpg'target='_blank'>DOWNLOAD HD</a>";  
  
}
function clear_it() 
{  
  document.getElementById("thumb_a").innerHTML = " ";
  document.getElementById("thumb_b").innerHTML = " ";  
}
