"use strict";

describe("moi login", function () {
  var sessionHelper = require("../helpers/session_helper");

  beforeEach(function () {
    browser.get("users/sign_in");
  });

  afterEach(function () {
    sessionHelper.clearSession();
  });

  it("should show error alert", function () {
    sessionHelper.loginAs(
      process.env.ADMIN_EMAIL,
      "wrong"
    );

    var alertText = element(
      by.css(".alert-warning")
    ).getText();
    expect(alertText).toContain("inválidos");
  });

  it("should login as admin", function () {
    sessionHelper.loginAs(
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD
    );

    var alertText = element(
      by.css(".alert-success")
    ).getText();
    expect(alertText).toContain("satisfactoriamente");
  });

  it("should logout on admin panel", function () {
    sessionHelper.loginAs(
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD
    );
    browser.get("admin");
    sessionHelper.logOut();

    var alertText = element(
      by.css(".alert-success")
    ).getText();
    expect(alertText).toContain("cerrado la sesión");
  });
});
