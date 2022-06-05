function Ex1_1() {
    result = "Все эти конструкции вводят дополнительную информацию.<br><span class='translation'> = All of these constructions introduce additional information.<br> = Alle disse konstruksjonene introduserer informasjon som supplerer noe som er sagt tidligere.</span>";
    var x = document.getElementById("ex1_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_1_eng() {
    result = "Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?"
    var x = document.getElementById("ex1_1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_1_norw() {
    result = "Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene?"
    var x = document.getElementById("ex1_1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex1_2_eng() {
    result = "Rephrase each sentence by using the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;. Are there any sentences that cannot be rephrased? We can put a word or a phrase in the slot marked XP (XP=phrase).</i>"
    var x = document.getElementById("ex1_2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_2_norw() {
    result = "Omformuler hver setning ved å bruke konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39;. Finnes det noen setninger som ikke kan omformuleres? Plassen XP kan fylles med et ord eller en frase (XP=frase)."
    var x = document.getElementById("ex1_2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_2a() {
    var x = document.getElementById("ex1_2a_input");
    if (x.value.toLowerCase() == "Роман не только хорошо играет в футбол, но и фотографирует.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex1_2a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex1_2a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_2a_result").innerHTML = result;
}

function Ex1_2a() {
    result = "Роман <span class='construction'>не только</span> хорошо играет в футбол, <span class='construction'>но и</span> фотографирует.";
    var x = document.getElementById("ex1_2a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex1_2b() {
    var x = document.getElementById('ex1_2b_input');
    if (x.value.toLowerCase() == 'София не только красиво поëт, но и играет на пианино.'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex1_2b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_2b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_2b_result").innerHTML = result;
}

function Ex1_2b() {
    result = "София <span class='construction'>не только</span> красиво поëт, <span class='construction'>но и</span> играет на пианино.";
    var x = document.getElementById("ex1_2b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex1_2c() {
    var x = document.getElementById('ex1_2c_input');
    if (x.value.toLowerCase() == 'Нельзя переделать'.toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex1_2c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_2c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_2c_result").innerHTML = result;
}

function Ex1_2c() {
    result = "Это предложение нельзя переформулировать. Конструкция <span class='construction'>не только XP, но и XP</span> требует, чтобы ее части <span class='construction'>XP</span> имели равный статус. Однако части предложения &quot;плохо видит&quot; и &quot;носит очки&quot; не равноправны по значению: они выражают причину и следствие.<br><span class='translation'> = It is not possible to rephrase this sentence. The construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39; requires that its components <span class='construction'>XP</span> have equal status. However, in this case the elements &quot;плохо видит&quot; and &quot;носит очки&quot; are not equal semantically: the former is the cause, and the latter is the consequence.<br> = Det er ikke mulig å omformulere denne setningen. Konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39; krever at begge delene <span class='construction'>XP</span> er likeverdige. I dette tilfellet er imidlertid ikke delene &quot;плохо видит&quot; og &quot;носит очки&quot; likeverdige når det gjelder betydning: den første uttrykker årsak, mens den andre uttrykker virkning.</span>";
    var x = document.getElementById("ex1_2c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_3_eng() {
    result = "Build sentences from the available parts."
    var x = document.getElementById("ex1_3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_3_norw() {
    result = "Lag setninger ved hjelp av de forskjellige delene."
    var x = document.getElementById("ex1_3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex1_4_eng() {
    result = "Connect the phrases by choosing the matching continuation. What parts of speech fill the slot <span class='construction'>XP</span> in the construction <span class='construction'>не только XP, но и XP</span> &#39;not only... but also ...&#39;?"
    var x = document.getElementById("ex1_4_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_4_norw() {
    result = "Fullfør setningene ved å velge delene som passer sammen. Hvilke ordklasser utgjør <span class='construction'>XP</span> i konstruksjonen <span class='construction'>не только XP, но и XP</span> &#39;ikke bare... men også ...&#39;?"
    var x = document.getElementById("ex1_4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_4() {
    var x = document.getElementById('ex1_4_input');
    if (x.value.toLowerCase() == "1д, 2в, 3г, 4а, 5б") {
        result = "Правильно";
        document.getElementById("ex1_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_4_result").innerHTML = result;
}

function Ex1_4() {
    result = "1д, 2в, 3г, 4а, 5б";
    var x = document.getElementById("ex1_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_5_eng() {
    result = "Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex1_5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_5_norw() {
    result = "Omformuler setningene ved å bruke konstruksjonen <span class='construction'>(а) кроме того XP/Cl</span>. Plassen XP/Cl kan fylles med en frase eller med en hel setning (XP=frase, Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex1_5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_5a() {
    var x = document.getElementById('ex1_5a_input');
    answers = ["Мы сами выращиваем на даче овощи и фрукты, а кроме того, мы собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, а кроме того, собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты. Кроме того, мы собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, кроме того, собираем в лесу ягоды.".toLowerCase(),
                "Мы сами выращиваем на даче овощи и фрукты, кроме того, мы собираем в лесу ягоды.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_5a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_5a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_5a_result").innerHTML = result;
}

function Ex1_5a() {
    result = "Мы сами выращиваем на даче овощи и фрукты, <span class='construction'>а кроме того</span>, мы собираем в лесу ягоды.";
    var x = document.getElementById("ex1_5a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex1_5b() {
    var x = document.getElementById('ex1_5b_input');
    answers = ["Я люблю фильмы про природу, а кроме того, мне нравится фантастика.".toLowerCase(),
                "Я люблю фильмы про природу, кроме того, мне нравится фантастика.".toLowerCase(),
                "Я люблю фильмы про природу. Кроме того, мне нравится фантастика.".toLowerCase(),]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_5b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_5b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_5b_result").innerHTML = result;
}

function Ex1_5b() {
    result = "Я люблю фильмы про природу, <span class='construction'>а кроме того</span>, мне нравится фантастика.";
    var x = document.getElementById("ex1_5b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_6_eng() {
    result = "Rephrase the sentences by using the construction <span class='construction'>(а) кроме того XP/Cl</span>.</i> Replace the conjunction <i>и</i> &#39;and&#39; with the words <span class='construction'>а кроме того</span>. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex1_6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_6_norw() {
    result = "Omformuler setningene ved å bruke konstruksjonen <span class='construction'>(а) кроме того XP/Cl</span>. Bytt ut konjunksjonen <i>и</i> &#39;og&#39; med ordene <span class='construction'>а кроме того</span>. Plassen XP/Cl kan fylles med en frase eller med en hel setning (XP=frase, Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex1_6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_6a() {
    var x = document.getElementById("ex1_6a_input");
    if (x.value.toLowerCase() == "Моя подруга очень умная, а кроме того, веселая.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex1_6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex1_6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_6a_result").innerHTML = result;
}

function Ex1_6a() {
    result = "Моя подруга очень умная, <span class='construction'>а кроме того</span>, веселая.";
    var x = document.getElementById("ex1_6a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex1_6b() {
    var x = document.getElementById("ex1_6b_input");
    if (x.value.toLowerCase() == "Мы хотим купить новый автомобиль, а кроме того, продать старый.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex1_6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex1_6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_6b_result").innerHTML = result;
}

function Ex1_6b() {
    result = "Мы хотим купить новый автомобиль, <span class='construction'>а кроме того</span>, продать старый.";
    var x = document.getElementById("ex1_6b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_7_eng() {
    result = "You see an entry in a diary. Connect the matching sentences by using the indicated constructions. In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex1_7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_7_norw() {
    result = "Du leser et dagboksnotat. Koble sammen setningene ved hjelp av de foreslåtte konstruksjonene. I disse konstruksjonene fylles plassen Cl med en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon. Plassen XP/Cl kan fylles med en frase eller med en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex1_7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_8_eng() {
    result = "Connect the phrases by choosing a matching continuation. Note that the construction <span class='construction'>(и) кстати (говоря), Cl</span> introduces additional information and often denotes digression. We can put an entire sentence in the Cl slot (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex1_8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_8_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Legg merke til at konstruksjonen <span class='construction'>(и) кстати (говоря), Cl</span> angir tilleggsinformasjon og ofte indikerer et avvik fra emnet. I denne konstruksjonen fylles пlassen Cl med en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex1_8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_8() {
    var x = document.getElementById('ex1_8_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4д, 5б") {
        result = "Правильно";
        document.getElementById("ex1_8_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_8_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_8_result").innerHTML = result;
}

function Ex1_8() {
    result = "1в, 2а, 3г, 4д, 5б";
    var x = document.getElementById("ex1_8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex1_9_eng() {
    result = "The construction <span class='construction'>(и) кстати (говоря), Cl</span> has the four variants indicated in the table. Note that the variants <span class='construction'>и кстати</span> and <span class='construction'>и кстати говоря</span> do not appear in the middle of a sentence. With this in mind, fill in the blanks in each sentence with as many options as possible. We can put an entire sentence in the Cl slot (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex1_9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_9_norw() {
    result = "Tabellen viser de fire mulige variantene av konstruksjonen <span class='construction'>(и) кстати (говоря), Cl</span>. Legg merke til at <span class='construction'>и кстати</span> og <span class='construction'>и кстати говоря</span> aldri forekommer i midten av en setning. Fyll ut de tomme feltene med så mange varianter av disse konstruksjonene som mulig. I denne konstruksjonen fylles пlassen Cl med en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex1_9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_9() {
    var x = document.getElementById('ex1_9a_input');
    answers = ["а, в", "а", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9a_result").innerHTML = result;

    var x = document.getElementById('ex1_9b_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9b_result").innerHTML = result;

    var x = document.getElementById('ex1_9c_input');
    answers = ["а, в", "а", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9c_result").innerHTML = result;

    var x = document.getElementById('ex1_9d_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9d_result").innerHTML = result;

    var x = document.getElementById('ex1_9e_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9e_result").innerHTML = result;

    var x = document.getElementById('ex1_9f_input');
    answers = ["а, б, в, г", "а", "б", "в", "г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_9f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_9f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_9f_result").innerHTML = result;

}

function Ex1_9() {
    result = "1: а, в;<br>2: а, б, в, г;<br>3: а, в;<br>4: а, б, в, г;<br>5: а, б, в, г;<br>6: а, б, в, г;";
    var x = document.getElementById("ex1_9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex1_10_eng() {
    result = "Bonus exercise. Fill in the blanks with the words from the list. Explain why certain options cannot be used. Note that there can be more than one correct answer."
    var x = document.getElementById("ex1_10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex1_10_norw() {
    result = "Bonusoppgave. Fyll ut de tomme feltene med ord fra listen. Forklar hvorfor noen varianter ikke passer. Legg merke til at flere enn et alternativ kan være riktig."
    var x = document.getElementById("ex1_10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex1_10() {
    var x = document.getElementById('ex1_10a_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10a_result").innerHTML = result;

    var x = document.getElementById('ex1_10b_input');
    answers = ["а, б, в", "а", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10b_result").innerHTML = result;

    var x = document.getElementById('ex1_10c_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10c_result").innerHTML = result;

    var x = document.getElementById('ex1_10d_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10d_result").innerHTML = result;

    var x = document.getElementById('ex1_10e_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10e_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10e_result").innerHTML = result;

    var x = document.getElementById('ex1_10f_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10f_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10f_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10f_result").innerHTML = result;

    var x = document.getElementById('ex1_10g_input');
    answers = ["б, в", "б", "в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex1_10g_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex1_10g_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex1_10g_result").innerHTML = result;
}

function Ex1_10() {
    var result = ""
    answ_a = "1: а<br><span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> здесь не подходят, так как они не передают этого значения.<br> = <span class='translation'>The word <span class='construction'>Кстати</span> &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; are not appropriate here, because they do not convey this meaning.<br> = Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men den kan avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; passer ikke i dette tilfellet fordi de formidler ikke en slik betydning.</span><br>";
    answ_b = "2: а, б, в;<br>Здесь подходят все три конструкции, но они вносят разные нюансы. <span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов.<br> = <span class='translation'> All three constructions can be used here. However, they have different nuances in meaning. Кстати &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words кроме того &#39;besides&#39; and к тому же &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning.<br> = Samtlige tre konstruksjoner kan brukes i dette tilfellet. Imidlertid kan de uttrykke nyanseforskjeller i sammenhengen. Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men samtidig kan den avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta.</span><br>";
    answ_c = "3: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Конструкция кстати здесь не подходит, так как она подчеркивает неожиданность дополнительной информации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the word <span class='construction'>кстати</span> &#39;by the way&#39; cannot be used here, because it emphasizes that the added information is unexpected.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>кстати</span> &#39;forresten&#39; passer ikke i dette tilfellet, siden den uttrykker uventet tilleggsinformasjon.</span><br>";
    answ_d = "4: а;<br><span class='construction'>Кстати</span> вводит мысль, которая неожиданно появилась у говорящего в момент речи. Как правило, это мысль по поводу темы разговора, но немного отклоняется от этой темы. Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> здесь не подходят, так как они не передают этого значения.<br> = <span class='translation'>The word <span class='construction'>Кстати</span> &#39;by the way&#39; introduces a thought that suddenly came to the speaker&#39;s mind at the moment of speech. This thought is usually related to the topic of the conversation but slightly deviates from this topic. The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; are not appropriate here, because they do not convey this meaning.<br> = Ordet <span class='construction'>Кстати</span> &#39;forresten&#39; indikerer at taleren plutselig fikk en tanke midt i samtalen. Ofte er denne tanken relatert til samtaleemnet, men den kan avvike noe fra emnet. Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; passer ikke i dette tilfellet fordi de formidler ikke en slik betydning.</span><br>";
    answ_e = "5: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Конструкция <span class='construction'>кстати</span> здесь не подходит, так как она подчеркивает неожиданность дополнительной информации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the word <span class='construction'>кстати</span> &#39;by the way&#39; cannot be used here, because it emphasizes that the added information is unexpected.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>кстати</span> &#39;forresten&#39; passer ikke i dette tilfellet, siden den uttrykker uventet tilleggsinformasjon.</span><br>";
    answ_f = "6: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Особенность конструкции <span class='construction'>к тому же</span> в том, что часто она вводит более сильный аргумент, а в данном случае подчеркивает негативную сторону ситуации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact to the line of reasoning. The construction with the words <span class='construction'>к тому же</span> &#39;in addition&#39; often introduces a stronger argument, and in this sentence it emphasizes the negative side of the situation.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>к тому же</span> &#39;I tillegg&#39; angir ofte et sterkere argument, og i dette tilfellet er fokus rettet mot det negative i situasjonen.</span><br>";
    answ_g = "7: б, в;<br>Конструкции <span class='construction'>кроме того</span> и <span class='construction'>к тому же</span> вводят дополнительную информацию по теме разговора, прибавляя еще один факт в цепочке аргументов. Особенность конструкции <span class='construction'>к тому же</span> в том, что часто она вводит более сильный аргумент, а в данном случае подчеркивает позитивную сторону ситуации.<br> = <span class='translation'>The constructions with the words <span class='construction'>кроме того</span> &#39;besides&#39; and <span class='construction'>к тому же</span> &#39;in addition&#39; introduce additional information on the topic of the conversation, adding one more fact in the line of reasoning. The construction with the words <span class='construction'>к тому же</span> &#39;in addition&#39; often introduces a stronger argument, and in this sentence it emphasizes the positive side of the situation.<br> = Konstruksjonene <span class='construction'>кроме того</span> &#39;dessuten&#39; og <span class='construction'>к тому же</span> &#39;i tillegg&#39; gir tilleggsinformasjon til samtaleemnet ved å tilføre resonnementet ytterligere fakta. Konstruksjonen <span class='construction'>к тому же</span> &#39;I tillegg&#39; angir ofte et sterkere argument, og i dette tilfellet er fokus rettet mot det positive i situasjonen.</span>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d, answ_e, answ_f, answ_g)
    var x = document.getElementById("ex1_10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_5_eng() {
    result = "Analyze the diagram below. How are the two constructions <span class=\"construction\">(Так) мало того – Cl</span> ‘and what is more...’ and <span class=\"construction\">ко всему прочему, Cl</span> ‘on top of all of this ...’ different?"
    var x = document.getElementById("ex4_5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_5_norw() {
    result = "Analyser diagrammet nedenfor. Hvordan er konstruksjonene <span class=\"construction\">(Так) мало того – Cl</span> som betyr omtrent ‘Ikke nok med det ... / Dessuten ...’ og konstruksjonen <span class=\"construction\">ко всему прочему, Cl</span> som betyr ‘På toppen av alt, ... ’, forskjellige?"
    var x = document.getElementById("ex4_5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_6_eng() {
    result = "Fill in the blanks by using constructions from the list. Note that in some cases either of these constructions can be used. In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex4_6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_6_norw() {
    result = "Fyll ut de tomme feltene ved å bruke konstruksjonene i listen. Legg merke til at i noen tilfeller kan begge konstruksjonene passe. I disse konstruksjonene betyr Cl en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex4_6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_6a() {
    var x = document.getElementById("ex4_6a_input");
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex4_6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_6a_result").innerHTML = result;
}

function Ex4_6a() {
    result = "а";
    var x = document.getElementById("ex4_6a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_6b() {
    var x = document.getElementById('ex4_6b_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_6b_result").innerHTML = result;
}

function Ex4_6b() {
    result = "а";
    var x = document.getElementById("ex4_6b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_6c() {
    var x = document.getElementById('ex4_6c_input');
    answers = ["а, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_6c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_6c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_6c_result").innerHTML = result;
}

function Ex4_6c() {
    result = "а, б";
    var x = document.getElementById("ex4_6c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_6d() {
    var x = document.getElementById('ex4_6d_input');
    answers = ["а, б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_6d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_6d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_6d_result").innerHTML = result;
}

function Ex4_6d() {
    result = "а, б";
    var x = document.getElementById("ex4_6d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_7_eng() {
    result = "Build sentences from the available parts. Connect complaints by using the pattern below and the constructions <span class=\"construction\">(Так) мало того – Cl</span> meaning ‘and what is more...’ and <span class=\"construction\">ко всему прочему, Cl</span> meaning ‘on top of all of this ...’. In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex4_7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_7_norw() {
    result = "Lag setninger og uttrykk relaterte til helse og sykdom med utgangspunkt i eksemplene nedenfor. Bruk konstruksjonene <span class=\"construction\">(Так) мало того – Cl</span> ‘ikke nok med det, dessuten ...’ og <span class=\"construction\">ко всему прочему, Cl</span>  ‘dessuten ...’, ‘på toppen av X ...’. I disse konstruksjonene betyr Cl en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex4_7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_7a() {
    var x = document.getElementById("ex4_7a_input");
    answers = ["у меня высокая температура. мало того, у меня болит всё тело, ко всему прочему, озноб."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex4_7a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_7a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_7a_result").innerHTML = result;
}

function Ex4_7a() {
    result = "У меня высокая температура. <span class=\"construction\">Mало того,</span> у меня болит всё тело, <span class=\"construction\">ко всему прочему,</span> озноб.";
    var x = document.getElementById("ex4_7a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_7b() {
    var x = document.getElementById('ex4_7b_input');
    answers = ["у меня низкое давление. мало того, у меня слабость, ко всему прочему, я упал в обморок.", "у меня низкое давление. мало того, у меня слабость, ко всему прочему, я упалa в обморок."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_7b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_7b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_7b_result").innerHTML = result;
}

function Ex4_7b() {
    result = "У меня низкое давление. <span class=\"construction\">Mало того,</span> у меня слабость, <span class=\"construction\">ко всему прочему,</span> я упал в обморок.<br>" +
        "У меня низкое давление. <span class=\"construction\">Mало того,</span> у меня слабость, <span class=\"construction\">ко всему прочему,</span> я упалa в обморок.";
    var x = document.getElementById("ex4_7b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex4_7c() {
    var x = document.getElementById('ex4_7c_input');
    answers = ["у меня болит рука. мало того, у меня болят ноги и, ко всему прочему, высокое давление."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex4_7c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4_7c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_7c_result").innerHTML = result;
}

function Ex4_7c() {
    result = "У меня болит рука. <span class=\"construction\">Mало того,</span> у меня болят ноги и, <span class=\"construction\">ко всему прочему,</span> высокое давление.";
    var x = document.getElementById("ex4_7c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex4_9_eng() {
    result = "You have met a friend. Tell your friend how you are doing. Use the answer options provided in the table or come up with your own examples. When used in the order in the table, the constructions indicate a «scale» of problems."
    var x = document.getElementById("ex4_9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_9_norw() {
    result = "Du har truffet en venn. Fortell din venn om hvordan du har det. Bruk svarsalternativene i tabellen, eller finn på egne eksempler. Rekken av konstruksjoner i tabellen danner en slags «skale» for å beskrive problemer. "
    var x = document.getElementById("ex4_9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_1_eng() {
    result = "Connect the phrases by choosing a matching continuation."
    var x = document.getElementById("ex5_1_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_1_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer."
    var x = document.getElementById("ex5_1_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex5_1() {
    var x = document.getElementById("ex5_1_input");
    if (x.value.toLowerCase() == "1в, 2а 3д, 4б, 5г".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex5_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex5_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_1_result").innerHTML = result;
}

function Ex5_1() {
    result = "1в, 2а 3д, 4б, 5г";
    var x = document.getElementById("ex5_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex7_2_eng() {
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class=\"construction\">VP, заодно VP</span> meaning ‘while X is at it ...’ or ‘..., meanwhile ...’. In this construction, VP stands for a verb (VP=verb phrase)."
    var x = document.getElementById("ex7_2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_2_norw() {
    result = "Koble sammen frasene ved å velge en passende fortsettelse. Bruk konstruksjonen <span class=\"construction\">VP, заодно VP</span> ‘..., samtidig, i tillegg ...’. I denne konstruksjonen står VP for et verb (VP=verbfrase)."
    var x = document.getElementById("ex7_2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex7_2() {
    var x = document.getElementById('ex7_2_input');
    if (x.value.toLowerCase() == "1в, 2а, 3д, 4б, 5г") {
        result = "Правильно";
        document.getElementById("ex7_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex7_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7_2_result").innerHTML = result;
}

function Ex7_2() {
    result = "1в, 2а, 3д, 4б, 5г";
    var x = document.getElementById("ex7_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_4_eng() {
    result = 'Build sentences in which you list several objects. At the end of each sentence, use the constructions <span class="construction">XP/Cl, XP/Cl и так далее/и т. д.</span> ‘... and so on’ and <span class="construction">NP, NP и тому подобное/и т. п.</span> ‘... and the like / etc.’. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence). NP stands for a noun (NP=noun phrase).'
    var x = document.getElementById("ex11_4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_4_norw() {
    result = 'Lag setninger hvor du lister flere objekter. Bruk konstruksjonene <span class="construction">XP/Cl, XP/Cl и так далее/и т. д.</span> ‘... og så videre / osv.’ og <span class="construction">NP, NP и тому подобное/и т. п.</span> ‘... og lignende / og så videre / osv.’ i slutten av hver setning. Plassen XP/Cl kan fylles med en frase eller en hel setning. (XP=frase, Cl=setning). NP betyr substantiv (NP=nominalfrase).'
    var x = document.getElementById("ex11_4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_4a() {
    result = 'Ваня любит носить одежду тёплых цветов: красного, оранжевого, коричневого, жёлтого <span class="construction">и так далее</span>.<br>Ваня любит носить одежду тёплых цветов: красного, оранжевого, коричневого, жёлтого <span class="construction">и тому подобное</span>.';
    var x = document.getElementById("ex11_4a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_4b() {
    result = 'Моя сестра всегда носит одежду в полоску: у неё есть полосатые брюки, рубашка, кеды, куртка <span class="construction">и так далее </span>.<br>Моя сестра всегда носит одежду в полоску: у неё есть полосатые брюки, рубашка, кеды, куртка <span class="construction">и тому подобное</span>.';
    var x = document.getElementById("ex11_4b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_4c() {
    result = 'Тема новогодней вечеринки — звёзды на красной дорожке. Надевайте вечерние платья в пол, нарядные костюмы, туфли на каблуках <span class="construction">и тому подобное</span>.<br>Тема новогодней вечеринки — звёзды на красной дорожке. Надевайте вечерние платья в пол, нарядные костюмы, туфли на каблуках <span class="construction">и так далее</span>.';
    var x = document.getElementById("ex11_4c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_4d() {
    result = 'Одежда для похода должна быть практичной и удобной: футболка, свитер, непромокаемая куртка, тёплые ботинки, шапка <span class="construction">и тому подобное</span>.<br>Одежда для похода должна быть практичной и удобной: футболка, свитер, непромокаемая куртка, тёплые ботинки, шапка <span class="construction">и так далее</span>.';
    var x = document.getElementById("ex11_4d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_5_eng() {
    result = "Connect the phrases by choosing the matching continuation. Use the construction <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;On the one hand, ... On the other hand, ...&#39;. The word «стороны» in the second part of this construction is often omitted, therefore in the formula of this construction this word is placed in parentheses (). We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex11_5_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_5_norw() {
    result = "Fullfør setningene ved å velge delene som passer sammen. Bruk konstruksjonen <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;På den ene siden, ... På den andre siden, ...&#39;. I denne konstruksjonens andre halvdel er ofte ordet «стороны» utelatt, derfor står den i parenteser i formelen. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex11_5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex11_5() {
    var x = document.getElementById('ex11_5_input');
    if (x.value.toLowerCase() == "1б, 2г, 3а, 4в") {
        result = "Правильно";
        document.getElementById("ex11_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_5_result").innerHTML = result;
}

function Ex11_5() {
    result = "1б, 2г, 3а, 4в";
    var x = document.getElementById("ex11_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}