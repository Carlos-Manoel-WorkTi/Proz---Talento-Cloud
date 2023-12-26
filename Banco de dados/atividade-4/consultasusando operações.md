## De acordo com os conceitos estudados, exiba os resultados das consultas das operações select, project, união, intersecção e diferença. Siga as instruções com base na tabela apresentada em anexo.

- Mostre as informações apenas dos alunos aprovados. A aprovação é acima de 7,0;
- Exiba as informações dos alunos do primeiro ano com nota maior ou igual a 8,0;
- Exiba apenas os nomes e as notas dos alunos;
- Crie uma tabela PROFESSOR que apresente apenas o primeiro e o último nome do professor;
- Crie uma tabela ALUNO com o primeiro e o último nome de cada;
- Mostre o resultado da união entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;
- Exiba o resultado da intersecção entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;
- Exiba o resultado da diferença entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR. 

![Tabela](./Imagem01_Atividade04_BancoDeDadosI.png)
 ### - Mostre as informações apenas dos alunos aprovados. A aprovação é acima de 7,0;

 
<span style="color:green;">SELECT</span> * <span style="color:green;">FROM</span> ALUNO <span style="color:green;">WHERE</span> NOTA > 7;</span>
<hr/>

 ### - Exiba as informações dos alunos do primeiro ano com nota maior ou igual a 8,0;

  
<span style="color:green;">
SELECT</span> *
<span style="color:green;">FROM</span> ALUNO 
<span style="color:green;">WHERE</span> SERIE <span style="color:violet;">=</span> '1°ano' 
<span style="color:green;">AND</span> Nota 
<span style="color:violet;">>=</span> 8.0;
;
<hr/>

### - Crie uma tabela PROFESSOR que apresente apenas o primeiro e o último nome do professor;

<span style='color:green'> CREATE TABLE </span> PROFESSOR (
    PrimeiroNome 
<span style='color:violet'>VARCHAR(50)</span> ,
    UltimoNome <span style='color:violet'>VARCHAR(50)</span> 
);

<span style='color:green'> INSERT INTO </span>PROFESSOR (Maria, Santana)

<span style="color:green;">
SELECT</span> * 
<span style="color:green;">FROM</span> PROFESSOR;
;

##### SAIDA: Maria, Santana 
<hr/>

### - Crie uma tabela ALUNO com o primeiro e o último nome de cada;

<span style='color:green'> CREATE TABLE </span> ALUNOS_NOMES (
    PRIMEIRO.NOME 
<span style='color:violet'>VARCHAR(50)</span> ,
    ULTIMO.NOME <span style='color:violet'>VARCHAR(50)</span> 
);


<span style='color:green'> INSERT INTO  </span>ALUNOS_NOMES ( PRIMEIRO.NOME, ULTIMO.NOME ) <span style="color:green;">
SELECT</span> P.NOME, U.NOME
<span style="color:green;">FROM</span> ALUNO

<hr/>


### - Mostre o resultado da união entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;

<span style='color:green'>SELECT</span> PRIMEIRO.NOME, ULTIMO.NOME <span style='color:green'>FROM</span> ALUNOS_NOMES
<span style='color:green'>UNION</span>
<span style='color:green'>SELECT</span> P.NOME, U.NOME <span style='color:green'>FROM</span> PROFESSOR;


<hr/>

### - Exiba o resultado da intersecção entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;

<span style='color:green'>SELECT</span> PrimeiroNome <span style='color:violet'>AS</span> Nome, UNome <span style='color:green'>FROM</span> ALUNO
<span style='color:green'>UNION</span>
<span style='color:green'>SELECT</span> Pnome <span style='color:violet'>AS</span> Nome, UNome <span style='color:green'>FROM</span> PROFESSOR;

<hr/>

### - Exiba o resultado da diferença entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR.

<span style='color:green'>SELECT</span> PNome, UNome
<span style='color:green'>FROM</span> ALUNO
<span style='color:green'>WHERE</span> (PNome, UNome) <span style='color:green'>NOT IN</span> (
    <span style='color:green'>SELECT</span> PNome, UNome
    <span style='color:green'>FROM</span> PROFESSOR
);

