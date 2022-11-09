temp = document.getElementById("temp").textContent;
wSpeed = document.getElementById("wSpeed").textContent;
wChillBox = document.getElementById("wChill");

if (temp<= 50 && wSpeed>3) {
    let wChill = 3.74 + (0.6215 * temp) - (35.37 * (wSpeed ** 0.16)) + (0.4275 * temp * (wSpeed ** 0.16));
    wChillBox.textContent = wChill.toFixed(2);
}

else {
    wChill = "N/A";
    wChillBox.textContent = wChill.toFixed(2);
}