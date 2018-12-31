var UIcontroller = (function() {

    var DOMStrings = {
        keycode: ".keycode__value",
        key: ".key__value",
        which: ".which__value",
        code: ".code__value",
        loc: ".location__value"
    }; 

    return {

        
        updateUIelements: (obj) => {
            let keyCode, key, code, loc;

            keyCode = obj.keyCode;
            key = obj.key;
            code = obj.code;
            loc = obj.loc;

            document.querySelector(DOMStrings.keycode).textContent = keyCode;
            document.querySelector(DOMStrings.key).textContent = key;
            document.querySelector(DOMStrings.which).textContent = keyCode;
            document.querySelector(DOMStrings.code).textContent = code;
            document.querySelector(DOMStrings.loc).textContent = loc;

            // console.log(keyCode);
            // console.log(key); 
            // console.log(code);
            // console.log(location);
            
        },

        getDOMStrings: () => {
            return DOMStrings;
        }
    };
})();

var controller = (function(UICtrl) {

    var keycodeObject = (obj) => {
        UICtrl.updateUIelements(obj);
    };

    var setUpEventListeners = () => {
        var DOM;
        DOM = UICtrl.getDOMStrings();

        // https://developer.mozilla.org/en-US/docs/Web/Events/keypress 
        document.addEventListener("keypress", (e) => {
            console.log(e);
            // console.log(e.key);  // The key value of the key represented by the event.
            // console.log(e.code); // Holds a string that identifies the physical key being pressed

            // deprecated attributes
            // console.log(e.keyCode);  // numerical code identifying the unmodified value of the pressed key
            // console.log(e.which);
            // console.log(e.charCode); // The Unicode reference number of the key

            // if(e.shiftKey) {
            //     console.log("shift was pressed");
            // }
            // else if(e.ctrlKey) {
            //     console.log("Control key was pressed");
            // }
            // else if(e.altKey) {
            //     console.log("Alt key was pressed");
            // }

            // 1. KeyCode
            let keyCode = e.which || e.keyCode;
            console.log(keyCode);
            // 2. key
            let key = e.key;
            console.log(key); 
            // 3. code
            let code = e.code;
            console.log(code);
            // 4. location
            let location = e.location;
            // 0 -> general, 1 -> left modification, 2 -> right modification, 3 ->numpad
            console.log(location);
            
            var obj = {
                keyCode: keyCode,
                key: key,
                code: code,
                loc: location
            }  

            keycodeObject(obj);

        });
    };

    return {

        init: () => {
            setUpEventListeners();
        }
    };


})(UIcontroller);

controller.init();