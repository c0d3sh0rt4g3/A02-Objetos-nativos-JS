const radiusPrompt = prompt("Please introduce the radius of a circle:")
const pi = Math.PI
if (!isNaN(radiusPrompt)){
    const radius = parseFloat(radiusPrompt)
    const diameter = radius * 2
const perimeter = pi * diameter
const areaCircunference = pi * Math.pow(radius, 2)
const areaSphere = 4 * pi * Math.pow(radius, 2)
const volumeSphere = 4 / (3 * pi *Math.pow(radius, 3))
document.write(`Radius: ${radius}<br>Diameter: ${diameter}<br>Perimeter: ${perimeter}<br>
Circunference area: ${areaCircunference}<br>Sphere area: ${areaSphere}<br>Sphere volume: ${volumeSphere}`)
}else {alert("The data introduced it's not valid.")}
