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
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class='construction'>Cl,и на том спасибо</span> meaning ‘it’s something at least; Thank Heaven for small favors!’ We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class='construction'>Cl,и на том спасибо</span>. som betyr omtrent ‘la oss være takknemlig for lite’ eller ‘heldigvis’ (den var litt vrien, vanskelig å finne et godt tilsvarende uttrykk på norsk). Plassen Cl kan fylles med en hel setning. "
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex2() {
    var x = document.getElementById('ex2_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4д, 5б") {
        result = "Правильно";
        document.getElementById("ex2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_result").innerHTML = result;
}

function Ex2() {
    result = "1в, 2а, 3г, 4д, 5б<br><br>Соня опять пересолила суп. Со сметаной есть можно, <span class='construction'>и на том спасибо</span>.<br>Паша снова съел шоколадку вместо ужина. Что-то поел, <span class='construction'>и на том спасибо</span>.<br>Я выпил(а) уже 3 кружки кофе за утро. Не пиво, <span class='construction'>и на том спасибо</span>.<br>У моего брата сильная аллергия на цитрусовые. Он может есть остальные фрукты, <span class='construction'>и на том спасибо</span>.<br> Муж опять забыл убрать молоко в холодильник, и оно испортилось. Никто это молоко не выпил, <span class='construction'>и на том спасибо</span>";
    var x = document.getElementById("ex2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Some popular Russian dishes have analogues in other countries. Imagine that you have been at a cafe in Moscow. Tell your friend about the Russian dishes you have tried there by using the construction <span class='construction'>NP типа NP-Gen</span> ‘something like X’. In this construction, NP stands for a noun (NP=noun phrase), аnd NP-Gen means a noun in the Genitive case (Gen=Genitive case)."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Noen populære russiske retter har tilsvarende retter i andre land. Forestill deg at du har vært på en kafé i Moskva. Fortell en venn om hvilke matretter du prøvde der, ved å bruke konstruksjonen <span class='construction'>NP типа NP-Gen</span> ‘en slags X / som X’. I denne konstruksjonen står NP for et substantiv (NP=nominalfrase), og NP-Gen betyr substantiv i genitiv kasus (Gen=genitiv kasus)."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex3a() {
    result = 'Затем я попробовала кексы. Это что-то <span class=\'construction\'>типа</span> маффинов.';
    var x = document.getElementById("ex3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex3b() {
    result = 'Затем я попробовала яичницу болтунью. Это что-то <span class=\'construction\'>типа</span> яичного скрэмбла.';
    var x = document.getElementById("ex3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex3c() {
    result = 'Затем я попробовала бефстроганов. Это что-то <span class=\'construction\'>типа</span> гуляша.';
    var x = document.getElementById("ex3c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex3d() {
    result = 'Затем я попробовала творожную запеканку. Это что-то <span class=\'construction\'>типа</span> чизкейка.';
    var x = document.getElementById("ex3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Complete a conversation by adding a third line. Use the short form of the adjective in parentheses (). Use the construction <span class=\'construction\'>вот и Pred!</span> ‘then X’ (for example Then fine!). In this construction, Pred stands for a predicative, that is a short form of an adjective."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Fullfør samtalen ved å legge til en tredje replikk. Bruk kortform av adjektivet i parentes. Bruk konstruksjonen <span class=\'construction\'>вот и Pred!</span> som kan oversettes med enten ‘det er X’, ‘hvor X’ eller ‘så X’ (for eksempel: Det er fint! Hvor herlig! Så bra!). I denne konstruksjonen står Pred for predikativ, det vil si adjektivets kortform."
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex4() {
    var x = document.getElementById('ex4a_input');
    if (x.value.toLowerCase() == "Вот и отлично!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex4a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4a_result").innerHTML = result;

    var x = document.getElementById('ex4b_input');
    if (x.value.toLowerCase() == "Вот и замечательно!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex4b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4b_result").innerHTML = result;

    var x = document.getElementById('ex4c_input');
    if (x.value.toLowerCase() == "Вот и прекрасно!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex4c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex4c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex4c_result").innerHTML = result;
}

function Ex4() {
    result = 'a. <span class=\'construction\'>Вот и</span> отлично!<br> б. <span class=\'construction\'>Вот и</span> замечательно!<br> в. <span class=\'construction\'>Вот и</span> прекрасно!';
    var x = document.getElementById("ex4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "You and your interlocutor must decide what to cook for a festive dinner. Discuss your meal plan with him (or her). Use the construction <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘and concerning X, ...’ and the construction <span class=\'construction\'>вот и Pred!</span> ‘then X’ (for example Then fine!). <br>In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), Pred means a predicative, that is a short form of an adjective, and parentheses () indicate an optional element of a construction.\n"
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Du og din samtalepartner må bestemme hva dere skal lage til en festlig middag. Diskuter forskjellige matretter med din samtalepartner ved å bruke konstruksjonene <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘og når det gjelder X, ... ’ og <span class=\'construction\'>вот и Pred!</span> ‘det er X’, ‘hvor X’, eller ‘så X’ (For eksempel: Det er fint! Hvor herlig! Så bra!). <br>I disse konstruksjonene står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), Pred betyr predikativ, det vil si adjektivets kortform, mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5() {
    result = '1) — <span class=\'construction\'>А насчёт</span> закусок — что мы будем готовить?<br>2) — <span class=\'construction\'>А насчёт</span> супа — что мы будем готовить?<br>3) — <span class=\'construction\'>А насчёт</span> горячего — что мы будем готовить?<br>4) — <span class=\'construction\'>А насчёт</span> гарнира — что мы будем готовить?<br>5) — <span class=\'construction\'>А насчёт</span> десерта — что мы будем готовить?';
    var x = document.getElementById("ex5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex6_eng() {
    result = "You overheard a small part of a conversation on the street. Try to guess what was said before the part that you heard. Name the topic of the conversation and imagine what the previous remarks might have been. Use the construction <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> meaning ‘and concerning X, ...’.<br>In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Du overhørte en liten del av en samtale på gata. Prøv å gjette hva som ble sagt tidligere. Navngi temaet på samtalen og finn ut hvordan de foregående uttalelsene kunne ha sett ut. Bruk konstruksjonen <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> som betyr ‘og når det gjelder X, ... ’. <br>I denne konstruksjonen står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon. "
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6a() {
    result = 'Они говорили о рецепте для пирогов.';
    var x = document.getElementById("ex6a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6b() {
    result = 'Они говорили о кофе.';
    var x = document.getElementById("ex6b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6c() {
    result = 'Они говорили о десерте.';
    var x = document.getElementById("ex6c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "You are a restaurant critic and have to evaluate the dishes prepared by a young chef. You found a problem with each dish. Explain what exactly the chef did wrong when making the food. Use the notes provided below and the construction <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘the point is not in X but in Y’.<br> In this construction, Cop is a copula verb быть (Cop =copula verb), NP-Loc is a noun in the Locative case (NP=noun phrase, Loc=Locative case), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Du er restaurantanmelder og skal vurdere rettene til en ung kokk. Du fant et problem med hver rett. Forklar akkurat hva som gikk galt når kokken laget maten. Bruk notatene nedenfor og konstruksjonen <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘det gjelder ikke X / det handler ikke om X, men Y’.<br> I denne konstruksjonen står Cop for kopula-verbet быть (Cop=kopula-verb), NP-Loc er et substantiv i lokativ kasus (NP=nominalfrase, Loc=lokativ kasus), mens parentesene () indikerer en valgfri del av en konstruksjon. Hvis man bruker eksempelet nedenfor ville jeg sagt på norsk: «Det er ikke krydringen som er problemet, men kjøttet»."
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
    if (x.value.toLowerCase() == "Яблочный пирог плохо получился. И дело не в муке, а во времени приготовления. Пирог не пропёкся.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex7a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7a_result").innerHTML = result;
}

function Ex7a() {
    result = 'Яблочный пирог плохо получился. <span class=\'construction\'>И дело не в</span> муке, <span class=\'construction\'>а во</span> времени приготовления. Пирог не пропёкся.';
    var x = document.getElementById("ex7a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex7b() {
    var x = document.getElementById("ex7b_input");
    if (x.value.toLowerCase() == "Блины плохо получились. И дело не в тесте, а в масле. Масла положили слишком много.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex7b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7b_result").innerHTML = result;
}

function Ex7b() {
    result = 'Блины плохо получились. <span class=\'construction\'>И дело не в</span> тесте, <span class=\'construction\'>а в</span> масле. Масла положили слишком много.';
    var x = document.getElementById("ex7b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex7c() {
    var x = document.getElementById("ex7c_input");
    if (x.value.toLowerCase() == "Шоколадный торт плохо получился. И дело не в сливках для крема, а в сахаре. Нужна сахарная пудра.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex7c_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7c_result").innerHTML = result;
}

function Ex7c() {
    result = 'Шоколадный торт плохо получился. <span class=\'construction\'>И дело не в</span> сливках для крема, <span class=\'construction\'>а в</span> сахаре. Нужна сахарная пудра.';
    var x = document.getElementById("ex7c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex7d() {
    var x = document.getElementById("ex7d_input");
    if (x.value.toLowerCase() == "Эспрессо плохо получился. И дело не в сорте кофе, а в обжарке. Она слишком светлая.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex7d_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7d_result").innerHTML = result;
}

function Ex7d() {
    result = 'Эспрессо плохо получился. <span class=\'construction\'>И дело не в</span> сорте кофе, <span class=\'construction\'>а в</span> обжарке. Она слишком светлая.';
    var x = document.getElementById("ex7d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex7e() {
    var x = document.getElementById("ex7e_input");
    if (x.value.toLowerCase() == "Овощной салат плохо получился. И дело не в овощах, а в оливковом масле. Оно слишком старое.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex7e_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex7e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex7e_result").innerHTML = result;
}

function Ex7e() {
    result = 'Овощной салат плохо получился. <span class=\'construction\'>И дело не в</span> овощах, <span class=\'construction\'>а в</span> оливковом масле. Оно слишком старое.';
    var x = document.getElementById("ex7e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex8_eng() {
    result = "Rewrite a dialog by using the constructions <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘and concerning X, ...’ and <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘the point is not in X but in Y’. <br>In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), Cop means a copula verb быть (Cop =copula verb), NP-Loc is a noun in the Locative case (NP=noun phrase, Loc=Locative case), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Omskriv dialogen ved å bruke konstruksjonene <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘og når det gjelder X, ... ’ og <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘det gjelder ikke X / det handler ikke om X, men Y’.<br>I disse konstruksjonene står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), Cop betyr kopula-verbet быть (Cop=kopula-verb), NP-Loc er et substantiv i lokativ kasus (NP=nominalfrase, Loc=lokativ kasus), mens parentesene () indikerer en valgfri del av en konstruksjon. "
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex8a() {
    var x = document.getElementById('ex8a1_input');
    if (x.value.toLowerCase() == "блинов".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8a1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8a1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8a1_result").innerHTML = result;

    var x = document.getElementById('ex8a2_input');
    if (x.value.toLowerCase() == "рецепт очень простой".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8a2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8a2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8a2_result").innerHTML = result;

    var x = document.getElementById('ex8a3_input');
    if (x.value.toLowerCase() == "рецепте".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8a3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8a3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8a3_result").innerHTML = result;

    var x = document.getElementById('ex8a4_input');
    if (x.value.toLowerCase() == "я не умею их жарить".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8a4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8a4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8a4_result").innerHTML = result;
}

function Ex8a() {
    result = '— <span class=\'construction\'>А насчёт</span> блинов, рецепт очень простой. Почему ты не хочешь их готовить?<br>— <span class=\'construction\'>Дело не в</span> рецепте, <span class=\'construction\'>а в том, что</span> я не умею их жарить.';
    var x = document.getElementById("ex8a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex8b() {
    var x = document.getElementById('ex8b1_input');
    if (x.value.toLowerCase() == "баклажанов".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8b1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8b1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8b1_result").innerHTML = result;

    var x = document.getElementById('ex8b2_input');
    if (x.value.toLowerCase() == "они очень вкусные".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8b2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8b2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8b2_result").innerHTML = result;

    var x = document.getElementById('ex8b3_input');
    if (x.value.toLowerCase() == "вкусе".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8b3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8b3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8b3_result").innerHTML = result;

    var x = document.getElementById('ex8b4_input');
    if (x.value.toLowerCase() == "сейчас баклажанов нет в магазине".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8b4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8b4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8b4_result").innerHTML = result;
}

function Ex8b() {
    result = '— <span class=\'construction\'>А насчёт</span> баклажанов, они очень вкусные. Почему ты не хочешь их готовить?<br>— <span class=\'construction\'>Дело не во</span> вкусе, <span class=\'construction\'>а в том, что</span> сейчас баклажанов нет в магазине.';
    var x = document.getElementById("ex8b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex8c() {
    var x = document.getElementById('ex8c1_input');
    if (x.value.toLowerCase() == "пирога".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8c1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8c1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8c1_result").innerHTML = result;

    var x = document.getElementById('ex8c2_input');
    if (x.value.toLowerCase() == "нужно потратить время, но получается очень вкусно".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8c2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8c2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8c2_result").innerHTML = result;

    var x = document.getElementById('ex8c3_input');
    if (x.value.toLowerCase() == "времени".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8c3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8c3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8c3_result").innerHTML = result;

    var x = document.getElementById('ex8c4_input');
    if (x.value.toLowerCase() == "у меня нет духовки".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8c4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8c4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8c4_result").innerHTML = result;
}

function Ex8c() {
    result = '— <span class=\'construction\'>А насчёт</span> пирога, нужно потратить время, но получается очень вкусно. Почему ты не хочешь его готовить?<br>— <span class=\'construction\'>Дело не во</span> времени, <span class=\'construction\'>а в том, что</span> у меня нет духовки.';
    var x = document.getElementById("ex8c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex8d() {
    var x = document.getElementById('ex8d1_input');
    if (x.value.toLowerCase() == "этого блюда".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8d1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8d1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8d1_result").innerHTML = result;

    var x = document.getElementById('ex8d2_input');
    if (x.value.toLowerCase() == "в нём самые простые ингредиенты".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8d2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8d2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8d2_result").innerHTML = result;

    var x = document.getElementById('ex8d3_input');
    if (x.value.toLowerCase() == "ингредиентах".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8d3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8d3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8d3_result").innerHTML = result;

    var x = document.getElementById('ex8d4_input');
    if (x.value.toLowerCase() == "у меня нет на это времени".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8d4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8d4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8d4_result").innerHTML = result;
}

function Ex8d() {
    result = '— <span class=\'construction\'>А насчёт</span> этого блюда, в нём самые простые ингредиенты. Почему ты не хочешь его готовить?<br>— <span class=\'construction\'>Дело не в</span> ингредиентах, <span class=\'construction\'>а в том, что</span> у меня нет на это времени.';
    var x = document.getElementById("ex8d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "You are with a friend in a restaurant. You need to order food. Look at the menu and discuss with your friend what you will order in each category of food."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Du og en venn er på restaurant. Dere skal bestille mat. Se på menyen og diskuter hva dere skal bestille fra hver kategori."
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
    result = "You are planning to invite your friends for dinner. You are now shopping in the grocery store. Discuss with your friend what you will buy, how much of each item you need, and what you will cook. Use the constructions from the list:<li><span class=\"construction\">(а) насчёт NP-Gen – Cl</span><li><span class=\"construction\">вот и Pred!</span><li><span class=\"construction\">дело Cop не в NP-Loc (, а в NP-Loc)</span><li><span class=\"construction\">NP типа NP-Gen</span><br>In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), Pred means a predicative, that is a short form of an adjective, Cop means a copula verb быть (Cop =copula verb), NP-Loc is a noun in the Locative case (NP=noun phrase, Loc= Locative case), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "Du skal invitere noen venner på middag. Akkurat nå er du på butikken for å handle. Diskuter med en venn hva du skal kjøpe, hvor mye av hver vare du trenger og hva du skal lage. Bruk følgende konstruksjoner <li><span class=\"construction\">(а) насчёт NP-Gen – Cl</span><li><span class=\"construction\">вот и Pred!</span><li><span class=\"construction\">дело Cop не в NP-Loc (, а в NP-Loc)</span><li><span class=\"construction\">NP типа NP-Gen</span><br>I disse konstruksjonene står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), Pred betyr predikativ, det vil si adjektivets kortform, Cop betyr kopula-verbet быть (Cop=kopula-verb), NP-Loc er et substantiv i lokativ kasus, (NP=nominalfrase, Loc=lokativ kasus), mens parentesene () indikerer en valgfri del av en konstruksjon. "
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex10_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex11_eng() {
    result = "Bonus exercise. You and your friend are cooking a beetroot soup \"borsch\". You have a list of ingredients. Your friend said that he would purchase all the ingredients you need. Discuss with your friend who just returned from the grocery store whether he bought everything."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Bonusoppgave. Du og en venn lager borsjtsj. Dere har en liste på ingredienser. Din venn sa at han skal kjøpe alle nødvendige ingredienser. Diskuter med vennen som akkurat kommet tilbake fra butikken, hvorvidt han kjøpte alt dere trenger."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex12_eng() {
    result = "Write a short text about a visit to a restaurant. What did you order there? What dishes did you try? What did you like and dislike? Use all new constructions from this lesson."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex12_norw() {
    result = "Skriv en kort tekst om når du var på restaurant. Hva bestilte du? Hvilke retter prøvde du? "
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}
