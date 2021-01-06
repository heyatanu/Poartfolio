// var welcometxt = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   ....
// </body>
// <script src="app.js"></script>
// </html>
// `;
var welcometxt = `
<IDISPATCH> spDisp; 
HRESULT hr = ->get_Document(&spDisp);
if (SUCCEEDED(hr) && spDisp)
{ 
    // If (e.g., it's a Word doc or a PDF), don't sink.
    CComQIPtr<IHTMLDOCUMENT2 &> spHTML(spDisp);
     if (spHTML)
     { 
         /*
              and n a login page*/
           EnumFrames(spHTML);  
    }
}

void CIeLoginHelper::(CComPtr<IHTMLDocument2>& spDocument) 
{    
    // Get the container
    HRESULT hr = spDocument->tainer,
                (void**)&);
    
    ULONG uFetched;

    // Enumerate and refresh all the frames
    BOOL bFrameFound = FALSE;
    for (UINT nIndex = 0; 
            S_OK == pEnumerator->Next(1, &pUnk, &uFetched);
                nIndex++)
    {2(spDisp);
            //Now recursivley browse through all of
                        // in a doc                    
            (spDocument2);
            bFrameFound = TRUE;

        }
    }
}
`;
var speed = 3;

function WelcomeTypeWriter() {
   
  if (i < welcometxt.length) {

    document.getElementById("welcometxtmsg").innerHTML += welcometxt.charAt(i);
    i++;
    if (welcometxt.charAt(i)=='<' && welcometxt.charAt(i+1)!='/'){
        document.getElementById("welcometxtmsg").innerHTML += (`<br>`);
    }
    if (i==206 || i==267 ){
        document.getElementById("welcometxtmsg").innerHTML += (`<br>`);
    }
    setTimeout(WelcomeTypeWriter, speed);
  }
}
setTimeout(function(){ 
    document.getElementById("pathtxtmsg").innerHTML="&#9741;root > &#9888;&#9888;&#9888;&#9888; >&#8460;&#8460;&#8460; injector.sh";
    WelcomeTypeWriter()
 }, 1000);
