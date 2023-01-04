// start ir stop mygtukai

// kai spaudžiame start, kas sekundę sekame kintantį laiką
// ir išrodome didėjantį laiką laikroduke

// kai paspaudžiame stop, laikrodukas turi sustoti

const state = {
  secondsElapsed: 0,
  intervalId: null,

  // tick () {
  //     state.secondsElapsed++; // padidina sekundes, kurios tiksi
  //     console.log(state);
  // },

  start(updateTimerText) {
    // paleisti intervalą, kuris tiksi ir didina laiką
    if (!state.intervalId) {
      // šitą sukuriame todėl, kad nesukurtų antro intervalo, nes vienas intervalas jau eina
      // create an interval that increments secondElapsed
      // calls update function that was recieved through args
      state.intervalId = setInterval(function () {
        state.secondsElapsed++; // atkelta tick funkcija
        updateTimerText(state.secondsElapsed);
      }, 1000);
    }
  },

  stop() {
    // sustabdo intervalą, kuris tiksi
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  },
};

export default state; // kai default, tada importuojant gali pavadinimai skirtis
