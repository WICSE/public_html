
var popupHandle;

function popup(myPopup)
{

  // always close the old one , so only one at a time is open
  if(popupHandle || popupHandle!=null)
  {
    if (!popupHandle.closed) popupHandle.close();
  }
  popupHandle=null;
  
 if( myPopup == 1)
 {
  // open the popup
  popupHandle = window.open( "http://book.git-scm.com/", "myWindow", 
"height = 500, width = 500, resizable = 0" )
  return popupHandle;
 }
 else if (myPopup == 2)
 {
  // open the popup
  popupHandle = window.open( "http://www.javascriptkit.com/jsref/", "myWindow", 
"height = 500, width = 500, resizable = 0" )
  return popupHandle;
 }

}

function winclose()
{
  if (window.popupHandle!=null && !window.popupHandle.closed)
  {
    window.popupHandle.close();
    }
}

function doNothing(){} // does nothing but required by JavaScript in this case


