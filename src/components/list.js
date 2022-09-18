import { $element } from "../utils/elementBuilder";
import { tableBuilder } from "../utils/tableBuilder";
import { navigationComponent } from "./navigation";

export const listComponent = $element("div")
                                .append(navigationComponent)
                                .append($element("div").text("List Component"))
                                .append(new tableBuilder()
                                    .addColumns(["Id", "Title", "Price", "Category"])
                                    .addLazyData((sendDataToTable) => {
                                        fetch(`https://fakestoreapi.com/products`, {method: 'GET'})
                                        .then((response) => response.json())
                                        .then((products) => sendDataToTable(products));
                                    }).render()
                                )
