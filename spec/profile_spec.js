"use strict";
var fs = require("fs");

describe("profile spec", function () {
  var sessionHelper = require("../helpers/session_helper");

  afterEach(function () {
    sessionHelper.clearSession();
  });

  xit("I can see my profile", function () {
    // TODO: find out how to deal with timeouts
    sessionHelper.loginAs(
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD
    );

    // browser.takeScreenshot().then(function(png) {
    //   var stream = fs.createWriteStream("tmp/screenshot.png");
    //   stream.write(new Buffer(png, 'base64'));
    //   stream.end();
    // });

    browser.get("admin");

    // open current user toggle
    element(
      by.css(".current-user-dropdown > a")
    ).click();

    element(
      by.linkText("Mi perfil")
    ).click();

    browser.driver.wait(
      browser.driver.isElementPresent(
        by.linkText(process.env.ADMIN_EMAIL)
      ),
      2*1000
    );

    // wait
    browser.sleep(2*1000);
    element(
      by.linkText("Editar")
    ).click();

    // wait
    browser.sleep(2*1000);
    var name = "Algo mas";
    var userName = element(
      by.id("user_name")
    );
    userName.clear();
    userName.sendKeys(name);

    element(
      by.name("commit")
    ).click();
  });
});
