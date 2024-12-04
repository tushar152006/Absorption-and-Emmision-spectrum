function calculateEnergy() {
    const h = 6.626e-34; // Planck's constant in Js
    const c = 3e8;       // Speed of light in m/s
    const wavelengthInput = document.getElementById("wavelength").value;
    const frequencyInput = document.getElementById("frequency").value;

    let energy;
    if (wavelengthInput) {
        const wavelength = wavelengthInput * 1e-9; // Convert nm to m
        energy = (h * c) / wavelength;
    } else if (frequencyInput) {
        energy = h * frequencyInput;
    } else {
        document.getElementById("result").innerText = "Please enter wavelength or frequency.";
        return;
    }

    document.getElementById("result").innerText = `Energy: ${energy.toExponential(3)} J`;
}
