import { render } from ".";

export function router(){

    let routes = new Map();

    return {
        add: function(path, component){
            routes.set(path, component);
        },
        render: function(path){
            if(routes.has(path)){
                let component = routes.get(path);
                render.insert(component);
            }else{
                console.log("Path not found")
            }
        }
    }
}

