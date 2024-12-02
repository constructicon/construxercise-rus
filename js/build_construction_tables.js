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

            // Create a wrapper for the text and icon
            const textIconWrapper = document.createElement("span");
            textIconWrapper.setAttribute("class", "d-inline-flex align-items-center tiptext");
            textIconWrapper.style.gap = "5px"; // Small gap between text and icon

            // Create the link and icon
            const constr_id = data["construction_table_rows"][i][0];
            const constr_link = "https://constructicon.github.io/russian/#" + constr_id;

            const link = document.createElement("a");
            link.setAttribute("href", constr_link);
            link.setAttribute("target", "_blank"); // Open link in a new tab
            link.setAttribute("title", "View construction details");

            const icon = document.createElement("i");
            icon.setAttribute("class", "bi bi-box-arrow-up-right");

            link.appendChild(icon); // Add icon to link
            textIconWrapper.appendChild(txt); // Add text to wrapper
            textIconWrapper.appendChild(link); // Add link (icon) to wrapper

            // Add iframe for preview functionality (hidden by default)
            const iframe = document.createElement("iframe");
            iframe.setAttribute("class", "description");
            iframe.setAttribute("src", constr_link);
            iframe.style.display = "none"; // Initially hidden
            iframe.style.position = "absolute"; // Position it dynamically
            iframe.style.zIndex = "10"; // Ensure it appears above other elements
            iframe.style.width = "400px"; // Set preview width
            iframe.style.height = "200px"; // Set preview height

            // Show preview on hover
            textIconWrapper.onmouseenter = function () {
                iframe.style.display = "block";
            };
            textIconWrapper.onmouseleave = function () {
                iframe.style.display = "none";
            };

            textIconWrapper.appendChild(iframe); // Add iframe to wrapper

            // Wrapper for text, icon, and buttons
            const textButtonWrapper = document.createElement("div");
            textButtonWrapper.setAttribute("class", "d-flex align-items-center justify-content-between");
            textButtonWrapper.style.gap = "10px"; // Add spacing between elements
            textButtonWrapper.style.marginBottom = "5px"; // Ensure spacing for equivalents below
            textButtonWrapper.appendChild(textIconWrapper); // Add text and icon to wrapper

            // Add buttons for equivalents
            const equivalentButtons = document.createElement("div");
            equivalentButtons.setAttribute("class", "btn-group btn-group-sm");
            equivalentButtons.setAttribute("role", "group");

            const eng = document.createElement("button");
            eng.setAttribute("type", "button");
            eng.setAttribute("class", "btn btn-light");
            eng.innerHTML = "EN";

            const translation_text_eng = data["construction_table_rows"][i][3];
            eng.onclick = function () {
                engText.innerHTML = translation_text_eng;
                engText.style.display = engText.style.display === "block" ? "none" : "block";
            };

            const norw = document.createElement("button");
            norw.setAttribute("type", "button");
            norw.setAttribute("class", "btn btn-light");
            norw.innerHTML = "NO";

            const translation_text_norw = "placeholder";
            norw.onclick = function () {
                norwText.innerHTML = translation_text_norw;
                norwText.style.display = norwText.style.display === "block" ? "none" : "block";
            };

            equivalentButtons.appendChild(eng);
            equivalentButtons.appendChild(norw);
            textButtonWrapper.appendChild(equivalentButtons); // Add buttons to wrapper

            // Equivalents (hidden by default)
            const engText = document.createElement("p");
            engText.setAttribute("class", "small font-weight-light text-muted");
            engText.style.display = "none"; // Initially hidden

            const norwText = document.createElement("p");
            norwText.setAttribute("class", "small font-weight-light text-muted");
            norwText.style.display = "none"; // Initially hidden

            t.appendChild(textButtonWrapper); // Add wrapper to the cell
            t.appendChild(engText); // Add English equivalent below
            t.appendChild(norwText); // Add Norwegian equivalent below

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
