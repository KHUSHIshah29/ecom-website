const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
        <img src="../img/footerlogo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link"> t-shirts</a></li>
                <li><a href="#" class="footer-link"> sweatshirts</a></li>
                <li><a href="#" class="footer-link"> t-shirts</a></li>
                <li><a href="#" class="footer-link"> trousers</a></li>
                <li><a href="#" class="footer-link"> jeans</a></li>
                <li><a href="#" class="footer-link"> shoes</a></li>
                <li><a href="#" class="footer-link"> casuals</a></li>
                <li><a href="#" class="footer-link"> formal</a></li>
                <li><a href="#" class="footer-link"> sports</a></li>
                <li><a href="#" class="footer-link"> watch</a></li>

            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link"> t-shirts</a></li>
                <li><a href="#" class="footer-link"> sweatshirts</a></li>
                <li><a href="#" class="footer-link"> t-shirts</a></li>
                <li><a href="#" class="footer-link"> trousers</a></li>
                <li><a href="#" class="footer-link"> jeans</a></li>
                <li><a href="#" class="footer-link"> shoes</a></li>
                <li><a href="#" class="footer-link"> casuals</a></li>
                <li><a href="#" class="footer-link"> formal</a></li>
                <li><a href="#" class="footer-link"> sports</a></li>
                <li><a href="#" class="footer-link"> watch</a></li>

            </ul>

        </div>

    </div>
    <p class="footer-title">about company</p>
    <p class="info">A good company culture doesn’t just manifest itself out of thin air. First, it has to be articulated and communicated throughout the organization, and then it can be lived out by the leadership and employees at every level. Positive company culture has values that every employee knows by heart. These values and this mission are accessible and branded into all of the company’s internal and external communications. 

    </p>


    <p class="info"> support emails - help@clothing.com,
        customersupport@clothing.com  </p>
        <p class="info">telephone - 02083734565</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link"> terms & services</a>
                <a href="#" class="social-link"> privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link"> Instagram</a>
                <a href="#" class="social-link"> Facebook</a>
                <a href="#" class="social-link"> Twitter</a>
            </div>

        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
   
   
   
   
   
    `;
}
createFooter()