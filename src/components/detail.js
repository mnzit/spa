import { $element } from "../utils/elementBuilder";
import { navigationComponent } from "./navigation";

export const detailComponent = $element("div")
                                    .append(navigationComponent)
                                    .append($element("div").text("Detail Component"))

