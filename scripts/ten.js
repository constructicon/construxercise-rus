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
    result = "Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene? "
    var x = document.getElementById("ex1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_eng() {
    result = "Describe your first impressions from meeting your classmates and teachers. Describe also how these first impressions have changed over time. Use the sentences 1 to 6, the construction <span class=\"construction\">На первый взгляд, Cl</span> meaning ‘At first glance, ... ’ and the construction <span class=\"construction\">На самом деле Cl</span> meaning ‘Actually / In reality /As a matter of fact, ... ’. We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Beskriv dine første inntrykk når du møtte dine klassekamerater og lærere. Beskriv også hvordan dette forandret seg over tid. Bruk setningene 1 til 6 og konstruksjonene <span class=\"construction\">На первый взгляд, Cl</span> ‘Ved første øyekast ... ’ og <span class=\"construction\">На самом деле Cl</span> ‘Faktisk ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
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
    if (x.value.toLowerCase() == "На первый взгляд, Катя закрытая. Но на самом деле она серьёзная.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2a_result").innerHTML = result;
}

function Ex2a() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Катя закрытая. Но <span class=\"construction\">на самом деле</span> она серьёзная.";
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
    if (x.value.toLowerCase() == 'На первый взгляд, Игорь грубый. Но на самом деле он честный.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2b_result").innerHTML = result;
}

function Ex2b() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Игорь грубый. Но <span class=\"construction\">на самом деле</span> он честный.";
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
    if (x.value.toLowerCase() == 'На первый взгляд, Ася легкомысленная. Но на самом деле она ответственная.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2c_result").innerHTML = result;
}

function Ex2c() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Ася легкомысленная. Но <span class=\"construction\">на самом деле</span> она ответственная."
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
    if (x.value.toLowerCase() == 'На первый взгляд, Паша умный. Но на самом деле он просто много говорит.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2d_result").innerHTML = result;
}

function Ex2d() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Паша умный. Но <span class=\"construction\">на самом деле</span> он просто много говорит."
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
    if (x.value.toLowerCase() == 'На первый взгляд, Ирина Петровна строгая. Но на самом деле она справедливая.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2e_result").innerHTML = result;
}

