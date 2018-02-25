document.addEventListener('DOMContentLoaded', function () {
  var box = document.getElementById('box');
  var palette = document.getElementById('palette');
  var colors = ['Red', 'DarkRed', 'Sienna', 'Cyan', 'Blue', 'GreenYellow', 
                'Lime', 'Pink', 'HotPink', 'Purple', 'Bisque', 'Yellow', 'DarkSalmon', 'Orange', 'White', 'Grey', 'DimGray',  'Black'];

  let selectedPalette;
  for (var i = 0; i < colors.length; i++) {
    const palette = document.createElement('div');
    if (i === 0) {
      palette.className = 'palette selected';
      selectedPalette = palette;
    } else {
      palette.className = 'palette';
    }
    palette.style.backgroundColor = colors[i];
    palette.addEventListener('click', () => {
      selectedPalette.className = 'palette';
      selectedPalette = palette;
      palette.className = 'palette selected';
    });
    document.getElementById('palettes').appendChild(palette);
  }

  for (var i = 0; i < 60 * 40; i++) {
    const div = document.createElement('div');
    div.addEventListener("click", () => {
      if (div.style.backgroundColor === selectedPalette.style.backgroundColor) {
        div.style.backgroundColor = 'white';
        div.style.borderColor = '#ddd';
      } else {
        div.style.backgroundColor = selectedPalette.style.backgroundColor;
        div.style.borderColor = selectedPalette.style.backgroundColor;
      }
    });
    div.className = 'pixel';
    box.appendChild(div);
  }
});
