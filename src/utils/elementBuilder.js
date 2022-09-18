export const $create = (type) => document.createElement(type);


export const $element  = function (type) {
    let element;
    if (type instanceof HTMLElement){
        element = type;
    }else{
        element = $create(type);
      
    }

    return {
        $$: function() {
            return element;
        },
        text: function (text) {
            element.innerText = text;
            return this;
        },
        append: function(innerElement) {
            element.appendChild(innerElement.$$());
            return this;
        },
        insert: function(innerElement) {
            element.innerText = "";
            element.appendChild(innerElement.$$());
            return this;
        },
        event: function(eventType, action){
            element.addEventListener(eventType,action);
            return this;
        },
        css: function(styleType, value){
            element.style[styleType] = value;
            return this;
        }
    }
}