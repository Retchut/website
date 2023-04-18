function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function getImageFileNames(folderPath, imgName){
    const [name, extension] = imgName.split('.');
    const lowResImg = folderPath + name + "_lowres." + extension;
    const hiResImg = folderPath + imgName;

    return [lowResImg, hiResImg];
}


export { capitalize, getImageFileNames };