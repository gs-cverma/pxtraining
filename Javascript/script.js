
    (function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    r.integrity="sha256-VAnL6a3PLH4fgdL2gEK2g04t2gGTmJw+hRByCh7JXic=";
    r.crossOrigin="anonymous";
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://cdnjs-web-sdk.aptrinsic.com/web-sdk/0.54.18/api/aptrinsic.js","AP-4IRRDOAOY9E3-2");

function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'cverma@gainsight.com' || a == 'shekhar84.verma@gmail.com' || a == 'a@gainsight.com' || a == 'b@gainsight.com' )
    { 
        var b= a.substr(0,5);
      
      //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": b, // Required for logged in app users
    "email": a,
    "firstName": "John",
    "lastName": "Smith"
  },
  {
  //Account Fields
    "id":"AM", //Required
    "name":"Amazon"
 });
      
        alert('valid user');
        location.href = "Page1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}
