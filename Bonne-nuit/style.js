const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('#in');
const inputElmm = document.querySelector('#inn');

// Clik do botão enter
function importar(){
   document.getElementById("msgImporta").style.display = 'block';
   document.getElementById("imgPhotoo").style.filter = 'blur(9px)';
   document.getElementById("imgPhotoo").style.transform = 'scale(1.1)';
   document.getElementById("beach").style.filter = 'blur(9px)';
   document.getElementById("ani").style.filter = 'blur(9px)';
   document.getElementById("natu").style.filter = 'blur(9px)';
   document.getElementById("per").style.filter = 'blur(9px)';
   document.getElementById("uni").style.filter = 'blur(9px)';
   document.getElementById("myDropdown").style.filter = 'blur(9px)';
   document.getElementById("myDropdown").style.transform = 'scale(1.1)';
}
function importarr(){
   document.getElementById("msgImporta").style.display = 'none';
   document.getElementById("imgPhotoo").style.filter = 'none';
   document.getElementById("imgPhotoo").style.transform = 'none';
   document.getElementById("myDropdown").style.filter = 'none';
   document.getElementById("myDropdown").style.transform = 'none';
   document.getElementById("beach").style.filter = 'blur(5px)';
   document.getElementById("ani").style.filter = 'blur(3px)';
   document.getElementById("natu").style.filter = 'blur(3px)';
   document.getElementById("per").style.filter = 'blur(3px)';
   document.getElementById("uni").style.filter = 'blur(3px)';
}

