# Projeto Estágio Smarkio

Passos para rodar esse projeto: (obs. Para esses passos funcionarem é preciso ter instalado o gerenciador de pacotes npm)

1. Clone esse repositório com `git clone https://github.com/matheusbarraboni/smarkio-estagio.git`
2. Dentro do repositório rode o comando `npm install -g @angular/cli` para instalar o framework angular
3. Ainda dentro do mesmo diretório rode o comando `npm i` para instalar as dependêcias do NodeJS
4. Entre no diretório backend com `cd backend` e faça novamente o *passo 3*
5. Ainda dentro de backend crie um arquivo chamado ".env" para declarar as váriaveis de ambiente
6. Dentro do arquivo .env declare as váriaveis listadas abaixo de acordo com o seu ambiente
  - API_KEY="Chave da sua API IBM Watson"
  - API_URL="URL da sua API IBM Watson"
  - DB_NAME="Nome da base de dados a ser utilizada"
  - DB_USER="Usuário do seu Banco de dados MySQL"
  - DB_PASSWORD="Senha do seu Banco de dados MySQL"


# Possiveis erros

- Portas de rede ocupadas.
    Essa aplicação usa as portas 4200 e 3000. Caso haja outra aplicação usando essas portas tente: ou mudar a porta dessa aplicação ou derrubar o serviço ocupando a porta.
    
- Base de dados inexistente.
    Essa aplicação não gera a base de dados MySQL a ser utilizada, gera somente as tabelas. Portanto antes de rodar a aplicação é necessário configurar uma base de dados para ela e a indicar no arquivo .env dentro do diretório backend.
