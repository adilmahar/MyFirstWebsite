console.log("Hello World")




let user;
let password;


console.log(user)



document.getElementById("subm").onclick = function(){
    user = document.getElementById("Username").value
    password = document.getElementById("Password").value

    document.getElementById("PrankText").textContent = "You Have Been Hacked >:)"
    document.getElementById("UserInputuser").textContent = `Your Username is: ${user}`
    console.log(`[Log]: Userinput is`, user)


    document.getElementById("UserInputPassword").textContent = `Your Password is: ${password}`
    console.log(`[Log]: Userinput is`, password)

}
