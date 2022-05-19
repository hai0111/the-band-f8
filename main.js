const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
// Đặt biến để gọi đến class js-buy-ticket và js-modal
// Hàm hiển thị ( thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

// Lặp qua từng thẻ button và nghe hành vi click !
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Đặt biến để gọi đến class js-modal-close
const buyBtnsClose = document.querySelector('.js-modal-close')

// Hàm đóng ( Gỡ bỏ class open của modal)
function closeBuyTickets() {
    modal.classList.remove('open')
}

// Nghe hành vi click vào nút close để chạy hàm closeBuyTickets
    buyBtnsClose.addEventListener('click', closeBuyTickets)

// Nghe hành vi click vào vùng modal để chạy hàm closeBuyTickets
// Chú ý !!! : Nếu làm như này thì click vào các thành phần con bên trong modal thì cũng chạy hàm 
    modal.addEventListener('click',closeBuyTickets)

// Giải quyết vấn đề trên như sau
const modalContainer = document.querySelector('.js-modal-container')
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

let menuBtn = document.querySelector('.menu-btn')
let headerElement = document.querySelector('#header')
let menuItems = document.querySelectorAll('#nav li a')
let moreElement = document.querySelector('#moreElement')
let headerHeight = headerElement.clientHeight


// Function handle menuBtn 
function handleMenuBtn(){
    let checkClose = headerElement.clientHeight === headerHeight
    if(checkClose || this === moreElement){
        headerElement.style.height = "auto"
    } else {
        headerElement.style.height = null
    }
}

function preventDefault(e){
    e.preventDefault()
}

function stopPropagation(e){
    e.stopPropagation()
}

// Active function
menuBtn.onclick = handleMenuBtn
for(key in menuItems){
    menuItems[key].onclick = handleMenuBtn
}

moreElement.onclick = function(e){
    preventDefault(e)
}