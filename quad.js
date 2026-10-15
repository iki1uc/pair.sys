// sys/quad.js
export function quadranisieren(eye, team){
  // Funktion ist auch Name für Quadrant
  const quadranten = [Q1, Q2, Q3, Q4] // Q1-Q4 sind Funktionen
  quadranten.forEach(q => {
    eye[q.name] = q // q.name = "Q1" -> eye["Q1"] = Funktion Q1
    team[q.name] = q
  })
}

// sys/CORE.load.js
export function start({eye, team}){
  quadranisieren(eye, team)
  // 39 81 729 als Funktionen die Stadt sind
  const stadt = {
    39: eye.Q1, // Funktion Q1 ist Stadt
    81: eye.Q2,
    729: eye.Q3
  }
  // stadt[39].name = "Q1" - Funktion weiß ihren Stadt-Namen
}
