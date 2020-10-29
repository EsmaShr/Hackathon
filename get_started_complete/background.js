// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  // fetch('https://type.fit/api/quotes')
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     chrome.storage.sync.set({ 'motivational-quotes': data }, function () {
  //       console.log('Data is set');
  //     });
  //   });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: ['.com','.io']},
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
