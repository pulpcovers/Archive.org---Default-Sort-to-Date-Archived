// ==UserScript==
// @name         Archive.org - Default Sort to Date Archived
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sets default sort to "Date Archived" on archive.org pages
// @author       You
// @match        https://archive.org/details/*
// @match        https://archive.org/search.php*
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/pulpcovers/Archive.org---Default-Sort-to-Date-Archived/raw/refs/heads/main/Date%20Archived.js
// @downloadURL  https://github.com/pulpcovers/Archive.org---Default-Sort-to-Date-Archived/raw/refs/heads/main/Date%20Archived.js
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(window.location.href);
    const params = url.searchParams;

    // Only add sort parameter if no sort parameter is currently set
    if (!params.has('sort')) {
        params.set('sort', '-publicdate');
        // Replace the current URL without adding to history
        window.location.replace(url.toString());
    }
})();
