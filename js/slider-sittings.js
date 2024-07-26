// tiny slider

let slider = tns({
    container: '.lacs__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controlsText: [
        '<img src="img/left-previous.svg" alt="лево">',
        '<img src="img/right-next.svg" alt="право">'
    ],
    autoplayButtonOutput: false,
    responsive: {
        320: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        780: {
            gutter: 20,
        },
        892: {
            gutter: 30,
            edgePadding: 20,
        },
        900: {
            items: 1
        }
    }
});