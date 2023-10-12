let newWindow;
let width = 400;
let height = 400;
let resizing = true;

const openWindow = () => {
    // If the window is already opened, we close it
    if (newWindow) {
        newWindow.close();
    }

    // We get the window position randomly
    let left = Math.floor(Math.random() * (window.innerWidth - width));
    let top = Math.floor(Math.random() * (window.innerHeight - height));

    // We open a new window with the parameters given
    newWindow = window.open('', 'Ventana Redimensionable', `width=${width}, height=${height}, left=${left}, top=${top}`);
};

const resizeWindow = () => {
    // We start resizing the window reducing its size, when its size gets to 160 x 160, it starts to grow again
    if (resizing) {
        width -= 40;
        height -= 40;
        if (width <= 160 || height <= 160) {
            resizing = false;
        }
    } else {
        width += 40;
        height += 40;
    }

    newWindow.resizeTo(width, height);

    if (width >= 400 && height >= 400) {
        clearInterval(resizeInterval);
    }
};

const resizeInterval = setInterval(resizeWindow, 1000);
