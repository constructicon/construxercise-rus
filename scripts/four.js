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
    result = "Complete the sentences (1-3) by choosing a matching continuation (a-в). Use the construction <span class=\"construction\">иными/другими словами, XP/Cl</span> meaning ‘in other words / to put it differently, ...’ and the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> meaning ‘..., that is ... ’. These constructions serve the same function, and in these sentences either of them can be used. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Fullfør setningene (1-3) ved å velge en passende fortsettelse (а-в). Bruk konstruksjonen <span class=\"construction\">иными/другими словами, XP/Cl</span> som betyr omtrent ‘med andre ord, ...’ og konstruksjonen <span class=\"construction\">XP/Cl, то есть XP/Cl</span> som betyr ‘..., det vil si ... ’. Disse konstruksjonene har lik betydning, og i disse setningene kan de brukes om hverandre. Plassen XP/Cl kan fylles med en frase eller med en hel setning (XP=frase, Cl=setning). "
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
    if (x.value.toLowerCase() == "1б, 2в, 3а".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_result").innerHTML = result;
}

function Ex2() {
    result = "1б, 2в, 3а";
    var x = document.getElementById("ex2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Complete the sentences (1-3) by choosing a matching continuation (a-в). Use the construction <span class=\"construction\">XP, а именно XP</span> meaning ‘..., specifically, ...’ or ‘..., to be exact, ...’. We can put a word or a phrase in the slot marked XP (XP=phrase)."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Fullfør setningene (1-3) ved å velge en passende fortsettelse (а-в). Bruk konstruksjonen <span class=\"construction\">XP, а именно XP</span> som betyr omtrent ‘..., eller mer spesifikt, ...’ og ‘..., det vil si, ...’. Plassen XP kan fylles med et ord eller en frase (XP=frase).\n"
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex3() {
    var x = document.getElementById("ex3_input");
    if (x.value.toLowerCase() == "1б, 2a, 3в".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_result").innerHTML = result;
}

function Ex3() {
    result = "1б, 2a, 3в";
    var x = document.getElementById("ex3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Fill in the blanks with the words from the list. Explain why certain options cannot be used. Note that there can be more than one correct answer."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. Forklar hvorfor noen varianter ikke passer. Legg merke til at flere enn et alternativ kan være riktig."
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
    result = "в. Конструкция XP, а именно XP уточняет более общее понятие (документы) через более частное (паспорт, медицинский полис). Конструкция иными/другими словами, XP/Cl и конструкция XP/Cl, то есть XP/Cl это значение не передают.<br>" +
        "ENG<br>" +
        "The construction XP, а именно XP ‘..., specifically, ...’ explains a more general concept (here: документы) by using more specific ones (here: паспорт, медицинский полис). The construction иными/другими словами, XP/Cl ‘in other words, ...’ and the construction XP/Cl, то есть XP/Cl ‘..., that is ... ’ do not convey this meaning.<br>" +
        "NORW<br>" +
        "Konstruksjonen XP, а именно XP ‘..., eller mer spesifikt, ...’ beskriver et mer generelt begrep (i dette tilfellet: документы) ved å referere til spesifikke eksempler (her: паспорт, медицинский полис). Konstruksjonen иными/другими словами, XP/Cl ‘med andre ord, ...’ og konstruksjonen XP/Cl, то есть XP/Cl ‘..., det vil si ... ’ formidler ikke en slik betydning.<br>";
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
    answers = ["a, б"]
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
    result = "a, б. Конструкция иными/другими словами, XP/Cl и конструкция XP/Cl, то есть XP/Cl поясняют одну, менее понятную формулировку (Я реагирую на кошек и собак) с помощью другой, более понятной формулировки (У меня на них аллергия). Это пояснение не является переходом от общего к частному, поэтому конструкция XP, а именно XP здесь не подходит.<br>" +
        "ENG<br>" +
        "The construction иными/другими словами, XP/Cl ‘in other words, ...’ and the construction XP/Cl, то есть XP/Cl ‘..., that is ... ’ is used to explain a less clear phrasing (Я реагирую на кошек и собак ‘I react to cats and dogs’) with a more comprehensible one (У меня на них аллергия ‘I’m allergic to them’). This explanation however does not contain the transition from a more general to a more specific concept, therefore the construction XP, а именно XP ‘..., specifically, ...’ is not appropriate here.<br>" +
        "NORW<br>" +
        "Konstruksjonen иными/другими словами, XP/Cl ‘med andre ord, ...’ og konstruksjonen XP/Cl, то есть XP/Cl ‘..., det vil si ... ’ forklarer et noe utydelig utsagn (Я реагирую на кошек и собак ‘Jeg reagerer på katter og hunder’) ved hjelp av et tydeligere formulert utsagn (У меня на них аллергия ‘Jeg er allergisk mot dem’). Denne konstruksjonen formidler imidlertid ikke en overgang fra et allment til et mer spesifikt begrep, derfor passer ikke konstruksjonen XP, а именно XP ‘..., eller mer spesifikt, ...’ i dette tilfellet.\n";
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
    answers = ["a, б"]
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
    result = "a, б. В этом предложении пояснение содержится два раза: 1) одна формулировка (Томас постоянно играет в компьютерные игры) поясняется с помощью другой, более понятной формулировки (у него игромания), 2) вторая формулировка содержит термин, который поясняется с помощью третьей формулировки (игровая зависимость). В обоих случаях подходит и конструкция иными/другими словами, XP/Cl, и конструкция XP/Cl, то есть XP/Cl, потому что обе конструкции выполняют функцию пояснения. Первый пропуск можно заполнить словами другими словами, а второй пропуск словами то есть или наоборот. Заполнить оба пропуска одинаково нельзя. Так как пояснение не является переходом от общего к частному, конструкция XP, а именно XP здесь не подходит.<br>" +
        "ENG<br>" +
        "This sentence contains clarifications in two places. First, the phrase Томас постоянно играет в компьютерные игры ‘Thomas is constantly playing videogames’ is explained with another, more comprehensible phrase (у него игромания ‘Thomas has a gaming addiction’). Then, the term in the second phrase is explained by means of the third phrase (игровая зависимость ‘gaming addiction’). In both cases, either the construction иными/другими словами, XP/Cl ‘in other words, ...’ or the construction XP/Cl, то есть XP/Cl ‘..., that is ... ’ can be used, because these constructions serve the same function: they clarify one’s statement. We can fill in the first blank with the words другими словами, and the second blank can be filled in with the words то есть, or the other way around. However, avoid filling in both blanks with the same construction. The construction XP, а именно XP ‘..., specifically, ...’ is not appropriate here, because this clarification does not contain a transition from a more general to a more specific concept.<br>" +
        "NORW<br>" +
        "I denne setningen forekommer det tydeliggjøring to ganger. Først forklares et utsagn (Томас постоянно играет в компьютерные игры ‘Tomas spiller dataspill hele tiden’) ved hjelp av et tydeligere formulert utsagn (у него игромания ‘Tomas er dataspillavhengig’). Dessuten inneholder det andre utsagnet et uttrykk som forklares ved hjelp av et tredje utsagn (игровая зависимость ‘dataspillavhengighet’). I begge tilfellene passer konstruksjonene иными/другими словами, XP/Cl ‘med andre ord, ...’ og XP/Cl, то есть XP/Cl ‘..., det vil si ... ’ like godt, fordi de fyller samme funksjon: å tydeliggjøre et utsagn. Det første og det andre tomme feltet kan begge fylles med enten другими словами eller то есть. Unngå å fylle begge feltene med den samme konstruksjonen. I dette tilfellet formidles ikke en overgang fra et allment til et mer spesifikt begrep, derfor passer ikke konstruksjonen XP, а именно XP ‘..., eller mer spesifikt, ...’.\n"
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
    answers = ["в"]
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
    result = "в. Конструкция XP, а именно XP уточняет более общее понятие (разные симптомы) через более частное (насморк, температура, кашель, диарея). Конструкция иными/другими словами, XP/Cl и конструкция XP/Cl, то есть XP/Cl это значение не передают.<br>" +
        "English<br>" +
        "The construction XP, а именно XP ‘..., specifically, ...’ explains a more general concept (here: разные симптомы ‘various symptoms’) by using more specific ones (here: насморк ‘runny nose’, температура ‘fever’, кашель ‘cough’, диарея ‘diarrhea’). The construction иными/другими словами, XP/Cl ‘in other words, ...’ and the construction XP/Cl, то есть XP/Cl ‘..., that is ... ’ do not convey this meaning.<br>" +
        "Norwegian<br>" +
        "Konstruksjonen XP, а именно XP ‘..., eller mer spesifikt, ...’ beskriver et mer generelt begrep (i dette tilfellet: разные симптомы ‘forskjellige symptomer’) ved å referere til spesifikke eksempler (i dette tilfellet: насморк ‘rennende nese’, температура ‘feber’, кашель ‘hoste’, диарея ‘diaré’). Konstruksjonen иными/другими словами, XP/Cl ‘med andre ord, ...’ og konstruksjonen XP/Cl, то есть XP/Cl ‘..., det vil si ... ’  formidler ikke en slik betydning.\n"
    var x = document.getElementById("ex4d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "Analyze the diagram below. How are the two constructions <span class=\"construction\">(Так) мало того – Cl</span> ‘and what is more...’ and <span class=\"construction\">ко всему прочему, Cl</span> ‘on top of all of this ...’ different?"
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Analyser diagrammet nedenfor. Hvordan er konstruksjonene <span class=\"construction\">(Так) мало того – Cl</span> som betyr omtrent ‘Ikke nok med det ... / Dessuten ...’ og konstruksjonen <span class=\"construction\">ко всему прочему, Cl</span> som betyr ‘På toppen av alt, ... ’, forskjellige?"
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_eng() {
    result = "Fill in the blanks by using constructions from the list. Note that in some cases either of these constructions can be used. In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Fyll ut de tomme feltene ved å bruke konstruksjonene i listen. Legg merke til at i noen tilfeller kan begge konstruksjonene passe. I disse konstruksjonene betyr Cl en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
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
    answers = ["а"]
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
    result = "а";
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
    answers = ["а"]
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
    result = "а";
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
    answers = ["а, б"]
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
    result = "а, б";
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
    answers = ["а, б"]
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
    result = "а, б";
    var x = document.getElementById("ex6d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "Build sentences from the available parts. Connect complaints by using the pattern below and the constructions <span class=\"construction\">(Так) мало того – Cl</span> meaning ‘and what is more...’ and <span class=\"construction\">ко всему прочему, Cl</span> meaning ‘on top of all of this ...’. In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Lag setninger og uttrykk relaterte til helse og sykdom med utgangspunkt i eksemplene nedenfor. Bruk konstruksjonene <span class=\"construction\">(Так) мало того – Cl</span> ‘ikke nok med det, dessuten ...’ og <span class=\"construction\">ко всему прочему, Cl</span>  ‘dessuten ...’, ‘på toppen av X ...’. I disse konstruksjonene betyr Cl en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex7a() {
    var x = document.getElementById("ex7a_input");
    answers = ["у меня высокая температура. мало того, у меня болит всё тело, ко всему прочему, озноб."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex7a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7a_result").innerHTML = result;
}

function Ex7a() {
    result = "У меня высокая температура. <span class=\"construction\">Mало того,</span> у меня болит всё тело, <span class=\"construction\">ко всему прочему,</span> озноб.";
    var x = document.getElementById("ex7a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex7b() {
    var x = document.getElementById('ex7b_input');
    answers = ["у меня низкое давление. мало того, у меня слабость, ко всему прочему, я упал в обморок.", "у меня низкое давление. мало того, у меня слабость, ко всему прочему, я упалa в обморок."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex7b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex7b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6b_result").innerHTML = result;
}

function Ex7b() {
    result = "У меня низкое давление. <span class=\"construction\">Mало того,</span> у меня слабость, <span class=\"construction\">ко всему прочему,</span> я упал в обморок.<br>" +
        "У меня низкое давление. <span class=\"construction\">Mало того,</span> у меня слабость, <span class=\"construction\">ко всему прочему,</span> я упалa в обморок.";
    var x = document.getElementById("ex7b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex7c() {
    var x = document.getElementById('ex7c_input');
    answers = ["у меня болит рука. мало того, у меня болят ноги и, ко всему прочему, высокое давление."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex7c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex7c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6c_result").innerHTML = result;
}

function Ex7c() {
    result = "У меня болит рука. <span class=\"construction\">Mало того,</span> у меня болят ноги и, <span class=\"construction\">ко всему прочему,</span> высокое давление.";
    var x = document.getElementById("ex7c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex8_eng() {
    result = "Connect the phrases by means of the construction <span class=\"construction\">(да) и вообще, Cl</span> meaning ‘for that matter, ...’. In this construction, we can put an entire sentence in the Cl slot (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Koble sammen setningene ved å bruke konstruksjonen <span class=\"construction\">(да) и вообще, Cl</span> som betyr omtrent ‘generelt, ...’ eller ‘i det hele tatt, ...’ (det er vanskelig å finne et godt tilsvarende uttrykk på norsk). Plassen Cl kan fylles med en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex8a() {
    var x = document.getElementById("ex8a_input");
    answers = ["мне уже лучше, и вообще, я вас совсем не знаю!", "мне уже лучше, да и вообще, я вас совсем не знаю!"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex8a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex8a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8a_result").innerHTML = result;
}

function Ex8a() {
    result = "Мне уже лучше, <span class=\"construction\">и вообще,</span> я вас совсем не знаю!<br>Мне уже лучше, <span class=\"construction\">да и вообще,</span> я вас совсем не знаю!";
    var x = document.getElementById("ex8a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex8b() {
    var x = document.getElementById('ex8b_input');
    answers = ["и вообще, тебе надо найти другую работу!", "да и вообще, тебе надо найти другую работу!"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex8b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8b_result").innerHTML = result;
}

function Ex8b() {
    result = "<span class=\"construction\">И вообще,</span> тебе надо найти другую работу!<br><span class=\"construction\">Да и вообще,</span> тебе надо найти другую работу!";
    var x = document.getElementById("ex8b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex8c() {
    var x = document.getElementById('ex8c_input');
    answers = ["и вообще, я уже не помню...", "да и вообще, я уже не помню..."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex8c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8c_result").innerHTML = result;
}

function Ex8c() {
    result = "<span class=\"construction\">И вообще,</span> я уже не помню...<br><span class=\"construction\">Да и вообще,</span> я уже не помню...";
    var x = document.getElementById("ex8c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex8d() {
    var x = document.getElementById('ex8d_input');
    answers = ["и вообще, у меня всё болит.", "да и вообще, у меня всё болит."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex8d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8d_result").innerHTML = result;
}

function Ex8d() {
    result = "<span class=\"construction\">И вообще,</span> у меня всё болит.<br><span class=\"construction\">Да и вообще,</span> у меня всё болит.";
    var x = document.getElementById("ex8d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "You have met a friend. Tell your friend how you are doing. Use the answer options provided in the table or come up with your own examples. When used in the order in the table, the constructions indicate a «scale» of problems."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Du har truffet en venn. Fortell din venn om hvordan du har det. Bruk svarsalternativene i tabellen, eller finn på egne eksempler. Rekken av konstruksjoner i tabellen danner en slags «skale» for å beskrive problemer. "
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. "
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex10() {
    result = "1. Мало того,<br>" +
        "2. Ко всему прочему, <br>" +
        "3. то есть <br>" +
        "4. Да и вообще,<br>";
    var x = document.getElementById("ex10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex11_eng() {
    result = "You are a patient, and your interlocutor is a doctor. Tell the doctor where in your body it hurts (where you have a problem). Use the constructions from the list."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Du er pasient, din samtalepartner er lege. Fortell legen hvor det gjør vondt. Bruk konstruksjonene i listen. "
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_comment() {
    result = "Комментарий для преподавателя. Формат задания: в парах. После одного диалога студенты меняются ролями.<br>" +
        "Comment for language teachers. Task format: in pairs. After one dialogue, the students switch roles."
    var x = document.getElementById("ex11_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. "
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex12() {
    result = "1. мало того<br>" +
        "2. а именно<br>" +
        "3. иными словами / то есть (оба варианта возможны)<br>" +
        "4. то есть<br>" +
        "5. мало того /  ко всему прочему, (оба варианта возможны)<br>" +
        "6. иными словами, / да и вообще, (оба варианта возможны, но вариант с <span class=\"construction\">иными словами</span> означает пояснение (English: clarification, rephrasing; Norwegian: omformulering), a вариант с <span class=\"construction\">да и вообще</span> означает подведение итога, вывод (English: drawing a conclusion; Norwegian konklusjon).\n";
    var x = document.getElementById("ex12_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex13_eng() {
    result = "Bonus exercise. Connect the phrases by choosing the matching continuation. Use the construction <span class=\"construction\">XP, а именно XP</span> meaning ‘..., specifically, ...’ or ‘..., to be exact, ...’."
    var x = document.getElementById("ex13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex13_norw() {
    result = "Bonusoppgave. Koble sammen setningene ved å velge en passende fortsettelse. Bruk konstruksjonen <span class=\"construction\">XP, а именно XP</span> som betyr ‘..., eller mer spesifikt, ...’ eller ‘..., det vil si, ...’."
    var x = document.getElementById("ex13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex13() {
    var x = document.getElementById('ex13_input');
    answers = ["1д , 2б, 3г, 4а, 5е, 6в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex13_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex13_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex13_result").innerHTML = result;
}

function Ex13() {
    result = "1д , 2б, 3г, 4а, 5е, 6в";
    var x = document.getElementById("ex13_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex14_eng() {
    result = "Bonus exercise. Discuss with your interlocutor whether you agree with the advice given in the table in exercise 13 and whether you follow this advice."
    var x = document.getElementById("ex14_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex14_norw() {
    result = "Bonusoppgave. Diskuter med din samtalepartner om du er enig i rådene i tabellen til øvelse 13, og hvorvidt du vil følge dem."
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
    result = "Bonus exercise*\n" +
        "You are an administrator at a clinic. Explain to a patient over the phone how to prepare for their doctor’s appointment. Use the checklist (memo) below, the construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ or ‘..., to be exact, ...’ and the construction <span class=\"construction\">XXP/Cl, то есть XP/Cl</span> ‘..., that is, ...’. In these constructions, XP is a phrase (XP=phrase) and Cl is a whole sentence (Cl=clause, sentence).\n"
    var x = document.getElementById("ex15_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex15_norw() {
    result = "Bonusoppgave. Du jobber som administrator ved en klinikk. Forklar for en pasient på telefon hvordan forberede seg til legetimen. Bruk huskelisten nedenfor og konstruksjonene <span class=\"construction\">XP, а именно XP</span>‘..., eller mer spesifikt, ...’, ‘..., det vil si, ...’ <span class=\"construction\">XXP/Cl, то есть XP/Cl</span> ‘..., det vil si, ...’. I disse konstruksjonene er XP en frase (XP=frase) and Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex15_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex16_eng() {
    result = "Write a short story about when you were sick. Use all new constructions you have learned in this lesson.";
    var x = document.getElementById("ex16_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex16_norw() {
    result = "Skriv en kort tekst om når du var syk. Bruk alle de nye konstruksjonene du har lært i i denne leksjonen.";
    var x = document.getElementById("ex16_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}