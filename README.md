# CRUD-localStorage-exemple
### Basic CRUD model using React, Redux-toolkit, localstorage as a fake db, picsum API for random post image, styled with React bootstrap and SCSS.  
  
### Possible actions :  
- Post or Edit article (title + content, if you are the owner)  
-	Remove article  
- Like a post (Total like counter under user profile pictures is incremented only if on of his post is liked).

The post image is fetched randomly with picsum API :
https://picsum.photos/

You can try it online here :
https://nnieddu.github.io/CRUD/

To try it on your machine clone this repo then in the folder :
```
npm install
npm start
```

To create Windows .exe "portable version" (in /out/crud-win32-x64/ by default):
```
npm install
npm run package
```

To create Windows exe installer:
```
npm install
npm run package
```

<img alt="GIF CRUD DEMO" src="https://github.com/nnieddu/CRUD-exemple/blob/main/img.gif"/>
