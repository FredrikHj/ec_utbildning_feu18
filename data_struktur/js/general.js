// Overall
  function loadHeadPage(){
    $("#headContentsArea" ).load("dokument/head_page.html");
    document.getElementById('sideBar').setAttribute('style', 'display: none;');
  }

  var getContactPopUp = document.getElementById('contactPopUp');
  function loadContactForm(){
    getContactPopUp.setAttribute('style', 'display: block;');
  }

    function unloadContactForm(){
      getContactPopUp.setAttribute('style', 'display: none;');
    }
// Navmenue
  // Buttons listener
    var buttonsHeadNav = document.querySelectorAll('button');

    for (var i = 0; i < buttonsHeadNav.length; i++){
      var buttonHeadNavs = buttonsHeadNav[i];
      if(buttonsHeadNav.length === 3) break;
      buttonHeadNavs.addEventListener('click', buttonNavClick);
    }

    var getHeadElement = document.getElementById('headContents');

    // Knapp funktion
      function buttonNavClick(e){
      /* Avgör vilken knapp jag har triggat, tar ut dess text & bestämmer ett nr för antalet tecken den har tagit ut,
        samma sak sker med filnamnet!*/

      // Knappnamn och tecken nr
        var targetNavButton = e.target;
        var getTextFromNavButton = targetNavButton.textContent;
      // Bestämmer antalet tecken i namnet
        var textNavButtonNr = getTextFromNavButton.length

      // Filnamn och tecken nr
        var filenameAboutMe = "about_me.html";
        var filenameTx = "tx.txt";
        var filenameAboutMeNr = filenameAboutMe.length;
        var filenameTxNr = filenameTx.length;

      // Totala tecken
        var navButtonAboutMeTot = textNavButtonNr + filenameAboutMeNr;
        var navButtonTxTot = textNavButtonNr + filenameTxNr;
  // ------------------------------------------------------------------------------------------------------
        //  Vad laddas och händer vid klick
          if (navButtonAboutMeTot === 19) {
            $("#headContentsArea" ).load("dokument/about_me.html");
          }

          else if(navButtonTxTot === 13){
            var getSideBarId = document.getElementById('sideBarProject');
            getSideBarId.setAttribute('style', 'display: block;');
            $("#headContentsArea" ).load("tx.txt");
          }
      // Addera
      }

  /*var getHeadElement = document.getElementById('headContents');
  var getTextfromHeadContent = getHeadElement.textContent;

    function buttonNavClick(e){
      var targetgetHeadContents = e.target;

      targetgetHeadContents.innerHTML = getTextfromHeadContent;
    }

      var buttonsHeadNav = document.querySelectorAll('button');

      for (var i = 0; i < buttonsHeadNav.length; i++){
        var buttonHeadNavs = buttonsHeadNav[i];
        buttonHeadNavs.addEventListener('click', buttonNavClick);
        }
  */
