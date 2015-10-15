"use strict";

describe("moi login", function () {
  describe("wrong credentials", function () {

    it("should show error alert", function () {
      browser.get("users/sign_in");

      var email = "admin@example.com";
      var password = "wrong";
      element(by.id("user_email")).sendKeys(email);
      element(by.id("user_password")).sendKeys(password);
      element(by.name("commit")).click();

      var alertText = element(by.css(".alert-warning")).getText();
      expect(alertText).toContain("inválidos");
    });
  });
});
