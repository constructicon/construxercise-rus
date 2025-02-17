const tree = document.createDocumentFragment();

const lesson_id = document.title.split(" ")[1]

if (document.title.split(" ")[0] == "Lesson") {
    var r = await axios.get(`https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/lessons/lesson${lesson_id}.yml`);
} else {
    console.log(2)
    var r = await axios.get(`https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/functions/function${lesson_id}.yml`);
    
}
let json_data = jsyaml.loadAll(r.data);
let records = {};

for (let key of Object.keys(json_data)) {
    records[key] = json_data[key];
}

const data = records[0]
const main_content = document.createElement("div")
main_content.setAttribute("class", "container px-4")

const exercises_amount = Object.keys(data).length

function annotate(text) {
    let matches = text.match(/(?:<br\s*\/?>\s*)?\^.+?@/g); // Matches ^...@ and accounts for <br> before ^
    if (matches) {
        for (let substring of matches) {
            // Remove ^ and @ from the substring
            let cleanSubstring = substring.replace(/(?:<br\s*\/?>\s*)?\^|@$/g, "").trim(); // Remove ^, @, and spaces
            let styledSubstring = `<b><span style="color: #5980B9">${cleanSubstring}</span></b>`;
            // Preserve <br> if it exists, otherwise just replace normally
            text = text.replace(substring, substring.startsWith('<br') 
                ? `<br>${styledSubstring}` 
                : styledSubstring);
        }
    }
    return text;
}


function hover_diff_words(text, word) {
    // console.log(0)
    let matches = [...text.matchAll(/.+?\*/g)]
    if (matches.length == 1) {
        for (let match of matches) {
            match = match[0].split(" ")[match[0].split(" ").length - 1]
            text = text.replace(match, `<span title='${word}'>${match}</span>`)
        }
    } 
    else {
        for (let z = 0; z < matches.length; z++) {
            let match = matches[z][0].split(" ")[matches[z][0].split(" ").length - 1]
            console.log(match, word[z + 1])
            text = text.replace(match, `<span title='${word[z + 1]}'>${match}</span>`)
        }
    }
    return text

}

function show_item(x, item) {
    x.innerHTML = item;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.appendChild(document.createElement("br"))
        x.appendChild(document.createElement("br"))
    }
}

function check_answer(x_input, x_result, answer_key) {
    let result;
    x_result.setAttribute('class', 'px-2 py-1 m-1 rounded')

    if (Array.isArray(answer_key)) {

        // if there are multiple answers that could be considered correct, check if input in that set
        if (answer_key.includes(x_input.value)) {
            // answer is correct
            result = "Правильно";
            x_result.style.backgroundColor = "#6ef184";

        } else {
            // answer is incorrect
            result = "Неправильно";
            x_result.style.backgroundColor = "#ee5151";

        };
    } else {
        // if the answer is a string there is only one possible answer, check that it matches the input
        answer_key = answer_key.toLowerCase()
        if (x_input.value.toLowerCase() == answer_key || x_input.value.toLowerCase() == answer_key.slice(0, -1)) {
            result = "Правильно";
            x_result.style.backgroundColor = "#6ef184";

        } else {
            result = "Неправильно";
            x_result.style.backgroundColor = "#ee5151";

        };
    };

    x_result.innerHTML = result;
}

function check_answer_multichoice(selected_answer, result_text, answer_set){
    let result;
    result_text.setAttribute('class', 'px-2 py-1 m-1 rounded')

                        
    var areSetsEqual = (setA, setB) => setA.size === setB.size && [...setA].every(value => setB.has(value))

    if (areSetsEqual(answer_set, selected_answer)) {
        result = "Правильно";
        result_text.style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно";
        result_text.style.backgroundColor = "#ee5151";
    };

    result_text.innerHTML = result;
}

function create_input() {

    let your_answer = document.createElement("label")
    your_answer.setAttribute("class", "label")
    your_answer.innerHTML = "Ваш ответ:"

    let input = document.createElement("input")
    // input.setAttribute("style", "background-color: #ddf1fe")
    input.setAttribute("class", "form-control")
    input.setAttribute("aria-describedby", "passwordHelpBlock")

    task.appendChild(your_answer);
    task.appendChild(input);
    return input
}

