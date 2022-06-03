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
    result = 'You are the owner of a fashion brand, and you receive a prestigious award for your work. At the awards ceremony, you give a speech. At the end of this speech, you use the construction <span class="construction">в заключение Cl</span> meaning ‘In conclusion / Lastly / Finally, ...’. In this construction, we can put an entire sentence in the Cl slot (Cl=clause, sentence). Build sentences from the parts given in the table.'
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex2_norw() {
    result = 'Du eier et moteselskap og har vunnet en prestisjefylt pris for ditt arbeid. På prisutdelingsseremonien holder du en tale. På slutten av talen bruker du konstruksjonen <span class="construction">в заключение Cl</span> som betyr omtrent ‘til slutt ...’. I denne konstruksjonen kan plassen Cl fylles med en hel setning (Cl=setning). Lag setninger ved å koble sammen de foreslåtte delene i tabellen.'
    var x = document.getElementById("ex2_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
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

function Ex3a() {
    result = '<span class="construction">Итак,</span> в этом сезоне женщины будут носить короткие светлые брюки (бежевые и белые).<br><span class="construction">Итак,</span> в этом сезоне будут в моде джинсовые рубашки и белые кроссовки.<br><span class="construction">Итак,</span> в этом сезоне будет модно носить туфли на высоких каблуках.';
    var x = document.getElementById("ex3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3b() {
    result = '<span class="construction">Итак,</span> в этом сезоне мужчины будут носить длинные пиджаки с джинсами.<br><span class="construction">Итак,</span> в этом сезоне будут в моде синие жилетки и брюки в клеточку.<br><span class="construction">Итак,</span> в этом сезоне будет модно носить белые рубашки.';
    var x = document.getElementById("ex3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = 'Build sentences in which you list several objects. At the end of each sentence, use the constructions <span class="construction">XP/Cl, XP/Cl и так далее/и т. д.</span> ‘... and so on’ and <span class="construction">NP, NP и тому подобное/и т. п.</span> ‘... and the like / etc.’. We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence). NP stands for a noun (NP=noun phrase).'
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex4_norw() {
    result = 'Lag setninger hvor du lister flere objekter. Bruk konstruksjonene <span class="construction">XP/Cl, XP/Cl и так далее/и т. д.</span> ‘... og så videre / osv.’ og <span class="construction">NP, NP и тому подобное/и т. п.</span> ‘... og lignende / og så videre / osv.’ i slutten av hver setning. Plassen XP/Cl kan fylles med en frase eller en hel setning. (XP=frase, Cl=setning). NP betyr substantiv (NP=nominalfrase).'
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex4a() {
    result = 'Ваня любит носить одежду тёплых цветов: красного, оранжевого, коричневого, жёлтого <span class="construction">и так далее</span>.<br>Ваня любит носить одежду тёплых цветов: красного, оранжевого, коричневого, жёлтого <span class="construction">и тому подобное</span>.';
    var x = document.getElementById("ex4a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4b() {
    result = 'Моя сестра всегда носит одежду в полоску: у неё есть полосатые брюки, рубашка, кеды, куртка <span class="construction">и так далее </span>.<br>Моя сестра всегда носит одежду в полоску: у неё есть полосатые брюки, рубашка, кеды, куртка <span class="construction">и тому подобное</span>.';
    var x = document.getElementById("ex4b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4c() {
    result = 'Тема новогодней вечеринки — звёзды на красной дорожке. Надевайте вечерние платья в пол, нарядные костюмы, туфли на каблуках <span class="construction">и тому подобное</span>.<br>Тема новогодней вечеринки — звёзды на красной дорожке. Надевайте вечерние платья в пол, нарядные костюмы, туфли на каблуках <span class="construction">и так далее</span>.';
    var x = document.getElementById("ex4c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4d() {
    result = 'Одежда для похода должна быть практичной и удобной: футболка, свитер, непромокаемая куртка, тёплые ботинки, шапка <span class="construction">и тому подобное</span>.<br>Одежда для похода должна быть практичной и удобной: футболка, свитер, непромокаемая куртка, тёплые ботинки, шапка <span class="construction">и так далее</span>.';
    var x = document.getElementById("ex4d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex5_eng() {
    result = "Connect the phrases by choosing the matching continuation. Use the construction <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;On the one hand, ... On the other hand, ...&#39;. The word «стороны» in the second part of this construction is often omitted, therefore in the formula of this construction this word is placed in parentheses (). We can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
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
    result = "Fullfør setningene ved å velge delene som passer sammen. Bruk konstruksjonen <span class='construction'>С одной стороны, XP/Cl. С другой (стороны), XP/Cl</span> &#39;På den ene siden, ... På den andre siden, ...&#39;. I denne konstruksjonens andre halvdel er ofte ordet «стороны» utelatt, derfor står den i parenteser i formelen. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
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
    if (x.value.toLowerCase() == "1б, 2г, 3а, 4в") {
        result = "Правильно";
        document.getElementById("ex5_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex5_result").innerHTML = result;
}

function Ex5() {
    result = "1б, 2г, 3а, 4в";
    var x = document.getElementById("ex5_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex6_eng() {
    result = 'Fill in the blanks by using the constructions <span class="construction">в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’ and <span class="construction">скажем, XP/Cl</span> ‘for example /say/let us say ...’. In order to understand the differences between these constructions, see the table below. In both constructions, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence).'
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex6_norw() {
    result = 'Fyll ut de tomme feltene ved å bruke konstruksjonene <span class="construction">в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’ og <span class="construction">скажем, XP/Cl</span> ‘for eksempel / la oss si ...’. Les tabellen nedenfor for å forstå likhetene og forskjellene mellom disse to konstruksjonene. I begge konstruksjonene kan plassen XP/Cl fylles med en frase eller en hel setning (XP=frase, Cl=setning).'
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
    if (x.value.toLowerCase() == "в частности") {
        result = "Правильно";
        document.getElementById("ex6a_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6a_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6a_result").innerHTML = result;

    var x = document.getElementById('ex6b_input');
    if (x.value.toLowerCase() == "скажем") {
        result = "Правильно";
        document.getElementById("ex6b_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6b_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6b_result").innerHTML = result;

    var x = document.getElementById('ex6c_input');
    if (x.value.toLowerCase() == "скажем") {
        result = "Правильно";
        document.getElementById("ex6c_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6c_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6c_result").innerHTML = result;

    var x = document.getElementById('ex6d_input');
    if (x.value.toLowerCase() == "в частности") {
        result = "Правильно";
        document.getElementById("ex6d_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex6d_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex6d_result").innerHTML = result;
}

function Ex6() {
    result = "1: в частности<br>2: скажем<br>3: скажем<br>4: в частности";
    var x = document.getElementById("ex6_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex7_eng() {
    result = 'Build sentences by using the construction <span class="construction">скажем, XP/Cl</span>‘for example /say/let us say ...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence).'
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex7_norw() {
    result = 'Lag setninger ved å bruke konstruksjonen <span class="construction">скажем, XP/Cl</span> ‘for eksempel / la oss si ...’ Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning).'
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex8_eng() {
    result = "Connect the sentences or phrases by choosing a matching continuation. Note that in the construction <span class='construction'>в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex8_norw() {
    result = "Koble sammen setningene ved å bruke delene som passer. Legg merke til at i konstruksjonen <span class='construction'>в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’, kan plassen XP/Cl fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex8() {
    var x = document.getElementById('ex8_input');
    if (x.value.toLowerCase() == "1в, 2а, 3г, 4б, 5д") {
        result = "Правильно";
        document.getElementById("ex8_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_result").innerHTML = result;
}

function Ex8() {
    result = "1в, 2а, 3г, 4б, 5д";
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex9_eng() {
    result = "Complete the sentences by using the construction <span class='construction'>в частности, XP/Cl</span> ‘for example / in particular / more specifically, ...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence)."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex9_norw() {
    result = "Fullfør setningene ved å bruke konstruksjonen <span class='construction'>в частности, XP/Cl</span> ‘for eksempel / spesifikt ...’ Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning)."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex9() {
    var result = ""
    answ_a = "1: Стиль и мода — это разные вещи. <span class='construction'>В частности</span>, можно быть модным, но не стильным/мода меняется, а стиль сохраняется.<br>";
    answ_b = "2: Для хорошего гардероба не нужно много вещей. <span class='construction'>В частности</span>, можно иметь всего несколько вещей и красиво выглядеть.<br>";
    answ_c = "3: Современная мода очень либеральна. <span class='construction'>В частности</span>, можно носить кроссовки с официальным костюмом или надевать джинсы на рабочую встречу.<br>";
    answ_d = "4: Внешний вид может помочь в работе. <span class='construction'>В частности</span>, к стильно одетому человеку больше доверия.<br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d)
    var x = document.getElementById("ex9_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex10_eng() {
    result = "Complete the sentences by using the construction <span class='construction'>таким образом, Cl</span> ‘for example /say/let us say...’. In this construction, we can put a phrase or an entire sentence in the slot marked XP/Cl (XP=phrase, Cl=clause, sentence). The case required in each sentence is indicated in the parentheses."
    var x = document.getElementById("ex10_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex10_norw() {
    result = "Fullfør setningene ved å bruke konstruksjonen <span class='construction'>таким образом, Cl</span> ‘for eksempel / la oss si...’. Plassen XP/Cl kan fylles med en frase eller en hel setning (XP=frase, Cl=setning). Legg merke til at kasus, som skal brukes i hver setning, står i parentes."
    var x = document.getElementById("ex10_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex11_eng() {
    result = "Fill in the blanks with the words from the list."
    var x = document.getElementById("ex11_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex11_norw() {
    result = "Fyll ut de tomme feltene med ord fra listen."
    var x = document.getElementById("ex11_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex11() {
    var x1 = document.getElementById('ex11a_input');
    var x2 = document.getElementById('ex11b_input');
    var x3 = document.getElementById('ex11c_input');
    var x4 = document.getElementById('ex11d_input');

    answer_a = "скажем";
    answer_b = "в частности";
    answer_c = "и тому подобное";
    answer_d = "итак";
    
    if (x1.value.toLowerCase() == answer_a && x2.value.toLowerCase() === answer_b &&
        x3.value.toLowerCase() == answer_c && x4.value.toLowerCase() === answer_d ) {
        result = "Правильно";
        document.getElementById("ex11_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex11_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex11_result").innerHTML = result;
}

function Ex11() {
    var result = ""
    answ_a = "1: Скажем<br>";
    answ_b = "2: в частности<br>";
    answ_c = "3: и тому подобное<br>";
    answ_d = "4: Итак<br>";
    result = result.concat(answ_a, answ_b, answ_c, answ_d)
    var x = document.getElementById("ex11_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}


function Ex12_eng() {
    result = "How did people dress in different historical periods? Choose a picture and describe it according to the plan below."
    var x = document.getElementById("ex12_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex12_norw() {
    result = "Hvordan kledde seg folk i forskjellige tidsperioder? Velg et bilde og beskriv det etter planen nedenfor."
    var x = document.getElementById("ex12_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}


function Ex13_eng() {
    result = "Read the text that explains what a personal color type analysis is. Fill in the blanks with the words from the list."
    var x = document.getElementById("ex13_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex13_norw() {
    result = "Les teksten om personlig fargeanalyse. Fyll ut de tomme feltene med ord fra listen."
    var x = document.getElementById("ex13_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function check_Ex13() {
    var x1 = document.getElementById('ex13a_input');
    var x2 = document.getElementById('ex13b_input');
    var x3 = document.getElementById('ex13c_input');
    var x4 = document.getElementById('ex13d_input');
    var x5 = document.getElementById('ex13e_input');

    answer_a = "на самом деле";
    answer_b = ["в частности", "скажем"];
    answer_c = "и так далее";
    answer_d = "грубо говоря";
    answer_e = ["скажем", "в частности"];

    if (x1.value.toLowerCase() == answer_a && answer_b.includes(x2.value.toLowerCase()) &&
        x3.value.toLowerCase() == answer_c && x4.value.toLowerCase() === answer_d &&
        answer_e.includes(x5.value.toLowerCase())) {
        result = "Правильно";
        document.getElementById("ex13_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex13_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex13_result").innerHTML = result;
}

function Ex13() {
    var result = ""
    answ_a = "1: на самом деле<br>";
    answ_b = "2: в частности / скажем<br>";
    answ_c = "3: и так далее<br>";
    answ_d = "4: Грубо говоря<br>";
    answ_e = "4: Скажем / в частности";
    result = result.concat(answ_a, answ_b, answ_c, answ_d, answ_e)
    var x = document.getElementById("ex13_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex14_eng() {
    result = "You are a stylist. Help a client to pick out their clothes. What color type does your client have? Write a short text for your client with your advice. Use the information on color types provided in exercise 13 and the constructions from the list."
    var x = document.getElementById("ex14_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex14_norw() {
    result = "Du jobber som stylist. Hjelp din klient å velge klær. Hvilken fargetype har din klient? Skriv en kort tekst som gir råd til din klient. Bruk informasjonen om fargetyper i oppgave 13 og konstruksjonene i listen."
    var x = document.getElementById("ex14_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex15_eng() {
    result = "Bonus exercise*. Help your friend choose the right clothes."
    var x = document.getElementById("ex15_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}

function Ex15_norw() {
    result = "Bonusoppgave*. Hjelp en venn å velge riktige klær."
    var x = document.getElementById("ex15_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";
        
    }
}