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
    result = "Fill in the blanks. Use the construction <span class='construction'>Cl, а NP-Nom как думать-Prs?</span> ‘..., what do you think?’ and the construction <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Don’t you think that ...?’. <br>In these constructions, Cl stands for an entire sentence (Cl=clause, sentence), NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom= Nominative case), and Prs stands for the present tense of the verb (Prs= present tense). In the slot NP-Nom we can use a pronoun (for example, ты, вы, он, она, etc.) instead of a noun. Note the difference in meaning between the two constructions (see the table below)."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Fyll ut de tomme feltene. Bruk konstruksjonen <span class='construction'>Cl, а NP-Nom как думать-Prs?</span> ‘..., hva tror du?’ og konstruksjonen <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Tror du ikke at ...?’. <br>I disse konstruksjonene betyr Cl en hel setning (Cl=setning), NP-Nom står for et substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), Prs betyr verb i presens (Prs=presens). Ved plassen NP-Nom er det mulig å bruke pronomen i stedet for substantiv (for eksempel, ты, вы, он, она, etc.). Legg merke til betydningsforskjellen mellom de to konstruksjonene (se tabellen nedenfor)."
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex2_1() {
    var x = document.getElementById("ex2_1_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_1_result").innerHTML = result;
}

function Ex2_1() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> эти брюки тебе уже малы?';
    var x = document.getElementById("ex2_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2_2() {
    var x = document.getElementById("ex2_1_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_2_result").innerHTML = result;
}

function Ex2_2() {
    result = 'Думаю, нам лучше не ехать на этом автобусе, а подождать следующий, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex2_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2_3() {
    var x = document.getElementById("ex2_3_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_3_result").innerHTML = result;
}

function Ex2_3() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> я могу быть не дома?';
    var x = document.getElementById("ex2_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2_4() {
    var x = document.getElementById("ex2_4_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_4_result").innerHTML = result;
}

