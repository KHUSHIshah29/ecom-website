let loader = document.querySelector('.loader');

const becomeSellerElement = document.querySelector('.become-seller');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () =>{
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            becomeSellerElement.classList.remove('hide');
        }
    }else{
        location.replace('/login');
    }
}
showApplyFormBtn.addEventListener('click' , () =>{
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})


const applyFormButton = document.querySelector