// Criando os novos jogadores
submitBtn.addEventListener('click', ()=>{
    var login = document.getElementById("in").value;
    var senha = document.getElementById("inn").value;
    document.getElementById("myDropdown").style.display = "none";
    let userInput = inputElm.value;

 
    

   
    inputElm.value = '';
    let userInputt = inputElmm.value;

 
    

   
    inputElmm.value = '';
 if( senha == "https://www.youtube.com/"){
    let temp = `<div class="out-msg" onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="https://www.youtube.com/s/desktop/9318de79/img/favicon_144x144.png" class="youtube">
    <a draggable="false" href="https://www.youtube.com/"  rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
    </div>
    <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.youtube.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
    

    chatArea.insertAdjacentHTML("beforeend", temp);
 } else if( senha == "https://web.whatsapp.com/"){
    let temp = `<div class="out-msg" onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="whats.png"  class="youtube">
    <a draggable="false" href="https://web.whatsapp.com/"  rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
    </div>
    <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://web.whatsapp.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
    

    chatArea.insertAdjacentHTML("beforeend", temp);
 }else if(senha == "https://app.memrise.com/learn" || senha == "https://app.memrise.com/dashboard/scenarios"){
    let temp = `<div class="out-msg" onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="https://app.memrise.com/favicons/apple-touch-new-logo-icon.png" class="youtube">
    <a draggable="false" href="https://app.memrise.com/learn"  rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
    </div>
    <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://app.memrise.com/learn</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
    

    chatArea.insertAdjacentHTML("beforeend", temp);
 }else if(senha == "https://outlook.live.com/mail/0/"){
    let temp = `<div class="out-msg" onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="https://res.cdn.office.net/assets/mail/pwa/v1/pngs/apple-touch-icon.png" class="youtube">
    <a draggable="false" href="https://outlook.live.com/mail/0/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
    </div>
    <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://outlook.live.com/mail/0/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
    

    chatArea.insertAdjacentHTML("beforeend", temp);
 } else if(senha == "https://mail.google.com/mail/u/0/"){
    let temp = `<div class="out-msg"  onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="https://mail.google.com/favicon.ico" class="youtube">
    <a draggable="false" href="https://mail.google.com/mail/u/0/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
    </div>
    <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://mail.google.com/mail/u/0/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
    

    chatArea.insertAdjacentHTML("beforeend", temp);
 } else if( senha == "https://github.com/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://github.githubassets.com/apple-touch-icon-144x144.png" class="youtube">
   <a draggable="false" href="https://github.com/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://github.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.facebook.com/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/hsAgIHTE80C.png" class="youtube">
   <a draggable="false" href="https://www.facebook.com/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.facebook.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://seguro.catho.com.br/signin/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://assets.catho.com.br/ico/favicon.ico" class="youtube">
   <a draggable="false" href="https://seguro.catho.com.br/signin/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://seguro.catho.com.br/signin/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://portal.gupy.io/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://portal.gupy.io/apple-touch-icon.png" class="youtube">
   <a draggable="false" href="https://portal.gupy.io/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://portal.gupy.io/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.infojobs.com.br/Candidate/"){
   let temp = `<div class="out-msg"  onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://www.infojobs.com.br/favicon.ico" class="youtube">
   <a draggable="false" href="https://www.infojobs.com.br/Candidate/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.infojobs.com.br/Candidate/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.microsoft.com/pt-br/microsoft-teams/log-in"){
   let temp = `<div class="out-msg"  onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://www.microsoft.com/favicon.ico" class="youtube">
   <a draggable="false" href="https://www.microsoft.com/pt-br/microsoft-teams/log-in" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.microsoft.com/pt-br/microsoft-teams/log-in</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://twitter.com/login?lang=en-gb"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png"class="youtube">
   <a draggable="false" href="https://twitter.com/login?lang=en-gb" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
  <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://twitter.com/login?lang=en-gb</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.instagram.com/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://static.cdninstagram.com/rsrc.php/v3/yM/r/7xwrlYffOBb.png" class="youtube">
   <a draggable="false" href="https://www.instagram.com/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div> <div class="apgar" id="bk" >
   <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.instagram.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://open.spotify.com/intl-pt"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" class="youtube">
   <a draggable="false" href="https://open.spotify.com/intl-pt" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
   <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://open.spotify.com/intl-pt</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwi8_Zv4zbaAAxUWqpUCHR4aD0QQPAgI"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" class="youtube">
   <a draggable="false" href="https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwi8_Zv4zbaAAxUWqpUCHR4aD0QQPAgI" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
   <input  type="text" id="inApli"  placeholder="Título" value="${userInput}">
   <P>https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwi8_Zv4zbaAAxUWqpUCHR4aD0QQPAgI</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.netflix.com/br/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" class="youtube">
   <a draggable="false" href="https://www.netflix.com/br/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
   <input  type="text" id="inApli"  placeholder="Título" value="${userInput}">
   <P>https://www.netflix.com/br/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.disneyplus.com/pt-br/login"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://static-assets.bamgrid.com/product/disneyplus/favicons/apple-touch-icon.4dd3b8a8853ed0608ee308aa7aa76f82.png" class="youtube">
   <a draggable="false" href="https://www.disneyplus.com/pt-br/login" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
   <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.disneyplus.com/pt-br/login</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} else if( senha == "https://www.linkedin.com/"){
   let temp = `<div class="out-msg" onclick="bh();">
   <img alt="" loading="lazy" draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" class="youtube">
   <a draggable="false" href="https://www.linkedin.com/" rel="noreferrer noopener" class="kh"> <span class="my-msg">${userInput}</span></a>
   </div>
   <div class="apgar" id="bk" >
   <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
   <P>https://www.linkedin.com/</P>
   <hr>
   <div class = "buttonDele">
   <p onclick="clean();" id="delete">Deletar</p>
   <p id="aplicar">Aplicar mudanças</p>
   </div>
   
   </div>`;
   

   chatArea.insertAdjacentHTML("beforeend", temp);
} 
else{
    let temp = `<div class="out-msg" id="bt" onclick="bh();">
    <img alt="" loading="lazy" draggable="false" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2MiIgdmlld0JveD0iMCAwIDI2MiAyNjIiIHdpZHRoPSIyNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjZDhkOGQ4IiBoZWlnaHQ9IjI2MiIgcng9IjUyIiB3aWR0aD0iMjYyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuNzIyMzIxIDM2LjI0MDE4MSkiPjxwYXRoIGQ9Im0xMTguNjQ0NDExLjYyNTk3NDUyYzguMDU5NiAxLjg2MDcwNTM2IDE0LjI0MjM0MyA3LjU0NDcwMDIzIDE3LjA3NDc0NCAxNC42OTM5MTUyOCA3LjM3NjY5Mi0yLjE2OTcyMjcgMTUuNjYyNTctLjc5NzE1NjcgMjIuMDkxMDM0IDQuNDA4NTExMiA2LjEzOTU5OCA0Ljk3MTc0ODEgOS4yMTE0OTQgMTIuMzI3NjQyNiA4Ljk2MjQ2IDE5LjY1ODM2NzkgNy4xOTg1OCAxLjQwNTg3MzQgMTMuNjc0Njc2IDYuMDUzNjk4IDE3LjEzNzgwMiAxMy4xNTQxNTggMy42MjYwNCA3LjQzNDQ4NDkgMy4wOTk2NjEgMTUuODE2NDU2Ny0uNjczODYyIDIyLjUxNjgwMDkgNi4zMjg3NjYgNC4zNjc2OTA1IDEwLjQ3NjMxMSAxMS42NzA2MjU4IDEwLjQ3NjMxMSAxOS45NDIyNzIyIDAgOC4yNzE2NDYtNC4xNDc1NDUgMTUuNTc0NTgyLTEwLjQ3NjQzNCAxOS45NDI2MDMgMy43NzM2NDYgNi43MDAwMTMgNC4zMDAwMjUgMTUuMDgxOTg1LjY3Mzk4NSAyMi41MTY0Ny0zLjQ2MzEyNiA3LjEwMDQ2LTkuOTM5MjIyIDExLjc0ODI4NS0xNy4xMzc4NjMgMTMuMTU0ODE3LjI0OTA5NSA3LjMzMDA2Ni0yLjgyMjgwMSAxNC42ODU5NjEtOC45NjIzOTkgMTkuNjU3NzA5LTYuNDI4NDY0IDUuMjA1NjY4LTE0LjcxNDM0MiA2LjU3ODIzNC0yMi4wOTE5OTQgNC40MDgzNzgtMi44MzE0NDEgNy4xNDkzNDgtOS4wMTQxODQgMTIuODMzMzQzLTE3LjA3Mzc4NCAxNC42OTQwNDgtOC4wNTk1MjEgMS44NjA2ODctMTYuMTA4MTUzLS41Mzc2NTEtMjEuNzg3ODk3Ny01LjcyMTU3My01LjY3OTg3MTYgNS4xODM5MjItMTMuNzI4NTAzNyA3LjU4MjI2LTIxLjc4ODAyMzggNS43MjE1NzMtOC4wNTk2MDA0LTEuODYwNzA1LTE0LjI0MjM0MzUtNy41NDQ3LTE3LjA3NDc0NDItMTQuNjkzOTE1LTcuMzc2NjkxOCAyLjE2OTcyMy0xNS42NjI1Njk4Ljc5NzE1Ny0yMi4wOTEwMzQzLTQuNDA4NTExLTYuMTM5NTk3Ni00Ljk3MTc0OC05LjIxMTQ5NDItMTIuMzI3NjQzLTguOTYyNDYwNC0xOS42NTgzNjgtNy4xOTg1NzkyLTEuNDA1ODczLTEzLjY3NDY3NTUtNi4wNTM2OTgtMTcuMTM3ODAxMi0xMy4xNTQxNTgtMy42MjYwNDA1Ni03LjQzNDQ4NS0zLjA5OTY2MTE2LTE1LjgxNjQ1Ny42NzM4NjE0LTIyLjUxNjgwMS02LjMyODc2NTM0LTQuMzY3NjktMTAuNDc2MzEwOC0xMS42NzA2MjYtMTAuNDc2MzEwOC0xOS45NDIyNzIgMC04LjI3MTY0NjQgNC4xNDc1NDU0Ni0xNS41NzQ1ODE3IDEwLjQ3NjQzMzktMTkuOTQyNjAzNC0zLjc3MzY0NTY2LTYuNzAwMDEzLTQuMzAwMDI1MDYtMTUuMDgxOTg0OC0uNjczOTg0NS0yMi41MTY0Njk3IDMuNDYzMTI1Ny03LjEwMDQ2IDkuOTM5MjIyLTExLjc0ODI4NDYgMTcuMTM3ODYyNS0xMy4xNTQ4MTY3LS4yNDkwOTUxLTcuMzMwMDY2NiAyLjgyMjgwMTUtMTQuNjg1OTYxMSA4Ljk2MjM5OTEtMTkuNjU3NzA5MiA2LjQyODQ2NDUtNS4yMDU2Njc5IDE0LjcxNDM0MjUtNi41NzgyMzM5IDIyLjA5MTk5MzktNC40MDgzNzg0IDIuODMxNDQxMS03LjE0OTM0Nzg1IDkuMDE0MTg0Mi0xMi44MzMzNDI3MiAxNy4wNzM3ODQ2LTE0LjY5NDA0ODA4IDguMDU5NTIwMS0xLjg2MDY4Njg0IDE2LjEwODE1MjIuNTM3NjUxNDUgMjEuNzg3ODk3MyA1LjcyMTU3MzYxIDUuNjc5ODcxMi01LjE4MzkyMjE2IDEzLjcyODUwMzItNy41ODIyNjA0NSAyMS43ODgwMjQyLTUuNzIxNTczNjF6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTcwLjE3NjE3ODYgNzMuMzM0OTAxNWgxMC43MjI4Njc3Yy43NjEzODctOS4wOTE2MzcyIDYuNjYyMTM2Ny0xNC42MjI5MTMgMTUuODYyMjMwMy0xNC42MjI5MTMgOC44ODI4NDk0IDAgMTQuOTczOTQ1NCA1LjQ2NzY5NzkgMTQuOTczOTQ1NCAxMy40Nzg1MTExIDAgNi42NzU2Nzc3LTIuNjY0ODU1IDEwLjY4MTA4NDMtOS45NjE0ODEgMTUuMjU4NjkxOS04LjU2NTYwNCA1LjI3Njk2NDItMTIuNDM1OTg4MiAxMC45MzUzOTU4LTEyLjMwOTA5MDMgMTkuMzkxMjU0NXY1Ljc4NTU4N2gxMS4wNDAxMTIzdi00LjEzMjU2MmMwLTYuNzM5MjU2IDIuMzQ3NjEtMTAuMjM2MDM5NSAxMC4wODgzNzktMTUuMDA0MzgwNyA4LjYyOTA1My01LjI3Njk2NDIgMTIuOTQzNTc5LTEyLjU4ODQyMDcgMTIuOTQzNTc5LTIxLjg3MDc5MTYgMC0xMy40Nzg1MTExLTEwLjk3NjY2My0yMy4wNzg3NzE0LTI2LjMzMTMwMTktMjMuMDc4NzcxNC0xNS44NjIyMzA0IDAtMjYuMjY3ODUzNSA5LjQ3MzEwNDUtMjcuMDI5MjQwNSAyNC43OTUzNzQyem0yNS4yNTI2NzA3IDY5LjA0NTU4MDVjNC44MjIxMTc3IDAgOC42OTI1MDI3LTQuMDA1NDA3IDguNjkyNTAyNy05LjAyODA1OSAwLTUuMDIyNjUzLTMuODcwMzg1LTkuMDI4MDYtOC42OTI1MDI3LTkuMDI4MDYtNC44MjIxMTggMC04LjY5MjUwMjIgNC4wMDU0MDctOC42OTI1MDIyIDkuMDI4MDYgMCA1LjAyMjY1MiAzLjg3MDM4NDIgOS4wMjgwNTkgOC42OTI1MDIyIDkuMDI4MDU5eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4="  class="youtube" >
    <span class="my-msg">${userInput}</span>
  
    </div>  <div class="apgar" id="bk" >
    <input  type="text" id="inApli" placeholder="Título" value="${userInput}">
    <P>https://www.com/</P>
    <hr>
    <div class = "buttonDele">
    <p onclick="clean();" id="delete">Deletar</p>
    <p id="aplicar">Aplicar mudanças</p>
    </div>
    
    </div>`;
    
    chatArea.insertAdjacentHTML("beforeend", temp);
 }
})
function clean()
{
   document.querySelector('.out-msg').style.display = "none";
    document.getElementById('bk').style.visibility = 'hidden';
}
function bh(){
   
   var tela = document.querySelector('.out-msg')
   
   
   tela.addEventListener('mousedown', function(evento) {
      if( 3 === evento.which) {
         console.log('botão direito'); 
         document.getElementById('bk').style.visibility = 'visible';
         
      } 
    });
    tela.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    }, false);
    
}
let photo = document.getElementById('imgPhoto');
let files = document.getElementById('flImage');
let photooo = document.getElementById('imgPhotoo');


photo.addEventListener('click',() =>{
 files.click();
});


files.addEventListener('change', (event) => {
 
 let readerr = new FileReader();

 readerr.onload = () => {
   photooo.src = readerr.result;
 }

 readerr.readAsDataURL(files.files[0]);

});

function myFunction() {
    document.getElementById("myDropdown").style.display = "block";
    document.getElementById("cog").style.display = "block";
  }
  
  // Close the dropdown if the user clicks outside of it
  function fun(){
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("cog").style.display = "none";
   
}
var day = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
function clock(){
    //3° preciso passar isso pro HTML
    let dateNow = new Date();
    let hh = dateNow.getHours();
    let mm = dateNow.getMinutes();
    let s = dateNow.getSeconds();

  var hours = document.getElementById("hour").innerHTML = hh;
  var minutes = document.getElementById("minutes").innerHTML = ':' + mm;
  var seconds = document.getElementById("seconds").innerHTML = ':' +s;
  hh = hh < 10 ? '0'+ hh : hh; 
  mm = mm < 10 ? '0'+ mm : mm; 

  var fullDate = day[dateNow.getDay()] + ' '  +  dateNow.getDate()  +  '  '  +  month[dateNow.getMonth()] ; 
  var fullDat = day[dateNow.getDay()] + ', '  + month[dateNow.getMonth()] +  '  '  +  dateNow.getDate(); 
  document.getElementById("date").innerHTML = fullDate;
  document.getElementById("dat").innerHTML = fullDat;
  document.getElementById("datee").innerHTML = fullDate;

}
clock()
var interval = setInterval(clock, 1000);


function praia(){
   var fotos1 = "https://source.unsplash.com/random?paisagem";
   var fotos2 = "https://source.unsplash.com/random?animal";
   var fotos3 = "https://source.unsplash.com/random?beach ";
   var fotos4 = "https://source.unsplash.com/random?peru machu picchu ";
   var fotos5 = "https://source.unsplash.com/random?universo";
   var fotos6 = "https://source.unsplash.com/random?cerejeira";
   let defaultOpt = document.createElement('option');
   var name = document.getElementById('i_typee').value;

   if (name == "Natureza") {
      document.getElementById("img").src = fotos1;
   
    } else if (name == "Animal") {
      document.getElementById("img").src = fotos2;

    } else if( name == "Beach") {
      document.getElementById("img").src = fotos3;

    } else if (name == "Peru") {
      document.getElementById("img").src = fotos4;

    } else if(name == "Universo"){
      document.getElementById("img").src = fotos5;

    } else if (name == "Cerejeira"){
      document.getElementById("img").src = fotos6;
    }

}

function backgroun(){
   var back = document.getElementById('i_type').value;

   if ( back == "Arquivo local") {
      document.getElementById("atua").style.display = "none";
      document.getElementById("local").style.display = "block";
      document.getElementById("fundo").style.height = "390px";
      document.getElementById("imgPhotoo").style.visibility = 'visible';
   } else if ( back == "Unsplash") {
      document.getElementById("atua").style.display = "block";
      document.getElementById("fundo").style.height = "320px";
      document.getElementById("local").style.display = "none";
      document.getElementById("imgPhotoo").style.visibility = 'hidden';
   }
}
setInterval(() => {
   d = new Date(); //object of date()
   hr = d.getHours();
   min = d.getMinutes();
   sec = d.getSeconds();
   hr_rotation = 30 * hr + min / 2; //converting current time
   min_rotation = 6 * min;
   sec_rotation = 6 * sec;
 
   hourr.style.transform = `rotate(${hr_rotation}deg)`;
   minutee.style.transform = `rotate(${min_rotation}deg)`;
   secondd.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function mostraGeral() {
   var btn1 = document.getElementById("btn1");

   btn1.addEventListener("change", function () {
     if (btn1.checked == true) {
      document.getElementById("funnnn").style.height = '320px';
      document.getElementById("alinha").style.visibility = 'visible';
      document.getElementById("noturno").style.visibility = 'visible';
     } else {
      document.getElementById("funnnn").style.height = '40px';
      document.getElementById("alinha").style.visibility = 'hidden';
      document.getElementById("noturno").style.visibility = 'hidden';
     }

   })

 }

window.onload = function () {
   var btn2 = document.getElementById("btn2");
   var body = document.getElementsByTagName("body");
   btn2.addEventListener("change", function () {
     if (btn2.checked == true) {
      document.getElementById("funn").style.height = '320px';
       document.getElementById("pocket-editor").style.visibility = "visible";
       document.getElementById("lar").style.visibility = 'visible';
      document.getElementById("larg").style.visibility = 'visible';
      document.getElementById("alinhaa").style.visibility = 'visible';
     } else {
   
       document.getElementById("pocket-editor").style.visibility = "hidden";
       document.getElementById("funn").style.height = '40px';
       document.getElementById("lar").style.visibility = 'hidden';
      document.getElementById("larg").style.visibility = 'hidden';
      document.getElementById("alinhaa").style.visibility = 'hidden';
     }

   })

 }

function alo() {
   var btn3 = document.getElementById("btn3");
   var body = document.getElementsByTagName("body");
   btn3.addEventListener("change", function () {
     if (btn3.checked == true) {
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("clock").style.visibility = 'visible';
      document.getElementById("seconds").style.visibility = 'hidden';
      document.getElementById("remo").style.visibility = 'visible';
      document.getElementById("remoo").style.visibility = 'visible';
      document.getElementById("rem").style.visibility = 'visible';
      document.getElementById("rm").style.visibility = 'visible';
      document.getElementById("mr").style.visibility = 'visible';
      document.getElementById("fun").style.height = '320px';
      document.getElementById('clockAn').style.visibility = "hidden";
 
     } else {
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("clock").style.visibility = 'hidden';
      document.getElementById("seconds").style.visibility = 'hidden';
      document.getElementById("remo").style.visibility = 'hidden';
      document.getElementById("remoo").style.visibility = 'hidden';
      document.getElementById("rem").style.visibility = 'hidden';
      document.getElementById("rm").style.visibility = 'hidden';
      document.getElementById("mr").style.visibility = 'hidden';
      document.getElementById("fun").style.height = '40px';
      document.getElementById('clockAn').style.visibility = "hidden";
     }

   })

 }

 function analogico() {
   var btn4 = document.getElementById("btn4");
   var body = document.getElementsByTagName("body");
   btn4.addEventListener("change", function () {
     if (btn4.checked == true) {
      document.getElementById("clockContainer").style.visibility = 'visible';
      document.getElementById("clock").style.visibility = 'hidden';
      document.getElementById("seconds").style.visibility = 'hidden';
     
     } else {
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("clock").style.visibility = 'visible';
      document.getElementById("seconds").style.visibility = 'hidden';
    
      
     }

   })

 }

 function segundos() {
   var btn5 = document.getElementById("btn5");
   var body = document.getElementsByTagName("body");
   btn5.addEventListener("change", function () {
     if (btn5.checked == true) {
      document.getElementById("seconds").style.visibility = 'visible';
     
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("clock").style.visibility = 'visible';
     } else {
      document.getElementById("seconds").style.visibility = 'hidden';
    
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("clock").style.visibility = 'visible';
     }

   })

 }
 function data() {
   var btn7 = document.getElementById("btn7");
   var body = document.getElementsByTagName("body");
   btn7.addEventListener("change", function () {
     if (btn7.checked == true) {
      document.getElementById("date").style.visibility = 'hidden';
      document.getElementById("datee").style.visibility = 'hidden';
      document.getElementById("dat").style.visibility = 'visible';
     } else {
      document.getElementById("date").style.visibility = 'visible';
      document.getElementById("dat").style.visibility = 'hidden';
      document.getElementById("datee").style.visibility = 'visible';
      
     }

   })

 }
 
 function link() {
   var btn6 = document.getElementById("btn6");
   var body = document.getElementsByTagName("body");
   btn6.addEventListener("change", function () {
     if (btn6.checked == true) {
      document.querySelector('.submitt').style.visibility = 'visible';
      document.querySelector('.submit').style.visibility = 'visible';
      document.getElementById('in').style.visibility = 'visible';
      document.getElementById('inn').style.visibility = 'visible';
      document.getElementById('estilo').style.visibility = 'visible';
      document.querySelector('.out-msg').style.visibility = 'visible';
      document.getElementById("ativas").style.display = 'block';
      document.getElementById("funLink").style.height = '320px';
     } else {
      document.querySelector('.out-msg').style.visibility = 'hidden';
      document.querySelector('.submitt').style.visibility = 'hidden';
      document.querySelector('.submit').style.visibility = 'hidden';
      document.getElementById('in').style.visibility = 'hidden';
      document.getElementById('inn').style.visibility = 'hidden';
      document.getElementById('estilo').style.visibility = 'hidden';
      document.getElementById("ativas").style.display = 'none';
      document.getElementById("funLink").style.height = '40px';
     }

   })

 }

 function posicao(){
   let defaultOpt = document.createElement('option');
   var nota = document.getElementById('i_typeeee').value;

   if (nota == "À Esquerda"){
      document.getElementById("notas").style.textAlign = "left";
     
   } else if (nota == "Centro"){
      document.getElementById("notas").style.textAlign = "center";

   } else if (nota == "À Direita"){
      document.getElementById("notas").style.textAlign = "right";

   } 
}

function estilo(){
   let defaultOpt = document.createElement('option');
   var estilo = document.getElementById('i_typ').value;

   if (estilo == "Grande"){
      document.querySelector('.out-msg').style.width = "65px";
      document.querySelector('.out-msg').style.height = "60px";
      document.querySelector('.youtube').style.display = "block";
      document.querySelector('.youtube').style.width = "50px";
      document.querySelector('.youtube').style.height = "50px";
     
   } else if (estilo == "Médio"){
      document.querySelector('.out-msg').style.width = "45px";
      document.querySelector('.out-msg').style.height = "40px";
      document.querySelector('.youtube').style.display = "block";
      document.querySelector('.youtube').style.width = "40px";
      document.querySelector('.youtube').style.height = "40px";

   } else if (estilo == "Pequeno"){
      document.querySelector('.out-msg').style.width = "25px";
      document.querySelector('.out-msg').style.height = "20px";
      document.querySelector('.youtube').style.display = "block";
      document.querySelector('.youtube').style.width = "30px";
      document.querySelector('.youtube').style.height = "30px";

   } else if (estilo == "Texto"){
      document.querySelector('.out-msg').style.width = "0";
      document.querySelector('.out-msg').style.height = "0";
      document.querySelector('.out-msg').style.backgroundColor = "transparent";
      document.querySelector('.youtube').style.display = "none";
     
   } 

}

function disque(){
   let defaultOpt = document.createElement('option');
   var disque = document.getElementById('i_ty').value;

   if (disque == "Rodada"){
      document.getElementById('clockContainer').style.backgroundColor = "rgba(255, 255, 255, 0.363)";
      document.getElementById('clockContainer').style.border = "1px solid white";
      document.getElementById('clockContainer').style.borderRadius = "190px";
      document.getElementById('clockAn').style.visibility = "hidden";
     
   } else if (disque == "Praça"){
      document.getElementById('clockContainer').style.backgroundColor = "rgba(255, 255, 255, 0.363)";
      document.getElementById('clockContainer').style.border = "1px solid transparent";
      document.getElementById('clockContainer').style.borderRadius = "190px";
      document.getElementById('clockAn').style.visibility = "visible";

   } else if (disque == "Transparente"){
      document.getElementById('clockContainer').style.backgroundColor = "transparent";
      document.getElementById('clockContainer').style.border = "1px solid transparent";
      document.getElementById('clockAn').style.visibility = "hidden";
   }

}

function relogioD(){
   let defaultOpt = document.createElement('option');
   var relogioD = document.getElementById('i_t').value;

   if (relogioD == "Relógio e data"){
      document.getElementById("clock").style.visibility = 'visible';
      document.getElementById("date").style.visibility = 'visible';
      document.getElementById("dat").style.visibility = 'hidden';
     
   } else if (relogioD == "Apenas relógio"){
      document.getElementById("clock").style.visibility = 'visible';
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("date").style.visibility = 'hidden';
      document.getElementById("datee").style.visibility = 'hidden'
      document.getElementById("dat").style.visibility = 'hidden';
   } else if (relogioD == "Apenas data"){
      document.getElementById("clock").style.visibility = 'hidden';
      document.getElementById("clockContainer").style.visibility = 'hidden';
      document.getElementById("date").style.visibility = 'visible';
    
   }

}



function dark(){
   let defaultOpt = document.createElement('option');
   var dark = document.getElementById('i_dark').value;

   if (dark == "Ativo" || dark == "Enabled"){
      document.querySelector('.dropdown-content').style.backgroundColor = '#0a0a0a';
      document.getElementById('css').style.backgroundColor = 'rgb(39, 39, 39)';
      document.querySelector('#i_dark').style.backgroundColor = '#39383d';
         document.querySelector('#i_dark').style.color = '#eeeeee';
         document.querySelector('#i_t').style.backgroundColor = '#39383d';
         document.querySelector('#i_t').style.color = '#eeeeee';
         document.querySelector('#i_ty').style.backgroundColor = '#39383d';
         document.querySelector('#i_ty').style.color = '#eeeeee';
         document.querySelector('#i_ype').style.backgroundColor = '#39383d';
         document.querySelector('#i_ype').style.color = '#eeeeee';
         document.querySelector('#i_typ').style.backgroundColor = '#39383d';
         document.querySelector('#i_typ').style.color = '#eeeeee';
         document.querySelector('#i_type').style.backgroundColor = '#39383d';
         document.querySelector('#i_type').style.color = '#eeeeee';
         document.querySelector('#i_typee').style.backgroundColor = '#39383d';
         document.querySelector('#i_typee').style.color = '#eeeeee';
         document.querySelector('#i_typeee').style.backgroundColor = '#39383d';
         document.querySelector('#i_typeee').style.color = '#eeeeee';
         document.querySelector('#i_typeeee').style.backgroundColor = '#39383d';
         document.querySelector('#i_typeeee').style.color = '#eeeeee';
     
   } else if (dark == "Desativo" || dark== "Disabled"){
      document.querySelectorAll('.fundo').forEach(div => {
         // para cada div, adiciono o evento click
         document.querySelector('#i_dark').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_dark').style.color = 'black';
         document.querySelector('#i_t').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_t').style.color = 'black';
         document.querySelector('#i_ty').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_ty').style.color = 'black';
         document.querySelector('#i_ype').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_ype').style.color = 'black';
         document.querySelector('#i_typ').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_typ').style.color = 'black';
         document.querySelector('#i_type').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_type').style.color = 'black';
         document.querySelector('#i_typee').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_typee').style.color = 'black';
         document.querySelector('#i_typeee').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_typeee').style.color = 'black';
         document.querySelector('#i_typeeee').style.backgroundColor = 'rgb(235 235 235 / 94%)';
         document.querySelector('#i_typeeee').style.color = 'black';
         document.querySelector('.dropdown-content').style.backgroundColor = '#dddddde6';
         document.getElementById('css').style.backgroundColor = 'rgb(255, 255, 255)';
           // faz o toggle da classe, adiciona se não exitir, remove se existir
           div.classList.toggle('amarelo');
           })
  
   } 

}



function idiomas(){
   let defaultOpt = document.createElement('option');
   var dark = document.getElementById('i_ype').value;

   if (dark == "Português (Brasil)"){

      document.getElementById('madrugada').innerHTML = 
      "Boa Madrugada";
      document.getElementById('dia').innerHTML = 
      "Boa Dia";
      document.getElementById('tarde').innerHTML = 
      "Boa Tarde";
      document.getElementById('noite').innerHTML = 
      "Boa noite";
     
   } else if (dark == "English"){
      
      document.querySelectorAll('.portugues').forEach(div => {
         // para cada div, adiciono o evento click
       
           // faz o toggle da classe, adiciona se não exitir, remove se existir
           div.classList.toggle('ama');
           })
          

    document.querySelectorAll('.ingl').forEach(div => {
      // para cada div, adiciono o evento click
    
        // faz o toggle da classe, adiciona se não exitir, remove se existir
        div.classList.toggle('amar');
        })
        document.querySelectorAll('.fundos').forEach(div => {
         // para cada div, adiciono o evento click
       
           // faz o toggle da classe, adiciona se não exitir, remove se existir
           div.classList.toggle('ama');
           })
  
           document.querySelectorAll('.fundoss').forEach(div => {
            // para cada div, adiciono o evento click
          
              // faz o toggle da classe, adiciona se não exitir, remove se existir
              div.classList.toggle('amar');
              })

              document.getElementById('madrugada').innerHTML = 
              "Good Night";
              document.getElementById('dia').innerHTML = 
              "Good Morning";
              document.getElementById('tarde').innerHTML = 
              "Good Afternoon";
              document.getElementById('noite').innerHTML = 
              "Good Night";

   } else if (dark == "Espanõl"){
      
      document.querySelectorAll('.portugues').forEach(div => {
         // para cada div, adiciono o evento click
       
           // faz o toggle da classe, adiciona se não exitir, remove se existir
           div.classList.toggle('ama');
           })
          

    document.querySelectorAll('.espanhol').forEach(div => {
      // para cada div, adiciono o evento click
    
        // faz o toggle da classe, adiciona se não exitir, remove se existir, amar faz aparecer
        div.classList.toggle('amar');
        })

        document.querySelectorAll('.ingl ').forEach(div => {
         // para cada div, adiciono o evento click
       
           // faz o toggle da classe, adiciona se não exitir, remove se existir, ama sumir
           div.classList.toggle('ama');
           })

        document.querySelectorAll('.fundos').forEach(div => {
         // para cada div, adiciono o evento click
       
           // faz o toggle da classe, adiciona se não exitir, remove se existir
           div.classList.toggle('ama');
           })
  
           document.querySelectorAll('.fundoss').forEach(div => {
            // para cada div, adiciono o evento click
          
              // faz o toggle da classe, adiciona se não exitir, remove se existir
              div.classList.toggle('amar');
              })


              document.getElementById('madrugada').innerHTML = 
              "Buenas Noches";
              document.getElementById('dia').innerHTML = 
              "Buen Día";
              document.getElementById('tarde').innerHTML = 
              "Buenas Tardes";
              document.getElementById('noite').innerHTML = 
              "Buenas Noches";
   } 

}

 function saudacoes() {
   var btn13 = document.getElementById("btn13");

   btn13.addEventListener("change", function () {
     if (btn13.checked == true) {
      const greetingMessage = () => {
         //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
         let h = new Date().getHours();
         if (h <= 5) {
            document.getElementById('madrugada').style.visibility = 'visible';
            return 'Boa madrugada';
      }
         if (h < 12) { 
            document.getElementById('dia').style.visibility = 'visible';
            return 'Bom dia';} 
         if (h < 18) {
            document.getElementById('tarde').style.visibility = 'visible';
            return 'Boa tarde';
         } 
         document.getElementById('noite').style.visibility = 'visible';
         return 'Boa noite';
       }
       console.log(greetingMessage());
     } else {
      document.getElementById('madrugada').style.visibility = 'hidden';
      document.getElementById('dia').style.visibility = 'hidden';
      document.getElementById('tarde').style.visibility = 'hidden';
      document.getElementById('noite').style.visibility = 'hidden';
      
     }

   })

 }

 
 function clima() {
   var btn10 = document.getElementById("btn10");

   btn10.addEventListener("change", function () {
     if (btn10.checked == true) {
      const greetingMessage = () => {
         //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
         let h = new Date().getHours();
         if (h <= 5) {
            document.getElementById('madrugada').style.visibility = 'visible';
            return 'Boa madrugada';
      }
         if (h < 12) { 
            document.getElementById('dia').style.visibility = 'visible';
            return 'Bom dia';} 
         if (h < 18) {
            document.getElementById('tarde').style.visibility = 'visible';
            return 'Boa tarde';
         } 
         document.getElementById('noite').style.visibility = 'visible';
         return 'Boa noite';
       }
       document.getElementById("geo").style.visibility = 'visible';
       document.getElementById("unii").style.visibility = 'visible';
       document.getElementById("sau").style.visibility = 'visible';
       document.getElementById("funClima").style.height = '320px';
       console.log(greetingMessage());
     } else {
      document.getElementById('madrugada').style.visibility = 'hidden';
      document.getElementById('dia').style.visibility = 'hidden';
      document.getElementById('tarde').style.visibility = 'hidden';
      document.getElementById('noite').style.visibility = 'hidden';
      document.getElementById("geo").style.visibility = 'hidden';
      document.getElementById("unii").style.visibility = 'hidden';
      document.getElementById("sau").style.visibility = 'hidden';
      document.getElementById("funClima").style.height = '40px';
     }

   })

 }

 function ativarBarra() {
   var btn14 = document.getElementById("btn14");

   btn14.addEventListener("change", function () {
     if (btn14.checked == true) {
      document.getElementById("search").style.display = "block";
      document.getElementById("funnn").style.height = '320px';
      document.getElementById("linhaBarra").style.visibility = 'visible';
      document.getElementById("novaAba").style.visibility = 'visible';
     } else {
      document.getElementById("search").style.display = "none";
      document.getElementById("funnn").style.height = '40px';
      document.getElementById("linhaBarra").style.visibility = 'hidden';
      document.getElementById("novaAba").style.visibility = 'hidden';
     }

   })

 }