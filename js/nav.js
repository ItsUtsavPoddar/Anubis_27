const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <img src="img/handloom_logo.jpg" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="img/user1.png" alt=""></i></a>
            <a href="#"><img src="img/cart1.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Cloths</a></li>
        <li class="link-item"><a href="#" class="link">Handicrafts</a></li>
    </ul>
    `;
}

createNav();