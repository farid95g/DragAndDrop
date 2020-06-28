let draggable_elements = document.querySelectorAll(".draggable-element");
let drop_areas = document.querySelectorAll(".drop-area");
let data_id, data_min, data_max;

draggable_elements.forEach(elm => {
    elm.ondragstart = function(e) {
        e.dataTransfer.setData("id", this.id);
        data_id = Number(document.getElementById(e.dataTransfer.getData("id")).getAttribute("data-id"));
    }
})

drop_areas.forEach(area => {
    area.ondragover = function() {
        data_min = Number(this.getAttribute("data-min"));
        data_max = Number(this.getAttribute("data-max"));
        if (data_min <= data_id && data_max >= data_id) {
            this.classList.add("bg-success");
        } else {
            this.classList.add("bg-danger");
        }
        return false;
    }
})

drop_areas.forEach(area => {
    area.ondragleave = function() {
        this.classList.remove("bg-success");
        this.classList.remove("bg-danger");
    }
})

drop_areas.forEach(area => {
    area.ondrop = function(e){
        if (data_min <= data_id && data_max >= data_id)
            this.appendChild(document.getElementById(e.dataTransfer.getData("id")));
        this.classList.remove("bg-success");
        this.classList.remove("bg-danger");
    }
})