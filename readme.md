局域网里其他设备播放其中一台设备上的歌曲

### 0.安装配置nginx python3 pip

nginx 配置文件服务器以访问歌曲

### 1.安装flask

```powershell
pip install Flask
```

### 2.运行 app.py

修改app.py里存放歌曲的文件夹 后运行

```powershell
python app.py
```

### 3.配置js文件里的变量

修改musicPlayer.js里的url

```javascript
const musicListUrl = "http://192.168.0.8:9900/music"
const musicUrl = "http://192.168.0.8:8889/歌曲/KuGou/"
```

### 4.放到nginx下html下面

将文件夹放到nginx 下运行