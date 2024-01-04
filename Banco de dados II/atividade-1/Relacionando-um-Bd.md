<h3>Desenvolva um banco de dados e relacione tabelas através de chaves estrangeiras ou nomes de colunas iguais. Siga as instruções:
crie uma base de dados; 
crie tabelas nessa base de dados;
em cada tabela, adicione atributos;
insira dados em cada tabela;
utilize os comandos Joins para realizar consultas nas tabelas. 
 </h3>

 - Criando o banco de dados 'musica_bd'
   
        CREATE DATABASE musica_bd;
        
        USE musica_bd;

 - Tabela para os gêneros musicais

        CREATE TABLE generos (
            id_genero INT AUTO_INCREMENT PRIMARY KEY,
            nome_genero VARCHAR(50) NOT NULL,
            descricao TEXT
        );

 - Tabela para os artistas

        CREATE TABLE artistas (
            id_artista INT AUTO_INCREMENT PRIMARY KEY,
            nome_artista VARCHAR(100) NOT NULL,
            id_genero INT,
            FOREIGN KEY (id_genero) REFERENCES generos(id_genero)
        );

 - Tabela para as músicas

        CREATE TABLE musicas (
            id_musica INT AUTO_INCREMENT PRIMARY KEY,
            titulo_musica VARCHAR(150) NOT NULL,
            id_artista INT,
            duracao TIME,
            FOREIGN KEY (id_artista) REFERENCES artistas(id_artista)
        );

 - Inserindo dados na tabela 'generos'

        INSERT INTO generos (nome_genero, descricao) VALUES
            ('Rock', 'Gênero musical que se originou como "rock and roll" nos Estados Unidos na década de 1950.'),
            ('Pop', 'Gênero popular de música que se originou nos anos 1950.'),
            ('Hip Hop', 'Gênero musical que inclui uma ampla variedade de estilos, como rap, breakdance, DJing e beatboxing.');

 - Inserindo dados na tabela 'artistas'

        INSERT INTO artistas (nome_artista, id_genero) VALUES
            ('Artista Rock', 1),
            ('Artista Pop', 2),
            ('Artista Hip Hop', 3);

 - Inserindo dados na tabela 'musicas'

        INSERT INTO musicas (titulo_musica, id_artista, duracao) VALUES
            ('Música do Rock', 1, '00:04:30'),
            ('Música Pop', 2, '00:03:50'),
            ('Música Hip Hop', 3, '00:05:20');

 - Consulta utilizando INNER JOIN para obter músicas com seus artistas e gêneros correspondentes
        
        SELECT musicas.titulo_musica, artistas.nome_artista, generos.nome_genero
        FROM musicas
        INNER JOIN artistas ON musicas.id_artista = artistas.id_artista
        INNER JOIN generos ON artistas.id_genero = generos.id_genero;
