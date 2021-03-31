<div align="right">
  <a href="README.md">
    <img alt="Ler em Portugês do Brasil" src="https://img.shields.io/static/v1?label=&message=Ler+em+Portugu%C3%AAs+do+Brasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/m5tmDrL/social-auth.png"></td>
    <td>  
      <h1>@desco/social-auth</h1>
      Package that allows login via Google (Backend).
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 1.1.1" src="https://img.shields.io/static/v1?label=Version&message=1.1.1&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        ⛏️ Partially ready to use 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## 📋 Table of Contents

- [✔️ Resources](#Resources)
- [🛠️ Technology](#Technology)
- [⚙️ Installation](#Installation)
- [📦 Import](#Import)
- [📚 How to use](#How-to-use)

---

<a name="Resources"></a>

## ✔️ Resources

- [x] Google;
- [ ] Facebook;
- [ ] Twitter;
- [ ] Instagram;
- [ ] Linkedin;
- [ ] Steam;

---

## 🛠️ Technology

The following technologies are used:

- [NodeJS](https://nodejs.org/en/);
- [GoogleApis](https://www.npmjs.com/package/googleapis);
- [Axios](https://www.npmjs.com/package/axios);

---

<a name="Installation"></a>

## ⚙️ Installation

```bash
npm install --save @desco/social-auth
```

> Note that it will be necessary to have **NPM** installed for the command to work.

---

<a name="Import"></a>

## 📦 Import

### Google

```js
const SocialAuth = require("@desco/social-auth");
```

---

<a name="How-To-Use"></a>

## 📚 How to use

### Google

#### Getting Started

We started the Google API by passing a JSON parameter with:

- **id** - Google API id;
- **key** - Google API key;
- **callbackUrl** - URL to which Google should redirect the user after login;

> [See how to create a Google application here](https://support.google.com/a/answer/9187142?hl=en)

```js
const Google new SocialAuth.Google({
  id: googleId,
  key: googleKey,
  callbackUrl: 'http://my-domain.com:8080/google-cb/'
})
```

#### Retrieving Login URL

With the Google API started, we need to generate a Google login URL which must be returned in order for the front end to redirect the user.

As a parameter we must pass an array containing all the Google scopes that we wish to access with the login.

```js
const url = Google.generateAuthUrl(["userinfo.email", "userinfo.profile"]);
```

> Note that only the scope name is required and not the entire URL

> [See a list of all scopes here](https://developers.google.com/identity/protocols/oauth2/scopes)

#### Setting Credentials

After the user logs in, Google will redirect him back to the **callbackUrl** informed at the start of the API.

In this redirection, the parameter **code** will be informed via querystring that we will use to set the user's credentials in our API and receive the access token.

```js
const token = await Google.setCredentials(code);
```

#### Retrieving User Information

With the credentials set, we can recover the user's Google account data:

```js
const data = Google.userInfo();
```

> The data returned will be that referring to the scopes requested in the generation of the login URL and that the user must have allowed access to.

#### Checking Access

With the credentials set, we can also verify that the access is still valid and active:

```js
const valid = Google.checkAccess();
```

---

## Author

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
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
