const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
const frames = {
    currentIndex: 0,
    maxIndex: 382
}

let imagesLoaded = 0;
const images = []

gsap.registerPlugin(ScrollTrigger);

function preloadImager() {
    for (var i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `./video/frame_${i.toString().padStart(4, "0")}.png`;
        // console.log(imageUrl)
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === frames.maxIndex) {
                loadImage(frames.currentIndex);
                StartAnimetion();
            }
        }
        images.push(img);
    }
}

function loadImage(index) {
    if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale
        const newHeight = img.height * scale

        const offSetX = (canvas.width - newWidth) / 2
        const offSetY = (canvas.height - newHeight) / 2

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offSetX, offSetY, newWidth, newHeight);
        frames.currentIndex = index;

    }
}

function StartAnimetion() {
    console.log("Animation Started");
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".parent",
            start:"top top",
            scrub:2,
            end:"bottom bottom",
            markers:true
        }
    })
    tl.to(frames,{
        currentIndex: frames.maxIndex,
        onUpdate:function () {
            loadImage(Math.floor(frames.currentIndex))
        }
    })
}



preloadImager()