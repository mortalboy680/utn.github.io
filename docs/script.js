// Seleccionamos todos los elementos con la clase "line-item-age"
const yearElements = document.querySelectorAll('.line-item-age');

// Añadimos un evento de clic a cada elemento
yearElements.forEach((year) => {
  year.addEventListener('click', () => {
    const yearIndex = year.getAttribute('data-index'); // Obtenemos el índice del año
    const contentBox = document.getElementById(`content-${yearIndex}`); // Buscamos el contenedor correspondiente

    if (contentBox.style.display === 'none' || contentBox.style.display === '') {
      // Si está oculto, lo mostramos
      contentBox.style.display = 'flex';
    } else {
      // Si está visible, lo ocultamos
      contentBox.style.display = 'none';
    }
  });
});

const folderItems = document.querySelectorAll('.folder-item');

    folderItems.forEach(item => {
      item.addEventListener('click', () => {
        // Expand the clicked item to fullscreen
        item.classList.add('fullscreen');

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.textContent = '×';
        item.appendChild(closeButton);

        // Handle close button click
        closeButton.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent triggering the item's click event
          item.classList.remove('fullscreen');
          closeButton.remove();
        });
      });
    });