// 1. Toggle the background color of the header and footer from black to blue on mouse over and back to original color on mouse leave. use javascript
const header = document.querySelector('header')
const footer = document.querySelector('footer')


header.addEventListener("mouseover", function () {
    this.style.background = 'blue'
});

header.addEventListener("mouseout", function () {
    this.style.background = 'black'
});

footer.addEventListener("mouseover", function () {
    this.style.background = 'blue'
});

footer.addEventListener("mouseout", function () {
    this.style.background = 'black'
});


// 2. Make the “About the Event” header’s and "Coming to the event?" font size double on mouse over on it on it.
/*
const abouttheevent = document.querySelector('#abouttheevent > h2')
const comingtoevent = document.querySelector('#comingtoevent > h2')
const featuredartists = document.querySelector('#featuredartists > h2')


abouttheevent.addEventListener("mouseover", function () {
    this.style.fontSize = '3em'
})

*/
const abouttheevent = document.querySelector('#main article:nth-of-type(1) h2')
const comingtoevent = document.querySelector('#comingtoevent > h2')

abouttheevent.addEventListener("mouseover", function () {
    this.style.fontSize = '3em'
})

comingtoevent.addEventListener("mouseover", function () {
    this.style.fontSize = '3em'
})


// 3. Make the following image disappear on double click.
//const firstImage = document.querySelector('ul.group > li img')
const firstImage = document.querySelector('img[alt="Photo of Barot Bellingham"]')

firstImage.addEventListener("dblclick", function () {
    this.style.display = 'none'
})

// 4. Make following image fade on mouse over and get back to previous state with mouse leave ( use “style=opacity:.5”).
const speakerImage = document.querySelector('img[alt="Photo of Hassum Harrod"]')

speakerImage.addEventListener("mouseover", function () {
    this.style.opacity = '0.5'
})

speakerImage.addEventListener("mouseout", function () {
    this.style.opacity = 'initial'
})

// ⦁     Make the following pic 70% in size on click and toggle back to original size on another click.

const mobileImg = document.querySelector('img[alt="Photo of mobile app"]')

mobileImg.addEventListener("click", function () {
    this.classList.toggle('smaller')
})

// ⦁	Make the following image disappear on double click.

const hotelImg = document.querySelector('img[alt="Photo of Hotel Contempo"]')

hotelImg?.addEventListener("dblclick", function () {
    this.style.display = 'none'
})

/*
// phone image toggle 
var image_resize = document.getElementById("comingtoevent").querySelector("p>img");
image_resize.onclick = function() {
    image_resize.classList.toggle('image_size');
    // alert();
}

// mouse over event
let featured = document.getElementById("featuredartists")

if(featured){
    featured = document.getElementById("featuredartists").querySelector("h2");
    featured.addEventListener("mouseover",function(e) {
        featured.classList.add('font_increase');
    });
}

// double click and image will disappear  
const hotel_img = document.getElementById("thevenue");

if(hotel_img){
    hotel_img.querySelector("p>img")
  hotel_img.addEventListener('dblclick', function(e){
    hotel_img.classList.add('img_disappear');
  });
}

// mouse over event
var artistlist = document.getElementsByClassName("artistlist")[0].querySelector("ul > li > img");

if(artistlist){
    artistlist.addEventListener("mouseover",function(e) {
        artistlist.style.opacity = '0.5';
    });
    artistlist.addEventListener("mouseout",function(e) {
        artistlist.style.opacity = '1';
    });
}

// about


// double click About the Event 

var artistlist_h2 = document.getElementById("artistlist").querySelector("h2");

if(artistlist_h2){
   ;
    artistlist_h2.addEventListener("mouseover",function(e) {
        artistlist_h2.style.fontSize  = '3.0em';
    });
    artistlist_h2.addEventListener("mouseout",function(e) {
        artistlist_h2.style.fontSize  = '1.5em';
    });
}

// // double click and image will disappear  
const artistlist_img1 = document.getElementsByClassName("artist")[0].querySelector("p > img");

if(artistlist_img1){
    artistlist_img1.querySelector("p>img")
    artistlist_img1.addEventListener('dblclick', function(e){
        artistlist_img1.classList.add('img_disappear');
    });
}

// hover
const artistlist_img2 = document.getElementsByClassName("artist")[1].querySelector("p > img");

if(artistlist_img2){
    artistlist_img2.querySelector("p>img")
    artistlist_img2.addEventListener("mouseover",function(e) {
        artistlist_img2.style.opacity = '0.5';
    });
    artistlist_img2.addEventListener("mouseout",function(e) {
        artistlist_img2.style.opacity = '1';
    });
}

*/