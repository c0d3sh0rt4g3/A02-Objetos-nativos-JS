const nameSurname = prompt("Please introduce your name and surnames:")
const nameSurnameList = nameSurname.split(" ")
const nameSurnameNoSpaces = nameSurnameList.join("")

if (isNaN(nameSurnameNoSpaces)){
const nameSurnameLength = nameSurnameList.join("").length
const name = nameSurnameList[0].toLowerCase()
const surname1 = nameSurnameList[1].toLowerCase()
const surname2 = nameSurnameList[2].toLowerCase()
const usernameIdea1 = (name[0] + surname1 + surname2[0]).toLowerCase()
const usernameIdea2 = name.substring(0, 3) + surname1.substring(0, 3).toLowerCase() + surname2.substring(0, 3).toLowerCase()

document.write("Name plus surnames lenght: " + nameSurnameLength + "<br>")
document.write(`Name: ${name}<br>First surname: ${surname1}<br>Second surname: ${surname2}<br>`)
document.write(usernameIdea1 + "<br>")
document.write(usernameIdea2)
}else {alert("The date introduced it's not valid")}