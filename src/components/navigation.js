import { myRouter } from "..";
import { $element } from "../utils/elementBuilder";

export const navigationComponent  = $element("div")
                                        .append(
                                            $element("button")
                                                .text("List")
                                                .event("click", () => myRouter.render("list"))
                                            )