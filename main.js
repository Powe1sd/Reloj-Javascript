
window.onload = function() {
    const hr = document.getElementById("hr");
    const mt = document.getElementById("mt");
    const sd = document.getElementById("sd");
    const tm = document.getElementById("tm");
    
    setInterval(() => {
        const time = new Date();
        let h = time.getHours(),
            m = time.getMinutes(),
            s = time.getSeconds();
    
        if (h >= 12) {
            h = h - 12;
            tm.textContent = "PM";
        } else {
            tm.textContent = "AM";
        }
    
        if (h == 0) {
            h = 12;
        }
    
        if (h <= 9) hr.textContent = `0${h}:`;
        else hr.textContent = `${h}:`;
    
        if (m <= 9) mt.textContent = `0${m}:`;
        else mt.textContent = `${m}:`;
    
        if (s <= 9) sd.textContent = `0${s}`;
        else sd.textContent = s;
    
    }, 1000);
      // aquí va todo el código JavaScript
  };








