var provider = new firebase.auth.GoogleAuthProvider();
$('#logueo').click(function(){
    firebase.auth()
    .signInWithPopup(provider)
    .then(function(result){
        console.log(result.user);
        almacenaDatos(result.user);
        $('#logueo').hide()
        $('#principal').append("<img src='"+result.user.photoURL+"'/>")
    });
});

//GUARDADO DE DATOS AUTOMÁTICO

function almacenaDatos(user){
    var datosDelUsuario={
        nombre: user.displayName,
        emaail: user.emaail,
        foto: user.photoURL,
        uid: user.uid
    }
    firebase.database().ref("datosInicioDeSesion/"+user.uid)
    .push(datosDelUsuario)
}