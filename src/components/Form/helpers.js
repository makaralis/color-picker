export const  rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return 'hsl(' + Math.floor(h * 360) + ',' + Math.floor(s * 100) + '%,' + Math.floor(l * 100) + '%)';
}

const  componentToHex = (c) => {
    const hex = c?.toString(16);

    return hex?.length === 1 ? "0" + hex : hex;
  }
  
 export const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

