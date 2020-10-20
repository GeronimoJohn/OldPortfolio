const tl = gsap.timeline({defaults : {ease: 'power1.out'}});

tl.to('.text-animation', {y:'0%', duration: 2, stagger: 0.25});
tl.to('.slider', {y:'-100%', duration: 2.5, delay: 0.75});
tl.to('.introAnimation', {y:'-100%', duration: 1}, "-=1.7");
tl.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.nav-links', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.intro-content', {opacity: 0, x:-30}, {opacity: 1, x:0, duration: 1}, "-=1");
tl.fromTo('.intro-profilePicture', {opacity: 0, x:30}, {opacity: 1, x:0, duration: 1}, "-=1");

