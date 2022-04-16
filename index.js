//Récupurer les élement du DOM
let colone = [...document.getElementsByClassName("colone")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");
//Creation d'objet
let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  MatchNul: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  C4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
}
const verifierVictoire = ()=>{
    //si il ya un victoire
    if( 
        state.c1 == state.c2 && state.c2 == state.c3 && state.c1>0 ||
        state.c1 == state.c4 && state.c4 == state.c7 && state.c1>0 ||
        state.c1 == state.c5 && state.c5 == state.c9 && state.c1>0 ||
        state.c2 == state.c5 && state.c5 == state.c8 && state.c2>0 ||
        state.c3 == state.c6 && state.c6 == state.c9 && state.c3>0 ||
        state.c4 == state.c5 && state.c5 == state.c7 && state.c4>0 ||
        state.c7 == state.c8 && state.c8 == state.c9 && state.c7>0 
    ){ return true ;}
    // si il est null
    else if(
        state.c1 != 0 &&
        state.c2 != 0 &&
        state.c3 != 0 &&
        state.c4 != 0 &&
        state.c5 != 0 &&
        state.c6 != 0 &&
        state.c7 != 0 &&
        state.c8 != 0 &&
        state.c9 != 0 
    ){ return null ;}
    // si pas de victoire
    else{return false;}
}
// remise a zero
const resetState = ()=>{
    joueurEnCours = 1;
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;
}
const jouercolone = (e)=>{
    let idcolone = e.target.id;
    if (state[idcolone] != 0) return;
    state[idcolone] = state.joueurEnCours;
    let isVictoire = verifierVictoire();
    if (isVictoire === true){ 
        alert("le gangant est le joueur" + state.joueurEnCours);
        if (jouourEnCours == 1){
            state.scoreJ1++;
            score1.textContent = state.scoreJ1;
        }
        else{
            state.scoreJ2++;
            score2.textContent = state.scoreJ2;
        }
        resetState();
        colone.forEach((c) => (c.textContent=""));}
    else if (isVictoire === null){
        alert("Match null");
        state.MatchNul++;
        scoreNul.textContent = state.scoreNul;
        colone.forEach((c) => (c.textContent=""));
        resetState();
        }
        else if (isVictoire === false){
            if(state.joueurEnCours === 1){
                e.target.textContent = "X";
                state.joueurEnCours = 2;
                joueur.textContent = "2";
            }
            else{
                e.target.textContent = "O";
                state.joueurEnCours = 1;
                joueur.textContent = "1";
            }
        }    
}

//listener click
colone.forEach((el) =>{
    el.addEventListener('click' ,jouercolone);
})
