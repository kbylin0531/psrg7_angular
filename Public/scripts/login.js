document.login.username.attributes.value = '';
document.login.password.attributes.value = '';

L.ready(function () {
    L.use('encrypt',function () {
        document.body.querySelector(".floating-btn").onclick = function () {
            var input = document.body.querySelector(".passwd-input");
            if(!input){
                alert('Something goes wrong!');
            }else{
                input.value = L.md5(L.sha1(input.value));
                console.log(input.value);
                document.login.submit();
                // alert(input.value);
            }
        };
    });
});
