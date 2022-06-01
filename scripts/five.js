function Pt1_eng() {
    result = "Part 1. Constructions that introduce additional information"
    var x = document.getElementById("pt1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Pt1_norw() {
    result = "Del 1. Konstruksjoner som introduserer tilleggsinformasjon"
    var x = document.getElementById("pt1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex1_eng() {
    result = "Connect the phrases by choosing a matching continuation."
    var x = document.getElementById("ex1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex1_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer."
    var x = document.getElementById("ex1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex1() {
    var x = document.getElementById("ex1_input");
    if (x.value.toLowerCase() == "1в, 2а 3д, 4б, 5г".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_result").innerHTML = result;
}

function Ex1() {
    result = "1в, 2а 3д, 4б, 5г";
    var x = document.getElementById("ex1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex2_eng() {
    result = "Fill in the blanks. In each case, choose one appropriate construction from the two available options."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Fyll ut de tomme feltene. I hvert tilfelle skal du velge en av de to foreslåtte konstruksjonene. En av disse er riktig. "
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex2() {
    var x = document.getElementById("ex2_input");
    if (x.value.toLowerCase() == "1a, 2б, 3а, 4б, 5б".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_result").innerHTML = result;
}

function Ex2() {
    result = "1a, 2б, 3а, 4б, 5б";
    var x = document.getElementById("ex2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Pt2_eng() {
    result = "Part 2. Constructions used to present an example"
    var x = document.getElementById("pt2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Pt2_norw() {
    result = "Del 2. Konstruksjoner som brukes for å introdusere et spesifikt eksempel"
    var x = document.getElementById("pt2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_eng() {
    result = "Fill in the blanks with the words from the list. Note the differences in the use of these constructions. The words <span class=\"construction\">к примеру</span> and <span class=\"construction\">например</span> both meaning ‘for example, ...’ can appear either at the beginning or in the middle of a sentence, whereas the word <span class=\"construction\">Так</span> can only be sentence initial. The construction <span class=\"construction\">Так, Cl</span> ‘For example, ...’ presents an example that is an entire situation described by a sentence (Cl = sentence, clause). The constructions <span class=\"construction\">к примеру, XP/Cl</span> and <span class=\"construction\">например, XP/Cl</span> present an example that is either an entire situation or an element of a situation. Therefore, in these constructions we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence): <i>к примеру, Вася</i> (XP); <i>к примеру, в Москве</i> (XP); <i>к примеру, домой</i> (XP) vs. <i>К примеру, я никогда не был в Москве</i> (Cl)."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. Legg merke til hvordan konstruksjonene brukes forskjellig. Ordene <span class=\"construction\">к примеру</span> og <span class=\"construction\">например</span> kan plasseres i begynnelsen eller midten av setningen, mens <span class=\"construction\">Так</span> kan plasseres kun i begynnelsen. Konstruksjonen <span class=\"construction\">Так, Cl</span> beskriver en hel situasjon med en setning (Cl = en setning), mens <span class=\"construction\">к примеру</span> og <span class=\"construction\">например</span> kan brukes for å legge til både hele setninger og mindre deler av en setning. Altså er det mulig å fylle plassen XP/Cl med en frase eller en hel setning (XP=frase, Cl=setning): <i>к примеру, Вася</i> (XP); <i>к примеру, в Москве</i> (XP); <i>к примеру, домой</i> (XP) vs. <i>К примеру, я никогда не был в Москве</i> (Cl)."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex3a() {
    var x = document.getElementById("ex3a_input");
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex3a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3a_result").innerHTML = result;
}

function Ex3a() {
    result = "a, б"
    var x = document.getElementById("ex3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3b() {
    var x = document.getElementById('ex3b_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex3b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3b_result").innerHTML = result;
}

function Ex3b() {
    result = "a, б"
    var x = document.getElementById("ex3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3c() {
    var x = document.getElementById('ex3c_input');
    answers = ["а, б, в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex3c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3c_result").innerHTML = result;
}

function Ex3c() {
    result = "а, б, в"
    var x = document.getElementById("ex3c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3d() {
    var x = document.getElementById('ex3d_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex3d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3d_result").innerHTML = result;
}

function Ex3d() {
    result = "a, б"
    var x = document.getElementById("ex3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3e() {
    var x = document.getElementById('ex3e_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex3e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3e_result").innerHTML = result;
}

function Ex3e() {
    result = "a, б"
    var x = document.getElementById("ex3e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Fill in the blanks by choosing the appropriate construction from the list."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Fyll ut de tomme feltene ved å velge riktig konstruksjon fra listen. "
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4a() {
    var x = document.getElementById("ex4a_input");
    answers = ["в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex4a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4a_result").innerHTML = result;
}

function Ex4a() {
    result = "в"
    var x = document.getElementById("ex4a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4b() {
    var x = document.getElementById('ex4b_input');
    answers = ["б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4b_result").innerHTML = result;
}

function Ex4b() {
    result = "б"
    var x = document.getElementById("ex4b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4c() {
    var x = document.getElementById('ex4c_input');
    answers = ["б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4c_result").innerHTML = result;
}

function Ex4c() {
    result = "б"
    var x = document.getElementById("ex4c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4d() {
    var x = document.getElementById('ex4d_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4d_result").innerHTML = result;
}

function Ex4d() {
    result = "а"
    var x = document.getElementById("ex4d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4e() {
    var x = document.getElementById('ex4e_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4e_result").innerHTML = result;
}

function Ex4e() {
    result = "а"
    var x = document.getElementById("ex4e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "Tell your boss about your friend in order to encourage the boss to hire him. Tell the boss about both your friend’s professional and personal qualities. Use the template below."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Fortell sjefen din om din venn, slik at sjefen vil ansette ham. Fortell sjefen om de profesjonelle og personlige egenskapene til din venn. Bruk de foreslåtte konstruksjonene nedenfor. "
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Pt3_eng() {
    result = "Part 3. Constructions that draw a conclusion"
    var x = document.getElementById("pt3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Pt3_norw() {
    result = "Del 3. Konstruksjoner som brukes for å oppsummere eller konkludere. "
    var x = document.getElementById("pt3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen."
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex6a() {
    var x = document.getElementById("ex6a_input");
    answers = ["в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6a_result").innerHTML = result;
}

function Ex6a() {
    result = "в"
    var x = document.getElementById("ex6a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex6b() {
    var x = document.getElementById('ex6b_input');
    answers = ["г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6b_result").innerHTML = result;
}

function Ex6b() {
    result = "г"
    var x = document.getElementById("ex6b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex6c() {
    var x = document.getElementById('ex6c_input');
    answers = ["б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6c_result").innerHTML = result;
}

function Ex6c() {
    result = "б"
    var x = document.getElementById("ex6c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex6d() {
    var x = document.getElementById('ex6d_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6d_result").innerHTML = result;
}

function Ex6d() {
    result = "а"
    var x = document.getElementById("ex6d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Pt4_eng() {
    result = "Part 4. Combining constructions that serve various functions"
    var x = document.getElementById("pt4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Pt4_norw() {
    result = "Del 4. Bruk av konstruksjoner fra de forskjellige konstruksjonsgruppene."
    var x = document.getElementById("pt4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_eng() {
    result = "Generate a text about your hobbies or interests by using the set of constructions below."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Lag en tekst om dine hobbys og interesser ved hjelp av konstruksjonene nedenfor.  "
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_comment() {
    result = "Комментарий для преподавателя. Формат задания: «Снежный ком». Первый студент говорит предложение, второй студент повторяет и добавляет новое предложение, третий студент повторяет первые два предложения и добавляет одно свое и т. д. Каждый студент должен повторить весь текст, который получился до него, и добавить свое. <br> Comment for language teachers. Task format: snowball. The text is generated jointly by a group of students. Each student repeats what has already been said by their peers and adds a new sentence at the end. This way, the entire sequence of relevant sentences is repeated several times and helps the students to learn the template."
    var x = document.getElementById("ex7_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7a() {
    result = "<span class=\"construction\">Что касается</span> спорта, <span class=\"construction\">то</span> я очень люблю бегать. Почему? <span class=\"construction\">Во-первых,</span> это бесплатно. <span class=\"construction\">Во-вторых,</span> это хорошая кардиотренировка. <span class=\"construction\">В-третьих,</span> бег улучшает настроение. <span class=\"construction\">Плюс ко всему,</span> это лучшее лекарство от стресса. <span class=\"construction\">Честно говоря,</span> у меня не всегда есть время, чтобы бегать. <span class=\"construction\">В целом</span> у меня есть система и я бегаю три раза в неделю."
    var x = document.getElementById("ex7a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex7b() {
    result = "<span class=\"construction\">Что касается</span> музыки, то мне нравится рок. <span class=\"construction\">Во-первых,</span> в рок-песнях интересные философские тексты. <span class=\"construction\">Во-вторых,</span> это лучшее лекарство от стресса. <span class=\"construction\">В-третьих,</span> рок всегда современный. <span class=\"construction\">Кроме того,</span> я слушаю русский рок и учу новые русские слова. <span class=\"construction\">Честно говоря,</span> не все рок-песни красивые. <span class=\"construction\">В целом</span> каждая рок-группа уникальна."
    var x = document.getElementById("ex7b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex8_eng() {
    result = "Generate a text about what it means to be a professional translator. Use the constructions from the template."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Lag en tekst om hva det vil si å være profesjonell oversetter. Bruk de foreslåtte konstruksjonene.  "
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8() {
    result = "<span class=\"construction\">Что касается</span> профессии, <span class=\"construction\">то</span> я переводчик. <span class=\"construction\">Другими словами,</span> я хорошо знаю русский язык и умею переводить разные тексты. <span class=\"construction\">К примеру,</span> я могу переводить документы, то есть справки, сертификаты, дипломы. <span class=\"construction\">Кроме того,</span> я хорошо перевожу статьи и блоги."
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "You are a sales assistant in a household appliance store, and your interlocutor is a customer. Help the customer to choose a product. Present the product in a compelling way so that the customer will be sure to purchase it. Use as many constructions as possible."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Du er selger i en husholdningsmaskinbutikk, og samtalepartneren din er kunde. Hjelp kunden å velge et produkt. Reklamer for produktet slik at kunden ikke kan motstå å kjøpe det. Bruk så mange konstruksjoner som mulig.  "
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "You are the Minister of Health, and your interlocutor is a journalist who is interviewing you. Discuss the situation with coronavirus in your country according to the proposed template."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Du er helseminister, og din samtalepartner er en journalist som intervjuer deg. Diskuter koronasituasjonen med utgangspunkt i eksemplene. "
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10() {
    result = "<span class=\"construction\">В целом,</span> ситуация с коронавирусом в России остается тяжёлой. <span class=\"construction\">Во-первых,</span> каждый день ковидом заражаются тысячи людей. <span class=\"construction\">Кроме того,</span> многих из них отправляют в больницу. <span class=\"construction\">Да и вообще,</span> теперь коронавирусом болеют не только взрослые, но и дети. <span class=\"construction\">Kак бы то ни было,</span> я верю, что скоро пандемия закончится, потому что сейчас многие люди делают прививки. <span class=\"construction\">Таким образом,</span> сейчас всё непросто, но мы справимся."
    var x = document.getElementById("ex10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex11_eng() {
    result = "In each row of the table, find two constructions with a similar function and name their function. Choose the function from the list (a-г)."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Finn to lignende konstruksjoner i hver kolumne i tabellen og navngi funksjonene til konstruksjonene. Velg funksjon fra listen (a-г)."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11() {
    result = "1. 1, 2, г<br>" +
        "2. 1, 3, б<br>" +
        "3. 1, 2, в<br>" +
        "4. 2, 3, а"
    var x = document.getElementById("ex11_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex12_eng() {
    result = "Your friend Ilya has recently split up with his girlfriend. You think that Ilya needs a new girlfriend so that he will not be sad. Ilya wants to find a new girlfriend on Tinder. Help him create an account and describe himself. Write a short text about why Ilya is the perfect man. Use constructions from different groups."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_norw() {
    result = "Din venn Ilja har nylig slått opp med kjæresten. Du mener Ilja trenger en ny kjæreste for å ikke være lei seg. Ilja vil treffe en ny kjæreste på Tinder. Hjelp ham å lage en profil hvor han beskriver seg selv. Skriv en kort tekst om hvorfor Ilja er den perfekte mannen. Bruk konstruksjoner fra de  forskjellige konstruksjonsgruppene. "
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}