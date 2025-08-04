export function removeFlowers() {
    const flowers = document.getElementById("flower-image");
    flowers.classList.add('hide');
}

export function addFlowers() {
    const flowers = document.getElementById("flower-image");
    flowers.classList.remove('hide');
}