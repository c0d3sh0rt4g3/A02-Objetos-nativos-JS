/* A function that checks if there's cookies, if there are not any cookies, it asks you for data create a cookie,
if there are cookies, it will write them on the page and then would delete them*/
const checkCookie = () =>{
    if (document.cookie === ""){
        const userName = prompt("What's your name?")
        const userAddress = prompt("What's your address?")
        const userAge = prompt("What's your age?")
        const userJob = prompt("What's your job?")
        createCookie(userName, userAddress, userAge, userJob)
        console.log(document.cookie)
    }else {
        showCookie()
        deleteCookie()
    }
}
// A function that create a cookie with data given
const createCookie = (userName, userAddress, userAge, userJob) => {
    const letterRegex = /^[A-Za-z]+$/
    if (!isNaN(userAge)){
        if (letterRegex.test(userName) && letterRegex.test(userJob)){
            // We create a string with user information separated by '|' and store it in a cookie.
            const userData = `${userName}|${userAddress}|${userAge}|${userJob}`
            document.cookie = `userData=${userData}; expires=Mon, 01 Jan 2024 00:00:00 UTC;`
        }else {alert("The name or job introduced are not valid")}
    }else {alert("The age given it's not valid")}
}
// A function that writes the cookie data on the document
const showCookie = () => {
    const cookie = document.cookie
    // We split the user data from the cookie expiration date
    const userData = cookie.split("; ")
    // We split the data starting by the index 9, so we don't catch 'userData='
    const userDataList = userData[0].slice(9, cookie.length).split("|")
    document.write(`Name: ${userDataList[0]}<br>Address: ${userDataList[1]}<br>Age: ${userDataList[2]}<br>Job: ${userDataList[3]}`)
}
// A function that deletes the cookie by giving it a past expiration date
const deleteCookie = () => {
    document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
}