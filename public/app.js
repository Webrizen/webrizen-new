// Make It A Page(Remove .html):
// window.onload = function() {
//     var url = window.location.href;

//     if (url.endsWith('.html')) {
//         url = url.slice(0, -5);
//         window.history.pushState({}, null, url);
//     }
// };

setTimeout(() => {
    document.getElementById('loading').style.opacity="0";
}, 4000);
setTimeout(() => {
    document.getElementById('loading').style.display="none";
}, 4500);

const handleMenu = () =>{
    var menu = document.getElementById('menubox');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
}

document.getElementById('menu').addEventListener("click", handleMenu);

  
  //Share:
  function shareWebsite() {
    const shareTitle = "Check out this awesome website!";
    const shareUrl = window.location.href;
    const shareText = "I think you'll really like it!";
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: shareUrl
    })
      .then(() => console.log('Successful share'))
      .catch((error) => alert('Error sharing', error));
  }
  
  
  
  
  const cpuUsage = performance.now();
  
  if (cpuUsage <= 50) {
    document.getElementById('sys-stats').innerHTML = "All systems normal."
  } else if (cpuUsage > 50 && cpuUsage <= 80) {
    document.getElementById('sys-stats').innerHTML = "All systems Moderate."
  } else {
    document.getElementById('sys-stats').innerHTML = "All systems High."
  }
  
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => document.getElementById('sys-ip').innerHTML = data.ip)
    .catch(error => console.error(error));
  
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function(battery) {
        document.getElementById('sys-battery').innerHTML =  battery.level * 100;
      });
    } else {
      document.getElementById('sys-battery').innerHTML="Battery API not supported";
    }
    
    //Select Search:
    document.addEventListener("keydown", function(event) {
      if (event.ctrlKey && event.key === "z") {
        document.getElementById("search-input").select();
      }
    });


    //Logo:
    function LogoSwitch(){
      window.location.href="/";
    }

    document.getElementById('logo').addEventListener("click", LogoSwitch);

    //Switch networks:
    function Github(){
      window.location.href="https://github.com/arshcode99";
    }

    document.getElementById('github').addEventListener("click", Github);

    function Instagram(){
      window.location.href="https://www.instagram.com/arsh.code/";
    }

    document.getElementById('instagram').addEventListener("click", Instagram);

    function whatsapp(){
      window.location.href="https://wa.me/+918761820422";
    }

    document.getElementById('whatsapp').addEventListener("click", whatsapp);

    function NewChat(){
      window.location.href="https://wa.me/+918761820422";
    }

    document.getElementById('new-chat').addEventListener("click", NewChat);

    function Facebook(){
      alert("No Link available");
    }

    document.getElementById('facebook').addEventListener("click", Facebook);