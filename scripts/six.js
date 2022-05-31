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
    result = "Compare various means of transport in terms of various parameters. Build sentences by using the model below and the construction <span class='construction'>с точки зрения NP-Gen, Cl</span> meaning ‘With regard to X, ...’ or ‘In terms of X, ...’.<br>In this construction, NP-Gen is a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), and Cl is a sentence (Cl=clause, sentence). Pay attention to the meaning of this construction visualized in the diagram below."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Bruk forskjellige parametere for å sammenligne og beskrive ulike typer av transportmidler. Lag setninger ved å bruke malen nedenfor, sammen med konstruksjonen <span class='construction'>с точки зрения NP-Gen, Cl</span> som betyr omtrent ‘fra X synspunkt, ...’, ‘med hensyn til, ...’.<br>I denne konstruksjonen står NP-Gen for et substantiv i genitiv kasus, (NP=nominalfrase, Gen=genitiv kasus), Cl er en setning (Cl=setning). Legg merke til diagrammet nedenfor som beskriver betydningen av denne konstruksjonen."
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex2_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex2_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex3_eng() {
    result = "Connect the sentences by choosing a matching continuation. Use the construction <span class='construction'>впрочем, Cl</span> meaning ‘However, ...’. We can put an entire sentence in the Cl slot (Cl=clause, sentence). Pay attention to the meaning of this construction visualized in the diagram below."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class='construction'>впрочем, Cl</span> som betyr omtrent ‘for resten / ellers / for øvrig ... ’. Plassen Cl kan fylles med en hel setning (Cl=setning). Legg merke til hvordan diagrammet nedenfor beskriver betydningen av denne konstruksjonen. "
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex3() {
    var x = document.getElementById('ex3_input');
    if (x.value.toLowerCase() == "1б, 2д, 3а, 4е, 5г, 6в") {
        result = "Правильно";
        document.getElementById("ex3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3_result").innerHTML = result;
}

function Ex3() {
    result = "1б, 2д, 3а, 4е, 5г, 6в<br><br>Соня опять пересолила суп. Со сметаной есть можно, <span class='construction'>и на том спасибо</span>.<br>Паша снова съел шоколадку вместо ужина. Что-то поел, <span class='construction'>и на том спасибо</span>.<br>Я выпил(а) уже 3 кружки кофе за утро. Не пиво, <span class='construction'>и на том спасибо</span>.<br>У моего брата сильная аллергия на цитрусовые. Он может есть остальные фрукты, <span class='construction'>и на том спасибо</span>.<br> Муж опять забыл убрать молоко в холодильник, и оно испортилось. Никто это молоко не выпил, <span class='construction'>и на том спасибо</span>";
    var x = document.getElementById("ex3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Here is a portion of the Moscow subway map. One of you is a tourist, and the other is a resident of Moscow. The tourist needs to find out how to get from one subway station to a different one. The Moscow resident gives instructions and describes two ways how to get to the destination. Use the dialogue structure provided below. Use the construction <span class=\'construction\'>впрочем, Cl</span> meaning ‘However, ...’. We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Foran dere er en del av Moskvas tunnelbanekart. En av dere er turist, den andre moskovitt. Turisten trenger å vite hvordan man tar seg fra en tunnelbanestasjon til en annen. Moskovitten forklarer for turisten at det finns to måter å komme seg til riktig stasjon. Bruk dialogmalen nedenfor. Bruk konstruksjonen <span class=\'construction\'>впрочем, Cl</span> som betyr omtrent ‘for resten / ellers / for øvrig/ imidlertid / likevel ...’. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex4_comment() {
    result = "Формат задания: в парах. После каждого диалога студенты меняются ролями.<br>Task format: in pairs. After each dialogue, the students switch roles."
    var x = document.getElementById("ex4_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5_eng() {
    result = "You and your friends are going on a trip, and you need to decide how you will travel. In pairs, discuss the pros and cons of traveling by plane, train, bus, and private car. Use the constructions <span class=\'construction\'>Cl, не так ли?</span> ‘..., isn’t it?’ or ‘..., right?’ and <span class=\'construction\'>на PronPoss-Acc взгляд, Cl</span> ‘In my opinion, ...’.<br>In these constructions, Cl is a whole sentence (Cl=clause, sentence), and PronPoss-Acc is a possessive pronoun in the accusative case (PronPoss = possessive pronoun, Acc = Accusative case), for example <i>мой</i> ‘mine’ and <i>наш</i> ‘ours’. The words <span class=\'construction\'>на мой взгляд</span> and <span class=\'construction\'>на наш взгляд</span> can be placed at the beginning, at the end or in the middle of a sentence."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Du planlegger en reise sammen med noen venner og trenger å velge transportmiddel. Diskuter i par om fordeler og ulemper med fly, tog, bus og egen bil. Bruk konstruksjonen <span class=\'construction\'>Cl, не так ли?</span> ‘..., ikke sant?’ og <span class=\'construction\'>на PronPoss-Acc взгляд, Cl</span> ‘Etter X syn / Etter min mening, ...’<br>I disse konstruksjonene er Cl en hel setning (Cl=setning) og PronPoss-Acc er et possessivt pronomen i akkusativ kasus (PronPoss=possessivt pronomen, Acc=akkusativ kasus), for eksempel <i>мой</i> ‘min’ and <i>наш</i> ‘vår’. Ordene <span class=\'construction\'>на мой взгляд</span> og <span class=\'construction\'>на наш взгляд</span> kan plasseres i begynnelsen, i slutten eller i midten av en setning."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_eng() {
    result = "You have arrived in Moscow, and people there mistake you for someone local. Help the tourists find their way. Use the construction <span class=\'construction\'>насколько PronPers-1 понимать, Cl</span> meaning ‘As far as I understand, ...’. In this construction, PronPers-1 stands for a personal pronoun like я, мы (PronPers=personal pronoun), аnd Cl is a sentence (Cl=clause, sentence). The verb понимать ‘understand’ agrees with the pronoun: я понимаю ‘I understand’, мы понимаем ‘We understand’."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Du har reist til Moskva, og folk tror allerede at du kommer derfra. Hjelp turistene å finne frem. Bruk konstruksjonen <span class=\'construction\'>насколько PronPers-1 понимать, Cl</span> som betyr ‘etter hva jeg vet ... / så vidt X forstår, ...’. I denne konstruksjonen betyr PronPers-1 personlig pronomen, for eksempel я, мы (PronPers=personlig pronomen), og Cl er en setning (Cl=setning). Verbet понимать ‘å forstå’ bøyes etter pronomenet: я понимаю ‘jeg forstår’, мы понимаем ‘vi forstår’."
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex6_1() {
    result = '— <span class=\'construction\'>Насколько я понимаю,</span> это рядом с Красной площадью.<br>— <span class=\'construction\'>Насколько я понимаю,</span> Никольская улица находится рядом с Красной площадью.';
    var x = document.getElementById("ex6_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6_2() {
    result = '— <span class=\'construction\'>Насколько я понимаю,</span> вам нужен трамвай номер 3.<br>— <span class=\'construction\'>Насколько я понимаю,</span> туда идёт трамвай номер 3.<br>— <span class=\'construction\'>Насколько я понимаю,</span> туда можно доехать на трамвае номер 3.';
    var x = document.getElementById("ex6_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6_3() {
    result = '— <span class=\'construction\'>Насколько я понимаю,</span> на электричке.<br>— <span class=\'construction\'>Насколько я понимаю,</span> в Сергиев Посад можно уехать на электричке.';
    var x = document.getElementById("ex6_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6_4() {
    result = '— <span class=\'construction\'>Насколько я понимаю,</span> на красной.<br>— <span class=\'construction\'>Насколько я понимаю,</span> на красной ветке.<br>— <span class=\'construction\'>Насколько я понимаю,</span> он находится на красной ветке.<br>— <span class=\'construction\'>Насколько я понимаю,</span> парк Воробьёвы горы находится на красной ветке.';
    var x = document.getElementById("ex6_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex6_5() {
    result = '— <span class=\'construction\'>Насколько я понимаю,</span> да.<br>— <span class=\'construction\'>Насколько я понимаю,</span> можете.';
    var x = document.getElementById("ex6_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex7_eng() {
    result = "Give advice to the people named in the sentences by suggesting an alternative means of transportation. Use the construction <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> meaning ‘If I were X, I would... / If I were in X’s shoes, ...’.<br>In this construction, PronPoss-Loc is a possessive pronoun in the Locative PronPoss=possessive pronoun, Loc=Locative case), NP-Gen is a noun in the Genitive (NP=noun phrase, Gen=Genitive case), and Cl is a sentence (Cl=clause, sentence). The verb that follows the particle бы is used in the past tense and either masculine or feminine form depending on the sex of the speaker."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Gi råd til de navngitte personene i setningene ved å foreslå alternative transportmidler og ulike måter å ta seg frem på. Bruk konstruksjonen <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> som betyr omtrent ‘hvis X var i Y sitt sted, ... / hvis X var Y, ...’, f.eks. ‘hvis jeg var deg, ...’, ‘hvis jeg var i dine sko’. <br>I denne konstruksjonen er PronPoss-Loc et possessivt pronomen i lokativ kasus (PronPoss=possessivt pronomen, Loc=lokativ kasus), NP-Gen er et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), og Cl er en setning (Cl=setning). Verbet etter partikkelen бы brukes i forttidsform, enten i maskulinum eller femininum, avhengig av talerens kjønn."
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}
function Ex7_1() {
    result = 'от лица женщины:<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехала на метро.<br> <span class=\'construction\'>На месте</span> Паши я <span class=\'construction\'>бы</span> поехала на метро.<br><br>от лица мужчины:<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехал на метро.<br><span class=\'construction\'>На месте</span> Паши я <span class=\'construction\'>бы</span> поехал на метро.';
    var x = document.getElementById("ex7_1_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex7_2() {
    result = 'от лица женщины:<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехала на велосипеде.<br> <span class=\'construction\'>На месте</span> Тани я <span class=\'construction\'>бы</span> поехала на велосипеде.<br><br>от лица мужчины:<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехал на велосипеде.<br><span class=\'construction\'>На месте</span> Тани я <span class=\'construction\'>бы</span> поехал на велосипеде.';
    var x = document.getElementById("ex7_2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex7_3() {
    result = 'от лица женщины:<br><span class=\'construction\'>На</span> вашем <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехала на поезде.<br><br>от лица мужчины:<br><span class=\'construction\'>На</span> вашем <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехал на поезде.';
    var x = document.getElementById("ex7_3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex7_4() {
    result = 'от лица женщины:<br><span class=\'construction\'>На</span> их <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехала на машине.<br><br>от лица мужчины:<br><span class=\'construction\'>На</span> их <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> поехал на машине.';
    var x = document.getElementById("ex7_4_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}
function Ex7_5() {
    result = 'от лица женщины:<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> пошла пешком.<br><br>от лица мужчины:<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> пошёл пешком';
    var x = document.getElementById("ex7_5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex8_eng() {
    result = "Bonus exercise. You and your friends are in a bar discussing various problems. Give your friends advice by telling them what you would do if you were in their shoes. Use the construction <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> meaning ‘If I were X, I would... / If I were walking in X’s shoes, ...’.<br>In this construction, PronPoss-Loc is a possessive pronoun in the Locative PronPoss=possessive pronoun, Loc=Locative case), NP-Gen is a noun in the Genitive (NP=noun phrase, Gen=Genitive case), and Cl is a sentence (Cl=clause, sentence). The verb that follows the particle бы is used in the past tense and either masculine or feminine form depending on the sex of the speaker."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Bonusoppgave. Du og dine venner sitter på en bar og diskuterer problemene deres. Gi råd til vennene dine ved å fortelle dem hva du ville gjøre hvis du var i deres sted. Bruk konstruksjonen <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> som betyr omtrent ‘hvis X var i Y sitt sted, ... / hvis X var Y, ... ’, f.eks. ‘hvis var jeg deg, .../ hvis jeg var i dine sko ...’. <br>I denne konstruksjonen er PronPoss-Loc et possessivt pronomen i lokativ kasus (PronPoss=possessivt pronomen, Loc=lokativ kasus), NP-Gen er et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), og Cl er en setning (Cl=setning). Verbet etter partikkelen бы brukes i forttidsform, enten i maskulinum eller femininum, avhengig av talerens kjønn."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}
function Ex8() {
    result = '1.<br>от лица женщины<br><span class=\construction\'>На месте</span> Сергея я <span class=\'construction\'>бы</span> готовился к экзаменам заранее.<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> не ел фастфуд каждый день.<br>от лица мужчины<br><span class=\'construction\'>На месте</span> Сергея я <span class=\'construction\'>бы</span> готовилась к экзаменам заранее.<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> готовилась к экзаменам заранее.<br><br>2.<br><span class=\'construction\'>На месте</span> Кристины я <span class=\'construction\'>бы</span> приходила на вечеринки с безалкогольными напитками.<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> приходила на вечеринки с безалкогольными напитками.<br>от лица мужчины<br><span class=\'construction\'>На месте</span> Кристины я <span class=\'construction\'>бы</span> приходил на вечеринки с безалкогольными напитками.<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> приходил на вечеринки с безалкогольными напитками.<br><br>3.<br>от лица женщины<br><span class=\'construction\'>На месте</span> Кости я <span class=\'construction\'>бы</span> зарегистрировалась в Тиндере.<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> зарегистрировалась в Тиндере.<br>от лица мужчины<br><span class=\'construction\'>На месте</span> Кости я <span class=\'construction\'>бы</span> зарегистрировался в Тиндере.<br><span class=\'construction\'>На</span> его <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> зарегистрировался в Тиндере.<br><br>4. <br>от лица женщины<br><span class=\'construction\'>На месте</span> Яны я <span class=\'construction\'>бы</span> записывала дедлайны в календарь.<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> записывала дедлайны в календарь.<br>от лица мужчины<br><span class=\'construction\'>На месте</span> Яны я <span class=\'construction\'>бы</span> записывал дедлайны в календарь.<br><span class=\'construction\'>На</span> её <span class=\'construction\'>месте</span> я <span class=\'construction\'>бы</span> записывал дедлайны в календарь.';
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "Come up with your own advice for the people in exercise 8. Use the construction <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> meaning ‘If I were X, I would... / If I were in X’s shoes, ...’."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Gi dine egne råd til personene i oppgave 8. Bruk konstruksjonen <span class=\'construction\'>на PronPoss-Loc месте/на месте NP-Gen Cl бы</span> som betyr omtrent ‘hvis X var i Y sitt sted, ... / hvis X var Y, ... ’, f.eks. ‘hvis var jeg deg, .../ hvis jeg var i dine sko ...’."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_eng() {
    result = "A tourist contacts a travel agency. Depending on your role (tourist or travel agent), buy or sell a tour package. The description of each role is given below. Use the constructions from the list. If you are the tourist, your task is to choose the most attractive tour package from those offered by the travel agent. To do this, the tourist must describe their ideal trip to the travel agent. If you are the travel agent, your task is to sell one of the three tour packages. To do this, the travel agent must convince the tourist to choose one of them."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex10_norw() {
    result = "En turist kontakter et reisebyrå. Avhengig av din rolle (turist eller reiseselger), skal du kjøpe eller selge en reise. Beskrivelse til begge rollene finner du nedenfor. Bruk konstruksjonene i listen. Turistens oppgave er å velge den beste reisen som reiseselgeren tilbyr. For å gjøre dette, må turisten beskrive sin drømmereise for reiseselgeren. Reiseselgerens oppgave er å  overbevise turisten å velge en av de tre reisene."
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex11_eng() {
    result = "You and your friend are discussing the route to get from the place where you are to your destination. Here are maps from the Google Maps app. Discuss all the route options and choose the most optimal one. Consider various factors that can affect your itinerary: price, traffic jams, time, comfort, weather. Use the constructions from the list."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex11_norw() {
    result = "Du og din venn diskuterer hvordan dere skal reise fra plassen hvor dere befinner dere, frem til reisemålet. Foran dere er et kart fra appen Google Maps. Diskuter alle mulige reiseruter og velg den beste. Vurder forskjellige faktorer som kan påvirke deres rutevalg: pris, trafikkorker, tid, bekvemmelighet, vær. Bruk konstruksjonene i listen.  "
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex12_eng() {
    result = "Your friend is going to visit you. Explain to your friend how to get from a) the airport, 2) city center, 3) the university to your home. Offer two options for how to get to your place. Make a dialogue as in exercise 1. Use the constructions you learned in this lesson. "
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function Ex12_norw() {
    result = "Om ikke lenge kommer en av vennene dine på besøk. Forklar hvordan vennen kan ta seg fra a) flyplassen, 2) sentrum, 3) universitetet, og hjem til deg. Foreslå to mulige måter å ta seg hjem til deg. Lag en dialog på samme måte som i oppgave 1. Bruk alle konstruksjonene du har lært i denne leksjonen."
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}