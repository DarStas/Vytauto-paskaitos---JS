const attackButton = document.querySelector("#attack-btn");
const defendButton = document.querySelector("#defend-btn");
const healButton = document.querySelector("#heal-btn");
const dragonHealth = document.querySelector("#dragon-health");
const knightHealth = document.querySelector("#knight-health");

const mainElement = document.querySelector("main");
const players = document.querySelector("#players");
const battleLog = document.querySelector("#battle-log");

let dragonHealthValue = Number(dragonHealth.textContent);
let knightHealthValue = Number(knightHealth.textContent);

console.log(dragonHealth, knightHealth, dragonHealthValue, knightHealthValue);

attackButton.addEventListener("click", attackAction);
defendButton.addEventListener("click", defendAction);
healButton.addEventListener("click", healAction);

let dragonDamage;
let knightDamage;
let actionTextDragon;
let actionTextKnight;
let isKnightDefending = true;
let knightHealing;

function attackAction() {
  isKnightDefending = false;
  knightHealing = 0;
  actionTextKnight = "attacks";
  actionTextDragon = "attacks";
  knightDamage = Math.ceil(Math.random() * 20);
  dragonDamage = Math.ceil(Math.random() * 20);
  dragonHealthValue = dragonHealthValue - knightDamage;
  dragonHealth.textContent = dragonHealthValue;
  dragonAttack();
  submitBattleLog();
  battleEnd();
}

function defendAction() {
  isKnightDefending = true;
  knightHealing = 0;
  if (isKnightDefending) {
    actionTextKnight = "is defending";
    actionTextDragon = "attacks";
    knightDamage = 0;
    dragonDamage = 0;
    submitBattleLog();
    battleEnd();
  }
}

function healAction() {
  isKnightDefending = false;
  knightDamage = 0;
  knightHealing = Math.ceil(Math.random() * 30);
  knightHealth.textContent = knightHealthValue + knightHealing;
  dragonDamage = Math.ceil(Math.random() * 20);

  actionTextKnight = "heals";
  actionTextDragon = "attacks";
  submitBattleLog();
  battleEnd();
}

function dragonAttack() {
  if (dragonHealthValue < 0) {
    players.textContent = "Knight Wins";
  } else {
    actionText = "attacks";
    knightHealthValue = knightHealthValue - dragonDamage;
    console.log(knightHealthValue);
    knightHealth.textContent = knightHealthValue;
  }
}

function battleEnd() {
  if (knightHealthValue < 0) {
    players.textContent = "Dragon Wins";
  }
  if (dragonHealthValue < 0) {
    players.textContent = "Knight Wins";
  }
}

function submitBattleLog() {
  battleLog.style.display = "flex";
  const battleLogRound = document.createElement("div");
  battleLog.append(battleLogRound);
  createBattleLogElements(battleLogRound);
}

let roundNumber = 1;

function createBattleLogElements(battleLog) {
  const round = document.createElement("p");
  const knightAttackLog = document.createElement("p");
  const dragonAttackLog = document.createElement("p");
  round.classList.add("round-number");
  round.textContent = "Round" + " " + roundNumber;
  roundNumber++;

  if (knightHealing > 0) {
    knightAttackLog.textContent = `Knight ${actionTextKnight} ${knightHealing}.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  }
  if (knightDamage > 0) {
    knightAttackLog.textContent = `Knight ${actionTextKnight} and deals ${knightDamage} damage.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  }
  if (isKnightDefending) {
    knightAttackLog.textContent = `Knight ${actionTextKnight}.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  }
}
