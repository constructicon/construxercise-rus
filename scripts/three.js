function Ex1_eng() {
    result = "Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?"
    var x = document.getElementById("ex1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex1_norw() {
    result = "Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene?"
    var x = document.getElementById("ex1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_eng() {
    result = "Connect parts of the sentences. Use the construction <span class='construction'>что касается NP-Gen, то Cl</span> ‘As far as ... is concerned, ...’. In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen= Genitive case). In the place of Cl we locate an entire sentence (Cl=clause, sentence).</i>"
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Koble sammen setningsdelene ved å bruke konstruksjonen <span class='construction'>что касается NP-Gen, то Cl</span> ‘når det gjelder ..., ... ’. I denne konstruksjonen står NP-Gen for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex2a() {
    var x = document.getElementById("ex2a_input");
    if (x.value.toLowerCase() == "Что касается образования, то я закончил экономический факультет МГУ.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2a_result").innerHTML = result;
}

function Ex2a() {
    result = "<span class='construction'>Что касается</span> образования, <span class='construction'>то</span> я закончил экономический факультет МГУ.";
    var x = document.getElementById("ex2a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex2b() {
    var x = document.getElementById('ex2b_input');
    if (x.value.toLowerCase() == 'Что касается опыта работы, то я уже два года работаю финансовым аналитиком в банке.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2b_result").innerHTML = result;
}

function Ex2b() {
    result = "<span class='construction'>Что касается</span> опыта работы, <span class='construction'>то</span> я уже два года работаю финансовым аналитиком в банке.";
    var x = document.getElementById("ex2b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex2c() {
    var x = document.getElementById('ex2c_input');
    if (x.value.toLowerCase() == 'Что касается хобби, то я люблю играть в теннис и кататься на лыжах.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2c_result").innerHTML = result;
}

function Ex2c() {
    result = "<span class='construction'>Что касается</span> хобби,  <span class='construction'>то</span> я люблю играть в теннис и кататься на лыжах.";
    var x = document.getElementById("ex2c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex2d() {
    var x = document.getElementById('ex2d_input');
    if (x.value.toLowerCase() == 'Что касается навыков программирования, то я программирую на языках Python и С++.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2d_result").innerHTML = result;
}

function Ex2d() {
    result = "<span class='construction'>Что касается</span> навыков программирования, <span class='construction'>то</span> я программирую на языках Python и С++.";
    var x = document.getElementById("ex2d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex2e() {
    var x = document.getElementById('ex2e_input');
    if (x.value.toLowerCase() == 'Что касается личных качеств, то я коммуникабельный и умею работать в команде.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2e_result").innerHTML = result;
}

function Ex2e() {
    result = "<span class='construction'>Что касается</span> личных качеств, <span class='construction'>то</span> я коммуникабельный и умею работать в команде.";
    var x = document.getElementById("ex2e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Fill in the blanks by using the construction <span class='construction'>(а/так) что насчёт XP? </span> ‘(And) what about ...?’ and the words given in parentheses. In the place of XP we can use various parts of speech. Nouns and adjectives should be used here in the Genitive case. Adverbs and verbs in the infinitive do not change their form."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Fyll ut de tomme feltene ved å bruke konstruksjonen <span class='construction'>(а/так) что насчёт XP? </span> ‘(Og) hva med ...?’ og ordene i parentes. Ved XP er mange forskjellige ordklasser mulige. Substantiv og adjektiv skal bøyes i genitiv, mens adverb og verb i infinitiv ikke skal bøyes. "
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
    answers = ["а что насчёт нового фильма джеймса кэмерона?", "так что насчёт нового фильма джеймса кэмерона?", "что насчёт нового фильма джеймса кэмерона?"]
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
    result = "<span class='construction'>А что насчёт </span> нового фильма Джеймса Кэмерона?<br><span class='construction'>Так что насчёт</span> нового фильма Джеймса Кэмерона?<br><span class='construction'>Что насчёт</span> нового фильма Джеймса Кэмерона?";
    var x = document.getElementById("ex3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3b() {
    var x = document.getElementById("ex3b_input");
    answers = ["а что насчёт поездки?", "так что насчёт поездки?", "что насчёт поездки?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex3b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3b_result").innerHTML = result;
}

function Ex3b() {
    result = "<span class='construction'>А что насчёт </span> поездки?<br><span class='construction'>Так что насчёт</span> поездки?<br><span class='construction'>Что насчёт</span> поездки?";
    var x = document.getElementById("ex3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3c() {
    var x = document.getElementById("ex3с_input");
    answers = ["а что насчёт шкафа?", "так что насчёт шкафа?", "что насчёт шкафа?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex3с_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3с_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3с_result").innerHTML = result;
}

function Ex3c() {
    result = "<span class='construction'>А что насчёт </span> шкафа?<br><span class='construction'>Так что насчёт</span> шкафа?<br><span class='construction'>Что насчёт</span> шкафа?";
    var x = document.getElementById("ex3с_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3d() {
    var x = document.getElementById("ex3d_input");
    answers = ["а что насчёт вернуться туда?", "так что насчёт вернуться туда?", "что насчёт вернуться туда?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex3d_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3d_result").innerHTML = result;
}

function Ex3d() {
    result = "<span class='construction'>А что насчёт </span> вернуться туда?<br><span class='construction'>Так что насчёт</span> вернуться туда?<br><span class='construction'>Что насчёт</span> вернуться туда?";
    var x = document.getElementById("ex3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex3e() {
    var x = document.getElementById("ex3e_input");
    answers = ["а что насчёт завтра?", "так что насчёт завтра?", "что насчёт завтра?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex3e_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3e_result").innerHTML = result;
}

function Ex3e() {
    result = "<span class='construction'>А что насчёт </span> завтра?<br><span class='construction'>Так что насчёт</span> завтра?<br><span class='construction'>Что насчёт</span> завтра?";
    var x = document.getElementById("ex3e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Read the questions and find appropriate answers. What does the construction <span class='construction'>Честно говоря, Cl</span> mean?"
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Les teksten og finn de riktige svarene. Hva betyr konstruksjonen <span class='construction'>Честно говоря, Cl</span>?"
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4() {
    var x = document.getElementById('ex4_input');
    if (x.value.toLowerCase() == "1г, 2в, 3а, 4д, 5б") {
        result = "Правильно";
        document.getElementById("ex4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_result").innerHTML = result;
}

function Ex4() {
    result = "1г, 2в, 3а, 4д, 5б";
    var x = document.getElementById("ex4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex5_eng() {
    result = "Use the table in exercise 4. Discuss with your conversation partner whether it is wise to use these answers in a real job interview. Suggest your own answers to these questions. Use the construction <span class='construction'>Честно говоря, Cl</span> ‘Frankly speaking / To tell the truth, ...’. In this construction we insert an entire sentence in the place of Cl (Cl = Clause, sentence)."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Bruk tabellen til øvelse 4. Diskuter med din samtalepartner om det er lurt å bruke disse svarene i et virkelig jobbintervju. Lag dine egne svar ved å bruke konstruksjonen <span class='construction'>Честно говоря, Cl</span> ‘Ærlig talt, ...’. I denne konstruksjonen skal plassen Cl fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex5_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_eng() {
    result = "Tell your conversation partner about yourself. In each pair of sentences, choose the sentence that describes you best. Complete the sentences by using the constructions <span class='construction'>К примеру, Cl/XP</span> and <span class='construction'>Так, Cl</span>, both meaning ‘For example, ...’. In these constructions, XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Fortell din samtalepartner om deg selv. Velg den setningen som passer best. Fullfør setningene ved å bruke konstruksjonene <span class='construction'>К примеру, Cl/XP</span> og <span class='construction'>Так, Cl</span>. Begge betyr ‘For eksempel, ...’. \n" +
        "I disse konstruksjonene står XP for en frase, mens Cl er en hel setning (Cl=setning).\n"
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex6_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_eng() {
    result = "When one asks a question, it is common to first provide one’s own answer. Use this strategy and complete the sentences by using the constructions <span class='construction'>К примеру, Cl/XP</span> ‘For example, ...’ and <span class='construction'>что касается NP-Gen, то Cl</span> ‘As far as ... is concerned, ...’. In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen= Genitive case), XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Når man stiller et spørsmål om noe, er det ganske vanlig  å først uttrykke sin egen mening. Fullfør setningene ved å bruke konstruksjonene <span class='construction'>К примеру, Cl/XP</span> ‘For eksempel, ...’ and <span class='construction'>что касается NP-Gen, то Cl</span> ‘Når det gjelder, ...’. I disse konstruksjonene betyr NP-Gen et substantiv i genitiv kasus (NP=nominalfrase; Gen= genitiv), XP er en frase, og Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex7_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. "
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8() {
    result = "1. Честно говоря\n" +
        "2. К примеру / Так, \n" +
        "3. К примеру / Так, \n" +
        "4. Что касается\n" +
        "5. то\n"
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "Today, three companies are holding job interviews for vacant positions. Depending on the role you receive (interviewer or interviewee), conduct or undergo an interview. The description of each role is provided below (three job positions and three candidate options). Use the constructions from the list."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "I dag er det jobbintervjuer ved tre selskaper som har utlyst ledige stillinger. Avhengig av din rolle, skal du enten intervjue eller bli intervjuet. Beskrivelse av hver rolle finnes nedenfor (tre stillinger og tre kandidater). Bruk konstruksjonene i listen."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_comment() {
    result = "Формат задания: в парах.\n" +
        "В задании предложено 6 карточек с ролями: 3 сотрудника HR получают карточки с описанием вакансии, на которую им нужно найти сотрудника; 3 кандидата получают карточки со своей биографией и хотят найти работу. Сотрудники HR сидят на своих местах и проводят собеседование с каждым кандидатом по очереди. Кандидаты ходят по собеседованиям.\n<br>" +
        "Task format: in pairs.\n" +
        "The task contains 6 cards with roles: each of the three interviewers receives a card describing a vacant position for which they need to find an employee, and each of the three job candidates receives a card describing their biography. The interviewers are placed at their desks and interview each candidate in their turn. Candidates come to the interviewers and are interviewed for the various vacant positions one after another."
    var x = document.getElementById("ex9_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "Write a short text (6 sentences) that will work as your elevator pitch. Your task is to briefly advertise yourself and to convince an employer that you are the ideal candidate for the position. Pick one job option from the list or create your own: " +
        "    <ul>\n" +
        "        <li>innovation manager at a mobile phone company</li>\n" +
        "        <li>artistic director at the Opera and Ballet Theater</li>\n" +
        "        <li>journalist in the international department of a newspaper</li>\n" +
        "        <li>driving school instructor</li>\n" +
        "    </ul>"
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Skriv en kort tekst med 6 setninger. Din oppgave er på kort tid å overbevise en arbeidsgiver om at du er den perfekte kandidaten til stillingen. Velg en stilling fra listen, eller finn på en egen. "
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}
