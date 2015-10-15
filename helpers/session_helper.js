var sessionHelper = {
  loginAs: function (email, password) {
    element(
      by.id("user_email")
    ).sendKeys(email);

    element(
      by.id("user_password")
    ).sendKeys(password);

    element(by.name("commit")).click();
  },

  logOut: function () {
    // open current user toggle
    element(
      by.css(".current-user-dropdown > a")
    ).click();

    element(
      by.css("[href='/users/sign_out']")
    ).click();
  },

  clearSession: function () {
    browser.driver.manage().deleteAllCookies();
  }
};

module.exports = sessionHelper;
