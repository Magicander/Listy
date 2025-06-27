const renameBtn = document.getElementById("renameBtn");
const renameImage = document.getElementById("renameImage");
const mailboxContainer = document.getElementById("mailboxContainer");
const mailboxImage = document.getElementById("mailboxImage");
const letterContainer = document.getElementById("letterContainer");
const letterImage = document.getElementById("letterImage");
const letterText = document.getElementById("letterText");

const letters = [
  "Hej Bejbi😘! Dziś wyjeżdżasz, będzie ciężko, ale damy radę. Zaczynamy relację na odległość, jesteśmy oddaleni, ale gdy spojrzysz w gwiazdy ja poczuje i wyślę ci moje myśli telepatycznie, jak w romantycznych filmach. Będą super wakacje i wyleżysz się na słoneczku przy basenie za cały ten ciężki rok, który tak pięknie pracowałaś. Buziaczki i uściski od twojego BF. Bezpiecznej podróży . Wiem, że się „pokłóciliśmy”, ale liczę, że mi wybaczysz.❤️",
  "Buenos Dias mi amor!❤️ Mam nadzieję, że pupa nie boli od jazdy za bardzo. Liczę że masz wspaniałą pogodę i samopoczucie. Żarcik na dziś: Lekarz, stający w drzwiach gabinetu z listą pacjentów: Szanowni Państwo, w związku z RODO nie mogę używać nazwisk, więc zapraszam na wizytę pana z syfilisem! Buziaczki bejbi",
  "Helloooo! Myślę o tobie! W każdej chwili i sekundzie.❤️ Nikt mi nie wsadza palca w pupę! Mam nadzieję, że masz słoneczko i czeka cię dziś zadanie. 😘Masz Malować, uwolnić się artystycznie, najlepiej krajobraz lub jakiegoś kwiatka jak zapragniesz. Loveeee",
  "Buenos dias! Te extraño mucho, mi amor!❤️ Dziś wierszyk a co. Na górze róże na dole nasrane, miliony buziaczków bejbi kochane! No romantycznie ze hej. Licze, że dobrze się czujesz i jesteś moja uśmiechnięta dziewczynka, zawsze optymistyczna. Całusów stos <3 <3 <3",
  "Dziiieeeń Dooobryyy kwiatuszku🌹! Jak się czujesz?❤️ Oby Dobze i szczęśliwa. Dzisiaj ruszam w Polskę, więc oboje poza domem bejbi teraz. ❤️Tęsknię całym sercem i płaczę w kącie. Dzisiejsze twoje zadanie to zdjecie, ma być wyjątkowe i ładne, inne ;), wykorzystaj swoje umiejętności z sesji śmieciarek! Love you i tona buziaków",
  "Oh i ah, ale te dni lecą, a ja tęsknię bejbi. Jestem pewien, że Ty też, czuje się jak w „Love never lies”, rozłąka którą musimy przetrwać. Dzisiejsze zadanie to QUIIZZZ o nas, bo tak: 1.Jaka jest twoja pierwsza wiadomość do mnie? 2. Jaki gest mieliśmy wykonać pod koniec poloneza na studniówce? 3.Jaka była nasza pierwsza „nie randka”? Skąd ( miejsce, czas) pochodzi twoje najbardziej nerdowskie zdjęcie? 4.Wymień 4 żarty, które zrozumiemy tylko my we dwójkę",
  "Pierwszy tydzień księżniczko! Żyjemy❤️. Mam nadzieję że masz super pogodę i jesteś zrelaksowana i opalona( NIE spalona).😘 Smaruj się ładnie i dziej czeka cię ciężkie, bo FILM, który w sumie nie jestem pewien czy widziałaś czy nie: 27 dresses( na cda). Ciekaw jestem jak się spodoba! Loveeee youuuu i buziaki od twojego bubu",
  "Helloooo, moja bejbi!!! Ale tęsknie! Mam nadzieję że jest słoneczko u Ciebie moje słoneczko :) Zrób sobie ładny trening dziś, oczywiście rozciąganie, ale miło nie mile. Nie musisz oczywiście, ale wiem że lubisz jednak. Całuję Cię, milionem buziakow i liczę, że też tęsknisz( pewnie, mocniej niż ja)",
  "Bonjour piękna! Jak ci mija żyćko? Oby milutko i jesteś radosnym pięknym kwiatuszkiem. Spytałem chatGTP co mogę ci napisać, żeby hmmm ukazać moją tęsknotę: Moje serce szepcze Twoje imię w każdej chwili ciszy – tak bardzo za Tobą tęsknię. Jest romantycznie chyba, ale wiedz że tęsknię :) Dzisiaj odpoczynek, masz być ładnie opalona, tylko się smaruuuuuj",
  "Cześć słodka moja! Mam nadzieję, że sie super bawisz i nic cię nie smuci. Tyle dni minęło, więc dzisiaj sie zabawimy, ze mnie nie znasz, a ja cię podrywam❤️ :) Na który tekst byś mnie brała: 1.Gdy patrzę w gwiazdy, widzę tylko jedną, która naprawdę się liczy. Ciebie 2. Chcesz się pobawić w dom? Ty będziesz drzwiami, a ja będę pukał 3. Czy masz mapę? Bo właśnie zgubiłem się w Twoich oczach. Mam nadzieję, że się udało i mnie polubiłaś❤️",
  "Dzieeeen dobryyyy przepiękna😘! Mam nadzieję, że masz super humorek, bo dzisiejsze zadanie to malunek, ale masz namalować coś co kojarzy ci się ze mną, czy to postać, czy rzecz, czy widok nie ważne. Zaszalej :) Napisz do mnie to ja też to zrobię i się podzielimy!!! Looooooveeee youuuu na koniec świata i jeszcze dalej ",
  "Hej bejjbiiii! Cio tam? Jak żyćko? Mam nadzieję, że nie jesteś zwiędłym kwiatuszkiem i masz dobry humorek :) Wiedz, że ja tęsknie, bardzooo, ale musimy przetrwać i być silni. Dzisiaj dwa żarciki, na dobry dzionek, żebyś się uśmiechneła: 1. U okulisty: - Pańskie wyniki nie wyglądają za dobrze… - Mogę je zobaczyć - Raczej nie…  2. Psychiatra do kryminalisty: -Opowiem panu początek historii a pan ją dokończy. „Dziad i baba posadzili rzepkę..? - A Rzepka odsiedział swoje i załatwił dziada i babę.",
  "Cześć Bejbiiii! Cio tam? Dobze się bawisz? Obi tak i masz super humorek.❤️ Pamiętaj się smarować, żeby się nie spalić, bo będzie kuku. Mam nadzieję, że czytasz ładnie książeczkę i się relaksujesz, niczym się nie zamartwiasz czy smucisz. Przesyłam ci tonę buziaczków i uścisków, a dzisiejszym zadaniem jest ORIGAMIII. Tak, musisz zrobić łabędzia i jeśli ci się uda piekną różę. Oczywiście musisz znaczy „jeśli chcesz” nic na siłę. LOVVEEEEEE",
  "Oh oh oh Ciekawe kto jest moim słodziutkim i pięknym kwiatuszkiem🌹, za którym bardzo bardzo tęsknie? Czy znasz może odpowiedz na to pytanie? Bo ja tak. Mam nadzieję, że się dobze czujesz bejbi, bo to nie dobrze nie cieszyć się wakacjami. Dzisiaj będzie quizzzz, ale o bajkach. Więc musisz do mnie napisać na messie, a ja ci go pięknie prześle. Loveeee youuuuu",
  "Słoneczko moje, cio tam u ciebie? Wiesz, że tęsknie? Mam nadzieję, że tak i masz super humorek na nowy dzień. Zjedz ładne śniadanko, pij dużo wody i smaruuuuj się. Dzisiaj proszę cię o malunek, siiii. Nic konkretnego, chyba, że chcesz to namaluj kwiatek w szlance, nwm jak to zrobisz. Baw się dobrze i nie zapominaj, że tęksknie bardzooooo. Całusy",
  "Dzieeeeń dobryyyy moja piękność. Jak się czujemy?❤️ Nic nie boli, nie umieramy? Mocno spalona? Znając życie to tak. Nie zapominaj pić wody ( choć raczej na pewno to robisz) i zjedz ładne śniadanko z uśmiechem. Dzisiaj zadanko to sesja rozciągania, tak żebyś się zrelaksowała, ale też pomęczyła i miała energię na cały dzionek. Oczywiście to nie mus, tylko jeśli chcesz i masz czas. Buziaczki i całuski",
  "Cio tam mój skarbie cudowny? Dobze się czujemy? Oby tak i uśmiech nie schodził z twojej twarzy. Dzisiaj mam zadanie, żebyś obejrzała jakąś bajkę, ale uwaga, postaraj się zajęczeć głęboko w swoje wspomnienia i wygrzebać taki film/bajkę, która kojarzy ci się praktycznie całkowicie z dzieciństwem, a dawno do niej nie zaglądałaś. Przesyłam ci tyle buziaków ile posiadam i ściskam całym serduszkiem",
  "Buenos dias mi amor!😘 Jak ci mijają dni wakacji, mam nadzieję, że dobze i spędzasz je relaksująca i z radością. Wiedz, że tęsknie i to bardzo, myśle o tobie i odliczam dni do naszego spotkania. Ale nie ma co się zamartwiać i może opowiem ci o twoim dzisiejszym zadanku. Chciałbym, żebyś zrobiła dzisiaj drinki, tak drinki, ale jakieś fajne, wykwintne. Tylko żebyś się nie spociła. Kochaaaam. Buziaczki i całuski",
  "Oh moja piękna, jak ci mijają dni wakacji?❤️ Mam nadzieję, że wspaniale, jest słoneczko, a ty masz jak zawsze swój piękny uśmiech na ustach. Pamiętasz swoje wczorajsze drinki ( Jeśli były), to może dzisiaj większa zabawa i pobawisz się w szefa kuchni. Spróbuj zrobić jakieś ciasteczka, ale ciekawsze, może jakieś czekoladowe czy coś. Nie wiem. Baw się dobrze. Całuję cię, przesyłam miliony w buziaków",
  "Cześć bejbiii! Jak się czujesz kwiatuszku? Mam nadzieję, że wszytko w porządku i masz dobre samopoczucie! Love you. Dzisiaj bejbi bez zadania, chcę żebyś się zrelaksowała i miała miły dzionek, bez zadań czy planów.",
  "Jak się czujesz moja kochana? Ma nadzieję, że wspaniale i masz dobry humorek.😘 Liczę, że słoneczko ładnie świeci,a ty możesz się całkowicie zrelaksować. 😘Wiedz bejbi, że tęsknie, bardzoooo tęsknie, ale już tak bliziutko, więc bądźmy silni. Dzisiaj proszę cię, żebyś zrobiła super sesje Walentemu, najlepiej z gadżetami. Ma być profesjonalnym modelem. Tęksnie moje bejbi, buziaczkiiiiiiii",
  "Czeeeeśććć różyczko😘! Jak się czujesz ptysiu?❤️ Liczę, że masz super humorek, dobrze się czujesz i jesteś zdrowa.❤️ Ja już odliczam dni do naszego spotkanka, bo tęsknie straszniieeee za moim kwiatuszkiem prześlicznym. Dzisiejsze zdanko jest proste, chciałbym żebyś zrobiła naklejkę( będzię ci potrzebna daśma dwustronna). To tyle, loveeeee i miliony buziaków moja ",
  "Kolejny dzionek co raz bliżej naszego spotkanka. Przesyłam ci miliony buziaków i całusków oraz olbrzymi uścisk. Mam nadzieję, że dziś również masz super humorek i niczym się nie martwisz. Dzisiejsze zadanko to znowu relaks, ale połączony z yoga, zrób sobie miłe rozciąganie i rozluźnianie mięsńi. Całuje cię miony razy",
  "Hejkaaaaa kwiatuszku mój. Jak samopoczucie?❤️ Wszytko okey? Mam nadzieję, że tak i nie nudzisz się lub stresujesz. Dzisiejsze zadanko to znowu powtórzenie, bo chciałbym żebyś znowu się za malowanie wzięła i dzięki swojemu talentowi namalowała jakiś piękny krajobraz. Oczywiście tylko jeśli chceszzzz. Loveeeeee youuuuuuuuu",
  "Jejkuuuu, już tak blisko, a ja tak tęsknie i już się nie mogę doczekać naszego spotkanka. Wysyłam ci miliony buziaków i uścisków razem z nowym zadankiem, czyli narysowanie słodkiego zwięrzątka, ale teakiego suoper duper , nalepiej za pomocą flamastrów. Jak ten miś co od ciebie dostałem. Buziaczki kwiatuszku mój kochany.",
  "Dziś wracam bejbiiiii😘! Już jutro się zobaczymy i bardzo bardzo chcę się z tobą spotkać.😘 Marzy mi się wyściskanie cię i wycałowanie❤️ ile się daaaa. Tak bardzo tęsknie kwiatuszku🌹 mój. Mam nadzieję, że jakoś przetrwałaś ten wyjazd i jesteś w dobrym humorku, bo ja ledwo co, ale jakoś się udało. Loveee you i już już jesteśmy blisko spotkania sieeeeee. Przetrwaliśmy rozstanie LOVE NEVER LIES, jesteśmy innymi ludźmi i zupełnie inaczej patrzymy na nasz związek. LOVE LOVE LOVE",
];

