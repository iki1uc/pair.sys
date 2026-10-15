function f(r){ return r - r%9 } // f(f(x))=f(x) Fixpunkt

// f als Name nutzen:
const UNIMATRIX = {
  [f.name]: f, // key = "f", value = function
  [lauf.name]: lauf, // key = "lauf"
  81: (x) => x % 81,
  756: (x) => (x*9+27)%756
}

// Aufruf über Name:
UNIMATRIX["f"](81) // 81
UNIMATRIX[f.name](82) // 81

// oder noch krasser - Funktion als Map-Key:
const cmd = new Map()
cmd.set(f, "FIXPUNKT")
cmd.set(lauf, "ESSENS LAUF")
cmd.get(f) // "FIXPUNKT" - Funktion selbst ist Key