function add_image(image_data) {
    // let image_block = document.createElement("div")
    let image = document.createElement("img")
    // if (Boolean(subtask)) {
    //     var image_data = data[exercise_id]["task"][`task${i}`]["image"]
    //     subtask.appendChild(image)
    // } else {
    //     var image_data = data[exercise_id]["image"]
    //     all_exercise.appendChild(image)
    // }

    image.setAttribute("src", image_data["link"])
    image.setAttribute("alt", "image description")
    // image.setAttribute("style", "margin: 50px")

    if (image_data["width"] != null) {
        image.setAttribute("style", `width: ${image_data["width"]}px`)
    } else if (image_data["height"] != null) {
        image.setAttribute("style", `height: ${image_data["height"]}px`)
    } else {
        image.setAttribute("style", "width: 800px")
    }
    if (image_data["text"] != null) {
        let image_text = document.createElement("div")
        image_text.innerHTML = image_data["text"]
        // image_block.appendChild(image_text)

    }
    // image_block.appendChild(image)
    // return image_block
    return image
}


function add_audio(lesson_id, exercise_id, audio_id) {
    // function to insert an audio file with a voiceover of text in task if relevant
    let audio_block = document.createElement("div")
    audio_block.setAttribute("class", "m-3 align-bottom")

    let audio = document.createElement("audio")
    audio.setAttribute("controls", "")

    // find audiofile based on lesson and exercise number
    const path = "https://github.com/constructicon/construxercise-rus/raw/main/voiceovers/" + lesson_id + "/less" + lesson_id + "ex" + exercise_id + audio_id + ".wav"
    audio.setAttribute("src", path)

    audio_block.appendChild(audio)
    return audio_block
}


function add_answer(answer_to_show, answer_key, input) {

    let answer_text = document.createElement("p");

    let buttons = document.createElement("div")
    buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end")
    buttons.setAttribute("style", "margin-top: 10px")

    let button2 = document.createElement("button")
    button2.setAttribute("type", "button")
    button2.setAttribute("class", "btn btn-outline-info float-end btn-sm")
    button2.innerHTML = "Answer key"

    if (Boolean(input)) {

        var result_text = document.createElement("p");
        result_text.setAttribute("style", "display: inline-block")

        let button1 = document.createElement("button")
        button1.setAttribute("type", "button")
        button1.setAttribute("class", "btn btn-outline-info float-end btn-sm")
        button1.innerHTML = "Check Answer"

        button1.onclick = function () {
            check_answer(input, result_text, answer_key)
        }
        buttons.appendChild(button1);
    }
    button2.onclick = function () {
        show_item(answer_text, annotate(String(answer_to_show)));
    }
    buttons.appendChild(button2);
    task.appendChild(buttons);

    if (Boolean(input)) {
        task.appendChild(result_text);
    }
    task.appendChild(answer_text);
}


