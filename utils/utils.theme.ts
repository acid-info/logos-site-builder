export const hexTofeColorMatrix = (hex: string) => {
    let RGB = [];
    let numberList: Array<number|string> = [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];

    for (let i = 0; i < hex.length; i+=2) {
        const firstDigit = parseInt(hex[i], 16);
        const firstDigitPartial = firstDigit * 16;
        let RGBValue = parseInt(hex[i+1], 16) + firstDigitPartial;

        RGBValue = RGBValue / 255;
        RGB.push(RGBValue.toFixed(2));
    }

    const red = RGB[0];
    const green = RGB[1];
    const blue = RGB[2];

    numberList[0] = red;
    numberList[6] = green;
    numberList[12] = blue;

    return numberList.join(' ');
};
