var UIcontroller = (function() {

    var DOMStrings = {
        keycode: ".keycode"
    }; 

    return {

        getDOMStrings: () => {
            return DOMStrings;
        }
    };
})();

var controller = (function(UICtrl) {

    var setUpEventListeners = () => {
        var DOM;
        DOM = UICtrl.getDOMStrings();

        // https://developer.mozilla.org/en-US/docs/Web/Events/keypress 
        document.addEventListener("keypress", (e) => {
            console.log(e);
            // console.log(e.key);
            // console.log(e.keyCode);
            // console.log(e.code);
            // console.log(e.charCode);
        });
    };

    return {

        init: () => {
            setUpEventListeners();
        }
    };


})(UIcontroller);

controller.init();