const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(stream => {
        console.log(stream);
        //video.src = window.URL.createObjectURL(localMediaStream); //sin compatibilidad en algunos navegadores
        video.srcObject=stream;
        video.play();
    })
    .catch(err => {
        console.error(`Please allow permission to use your camera: ${err}`);
    });
};

function paintToCanvas() {

    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);


    canvas.width = width;
    canvas.height = height;

    return setInterval( () => {
        ctx.drawImage(video, 0, 0, width, height);

        let pixels = ctx.getImageData(0, 0, width, height);
        
        //pixels = redEffect(pixels); //FILTRO ROJO
        pixels = rgbSplit(pixels); //FILTRO SEPARACION RGB
        //ctx.globalAlpha = 0.1; //efecto fantasma
        pixels = greenScreen(pixels); //FILTRO CHROMA

        ctx.putImageData(pixels, 0, 0)

    }, 16); 
};

function takePhoto() { 

    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'autoescrache');
    link.innerHTML = `<img src="${data}" alt="snapshot" />`;

    strip.insertBefore(link, strip.firstChild);
}


function redEffect(pixels){
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i] = pixels.data[i] + 50 // R
        pixels.data[i+1] = pixels.data[i+1] - 50 // G
        pixels.data[i+2] = pixels.data[i+2] * 0.5 // B
    }
    return pixels;
};

function rgbSplit(pixels){
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i - 150] = pixels.data[i] // R
        pixels.data[i + 500] = pixels.data[i+1] // G
        pixels.data[i - 550] = pixels.data[i+2] // B
    }
    return pixels;
}

function greenScreen(pixels){

    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });


    for(i = 0; i < pixels.data.length; i += 4){

        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if(red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax ) 
            
        { pixels.data[i + 3] = 0; }
    };

    return pixels;
};

getVideo();

video.addEventListener('canplay', paintToCanvas);