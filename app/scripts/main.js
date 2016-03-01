var Overnav = (function(options){

    var self = this;
    var doc = document.documentElement;
    var nav_class = 'js-nav';

    var defaults = {
        width: "200px",
        height: "200px",
        button: document.querySelectorAll('.overnav-btn, .overnav-close')
    }

    var _settings = defaults || {};

    function settings(options){
        for(var prop in options) {
            if(options.hasOwnProperty(prop)){
                _settings[prop] = options[prop];
            }
        }
    }

    function trim(str){
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    }

    function hasClass(el, cn) {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    }

    function addClass(el, cn){
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    }

    function removeClass(el, cn){
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    }

    function toggleNav(e){
        if (hasClass(doc, nav_class)){
            removeClass(doc, nav_class);
        } else {
            addClass(doc, nav_class);
        }
    }


    function init(){
        console.log(_settings);

        var btns = _settings.button;
        for(var i = 0; i<btns.length; i++){
            btns[i].addEventListener('click', toggleNav, false);
        }
    }

    return {
        init: init,
        settings: settings,
        toggleNav: toggleNav
    };

})();

Overnav.init();
Overnav.toggleNav();