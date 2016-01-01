(function() {

    var replaceLink = function() {
        chrome.runtime.sendMessage({
            method: 'info'
        }, function(res) {
            if (res.qiniu) {
                var cdnjs = 'https://cdnjs.cloudflare.com' + (res.noPreffix ? '/ajax/libs' : '');
                var eles = document.getElementsByClassName('library-url');
                Array.prototype.forEach.call(eles, function(ele) {
                    ele.innerText = ele.innerText.replace(cdnjs, res.qiniu);
                });
            }
        });
    };

    document.body.addEventListener('DOMSubtreeModified', function() {
        replaceLink();
    }, false);

    replaceLink();

})();
