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
    result = 'Compose a text, using the construction <span class="construction">в-NumOrd-ых, XP/Cl</span>. In this construction, NumOrd stands for an ordinal numeral that forms the words <span class="construction">во-первых</span> &#39;firstly&#39;, <span class="construction">во-вторых</span> &#39;secondly&#39;, <span class="construction">в- третьих</span> &#39;thirdly&#39;, <span class="construction">в-четвёртых</span> &#39;fourthly&#39;. In the slot XP/Cl we can place a phrase or an entire sentence.'
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex2_norw() {
    result = 'Lag en tekst ved å bruke konstruksjonen <span class="construction">в-NumOrd-ых, XP/Cl</span>. I denne konstruksjonen betyr NumOrd ordenstall som brukes for å danne uttrykkene <span class="construction">во-первых</span> &#39;for det første&#39;, <span class="construction">во-вторых</span> &#39;for det andre&#39;, <span class="construction">в- третьих</span> &#39;for det tredje&#39;, <span class="construction">в-четвёртых</span> &#39;for det fjerde&#39;. Etter ordenstallet følger enten en frase (XP=frase) eller en hel setning (Cl=setning).'
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex2() {
    result = 'a. Чтобы поехать в Россию, нужно, <span class="construction">во-первых</span>, сделать визу, <span class="construction">во-вторых</span>, купить билеты, <span class="construction">в- третьих</span>, забронировать отель, и <span class="construction">в-четвёртых</span> собрать чемодан.<br> б. Я хочу поехать в Россию по многим причинам. <span class="construction">Во-первых</span>, в России интересные музеи. <span class="construction">Во-вторых</span>, там красивая архитектура. <span class="construction">В-третьих</span>, много хороших людей. <span class="construction">В-четвёртых</span>, там вкусная еда.<br>в. У имени Александр есть много вариантов. <span class="construction">Во-первых</span>, обычно используют сокращённый вариант этого имени, Саша. <span class="construction">Во-вторых</span>, есть ещё другие варианты имени Александр — Шура, Саня, Алик. <span class="construction">В-третьих</span>, Саша — это не только мужское, но и женское имя (Александра).';
    var x = document.getElementById("ex2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex3_eng() {
    result = 'Rewrite the information letter from a visa application center using the construction <span class="construction">в-NumOrd-ых, XP/Cl</span>. In this construction, NumOrd stands for an ordinal numeral that forms the words <span class="construction">во-первых</span> &#39;firstly&#39;, <span class="construction">во-вторых</span> &#39;secondly&#39;, <span class="construction">в- третьих</span> &#39;thirdly&#39;, <span class="construction">в-четвёртых</span> &#39;fourthly&#39;. In the place of XP/Cl we locate a phrase (XP) or an entire sentence (Cl=clause).'
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex3_norw() {
    result = 'Omskriv informasjonsbrevet fra visumsenteret ved å bruke konstruksjonen <span class="construction">в-NumOrd-ых, XP/Cl</span>. I denne konstruksjonen betyr NumOrd ordenstall som brukes for å danne uttrykkene <span class="construction">во-первых</span> &#39;for det første&#39;, <span class="construction">во-вторых</span> &#39;for det andre&#39;, <span class="construction">в- третьих</span> &#39;for det tredje&#39;, <span class="construction">в-четвёртых</span> &#39;for det fjerde&#39;. Etter ordenstallet følger enten en frase (XP=frase) eller en hel setning (Cl=setning).'
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex3() {
    result = 'Добрый день! Вы записаны в визовый центр на 12:00.<br>Вам нужно иметь с собой, <span class="construction">во-первых</span>, загранпаспорт, <span class="construction">во-вторых</span>, сертификат о вакцинации, <span class="construction">в-третьих</span>, подтверждение о бронировании отеля, <span class="construction">в-четвёртых</span>, две фотографии.<br>С уважением,<br>Визовый центр.';
    var x = document.getElementById("ex3_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = 'You are an employee of the embassy. Tell a tourist who wants to go to Russia what he needs to do to get a visa. Use the figure below, the words «надо», «нужно» and «необходимо» all meaning &#39;necessary&#39; and the construction <span class="construction">в-NumOrd-ых, XP/Cl</span>.'
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex4_norw() {
    result = 'Du er ansatt på ambassaden. Forklar for en turist som ønsker å besøke Russland, hva han (eller hun) må gjøre for å få visum. Se på skjemaet nedenfor, og bruk ordene «надо», «нужно» og «необходимо», som alle betyr &#39;nødvendig&#39;. Bruk også konstruksjonen <span class="construction">в-NumOrd-ых, XP/Cl</span>.'
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex5_eng() {
    result = "Connect the phrases by choosing the matching continuation. Use the construction <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span>&#39;On the one hand, ... On the other hand, ...&#39;. The word «стороны» in the second part of this construction is often omitted, therefore in the formula of this construction this word is placed in parentheses (). We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    // alert(x.style.display)
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex5_norw() {
    result = "Fullfør setningene ved å velge delene som passer sammen. Bruk konstruksjonen <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span>&#39;På den ene siden, ... På den andre siden, ...&#39;. I denne konstruksjonens andre halvdel er ofte ordet «стороны» utelatt, derfor står den i parenteser i formelen. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex5() {
    var x = document.getElementById('ex5_input');
    if (x.value.toLowerCase() == "1в, 2д, 3а, 4г, 5б") {
        result = "Правильно";
        document.getElementById("ex5_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_result").innerHTML = result;
}

function Ex5() {
    result = "1в, 2д, 3а, 4г, 5б<br><span class='construction'>С одной стороны</span>, в Москве зимой очень красиво. <span class='construction'>С другой стороны</span>, там холодно.<br><span class='construction'>С одной стороны</span>, путешествовать интересно. <span class='construction'>С другой стороны</span>, для путешествий нужно много времени и денег.<br><span class='construction'>С одной стороны</span>, есть много сладкого вредно. <span class='construction'>С другой стороны</span>, сладкое — это очень вкусно.<br><span class='construction'>С одной стороны</span>, учить русский язык сложно, <span class='construction'>с другой стороны</span>, очень интересно.<br><span class='construction'>С одной стороны</span>, смотреть сериалы весело. <span class='construction'>С другой стороны</span>, это прокрастинация.<br>В каждом случае, слово «стороны» после слова «другой» можно не использовать.";
    var x = document.getElementById("ex5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex6_eng() {
    result = "Anton went to Greece on vacation. After the trip, he decided to write a review on the website of the hotel. He liked some things, but disliked other things. Anton made some notes. Help him to write the review by connecting the phrases. Use the construction <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;On the one hand, ... On the other hand, ...&#39;. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex6_norw() {
    result = "Anton har vært på ferie i Hellas. Etter reisen bestemte han seg for å skrive en anmeldelse på hotellets hjemmeside. Han likte noen ting, mens noen ting likte han ikke. Anton tok noen notater. Hjelp ham å skrive anmeldelsen ved å koble sammen setningene. Bruk konstruksjonen <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;På den ene siden, ... På den andre siden, ...&#39;. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex6() {
    var x = document.getElementById('ex6a_input');
    answers = ["С одной стороны, в отеле была хорошая еда. С другой стороны, плохо убирали в номере.".toLowerCase(),
                "С одной стороны, в отеле была хорошая еда. С другой, плохо убирали в номере.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6a_result").innerHTML = result;

    var x = document.getElementById('ex6b_input');
    answers = ["С одной стороны, у отеля отдельный пляж. С другой стороны, там всегда было много людей.".toLowerCase(),
               "С одной стороны, у отеля отдельный пляж. С другой, там всегда было много людей.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6b_result").innerHTML = result;

    var x = document.getElementById('ex6c_input');
    answers = ["С одной стороны, вечером были весёлые вечеринки. С другой стороны, музыка всю ночь мешала спать.".toLowerCase(),
                "С одной стороны, вечером были весёлые вечеринки. С другой, музыка всю ночь мешала спать.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6c_result").innerHTML = result;

    var x = document.getElementById('ex6d_input');
    answers = ["С одной стороны, находиться в отеле было приятно, с другой стороны, иногда некомфортно.".toLowerCase(),
                "С одной стороны, находиться в отеле было приятно, с другой, иногда некомфортно.".toLowerCase()]
    if (answers.includes(x.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex6d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6d_result").innerHTML = result;
}

function Ex6() {
    result = "1: <span class='construction'>С одной стороны</span>, в отеле была хорошая еда. <span class='construction'>С другой стороны</span>, плохо убирали в номере.<br><span class='construction'>С одной стороны</span>, в отеле была хорошая еда. <span class='construction'>С другой</span>, плохо убирали в номере.<br>2: <span class='construction'>С одной стороны</span>, у отеля отдельный пляж. <span class='construction'>С другой стороны</span>, там всегда было много людей.<br><span class='construction'>С одной стороны</span>, у отеля отдельный пляж. <span class='construction'>С другой</span>, там всегда было много людей.<br>3: <span class='construction'>С одной стороны</span>, вечером были весёлые вечеринки. <span class='construction'>С другой стороны</span>, музыка всю ночь мешала спать.<br><span class='construction'>С одной стороны</span>, вечером были весёлые вечеринки. <span class='construction'>С другой</span>, музыка всю ночь мешала спать.<br>4: <span class='construction'>С одной стороны</span>, находиться в отеле было приятно, <span class='construction'>с другой стороны</span>, иногда некомфортно.<br><span class='construction'>С одной стороны</span>, находиться в отеле было приятно, <span class='construction'>с другой</span>, иногда некомфортно.";
    var x = document.getElementById("ex6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex7_eng() {
    result = 'Connect two sentences by using the construction <span class="construction">что касается NP-Gen, то Cl</span> &#39;as for ..., ...&#39;. In this construction, <span class="construction">NP-Gen</span> strands for a noun in the Genitive case (NP=noun phrase). Cl is a slot where we can place an entire sentence (Cl= clause, sentence).'
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex7_norw() {
    result = 'Koble sammen og lag en setning av to, ved å bruke konstruksjonen <span class="construction">что касается NP-Gen, то Cl</span> &#39;når det gjelder ..., ...&#39;. I denne konstruksjonen står <span class="construction">NP-Gen</span> for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning).'
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex7() {
    result = "1. Студенческий билет у вас уже есть. <span class='construction'>Что касается</span> справки об обучении, <span class='construction'>то</span> её можно заказать в учебном офисе.<br> 2. Петя и Катя получили визу в Норвегию. <span class='construction'>Что касается</span> Кирилла, <span class='construction'>то</span> он пока ждёт ответа из посольства.<br> 3. С пропуском вы можете зайти в любое здание университета. <span class='construction'>Что касается</span> студенческого билета, <span class='construction'>то</span> он будет нужен, если вы хотите купить билет в музей со скидкой.<br> 4. Фотографию для визы нужно принести с собой. <span class='construction'>Что касается</span> отпечатков пальцев, <span class='construction'>то</span> их у вас снимут в посольстве.";
    var x = document.getElementById("ex7_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex8_eng() {
    result = "Make a short story about how each of the following friends spent their day. Evaluate whether the day went well by using the construction <span class='construction'>в целом Cl</span> &#39;overall, ...&#39;. We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8_norw() {
    result = "Lag en kort fortelling om en dag i livet til en av vennene. Beskriv hvordan dagen var ved hjelp av konstruksjonen <span class='construction'>в целом Cl</span> &#39;alt i alt, ...&#39;. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8() {
    result = 'а. Евгения отдохнула, сходила в спа и посмотрела фильм. <span class="construction">В целом</span>, день прошёл хорошо.<br>б. Наташа и Андрей потеряли ключи от квартиры, опоздали на поезд и замёрзли на прогулке. <span class="construction">В целом</span>, день прошёл плохо.<br>в. Дима приготовил вкусный ужин, посмотрел новый фильм и купил новый диван. <span class="construction">В целом</span>, день прошёл хорошо.';
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex9_eng() {
    result = "Choose the appropriate construction. Explain your choice. In each case, make a choice between a construction that draws a conclusion and a construction that adds information."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex9_norw() {
    result = "Velg riktig konstruksjon. Forklar ditt valg. I hvert tilfelle skal du velge enten en konkluderende konstruksjon, eller en konstruksjon som brukes for å legge til informasjon."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

// function check_Ex8() {
//     var x = document.getElementById('ex9a_input');
//     answers = ["а, в", "а", "в"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9a_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9a_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9a_result").innerHTML = result;

//     var x = document.getElementById('ex9b_input');
//     answers = ["а, б, в, г", "а", "б", "в", "г"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9b_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9b_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9b_result").innerHTML = result;

//     var x = document.getElementById('ex9c_input');
//     answers = ["а, в", "а", "в"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9c_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9c_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9c_result").innerHTML = result;

//     var x = document.getElementById('ex9d_input');
//     answers = ["а, б, в, г", "а", "б", "в", "г"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9d_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9d_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9d_result").innerHTML = result;

//     var x = document.getElementById('ex9e_input');
//     answers = ["а, б, в, г", "а", "б", "в", "г"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9e_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9e_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9e_result").innerHTML = result;

//     var x = document.getElementById('ex9f_input');
//     answers = ["а, б, в, г", "а", "б", "в", "г"]
//     if (answers.includes(x.value.toLowerCase())) {
//         result = "Правильно";
//         document.getElementById("ex9f_result").style.backgroundColor = "#6ef184";
//     } else {
//         result = 'Неправильно';
//         document.getElementById("ex9f_result").style.backgroundColor = "#ee5151";
//     }
//     document.getElementById("ex9f_result").innerHTML = result;

// }

function Ex9() {
    var result = ""
    answ_a = "1: <span class='construction'>Кроме того</span><br>Здесь мы добавляем информацию, а не обобщаем сказанное, поэтому <i>в целом</i> не подходит.<br> = <span class='translation'>Here, we add information, and we do not summarize what has been said. Therefore, we cannot use the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39;.<br> = I dette tilfellet legger vi til informasjon, vi oppsummerer ikke det som er blitt sagt. Derfor passer ikke konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    answ_b = "2: <span class='construction'>В целом</span><br>Здесь мы обобщаем сказанное после предыдущего перечисления аргументов.<br> = <span class='translation'>Here, we summarize what has been said, after providing a line of arguments.<br> = Her oppsummerer vi det som er blitt sagt, etter å ha lagt frem en rekke argumenter.</span><br>";
    answ_c = "3: <span class='construction'>В целом</span><br>Здесь мы обобщаем информацию о сроках и делаем вывод, ничего нового не добавляем. Поэтому <span class='construction'>к тому же</span> не подходит.<br> = <span class='translation'>Here, we summarize the information about the timing and draw a conclusion. We do not add any new information. Therefore, the construction <span class='construction'>К тому же ...</span> &#39;in addition, ... &#39; is not appropriate here.<br> = Her oppsummerer vi informasjonen om frister, og konkluderer uten å legge til ytterligere informasjon. Derfor passer ikke konstruksjonen <span class='construction'>К тому же ...</span> &#39;i tillegg, ... &#39;</span><br>";
    answ_d = "4: <span class='construction'>Кроме того</span><br>Здесь мы добавляем информацию, а не обобщаем сказанное, поэтому <i>в целом</i> не подходит.<br> = <span class='translation'>Here, we add some information and we do not summarize what has been said. Therefore, the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39; is not appropriate here.<br> = Her legger vi til informasjon uten å oppsummere det som er blitt sagt. Derfor passer ikke konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    answ_e = "5: <span class='construction'>В целом</span><br>Здесь мы делаем вывод из сказанного, поэтому подходит <i>в целом</i>.<br> = <span class='translation'>Here, we draw a conclusion from what has been said. Therefore, the construction <span class='construction'>в целом, Cl</span> &#39;overall, ...&#39; is appropriate.<br> = Her legger vi sammen det som er blitt sagt, og deretter konkluderer vi. Derfor passer konstruksjonen <span class='construction'>в целом, Cl</span> &#39;alt i alt, ...&#39;.</span><br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d, answ_e)
    var x = document.getElementById("ex9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex10_eng() {
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class='construction'>таким образом, Cl</span> meaning ‘So, ...’. In the slot Cl we can place an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex10_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Bruk konstruksjonen <span class='construction'>таким образом, Cl</span> som betyr omtrent ‘Dermed, ...’. Plassen Cl kan fylles med en hel setning."
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex10() {
    var result = ""
    answ_a = "1: Для поездки за границу нужно сделать загранпаспорт, получить визу, купить билеты и спланировать маршрут. <span class='construction'>Таким образом,</span> готовиться к путешествию нужно заранее.<br>";
    answ_b = "2: В Санкт-Петербурге много музеев, парков, дворцов и храмов. За день их все не посмотреть. <span class='construction'>Таким образом,</span> туда лучше ехать на несколько дней.<br>";
    answ_c = "3: Чтобы сделать визу в Норвегию, нужно много времени и денег, а у русских мало и того, и другого. <span class='construction'>Таким образом,</span> в Норвегию русские туристы приезжают нечасто.<br>";
    answ_d = "4: Я потеряла паспорт, а Соня не смогла улететь домой, потому что её рейс отменили. <span class='construction'>Таким образом,</span> мы вместе остались на каникулы в общежитии.<br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d)
    var x = document.getElementById("ex10_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}



function Ex11_eng() {
    result = "You and your friend are packing a suitcase for a trip. Below you see a list of things. Your suitcase is rather small, so you can take only the most necessary things. Discuss with your friend what things you will take on this trip. The table outlines four different trips. Discuss each trip separately."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_norw() {
    result = "Du og din venn pakker kofferten til en reise. Nedenfor er en liste med gjenstander. Kofferten er liten, derfor kan dere ta med kun de absolutt viktigste tingene. Diskuter med din venn om hvilke ting fra listen dere skal ta med. I tabellen finnes fire forskjellige reiseplaner. Diskuter hver reiseplan separat."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_comment() {
    result = "Формат задания: в парах. = Task format: in pairs."
    var x = document.getElementById("ex11_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex12_eng() {
    result = "Tell your friends about your trip, about what you liked and what you disliked. Follow the template below."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12_norw() {
    result = "Fortell vennene dine om din reise. Fortell hva du likte og hva du ikke likte. Følg planen nedenfor."
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12() {
    result = "Моя поездка в Москву прошла отлично. <span class='construction'>Во-первых</span>, я наконец увидел Красную Площадь, она очень красивая. <span class='construction'>Во-вторых</span>, я нашел несколько новых друзей. <span class='construction'>В целом</span>, Москва — это очень большой город, по которому всегда интересно гулять. <span class='construction'>Что касается</span> ресторанов, <span class='construction'>то</span> в них я ходил редко. <span class='construction'>С одной стороны</span>, еда там хорошая, а <span class='construction'>с другой стороны</span>, всё дорого. <span class='construction'>Таким образом</span>, я очень доволен поездкой и хочу приехать в Москву еще раз!"
    var x = document.getElementById("ex12_ans")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_eng() {
    result = "Bonus exercise. Connect the tourist attractions in Russia (1-4) with the facts about them (а-г). Use the construction <span class='construction'>что касается NP-Gen, то Cl</span> &#39;concerning ..., ...&#39;. In this construction, NP-Gen stands for a noun in the Genitive case (NP=noun phrase; Gen=Genitive case). We can put an entire sentence in the Cl slot (Cl=clause, sentence)."
    var x = document.getElementById("ex13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_norw() {
    result = "Bonusoppgave. Koble sammen Russlands severdigheter (1-4) med faktaene som passer (а-г). Bruk konstruksjonen <span class='construction'>что касается NP-Gen, то Cl</span> &#39;når det gjelder ..., ...&#39;. I denne konstruksjonen står NP-Gen for et substantiv (NP=nominalfrase) i genitiv kasus. Plassen Cl kan fylles med en hel setning (Cl=setning)."
    var x = document.getElementById("ex13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13() {
    result = "<span class='construction'>Что касается</span> Красной площади в Москве, <span class='construction'>то</span> это главная площадь Москвы, которая расположена рядом с Московским Кремлём на берегу Москвы-реки.<br> <span class='construction'>Что касается</span> Царь-колокола в Москве, <span class='construction'>то</span> этот огромный колокол весит 202 тонны и был повреждён во время большого пожара в Москве в 1737 году.<br> <span class='construction'>Что касается</span> Исаакиевского собора в Санкт-Петербурге, <span class='construction'>то</span> это самый крупный православный храм Санкт-Петербурга, который сейчас является музеем и одним из символов города.<br> <span class='construction'>Что касается</span> Зимнего дворца в Санкт-Петербурге, <span class='construction'>то</span> раньше это была резиденция российского императора, а сейчас в этом здании находится музей «Государственный Эрмитаж»."
    var x = document.getElementById("ex13_ans")
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        
    }
}