function add_table(subtask, taskKey) {
    let table = document.createElement("table");
    table.setAttribute("class", "table table-bordered");

    let table_data = Boolean(subtask)
        ? data[exercise_id]['task'][taskKey]["table"]
        : data[exercise_id]["table"];

    if (Boolean(subtask)) {
        subtask.appendChild(table);
    } else {
        all_exercise.appendChild(table);
        main_content.appendChild(all_exercise);
    }

    if (table_data["vertical_align"] === "+") {
        table.setAttribute("style", "vertical-align: middle;");
    }

    if (table_data["width"] != null) {
        table.setAttribute("style", `width: ${table_data["width"]}px`);
    }

    if (table_data["heading"] != null) {
        let thead = document.createElement("thead");
        let tr_head = document.createElement("tr");

        let table_header = table_data["heading"];
        for (let i = 0; i < table_header.length; i++) {
            let th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.innerHTML = annotate(String(table_header[i]));
            tr_head.appendChild(th);
        }

        thead.appendChild(tr_head);
        table.appendChild(thead);
    }

    let tbody = document.createElement("tbody");
    let rows_amount = Object.keys(table_data).filter(key => key.startsWith("row")).length;

    // Track cells to skip due to rowspan
    let skipCells = {};

    for (let i = 1; i <= rows_amount; i++) {
        let tr = document.createElement("tr");

        if (table_data["horizontal_align"] === "+") {
            tr.setAttribute("style", "text-align: center;");
        }

        let row_data = table_data[`row${i}`];

        for (let k = 0; k < row_data.length; k++) {
            // Skip cells covered by a previous rowspan
            if (skipCells[`${i}-${k}`]) {
                continue;
            }

            let cell_data = row_data[k];
            let td = document.createElement("td");

            if (typeof cell_data === "object") {
                if (cell_data.text) {
                    td.innerHTML = annotate(String(cell_data.text));
                };
                if (cell_data.rowspan) {
                    td.setAttribute("rowspan", cell_data.rowspan);
                    for (let r = 1; r < cell_data.rowspan; r++) {
                        skipCells[`${i + r}-${k}`] = true; // Mark cells to be skipped
                    }
                }
                if (cell_data.colspan) {
                    td.setAttribute("colspan", cell_data.colspan);
                }
            } else {
                // if there is now vertical cell merging (regular table)
                td.innerHTML = annotate(String(cell_data));
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}




for (var exercise_id = 1; exercise_id <= exercises_amount; exercise_id++) {
    var all_exercise = document.createElement("div");

    var task_title = document.createElement("h3");
    task_title.setAttribute("style", "margin-top: 30px");
    
    // get task title
    if (document.title.split(" ")[0] == "Lesson") {
        task_title.innerHTML = annotate(`${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`);
    } else {
        task_title.innerHTML = annotate(`${data[exercise_id]["lesson_id"]}.${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`);
    }

    // special formatting for bonus exercises
    if (task_title.innerHTML.split(" ")[1] == "Бонусное"){
        task_title.innerHTML = task_title.innerHTML.replace("Бонусное упражнение", "<span style='color: green'>Бонусное упражнение</span>")
    }

    // add buttons for translations to English and Norwegian
    let buttonWrapper = document.createElement('div')
    buttonWrapper.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end ")
    buttonWrapper.setAttribute("style", "margin-top: 10px")

    let task_buttons = document.createElement("div");
    task_buttons.setAttribute("class", "btn-group btn-group-sm");

    task_buttons.setAttribute("role", "group");

    let eng_text = document.createElement("h6");
    let norw_text = document.createElement("h6");
    let eng = document.createElement("button");
    eng.setAttribute("type", "button");
    eng.setAttribute("class", "btn btn-outline-secondary float-end btn-sm");
    eng.innerHTML = "EN";
    let translation_text_eng = annotate(data[exercise_id]["title_eng"])
    eng.onclick = function () {
        show_item(eng_text, translation_text_eng)
    }
    let norw = document.createElement("button");
    norw.setAttribute("type", "button");
    norw.setAttribute("class", "btn btn-outline-secondary float-end btn-sm");
    norw.innerHTML = "NO";
    let translation_text_norw = annotate(data[exercise_id]["title_nor"])
    norw.onclick = function () {
        show_item(norw_text, translation_text_norw)
    }

    task_buttons.appendChild(eng);
    task_buttons.appendChild(norw);
    buttonWrapper.appendChild(task_buttons)

    task_title.appendChild(buttonWrapper);
    task_title.appendChild(eng_text)
    task_title.appendChild(norw_text)
    main_content.appendChild(task_title);

    // add comment
    if (data[exercise_id]["comment"]) {
        let comment = document.createElement("h6");

        let comment_button = document.createElement("button");
        comment_button.setAttribute("type", "button");
        comment_button.setAttribute("class", "btn btn-outline-secondary float-end btn-sm");
        comment_button.innerHTML = "Comment for language teachers";

        let comment_text = data[exercise_id]["comment"]
        comment_button.onclick = function () {
            show_item(comment, comment_text)
        }
        buttonWrapper.appendChild(comment_button)
        task_title.appendChild(comment)

    }

    // add construction information if relevant
    if (data[exercise_id]["constr_info"]) {
        let info = document.createElement("div");
        info.setAttribute("style", "margin-bottom: 20px")
        info.setAttribute("style", "background-color:rgb(250,226,213)")
        info.setAttribute("class", "shadow p-3 mb-3 rounded")

        // Create a wrapper for the text and icon
        const textIconWrapper = document.createElement("span");
        textIconWrapper.setAttribute("class", "m-3 d-flex align-items-center tiptext");
        textIconWrapper.style.gap = "5px"; // Small gap between text and icon

        let info_title = document.createElement("p")
        const icon = document.createElement("i");
        icon.setAttribute("class", "bi bi-info-square");
        info_title.setAttribute('class', 'm-2 fw-bold')
        // info.appendChild(icon)
        info_title.innerHTML = "Информация о конструкции"
        // info.appendChild(info_title)
        textIconWrapper.appendChild(icon)
        textIconWrapper.appendChild(info_title)
        info.appendChild(textIconWrapper)

        let constr_info = document.createElement('p')
        constr_info.innerHTML = annotate(data[exercise_id]["constr_info"]);
        // info.innerHTML = annotate(data[exercise_id]["constr_info"]);
        info.appendChild(constr_info)
        all_exercise.appendChild(info);
    }

    if (data[exercise_id]["model"] != null) {
        let model = document.createElement("div");
        model.setAttribute("style", "margin-bottom: 20px")
        model.setAttribute("class", "shadow p-2 mb-3 bg-body rounded")
        let ex_words = document.createElement("b")
        ex_words.innerHTML = "Модель"
        ex_words.appendChild(document.createElement("br"))

        model.innerHTML = annotate(data[exercise_id]["model"]);
        all_exercise.appendChild(ex_words)
        all_exercise.appendChild(model);
        // main_content.appendChild(model);
    }

    if (data[exercise_id]["example"] != null) {
        let example = document.createElement("div")
        example.setAttribute("style", "margin-bottom: 20px")
        example.setAttribute("class", "shadow p-2 mb-3 bg-body rounded")
        let ex_words = document.createElement("b")
        ex_words.innerHTML = "Образец"
        ex_words.appendChild(document.createElement("br"))
        
        example.innerHTML = annotate(data[exercise_id]["example"])
        all_exercise.appendChild(ex_words)
        all_exercise.appendChild(example)
        // all_exercise.appendChild(document.createElement("br"))
        // main_content.appendChild(ex_words)
        // main_content.appendChild(example)
    }


    if (data[exercise_id]["image"] != null) {
        
        if (data[exercise_id]["image"]["link"] != undefined) {
            let image_wrapper = document.createElement('div')
            image_wrapper.setAttribute('class', 'p-2 m-2')
            image_wrapper.appendChild(add_image(data[exercise_id]["image"]))
            all_exercise.appendChild(image_wrapper)
        } else {
            var images_amount = data[exercise_id]["image"].length
            var images = document.createElement("div")
            let image_wrapper = document.createElement('div')
            image_wrapper.setAttribute('class', 'p-2 m-2')
            for (let e = 1; e <= images_amount; e++) {
                image_wrapper.appendChild(add_image(data[exercise_id]["image"][`image${e}`]))
            }
            images.appendChild(image_wrapper)
            all_exercise.appendChild(images)
        }
        main_content.appendChild(all_exercise)
    }


    if (data[exercise_id]["table"] != null) {
        add_table()
    }
   

    var task = document.createElement("div")
    task.setAttribute('class', 'container')
    if (data[exercise_id]["task"] != null) {
        // Check if there are subtasks
        if (typeof data[exercise_id]["task"]["task1"] == "object") {
            // Get number of subtasks in the task
            var subtasks_amount = Object.keys(data[exercise_id]["task"]).length

            // add difficult words 
            if (data[exercise_id]["difficult_words"]) {
                if (typeof data[exercise_id]["difficult_words"] === 'string' || data[exercise_id]["difficult_words"] instanceof String){
                    let words = data[exercise_id]["difficult_words"];
                    let diff_words_cont = document.createElement('p')
                    diff_words_cont.setAttribute('class', 'px-2 pt-2 mx-2 mt-2 fw-light text-muted')
                    show_item(diff_words_cont, words)
                    task.appendChild(diff_words_cont)
                }
            }
            for (var i = 1; i <= subtasks_amount; i++) {
                var subtask = document.createElement("div");
                subtask.setAttribute("class", "row shadow p-3 mb-3 rounded overflow-auto");
                var subtask_col = document.createElement("col");
                subtask.appendChild(subtask_col)
                // Add image if available for subtask
                if (data[exercise_id]["task"][`task${i}`]["image"] != null) {
                    if (typeof data[exercise_id]["task"][`task${i}`]["image"]["link"] != "undefined") {

                        let image_block = add_image(data[exercise_id]["task"][`task${i}`]["image"])
                        if (data[exercise_id]["task"][`task${i}`]["text"] != null) {

                            image_block.setAttribute("class", "figure-img img-fluid float-end")
                        } else {
                            image_block.setAttribute("class", "figure-img img-fluid")
                        }
                        // picture_block.appendChild(image_block)
                        subtask_col.appendChild(image_block)


                    } else {
                        var images_amount = Object.keys(data[exercise_id]["task"][`task${i}`]["image"]).length
                        var images = document.createElement("div")
                        for (let e = 1; e <= images_amount; e++) {
                            images.appendChild(add_image(data[exercise_id]["task"][`task${i}`]["image"][`image${e}`]))
                        }
                        subtask.appendChild(images)                        
                    }
                }
                // Add text if available for subtask
                if (data[exercise_id]["task"][`task${i}`]["text"] != null) {
                    let subtask_text = document.createElement('p')
                    subtask_text.innerHTML = annotate(data[exercise_id]["task"][`task${i}`]["text"]);

                    subtask_col.appendChild(subtask_text)

                    // subtask.innerHTML = annotate(data[exercise_id]["task"][`task${i}`]["text"]);
                    if (data[exercise_id]["difficult_words"]) {
                        if (data[exercise_id]["difficult_words"][`word${i}`]){
                            let words = data[exercise_id]["difficult_words"][`word${i}`];
                            let diff_words_cont = document.createElement('p')
                            diff_words_cont.setAttribute('class', 'px-2 pt-2 mx-2 mt-2 fw-light text-muted')
                            show_item(diff_words_cont, words)
                            subtask_text.appendChild(diff_words_cont)
                        }


                        // FIXME: HOVER_DIFF_WORDS PRODUCING ERROR IN LESSON 8 (LINE 57 WORD NOT DEFINED)
                        // subtask.innerHTML = hover_diff_words(subtask.innerHTML, words)
                    }

                }
                
                task.appendChild(subtask);

                // Add table if available for subtask
                if (data[exercise_id]["task"][`task${i}`]["table"] != null) {
                    add_table(subtask, `task${i}`)
                }



                // Add audio if available for subtask
                if (data[exercise_id]["task"][`task${i}`]["audio"] != null) {
                    subtask.appendChild(add_audio(lesson_id, exercise_id, data[exercise_id]["task"][`task${i}`]["audio"]))
                }

                
                if (data[exercise_id]["exercise_type"] == "text_input") {
                    // if task requires text input form
                    let answer_to_show = data[exercise_id]["answer_to_show"][`answer${i}`];
                    let answer_key = data[exercise_id]["answer_key"][`answer${i}`];
                    add_answer(answer_to_show, answer_key, create_input());

                } else if (data[exercise_id]["exercise_type"] == "multichoice_multianswer") {
                    const subtask_id = `${exercise_id}_${i}`;
                    let answer_to_show = data[exercise_id]["answer_to_show"][`answer${i}`];
                    
                    const answer_options = data[exercise_id]['answer_options'];

                    var answer_key = data[exercise_id]["answer_key"][`answer${i}`];

                    const answer_set = new Set(answer_key.split('; '))
                    
                    var formBox = document.createElement("div");
                    formBox.setAttribute('class', 'form-check');
                    
                    // iterate over options and create checkboxes
                    for (var k = 0; k < answer_options.length; k++) {
                        var optionBox = document.createElement('input');
                        optionBox.setAttribute('class', 'form-check-input');
                        optionBox.setAttribute('type', 'checkbox');
                        optionBox.setAttribute('value', answer_options[k]);
                        optionBox.setAttribute('id', `option${k}`);
                        optionBox.setAttribute('name', `multichoice_options${subtask_id}`)

                        var optionLabel = document.createElement('label');
                        optionLabel.setAttribute('class', 'form-check-label');
                        optionLabel.setAttribute('for', `option${k}`);
                        optionLabel.innerHTML = answer_options[k];
                        formBox.appendChild(optionBox);
                        formBox.appendChild(optionLabel);
                        formBox.appendChild(document.createElement('br'));
                    }
                    subtask.appendChild(formBox);


                    // add button to check answer
                    let answer_text = document.createElement("p");
                    answer_text.setAttribute('class', 'text-secondary');

                    let buttons = document.createElement("div");
                    buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end");
                    buttons.setAttribute("style", "margin-top: 10px");
                
                    let button2 = document.createElement("button");
                    button2.setAttribute("type", "button");
                    button2.setAttribute("class", "btn btn-outline-info float-end btn-sm");
                    button2.innerHTML = "Answer key";
                                
                    let result_text = document.createElement("p");
                    result_text.setAttribute("style", "display: inline-block");
                    
                    let button1 = document.createElement("button");
                    button1.setAttribute("type", "button");
                    button1.setAttribute("class", "btn btn-outline-info float-end btn-sm");
                    button1.innerHTML = "Check Answer";

                    // add answer check
                    button1.onclick = function () {

                        // select all checked boxes
                        const search = `input[name=multichoice_options${subtask_id}]:checked`;
                        var checkedBoxes = document.querySelectorAll(search);

                        // get values of checked boxes
                        let checkedBoxesValues = [];
                        for (var i=0; i<checkedBoxes.length; i++) {
                            checkedBoxesValues.push(checkedBoxes[i].value);
                        }
                        let selected_answer = new Set(checkedBoxesValues);

                        check_answer_multichoice(selected_answer, result_text, answer_set);

                    }
                    
                    buttons.appendChild(button1);
                    button2.onclick = function() {
                        show_item(answer_text, annotate(String(answer_to_show)));
                    }
                    buttons.appendChild(button2);
                    
                    subtask.appendChild(buttons);
                    task.appendChild(result_text);
                    task.appendChild(answer_text);
                    
                } else if (data[exercise_id]["exercise_type"] == "multichoice_singleanswer") {
                    // if task has one answer and requires radio buttons
                    const subtask_id = `${exercise_id}_${i}`;

                    let answer_to_show = data[exercise_id]["answer_to_show"][`answer${i}`];
                    
                    const answer_options = data[exercise_id]['answer_options'];

                    let answer_key = data[exercise_id]["answer_key"][`answer${i}`];
                    
                    var formBox = document.createElement("div");
                    formBox.setAttribute('class', 'form-check');


                    // iterate over options and create radio
                    for (var k = 0; k < answer_options.length; k++) {
                        var optionBox = document.createElement('input');
                        optionBox.setAttribute('class', 'form-check-input');
                        optionBox.setAttribute('type', 'radio');
                        optionBox.setAttribute('value', answer_options[k]);
                        optionBox.setAttribute('id', `option${k}`);
                        optionBox.setAttribute('name', `singlechoice_options${subtask_id}`);

                        var optionLabel = document.createElement('label');
                        optionLabel.setAttribute('class', 'form-check-label');
                        optionLabel.setAttribute('for', `option${k}`);
                        optionLabel.innerHTML = answer_options[k];
                        formBox.appendChild(optionBox);
                        formBox.appendChild(optionLabel);
                        formBox.appendChild(document.createElement('br'));
                    }
                    subtask.appendChild(formBox);

                    
                    // add button to check answer
                    let answer_text = document.createElement("p");
                    answer_text.setAttribute('class', 'text-secondary');

                    let buttons = document.createElement("div");
                    buttons.setAttribute("class", "d-grid gap-2 d-md-flex justify-content-md-end");
                    buttons.setAttribute("style", "margin-top: 10px");
                
                    let button2 = document.createElement("button");
                    button2.setAttribute("type", "button");
                    button2.setAttribute("class", "btn btn-outline-info float-end btn-sm");
                    button2.innerHTML = "Answer key";
                                
                    let result_text = document.createElement("p");
                    result_text.setAttribute("style", "display: inline-block");
                    
                    let button1 = document.createElement("button");
                    button1.setAttribute("type", "button");
                    button1.setAttribute("class", "btn btn-outline-info float-end btn-sm");
                    button1.innerHTML = "Check Answer";

                    // add answer check
                    button1.onclick = function () {

                        // find selected option
                        const search = `input[name=singlechoice_options${subtask_id}]:checked`;
                        var checkedBoxes = document.querySelectorAll(search);
                        const selected_box = checkedBoxes[0]
                        
                        check_answer(selected_box, result_text, answer_key);

                    }
                    
                    buttons.appendChild(button1);
                    button2.onclick = function() {
                        show_item(answer_text, annotate(String(answer_to_show)));
                    }
                    buttons.appendChild(button2)
                    

                    subtask.appendChild(buttons)
                    task.appendChild(result_text)
                    task.appendChild(answer_text)
                    

                } else if ((typeof data[exercise_id]["answer_to_show"] == "object" & data[exercise_id]["answer_to_show"] != null)) {
                    
                    let answer_to_show = data[exercise_id]["answer_to_show"][`answer${i}`];
                    add_answer(answer_to_show);
                } else if (typeof data[exercise_id]["answer_to_show"] == "string" & i == subtasks_amount) {
                    let answer_to_show = data[exercise_id]["answer_to_show"];
                    add_answer(answer_to_show);
                }
            };
            

        } else {
            // if no subtasks

            if (data[exercise_id]["task"]["text"] != null){
                task.setAttribute("class", "shadow p-4 mb-3 bg-body rounded")
                task.innerHTML = annotate(data[exercise_id]["task"]["text"]);
            }
            
            if (data[exercise_id]["task"]["audio"] != null) {
                task.appendChild(add_audio(lesson_id, exercise_id, data[exercise_id]["task"]["audio"]));
            }

            if (data[exercise_id]["difficult_words"]) {
                let words = data[exercise_id]["difficult_words"];
                let diff_words_cont = document.createElement('p')
                diff_words_cont.setAttribute('class', 'px-2 pt-2 mx-2 mt-2 fw-light text-muted')
                show_item(diff_words_cont, words)
                task.appendChild(diff_words_cont)
            }

            if (data[exercise_id]["answer_to_show"] != null) {
                let answer_to_show = data[exercise_id]["answer_to_show"];
                if (data[exercise_id]["exercise_type"] == "text_input") {
                    let answer_key = data[exercise_id]["answer_key"]
                    add_answer(answer_to_show, answer_key, create_input());
                } else {
                    add_answer(answer_to_show);
                }
            }
        };
        all_exercise.appendChild(task)
        main_content.appendChild(all_exercise);
        // main_content.appendChild(task);
    } else {
        // if no task text
        if (data[exercise_id]["difficult_words"]) {
            console.log('no task but diff words')
            let words = data[exercise_id]["difficult_words"];
            let diff_words_cont = document.createElement('p')
            diff_words_cont.setAttribute('class', 'px-2 pt-2 mx-2 mt-2 fw-light text-muted')
            show_item(diff_words_cont, words)
            task.appendChild(diff_words_cont)
        }
        if (data[exercise_id]["answer_to_show"] != null) {
            let answer_to_show = data[exercise_id]["answer_to_show"]
            if (data[exercise_id]["exercise_type"] == "text_input") {
                let answer_key = data[exercise_id]["answer_key"]
                add_answer(answer_to_show, answer_key, create_input());
            } else {
                add_answer(answer_to_show);
            }
            
        }
        all_exercise.appendChild(task)
        main_content.appendChild(all_exercise);
    }
    
    
    
    
    tree.appendChild(main_content)
}
document.getElementById("content").appendChild(tree)
