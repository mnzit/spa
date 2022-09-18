import { detailComponent } from "./components/detail";
import { listComponent } from "./components/list";
import { router } from "./route";
import { $ } from "./utils/selectors";

export const render = $("div#render").element();

export const myRouter = new router();

myRouter.add("list", listComponent)
myRouter.add("detail", detailComponent)

myRouter.render("list");

