var UIcontroller = (function() {

    const DOMStrings = {
        keycode: ".keycode__value",
        key: ".key__value",
        which: ".which__value",
        code: ".code__value",
        loc: ".location__value",
        loc_text: ".location__text",
        numpad: "(Numpad)",
        right: "(Right Modification Keys)",
        left: "(Left Modification Keys)",
        general: "(General Keys)"
    }; 


    let update = (pos, value) => {
        document.querySelector(pos).textContent = value;
    };


    return {

        updateUIelements: (obj) => {
            let keyCode, key, code, loc;

            keyCode = obj.keyCode;
            key = obj.key;
            code = obj.code;
            loc = obj.loc;

            update(DOMStrings.keycode, keyCode);
            update(DOMStrings.key, key);
            update(DOMStrings.which, keyCode);
            update(DOMStrings.code, code);
            update(DOMStrings.loc, loc);

            // 0 -> general, 1 -> left modification, 2 -> right modification, 3 ->numpad
            if(loc === 0) {
                update(DOMStrings.loc_text, DOMStrings.general);
            } else if(loc === 1) {
                update(DOMStrings.loc_text, DOMStrings.left);
            } else if(loc === 2) {
                update(DOMStrings.loc_text, DOMStrings.right);
            } else if(loc === 3) {
                update(DOMStrings.loc_text, DOMStrings.numpad);
            }
        },


        getDOMStrings: () => {
            return DOMStrings;
        }

    };
})();

var controller = (function(UICtrl) {

    let keycodeObject = (obj) => {
        UICtrl.updateUIelements(obj);
    };


    let setUpEventListeners = () => {

        var DOM;
        DOM = UICtrl.getDOMStrings();

        // https://developer.mozilla.org/en-US/docs/Web/Events/keypress 
        document.addEventListener("keypress", (e) => {
            let keyCode, key, code, location, obj;
            // console.log(e);
            
            // 1. KeyCode
            keyCode = e.which || e.keyCode;
            // 2. key
            key = e.key;
            // 3. code
            code = e.code;
            // 4. location
            location = e.location;
            // 0 -> general, 1 -> left modification, 2 -> right modification, 3 ->numpad
            
            obj = {
                keyCode: keyCode,
                key: key,
                code: code,
                loc: location
            }  

            document.getElementById('overlay').style = "display: none;";
            document.getElementById('home').classList.remove('d-none');
            
            keycodeObject(obj);
            
            // if(e.shiftKey) {
            //     console.log("shift was pressed");
            // }
            // else if(e.ctrlKey) {
            //     console.log("Control key was pressed");
            // }
            // else if(e.altKey) {
            //     console.log("Alt key was pressed");
            // }

        });
    };


    return {

        init: () => {
            setUpEventListeners();
        }
    };


})(UIcontroller);

controller.init();