import { $element } from "./elementBuilder";

export const $  = (query) => {
    let elementsFound = document.querySelectorAll(query);
    return {
        get: function(){
            return elementsFound.length > 1 && elementsFound.length != 0 ? elementsFound: elementsFound[0];
        },
        element: function(){
            return $element(elementsFound[0]);
        }
    }
}