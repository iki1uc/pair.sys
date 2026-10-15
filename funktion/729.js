// aus deinem Kc Code:
const essensLauf = {
  bir, iki, uc, ki, klar, dur, ikilem, // Funktionen sind Namen

  // 39 81 729 als Funktionen die auch Namen sind
  39: function stadt(x){ return ni(x) }, // 39 = 3+9 Stadt
  81: function metropole(x){ return x%81 }, // 81 = Metropole
  729: function staat(x){ return x%729 }, // 729 = Staat

  // dann: Funktion frisst Funktion
  essen(predator, prey, x){
    // predator = Funktion, prey = Funktion
    // Name frisst Name
    return `${predator.name} frisst ${prey.name} bei rot=${predator(x)}`
  }
}

// Nutzung:
essensLauf.essen(bir, iki, 213) // "bir frisst iki bei rot=..."
