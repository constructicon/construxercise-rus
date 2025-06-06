const tree = document.createDocumentFragment();

const lesson_id = document.title.split(" ")[1];
let records = {};  // <-- Declare this here

if (document.title.startsWith("Lesson")) {
    // Standard lesson logic
    const r = await axios.get(`https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/lessons/lesson${lesson_id}.yml`);
    const json_data = jsyaml.loadAll(r.data);
    for (let key of Object.keys(json_data)) {
        records[key] = json_data[key];
    }
} else if (document.title.startsWith("Function")) {
    // Function logic: Load function YAML and fetch each referenced lesson/exercise
    const func_r = await axios.get(`https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/functions/function${lesson_id}.yml`);
    const function_data = jsyaml.loadAll(func_r.data)[0];  // Single YAML document expected

    for (let key of Object.keys(function_data)) {
        const { lesson_id: l_id, ex_number } = function_data[key];

        const lesson_r = await axios.get(`https://raw.githubusercontent.com/constructicon/construxercise-rus/main/data/lessons/lesson${l_id}.yml`);
        const lesson_json = jsyaml.loadAll(lesson_r.data)[0];
        records[key] = lesson_json[ex_number];
    }
}

let data;
if (document.title.startsWith("Lesson")) {
    data = records[0];
} else {
    data = records;
}
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

