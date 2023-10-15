function calculateVolume() {
    const radiusInput = document.getElementById("radiusInput");
    const result = document.getElementById("result");

    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        result.textContent = `The volume of the sphere is: ${volume.toFixed(2)}`;
    } else {
        result.textContent = "Please enter a valid radius.";
    }
}
