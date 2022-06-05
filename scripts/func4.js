
function Ex32_eng() {
    result = "Connect parts of the sentences. Use the construction <span class='construction'>что касается NP-Gen, то Cl</span> ‘As far as ... is concerned, ...’. In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen= Genitive case). In the place of Cl we locate an entire sentence (Cl=clause, sentence).</i>"
    var x = document.getElementById("ex32_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex32_norw() {
    result = "Koble sammen setningsdelene ved å bruke konstruksjonen <span class='construction'>что касается NP-Gen, то Cl</span> ‘når det gjelder ..., ... ’. I denne konstruksjonen står NP-Gen for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex32_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex32a() {
    var x = document.getElementById("ex32a_input");
    if (x.value.toLowerCase() == "Что касается образования, то я закончил экономический факультет МГУ.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex32a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex32a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex32a_result").innerHTML = result;
}

function Ex32a() {
    result = "<span class='construction'>Что касается</span> образования, <span class='construction'>то</span> я закончил экономический факультет МГУ.";
    var x = document.getElementById("ex32a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex32b() {
    var x = document.getElementById('ex32b_input');
    if (x.value.toLowerCase() == 'Что касается опыта работы, то я уже два года работаю финансовым аналитиком в банке.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex32b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex32b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex32b_result").innerHTML = result;
}

function Ex32b() {
    result = "<span class='construction'>Что касается</span> опыта работы, <span class='construction'>то</span> я уже два года работаю финансовым аналитиком в банке.";
    var x = document.getElementById("ex32b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex32c() {
    var x = document.getElementById('ex32c_input');
    if (x.value.toLowerCase() == 'Что касается хобби, то я люблю играть в теннис и кататься на лыжах.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex32c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex32c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex32c_result").innerHTML = result;
}

function Ex32c() {
    result = "<span class='construction'>Что касается</span> хобби,  <span class='construction'>то</span> я люблю играть в теннис и кататься на лыжах.";
    var x = document.getElementById("ex32c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex32d() {
    var x = document.getElementById('ex32d_input');
    if (x.value.toLowerCase() == 'Что касается навыков программирования, то я программирую на языках Python и С++.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex32d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex32d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex32d_result").innerHTML = result;
}

function Ex32d() {
    result = "<span class='construction'>Что касается</span> навыков программирования, <span class='construction'>то</span> я программирую на языках Python и С++.";
    var x = document.getElementById("ex32d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex32e() {
    var x = document.getElementById('ex32e_input');
    if (x.value.toLowerCase() == 'Что касается личных качеств, то я коммуникабельный и умею работать в команде.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex32e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex32e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex32e_result").innerHTML = result;
}

function Ex32e() {
    result = "<span class='construction'>Что касается</span> личных качеств, <span class='construction'>то</span> я коммуникабельный и умею работать в команде.";
    var x = document.getElementById("ex32e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex27_eng() {
    result = 'Connect two sentences by using the construction <span class="construction">что касается NP-Gen, то Cl</span> &#39;as for ..., ...&#39;. In this construction, <span class="construction">NP-Gen</span> strands for a noun in the Genitive case (NP=noun phrase). Cl is a slot where we can place an entire sentence (Cl= clause, sentence).'
    var x = document.getElementById("ex27_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex27_norw() {
    result = 'Koble sammen og lag en setning av to, ved å bruke konstruksjonen <span class="construction">что касается NP-Gen, то Cl</span> &#39;når det gjelder ..., ...&#39;. I denne konstruksjonen står <span class="construction">NP-Gen</span> for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning).'
    var x = document.getElementById("ex27_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex27() {
    result = "1. Студенческий билет у вас уже есть. <span class='construction'>Что касается</span> справки об обучении, <span class='construction'>то</span> её можно заказать в учебном офисе.<br> 2. Петя и Катя получили визу в Норвегию. <span class='construction'>Что касается</span> Кирилла, <span class='construction'>то</span> он пока ждёт ответа из посольства.<br> 3. С пропуском вы можете зайти в любое здание университета. <span class='construction'>Что касается</span> студенческого билета, <span class='construction'>то</span> он будет нужен, если вы хотите купить билет в музей со скидкой.<br> 4. Фотографию для визы нужно принести с собой. <span class='construction'>Что касается</span> отпечатков пальцев, <span class='construction'>то</span> их у вас снимут в посольстве.";
    var x = document.getElementById("ex27_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex213_eng() {
    result = "Bonus exercise. Connect the tourist attractions in Russia (1-4) with the facts about them (а-г). Use the construction <span class='construction'>что касается NP-Gen, то Cl</span> &#39;concerning ..., ...&#39;. In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen=Genitive case). We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex213_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex213_norw() {
    result = "Bonusoppgave. Koble sammen Russlands severdigheter (1-4) med faktaene som passer (а-г). Bruk konstruksjonen <span class='construction'>что касается NP-Gen, то Cl</span> &#39;når det gjelder ..., ...&#39;. I denne konstruksjonen står NP-Gen for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex213_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex213() {
    result = "<span class='construction'>Что касается</span> Красной площади в Москве, <span class='construction'>то</span> это главная площадь Москвы, которая расположена рядом с Московским Кремлём на берегу Москвы-реки.<br> <span class='construction'>Что касается</span> Царь-колокола в Москве, <span class='construction'>то</span> этот огромный колокол весит 202 тонны и был повреждён во время большого пожара в Москве в 1737 году.<br> <span class='construction'>Что касается</span> Исаакиевского собора в Санкт-Петербурге, <span class='construction'>то</span> это самый крупный православный храм Санкт-Петербурга, который сейчас является музеем и одним из символов города.<br> <span class='construction'>Что касается</span> Зимнего дворца в Санкт-Петербурге, <span class='construction'>то</span> раньше это была резиденция российского императора, а сейчас в этом здании находится музей «Государственный Эрмитаж»."
    var x = document.getElementById("ex213_ans")
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}

function Ex33_eng() {
    result = "Fill in the blanks by using the construction <span class='construction'>(а/так) что насчёт XP? </span> ‘(And) what about ...?’ and the words given in parentheses. In the place of XP we can use various parts of speech. Nouns and adjectives should be used here in the Genitive case. Adverbs and verbs in the infinitive do not change their form."
    var x = document.getElementById("ex33_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex33_norw() {
    result = "Fyll ut de tomme feltene ved å bruke konstruksjonen <span class='construction'>(а/так) что насчёт XP? </span> ‘(Og) hva med ...?’ og ordene i parentes. Ved XP er mange forskjellige ordklasser mulige. Substantiv og adjektiv skal bøyes i genitiv, mens adverb og verb i infinitiv ikke skal bøyes. "
    var x = document.getElementById("ex33_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex33a() {
    var x = document.getElementById("ex33a_input");
    answers = ["а что насчёт нового фильма джеймса кэмерона?", "так что насчёт нового фильма джеймса кэмерона?", "что насчёт нового фильма джеймса кэмерона?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex33a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex33a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex33a_result").innerHTML = result;
}

function Ex33a() {
    result = "<span class='construction'>А что насчёт </span> нового фильма Джеймса Кэмерона?<br><span class='construction'>Так что насчёт</span> нового фильма Джеймса Кэмерона?<br><span class='construction'>Что насчёт</span> нового фильма Джеймса Кэмерона?";
    var x = document.getElementById("ex33a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex33b() {
    var x = document.getElementById("ex33b_input");
    answers = ["а что насчёт поездки?", "так что насчёт поездки?", "что насчёт поездки?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex33b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex33b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex33b_result").innerHTML = result;
}

function Ex33b() {
    result = "<span class='construction'>А что насчёт </span> поездки?<br><span class='construction'>Так что насчёт</span> поездки?<br><span class='construction'>Что насчёт</span> поездки?";
    var x = document.getElementById("ex33b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex33c() {
    var x = document.getElementById("ex33с_input");
    answers = ["а что насчёт шкафа?", "так что насчёт шкафа?", "что насчёт шкафа?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex33с_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex33с_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex33с_result").innerHTML = result;
}

function Ex33c() {
    result = "<span class='construction'>А что насчёт </span> шкафа?<br><span class='construction'>Так что насчёт</span> шкафа?<br><span class='construction'>Что насчёт</span> шкафа?";
    var x = document.getElementById("ex33с_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex33d() {
    var x = document.getElementById("ex33d_input");
    answers = ["а что насчёт вернуться туда?", "так что насчёт вернуться туда?", "что насчёт вернуться туда?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex33d_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex33d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex33d_result").innerHTML = result;
}

function Ex33d() {
    result = "<span class='construction'>А что насчёт </span> вернуться туда?<br><span class='construction'>Так что насчёт</span> вернуться туда?<br><span class='construction'>Что насчёт</span> вернуться туда?";
    var x = document.getElementById("ex33d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex33e() {
    var x = document.getElementById("ex33e_input");
    answers = ["а что насчёт завтра?", "так что насчёт завтра?", "что насчёт завтра?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex33e_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex33e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex33e_result").innerHTML = result;
}

function Ex33e() {
    result = "<span class='construction'>А что насчёт </span> завтра?<br><span class='construction'>Так что насчёт</span> завтра?<br><span class='construction'>Что насчёт</span> завтра?";
    var x = document.getElementById("ex33e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex37_eng() {
    result = "When one asks a question, it is common to first provide one’s own answer. Use this strategy and complete the sentences by using the constructions <span class='construction'>К примеру, Cl/XP</span> ‘For example, ...’ and <span class='construction'>что касается NP-Gen, то Cl</span> ‘As far as ... is concerned, ...’. In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen= Genitive case), XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex37_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex37_norw() {
    result = "Når man stiller et spørsmål om noe, er det ganske vanlig  å først uttrykke sin egen mening. Fullfør setningene ved å bruke konstruksjonene <span class='construction'>К примеру, Cl/XP</span> ‘For eksempel, ...’ and <span class='construction'>что касается NP-Gen, то Cl</span> ‘Når det gjelder, ...’. I disse konstruksjonene betyr NP-Gen et substantiv i genitiv kasus (NP=nominalfrase; Gen= genitiv), XP er en frase, og Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex37_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex37_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex37_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex85_eng() {
    result = "You and your interlocutor must decide what to cook for a festive dinner. Discuss your meal plan with him (or her). Use the construction <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘and concerning X, ...’ and the construction <span class=\'construction\'>вот и Pred!</span> ‘then X’ (for example Then fine!). <br>In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), Pred means a predicative, that is a short form of an adjective, and parentheses () indicate an optional element of a construction.\n"
    var x = document.getElementById("ex85_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex85_norw() {
    result = "Du og din samtalepartner må bestemme hva dere skal lage til en festlig middag. Diskuter forskjellige matretter med din samtalepartner ved å bruke konstruksjonene <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘og når det gjelder X, ... ’ og <span class=\'construction\'>вот и Pred!</span> ‘det er X’, ‘hvor X’, eller ‘så X’ (For eksempel: Det er fint! Hvor herlig! Så bra!). <br>I disse konstruksjonene står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), Pred betyr predikativ, det vil si adjektivets kortform, mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex85_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex85() {
    result = '1) — <span class=\'construction\'>А насчёт</span> закусок — что мы будем готовить?<br>2) — <span class=\'construction\'>А насчёт</span> супа — что мы будем готовить?<br>3) — <span class=\'construction\'>А насчёт</span> горячего — что мы будем готовить?<br>4) — <span class=\'construction\'>А насчёт</span> гарнира — что мы будем готовить?<br>5) — <span class=\'construction\'>А насчёт</span> десерта — что мы будем готовить?';
    var x = document.getElementById("ex85_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex86_eng() {
    result = "You overheard a small part of a conversation on the street. Try to guess what was said before the part that you heard. Name the topic of the conversation and imagine what the previous remarks might have been. Use the construction <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> meaning ‘and concerning X, ...’.<br>In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex86_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex86_norw() {
    result = "Du overhørte en liten del av en samtale på gata. Prøv å gjette hva som ble sagt tidligere. Navngi temaet på samtalen og finn ut hvordan de foregående uttalelsene kunne ha sett ut. Bruk konstruksjonen <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> som betyr ‘og når det gjelder X, ... ’. <br>I denne konstruksjonen står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon. "
    var x = document.getElementById("ex86_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex86a() {
    result = 'Они говорили о рецепте для пирогов.';
    var x = document.getElementById("ex86a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function Ex86b() {
    result = 'Они говорили о кофе.';
    var x = document.getElementById("ex86b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function Ex86c() {
    result = 'Они говорили о десерте.';
    var x = document.getElementById("ex86c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
