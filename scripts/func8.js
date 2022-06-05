function Ex91_eng() {
    result = "Read the text. What is the purpose of the constructions highlighted in the text? What does each of these constructions mean?"
    var x = document.getElementById("ex91_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex91_norw() {
    result = "Les teksten. Hva er hensikten med de uthevede konstruksjonene i teksten? Hva betyr hver enkelt av disse konstruksjonene?"
    var x = document.getElementById("ex91_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex92_eng() {
    result = "Fill in the blanks. Use the construction <span class='construction'>Cl, а NP-Nom как думать-Prs?</span> ‘..., what do you think?’ and the construction <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Don’t you think that ...?’. <br>In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom= Nominative case), and Prs stands for the present tense of the verb (Prs= present tense). In the slot NP-Nom we can use a pronoun (for example, ты, вы, он, она, etc.) instead of a noun. Note the difference in meaning between the two constructions (see the table below)."
    var x = document.getElementById("ex92_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex92_norw() {
    result = "Fyll ut de tomme feltene. Bruk konstruksjonen <span class='construction'>Cl, а NP-Nom как думать-Prs?</span> ‘..., hva tror du?’ og konstruksjonen <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Tror du ikke at ...?’. <br>I disse konstruksjonene betyr Cl en hel setning (Cl=setning), NP-Nom står for et substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), Prs betyr verb i presens (Prs=presens). Ved plassen NP-Nom er det mulig å bruke pronomen i stedet for substantiv (for eksempel, ты, вы, он, она, etc.). Legg merke til betydningsforskjellen mellom de to konstruksjonene (se tabellen nedenfor)."
    var x = document.getElementById("ex92_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex92_1() {
    var x = document.getElementById("ex92_1_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_1_result").innerHTML = result;
}

function Ex92_1() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> эти брюки тебе уже малы?';
    var x = document.getElementById("ex92_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex92_2() {
    var x = document.getElementById("ex92_1_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_2_result").innerHTML = result;
}

function Ex92_2() {
    result = 'Думаю, нам лучше не ехать на этом автобусе, а подождать следующий, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex92_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex92_3() {
    var x = document.getElementById("ex92_3_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_3_result").innerHTML = result;
}

function Ex92_3() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> я могу быть не дома?';
    var x = document.getElementById("ex92_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex92_4() {
    var x = document.getElementById("ex92_4_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_4_result").innerHTML = result;
}

function Ex92_4() {
    result = 'По-моему, мне пойдёт, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex92_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex92_5() {
    var x = document.getElementById("ex92_5_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_5_result").innerHTML = result;
}

function Ex92_5() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> твоя собственная внешность намного интереснее?';
    var x = document.getElementById("ex92_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex92_6() {
    var x = document.getElementById("ex92_6_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex92_6_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex92_6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex92_6_result").innerHTML = result;
}

function Ex92_6() {
    result = 'Не уверен, что я сдам его, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex92_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex93_eng() {
    result = "Complete the sentences by using the words in parentheses and the construction <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Don’t you think that ...?’. <br>In this construction, NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom= Nominative case), Prs stands for the present tense of the verb (Prs= present tense), and Cl means an entire sentence (Cl=clause, sentence). In the slot NP-Nom use the pronoun given in the parentheses (ты, вы, он, она, etc.)."
    var x = document.getElementById("ex93_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex93_norw() {
    result = "Fullfør setningene ved å bruke ordene i parentes og konstruksjonen <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Tror du ikke at ...?’. <br>I denne konstruksjonen står NP-Nom for et substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), Prs betyr verb i presens (Prs=presens), og Cl betyr en hel setning (Cl=setning). Ved plassen NP-Nom, bruk pronomen i parentes (ты, вы, он, она, etc.)."
    var x = document.getElementById("ex93_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex93_1() {
    var x = document.getElementById("ex93_1_input");
    if (x.value.toLowerCase() == "А вы не думаете, что это благодаря спорту?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex93_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex93_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex93_1_result").innerHTML = result;
}

function Ex93_1() {
    result = '<span class=\'construction\'>А вы не думаете, что</span> это благодаря спорту?';
    var x = document.getElementById("ex93_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex93_2() {
    var x = document.getElementById("ex93_2_input");
    if (x.value.toLowerCase() == "А она не думает, что для этого надо учиться?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex93_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex93_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex93_2_result").innerHTML = result;
}

function Ex93_2() {
    result = '<span class=\'construction\'>А она не думает, что</span> для этого надо учиться?';
    var x = document.getElementById("ex93_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex93_3() {
    var x = document.getElementById("ex93_3_input");
    if (x.value.toLowerCase() == "А он не думает, что это плохо для экологии?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex93_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex93_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex93_3_result").innerHTML = result;
}

function Ex93_3() {
    result = '<span class=\'construction\'>А он не думает, что</span> это плохо для экологии?';
    var x = document.getElementById("ex93_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex93_4() {
    var x = document.getElementById("ex93_4_input");
    if (x.value.toLowerCase() == "Интересно, а они не думают, что они могут заболеть?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex93_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex93_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex93_4_result").innerHTML = result;
}

function Ex93_4() {
    result = 'Интересно, <span class=\'construction\'>а они не думают, что</span> они могут заболеть?';
    var x = document.getElementById("ex93_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex96_eng() {
    result = "Many people still have stereotypes about personal appearance. Challenge the stereotypes expressed in the first column (1-5) by finding the appropriate responses in the second column (а-д)."
    var x = document.getElementById("ex96_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex96_norw() {
    result = "Mange mennesker har fremdeles stereotype oppfatninger når det gjelder utseende. Prøv å utfordre stereotypene i den første kolumnen (1-5) ved å finne riktig svar i den andre kolumnen (а-д)."
    var x = document.getElementById("ex96_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex96() {
    var x = document.getElementById('ex96_input');
    if (x.value.toLowerCase() == "1д, 2а, 3в, 4б, 5г") {
        result = "Правильно";
        document.getElementById("ex96_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex96_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex96_result").innerHTML = result;
}

function Ex96() {
    result = "1д, 2а, 3в, 4б, 5г";
    var x = document.getElementById("ex96_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex94_eng() {
    result = "Rephrase these statements as questions by using the construction <span class=\'construction\'>Аdj-Nom Cop NP-Nom, правда (ведь)?</span> meaning ‘X is Y, isn’t it?’ and the construction <span class=\'construction\'>Cl, не правда ли?</span> meaning ‘..., isn’t that right?’. These Russian constructions are used similarly to tag questions in English (e.g. She is beautiful, isn’t she?). <br>In these constructions, Аdj-Nom means an adjective in the Nominative case (Adj=adjective, Nom=Nominative case), Cop is a copula verb быть (Cop=copula verb), NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom=Nominative case), and Cl means an entire sentence (Cl=clause, sentence). The two constructions are very similar in meaning. Both constructions mean that the speaker expects that the interlocutor to agree with him or her. The word не does not convey negation!"
    var x = document.getElementById("ex94_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex94_norw() {
    result = "Lag spørsmål av disse utsagnene ved å bruke konstruksjonen <span class=\'construction\'>Аdj-Nom Cop NP-Nom, правда (ведь)?</span> som betyr ‘…, ikke sant?’ og konstruksjonen  <span class=\'construction\'>Cl, не правда ли?</span> som også betyr ‘..., ikke sant?’. <br>I disse konstruksjonene står Adj-Nom for et adjektiv i nominativ kasus (Adj=adjektiv, Nom=nominativ kasus), Cop er kopula-verbet быть (Cop=kopula-verb), NP-Nom betyr substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), og Cl betyr en hel setning (Cl=setning). Disse to konstruksjonene har veldig lik betydning. Begge konstruksjonene betyr at taleren forventer at samtalepartneren er enig. Ordet не ‘ikke’ er ikke nektende! "
    var x = document.getElementById("ex94_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex94_1() {
    var x = document.getElementById("ex94_1_input");
    if (x.value.toLowerCase() == "У Олега хитрый взгляд, правда?".toLowerCase() || x.value.toLowerCase() == "У Олега хитрый взгляд, правда ведь?".toLowerCase() || x.value.toLowerCase() == "У Олега хитрый взгляд, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_1_result").innerHTML = result;
}

function Ex94_1() {
    result = 'У Олега хитрый взгляд, <span class=\'construction\'>правда?</span><br>У Олега хитрый взгляд, <span class=\'construction\'>правда ведь?</span><br>У Олега хитрый взгляд, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_2() {
    var x = document.getElementById("ex94_1_input");
    if (x.value.toLowerCase() == "Мне к лицу зелёный цвет, правда?".toLowerCase() || x.value.toLowerCase() == "Мне к лицу зелёный цвет, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Мне к лицу зелёный цвет, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_2_result").innerHTML = result;
}

function Ex94_2() {
    result = 'Мне к лицу зелёный цвет, <span class=\'construction\'>правда?</span><br>Мне к лицу зелёный цвет, <span class=\'construction\'>правда ведь?</span><br>Мне к лицу зелёный цвет, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_3() {
    var x = document.getElementById("ex94_3_input");
    if (x.value.toLowerCase() == "Настя очень красивая, правда?".toLowerCase() || x.value.toLowerCase() == "Настя очень красивая, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Настя очень красивая, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_3_result").innerHTML = result;
}

function Ex94_3() {
    result = 'Настя очень красивая, <span class=\'construction\'>правда?</span><br>Настя очень красивая,<span class=\'construction\'> правда ведь?</span><br>Настя очень красивая, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_4() {
    var x = document.getElementById("ex94_4_input");
    if (x.value.toLowerCase() == "У Кирилла приятное лицо, правда?".toLowerCase() || x.value.toLowerCase() == "У Кирилла приятное лицо, правда ведь?".toLowerCase() || x.value.toLowerCase() == "У Кирилла приятное лицо, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_4_result").innerHTML = result;
}

function Ex94_4() {
    result = 'У Кирилла приятное лицо, <span class=\'construction\'>правда?</span><br>У Кирилла приятное лицо, <span class=\'construction\'>правда ведь?</span><br>У Кирилла приятное лицо, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_5() {
    var x = document.getElementById("ex94_5_input");
    if (x.value.toLowerCase() == "Пете к лицу эта рубашка, правда?".toLowerCase() || x.value.toLowerCase() == "Пете к лицу эта рубашка, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Пете к лицу эта рубашка, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_5_result").innerHTML = result;
}

function Ex94_5() {
    result = 'Пете к лицу эта рубашка, <span class=\'construction\'>правда?</span><br>Пете к лицу эта рубашка, <span class=\'construction\'>правда ведь?</span><br>Пете к лицу эта рубашка, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_6() {
    var x = document.getElementById("ex94_6_input");
    if (x.value.toLowerCase() == "Ваня очень симпатичный, правда?".toLowerCase() || x.value.toLowerCase() == "Ваня очень симпатичный, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Ваня очень симпатичный, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_6_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_6_result").innerHTML = result;
}

function Ex94_6() {
    result = 'Ваня очень симпатичный, <span class=\'construction\'>правда?</span><br>Ваня очень симпатичный, <span class=\'construction\'>правда ведь?</span><br>Ваня очень симпатичный, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex94_7() {
    var x = document.getElementById("ex94_7_input");
    if (x.value.toLowerCase() == "Алексей выглядит моложе своих лет, правда?".toLowerCase() || x.value.toLowerCase() == "Алексей выглядит моложе своих лет, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Алексей выглядит моложе своих лет, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex94_7_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex94_7_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex94_7_result").innerHTML = result;
}

function Ex94_7() {
    result = 'Алексей выглядит моложе своих лет,<span class=\'construction\'> правда?</span><br>Алексей выглядит моложе своих лет, <span class=\'construction\'>правда ведь?</span><br>Алексей выглядит моложе своих лет, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex94_7_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex73_eng() {
    result = "Foreign students are discussing Russian holidays. Fill in the blanks. Use the construction <span class=\"construction\">Cl, так (ведь)?</span> ‘..., isn’t it?’ in questions and the construction <span class=\"construction\">Сам подумать-Imp, Cl</span> ‘Think about it, ...’ in responses.<br>In these constructions, Cl means an entire sentence (Cl=clause, sentence), and подумать-Imp is an imperative form of the verb <i>подумать</i> ‘think’ (Imp = imperative), that is <i>подумай</i> (in singular) and <i>подумайте</i> (in plural).<br> Note that the form of the pronoun <i>сам</i> ‘self’ depends on the sex of the speaker: use <i>сам</i> when addressing a man, but <i>сама</i> when addressing a woman. The form of the imperative <i>подумай</i> does not change in this regard."
    var x = document.getElementById("ex73_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex73_norw() {
    result = "Utenlandske studenter diskuterer russiske helligdager. Fyll ut de tomme feltene. Bruk konstruksjonen <span class=\"construction\">Cl, так (ведь)?</span> som betyr omtrent ‘... , ikke sant’ og konstruksjonen <span class=\"construction\">Сам подумать-Imp, Cl</span> som betyr omtrent ‘Tenk på det, Tenk på at, Husk at ... ’.<br>I disse konstruksjonene står Cl for en hel setning (Cl=setning), og подумать-Imp som er imperativformen av verbet <i>подумать</i> ‘å tenke’ (Imp = imperativ), det vil si <i>подумай</i> (entall) og <i>подумайте</i> (flertall). Legg merke til at pronomenet <i>сам</i> ‘selv’ skal bøyes i overensstemmelse med samtalepartnerens kjønn. Bruk <i>сам</i> for å tiltale en mann, <i>сама</i> for å tiltale en kvinne. Imperativformen <i>подумай</i> er ikke avhengig av samtalepartnerens kjønn."
    var x = document.getElementById("ex73_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex73_comment() {
    result = "Формат задания: в парах. После каждого диалога студенты меняются ролями.<br>Comment for language teachers. Task format: in pairs. After each dialogue, the students switch roles."
    var x = document.getElementById("ex73_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex73a() {
    var x = document.getElementById('ex73a1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73a1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73a1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73a1_result").innerHTML = result;

    var x = document.getElementById('ex73a2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73a2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73a2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73a2_result").innerHTML = result;
}

function Ex73a() {
    result = 'Ханна: — В День знаний в магазинах России не продают алкоголь, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Майкл: —  Да. <span class=\'construction\'>Сама подумай</span>, это же праздник для школьников.';
    var x = document.getElementById("ex73a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex73b() {
    var x = document.getElementById('ex73b1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73b1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73b1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73b1_result").innerHTML = result;

    var x = document.getElementById('ex73b2_input');
    if (x.value.toLowerCase() == "сам подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73b2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73b2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73b2_result").innerHTML = result;
}

function Ex73b() {
    result = 'Закир: — Масленицу отмечают три дня, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Фатима: — Нет. <span class=\'construction\'>Сам подумай</span>. Масленицу же называют Масленичной неделей, значит семь дней.';
    var x = document.getElementById("ex73b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex73c() {
    var x = document.getElementById('ex73c1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73c1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73c1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73c1_result").innerHTML = result;

    var x = document.getElementById('ex73c2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73c2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73c2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73c2_result").innerHTML = result;
}

function Ex73c() {
    result = 'Шарлотта: — Ты отмечаешь День защиты детей, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Лиам: — Нет. <span class=\'construction\'>Сама подумай</span>, я же уже не ребенок и детей у меня пока нет.';
    var x = document.getElementById("ex73c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex73d() {
    var x = document.getElementById('ex73d1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73d1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73d1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73d1_result").innerHTML = result;

    var x = document.getElementById('ex73d2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73d2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73d2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73d2_result").innerHTML = result;
}

function Ex73d() {
    result = 'Сара: — Тебе подарили цветы на 8 марта, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Оливия: — Конечно! <span class=\'construction\'>Сама подумай</span>, я же женщина.';
    var x = document.getElementById("ex73d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex73e() {
    var x = document.getElementById('ex73e1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73e1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73e1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73e1_result").innerHTML = result;

    var x = document.getElementById('ex73e2_input');
    if (x.value.toLowerCase() == "сам подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex73e2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex73e2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex73e2_result").innerHTML = result;
}

function Ex73e() {
    result = 'Джеймс: — Итон, ты отмечал День святого Валентина в этом году, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Итон: — Нет, конечно! <span class=\'construction\'>Сам подумай</span>, я же недавно расстался с девушкой.';
    var x = document.getElementById("ex73e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex74_eng() {
    result = "Your friend Sasha has a birthday soon. You and a friend of yours are at a store and are trying to choose a gift for Sasha, but Sasha is hard to please. Discuss with your friend what gift you will buy. Use the constructions <span class=\"construction\">Cl, так (ведь)?</span> ‘..., isn’t it?’ and <span class=\"construction\">Сам подумать-Imp, Cl</span> ‘Think about it, ...’.<br>In these constructions, Cl means an entire sentence (Cl=clause, sentence), and подумать-Imp is an imperative form of the verb подумать ‘think’ (Imp = imperative), that is подумай (in singular) и подумайте (in plural).<br>Note that the form of the pronoun сам ‘self’ depends on the sex of the speaker: use сам when addressing a man, but сама when addressing a woman. The form of the imperative подумай does not change in this regard."
    var x = document.getElementById("ex74_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex74_norw() {
    result = "Din venninne Sasja har snart bursdag. Du og en venn har tatt turen til en butikk og prøver å velge ut en gave til Sasja, men det er ikke lett å gjøre Sasja fornøyd. Diskuter med din venn om hvilken gave dere skal kjøpe. Bruk konstruksjonene <span class=\"construction\">Cl, так (ведь)?</span> som betyr omtrent ‘..., ikke sant’ og <span class=\"construction\">Сам подумать-Imp, Cl</span> som betyr omtrent ‘Tenk på det, Tenk på at, Husk at ...’.<br>I disse konstruksjonene står Cl for en hel setning (Cl=setning), og подумать-Imp som er imperativformen av verbet подумать ‘å tenke’ (Imp = imperativ), det vil si подумай (entall) og подумайте (flertall). Legg merke til at pronomenet сам ‘selv’ skal bøyes i overensstemmelse med samtalepartnerens kjønn. Bruk сам for å tiltale en mann, сама for å tiltale en kvinne. Imperativformen подумай er ikke avhengig av samtalepartnerens kjønn. "
    var x = document.getElementById("ex74_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex65_eng() {
    result = "You and your friends are going on a trip, and you need to decide how you will travel. In pairs, discuss the pros and cons of traveling by plane, train, bus, and private car. Use the constructions <span class=\'construction\'>Cl, не так ли?</span> ‘..., isn’t it?’ or ‘..., right?’ and <span class=\'construction\'>на PronPoss-Acc взгляд, Cl</span> ‘In my opinion, ...’.<br>In these constructions, Cl is a whole sentence (Cl=clause, sentence), and PronPoss-Acc is a possessive pronoun in the accusative case (PronPoss = possessive pronoun, Acc = Accusative case), for example <i>мой</i> ‘mine’ and <i>наш</i> ‘ours’. The words <span class=\'construction\'>на мой взгляд</span> and <span class=\'construction\'>на наш взгляд</span> can be placed at the beginning, at the end or in the middle of a sentence."
    var x = document.getElementById("ex65_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex65_norw() {
    result = "Du planlegger en reise sammen med noen venner og trenger å velge transportmiddel. Diskuter i par om fordeler og ulemper med fly, tog, bus og egen bil. Bruk konstruksjonen <span class=\'construction\'>Cl, не так ли?</span> ‘..., ikke sant?’ og <span class=\'construction\'>на PronPoss-Acc взгляд, Cl</span> ‘Etter X syn / Etter min mening, ...’<br>I disse konstruksjonene er Cl en hel setning (Cl=setning) og PronPoss-Acc er et possessivt pronomen i akkusativ kasus (PronPoss=possessivt pronomen, Acc=akkusativ kasus), for eksempel <i>мой</i> ‘min’ and <i>наш</i> ‘vår’. Ordene <span class=\'construction\'>на мой взгляд</span> og <span class=\'construction\'>на наш взгляд</span> kan plasseres i begynnelsen, i slutten eller i midten av en setning."
    var x = document.getElementById("ex65_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}