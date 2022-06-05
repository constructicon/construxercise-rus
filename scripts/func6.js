
function Ex210_eng() {
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class='construction'>таким образом, Cl</span> meaning ‘So, ...’. In the slot Cl we can place an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex210_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex210_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class='construction'>таким образом, Cl</span> som betyr omtrent ‘Dermed, ...’. Plassen Cl kan fylles med en hel setning."
    var x = document.getElementById("ex210_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}


function Ex210() {
    var result = ""
    answ_a = "1: Для поездки за границу нужно сделать загранпаспорт, получить визу, купить билеты и спланировать маршрут. <span class='construction'>Таким образом,</span> готовиться к путешествию нужно заранее.<br>";
    answ_b = "2: В Санкт-Петербурге много музеев, парков, дворцов и храмов. За день их все не посмотреть. <span class='construction'>Таким образом,</span> туда лучше ехать на несколько дней.<br>";
    answ_c = "3: Чтобы сделать визу в Норвегию, нужно много времени и денег, а у русских мало и того, и другого. <span class='construction'>Таким образом,</span> в Норвегию русские туристы приезжают нечасто.<br>";
    answ_d = "4: Я потеряла паспорт, а Соня не смогла улететь домой, потому что её рейс отменили. <span class='construction'>Таким образом,</span> мы вместе остались на каникулы в общежитии.<br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d)
    var x = document.getElementById("ex210_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex28_eng() {
    result = "Make a short story about how each of the following friends spent their day. Evaluate whether the day went well by using the construction <span class='construction'>в целом Cl</span> &#39;overall, ...&#39;. We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex28_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex28_norw() {
    result = "Lag en kort fortelling om en dag i livet til en av vennene. Beskriv hvordan dagen var ved hjelp av konstruksjonen <span class='construction'>в целом Cl</span> &#39;alt i alt, ...&#39;. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex28_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex28() {
    result = 'а. Евгения отдохнула, сходила в спа и посмотрела фильм. <span class="construction">В целом</span>, день прошёл хорошо.<br>б. Наташа и Андрей потеряли ключи от квартиры, опоздали на поезд и замёрзли на прогулке. <span class="construction">В целом</span>, день прошёл плохо.<br>в. Дима приготовил вкусный ужин, посмотрел новый фильм и купил новый диван. <span class="construction">В целом</span>, день прошёл хорошо.';
    var x = document.getElementById("ex28_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex29_eng() {
    result = "Choose the appropriate construction. Explain your choice. In each case, make a choice between a construction that draws a conclusion and a construction that adds information."
    var x = document.getElementById("ex29_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex29_norw() {
    result = "Velg riktig konstruksjon. Forklar ditt valg. I hvert tilfelle skal du velge enten en konkluderende konstruksjon, eller en konstruksjon som brukes for å legge til informasjon."
    var x = document.getElementById("ex29_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}


function Ex29() {
    var result = ""
    answ_a = "1: <span class='construction'>Кроме того</span><br>Здесь мы добавляем информацию, а не обобщаем сказанное, поэтому <i>в целом</i> не подходит.<br> = <span class='translation'>Here, we add information, and we do not summarize what has been said. Therefore, we cannot use the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39;.<br> = I dette tilfellet legger vi til informasjon, vi oppsummerer ikke det som er blitt sagt. Derfor passer ikke konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    answ_b = "2: <span class='construction'>В целом</span><br>Здесь мы обобщаем сказанное после предыдущего перечисления аргументов.<br> = <span class='translation'>Here, we summarize what has been said, after providing a line of arguments.<br> = Her oppsummerer vi det som er blitt sagt, etter å ha lagt frem en rekke argumenter.</span><br>";
    answ_c = "3: <span class='construction'>В целом</span><br>Здесь мы обобщаем информацию о сроках и делаем вывод, ничего нового не добавляем. Поэтому <span class='construction'>к тому же</span> не подходит.<br> = <span class='translation'>Here, we summarize the information about the timing and draw a conclusion. We do not add any new information. Therefore, the construction <span class='construction'>К тому же ...</span> &#39;in addition, ... &#39; is not appropriate here.<br> = Her oppsummerer vi informasjonen om frister, og konkluderer uten å legge til ytterligere informasjon. Derfor passer ikke konstruksjonen <span class='construction'>К тому же ...</span> &#39;i tillegg, ... &#39;</span><br>";
    answ_d = "4: <span class='construction'>Кроме того</span><br>Здесь мы добавляем информацию, а не обобщаем сказанное, поэтому <i>в целом</i> не подходит.<br> = <span class='translation'>Here, we add some information and we do not summarize what has been said. Therefore, the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39; is not appropriate here.<br> = Her legger vi til informasjon uten å oppsummere det som er blitt sagt. Derfor passer ikke konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    answ_e = "5: <span class='construction'>В целом</span><br>Здесь мы делаем вывод из сказанного, поэтому подходит <i>в целом</i>.<br> = <span class='translation'>Here, we draw a conclusion from what has been said. Therefore, the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39; is appropriate.<br> = Her legger vi sammen det som er blitt sagt, og deretter konkluderer vi. Derfor passer konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d, answ_e)
    var x = document.getElementById("ex29_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex77_eng() {
    result = "Sign postcards addressed to different people. In each card, write a congratulation using the congratulations constructor. Note that congratulations for different people differ from each other. At the end of each congratulation, use the construction <span class=\'construction\'>словом, Cl</span> meaning ‘In a nutshell, ... ’ or ‘to make a long story short, ...’.<br>In this construction Cl stands for an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex77_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex77_norw() {
    result = "Signer postkortene adresserte til forskjellige folk. Skriv gratulasjoner i hvert postkort ved hjelp av «gratulasjonsgeneratoren». Legg merke til at det er forskjell på gratulasjoner til forskjellige folk. Avslutt hver gratulasjon med konstruksjonen <span class=\'construction\'>словом, Cl</span> som betyr ‘alt i alt / generelt / kort sagt / fortalt ...’.<br>I denne konstruksjonen står Cl for en hel setning (Cl=setning)."
    var x = document.getElementById("ex77_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex48_eng() {
    result = "Connect the phrases by means of the construction <span class=\"construction\">(да) и вообще, Cl</span> meaning ‘for that matter, ...’. In this construction, we can put an entire sentence in the Cl slot (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex48_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex48_norw() {
    result = "Koble sammen setningene ved å bruke konstruksjonen <span class=\"construction\">(да) и вообще, Cl</span> som betyr omtrent ‘generelt, ...’ eller ‘i det hele tatt, ...’ (det er vanskelig å finne et godt tilsvarende uttrykk på norsk). Plassen Cl kan fylles med en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex48_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex48a() {
    var x = document.getElementById("ex48a_input");
    answers = ["мне уже лучше, и вообще, я вас совсем не знаю!", "мне уже лучше, да и вообще, я вас совсем не знаю!"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex48a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex48a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex48a_result").innerHTML = result;
}

function Ex48a() {
    result = "Мне уже лучше, <span class=\"construction\">и вообще,</span> я вас совсем не знаю!<br>Мне уже лучше, <span class=\"construction\">да и вообще,</span> я вас совсем не знаю!";
    var x = document.getElementById("ex48a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex48b() {
    var x = document.getElementById('ex48b_input');
    answers = ["и вообще, тебе надо найти другую работу!", "да и вообще, тебе надо найти другую работу!"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex48b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex48b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex48b_result").innerHTML = result;
}

function Ex48b() {
    result = "<span class=\"construction\">И вообще,</span> тебе надо найти другую работу!<br><span class=\"construction\">Да и вообще,</span> тебе надо найти другую работу!";
    var x = document.getElementById("ex48b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex48c() {
    var x = document.getElementById('ex48c_input');
    answers = ["и вообще, я уже не помню...", "да и вообще, я уже не помню..."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex48c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex48c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex48c_result").innerHTML = result;
}

function Ex48c() {
    result = "<span class=\"construction\">И вообще,</span> я уже не помню...<br><span class=\"construction\">Да и вообще,</span> я уже не помню...";
    var x = document.getElementById("ex48c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex48d() {
    var x = document.getElementById('ex48d_input');
    answers = ["и вообще, у меня всё болит.", "да и вообще, у меня всё болит."]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex48d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex48d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex48d_result").innerHTML = result;
}

function Ex48d() {
    result = "<span class=\"construction\">И вообще,</span> у меня всё болит.<br><span class=\"construction\">Да и вообще,</span> у меня всё болит.";
    var x = document.getElementById("ex48d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex49_eng() {
    result = "You have met a friend. Tell your friend how you are doing. Use the answer options provided in the table or come up with your own examples. When used in the order in the table, the constructions indicate a «scale» of problems."
    var x = document.getElementById("ex49_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex49_norw() {
    result = "Du har truffet en venn. Fortell din venn om hvordan du har det. Bruk svarsalternativene i tabellen, eller finn på egne eksempler. Rekken av konstruksjoner i tabellen danner en slags «skale» for å beskrive problemer. "
    var x = document.getElementById("ex49_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex56_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex56_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex56_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen."
    var x = document.getElementById("ex56_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex56a() {
    var x = document.getElementById("ex56a_input");
    answers = ["в"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно"
        document.getElementById("ex56a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex56a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex56a_result").innerHTML = result;
}

function Ex56a() {
    result = "в"
    var x = document.getElementById("ex56a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex56b() {
    var x = document.getElementById('ex56b_input');
    answers = ["г"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex56b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex56b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex56b_result").innerHTML = result;
}

function Ex56b() {
    result = "г"
    var x = document.getElementById("ex56b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex56c() {
    var x = document.getElementById('ex56c_input');
    answers = ["б"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex56c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex56c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex56c_result").innerHTML = result;
}

function Ex56c() {
    result = "б"
    var x = document.getElementById("ex56c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex56d() {
    var x = document.getElementById('ex56d_input');
    answers = ["а"]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex56d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex56d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex56d_result").innerHTML = result;
}

function Ex56d() {
    result = "а"
    var x = document.getElementById("ex56d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex82_eng() {
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class='construction'>Cl,и на том спасибо</span> meaning ‘it’s something at least; Thank Heaven for small favors!’ We can place an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex82_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex82_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class='construction'>Cl,и на том спасибо</span>. som betyr omtrent ‘la oss være takknemlig for lite’ eller ‘heldigvis’ (den var litt vrien, vanskelig å finne et godt tilsvarende uttrykk på norsk). Plassen Cl kan fylles med en hel setning. "
    var x = document.getElementById("ex82_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex82() {
    var x = document.getElementById('ex82_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4д, 5б") {
        result = "Правильно";
        document.getElementById("ex82_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex82_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex82_result").innerHTML = result;
}

function Ex82() {
    result = "1в, 2а, 3г, 4д, 5б<br><br>Соня опять пересолила суп. Со сметаной есть можно, <span class='construction'>и на том спасибо</span>.<br>Паша снова съел шоколадку вместо ужина. Что-то поел, <span class='construction'>и на том спасибо</span>.<br>Я выпил(а) уже 3 кружки кофе за утро. Не пиво, <span class='construction'>и на том спасибо</span>.<br>У моего брата сильная аллергия на цитрусовые. Он может есть остальные фрукты, <span class='construction'>и на том спасибо</span>.<br> Муж опять забыл убрать молоко в холодильник, и оно испортилось. Никто это молоко не выпил, <span class='construction'>и на том спасибо</span>";
    var x = document.getElementById("ex82_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex84_eng() {
    result = "Complete a conversation by adding a third line. Use the short form of the adjective in parentheses (). Use the construction <span class=\'construction\'>вот и Pred!</span> ‘then X’ (for example Then fine!). In this construction, Pred stands for a predicative, that is a short form of an adjective."
    var x = document.getElementById("ex84_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex84_norw() {
    result = "Fullfør samtalen ved å legge til en tredje replikk. Bruk kortform av adjektivet i parentes. Bruk konstruksjonen <span class=\'construction\'>вот и Pred!</span> som kan oversettes med enten ‘det er X’, ‘hvor X’ eller ‘så X’ (for eksempel: Det er fint! Hvor herlig! Så bra!). I denne konstruksjonen står Pred for predikativ, det vil si adjektivets kortform."
    var x = document.getElementById("ex84_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex84() {
    var x = document.getElementById('ex84a_input');
    if (x.value.toLowerCase() == "Вот и отлично!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex84a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex84a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex84a_result").innerHTML = result;

    var x = document.getElementById('ex84b_input');
    if (x.value.toLowerCase() == "Вот и замечательно!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex84b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex84b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex84b_result").innerHTML = result;

    var x = document.getElementById('ex84c_input');
    if (x.value.toLowerCase() == "Вот и прекрасно!".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex84c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex84c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex84c_result").innerHTML = result;
}

function Ex84() {
    result = 'a. <span class=\'construction\'>Вот и</span> отлично!<br> б. <span class=\'construction\'>Вот и</span> замечательно!<br> в. <span class=\'construction\'>Вот и</span> прекрасно!';
    var x = document.getElementById("ex84_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex85_eng() {
    result = "You and your interlocutor must decide what to cook for a festive dinner. Discuss your meal plan with him (or her). Use the construction <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘and concerning X, ...’ and the construction <span class=\'construction\'>вот и Pred!</span> ‘then X’ (for example Then fine!). <br>In these constructions, NP-Gen stands for a noun in the Genitive case (NP=noun phrase, Gen=Genitive case), Cl means an entire sentence (Cl=clause, sentence), Pred means a predicative, that is a short form of an adjective, and parentheses () indicate an optional element of a construction.\n"
    var x = document.getElementById("ex85_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex85_norw() {
    result = "Du og din samtalepartner må bestemme hva dere skal lage til en festlig middag. Diskuter forskjellige matretter med din samtalepartner ved å bruke konstruksjonene <span class=\'construction\'>(а) насчёт NP-Gen – Cl</span> ‘og når det gjelder X, ... ’ og <span class=\'construction\'>вот и Pred!</span> ‘det er X’, ‘hvor X’, eller ‘så X’ (For eksempel: Det er fint! Hvor herlig! Så bra!). <br>I disse konstruksjonene står NP-Gen for et substantiv i genitiv kasus (NP=nominalfrase, Gen=genitiv kasus), Cl betyr en hel setning (Cl=setning), Pred betyr predikativ, det vil si adjektivets kortform, mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex85_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex85() {
    result = '1) — <span class=\'construction\'>А насчёт</span> закусок — что мы будем готовить?<br>2) — <span class=\'construction\'>А насчёт</span> супа — что мы будем готовить?<br>3) — <span class=\'construction\'>А насчёт</span> горячего — что мы будем готовить?<br>4) — <span class=\'construction\'>А насчёт</span> гарнира — что мы будем готовить?<br>5) — <span class=\'construction\'>А насчёт</span> десерта — что мы будем готовить?';
    var x = document.getElementById("ex85_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex87_eng() {
    result = "You are a restaurant critic and have to evaluate the dishes prepared by a young chef. You found a problem with each dish. Explain what exactly the chef did wrong when making the food. Use the notes provided below and the construction <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘the point is not in X but in Y’.<br> In this construction, Cop is a copula verb быть (Cop =copula verb), NP-Loc is a noun in the Locative case (NP=noun phrase, Loc=Locative case), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex87_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex87_norw() {
    result = "Du er restaurantanmelder og skal vurdere rettene til en ung kokk. Du fant et problem med hver rett. Forklar akkurat hva som gikk galt når kokken laget maten. Bruk notatene nedenfor og konstruksjonen <span class=\'construction\'>дело Cop не в NP-Loc (, а в NP-Loc)</span> ‘det gjelder ikke X / det handler ikke om X, men Y’.<br> I denne konstruksjonen står Cop for kopula-verbet быть (Cop=kopula-verb), NP-Loc er et substantiv i lokativ kasus (NP=nominalfrase, Loc=lokativ kasus), mens parentesene () indikerer en valgfri del av en konstruksjon. Hvis man bruker eksempelet nedenfor ville jeg sagt på norsk: «Det er ikke krydringen som er problemet, men kjøttet»."
    var x = document.getElementById("ex87_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex87a() {
    var x = document.getElementById("ex87a_input");
    if (x.value.toLowerCase() == "Яблочный пирог плохо получился. И дело не в муке, а во времени приготовления. Пирог не пропёкся.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex87a_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex87a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex87a_result").innerHTML = result;
}

function Ex87a() {
    result = 'Яблочный пирог плохо получился. <span class=\'construction\'>И дело не в</span> муке, <span class=\'construction\'>а во</span> времени приготовления. Пирог не пропёкся.';
    var x = document.getElementById("ex87a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex87b() {
    var x = document.getElementById("ex87b_input");
    if (x.value.toLowerCase() == "Блины плохо получились. И дело не в тесте, а в масле. Масла положили слишком много.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex87b_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex87b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex87b_result").innerHTML = result;
}

function Ex87b() {
    result = 'Блины плохо получились. <span class=\'construction\'>И дело не в</span> тесте, <span class=\'construction\'>а в</span> масле. Масла положили слишком много.';
    var x = document.getElementById("ex87b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex87c() {
    var x = document.getElementById("ex87c_input");
    if (x.value.toLowerCase() == "Шоколадный торт плохо получился. И дело не в сливках для крема, а в сахаре. Нужна сахарная пудра.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex87c_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex87c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex87c_result").innerHTML = result;
}

function Ex87c() {
    result = 'Шоколадный торт плохо получился. <span class=\'construction\'>И дело не в</span> сливках для крема, <span class=\'construction\'>а в</span> сахаре. Нужна сахарная пудра.';
    var x = document.getElementById("ex87c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex87d() {
    var x = document.getElementById("ex87d_input");
    if (x.value.toLowerCase() == "Эспрессо плохо получился. И дело не в сорте кофе, а в обжарке. Она слишком светлая.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex87d_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex87d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex87d_result").innerHTML = result;
}

function Ex87d() {
    result = 'Эспрессо плохо получился. <span class=\'construction\'>И дело не в</span> сорте кофе, <span class=\'construction\'>а в</span> обжарке. Она слишком светлая.';
    var x = document.getElementById("ex87d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function check_Ex87e() {
    var x = document.getElementById("ex87e_input");
    if (x.value.toLowerCase() == "Овощной салат плохо получился. И дело не в овощах, а в оливковом масле. Оно слишком старое.".toLowerCase()) {
        result = "Правильно"
        document.getElementById("ex87e_result").style.backgroundColor = "#6ef184";
    } else {
        result = "Неправильно"
        document.getElementById("ex87e_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex87e_result").innerHTML = result;
}

function Ex87e() {
    result = 'Овощной салат плохо получился. <span class=\'construction\'>И дело не в</span> овощах, <span class=\'construction\'>а в</span> оливковом масле. Оно слишком старое.';
    var x = document.getElementById("ex87e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function Ex112_eng() {
    result = 'You are the owner of a fashion brand, and you receive a prestigious award for your work. At the awards ceremony, you give a speech. At the end of this speech, you use the construction <span class="construction">в заключение Cl</span> meaning ‘In conclusion / Lastly / Finally, ...’. In this construction, we can put an entire sentence in the Cl slot (Cl=clause, sentence). Build sentences from the parts given in the table.'
    var x = document.getElementById("ex112_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex112_norw() {
    result = 'Du eier et moteselskap og har vunnet en prestisjefylt pris for ditt arbeid. På prisutdelingsseremonien holder du en tale. På slutten av talen bruker du konstruksjonen <span class="construction">в заключение Cl</span> som betyr omtrent ‘til slutt ...’. I denne konstruksjonen kan plassen Cl fylles med en hel setning (Cl=setning). Lag setninger ved å koble sammen de foreslåtte delene i tabellen.'
    var x = document.getElementById("ex112_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}



function Ex113_eng() {
    result = 'Rewrite the information letter from a visa application center using the construction <span class="construction">в-NumOrd-ых, XP/Cl</span>. In this construction, NumOrd stands for an ordinal numeral that forms the words <span class="construction">во-первых</span> &#39;firstly&#39;, <span class="construction">во-вторых</span> &#39;secondly&#39;, <span class="construction">в- третьих</span> &#39;thirdly&#39;, <span class="construction">в-четвёртых</span> &#39;fourthly&#39;. In the place of XP/Cl we locate a phrase (XP) or an entire sentence (Cl=clause).'
    var x = document.getElementById("ex113_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex113_norw() {
    result = 'Omskriv informasjonsbrevet fra visumsenteret ved å bruke konstruksjonen <span class="construction">в-NumOrd-ых, XP/Cl</span>. I denne konstruksjonen betyr NumOrd ordenstall som brukes for å danne uttrykkene <span class="construction">во-первых</span> &#39;for det første&#39;, <span class="construction">во-вторых</span> &#39;for det andre&#39;, <span class="construction">в- третьих</span> &#39;for det tredje&#39;, <span class="construction">в-четвёртых</span> &#39;for det fjerde&#39;. Etter ordenstallet følger enten en frase (XP=frase) eller en hel setning (Cl=setning).'
    var x = document.getElementById("ex113_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex113a() {
    result = '<span class="construction">Итак,</span> в этом сезоне женщины будут носить короткие светлые брюки (бежевые и белые).<br><span class="construction">Итак,</span> в этом сезоне будут в моде джинсовые рубашки и белые кроссовки.<br><span class="construction">Итак,</span> в этом сезоне будет модно носить туфли на высоких каблуках.';
    var x = document.getElementById("ex113a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function Ex113b() {
    result = '<span class="construction">Итак,</span> в этом сезоне мужчины будут носить длинные пиджаки с джинсами.<br><span class="construction">Итак,</span> в этом сезоне будут в моде синие жилетки и брюки в клеточку.<br><span class="construction">Итак,</span> в этом сезоне будет модно носить белые рубашки.';
    var x = document.getElementById("ex113b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
