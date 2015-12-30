(function() {

    chrome.runtime.onInstalled.addListener(function() {
        chrome.tabs.create({
            url: "options.html"
        });
    });
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "qiniu") {
            chrome.storage.sync.get({
                qiniu: localStorage.qiniu
            }, function(res) {
                localStorage.qiniu = res.qiniu;
                sendResponse({
                    status: res.qiniu
                });
            });
        }
        return true;
    });

})();