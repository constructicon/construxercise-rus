function Ex1_eng() {
    result = "Read the text. What is the purpose of the constructions highlighted in the text? What does each construction mean?"
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
    result = "Connect the phrases by choosing a matching continuation. Use the construction <span class=\"construction\">VP, заодно VP</span> meaning ‘while X is at it ...’ or ‘..., meanwhile ...’. In this construction, VP stands for a verb (VP=verb phrase)."
    var x = document.getElementById("ex2_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex2_norw() {
    result = "Koble sammen frasene ved å velge en passende fortsettelse. Bruk konstruksjonen <span class=\"construction\">VP, заодно VP</span> ‘..., samtidig, i tillegg ...’. I denne konstruksjonen står VP for et verb (VP=verbfrase)."
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
    if (x.value.toLowerCase() == "1в, 2а, 3д, 4б, 5г") {
        result = "Правильно";
        document.getElementById("ex2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex2_result").innerHTML = result;
}

function Ex2() {
    result = "1в, 2а, 3д, 4б, 5г";
    var x = document.getElementById("ex2_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex3_eng() {
    result = "Foreign students are discussing Russian holidays. Fill in the blanks. Use the construction <span class=\"construction\">Cl, так (ведь)?</span> ‘..., isn’t it?’ in questions and the construction <span class=\"construction\">Сам подумать-Imp, Cl</span> ‘Think about it, ...’ in responses.<br>In these constructions, Cl means an entire sentence (Cl=clause, sentence), and подумать-Imp is an imperative form of the verb <i>подумать</i> ‘think’ (Imp = imperative), that is <i>подумай</i> (in singular) and <i>подумайте</i> (in plural).<br> Note that the form of the pronoun <i>сам</i> ‘self’ depends on the sex of the speaker: use <i>сам</i> when addressing a man, but <i>сама</i> when addressing a woman. The form of the imperative <i>подумай</i> does not change in this regard."
    var x = document.getElementById("ex3_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_norw() {
    result = "Utenlandske studenter diskuterer russiske helligdager. Fyll ut de tomme feltene. Bruk konstruksjonen <span class=\"construction\">Cl, так (ведь)?</span> som betyr omtrent ‘... , ikke sant’ og konstruksjonen <span class=\"construction\">Сам подумать-Imp, Cl</span> som betyr omtrent ‘Tenk på det, Tenk på at, Husk at ... ’.<br>I disse konstruksjonene står Cl for en hel setning (Cl=setning), og подумать-Imp som er imperativformen av verbet <i>подумать</i> ‘å tenke’ (Imp = imperativ), det vil si <i>подумай</i> (entall) og <i>подумайте</i> (flertall). Legg merke til at pronomenet <i>сам</i> ‘selv’ skal bøyes i overensstemmelse med samtalepartnerens kjønn. Bruk <i>сам</i> for å tiltale en mann, <i>сама</i> for å tiltale en kvinne. Imperativformen <i>подумай</i> er ikke avhengig av samtalepartnerens kjønn."
    var x = document.getElementById("ex3_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex3_comment() {
    result = "Формат задания: в парах. После каждого диалога студенты меняются ролями.<br>Comment for language teachers. Task format: in pairs. After each dialogue, the students switch roles."
    var x = document.getElementById("ex3_comment")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
      } else {
        x.style.display = "inline-block";

    }
}

function check_Ex3a() {
    var x = document.getElementById('ex3a1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3a1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3a1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3a1_result").innerHTML = result;

    var x = document.getElementById('ex3a2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3a2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3a2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3a2_result").innerHTML = result;
}

function Ex3a() {
    result = 'Ханна: — В День знаний в магазинах России не продают алкоголь, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Майкл: —  Да. <span class=\'construction\'>Сама подумай</span>, это же праздник для школьников.';
    var x = document.getElementById("ex3a_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3b() {
    var x = document.getElementById('ex3b1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3b1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3b1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3b1_result").innerHTML = result;

    var x = document.getElementById('ex3b2_input');
    if (x.value.toLowerCase() == "сам подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3b2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3b2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3b2_result").innerHTML = result;
}

function Ex3b() {
    result = 'Закир: — Масленицу отмечают три дня, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Фатима: — Нет. <span class=\'construction\'>Сам подумай</span>. Масленицу же называют Масленичной неделей, значит семь дней.';
    var x = document.getElementById("ex3b_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3c() {
    var x = document.getElementById('ex3c1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3c1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3c1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3c1_result").innerHTML = result;

    var x = document.getElementById('ex3c2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3c2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3c2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3c2_result").innerHTML = result;
}

function Ex3c() {
    result = 'Шарлотта: — Ты отмечаешь День защиты детей, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Лиам: — Нет. <span class=\'construction\'>Сама подумай</span>, я же уже не ребенок и детей у меня пока нет.';
    var x = document.getElementById("ex3c_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3d() {
    var x = document.getElementById('ex3d1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3d1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3d1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3d1_result").innerHTML = result;

    var x = document.getElementById('ex3d2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3d2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3d2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3d2_result").innerHTML = result;
}

function Ex3d() {
    result = 'Сара: — Тебе подарили цветы на 8 марта, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Оливия: — Конечно! <span class=\'construction\'>Сама подумай</span>, я же женщина.';
    var x = document.getElementById("ex3d_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function check_Ex3e() {
    var x = document.getElementById('ex3e1_input');
    if (x.value.toLowerCase() == "так".toLowerCase() || x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3e1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3e1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3e1_result").innerHTML = result;

    var x = document.getElementById('ex3e2_input');
    if (x.value.toLowerCase() == "сам подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex3e2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex3e2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex3e2_result").innerHTML = result;
}

function Ex3e() {
    result = 'Джеймс: — Итон, ты отмечал День святого Валентина в этом году, <span class=\'construction\'>так</span> / <span class=\'construction\'>так ведь</span>?<br>Итон: — Нет, конечно! <span class=\'construction\'>Сам подумай</span>, я же недавно расстался с девушкой.';
    var x = document.getElementById("ex3e_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex4_eng() {
    result = "Your friend Sasha has a birthday soon. You and a friend of yours are at a store and are trying to choose a gift for Sasha, but Sasha is hard to please. Discuss with your friend what gift you will buy. Use the constructions <span class=\"construction\">Cl, так (ведь)?</span> ‘..., isn’t it?’ and <span class=\"construction\">Сам подумать-Imp, Cl</span> ‘Think about it, ...’.<br>In these constructions, Cl means an entire sentence (Cl=clause, sentence), and подумать-Imp is an imperative form of the verb подумать ‘think’ (Imp = imperative), that is подумай (in singular) и подумайте (in plural).<br>Note that the form of the pronoun сам ‘self’ depends on the sex of the speaker: use сам when addressing a man, but сама when addressing a woman. The form of the imperative подумай does not change in this regard."
    var x = document.getElementById("ex4_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex4_norw() {
    result = "Din venninne Sasja har snart bursdag. Du og en venn har tatt turen til en butikk og prøver å velge ut en gave til Sasja, men det er ikke lett å gjøre Sasja fornøyd. Diskuter med din venn om hvilken gave dere skal kjøpe. Bruk konstruksjonene <span class=\"construction\">Cl, так (ведь)?</span> som betyr omtrent ‘..., ikke sant’ og <span class=\"construction\">Сам подумать-Imp, Cl</span> som betyr omtrent ‘Tenk på det, Tenk på at, Husk at ...’.<br>I disse konstruksjonene står Cl for en hel setning (Cl=setning), og подумать-Imp som er imperativformen av verbet подумать ‘å tenke’ (Imp = imperativ), det vil si подумай (entall) og подумайте (flertall). Legg merke til at pronomenet сам ‘selv’ skal bøyes i overensstemmelse med samtalepartnerens kjønn. Bruk сам for å tiltale en mann, сама for å tiltale en kvinne. Imperativformen подумай er ikke avhengig av samtalepartnerens kjønn. "
    var x = document.getElementById("ex4_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_eng() {
    result = "Tell your interlocutor what you would change in the world for the better if you had the opportunity. Use the construction <span class=\'construction\'>будь моя воля, Cl бы </span> meaning ‘If it were up to me, I would …’.<br>In this construction, Cl stands for an entire sentence (Cl=clause, sentence). The verb that follows the particle бы is used in the past tense form and should have masculine or feminine grammatical gender depending on the sex of the speaker."
    var x = document.getElementById("ex5_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex5_norw() {
    result = "Fortell om hva i verden du ville forbedret hvis du hadde mulighet. Bruk konstruksjonen <span class=\'construction\'>будь моя воля, Cl бы</span> som betyr omtrent ‘Om det var opp til meg, ...’  eller  ‘Var det opp til meg, ...’  eller ‘Hvis det var opp til meg, ...’<br> I denne konstruksjonen står Cl for en hel setning (Cl=setning). Verbet etter partikkelen бы brukes i forttidsform, og skal bøyes i overenstemmelse med talerens kjønn."
    var x = document.getElementById("ex5_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_eng() {
    result = "Discuss with your interlocutor how you feel about the holidays that are celebrated in Russia and in your country of origin. Use the construction  <span class=\'construction\'>(как) по мне, (так) Cl</span> meaning ‘as for me, ...’ or ‘in my opinion, ...’.<br>In this construction, Cl stands for an entire sentence (Cl=clause, sentence), and parentheses () indicate an optional element of a construction."
    var x = document.getElementById("ex6_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex6_norw() {
    result = "Diskuter med din samtalepartner om ditt forhold til helligdagene som feires i Russland og i ditt hjemland. Bruk konstruksjonen <span class=\'construction\'>(как) по мне, (так) Cl</span> som betyr omtrent ‘Jeg tror, ... ’ eller ‘Etter min mening, ...’  eller ‘For meg ...’<br>I denne konstruksjonen står Cl for en hel setning (Cl=setning), mens parentesene () indikerer en valgfri del av en konstruksjon."
    var x = document.getElementById("ex6_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_eng() {
    result = "Sign postcards addressed to different people. In each card, write a congratulation using the congratulations constructor. Note that congratulations for different people differ from each other. At the end of each congratulation, use the construction <span class=\'construction\'>словом, Cl</span> meaning ‘In a nutshell, ... ’ or ‘to make a long story short, ...’.<br>In this construction Cl stands for an entire sentence (Cl=clause, sentence)."
    var x = document.getElementById("ex7_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex7_norw() {
    result = "Signer postkortene adresserte til forskjellige folk. Skriv gratulasjoner i hvert postkort ved hjelp av «gratulasjonsgeneratoren». Legg merke til at det er forskjell på gratulasjoner til forskjellige folk. Avslutt hver gratulasjon med konstruksjonen <span class=\'construction\'>словом, Cl</span> som betyr ‘alt i alt / generelt / kort sagt / fortalt ...’.<br>I denne konstruksjonen står Cl for en hel setning (Cl=setning)."
    var x = document.getElementById("ex7_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_eng() {
    result = "Here is a conversation between Lisa and Olya. Fill in the blanks with words from the list."
    var x = document.getElementById("ex8_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex8_norw() {
    result = "Se på samtalen mellom Lisa og Olja. Fyll ut de tomme feltene med ord fra listen."
    var x = document.getElementById("ex8_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function check_Ex8() {
    var x = document.getElementById('ex8_1_input');
    if (x.value.toLowerCase() == "заодно".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_1_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_1_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_1_result").innerHTML = result;

    var x = document.getElementById('ex8_2_input');
    if (x.value.toLowerCase() == "сама подумай".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_2_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_2_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_2_result").innerHTML = result;

    var x = document.getElementById('ex8_3_input');
    if (x.value.toLowerCase() == "так ведь".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_3_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_3_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_3_result").innerHTML = result;

    var x = document.getElementById('ex8_4_input');
    if (x.value.toLowerCase() == "как по мне, так".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_4_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_4_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_4_result").innerHTML = result;

    var x = document.getElementById('ex8_5_input');
    if (x.value.toLowerCase() == "Будь моя воля".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_5_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_5_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_5_result").innerHTML = result;

    var x = document.getElementById('ex8_6_input');
    if (x.value.toLowerCase() == "словом".toLowerCase()) {
        result = "Правильно";
        document.getElementById("ex8_6_result").style.backgroundColor = "#6ef184";
    } else {
        result = 'Неправильно';
        document.getElementById("ex8_6_result").style.backgroundColor = "#ee5151";
    }
    document.getElementById("ex8_6_result").innerHTML = result;
}

function Ex8() {
    result = '1. заодно; 2. Сама подумай; 3. так ведь; 4. Как по мне, так; 5. Будь моя воля; 6.Словом';
    var x = document.getElementById("ex8_ans");
    x.innerHTML = result;
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
    }
}

function Ex9_eng() {
    result = "Write a short text (five to six sentences) about a holiday that you would like to introduce or eliminate. Use all new constructions from this lesson."
    var x = document.getElementById("ex9_eng")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}

function Ex9_norw() {
    result = "Skriv en kort tekst (5 til 6 setninger) om hvilke helligdager du vil innføre eller avskaffe. Bruk alle konstruksjonene du har lært i denne leksjonen."
    var x = document.getElementById("ex9_norw")
    x.innerHTML = result;
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}