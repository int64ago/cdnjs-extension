(function() {

    var cdnjs = 'https://cdnjs.cloudflare.com';
    var replaceLink = function() {
        chrome.runtime.sendMessage({
            method: 'qiniu'
        }, function(response) {
            qiniu = response.status;
            if (qiniu) {
                var eles = document.getElementsByClassName('library-url');
                Array.prototype.forEach.call(eles, function(ele) {
                    ele.innerText = ele.innerText.replace(cdnjs, qiniu);
                });
            }
        });
    };

    document.body.addEventListener('DOMSubtreeModified', function() {
        replaceLink();
    }, false);

    replaceLink();

})();