// Sprawdź, czy dziś jest nowy dzień względem startDate
const startDateStr = localStorage.getItem("startDate");

if (startDateStr) {
  const today = new Date();
  const startDate = new Date(startDateStr);
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  const currentDayShown = parseInt(localStorage.getItem("lastShownDay") || "-1", 10);

  // Jeśli nowy dzień, to ustaw na "mailbox", a nie "letter"
  if (diffDays !== currentDayShown) {
    localStorage.setItem("stage", "mailbox");
    localStorage.setItem("lastShownDay", diffDays.toString());
  }
}


function setStage(stage) {
  renameBtn.classList.add("hidden");
  mailboxContainer.classList.add("hidden");
  letterContainer.classList.add("hidden");

  if (stage === "rename") {
    renameBtn.classList.remove("hidden");
  } else if (stage === "mailbox") {
    mailboxContainer.classList.remove("hidden");
  } else if (stage === "letter") {
    letterContainer.classList.remove("hidden");

    const startDateStr = localStorage.getItem("startDate");
    if (startDateStr) {
      const startDate = new Date(startDateStr);
      const today = new Date();
      const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
      const index = Math.min(diffDays, letters.length - 1);
      writeLetter(letters[index]);
    } else {
      letterText.textContent = "Nie znaleziono daty startowej.";
    }
  }
}

