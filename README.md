# vue2-template

> Vue2 + Router + Vuex + axios + Flex + Sass + Webpack

## Build Setup
``` cc
cnpm install vue-cli -g

vue init webpack vue2-test1
cd vue2-test1
cnpm install

cnpm install vuex axios -S

cnpm install node-sass sass-loader -D

edit {extensions: ['.js', '.vue', '.json']}
  to {extensions: ['.js', '.vue', '.json', '.css', '.scss']} 
  in webpack.base.conf.js

cnpm run dev
cnpm run build
```

## environment
node: v8.1.2
cnpm@5.1.1
vue-cli: 2.8.2