function Ex2_4() {
    result = 'По-моему, мне пойдёт, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex2_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2_5() {
    var x = document.getElementById("ex2_5_input");
    if (x.value.toLowerCase() == "А ты не думаешь, что".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_5_result").innerHTML = result;
}

function Ex2_5() {
    result = '<span class=\'construction\'>А ты не думаешь, что</span> твоя собственная внешность намного интереснее?';
    var x = document.getElementById("ex2_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex2_6() {
    var x = document.getElementById("ex2_6_input");
    if (x.value.toLowerCase() == "а ты как думаешь?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex2_6_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex2_6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_6_result").innerHTML = result;
}

function Ex2_6() {
    result = 'Не уверен, что я сдам его, <span class=\'construction\'>а ты как думаешь?</span>';
    var x = document.getElementById("ex2_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Complete the sentences by using the words in parentheses and the construction <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Don’t you think that ...?’. <br>In this construction, NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom= Nominative case), Prs stands for the present tense of the verb (Prs= present tense), and Cl means an entire sentence (Cl=clause, sentence). In the slot NP-Nom use the pronoun given in the parentheses (ты, вы, он, она, etc.)."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Fullfør setningene ved å bruke ordene i parentes og konstruksjonen <span class='construction'>а NP-Nom не думать-Prs, что Cl?</span> ‘Tror du ikke at ...?’. <br>I denne konstruksjonen står NP-Nom for et substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), Prs betyr verb i presens (Prs=presens), og Cl betyr en hel setning (Cl=setning). Ved plassen NP-Nom, bruk pronomen i parentes (ты, вы, он, она, etc.)."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex3_1() {
    var x = document.getElementById("ex3_1_input");
    if (x.value.toLowerCase() == "А вы не думаете, что это благодаря спорту?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex3_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_1_result").innerHTML = result;
}

function Ex3_1() {
    result = '<span class=\'construction\'>А вы не думаете, что</span> это благодаря спорту?';
    var x = document.getElementById("ex3_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3_2() {
    var x = document.getElementById("ex3_2_input");
    if (x.value.toLowerCase() == "А она не думает, что для этого надо учиться?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex3_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_2_result").innerHTML = result;
}

function Ex3_2() {
    result = '<span class=\'construction\'>А она не думает, что</span> для этого надо учиться?';
    var x = document.getElementById("ex3_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3_3() {
    var x = document.getElementById("ex3_3_input");
    if (x.value.toLowerCase() == "А он не думает, что это плохо для экологии?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex3_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_3_result").innerHTML = result;
}

function Ex3_3() {
    result = '<span class=\'construction\'>А он не думает, что</span> это плохо для экологии?';
    var x = document.getElementById("ex3_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3_4() {
    var x = document.getElementById("ex3_4_input");
    if (x.value.toLowerCase() == "Интересно, а они не думают, что они могут заболеть?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex3_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex3_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_4_result").innerHTML = result;
}

function Ex3_4() {
    result = 'Интересно, <span class=\'construction\'>а они не думают, что</span> они могут заболеть?';
    var x = document.getElementById("ex3_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Rephrase these statements as questions by using the construction <span class=\'construction\'>Аdj-Nom Cop NP-Nom, правда (ведь)?</span> meaning ‘X is Y, isn’t it?’ and the construction <span class=\'construction\'>Cl, не правда ли?</span> meaning ‘..., isn’t that right?’. These Russian constructions are used similarly to tag questions in English (e.g. She is beautiful, isn’t she?). <br>In these constructions, Аdj-Nom means an adjective in the Nominative case (Adj=adjective, Nom=Nominative case), Cop is a copula verb быть (Cop=copula verb), NP-Nom stands for a noun in the Nominative case (NP=noun phrase, Nom=Nominative case), and Cl means an entire sentence (Cl=clause, sentence). The two constructions are very similar in meaning. Both constructions mean that the speaker expects that the interlocutor to agree with him or her. The word не does not convey negation!"
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Lag spørsmål av disse utsagnene ved å bruke konstruksjonen <span class=\'construction\'>Аdj-Nom Cop NP-Nom, правда (ведь)?</span> som betyr ‘…, ikke sant?’ og konstruksjonen  <span class=\'construction\'>Cl, не правда ли?</span> som også betyr ‘..., ikke sant?’. <br>I disse konstruksjonene står Adj-Nom for et adjektiv i nominativ kasus (Adj=adjektiv, Nom=nominativ kasus), Cop er kopula-verbet быть (Cop=kopula-verb), NP-Nom betyr substantiv i nominativ kasus (NP=nominalfrase, Nom=nominativ kasus), og Cl betyr en hel setning (Cl=setning). Disse to konstruksjonene har veldig lik betydning. Begge konstruksjonene betyr at taleren forventer at samtalepartneren er enig. Ordet не ‘ikke’ er ikke nektende! "
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4_1() {
    var x = document.getElementById("ex4_1_input");
    if (x.value.toLowerCase() == "У Олега хитрый взгляд, правда?".toLowerCase() || x.value.toLowerCase() == "У Олега хитрый взгляд, правда ведь?".toLowerCase() || x.value.toLowerCase() == "У Олега хитрый взгляд, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_1_result").innerHTML = result;
}

function Ex4_1() {
    result = 'У Олега хитрый взгляд, <span class=\'construction\'>правда?</span><br>У Олега хитрый взгляд, <span class=\'construction\'>правда ведь?</span><br>У Олега хитрый взгляд, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_2() {
    var x = document.getElementById("ex4_1_input");
    if (x.value.toLowerCase() == "Мне к лицу зелёный цвет, правда?".toLowerCase() || x.value.toLowerCase() == "Мне к лицу зелёный цвет, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Мне к лицу зелёный цвет, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_2_result").innerHTML = result;
}

function Ex4_2() {
    result = 'Мне к лицу зелёный цвет, <span class=\'construction\'>правда?</span><br>Мне к лицу зелёный цвет, <span class=\'construction\'>правда ведь?</span><br>Мне к лицу зелёный цвет, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_3() {
    var x = document.getElementById("ex4_3_input");
    if (x.value.toLowerCase() == "Настя очень красивая, правда?".toLowerCase() || x.value.toLowerCase() == "Настя очень красивая, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Настя очень красивая, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_3_result").innerHTML = result;
}

function Ex4_3() {
    result = 'Настя очень красивая, <span class=\'construction\'>правда?</span><br>Настя очень красивая,<span class=\'construction\'> правда ведь?</span><br>Настя очень красивая, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_4() {
    var x = document.getElementById("ex4_4_input");
    if (x.value.toLowerCase() == "У Кирилла приятное лицо, правда?".toLowerCase() || x.value.toLowerCase() == "У Кирилла приятное лицо, правда ведь?".toLowerCase() || x.value.toLowerCase() == "У Кирилла приятное лицо, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_4_result").innerHTML = result;
}

function Ex4_4() {
    result = 'У Кирилла приятное лицо, <span class=\'construction\'>правда?</span><br>У Кирилла приятное лицо, <span class=\'construction\'>правда ведь?</span><br>У Кирилла приятное лицо, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_5() {
    var x = document.getElementById("ex4_5_input");
    if (x.value.toLowerCase() == "Пете к лицу эта рубашка, правда?".toLowerCase() || x.value.toLowerCase() == "Пете к лицу эта рубашка, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Пете к лицу эта рубашка, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_5_result").innerHTML = result;
}

function Ex4_5() {
    result = 'Пете к лицу эта рубашка, <span class=\'construction\'>правда?</span><br>Пете к лицу эта рубашка, <span class=\'construction\'>правда ведь?</span><br>Пете к лицу эта рубашка, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_6() {
    var x = document.getElementById("ex4_6_input");
    if (x.value.toLowerCase() == "Ваня очень симпатичный, правда?".toLowerCase() || x.value.toLowerCase() == "Ваня очень симпатичный, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Ваня очень симпатичный, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_6_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_6_result").innerHTML = result;
}

function Ex4_6() {
    result = 'Ваня очень симпатичный, <span class=\'construction\'>правда?</span><br>Ваня очень симпатичный, <span class=\'construction\'>правда ведь?</span><br>Ваня очень симпатичный, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex4_7() {
    var x = document.getElementById("ex4_7_input");
    if (x.value.toLowerCase() == "Алексей выглядит моложе своих лет, правда?".toLowerCase() || x.value.toLowerCase() == "Алексей выглядит моложе своих лет, правда ведь?".toLowerCase() || x.value.toLowerCase() == "Алексей выглядит моложе своих лет, не правда ли?".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex4_7_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex4_7_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4_7_result").innerHTML = result;
}

function Ex4_7() {
    result = 'Алексей выглядит моложе своих лет,<span class=\'construction\'> правда?</span><br>Алексей выглядит моложе своих лет, <span class=\'construction\'>правда ведь?</span><br>Алексей выглядит моложе своих лет, <span class=\'construction\'>не правда ли?</span>';
    var x = document.getElementById("ex4_7_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "Express your disagreement with your interlocutor. Use the construction <span class=\'construction\'>по-моему, Cl</span> meaning ‘in my opinion, ... ’. We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Uttrykk din uenighet med samtalepartnerens uttalelse ved å bruke konstruksjonen <span class=\'construction\'>по-моему, Cl </span>‘Etter min mening, ... ’. Ved plassen Cl kan man bruke en hel setning (Cl=setning). "
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5_1() {
    result = '— <span class=\'construction\'>По-моему,</span> Алёна выглядит устало.<br>— А <span class=\'construction\'>по-моему,</span> бодро / не устало.';
    var x = document.getElementById("ex5_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_2() {
    result = '— <span class=\'construction\'>По-моему,</span> у Миши красивые глаза.<br>— А <span class=\'construction\'>по-моему,</span> некрасивые / обычные.';
    var x = document.getElementById("ex5_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_3() {
    result = '— <span class=\'construction\'>По-моему,</span> у Марины приветливая улыбка.<br>— А <span class=\'construction\'>по-моему,</span> неприветливая / не очень приветливая.';
    var x = document.getElementById("ex5_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_4() {
    result = '— <span class=\'construction\'>По-моему,</span> у Наташи шикарные волосы.<br>— А <span class=\'construction\'>по-моему,</span> обычные / жидкие.';
    var x = document.getElementById("ex5_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_5() {
    result = '— <span class=\'construction\'>По-моему,</span> у Глеба не очень счастливое лицо.<br>— А <span class=\'construction\'>по-моему,</span> очень.';
    var x = document.getElementById("ex5_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_6() {
    result = '— <span class=\'construction\'>По-моему,</span> Зина высокого роста.<br>— А <span class=\'construction\'>по-моему,</span> среднего / не очень высокого.';
    var x = document.getElementById("ex5_6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_7() {
    result = '— <span class=\'construction\'>По-моему,</span> у Феди хитрый взгляд.<br>— А <span class=\'construction\'>по-моему,</span> нормальный / открытый.';
    var x = document.getElementById("ex5_7_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_8() {
    result = '— <span class=\'construction\'>По-моему,</span> у Гены крупный нос.<br>— А <span class=\'construction\'>по-моему,</span> нормальный / маленький / не очень.';
    var x = document.getElementById("ex5_8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_9() {
    result = '— <span class=\'construction\'>По-моему,</span> у Лиды круглое лицо.<br>— А <span class=\'construction\'>по-моему,</span> нет / вытянутое / не очень.';
    var x = document.getElementById("ex5_9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex5_10() {
    result = '— <span class=\'construction\'>По-моему,</span> у Аллы густые волосы.<br>— А <span class=\'construction\'>по-моему,</span> жидкие / не очень.';
    var x = document.getElementById("ex5_10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex6_eng() {
    result = "Many people still have stereotypes about personal appearance. Challenge the stereotypes expressed in the first column (1-5) by finding the appropriate responses in the second column (а-д)."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Mange mennesker har fremdeles stereotype oppfatninger når det gjelder utseende. Prøv å utfordre stereotypene i den første kolumnen (1-5) ved å finne riktig svar i den andre kolumnen (а-д)."
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
    if (x.value.toLowerCase() == "1д, 2а, 3в, 4б, 5г") {
        result = "Правильно";
        document.getElementById("ex6_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6_result").innerHTML = result;
}

function Ex6() {
    result = "1д, 2а, 3в, 4б, 5г";
    var x = document.getElementById("ex6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "Discuss the similarities and differences in the appearance of the people in the pictures (Жанна and Ира, Дэвид and Алекс, Лина and Маргарита, Амрит and Николай). Point out the similarities, whereas your interlocutor will focus on the differences. Еxpress your own opinion and ask for the opinion of your interlocutor. Use the variants of the constructions provided in the rightmost column of the table."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Diskuter likheter og forskjeller ved utseendet til menneskene på bildene (Жанна og Ира, Дэвид og Алекс, Лина og Маргарита, Амрит og Николай). En av dere fokuserer på likhetene, mens den andre beskriver forskjellene. Uttrykk din egen mening og spør din samtalepartner om hans eller hennes mening. Bruk de forskjellige variantene av konstruksjonene i kolumne 2 i tabellen. "
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
    result = "Discuss the people you see in the pictures. Who do you think they are? Use the variants of the constructions provided in column 2 of the table."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Diskuter menneskene på bildene. Hvem tror du de er? Bruk de forskjellige variantene av konstruksjonene i kolumne 2 i tabellen."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_comment() {
    result = "Формат задания: в парах. Один студент рассказывает о людях на фотографии, а другой студент задаёт вопросы.<br>Comment for language teachers. Task format: in pairs. One student describes the people in the pictures, whereas the other student asks questions."
    var x = document.getElementById("ex8_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex9_eng() {
    result = "Bonus exercise.<br>You are a screenwriter and a casting director in a film production studio. Your studio wants to create new adaptations of famous literary works. Discuss casting for various roles in terms of the appearance of the actors and your ideas about each role. Use the constructions from the list."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Bonusoppgave.<br> Du er manusforfatter og casting ansvarlig i et filmstudio. Ditt filmstudio ønsker å lage nye filmatiseringer av kjente litterære verk. Diskuter castingen av de forskjellige rollene når det gjelder skuespillenes utseende og ditt syn på hver enkelt rolle. "
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "Your friend Alla is going on a date. She wants to dress up. You argue with her because you think that there is nothing better than a natural look. Complete the dialogue below with your own lines."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Din venninne Alla skal på date. Hun ønsker å se veldig elegant ut, men du mener at det er best å se naturlig ut. Fullfør dialogen med dine egne replikker. "
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_comment() {
    result = "Комментарий для преподавателя. У этого задания может быть два варианта. Второй, более легкий вариант, представлен в задании 11."
    var x = document.getElementById("ex10_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10() {
    result = "— Хочу завтра красиво одеться, накраситься и сходить в парикмахерскую. К первому свиданию нужно как следует подготовиться, <span class=\'construction\'>правда ведь?</span><br>— <span class=\'construction\'>Честно говоря,</span> для меня это странно. <span class=\'construction\'>По-моему,</span> к свиданию не нужно специально готовиться.<br>— Мне кажется, первое впечатление — это очень важно.<br>— <span class=\'construction\'>А ты не думаешь, что</span> внешность в отношениях не главное?<br>— Да, не главное. Но с красивым человеком и разговаривать приятнее, <span class=\'construction\'>не правда ли?</span><br>— <span class=\'construction\'>На мой взгляд,</span> ты и в обычной одежде выглядишь отлично.<br>— <span class=\'construction\'>По-твоему,</span> я должна прийти на свидание в джинсах и без макияжа?<br>— Почему нет? <span class=\'construction\'>Как по мне,</span> всегда нужно быть самой собой. Естественность — лучший наряд.";
    var x = document.getElementById("ex10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex11_eng() {
    result = "You see a conversation between two friends. The lines of the dialogue are mixed up. Restore the order of the lines to make a coherent text. Discuss with your interlocutor whose opinion you agree with most and why."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Foran deg ser du en samtale mellom to venner. Replikkene i dialogen har havnet i feil rekkefølge. Lag en sammenhengende tekst ved å plassere replikkene i riktig rekkefølge. Diskuter med din samtalepartner hvem du er mest enig med, og hvorfor."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex11() {
    var x = document.getElementById('ex11_input');
    if (x.value.toLowerCase() == "в,з,ж,а,г,д,е,б") {
        result = "Правильно";
        document.getElementById("ex11_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_result").innerHTML = result;
}

function Ex11() {
    result = "в,з,ж,а,г,д,е,б";
    var x = document.getElementById("ex11_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}