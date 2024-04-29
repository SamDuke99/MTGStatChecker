# MTGStatChecker
A simple application to check the probability of different parts of a Magic: The Gathering Deck. In this case 'Modern Burn'.

**Usage**
The simulator calculates the probability based on the provided parameters. You can adjust the simulation settings and target card in the index.js file.

**Simulation Settings**

numSimulations: The number of opening hand simulations to run. Increase this value for more accurate results, but keep in mind that it will also increase the execution time.

numDraws: The number of additional draws after the opening hand and first draw step.

numMulligans: The number of mulligans taken.

targetCardName: You can specify the target card for which you want to calculate the probability. Update the targetCardName variable in the index.js file to the desired card name.

