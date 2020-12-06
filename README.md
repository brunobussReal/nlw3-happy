<h1 align="center">
    <img alt="Happy" title="Happy" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/happy.png" width="100%">
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Project
Happy is an app that connects people to institutional daycare centers to make many children's day happier 💜

## 🔖 Layout

- [Layout Web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web)
- [Layout Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) + [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed on your machine.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/brunobussReal/nlw3-happy
```

### Install API 
```bash
# Go into the repository from base directory
$ cd nlw3-happy/backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn typeorm migration:run

# Start server
$ yarn dev

# running on port 3333
```

### Install Front-end

```bash
# Go into the repository from base directory
$ cd nlw3-happy/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

 ### Install Mobile
 
 In order to run mobile version in your phone, you need to install expo first. You can find it on [Google Play]( https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US) or [App Store](https://apps.apple.com/pt/app/expo-client/id982107779), or you can simply run it on emulator.

```bash
# Go into the repository from base directory
$ cd nlw3-happy/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo page will open up, you scan the qrcode on terminal or expo page with your phone.

``` 

## 🧠 Next steps

- Restricted access using [bcrypt](https://www.npmjs.com/package/bcrypt)
- Password recovery
- Orphanage registration
- Spash screen on React Native
- User Onboarding
- Actual user location
- Multi-stage registration
- App Logout
- App Deploy

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.



