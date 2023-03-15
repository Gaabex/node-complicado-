import chalk from 'chalk';
import fs from 'fs';


function extraiLink(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayresultados = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayresultados.push({ [temp[1]] : [temp[2]]})
    }
    return(arrayresultados);
}

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, "ARQUIVO NÃO ENCONTRADO"));
}

async function pegaArquivo(caminhoDoArquivo){

   try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        console.log(extraiLink(texto))
   } catch(erro){
        tratarErro(erro);
   }
}

pegaArquivo('../arquivos/texto.md');
//extraiLink(texto);