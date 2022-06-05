function Ex104_eng() {
    result = "Analyze the information provided in the table. How are the two constructions <span class=\"construction\">мягко говоря, Cl</span> ‘To put it mildly, ...’ and <span class=\"construction\">грубо говоря, Cl</span> ‘Roughly speaking, ...’ similar and how are they different? We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex104_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex104_norw() {
    result = "Analyser informasjonen i tabellen. Finn likheter og forskjeller i bruken og betydningen av konstruksjonene <span class=\"construction\">мягко говоря, Cl</span> ‘mildt sagt, ...’ og <span class=\"construction\">грубо говоря, Cl</span>, Cl ‘grovt sett, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex104_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex105_eng() {
    result = "Replace the underlined words with other words that are less emotional and harsh. Use the construction <span class=\"construction\">мягко говоря, Cl</span> meaning ‘Mildly speaking / To put it mildly, ...’. We can place an entire sentence in the Cl slot (Cl=clause, sentence). The words <span class=\"construction\">мягко говоря</span> can be placed in the beginning, at the end, or in the middle of a sentence. The best strategy is to place the words <span class=\"construction\">мягко говоря</span> right before the hedging phrase."
    var x = document.getElementById("ex105_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex105_norw() {
    result = "Erstatt de understrekete ordene med andre ord som ikke er like følelsesladde og skarpe. Bruk konstruksjonen <span class=\"construction\">мягко говоря, Cl</span> ‘mildt sagt, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning). Ordene <span class=\"construction\">мягко говоря</span> kan være enten i begynnelsen, i slutten, eller i midten av en setning. Den beste måten er imidlertid å plassere ordene <span class=\"construction\">мягко говоря</span> direkte foran den formildende frasen."
    var x = document.getElementById("ex105_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}


function check_Ex105a() {
    var x = document.getElementById("ex105a_input");
    answers = ["миша ведёт себя, мягко говоря, плохо. сегодня он снова подрался с младшим братом.", "миша ведёт себя, мягко говоря, плохо."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex105a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex105a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex105a_result").innerHTML = result;
}

function Ex105a() {
    result = "Миша ведёт себя, <span class=\"construction\">мягко говоря,</span> плохо.";
    var x = document.getElementById("ex105a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex105b() {
    var x = document.getElementById('ex105b_input');
    answers = ["мы, мягко говоря, не любим нового соседа!", "мы, мягко говоря, не любим нового соседа! он шумит каждую ночь и оставляет мусор у нас под окнами."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex105b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex105b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex105b_result").innerHTML = result;
}

function Ex105b() {
    result = "Мы, <span class=\"construction\">мягко говоря,</span> не любим нового соседа!";
    var x = document.getElementById("ex105b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex105c() {
    var x = document.getElementById('ex105c_input');
    answers = ["у моих друзей, мягко говоря, глупая собака.", "у моих друзей, мягко говоря, глупая собака. она часто убегает во время прогулок."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex105c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex105c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex105c_result").innerHTML = result;
}

function Ex105c() {
    result = "У моих друзей, <span class=\"construction\">мягко говоря,</span> глупая собака."
    var x = document.getElementById("ex105c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex105d() {
    var x = document.getElementById('ex105d_input');
    answers = ["я, мягко говоря, удивлён.", "я, мягко говоря, удивлён. как вы могли прийти на день рождения и не принести подарок?"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex105d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex105d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex105d_result").innerHTML = result;
}

function Ex105d() {
    result = "Я, <span class=\"construction\">мягко говоря,</span> удивлён."
    var x = document.getElementById("ex105d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex106_eng() {
    result = "Connect the sentences by choosing a matching continuation. Use the construction <span class=\"construction\">грубо говоря, Cl</span> meaning ‘Roughly, ...’. We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex106_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex106_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class=\"construction\">грубо говоря, Cl</span> som betyr omtrent ‘grovt sett, ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex106_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex106() {
    var x = document.getElementById('ex106_input');
    if (x.value.toLowerCase() == '1в, 2а, 3б, 4г'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex106_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex106_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex106_result").innerHTML = result;
}

function Ex106() {
    result = "1в, 2а, 3б, 4г"
    var x = document.getElementById("ex106_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex102_eng() {
    result = "Describe your first impressions from meeting your classmates and teachers. Describe also how these first impressions have changed over time. Use the sentences 1 to 6, the construction <span class=\"construction\">На первый взгляд, Cl</span> meaning ‘At first glance, ... ’ and the construction <span class=\"construction\">На самом деле Cl</span> meaning ‘Actually / In reality /As a matter of fact, ... ’. We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex102_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex102_norw() {
    result = "Beskriv dine første inntrykk når du møtte dine klassekamerater og lærere. Beskriv også hvordan dette forandret seg over tid. Bruk setningene 1 til 6 og konstruksjonene <span class=\"construction\">На первый взгляд, Cl</span> ‘Ved første øyekast ... ’ og <span class=\"construction\">На самом деле Cl</span> ‘Faktisk ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex102_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex102a() {
    var x = document.getElementById("ex102a_input");
    if (x.value.toLowerCase() == "На первый взгляд, Катя закрытая. Но на самом деле она серьёзная.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex102a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex102a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102a_result").innerHTML = result;
}

function Ex102a() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Катя закрытая. Но <span class=\"construction\">на самом деле</span> она серьёзная.";
    var x = document.getElementById("ex102a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex102b() {
    var x = document.getElementById('ex102b_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Игорь грубый. Но на самом деле он честный.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex102b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex102b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102b_result").innerHTML = result;
}

function Ex102b() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Игорь грубый. Но <span class=\"construction\">на самом деле</span> он честный.";
    var x = document.getElementById("ex102b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex102c() {
    var x = document.getElementById('ex102c_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Ася легкомысленная. Но на самом деле она ответственная.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex102c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex102c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102c_result").innerHTML = result;
}

function Ex102c() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Ася легкомысленная. Но <span class=\"construction\">на самом деле</span> она ответственная."
    var x = document.getElementById("ex102c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex102d() {
    var x = document.getElementById('ex102d_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Паша умный. Но на самом деле он просто много говорит.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex102d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex102d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102d_result").innerHTML = result;
}

function Ex102d() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Паша умный. Но <span class=\"construction\">на самом деле</span> он просто много говорит."
    var x = document.getElementById("ex102d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex102e() {
    var x = document.getElementById('ex102e_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Ирина Петровна строгая. Но на самом деле она справедливая.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex102e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex102e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102e_result").innerHTML = result;
}

function Ex102e() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Ирина Петровна строгая. Но <span class=\"construction\">на самом деле</span> она справедливая."
    var x = document.getElementById("ex102e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex102f() {
    var x = document.getElementById('ex102f_input');
    if (x.value.toLowerCase() == 'На первый взгляд, Николай Андреевич несерьёзный. Но на самом деле он очень весёлый.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex102f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex102f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex102f_result").innerHTML = result;
}

function Ex102f() {
    result = "<span class=\"construction\">На первый взгляд, Cl</span> Николай Андреевич несерьёзный. Но <span class=\"construction\">на самом деле</span> он очень весёлый."
    var x = document.getElementById("ex102f_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex103_eng() {
    result = "Discuss with your interlocutor what you think of the person in the picture. What kind of personality do they have? Use the construction <span class=\"construction\">На первый взгляд, Cl</span> meaning ‘At first glance, ... ’.  We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex103_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex103_norw() {
    result = "Diskuter med din samtalepartner hva dere tenker om personen på bildet. Hvordan er han eller hun som person? Bruk konstruksjonen <span class=\"construction\">На первый взгляд, Cl</span> ‘Ved første øyekast ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex103_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex103_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex103_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex107_eng() {
    result = "Analyze the diagram below. How are the two constructions <span class=\"construction\">(на)вряд ли XP/Cl</span> meaning ‘it is unlikely that ...’ and <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’ different? We can locate a phrase or an entire sentence in the slot XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex107_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex107_norw() {
    result = "Analyser diagrammet nedenfor. På hvilken måte er konstruksjonene <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ...’ og <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’ forskjellige? Plassen XP/Cl kan fylles med en frase (XP=frase) eller en hel setning (Cl=setning). "
    var x = document.getElementById("ex107_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex108_eng() {
    result = "Build sentences from the available parts. Note that <span class=\"construction\">навряд ли</span> is more colloquial than <span class=\"construction\">вряд ли</span>. We can put a phrase or an entire sentence in the slot XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex108_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex108_norw() {
    result = "Lag setninger ved å bruke de foreslåtte delene. Bruk konstruksjonen <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ...’. Legg merke til at <span class=\"construction\">навряд ли</span> er mer muntlig enn <span class=\"construction\">вряд ли</span>. Plassen XP/Cl kan fylles med en frase (XP=frase) eller en hel setning. "
    var x = document.getElementById("ex108_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex109_eng() {
    result = "Build as many sentences as you can by using the two patterns below. Use the construction <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’. We can put an entire sentence in the Cl slot (Cl=clause, sentence). <br>Note that in pattern 1 we use the infinitive, whereas in pattern 2 we use the subjunction чтобы ‘in order to’ followed by a subordinate clause. In both patterns, the second sentence should contradict the first sentence.\n"
    var x = document.getElementById("ex109_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex109_norw() {
    result = "Lag så mange setninger som mulig med utgangspunkt i eksemplene nedenfor. Bruk konstruksjonen <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’. Ved plassen Cl brukes en hel setning (Cl=setning). <br>Legg merke til at i eksempel 1 brukes infinitiv, men i eksempel 2 brukes subjunksjonen чтобы ‘for å’ som etterfølges av en leddsetning. I begge eksemplene skal den andre setningen motsi den første setningen. "
    var x = document.getElementById("ex109_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex109_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex109_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex1010_eng() {
    result = "Bonus exercise.<br> The same personal qualities can be favorable or unfavorable in different contexts and for different purposes. Discuss what traditionally negative personal qualities can be beneficial and what traditionally positive qualities can be harmful (see the table). Use the construction <span class=\"construction\">Не факт, что Cl</span> meaning ‘it is not necessarily the case that ...’. Some personal qualities, however, are rather unambiguously good or bad. Name them by using the construction <span class=\"construction\">(на)вряд ли XP/Cl</span> meaning ‘It’s unlikely that ... ’ and explain your opinion. In these constructions, XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex1010_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex1010_norw() {
    result = "Bonusoppgave.<br> De samme personlige egenskapene kan være fordelaktige i noen situasjoner, og ufordelaktige i andre. \tDiskuter hvilke tradisjonelt negative personlige egenskaper kan være nyttige, og hvilke tradisjonelt positive personlige egenskaper kan være skadelige (se tabell). Bruk konstruksjonen <span class=\"construction\">Не факт, что Cl</span> ‘det er ikke sikkert at ...’. Noen personlige egenskaper er imidlertid mer eller mindre entydig positive eller negative. Navngi dem ved å bruke konstruksjonen <span class=\"construction\">(на)вряд ли XP/Cl</span> ‘neppe ... ’ og uttrykk din mening. I disse konstruksjonene står XP for en frase, mens Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex1010_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}
