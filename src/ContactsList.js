import './style.css';

{
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://jsonplaceholder.typicode.com/users', true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      renderContactList(JSON.parse(xhr.responseText));
    }
  }

function renderContactList(inf){
    if(localStorage.getItem("id") == 0 || localStorage.length == 0){
      renderContacts(inf[0]);
    }else{
      renderContacts(inf[localStorage.getItem("id")]);
      if(localStorage.getItem("container") != null)
        showPrompt(document.getElementById(localStorage.getItem("container")));
    }
    document.getElementById("slider-previous").onclick = function() {
      renderAnimation();
      renderContacts(inf[localStorage.getItem("id") - 1]);
    };
    document.getElementById("slider-next").onclick = function() {

      if(localStorage.getItem("id") == null){
        renderAnimation();
        renderContacts(inf[0]);
      }else{
        renderContacts(inf[+ localStorage.getItem("id") + 1]);
        renderAnimation();
      }
    };
  };

function renderAnimation(){
  if(document.getElementById("contacts").style.animation == "newslidein 3s") {
    document.getElementById("contacts").style.animation = "slidein 3s";
    }else{
    document.getElementById("contacts").style.animation = "newslidein 3s";
  }
};

function renderButton(){
    if(localStorage.getItem("id") == 0 || localStorage.length == 0){
      document.getElementById("slider-previous").style.display = "none";
    }else{
      document.getElementById("slider-previous").style.display = "";
    }

    if(localStorage.getItem("id") == 7 ){
      document.getElementById("slider-next").style.display = "none";
    }else{
      document.getElementById("slider-next").style.display = "";
    }
  };

function renderContacts(contacts) {
    localStorage.setItem('id', contacts["id"]-1 )
    renderButton();
          for(let props in contacts) {

            if( props === "id") continue;

            getUssualyProps(props,contacts);
        }
        function getUssualyProps(props,contacts) {

        if(Object.prototype.toString.call(contacts[props]) === "[object Object]" ){
            for(let accurateProps in contacts[props] ){

              if(accurateProps == "name") {
              let contact =  document.getElementById("name_сompany");
              contact.innerHTML=contacts[props]["name"];
              continue;
            }
            getUssualyProps(accurateProps,contacts[props])
          }
        }else{
          let contact =  document.getElementById(props);
          contact.innerHTML=contacts[props];
        }
    };
  };

  function showCover() {
        var coverDiv = document.createElement('div');
        coverDiv.id = 'cover-div';
        document.body.appendChild(coverDiv);
    }

   function hideCover() {
          document.body.removeChild(document.getElementById('cover-div'));
        }

  document.getElementById("show_address").onclick = function() {
    showPrompt(document.getElementById('prompt-form-container_address'));
    localStorage.setItem('container','prompt-form-container_address');
  }
  document.getElementById("show_company").onclick = function() {
    showPrompt(document.getElementById('prompt-form-container_company'));
    localStorage.setItem('container','prompt-form-container_company');
  }
  document.getElementById("show_geo").onclick = function() {
    showPrompt(document.getElementById('prompt-form-container_geo'));
    localStorage.setItem('container','prompt-form-container_geo');
  }

function  showPrompt(container) {

    if(document.getElementById('cover-div') != null ){
      hideCover();
      document.getElementById('prompt-form-container_address').style.display = "none";
    }

    showCover();

    function complete() {
      hideCover();
      container.style.display = "none";
      document.onkeydown = null;
      localStorage.removeItem("container");
    }

    document.onkeydown = function(e) {
      if(e.keyCode == 27)  {complete();}
    }
    container.style.display = 'block';
  };

};
