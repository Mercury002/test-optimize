const FAQToggles = document.querySelectorAll('.main__faq--box--toggle')
const mainContentHiddenBTN = document.querySelector('.main__content--show-more')
const burgerMenu = document.querySelector('.burger-menu')

mainContentHiddenBTN.addEventListener('click', function() {
    document.querySelector('.main__content--hidden-part').classList.toggle('show')
})
burgerMenu.addEventListener('click', function() {
    document.querySelector('.mobile-dropdown').classList.toggle('active')
    burgerMenu.classList.toggle('active')
})

FAQToggles.forEach(item => {
    item.addEventListener('click', function() {
        const parentDiv = item.closest('.main__faq--box')

        if (parentDiv.classList.contains('active')) {
            parentDiv.classList.remove('active')
        } else {
            parentDiv.classList.add('active')
        }
    })
})

function openTab(event, tabID) {
    const tabContents = document.getElementsByClassName('tab-content')
    const mainTabs = document.getElementsByClassName('main__tab')
    for (let i = 0; i < mainTabs.length; i++) {
        mainTabs[i].classList.remove('active')
    }

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active')
    }

    const tabs = document.getElementsByClassName('tab')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active')
    }

    document.getElementById(tabID).classList.add('active');
    event.target.classList.add('active')
}


new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        700: {
            slidesPerView: 3
        }
    }
});
