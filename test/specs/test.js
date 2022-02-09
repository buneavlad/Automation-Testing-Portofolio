const Helper = require('../pageobjects/helper.page');

//test

describe('should login with valid credentials', () => {
  it('should have the correct head title', async () => {
        await Helper.open();
        await expect(browser).toHaveTitle('Colectii de moda pentru femei');        

        
 
 
     });
    

     it('Check if you can recover password with an invalid email', async () => {
         const loginPage = $('#customer-account');
         const forgotPasswordPage = $('//*[@id="forget-password-open"]');
         const forgotPasswordField = $('//*[@id="recover-password"]');
         const fortgotPasswordSubmitBtn = $('//*[@id="recover-submit"]');
         const errorWrongEmailForgotPassword = $('//*[@id="password-recover-form"]/div[1]/div');
         await Helper.open();
         await loginPage.click();
         await forgotPasswordPage.click();
         await forgotPasswordField.setValue('vladovidiubunea@test.ro');
         await fortgotPasswordSubmitBtn.click();
         await expect(errorWrongEmailForgotPassword).toHaveText('Aceasta adresa nu este inregistrata in baza noastra de date.');


    });
     

    
     it('login with invalid password', async () => {
        const errorMessage = $('//*[@id="loginform"]/div[1]');
        await Helper.open();
        await Helper.login('vladovidiubunea@gmail.com','12345');
        await browser.pause(2000);
        await expect(errorMessage).toHaveText('Adresa de email sau parola este incorecta. Te rugam sa introduci o alta combinatie.');
        
 
 
     });


     it('login with invalid email form', async () => {
        const errorMessageWrongEmailForm = $('//*[@id="loginform"]/div[1]');
        await Helper.open();
        await Helper.login('vladovidiubunea','parola');
        await browser.pause(2000);
        await expect(errorMessageWrongEmailForm).toHaveText('Adresa de email este invalida.');
        
 
 
     });
  
  
   it('should login with valid credentials', async () => {
        await Helper.open();
        await Helper.login('vladovidiubunea@gmail.com', 'buneavlad12345');
        await browser.pause(2000);



    });





    it('should search for a product', async () => {
     const searchField = $('.text-placeholder');
     const inputSearchText = $('#search-input');
     const searchBtn = $('//*[@id="head-section"]/header/div/nav[1]/div/div[1]');
     const searchResultsTitle = $('.search-results-title');
    
     await Helper.open();
     await browser.pause(2000);
     await searchField.click();
     await browser.pause(2000);
     await inputSearchText.setValue('Ghete');
     await browser.keys("\uE007");
     await expect(searchResultsTitle).toHaveText('Rezultatele cautarii pentru Ghete');

         
         
 
 
     });

     

     it('should add a product in cart', async () => {
        const searchField = $('.text-placeholder');
        const inputSearchText = $('#search-input');
        const searchBtn = $('//*[@id="head-section"]/header/div/nav[1]/div/div[1]'); 
        const clickProduct = $('//*[@id="prod-3223509"]/a/span[1]/img[2]');
        const addToCart = $('#buy-box-wrapper');   
        const cartPage = $('//*[@id="customer-basket"]/div[1]');   
        const productTitle = $('//*[@id="full-site-canvas"]/div[3]/div[1]/div[4]/div[1]/div[2]/div/div[2]/div[1]/a/div[2]');
        const selectSize = $('li.pdp-size-select-item:first-of-type');
        const addToCartFromDropdownBtn = $('#js-pdp-size-select-add');

        await Helper.open();
        await browser.pause(2000);
        await searchField.click();
        await browser.pause(2000);
        await inputSearchText.setValue('Ghete impermeabile cu inchidere velcro Harrelson');
        await browser.keys("\uE007");
        await clickProduct.click();
        await addToCart.scrollIntoView();
        await addToCart.click();
        await browser.pause(4000);
        await selectSize.click();
        await addToCartFromDropdownBtn.click();
        await cartPage.click();
        await expect(productTitle).toHaveText('Ghete impermeabile cu inchidere velcro Harrelson');

       
   
            
            
    
    
        });



        it('should add a product to favorites', async () => {
         const searchField = $('.text-placeholder');
         const inputSearchText = $('#search-input');
         const searchBtn = $('//*[@id="head-section"]/header/div/nav[1]/div/div[1]'); 
         const clickProduct = $('//*[@id="prod-3223509"]/a/span[1]/img[2]');
         const addToWishlistBtn = $('#add-wishlist-box');
         const selectSize = $('li.pdp-size-select-item:first-of-type');
         const addToFavorites = $('#js-pdp-size-select-add');
         const favoritesPage = $('#wishlist-top-menu');
         const addToFavoritesText = $('//*[@id="myFirstFav"]/div/div/div/div[1]/h4');


 
         await Helper.open();
         await browser.pause(2000);
         await searchField.click();
         await browser.pause(2000);
         await inputSearchText.setValue('Ghete impermeabile cu inchidere velcro Harrelson');
         await browser.keys("\uE007");
         await clickProduct.click();
         await addToWishlistBtn.scrollIntoView();
         await addToWishlistBtn.click();
         await selectSize.click();
         await addToFavorites.click();
         await expect(addToFavoritesText).toHaveText('ACEST PRODUS A FOST ADAUGAT IN LISTA TA DE FAVORITE!');      


 
      
    
             
             
     
     
         });

     



    

});