function createTextInputTable(container, answerKeyStr) {
    // Extract only the letters (e.g. from "1в, 2е, 3а, 4г, 5д, 6б")
    const answersArr = answerKeyStr.split(',').map(s => s.trim().match(/[а-яА-ЯёЁ]/)[0].toLowerCase());

    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'text-center');
    table.style.maxWidth = '100%';

    // Row with numbers
    const headerRow = document.createElement('tr');
    answersArr.forEach((_, idx) => {
        const th = document.createElement('th');
        th.textContent = idx + 1;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Row with input fields
    const inputRow = document.createElement('tr');
    answersArr.forEach((_, idx) => {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 2;
        input.classList.add('form-control');
        input.dataset.index = idx;
        td.appendChild(input);
        inputRow.appendChild(td);
    });
    table.appendChild(inputRow);
    container.appendChild(table);

    // Button
    const checkButton = document.createElement('button');
    checkButton.textContent = "Check Answers";
    checkButton.classList.add('btn', 'btn-primary', 'mt-2');
    container.appendChild(checkButton);

    // Feedback div
    const feedback = document.createElement('div');
    feedback.classList.add('mt-3');
    container.appendChild(feedback);

    // Check logic
    checkButton.addEventListener('click', () => {
        const inputs = container.querySelectorAll('input');
        let allCorrect = true;
        let resultHtml = '';

        inputs.forEach((input, idx) => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = answersArr[idx];

            if (userAnswer === correctAnswer) {
                resultHtml += `<div>#${idx + 1}: ✅ Correct</div>`;
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                resultHtml += `<div>#${idx + 1}: ❌ Your answer: "${userAnswer || '?'}", correct: "${correctAnswer}"</div>`;
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                allCorrect = false;
            }
        });

        feedback.innerHTML = resultHtml;
        feedback.style.color = allCorrect ? 'green' : 'red';
    });
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
        
    //adding tag if possible 
    if (data[exercise_id]["tags"] != null) {
        let tags = document.createElement("h1");
        tags.setAttribute("style", "margin-bottom: 20px; background-color: #e0f7fa; padding: 10px; border-radius: 15px;");
        
        // Set the content of the tags
        tags.innerHTML = annotate(data[exercise_id]["tags"]);
        
        // Add the tags first
        main_content.appendChild(tags);
    }
    
    var task_title = document.createElement("h2");
    task_title.setAttribute("style", "margin-top: 30px");
    
    // get task title
    if (document.title.split(" ")[0] == "Lesson") {
        // To add title with exercise number:
        task_title.innerHTML = annotate(`${data[exercise_id]["ex_number"]}. ${data[exercise_id]["title"]}`);
        // To add title without exercise number:
        // task_title.innerHTML = annotate(`${data[exercise_id]["title"]}`);

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
        info.setAttribute("style", "margin-bottom: 20px; background-color:rgb(250,226,213)");
        info.setAttribute("class", "shadow p-3 mb-3 rounded");
    
        // Header
        const headerWrapper = document.createElement("span");
        headerWrapper.setAttribute("class", "m-3 d-flex align-items-center tiptext");
        headerWrapper.style.gap = "5px";
    
        let info_title = document.createElement("p");
        const icon = document.createElement("i");
        icon.setAttribute("class", "bi bi-info-square");
        info_title.setAttribute("class", "m-2 fw-bold");
        info_title.innerHTML = "Информация о конструкции";
    
        headerWrapper.appendChild(icon);
        headerWrapper.appendChild(info_title);
        info.appendChild(headerWrapper);
    
        // Create buttons early
        let btnWrapper = document.createElement("div");
        btnWrapper.setAttribute("class", "d-flex justify-content-end mt-2");
    
        let constr_buttons = document.createElement("div");
        constr_buttons.setAttribute("class", "btn-group btn-group-sm");
        constr_buttons.setAttribute("role", "group");
    
        let eng_p = document.createElement("p");
        let norw_p = document.createElement("p");
    
        if (data[exercise_id]["constr_info_eng"]) {
            let eng_btn = document.createElement("button");
            eng_btn.setAttribute("type", "button");
            eng_btn.setAttribute("class", "btn btn-outline-secondary btn-sm");
            eng_btn.innerHTML = "EN";
            let text_eng = annotate(data[exercise_id]["constr_info_eng"]);
            eng_btn.onclick = function () {
                show_item(eng_p, text_eng);
            };
            constr_buttons.appendChild(eng_btn);
        }
    
        if (data[exercise_id]["constr_info_nor"]) {
            let nor_btn = document.createElement("button");
            nor_btn.setAttribute("type", "button");
            nor_btn.setAttribute("class", "btn btn-outline-secondary btn-sm");
            nor_btn.innerHTML = "NO";
            let text_nor = annotate(data[exercise_id]["constr_info_nor"]);
            nor_btn.onclick = function () {
                show_item(norw_p, text_nor);
            };
            constr_buttons.appendChild(nor_btn);
        }
    
        btnWrapper.appendChild(constr_buttons);
    
        // Content wrapper (text + image side by side)
        let contentWrapper = document.createElement("div");
        contentWrapper.setAttribute("class", "d-flex flex-wrap gap-3 align-items-start justify-content-between");
    
        // Left: Text
        let textWrapper = document.createElement("div");
        textWrapper.setAttribute("style", "flex: 1; min-width: 250px;");
        let constr_text = typeof data[exercise_id]["constr_info"] === "object"
            ? data[exercise_id]["constr_info"].text
            : data[exercise_id]["constr_info"];
        let rus_p = document.createElement("p");
        rus_p.innerHTML = annotate(constr_text);
        textWrapper.appendChild(rus_p);
    
        // Right: Image + Buttons (if image exists)
        if (
            typeof data[exercise_id]["constr_info"] === "object" &&
            data[exercise_id]["constr_info"].image &&
            data[exercise_id]["constr_info"].image.link
        ) {
            let imageWrapper = document.createElement("div");
            imageWrapper.setAttribute("style", "max-width: 300px;");
    
            let image = add_image(data[exercise_id]["constr_info"].image);
            image.classList.add("img-fluid", "rounded");
    
            imageWrapper.appendChild(image);
            imageWrapper.appendChild(btnWrapper);
    
            contentWrapper.appendChild(textWrapper);
            contentWrapper.appendChild(imageWrapper);
        } else {
            // No image — just use text and buttons
            textWrapper.appendChild(btnWrapper);
            contentWrapper.appendChild(textWrapper);
        }
    
        info.appendChild(contentWrapper);
        info.appendChild(eng_p);
        info.appendChild(norw_p);
    
        all_exercise.appendChild(info);
    }
    




    
    if (data[exercise_id]["model"] != null) {
        const model_data = data[exercise_id]["model"];

        let model_wrapper = document.createElement("div");
        model_wrapper.setAttribute("style", "margin-bottom: 20px;");
        model_wrapper.setAttribute("class", "shadow p-2 mb-3 bg-body rounded");

        // Title
        let ex_words = document.createElement("b");
        ex_words.innerHTML = "Модель";
        ex_words.appendChild(document.createElement("br"));
        all_exercise.appendChild(ex_words);

        // Wrapper for content (flex if both image and text exist)
        let content_wrapper = document.createElement("div");
        let hasText = typeof model_data === "string" || (model_data.text && model_data.text.trim() !== "");
        let hasImage = typeof model_data === "object" && model_data.image && model_data.image.link;

        if (hasText && hasImage) {
            content_wrapper.setAttribute("class", "d-flex justify-content-between align-items-start flex-wrap");
            content_wrapper.style.gap = "20px";
        }

        // Add text if available
        if (hasText) {
            let model_text = document.createElement("div");
            model_text.setAttribute("style", hasImage ? "flex: 1 1 60%; min-width: 200px;" : "");
            model_text.innerHTML = annotate(typeof model_data === "string" ? model_data : model_data.text);
            content_wrapper.appendChild(model_text);
        }

        // Add image if available
        if (hasImage) {
            let image_wrapper = document.createElement("div");
            image_wrapper.setAttribute("style", "flex: 0 0 auto;");
        
            let img = document.createElement("img");
            img.setAttribute("src", model_data.image.link);
            img.setAttribute("class", "rounded");
            img.setAttribute("alt", "model image");
        
            // ✅ Apply width from YAML if defined
            if (model_data.image.width) {
                img.style.width = typeof model_data.image.width === "number"
                ? `${model_data.image.width}px`
                : model_data.image.width.match(/^\d+$/)
                    ? `${model_data.image.width}px`
                    : model_data.image.width;
            }
        
            image_wrapper.appendChild(img);
            content_wrapper.appendChild(image_wrapper);
        }

        model_wrapper.appendChild(content_wrapper);
        all_exercise.appendChild(model_wrapper);
    }


    if (data[exercise_id]["example"] != null) {
        const example_data = data[exercise_id]["example"];
    
        // Wrapper for the entire example block
        const example_wrapper = document.createElement("div");
        example_wrapper.setAttribute("class", "shadow p-3 mb-3 bg-body rounded d-flex justify-content-between align-items-start flex-wrap");
        example_wrapper.setAttribute("style", "gap: 20px;");
    
        // "Образец" title
        const ex_title = document.createElement("b");
        ex_title.innerHTML = "Образец";
        ex_title.appendChild(document.createElement("br"));
        all_exercise.appendChild(ex_title);
    
        // Text on the left
        const ex_text = document.createElement("div");
        ex_text.setAttribute("style", "flex: 1 1 60%; min-width: 200px;");
        const example_text = typeof example_data === "object" ? example_data.text : example_data;
        ex_text.innerHTML = annotate(example_text);
    
        example_wrapper.appendChild(ex_text);
    
        // Image on the right (if it exists)
        if (typeof example_data === "object" && example_data.image && example_data.image.link) {
            const imgWrapper = document.createElement("div");
            imgWrapper.setAttribute("style", "flex: 0 0 auto;");
    
            const img = document.createElement("img");
            img.setAttribute("src", example_data.image.link);
            img.setAttribute("class", "img-fluid rounded");
            img.setAttribute("alt", "example image");
    
            if (example_data.image.width) {
                img.style.width = example_data.image.width + "px";
            } else {
                img.style.maxWidth = "300px";
            }

            imgWrapper.appendChild(img);
            
            example_wrapper.appendChild(imgWrapper);
        }

        all_exercise.appendChild(example_wrapper);
    }
    


    if (data[exercise_id]["image"] != null) {
        // test
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
    if (data[exercise_id]["audio"] != null) {
        all_exercise.appendChild(add_audio(lesson_id, exercise_id, data[exercise_id]["audio"]))
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
                    // console.log(data[exercise_id]["task"])
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
                // Inside your subtasks loop, after you've created subtask and subtask_col, etc.

                if (data[exercise_id]["exercise_type"] === "text_input_table") {
                    const answerKeyRaw = data[exercise_id]["answer_key"][`answer${i}`]; // e.g., "1в, 2е, 3а, 4г, 5д, 6б"
                    const subtask_table_container = document.createElement("div");
                    subtask_table_container.classList.add("mt-3");

                    createTextInputTable(subtask_table_container, answerKeyRaw);

                    subtask_col.appendChild(subtask_table_container);
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
                let task_text = document.createElement('div');
                task_text.setAttribute("class", "shadow p-4 mb-3 bg-body rounded");
                task_text.innerHTML = annotate(data[exercise_id]["task"]["text"]);
                task.appendChild(task_text);
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