function writeLetter(text) {
  letterText.textContent = "";
  let i = 0;

  const speed = 30; // ms między literami — możesz zmienić na 20/10 dla szybszego efektu

  function type() {
    if (i < text.length) {
      letterText.textContent += text[i];
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

renameImage.addEventListener("click", () => {
  localStorage.setItem("stage", "mailbox");

  const openSound2 = document.getElementById("openSound2");
  if (openSound2) {
    openSound2.currentTime = 0;
    openSound2.play();
  }

  if (!localStorage.getItem("startDate")) {
    const today = new Date();
    localStorage.setItem("startDate", today.toISOString());
  }

  setStage("mailbox");
});

mailboxImage.addEventListener("click", () => {
  localStorage.setItem("stage", "letter");

  // Dodanie dźwięku
  const openSound = document.getElementById("openSound");
  if (openSound) {
    openSound.currentTime = 0;
    openSound.play();
  }

  setStage("letter");

  // Dodanie klasy animacji
  letterImage.classList.remove("open-animation"); // Reset w razie potrzeby
  void letterImage.offsetWidth; // Wymuszenie ponownego przeliczenia
  letterImage.classList.add("open-animation");
});


// Ustawienie etapu przy starcie
const savedStage = localStorage.getItem("stage") || "rename";
setStage(savedStage);








