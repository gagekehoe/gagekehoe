/*
 * Strings to personalize. Leave a value as "" until you have it.
 * Empty values keep the sentences already written in the HTML.
 * See README.md, section "Strings to personalize".
 *
 * supportEmail  a plain address you actually read
 * legalEntity   company or other legal name. Not a street address.
 * appleStoreUrl https link to the Apple App Store listing
 * playStoreUrl  https link to the Google Play listing
 */
(function () {
  "use strict";

  var siteConfig = {
    supportEmail: "gagekehoe17@gmail.com",
    legalEntity: "",
    appleStoreUrl: "",
    playStoreUrl: ""
  };

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function httpsUrl(value) {
    try {
      var url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  function fillSupport(email) {
    var nodes = document.querySelectorAll("[data-slot='support']");
    var index;
    for (index = 0; index < nodes.length; index += 1) {
      var node = nodes[index];
      var link = document.createElement("a");
      link.href = "mailto:" + email;
      link.textContent = email;
      node.textContent = "";
      node.appendChild(document.createTextNode("Email "));
      node.appendChild(link);
      node.appendChild(document.createTextNode(" for help with Letter Board. Include your device and the app version, and leave out your password."));
    }
  }

  function fillLegal(name) {
    var nodes = document.querySelectorAll("[data-slot='legal-entity']");
    var index;
    for (index = 0; index < nodes.length; index += 1) {
      nodes[index].textContent = name + " publishes Letter Board. Gage Kehoe is the developer.";
    }
  }

  function storeItem(href, label) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.href = href;
    link.rel = "noopener noreferrer";
    link.textContent = label;
    item.appendChild(link);
    return item;
  }

  function fillStores(apple, play) {
    var nodes = document.querySelectorAll("[data-slot='stores']");
    var index;
    for (index = 0; index < nodes.length; index += 1) {
      var node = nodes[index];
      var intro = document.createElement("p");
      var list = document.createElement("ul");
      intro.textContent = "Install Letter Board from the store you use. Each link opens the public listing.";
      if (apple) {
        list.appendChild(storeItem(apple, "Letter Board on the Apple App Store"));
      }
      if (play) {
        list.appendChild(storeItem(play, "Letter Board on Google Play"));
      }
      node.textContent = "";
      node.appendChild(intro);
      node.appendChild(list);
      if (!apple || !play) {
        var note = document.createElement("p");
        note.textContent = apple
          ? "A Google Play link is not published here yet."
          : "An Apple App Store link is not published here yet.";
        node.appendChild(note);
      }
    }
  }

  var email = siteConfig.supportEmail.trim();
  var legal = siteConfig.legalEntity.trim();
  var apple = httpsUrl(siteConfig.appleStoreUrl.trim());
  var play = httpsUrl(siteConfig.playStoreUrl.trim());

  if (isEmail(email)) {
    fillSupport(email);
  }
  if (legal) {
    fillLegal(legal);
  }
  if (apple || play) {
    fillStores(apple, play);
  }
}());
