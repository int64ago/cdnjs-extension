(function() {

    var input = document.querySelector('input')
    input.addEventListener('input', function() {
        localStorage.qiniu = input.value;
        chrome.storage.sync.set({
            qiniu: input.value
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        chrome.storage.sync.get({
            qiniu: ''
        }, function(res) {
            document.querySelector('input').value = res.qiniu;
        });
    });

})();
