 var endtime = new Date(), endseconds = endtime.getTime() + 6000 * 1000;
 var h = m = s = 0;
 var id = setInterval(seckill, 1000);
      function seckill() {
        var nowtime = new Date();
        var remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
        if (remaining > 0) {
          h = parseInt((remaining / 3600) % 24);  
          m = parseInt((remaining / 60) % 60);    
          s = parseInt(remaining % 60);          
		  
          h = h < 10 ? '0' + h : h;
          m = m < 10 ? '0' + m : m;
          s = s < 10 ? '0' + s : s;
        } else {
          clearInterval(id);
           h = m = s = '00';
        }
        document.getElementById('h').innerHTML = h;
        document.getElementById('m').innerHTML = m;
        document.getElementById('s').innerHTML = s;
      }