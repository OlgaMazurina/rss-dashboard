# rss-dashboard
Разработка ведётся в папке src:
index.html
index.js
style.css

Собирается вебпак в корневую папку!

__________________________________________________

Настройка Web-pack!

npm init

npm install webpack --save-dev

npm install -D webpack --save-dev webpack-cli

npm install -D clean-webpack-plugin

npm install -D html-webpack-plugin

npm install --save-dev postcss-loader postcss-preset-env

npm install style-loader css-loader sass-loader node-sass extract-text-webpack-plugin -D

установка babel
npm install -D babel-loader @babel/core @babel/preset-env webpack


После установки всего
режим разработки для js файла

npm run dev

режим продакшн(минифицированные файлы) для js файла

npm run build

следить за изменениями всего проекта, автоматическая сборка после сейва изменений

npm run watch

