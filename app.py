"""
  @author: qianguangshun@gmail.com
  @file: server.py
  @time: 2021/5/14 15:58
  @desc:
"""

import os

from flask import Flask, jsonify, make_response

app = Flask(__name__)

music_dir = u"C:\\Users\\qians\\Music"


def file_name(file_dir):
    musicList = []
    for root, dirs, files in os.walk(file_dir):
        for file in files:
            if os.path.splitext(file)[1] == '.mp3':
                musicList.append(file)
    return musicList


@app.route('/music')
def hello_world():
    response = make_response(jsonify(file_name(music_dir)))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET'
    response.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
    return response


if __name__ == '__main__':
    app.config['JSON_AS_ASCII'] = False
    app.run(host='0.0.0.0', debug=True, port=9900, threaded=True, processes=1)
