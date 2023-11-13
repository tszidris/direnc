const btnn = document.getElementById("btn");

btnn.addEventListener("click", run);

function run() {
  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");
  const color4 = document.getElementById("color4");
  const colorvalue1 = color1.value;
  const colorvalue2 = color2.value;
  const colorvalue3 = color3.value;
  const colorvalue4 = color4.value;

  const hexColor1 = colorvalue1;
  const hexColor2 = colorvalue2;
  const hexColor3 = colorvalue3;
  const hexColor4 = colorvalue4;

  const colorName1 = closestColor(hexToRgb(hexColor1));
  const colorName2 = closestColor(hexToRgb(hexColor2));
  const colorName3 = closestColor(hexToRgb(hexColor3));
  var colorName4 = closestColor(hexToRgb(hexColor4));

  if (colorName4 == "beyaz") {
    colorName4 = "gümüş";
  }
  if (colorName4 == "sarı") {
    colorName4 = "altın";
  }
  if (colorName4 == "sari2") {
    colorName4 = "altın";
  }
  if (colorName4 == "gri2") {
    colorName4 = "gümüş";
  }

  const p1 = document.getElementById("p1");
  const p2 = document.getElementById("p2");
  const p3 = document.getElementById("p3");
  const p4 = document.getElementById("p4");
  const p5 = document.getElementById("p5");
  const p6 = document.getElementById("p6");

  p1.innerHTML = ` RENK 1 = ${colorName1}`;
  p2.innerHTML = ` RENK 2 = ${colorName2}`;
  p3.innerHTML = ` RENK 3 = ${colorName3}`;
  p4.innerHTML = ` RENK 4 = ${colorName4}`;

  const deger = {
    siyah: "0",
    kahverengi: "1",
    kırmızı: "2",
    turuncu: "3",
    sarı: "4",
    yeşil: "5",
    mavi: "6",
    mor: "7",
    gri: "8",
    beyaz: "9",
  };

  const hesapla = deger[colorName1] + deger[colorName2];
  const sifir = deger[colorName3];
  const dizi = [];
  for (var i = 0; i < sifir; i++) {
    dizi.push("0");
  }
  const sifirlar = dizi.join("");
  const yeniDeger = hesapla + sifirlar;
  p5.innerHTML = `Direncin Değeri : ${yeniDeger}`;

  var tolerans = colorName4;
  if (tolerans == "gümüş") {
    tolerans = "%10";
  } else if ((tolerans = "altın")) {
    tolerans = "%5";
  }
  if (colorName4 == "gümüş") {
    p6.innerHTML = `Tolerans Değeri : +- ${tolerans}`;
  } else if (colorName4 == "altın") {
    p6.innerHTML = `Tolerans Değeri : +- ${tolerans}`;
  } else p6.innerHTML = " ";
}

function closestColor(rgb) {
  const colorNames = {
    siyah: [0, 0, 0],
    kırmızı: [255, 0, 0],
    turuncu: [255, 165, 0],
    yeşil: [0, 255, 0],
    mavi: [0, 0, 255],
    kahverengi: [165, 42, 42],
    sarı: [255, 255, 0],
    mor: [128, 0, 128],
    gri: [128, 128, 128],
    beyaz: [255, 255, 255],
    sari2: [255, 215, 0],
    gri2: [192, 192, 192],
  };

  let minDistance = Infinity;
  let closestColorName = null;

  for (const colorName in colorNames) {
    const colorRgb = colorNames[colorName];
    const distance = Math.sqrt(
      colorRgb.reduce(
        (sum, value, index) => sum + Math.pow(value - rgb[index], 2),
        0
      )
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColorName = colorName;
    }
  }

  return closestColorName;
}

function hexToRgb(hexColor) {
  hexColor = hexColor.replace(/^#/, "");
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  return [r, g, b];
}
