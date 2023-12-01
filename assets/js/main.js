
$(window).on('load', function () {
    var preLoder = $(".hola");
    preLoder.fadeOut(1000);
});

$(function () {
    
    "use strict";
    /*---- CURSOR -----*/
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth > 768) {
        var $circle = $('.circle'),
            $follow = $('.circle-follow');
        function moveCircle(e) {
            TweenLite.to($circle, 0.3, {
                x: e.clientX,
                y: e.clientY
            });
            TweenLite.to($follow, 0.7, {
                x: e.clientX,
                y: e.clientY
            });
        }
        // function hoverFunction(e) {
        //     TweenLite.to($circle, 0.3, {
        //         opacity: 1,
        //         scale: 0
        //     });
        //     TweenLite.to($follow, 0.3, {
        //         scale: 3
        //     });
        // }
        // function unhoverFunction(e) {
        //     TweenLite.to($circle, 0.3, {
        //         opacity: 1,
        //         scale: 1
        //     });
        //     TweenLite.to($follow, 0.3, {
        //         scale: 1
        //     });
        // }
        $(window).on('mousemove', moveCircle);
        $("a, button ,.menu-icon").hover(hoverFunction, unhoverFunction);
    }

    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/

});

$(document).ready(function () {
    $(window).on('load', function () {
        var preLoder = $(".hola");
        preLoder.fadeOut(1000);
    });

    if ($('.testimonials-grids-warp').length) {
        $('.testimonials-grids-warp').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            autoplay: false,
            smartSpeed: 2500,
            dots: true
        });
    };
    var owl = $('.owl-carousel-portfolio');
    owl.owlCarousel({
        loop: false,
        margin: 30,
        items: 1,
        autoplay: false,
        smartSpeed: 2500,
        dots: true

    });
    var owl = $('.exicution-slider');
    owl.owlCarousel({
        loop: false,
        margin: 30,
        autoWidth:true,
        autoplay: false,
        dots: false

    });
    var owl = $('.webdevelopment-slider');
    owl.owlCarousel({
        loop: false,
        margin: 30,
        autoWidth:true,
        autoplay: false,
        dots: false

    });

    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .0
    });
});

let custom_arrows = document.querySelector('.circle-arrow');
let portfolio_section = document.querySelector('.without-cursor');
if (portfolio_section) {
    portfolio_section.addEventListener('mouseenter', () => {
        custom_arrows.style.display = 'none';
    });
}
if (portfolio_section) {
    portfolio_section.addEventListener('mouseleave', () => {
        custom_arrows.style.display = 'block'; // Restore the default cursor
    });
}
let nav_pills = document.querySelectorAll('.nav-pills ');
if (nav_pills) {
    nav_pills.forEach(counter => {
        counter.addEventListener('mouseenter', () => {
            custom_arrows.style.display = 'none';
        });
        counter.addEventListener('mouseleave', () => {
            custom_arrows.style.display = 'block'; // Restore the default cursor
        });
    })

}

let contact_us=document.querySelectorAll('.contact-us');
if(contact_us){
    contact_us.forEach(contact=>{
        contact.addEventListener('mouseenter', () => {
            custom_arrows.style.display = 'none';
        });
        contact.addEventListener('mouseleave', () => {
            custom_arrows.style.display = 'block'; // Restore the default cursor
        });
    })
}

let hamburger_menu = document.getElementById('hamburger_menu');
let responsive_header = document.getElementById('side-nav');
let closeside_nav = document.getElementById('close-side-nav');
let wrapper = document.getElementById('body-wrapper');
hamburger_menu.addEventListener("click", () => {
    responsive_header.classList.add('active');
    wrapper.classList.add('active');
    wrapper.style.overflowY = "hidden";

})
closeside_nav.addEventListener('click', () => {
    responsive_header.classList.remove('active');
    wrapper.classList.remove('active');
    wrapper.style.overflowY = "auto";
});
// top nav
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".glaviso-navbar").classList.add('activenav')
    } else {
        document.querySelector(".glaviso-navbar").classList.remove('activenav')
    }
}


function displayFileNametop() {
    // Get the file input element and the label span
    var fileInputtop = document.getElementById('fileInputetop');
    var fileLabeltop = document.getElementById('fileLabeltop');
    var crossIcontop = document.getElementById('crossIcontop');
    var attach_file_top = document.getElementById('attach-file-one-top');


    // Check if a file has been selected
    if (fileInputtop.files.length > 0) {
        var fileNametop = fileInputtop.files[0].name;
        var fileExtensiontop = fileNametop.split('.').pop();
        var fileNameWithoutExtensiontop = fileNametop.slice(0, -(fileExtensiontop.length + 1)); // Remove extension
        var truncatedFileNametop = fileNameWithoutExtensiontop.substring(0, 9);
        fileLabeltop.textContent = truncatedFileNametop + '.' + fileExtensiontop;
        crossIcontop.style.display = 'inline'; // Show the cross icon
        attach_file_top.style.display = "none";
    } else {
        // If no file is selected, revert to the original label text
        fileLabeltop.textContent = "Attach File";
    }
}
function clearFileInputtop() {
    var fileInputtop = document.getElementById('fileInputetop');
    var fileLabeltop = document.getElementById('fileLabeltop');
    var crossIcontop = document.getElementById('crossIcontop');
    var attach_file_top = document.getElementById('attach-file-one-top');

    fileInputtop.value = null; // Clear the file input
    fileLabeltop.textContent = "Attach File";
    crossIcontop.style.display = 'none'; // Hide the cross icon
    attach_file_top.style.display = "inline";
}

function displayFileName() {
    // Get the file input element and the label span
    var fileInput = document.getElementById('fileInpute');
    var fileLabel = document.getElementById('fileLabel');
    var crossIcon = document.getElementById('crossIcon');
    var attach_file_one = document.getElementById('attach-file-one');


    // Check if a file has been selected
    if (fileInput.files.length > 0) {
        var fileName = fileInput.files[0].name;
        var fileExtension = fileName.split('.').pop();
        var fileNameWithoutExtension = fileName.slice(0, -(fileExtension.length + 1)); // Remove extension
        var truncatedFileName = fileNameWithoutExtension.substring(0, 9);
        fileLabel.textContent = truncatedFileName + '.' + fileExtension;
        crossIcon.style.display = 'inline'; // Show the cross icon
        attach_file_one.style.display = "none";
    } else {
        // If no file is selected, revert to the original label text
        fileLabel.textContent = "Attach File";
    }
}
function clearFileInput() {
    var fileInput = document.getElementById('fileInpute');
    var fileLabel = document.getElementById('fileLabel');
    var crossIcon = document.getElementById('crossIcon');
    var attach_file_one = document.getElementById('attach-file-one');

    fileInput.value = null; // Clear the file input
    fileLabel.textContent = "Attach File";
    crossIcon.style.display = 'none'; // Hide the cross icon
    attach_file_one.style.display = "inline";
}



