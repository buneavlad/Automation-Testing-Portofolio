

const Page = require('./page');

class Helper extends Page {
 
    get loginPage(){
        return $('#customer-account');
    }


    get inputUsername() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#pizokel_customer_submit');
    }


    async login (username, password) {
        await this.loginPage.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new Helper();
