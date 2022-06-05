function Ex5_3_eng() {
    result = "Fill in the blanks with the words from the list. Note the differences in the use of these constructions. The words <span class=\"construction\">к примеру</span> and <span class=\"construction\">например</span> both meaning ‘for example, ...’ can appear either at the beginning or in the middle of a sentence, whereas the word <span class=\"construction\">Так</span> can only be sentence initial. The construction <span class=\"construction\">Так, Cl</span> ‘For example, ...’ presents an example that is an entire situation described by a sentence (Cl = sentence, clause). The constructions <span class=\"construction\">к примеру, XP/Cl</span> and <span class=\"construction\">например, XP/Cl</span> present an example that is either an entire situation or an element of a situation. Therefore, in these constructions we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence): <i>к примеру, Вася</i> (XP); <i>к примеру, в Москве</i> (XP); <i>к примеру, домой</i> (XP) vs. <i>К примеру, я никогда не был в Москве</i> (Cl)."
    var x = document.getElementById("ex5_3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_3_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen. Legg merke til hvordan konstruksjonene brukes forskjellig. Ordene <span class=\"construction\">к примеру</span> og <span class=\"construction\">например</span> kan plasseres i begynnelsen eller midten av setningen, mens <span class=\"construction\">Так</span> kan plasseres kun i begynnelsen. Konstruksjonen <span class=\"construction\">Так, Cl</span> beskriver en hel situasjon med en setning (Cl = en setning), mens <span class=\"construction\">к примеру</span> og <span class=\"construction\">например</span> kan brukes for å legge til både hele setninger og mindre deler av en setning. Altså er det mulig å fylle plassen XP/Cl med en frase eller en hel setning (XP=frase, Cl=setning): <i>к примеру, Вася</i> (XP); <i>к примеру, в Москве</i> (XP); <i>к примеру, домой</i> (XP) vs. <i>К примеру, я никогда не был в Москве</i> (Cl)."
    var x = document.getElementById("ex5_3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex5_3a() {
    var x = document.getElementById("ex5_3a_input");
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex5_3a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex5_3a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_3a_result").innerHTML = result;
}

function Ex5_3a() {
    result = "a, б"
    var x = document.getElementById("ex5_3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5_3b() {
    var x = document.getElementById('ex5_3b_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5_3b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_3b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_3b_result").innerHTML = result;
}

function Ex5_3b() {
    result = "a, б"
    var x = document.getElementById("ex5_3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5_3c() {
    var x = document.getElementById('ex5_3c_input');
    answers = ["а, б, в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5_3c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_3c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_3c_result").innerHTML = result;
}

function Ex5_3c() {
    result = "а, б, в"
    var x = document.getElementById("ex5_3c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5_3d() {
    var x = document.getElementById('ex5_3d_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5_3d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_3d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_3d_result").innerHTML = result;
}

function Ex5_3d() {
    result = "a, б"
    var x = document.getElementById("ex5_3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex5_3e() {
    var x = document.getElementById('ex5_3e_input');
    answers = ["a, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex5_3e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_3e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_3e_result").innerHTML = result;
}

function Ex5_3e() {
    result = "a, б"
    var x = document.getElementById("ex5_3e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex3_6_eng() {
    result = "Tell your conversation partner about yourself. In each pair of sentences, choose the sentence that describes you best. Complete the sentences by using the constructions <span class='construction'>К примеру, Cl/XP</span> and <span class='construction'>Так, Cl</span>, both meaning ‘For example, ...’. In these constructions, XP is a phrase, and Cl is an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex3_6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_6_norw() {
    result = "Fortell din samtalepartner om deg selv. Velg den setningen som passer best. Fullfør setningene ved å bruke konstruksjonene <span class='construction'>К примеру, Cl/XP</span> og <span class='construction'>Так, Cl</span>. Begge betyr ‘For eksempel, ...’. \n" +
        "I disse konstruksjonene står XP for en frase, mens Cl er en hel setning (Cl=setning).\n"
    var x = document.getElementById("ex3_6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_6_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex3_6_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex11_6_eng() {
    result = 'Fill in the blanks by using the constructions <span class="construction">в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’ and <span class="construction">скажем, XP/Cl</span> ‘for example /say/let us say ...’. In order to understand the differences between these constructions, see the table below. In both constructions, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence).'
    var x = document.getElementById("ex11_6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_6_norw() {
    result = 'Fyll ut de tomme feltene ved å bruke konstruksjonene <span class="construction">в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’ og <span class="construction">скажем, XP/Cl</span> ‘for eksempel / la oss si ...’. Les tabellen nedenfor for å forstå likhetene og forskjellene mellom disse to konstruksjonene. I begge konstruksjonene kan plassen XP/Cl fylles med en frase eller en hel setning (XP=frase, Cl=setning).'
    var x = document.getElementById("ex11_6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex11_6() {
    var x = document.getElementById('ex11_6a_input');
    if (x.value.toLowerCase() == "в частности") {
        result = "Правильно";
        document.getElementById("ex11_6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_6a_result").innerHTML = result;

    var x = document.getElementById('ex11_6b_input');
    if (x.value.toLowerCase() == "скажем") {
        result = "Правильно";
        document.getElementById("ex11_6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_6b_result").innerHTML = result;

    var x = document.getElementById('ex11_6c_input');
    if (x.value.toLowerCase() == "скажем") {
        result = "Правильно";
        document.getElementById("ex11_6c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_6c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_6c_result").innerHTML = result;

    var x = document.getElementById('ex11_6d_input');
    if (x.value.toLowerCase() == "в частности") {
        result = "Правильно";
        document.getElementById("ex11_6d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_6d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_6d_result").innerHTML = result;
}

function Ex11_6() {
    result = "1: в частности<br>2: скажем<br>3: скажем<br>4: в частности";
    var x = document.getElementById("ex11_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex11_7_eng() {
    result = 'Build sentences by using the construction <span class="construction">скажем, XP/Cl</span>‘for example /say/let us say ...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence).'
    var x = document.getElementById("ex11_7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_7_norw() {
    result = 'Lag setninger ved å bruke konstruksjonen <span class="construction">скажем, XP/Cl</span> ‘for eksempel / la oss si ...’ Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning).'
    var x = document.getElementById("ex11_7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_10_eng() {
    result = "Complete the sentences by using the construction <span class='construction'>таким образом, Cl</span> ‘for example /say/let us say...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence). The case required in each sentence is indicated in the parentheses."
    var x = document.getElementById("ex11_10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_10_norw() {
    result = "Fullfør setningene ved å bruke konstruksjonen <span class='construction'>таким образом, Cl</span> ‘for eksempel / la oss si...’. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning). Legg merke til at kasus, som skal brukes i hver setning, står i parentes."
    var x = document.getElementById("ex11_10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}