function Ex2e() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Ирина Петровна строгая. Но <span class=\"construction\">на самом деле</span> она справедливая."
    var x = document.getElementById("ex2e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex2f() {
    var x = document.getElementById('ex2f_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Николай Андреевич несерьёзный. Но на самом деле он очень весёлый.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex2f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2f_result").innerHTML = result;
}

function Ex2f() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Николай Андреевич несерьёзный. Но <span class=\"construction\">на самом деле</span> он очень весёлый."
    var x = document.getElementById("ex2f_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Discuss with your interlocutor what you think of the person in the picture. What kind of personality do they have? Use the construction <span class=\"construction\">На первый взгляд, Cl</span> meaning ‘At first glance, ... ’.  We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Diskuter med din samtalepartner hva dere tenker om personen på bildet. Hvordan er han eller hun som person? Bruk konstruksjonen <span class=\"construction\">На первый взгляд, Cl</span> ‘Ved første øyekast ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex3_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_eng() {
    result = "Analyze the information provided in the table. How are the two constructions <span class=\"construction\">мягко говоря, Cl</span> ‘To put it mildly, ...’ and <span class=\"construction\">грубо говоря, Cl</span> ‘Roughly speaking, ...’ similar and how are they different? We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Analyser informasjonen i tabellen. Finn likheter og forskjeller i bruken og betydningen av konstruksjonene <span class=\"construction\">мягко говоря, Cl</span> ‘mildt sagt, ...’ og <span class=\"construction\">грубо говоря, Cl</span>, Cl ‘grovt sett, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_eng() {
    result = "Replace the underlined words with other words that are less emotional and harsh. Use the construction <span class=\"construction\">мягко говоря, Cl</span> meaning ‘Mildly speaking / To put it mildly, ...’. We can place an entire sentence in the Cl slot (Cl=clause, sentence). The words <span class=\"construction\">мягко говоря</span> can be placed in the beginning, at the end, or in the middle of a sentence. The best strategy is to place the words <span class=\"construction\">мягко говоря</span> right before the hedging phrase."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Erstatt de understrekete ordene med andre ord som ikke er like følelsesladde og skarpe. Bruk konstruksjonen <span class=\"construction\">мягко говоря, Cl</span> ‘mildt sagt, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning). Ordene <span class=\"construction\">мягко говоря</span> kan være enten i begynnelsen, i slutten, eller i midten av en setning. Den beste måten er imidlertid å plassere ordene <span class=\"construction\">мягко говоря</span> direkte foran den formildende frasen."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}


function check_Ex5a() {
    var x = document.getElementById("ex5a_input");
    answers = ["миша ведёт себя, мягко говоря, плохо. сегодня он снова подрался с младшим братом.", "миша ведёт себя, мягко говоря, плохо."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex5a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex5a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5a_result").innerHTML = result;
}

function Ex5a() {
    result = "Миша ведёт себя, <span class=\"construction\">мягко говоря,</span> плохо.";
    var x = document.getElementById("ex5a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5b() {
    var x = document.getElementById('ex5b_input');
    answers = ["мы, мягко говоря, не любим нового соседа!", "мы, мягко говоря, не любим нового соседа! он шумит каждую ночь и оставляет мусор у нас под окнами."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5b_result").innerHTML = result;
}

function Ex5b() {
    result = "Мы, <span class=\"construction\">мягко говоря,</span> не любим нового соседа!";
    var x = document.getElementById("ex5b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5c() {
    var x = document.getElementById('ex5c_input');
    answers = ["у моих друзей, мягко говоря, глупая собака.", "у моих друзей, мягко говоря, глупая собака. она часто убегает во время прогулок."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5c_result").innerHTML = result;
}

function Ex5c() {
    result = "У моих друзей, <span class=\"construction\">мягко говоря,</span> глупая собака."
    var x = document.getElementById("ex5c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5d() {
    var x = document.getElementById('ex5d_input');
    answers = ["я, мягко говоря, удивлён.", "я, мягко говоря, удивлён. как вы могли прийти на день рождения и не принести подарок?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5d_result").innerHTML = result;
}

function Ex5d() {
    result = "Я, <span class=\"construction\">мягко говоря,</span> удивлён."
    var x = document.getElementById("ex5d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex6_eng() {
    result = "Connect the sentences by choosing a matching continuation. Use the construction <span class=\"construction\">грубо говоря, Cl</span> meaning ‘Roughly, ...’. We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class=\"construction\">грубо говоря, Cl</span> som betyr omtrent ‘grovt sett, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex6() {
    var x = document.getElementById('ex6_input');
    if (x.value.toLowerCase() == '1в, 2а, 3б, 4г'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex6_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6_result").innerHTML = result;
}

function Ex6() {
    result = "1в, 2а, 3б, 4г"
    var x = document.getElementById("ex6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "Analyze the diagram below. How are the two constructions <span class=\"construction\">(на)вряд ли XP/Cl</span> meaning ‘it is unlikely that ...’ and <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’ different? We can locate a phrase or an entire sentence in the slot XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Analyser diagrammet nedenfor. På hvilken måte er konstruksjonene <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ...’ og <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’ forskjellige? Plassen XP/Cl kan fylles med en frase (XP=frase) eller en hel setning (Cl=setning). "
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_eng() {
    result = "Build sentences from the available parts. Note that <span class=\"construction\">навряд ли</span> is more colloquial than <span class=\"construction\">вряд ли</span>. We can put a phrase or an entire sentence in the slot XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Lag setninger ved å bruke de foreslåtte delene. Bruk konstruksjonen <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ...’. Legg merke til at <span class=\"construction\">навряд ли</span> er mer muntlig enn <span class=\"construction\">вряд ли</span>. Plassen XP/Cl kan fylles med en frase (XP=frase) eller en hel setning. "
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_eng() {
    result = "Build as many sentences as you can by using the two patterns below. Use the construction <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’. We can put an entire sentence in the Cl slot (Cl=clause, sentence). <br>Note that in pattern 1 we use the infinitive, whereas in pattern 2 we use the subjunction чтобы ‘in order to’ followed by a subordinate clause. In both patterns, the second sentence should contradict the first sentence.\n"
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Lag så mange setninger som mulig med utgangspunkt i eksemplene nedenfor. Bruk konstruksjonen <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’. Ved plassen Cl brukes en hel setning (Cl=setning). <br>Legg merke til at i eksempel 1 brukes infinitiv, men i eksempel 2 brukes subjunksjonen чтобы ‘for å’ som etterfølges av en leddsetning. I begge eksemplene skal den andre setningen motsi den første setningen. "
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex9_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "Bonus exercise.<br> The same personal qualities can be favorable or unfavorable in different contexts and for different purposes. Discuss what traditionally negative personal qualities can be beneficial and what traditionally positive qualities can be harmful (see the table). Use the construction <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’. Some personal qualities, however, are rather unambiguously good or bad. Name them by using the construction <span class=\"construction\">(на)вряд ли XP/Cl</span> meaning ‘It’s unlikely that ... ’ and explain your opinion. In these constructions, XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Bonusoppgave.<br> De samme personlige egenskapene kan være fordelaktige i noen situasjoner, og ufordelaktige i andre. \tDiskuter hvilke tradisjonelt negative personlige egenskaper kan være nyttige, og hvilke tradisjonelt positive personlige egenskaper kan være skadelige (se tabell). Bruk konstruksjonen <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’. Noen personlige egenskaper er imidlertid mer eller mindre entydig positive eller negative. Navngi dem ved å bruke konstruksjonen <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ... ’ og uttrykk din mening. I disse konstruksjonene står XP for en frase, mens Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_eng() {
    result = "Discuss with your interlocutor how you imagine the ideal a) boss, b) subordinate, c) friend, d) partner, e) parent, f) classmate. Use the constructions from the list."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Diskuter med din samtalepartner om hvordan den perfekte a) sjefen, b) ansatte c) vennen, d) partneren, e) forelderen, f) klassekameraten bør være. Bruk konstruksjonene i listen. "
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex11_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_eng() {
    result = "You and your friend were supposed to prepare a project, but did not have time to finish it before the deadline. Discuss with your friend what to do next: what is the best way to tell the professor that your project is not ready? How will the professor react: will they punish you or let you turn in the project later? Use the constructions from the list."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_norw() {
    result = "Du og din venn skulle forberede et prosjekt, men dere hadde ikke tid å levere før fristen. Diskuter med din venn hva dere skal gjøre videre: hva er den beste måten å fortelle underviseren at prosjektet ikke er ferdig? Hvordan vil underviseren reagere: straffe dere, eller la dere levere in prosjektet senere? Bruk konstruksjonene i listen. "
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex12_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex13_eng() {
    result = "You and your roommate used another roommate’s favorite mug and accidentally broke it. What should you do? Discuss how your roommate will react and what you need to do so that they do not get offended. Use the constructions from the list."
    var x = document.getElementById("ex13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex13_norw() {
    result = "Du og romkameraten din brukte en annen romkamerat sitt yndlingskrus og ødela det ved et uhell. Hva skal dere gjøre? Diskuter hvordan romkameraten vil reagere og hva dere må gjøre slik at han eller hun ikke blir fornærmet. Bruk konstruksjonene i listen. "
    var x = document.getElementById("ex13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex13_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex13_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex14_eng() {
    result = "You have fallen in love with a guy or girl from your group. Discuss with your best friend what is bothering you: do you have a chance? How did you meet? What to do next? Use the constructions from the list."
    var x = document.getElementById("ex14_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex14_norw() {
    result = "Du ble forelsket i en gutt eller ei jente i gruppa di. Diskuter med din bestevenn eller venninne hva som plager deg: Har du en sjanse? Hvordan møttes dere? Hva skal du gjøre nå? Bruk konstruksjonene i listen."
    var x = document.getElementById("ex14_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex14_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex14_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex15_eng() {
    result = "Write a short text (6 to 10 sentences). Describe the personality of a character from your favorite movie or book. Use all the constructions from this lesson."
    var x = document.getElementById("ex15_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex15_norw() {
    result = "Skriv en kort tekst (6 til 10 setninger). Beskriv personligheten til en av karakterene i din favorittfilm eller bok. Bruk alle konstruksjonene du har lært i denne leksjonen. "
    var x = document.getElementById("ex15_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }
}
