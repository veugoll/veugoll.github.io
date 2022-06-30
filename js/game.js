function changeColor(newColor) {
    const elem = document.getElementById('test');
    elem.style.color = newColor;
   }

var startTime=new Date();
var endTime=new Date();
var startPressed=false;
var bgChangeStarted=false;
var maxWait=20;
var timerID;

// dit is de opdracht voor de start knop 
function startit()
   {
document.body.style.background=document.response.bgColorChange.options[
    document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted=true;
    startTime=new Date();
   }

// beoordeling 
function remark(responseTime)
   {
    var responseString="";
    if (responseTime < 0.20)
    responseString="Super snel!";
    
    if (responseTime >= 0.30 && responseTime < 0.20)
    responseString="Wel oke!";

    if (responseTime >= 0.40 && responseTime < 0.30)
    responseString="Dat kan beter!";

    if (responseTime >= 0.50 && responseTime < 0.60)
    responseString="Blijven proberen";

    if (responseTime >= 0.60 && responseTime < 1)
    responseString="Wel op blijven letten";

    if (responseTime >= 1)
    responseString="WAKKER BLIJVEN";

return responseString;
   }

// De stop knop!
function stopTest()
   {
    if(bgChangeStarted)
      {
        endTime=new Date();
        var responseTime=(endTime.getTime()-startTime.getTime())/1000;

        document.body.style.background="white";
        alert("Je reactie snelheid is: " + responseTime + " seconds " + "\n" + remark(responseTime));
        startPressed=false;
        bgChangeStarted=false;
      }
      else
      {
        if (!startPressed)
        {
            alert("druk eerst op start om te beginnen");
        }
      else
      {
        clearTimeout(timerID);
        startPressed=false;
        alert("VALSE START je drukte te vroeg")
      }
      }
    
    
      function stopTest()
      {
          if(bgChangeStarted)
          {
            endTime=new Date();
            var responseTime=(endTime.getTime()-startTime.getTime())/1000;

            decodeURIComponent.body.style.background="white";
            alert("Je reactie tijd is: " + responseTime + " seconds " + "\n" + remark(responseTime));
            startPressed=false;
            bgChangeStarted=false;
          }
          else
          {
           if(!startPressed)
           {
            alert("Druk eerst op start op te beginnen");
           }
           else
           {
            clearTimeout(timerID);
            startPressed=false;
            alert("VALSE START! je drukte te vroeg");
           }
          }
      }

    //   willekeurig reactie verandering achtergrond kleur

    function randNumber()
    {
        randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
        return((randSeed >> 15) & 0x7fff) / 32767;
    }

    // start knop dubbel klik failsafe

    function startit()
    {
        if(startPresses)
        {
            alert("spel is al gestart, druk op stop");
            return;
        }
        else
        {
            startPressed=true;
            timerID=setTimeout('startTest()', 6000*randNumber());
        }
    }
}

   