interface Card {
    name: string;
    manaValue: string;
  }
  
  const decklist: Card[] = [
    { name: "Sunbaked Canyon", manaValue: "land" },
    { name: "Sunbaked Canyon", manaValue: "land" },
    { name: "Sunbaked Canyon", manaValue: "land" },
    { name: "Sunbaked Canyon", manaValue: "land" },
    { name: "Inspiring Vantage", manaValue: "land" },
    { name: "Inspiring Vantage", manaValue: "land" },
    { name: "Inspiring Vantage", manaValue: "land" },
    { name: "Inspiring Vantage", manaValue: "land" },
    { name: "Wooded Foothills", manaValue: "land" },
    { name: "Bloodstained Mire", manaValue: "land" },
    { name: "Bloodstained Mire", manaValue: "land" },
    { name: "Bloodstained Mire", manaValue: "land" },
    { name: "Bloodstained Mire", manaValue: "land" },
    { name: "Skewer the Critics", manaValue: "3 (1)" },
    { name: "Skewer the Critics", manaValue: "3 (1)" },
    { name: "Skewer the Critics", manaValue: "3 (1)" },
    { name: "Skewer the Critics", manaValue: "3 (1)" },
    { name: "Mountain", manaValue: "land" },
    { name: "Mountain", manaValue: "land" },
    { name: "Mountain", manaValue: "land" },
    { name: "Sacred Foundry", manaValue: "land" },
    { name: "Sacred Foundry", manaValue: "land" },
    { name: "Goblin Guide", manaValue: "1" },
    { name: "Goblin Guide", manaValue: "1" },
    { name: "Goblin Guide", manaValue: "1" },
    { name: "Goblin Guide", manaValue: "1" },
    { name: "Monastery Swiftspear", manaValue: "1" },
    { name: "Monastery Swiftspear", manaValue: "1" },
    { name: "Monastery Swiftspear", manaValue: "1" },
    { name: "Monastery Swiftspear", manaValue: "1" },
    { name: "Lava Spike", manaValue: "1" },
    { name: "Lava Spike", manaValue: "1" },
    { name: "Lava Spike", manaValue: "1" },
    { name: "Lava Spike", manaValue: "1" },
    { name: "Rift Bolt", manaValue: "3 (1)" },
    { name: "Rift Bolt", manaValue: "3 (1)" },
    { name: "Boros Charm", manaValue: "2" },
    { name: "Boros Charm", manaValue: "2" },
    { name: "Boros Charm", manaValue: "2" },
    { name: "Boros Charm", manaValue: "2" },
    { name: "Play with Fire", manaValue: "1" },
    { name: "Play with Fire", manaValue: "1" },
    { name: "Play with Fire", manaValue: "1" },
    { name: "Play with Fire", manaValue: "1" },
    { name: "Dragon's Rage Channeler", manaValue: "1" },
    { name: "Dragon's Rage Channeler", manaValue: "1" },
    { name: "Dragon's Rage Channeler", manaValue: "1" },
    { name: "Dragon's Rage Channeler", manaValue: "1" },
    { name: "Mishra's Bauble", manaValue: "0" },
    { name: "Mishra's Bauble", manaValue: "0" },
    { name: "Mishra's Bauble", manaValue: "0" },
    { name: "Mishra's Bauble", manaValue: "0" },
    { name: "Lightning Bolt", manaValue: "1" },
    { name: "Lightning Bolt", manaValue: "1" },
    { name: "Lightning Bolt", manaValue: "1" },
    { name: "Lightning Bolt", manaValue: "1" },
    { name: "Thunderous Wrath", manaValue: "6 (M1)" },
    { name: "Thunderous Wrath", manaValue: "6 (M1)" },
    { name: "Thunderous Wrath", manaValue: "6 (M1)" },
    { name: "Thunderous Wrath", manaValue: "6 (M1)" },
  ];
  
  function drawOpeningHand(deck: Card[], numCards: number) {
    const shuffledDeck = [...deck];
    const openingHand = [];
    const handSize = Math.min(numCards, shuffledDeck.length);
  
    for (let i = 0; i < handSize; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
      const drawnCard = shuffledDeck.splice(randomIndex, 1)[0];
      openingHand.push(drawnCard);
    }
  
    return openingHand;
  }
  
  function countOpeningHandsContainingCard(openingHands: any[][], targetCardName: string) {
    let count = 0;
  
    for (const hand of openingHands) {
      const cardsInHand = hand.map((card: { name: any; }) => card.name);
      if (cardsInHand.indexOf(targetCardName) !== -1) {
        count++;
      }
    }
  
    return count;
  }
  
  function countCardOccurrences(deck: any, targetCardName: string) {
    let count = 0;
    for (const card of deck) {
      if (card.name === targetCardName) {
        count++;
      }
    }
    return count;
  }
  
  function calculateProbabilityAfterDraws(deck: any[], numDraws: number) {
    let remainingCardCount = countCardOccurrences(deck, "Thunderous Wrath");
    let probability = 0;
  
    for (let i = 0; i < numDraws; i++) {
      const drawnCard = deck.pop();
      if (drawnCard && drawnCard.name === "Thunderous Wrath") {
        remainingCardCount--;
        probability = remainingCardCount >= 0 ? 1 - (remainingCardCount / deck.length) : 1;
      }
    }
  
    return probability;
  }
  
  function calculateOddsOfDrawingCardAfterMulligan(deck: string | any[], targetCardName: string, numDraws: number, numMulligans: number) {
    let totalCards = deck.length;
    let remainingCardCount = countCardOccurrences(deck, targetCardName);
    let probability = 0;
  
    for (let mulligan = 0; mulligan < numMulligans; mulligan++) {
      const cardsToBottom = Math.min(remainingCardCount, numDraws);
      remainingCardCount -= cardsToBottom;
      totalCards -= cardsToBottom;
    }
  
    for (let i = 0; i < numDraws + numMulligans; i++) {
      const drawProbability = remainingCardCount / totalCards;
      probability += drawProbability;
      remainingCardCount--;
      totalCards--;
    }
  
    return probability;
  }
  

  const numSimulations = 100000;
  const targetCardName = "Thunderous Wrath";
  const numDraws = 5;
  const numMulligans = 1;


  const allOpeningHands = [];
  for (let i = 0; i < numSimulations; i++) {
    allOpeningHands.push(drawOpeningHand(decklist, 7));
  }
  
  const count = countOpeningHandsContainingCard(allOpeningHands, targetCardName);
  const percentage = (count / numSimulations) * 100;
  
  console.log(`Percentage of opening hands containing ${targetCardName}: ${percentage.toFixed(2)}%`);
  
  const probability = calculateProbabilityAfterDraws(decklist, numDraws);
  console.log(`Probability of drawing Thunderous Wrath after ${numDraws} additional draws: ${probability}`);
  
  const odds = calculateOddsOfDrawingCardAfterMulligan(decklist, targetCardName, numDraws, numMulligans);
  const probabilityPercentage = Math.abs(odds * 100).toFixed(2);
  console.log(`Probability of drawing ${targetCardName} after taking ${numMulligans} mulligan(s) and drawing ${numDraws} card(s): ${probabilityPercentage}%`);
  