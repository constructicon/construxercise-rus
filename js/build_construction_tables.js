const tree = document.createDocumentFragment();
const lesson_id = document.title.split(" ")[1]
if (document.title.split(" ")[0] == "Lesson") {
    var r = await axios.get("https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/lessons.yml");
} else {
    var r = await axios.get("https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/functions.yml");
}

let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

function annotate(text) {
    // finds constructions between special symbols and changes their color
    let matches = text.match(/\^.+?@/g);
    if (matches){
        for (let substring of matches) {
            text = text.replace(substring, '<b><span style="color: #5980B9">' + substring + '</span></b>');
        }
        let rem_matches = text.match(/\^/g);
        for (let rm of rem_matches){
            text = text.replace(rm, "")
        }
        let rem_matches2 = text.match(/@/g);
        for (let rm of rem_matches2){
            text = text.replace(rm, "")
        }
    }
    return text}

const data = records[0][lesson_id]
const part_1 = document.createElement("div")
part_1.setAttribute("class", "container px-4")

const lesson_title = document.createElement("h1")
lesson_title.appendChild(document.createTextNode(data["lesson_name"]));

// file link

part_1.appendChild(lesson_title)

if (document.title.split(" ")[0] == "Lesson") {
    var file = document.createElement("a")
    file.setAttribute("class", "btn btn-light float-end")
    file.setAttribute("href", `../../files/Lesson%20${data["lesson_id"]}.%20Download.pdf`)
    file.setAttribute("role", "button")
    file.setAttribute("target", "_blank")
    file.appendChild(document.createTextNode("Download"))
    lesson_title.appendChild(file)

    var constructions = document.createElement("h3")
    constructions.appendChild(document.createTextNode("Конструкции урока"));
    part_1.appendChild(constructions)
}

// Table creation code (from your previous script)
var constr_table = document.createElement("table");
constr_table.setAttribute("class", "table");

var thead = document.createElement("thead");
thead.setAttribute("class", "table-primary");

var tr_head = document.createElement("tr");

var table_header = ["ID", "Construction", "Illustration"];
for (var i = 1; i <= 2; i++) {
    var t = document.createElement("th");
    t.setAttribute("scope", "col");
    t.appendChild(document.createTextNode(table_header[i]));
    tr_head.appendChild(t);
}

constr_table.appendChild(thead);
thead.appendChild(tr_head);

var tbody = document.createElement("tbody");
constr_table.appendChild(tbody);

for (var i = 0; i < data["construction_table_rows"].length; i++) {
    var tr = document.createElement("tr");

    for (var k = 1; k <= 2; k++) {
        var t = document.createElement("td"); // Create a new <td> for each cell
        var txt = document.createElement("span"); // Use <span> for inline formatting

        if (k == 1) {
            // Apply annotate to format the text
            txt.innerHTML = annotate(String(data["construction_table_rows"][i][k]));

            // Add the annotated text
            t.appendChild(txt); // Add the formatted text

            // Create the link and icon
            const constr_id = data["construction_table_rows"][i][0];
            const constr_link = "https://constructicon.github.io/russian/#" + constr_id;

            // Create the icon link
            const link = document.createElement("a");
            link.setAttribute("href", constr_link);
            link.setAttribute("target", "_blank"); // Open link in a new tab
            link.setAttribute("title", "View construction details"); // Tooltip on hover

            const icon = document.createElement("i");
            icon.setAttribute("class", "bi bi-box-arrow-up-right"); // Bootstrap icon class
            icon.style.marginLeft = "5px"; // Add spacing between text and icon

            link.appendChild(icon); // Add the icon to the link

            // Create the iframe to show preview (initially hidden)
            const iframe = document.createElement("iframe");
            iframe.setAttribute("class", "description");
            
            iframe.setAttribute("src", constr_link);
            iframe.style.display = "none"; // Initially hide the iframe

            const iconWrapper = document.createElement("span");
            iconWrapper.classList.add("tiptext");
            
            link.appendChild(icon);  // Append the icon to the link
            iconWrapper.appendChild(link);  // Append the link to the wrapper
            iconWrapper.appendChild(iframe);

            t.appendChild(iconWrapper); // Add the wrapper to the cell

        } else if (k == 2) {
            // Add plain text or other content for the second column
            txt.innerHTML = annotate(String(data["construction_table_rows"][i][k]));
            t.appendChild(txt);
        }

        tr.appendChild(t); // Append the <td> to the row
    }

    tbody.appendChild(tr); // Append the row to the table body
}


// var abbvs = document.createElement("p")

// for (var i = 0; i < data["lesson_instructions"].length; i++) {
//     abbvs.appendChild(document.createTextNode(data["lesson_instructions"][i]))
//     abbvs.appendChild(document.createElement("br"))
// }
// var constr_link = document.createElement("a")
// constr_link.setAttribute("href", "https://constructicon.github.io/russian/")
// constr_link.setAttribute("target", "_blank")
// constr_link.appendChild(document.createTextNode("Русский конструктикон"))

// abbvs.appendChild(constr_link)
// abbvs.appendChild(document.createTextNode(" содержит информацию обо всех конструкциях урока"))



part_1.appendChild(constr_table)
// part_1.appendChild(abbvs)
// Now, add the mouseover and mouseout event handlers


tree.appendChild(part_1)

document.getElementById("start_table").appendChild(tree)
