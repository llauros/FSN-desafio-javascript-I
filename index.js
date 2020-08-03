// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
const nomeEscola = "DH"

//var alunosDaEscola = [];
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// Registro de Alunos
function adicionarAluno(nomeAluno){
    if(alunosDaEscola.find(novoAluno => novoAluno.nome == nomeAluno)){       
        return "Aluno Já Cadastrado";    
    }

    alunosDaEscola.push({nome: nomeAluno});
    return "sucess";
}

// Lista de Alunos
function listarAlunos(){
    for(let indice of alunosDaEscola){
      console.log(indice);
    }
}

// Buscar alunos
function buscarAluno(nomeAluno){
    let alunoBuscado = alunosDaEscola.filter(valor => nomeAluno == valor.nome);

    if (alunoBuscado.length == [].length){
        return "Não há registro";
    }

    alunoBuscado = alunoBuscado[0]; 
    return alunoBuscado;
}
// Cadastrar Aluno em um Curso
function matricularAluno(aluno, curso){
    let dataAtual = new Date();
    let registroDoAluno = buscarAluno(aluno.nome);
    
    if( !(registroDoAluno.indexOf("Não há registro")) ){
        return "Este aluno ainda não foi cadastrado"
    }
    
    aluno.push({curso: curso, dataMatricula: dataAtual});

    return `${aluno.nome} cadastrado em ${curso}\n -- Dia: ${dataAtual.getDate()} Mês: ${dataAtual.getMonth() + 1}`;
}

function aplicarFalta(aluno){
    let registroDoAluno = buscarAluno(aluno.nome);
    if( (registroDoAluno === "Não há registro") ){
        return "Este aluno ainda não foi cadastrado"
        } else if ( aluno.curso == [].length) {
            return "Não ha como aplicar faltas para este aluno. Favor realizar a matricula do mesmo em algum curso";
        }
    
    ++aluno.faltas;
    return `Falta aplicada ao ${aluno.nome}`;  
}

function aplicarNota(aluno, nota){
    let registroDoAluno = buscarAluno(aluno.nome);
    if( (registroDoAluno === "Não há registro") ){
        return "Este aluno ainda não foi cadastrado"
        } else if ( aluno.curso == [].length) {
            return "Não ha como aplicar faltas para este aluno. Favor realizar a matricula do mesmo em algum curso";
        }
    
    aluno.notas.push(nota);
    return `Nota aplicada ${aluno.nome}`;  
}

function aprovarAluno(aluno){
    let registroDoAluno = buscarAluno(aluno.nome);
    if( (registroDoAluno === "Não há registro") ){
        return "Este aluno ainda não foi cadastrado"
        } else if ( aluno.curso == [].length) {
            return "Não ha como aplicar faltas para este aluno. Favor realizar a matricula do mesmo em algum curso";
        }
    
    return aluno.faltas <= 3 && aluno.notas >= 7 ? "Aluno Aprovado":"Aluno Reprovado";
} 