
var tablinks = document.getElementsByClassName("tab-links")

var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){

    for(tablink of tablinks ){                   /* ye loop wala hissa chat gpt se samjho */

        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents ){

        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")                          /* yaha se ye dekh lega ki click event hua or konse pr click hua hua                                                                          jo ki humne html me onclick lagaya hai ab jese hi jis parbhi bhi                                                                          click hoga udhr ek parameter me skills or education dono hai hai                                                               or as id bhi dono me skills or education diya hai ab skills or education*/
    document.getElementById(tabname).classList.add("active-tab")  

                                                                        /* ab is second line me hum wo clicked hua function getelementbyid se fetch kar lenge kyuli waha onclick("skills") skills ,education as parameter diya hai jese hi koi sa bhi click hoga us parameter me click hone wale function ki value chali jayegi joki hume function(tabname) me mil jayegi to hum uski madad se add or remove kr dene ki konsa click hua konsa nhi */

}
