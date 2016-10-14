# 今ココなう（仮）API仕様書

## 概要
そのうち書く

## ユーザ関係
そのうち書く



## 位置関係

### POST /api/post :lock:

 > 位置情報の送信  

||リクエストフォーマット|
|---|---|
|ContentType|application/x-www-form-urlencoded|  



||name|description|
|---|---|---|
||time|時刻。YYYY-MM-DD'T'hh:mm:ss.sssZZZZZ形式(必須)|
||lat|緯度(°)。10進形式(必須)|
||lon|経度(°)。10進形式(必須)|
||gpsq|fix情報(省略可)|
||gpsn|衛星捕捉数(省略可)|
||gpsh|高度(m) (省略可)|
||gpsd|方位(°)。北を0とした時計回りの角度(省略可)|
||gpsv|速度(km/h)(省略可)|
||save|サーバにデータを保存するなら'1'。しないなら'0'。デフォルト'1'(省略可)|
||t|マーカータイプ。<br>'0':矢印 '1':携帯電話 '2':飛行機 '3':電車 '4':新幹線<br>'5':バス '6':自転車 '7':徒歩, '8':バイク, '9':ヘリコプター,'10':船<br> デフォルト'0'(省略可)|

#### response
|| |
|---|---|
|ContentType|text/plain; charset=utf-8|
|Response Body|成功の場合'OK'、失敗/エラーの場合'NG'|

#### 備考
めう