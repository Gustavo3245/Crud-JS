#Utilzando a atual imagem base do node.js.
FROM node:latest

#Definindo o diretorio pai como o trabalho no contêiner.
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o contêiner.
COPY package.json ./

#install dependências do projeto.
RUN npm install

#Copiando todos os arquivos para o contêiner.
COPY . .

#Expondo a porta localhost:3000
EXPOSE 3000

#Rodando os seguintes comandos no terminal.
CMD [ "npm", "run", "dev"]
