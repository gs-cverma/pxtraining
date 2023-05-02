
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-KLSX5CWHR5PW-2");

function myFunction() {
  // Get the value of the input field with id="numb"
   var x = document.getElementById("name").value;
  var y = document.getElementById("email").value;   

 if (y == 'cverma@gainsight.com') {
 
aptrinsic("identify",
  {
  //User Fields
    "id": x, // Required for logged in app users
    "email": y,
    "firstName": c,
    "lastName": "",
  },
  {
  //Account Fields
    "id":"gs", //Required
    "name":"Gainsight",
    "Program": "Platinum" // flat custom attributes
 });
     alert ("Valid User");
     location.href = "contact.html";
  } else if (y == '') {
      alert ("Empty response");
  }
    else{
        
        alert ("Invalid User");
  }
    }
