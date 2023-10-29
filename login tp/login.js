const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
 if (e.target === $visible){
    if ($visible.checked === false ) $password.type = "password";
    else $password.type="text";
 }
});

document.addEventListener("click", (e) =>{
    if (e.target === $submit){
        if ($password.value !== "" && $username.value !== "" && $password.value=="miusuario1234"){
            e.preventDefault ();
            window.location.href= "file:///C:/Users/milag/Downloads/foodhut/foodhut/public_html/index.html";
        }
        else
        {
            alert ("Acceso denegado, contraseña incorrecta");
        }
    }

})



    
    

