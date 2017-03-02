# Twitch Stream Finder

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## About

[Demo](https://peaceful-sierra-72830.herokuapp.com/) 

This project was an exercise in api useage with Angular2+ Express and the twitch.tv API 

## How to Run
Grab the code with `git clone`

Run `npm install` and while its installing grab an API [Key](https://dev.twitch.tv/docs) from Twitch and add it to .env

Run `ng serve` for a local dev server on `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run dev` to launch the express backend and dist build on server `http://localhost:8080/`. You may need to comment out `app.use(forceSSL());` inside the server.js

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Further CLI help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
