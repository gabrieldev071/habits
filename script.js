const form = document.querySelector("#form-habits")

/* variável recebendo a biblioteca NLWSetup com a variável form do querySelector*/
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

/* adicionando evento ao clicar e chamando a função add */
button.addEventListener("click", add)

/* adicionando evento após ocorrer alterações no form do HTML e chama a função save */
form.addEventListener("change", save)

const dias = 10;

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
/*   const today = "21/01" */
  

  /* rela recebe uma data e verifica se esse dia existe com true ou false */
  const dayExists = nlwSetup.dayExists(today) // true or false

  if(dayExists){
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today);

}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify
  (nlwSetup.data))

}

/* objeto que contém os dados compostos por keys (data-name) no form e valores através dos Arrays 
const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  takePills: ["01-03"],
  journal: ["01-02"], 
}*/

/* O JSON.parse (função) é responsável por pegar um texto e transformado em objeto novamente.  */

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

/* adicionamos os dados pra dentro do objeto nlwSetup através do .setData(data) e depois é realizado o load dos dados */
nlwSetup.setData(data);
nlwSetup.load();
 