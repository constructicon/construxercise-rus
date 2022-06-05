function Ex4_2_eng() {
    result = "Complete the sentences (1-3) by choosing a matching continuation (a-в). Use the construction <span class=\"construction\">иными/другими словами, XP/Cl</span> meaning ‘in other words / to put it differently, ...’ and the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> meaning ‘..., that is ... ’. These constructions serve the same function, and in these sentences either of them can be used. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex4_2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_2_norw() {
    result = "Fullfør setningene (1-3) ved å velge en passende fortsettelse (а-в). Bruk konstruksjonen <span class=\"construction\">иными/другими словами, XP/Cl</span> som betyr omtrent ‘med andre ord, ...’ og konstruksjonen <span class=\"construction\">XP/Cl, то есть XP/Cl</span> som betyr ‘..., det vil si ... ’. Disse konstruksjonene har lik betydning, og i disse setningene kan de brukes om hverandre. Plassen XP/Cl kan fylles med en frase eller med en hel setning (XP=frase, Cl=setning). "
    var x = document.getElementById("ex4_2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_2() {
    var x = document.getElementById("ex4_2_input");
    if (x.value.toLowerCase() == "1б, 2в, 3а".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_2_result").innerHTML = result;
}

function Ex4_2() {
    result = "1б, 2в, 3а";
    var x = document.getElementById("ex4_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_3_eng() {
    result = "Complete the sentences (1-3) by choosing a matching continuation (a-в). Use the construction <span class=\"construction\">XP, а именно XP</span> meaning ‘..., specifically, ...’ or ‘..., to be exact, ...’. We can put a word or a phrase in the slot marked XP (XP=phrase)."
    var x = document.getElementById("ex4_3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_3_norw() {
    result = "Fullfør setningene (1-3) ved å velge en passende fortsettelse (а-в). Bruk konstruksjonen <span class=\"construction\">XP, а именно XP</span> som betyr omtrent ‘..., eller mer spesifikt, ...’ og ‘..., det vil si, ...’. Plassen XP kan fylles med et ord eller en frase (XP=frase).\n"
    var x = document.getElementById("ex4_3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_3() {
    var x = document.getElementById("ex4_3_input");
    if (x.value.toLowerCase() == "1б, 2a, 3в".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_3_result").innerHTML = result;
}

function Ex4_3() {
    result = "1б, 2a, 3в";
    var x = document.getElementById("ex4_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_4_eng() {
    result = "Fill in the blanks with the words from the list. Explain why certain options cannot be used. Note that there can be more than one correct answer."
    var x = document.getElementById("ex4_4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_4_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. Forklar hvorfor noen varianter ikke passer. Legg merke til at flere enn et alternativ kan være riktig."
    var x = document.getElementById("ex4_4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_4a() {
    var x = document.getElementById("ex4_4a_input");
    answers = ["в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex4_4a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_4a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_4a_result").innerHTML = result;
}

function Ex4_4a() {
    result = "в. Конструкция <span class=\"construction\">XP, а именно XP</span> уточняет более общее понятие (документы) через более частное (паспорт, медицинский полис). Конструкция <span class=\"construction\">иными/другими словами, XP/Cl</span> и конструкция <span class=\"construction\">XP/Cl, то есть XP/Cl</span> это значение не передают.<br>" +
        "ENG<br>" +
        "The construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ explains a more general concept (here: документы) by using more specific ones (here: паспорт, медицинский полис). The construction <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘in other words, ...’ and the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., that is ... ’ do not convey this meaning.<br>" +
        "NORW<br>" +
        "Konstruksjonen <span class=\"construction\">XP, а именно XP</span> ‘..., eller mer spesifikt, ...’ beskriver et mer generelt begrep (i dette tilfellet: документы) ved å referere til spesifikke eksempler (her: паспорт, медицинский полис). Konstruksjonen <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘med andre ord, ...’ og konstruksjonen <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., det vil si ... ’ formidler ikke en slik betydning.<br>";
    var x = document.getElementById("ex4_4a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_4b() {
    var x = document.getElementById('ex4_4b_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_4b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_4b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_4b_result").innerHTML = result;
}

function Ex4_4b() {
    result = "a, б. Конструкция <span class=\"construction\">иными/другими словами, XP/Cl</span> и конструкция <span class=\"construction\">XP/Cl, то есть XP/Cl</span> поясняют одну, менее понятную формулировку (Я реагирую на кошек и собак) с помощью другой, более понятной формулировки (У меня на них аллергия). Это пояснение не является переходом от общего к частному, поэтому конструкция <span class=\"construction\">XP, а именно XP</span> здесь не подходит.<br>" +
        "ENG<br>" +
        "The construction <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘in other words, ...’ and the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., that is ... ’ is used to explain a less clear phrasing (Я реагирую на кошек и собак ‘I react to cats and dogs’) with a more comprehensible one (У меня на них аллергия ‘I’m allergic to them’). This explanation however does not contain the transition from a more general to a more specific concept, therefore the construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ is not appropriate here.<br>" +
        "NORW<br>" +
        "Konstruksjonen <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘med andre ord, ...’ og konstruksjonen <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., det vil si ... ’ forklarer et noe utydelig utsagn (Я реагирую на кошек и собак ‘Jeg reagerer på katter og hunder’) ved hjelp av et tydeligere formulert utsagn (У меня на них аллергия ‘Jeg er allergisk mot dem’). Denne konstruksjonen formidler imidlertid ikke en overgang fra et allment til et mer spesifikt begrep, derfor passer ikke konstruksjonen <span class=\"construction\">XP, а именно XP</span> ‘..., eller mer spesifikt, ...’ i dette tilfellet.\n";
    var x = document.getElementById("ex4_4b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_4c() {
    var x = document.getElementById('ex4_4c_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_4c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_4c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_4c_result").innerHTML = result;
}

function Ex4_4c() {
    result = "a, б. В этом предложении пояснение содержится два раза: 1) одна формулировка (Томас постоянно играет в компьютерные игры) поясняется с помощью другой, более понятной формулировки (у него игромания), 2) вторая формулировка содержит термин, который поясняется с помощью третьей формулировки (игровая зависимость). В обоих случаях подходит и конструкция <span class=\"construction\">иными/другими словами, XP/Cl</span>, и конструкция <span class=\"construction\">XP/Cl, то есть XP/Cl</span>, потому что обе конструкции выполняют функцию пояснения. Первый пропуск можно заполнить словами другими словами, а второй пропуск словами то есть или наоборот. Заполнить оба пропуска одинаково нельзя. Так как пояснение не является переходом от общего к частному, конструкция <span class=\"construction\">XP, а именно XP</span> здесь не подходит.<br>" +
        "ENG<br>" +
        "This sentence contains clarifications in two places. First, the phrase Томас постоянно играет в компьютерные игры ‘Thomas is constantly playing videogames’ is explained with another, more comprehensible phrase (у него игромания ‘Thomas has a gaming addiction’). Then, the term in the second phrase is explained by means of the third phrase (игровая зависимость ‘gaming addiction’). In both cases, either the construction <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘in other words, ...’ or the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., that is ... ’ can be used, because these constructions serve the same function: they clarify one’s statement. We can fill in the first blank with the words другими словами, and the second blank can be filled in with the words то есть, or the other way around. However, avoid filling in both blanks with the same construction. The construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ is not appropriate here, because this clarification does not contain a transition from a more general to a more specific concept.<br>" +
        "NORW<br>" +
        "I denne setningen forekommer det tydeliggjøring to ganger. Først forklares et utsagn (Томас постоянно играет в компьютерные игры ‘Tomas spiller dataspill hele tiden’) ved hjelp av et tydeligere formulert utsagn (у него игромания ‘Tomas er dataspillavhengig’). Dessuten inneholder det andre utsagnet et uttrykk som forklares ved hjelp av et tredje utsagn (игровая зависимость ‘dataspillavhengighet’). I begge tilfellene passer konstruksjonene <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘med andre ord, ...’ og <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., det vil si ... ’ like godt, fordi de fyller samme funksjon: å tydeliggjøre et utsagn. Det første og det andre tomme feltet kan begge fylles med enten другими словами eller то есть. Unngå å fylle begge feltene med den samme konstruksjonen. I dette tilfellet formidles ikke en overgang fra et allment til et mer spesifikt begrep, derfor passer ikke konstruksjonen <span class=\"construction\">XP, а именно XP</span> ‘..., eller mer spesifikt, ...’.\n"
    var x = document.getElementById("ex4_4c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_4d() {
    var x = document.getElementById('ex4_4d_input');
    answers = ["в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_4d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_4d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_4d_result").innerHTML = result;
}

function Ex4_4d() {
    result = "в. Конструкция <span class=\"construction\">XP, а именно XP</span> уточняет более общее понятие (разные симптомы) через более частное (насморк, температура, кашель, диарея). Конструкция <span class=\"construction\">иными/другими словами, XP/Cl</span> и конструкция <span class=\"construction\">XP/Cl, то есть XP/Cl</span> это значение не передают.<br>" +
        "English<br>" +
        "The construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ explains a more general concept (here: разные симптомы ‘various symptoms’) by using more specific ones (here: насморк ‘runny nose’, температура ‘fever’, кашель ‘cough’, диарея ‘diarrhea’). The construction <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘in other words, ...’ and the construction <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., that is ... ’ do not convey this meaning.<br>" +
        "Norwegian<br>" +
        "Konstruksjonen <span class=\"construction\">XP, а именно XP</span> ‘..., eller mer spesifikt, ...’ beskriver et mer generelt begrep (i dette tilfellet: разные симптомы ‘forskjellige symptomer’) ved å referere til spesifikke eksempler (i dette tilfellet: насморк ‘rennende nese’, температура ‘feber’, кашель ‘hoste’, диарея ‘diaré’). Konstruksjonen <span class=\"construction\">иными/другими словами, XP/Cl</span> ‘med andre ord, ...’ og konstruksjonen <span class=\"construction\">XP/Cl, то есть XP/Cl</span> ‘..., det vil si ... ’  formidler ikke en slik betydning."
    var x = document.getElementById("ex4_4d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_13_eng() {
    result = "Bonus exercise. Connect the phrases by choosing the matching continuation. Use the construction <span class=\"construction\">XP, а именно XP</span> meaning ‘..., specifically, ...’ or ‘..., to be exact, ...’."
    var x = document.getElementById("ex4_13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_13_norw() {
    result = "Bonusoppgave. Koble sammen setningene ved å velge en passende fortsettelse. Bruk konstruksjonen <span class=\"construction\">XP, а именно XP</span> som betyr ‘..., eller mer spesifikt, ...’ eller ‘..., det vil si, ...’."
    var x = document.getElementById("ex4_13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_13() {
    var x = document.getElementById('ex4_13_input');
    answers = ["1д , 2б, 3г, 4а, 5е, 6в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_13_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_13_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_13_result").innerHTML = result;
}

function Ex4_13() {
    result = "1д , 2б, 3г, 4а, 5е, 6в";
    var x = document.getElementById("ex4_13_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_15_eng() {
    result = "Bonus exercise*\n" +
        "You are an administrator at a clinic. Explain to a patient over the phone how to prepare for their doctor’s appointment. Use the checklist (memo) below, the construction <span class=\"construction\">XP, а именно XP</span> ‘..., specifically, ...’ or ‘..., to be exact, ...’ and the construction <span class=\"construction\">XXP/Cl, то есть XP/Cl</span> ‘..., that is, ...’. In these constructions, XP is a phrase (XP=phrase) and Cl is a whole sentence (Cl=clause, sentence).\n"
    var x = document.getElementById("ex4_15_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_15_norw() {
    result = "Bonusoppgave. Du jobber som administrator ved en klinikk. Forklar for en pasient på telefon hvordan forberede seg til legetimen. Bruk huskelisten nedenfor og konstruksjonene <span class=\"construction\">XP, а именно XP</span>‘..., eller mer spesifikt, ...’, ‘..., det vil si, ...’ <span class=\"construction\">XXP/Cl, то есть XP/Cl</span> ‘..., det vil si, ...’. I disse konstruksjonene er XP en frase (XP=frase) and Cl er en hel setning (Cl=setning)."
    var x = document.getElementById("ex4_15_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_8_eng() {
    result = "Connect the sentences or phrases by choosing a matching continuation. Note that in the construction <span class='construction'>в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex11_8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_8_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Legg merke til at i konstruksjonen <span class='construction'>в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’, kan plassen XP/Cl fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex11_8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex11_8() {
    var x = document.getElementById('ex11_8_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4б, 5д") {
        result = "Правильно";
        document.getElementById("ex11_8_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_8_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_8_result").innerHTML = result;
}

function Ex11_8() {
    result = "1в, 2а, 3г, 4б, 5д";
    var x = document.getElementById("ex11_8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex11_9_eng() {
    result = "Complete the sentences by using the construction <span class='construction'>в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex11_9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_9_norw() {
    result = "Fullfør setningene ved å bruke konstruksjonen <span class='construction'>в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’ Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex11_9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_9() {
    var result = ""
    answ_a = "1: Стиль и мода — это разные вещи. <span class='construction'>В частности</span>, можно быть модным, но не стильным/мода меняется, а стиль сохраняется.<br>";
    answ_b = "2: Для хорошего гардероба не нужно много вещей. <span class='construction'>В частности</span>, можно иметь всего несколько вещей и красиво выглядеть.<br>";
    answ_c = "3: Современная мода очень либеральна. <span class='construction'>В частности</span>, можно носить кроссовки с официальным костюмом или надевать джинсы на рабочую встречу.<br>";
    answ_d = "4: Внешний вид может помочь в работе. <span class='construction'>В частности</span>, к стильно одетому человеку больше доверия.<br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d)
    var x = document.getElementById("ex11_9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex6_2_eng() {
    result = "Compare various means of transport in terms of various parameters. Build sentences by using the model below and the construction <span class='construction'>с точки зрения NP-Gen, Cl</span> meaning ‘With regard to X, ...’ or ‘In terms of X, ...’.<br>In this construction, NP-Gen is a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), and Cl is a sentence (Cl=clause, sentence). Pay attention to the meaning of this construction visualized in the diagram below."
    var x = document.getElementById("ex6_2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_2_norw() {
    result = "Bruk forskjellige parametere for å sammenligne og beskrive ulike typer av transportmidler. Lag setninger ved å bruke malen nedenfor, sammen med konstruksjonen <span class='construction'>с точки зрения NP-Gen, Cl</span> som betyr omtrent ‘fra X synspunkt, ...’, ‘med hensyn til, ...’.<br>I denne konstruksjonen står NP-Gen for et substantiv i genitiv kasus, (NP=nominalfrase, Gen=genitiv kasus), Cl er en setning (Cl=setning). Legg merke til diagrammet nedenfor som beskriver betydningen av denne konstruksjonen."
    var x = document.getElementById("ex6_2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_2_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex6_2_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_3_eng() {
    result = "Some popular Russian dishes have analogues in other countries. Imagine that you have been at a cafe in Moscow. Tell your friend about the Russian dishes you have tried there by using the construction <span class='construction'>NP типа NP-Gen</span> ‘something like X’. In this construction, NP stands for a noun (NP=noun phrase), аnd NP-Gen means a noun in the Genitive case (Gen=Genitive case)."
    var x = document.getElementById("ex8_3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_3_norw() {
    result = "Noen populære russiske retter har tilsvarende retter i andre land. Forestill deg at du har vært på en kafé i Moskva. Fortell en venn om hvilke matretter du prøvde der, ved å bruke konstruksjonen <span class='construction'>NP типа NP-Gen</span> ‘en slags X / som X’. I denne konstruksjonen står NP for et substantiv (NP=nominalfrase), og NP-Gen betyr substantiv i genitiv kasus (Gen=genitiv kasus)."
    var x = document.getElementById("ex8_3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_3a() {
    result = 'Затем я попробовала кексы. Это что-то <span class=\'construction\'>типа</span> маффинов.';
    var x = document.getElementById("ex8_3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex8_3b() {
    result = 'Затем я попробовала яичницу болтунью. Это что-то <span class=\'construction\'>типа</span> яичного скрэмбла.';
    var x = document.getElementById("ex8_3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex8_3c() {
    result = 'Затем я попробовала бефстроганов. Это что-то <span class=\'construction\'>типа</span> гуляша.';
    var x = document.getElementById("ex8_3c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex8_3d() {
    result = 'Затем я попробовала творожную запеканку. Это что-то <span class=\'construction\'>типа</span> чизкейка.';
    var x = document.getElementById("ex8_3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}