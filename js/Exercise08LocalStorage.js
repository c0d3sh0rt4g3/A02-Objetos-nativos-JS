// This function checks if session storage contains user data. If not, it prompts the user to enter their information.
const checkSessionStorage = () => {
    if (!sessionStorage.userData) {
        const userName = prompt("What's your name?")
        const userAddress = prompt("What's your address?")
        const userAge = prompt("What's your age?")
        const userJob = prompt("What's your job?")
        createSessionStorage(userName, userAddress, userAge, userJob)
        displaySessionStorage()
    } else {
        displaySessionStorage()
    }
}

// A function that creates session storage with user data
const createSessionStorage = (userName, userAddress, userAge, userJob) => {
    if (!isNaN(userAge)) {
        const letterRegex = /^[A-Za-z]+$/;
        if (letterRegex.test(userName) && letterRegex.test(userJob)){
            // Create a string with user information separated by '|' and store it in session storage
            sessionStorage.userData = `${userName}|${userAddress}|${userAge}|${userJob}`
        }else {alert("The name or job introduced are not valid")}
    } else {
        alert("The age given is not valid")
    }
}

// A function that displays the user information stored in session storage.
const displaySessionStorage = () => {
    const userData = sessionStorage.userData
    if (userData) {
        // Split the user data into an array and display it with labels.
        const userDataList = userData.split("|")
        document.write(`Name: ${userDataList[0]}<br>Address: ${userDataList[1]}<br>Age: ${userDataList[2]}<br>Job: ${userDataList[3]}`)
    }
}

// We add an event listener to the 'beforeunload' event to clear the local storage when the page is about to be unloaded.
window.addEventListener('beforeunload', function() {
    // Clear the local storage (localStorage).
    localStorage.clear()
})

