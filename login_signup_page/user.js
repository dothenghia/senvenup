const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

const login_signup = {
    users : [
        {
            id : 1,
            user_name : "admin1",
            password : "admin1"
        },
        {
            id : 2,
            user_name : "user1",
            password : "user1"
        }
    ],

    formHandler : function (){
        $i("form-login-signup").onclick = function(e){
            var usernameInput = $(".form-user").value;
            var passwordInput = $(".form-password").value;
            console.log(usernameInput,passwordInput)

            if(usernameInput=='admin' && passwordInput == 'admin'){
                localStorage.setItem('localRole','admin');
            }else if(usernameInput=='user' && passwordInput == 'user'){
                localStorage.setItem('localRole','user');
            }else{
                e.preventDefault();
                $(".form-body").classList.add("form-incorrect")
            }

        }
        
    },

    start : function (){
        this.formHandler();
    }
} 

login_signup.start();