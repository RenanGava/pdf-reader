# Pdf-Reader - Server
`Essa API foi desenvolvida para fins de estudo da Lib pdf2json`
<br/>
Quem quiser testar a API vou deixar ela disponivel por um tempo, para quem quiser testar ver como funciona a conversão de pdf em **String**

## 🚀 Começando
Para começar precisamos entender como é feito o envio de arquivo

*1-* `Precisamos configurar o multer e para isso configuramos ele de maneira local na nossa máquina e eliminamos o arquivo após o fim da conversào em  String`<br/>

*2-* `O envio do arquivo é feito através da rota "/"`<br/>

*3-* `O arquio é enviado no protocolo HTTP usando o header da requisição utilizando o contentType:"multipart-form-data" ou como usado no Reactjs e Nextjs no exemplo abaixo`
<br/>

`No exemplo abaixo utilizamos o *FormData* para configurar o envio do arquivo para a API`

```js

const data = new FormData()

data.append('file', event.target.files)

const response = await axios.post('http://localhost:${PORT}',)

```

### 📋 Pré-requisitos

Não é necessário banco de dados nem nada complicado para ser utilizada.

```
PORT= "porta onde a plicaçào ira funcionar"
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Para isntalar todas as dependências da apicação 

```sh
yarn install
ou

npm install
```

### 📋 Como Utilizar
Quem quiser testar a API vou deixar ela disponivel por um tempo, para quem quiser testar ver como funciona a conversão de pdf em **String** 
<br/>
<br/>
Comando para iniciar a API após serem instaladas todas as dependências.

```sh
yarn dev
```

