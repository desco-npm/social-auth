<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=🇺🇸 Read in American English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/m5tmDrL/social-auth.png"></td>
    <td>  
      <h1>@desco/social-auth</h1>
      Pacote que permite login via Google (Backend).
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licença&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 1.1.1" src="https://img.shields.io/static/v1?label=Versão&message=1.1.1&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        ⛏️ Parcialemnte pronto para uso 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">Veja outros projetos NPM aqui.</a>

> <a href="https://github.com/descoifica" target="_blank">Veja outros projetos aqui.</a>

---

## 📋 Tabela de conteúdos

* [✔️ Recursos](#Recursos)
* [🛠️ Tecnologias](#Tecnologias)
* [⚙️ Instalação](#Instalação)
* [📦 Importação](#Importação)
* [📚 Como Usar](#Como-Usar)

---

<a name="Recursos"></a>

## ✔️ Recursos

- [x] Google;
- [ ] Facebook;
- [ ] Twitter;
- [ ] Instagram;
- [ ] Linkedin;
- [ ] Steam;
---

## 🛠️ Tecnologias

As seguintes tecnologias são utilizadas:

* [NodeJS](https://nodejs.org/en/);
* [GoogleApis](https://www.npmjs.com/package/googleapis);
* [Axios](https://www.npmjs.com/package/axios);

---

<a name="Instalação"></a>

## ⚙️ Instalação

```bash
npm install --save @desco/social-auth
```

> Note que será necessário ter o **NPM** instalado para o comando funcionar.

---

<a name="Importação"></a>

## 📦 Importação

### Google

```js
const SocialAuth = require('@desco/social-auth')
```

---

<a name="Como-Usar"></a>

## 📚 Como Usar

### Google

#### Iniciando

Iniciamos a API da Google passando como parâmetro um JSON com:

* **id** - Id da API da Google;
* **key** - Chave da API da Google;
* **callbackUrl** - URL para onde a Google deve redirecionar o usário após o login;

> [Veja aqui como criar uma aplicação Google](https://support.google.com/a/answer/9187142?hl=pt-BR)

```js
const Google new SocialAuth.Google({
  id: googleId,
  key: googleKey,
  callbackUrl: 'http://my-domain.com:8080/google-cb/'
})
```

#### Recuperando URL de Login

Com a API Google iniciada, precisamos gerar uma URL de login da Google a qual deverá ser retornada para que o front-end redirecione o usuário.

Como parâmetr devemos passar um array contendo todos os escopos da Google que desejamos ter acesso com o login.

```js
const url = Google.generateAuthUrl([ 'userinfo.email', 'userinfo.profile', ])
```

> Note que somente o nome do escopo é necessário e não a URL inteira

> [Veja aqui uma lista de todos os escopos](https://developers.google.com/identity/protocols/oauth2/scopes)

#### Setando Credenciais

Após o usuário realizar o login, a Google irá redirecioná-lo devolta para a **callbackUrl** informada na inicialização da API.

Nesse redirecionamento será informado via querystring o parâmetro **code** que iremos utilizar para setar as credenciais do usuário na nossa API e receber o token de acesso.

```js
const token = await Google.setCredentials(code)
```

#### Recuperando Informações do Usuário

Com as credenciais setadas, podemos recuperar os dados da conta Google do usuário:

```js
const data = Google.userInfo()
```

> Os dados retornados serão aqueles referentes aos escopos solicitados na geração de URL de login e que o usuário deverá ter permitido acesso.

#### Checando o Acesso

Com as credenciais setadas, também podemos verificar se o acesso ainda é valido e ativo:

```js
const valid = Google.checkAccess()
```

---

## Autor

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Geral @descodifica" src="https://img.shields.io/static/v1?label=GitHub Geral&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>