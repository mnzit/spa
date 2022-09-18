import { $element } from "./elementBuilder";

export function tableBuilder() {
    let columns = [];
    let datas = [];
    let lazyFunction;
    return {
        addColumns: function(columnArray) {
            this.columns = columnArray
            return this;
        },
        addColumn: function(column){
            this.columns.push(column);
            return this;
        },
        addData: function(datas){
            this.datas = datas;
            return this;
        },
        addLazyData: function(lazyFunction){
            this.lazyFunction = lazyFunction
           return this;
        },
        render: function() {
            let table = $element("table").css("border", "1px solid black")
            let thead= $element("thead")
            let tbody = $element("tbody")

            this.columns.forEach(column => {
                let th = $element("th").text(column).css("border", "1px solid black");
                thead.append(th);
            })

            table.append(thead);
            
            this.lazyFunction((datas) => {
                datas.forEach(data => {
                    let tr = $element("tr")
                    this.columns.forEach(column => {
                        let td = $element("td").css("border", "1px solid black")
                        td.text(data[column.toLowerCase()])
                        tr.append(td);
                    })
                    tbody.append(tr);
                });
            })

            table.append(tbody)
            return table;
        }
    }
}
