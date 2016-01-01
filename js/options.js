(function() {

    var qiniuDomain = document.querySelector('#qiniu-domain');
    qiniuDomain.addEventListener('input', function() {
        chrome.storage.sync.set({
            qiniu: qiniuDomain.value
        });
    });

    var noPreffix = document.querySelector('#checkbox-input');
    noPreffix.addEventListener('change', function() {
        chrome.storage.sync.set({
            noPreffix: this.checked
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        chrome.storage.sync.get({
            qiniu: '',
            noPreffix: false
        }, function(res) {
            document.querySelector('#qiniu-domain').value = res.qiniu;
            document.querySelector('#checkbox-input').checked = res.noPreffix;
        });
    });

})();
