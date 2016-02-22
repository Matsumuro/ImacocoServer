/*
    �������ʤ������饤����ȸ����ߴ������Х�����ץ�

    Copyright (c) 2016 @Hamache9821
    The MIT License (MIT)
*/

//http://www.imacoconow.net/api.html

//�⥸�塼�����
var fs = require('fs');
var util = require('util');
var port = process.env.PORT || 80;
var basicAuth = require('basic-auth-connect');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//todo mongodb

//test location
 _TEST_ = {};
 _TEST_BOT_DIR_ = 0;


//todo ǧ�ڲ��λ���Ĵ���ޤ�
app.all('/user/*', basicAuth(function(user, password) {
     return user === 'username' && password === 'password';
}));


//���Τ���
app.get('/static/view.html', function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
});


//���Τ���
app.get('/view', function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
});


//���Τ���
app.get('/view_data', function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
});

//���ȴΤ����ɤ��Ȥ�
app.get('/user', function(req, res){
    console.log(req.query);
    var name = "";
    if (req.query.name) {
    name = req.query.name;
    }
    res.send('');
});

//���ȴΤ����ɤ��Ȥ� auth
app.post('/user', function(req, res){
    console.log(req.query);
    var name = "";
    if (req.query.name) {
    name = req.query.name;
    }
    res.send('');
});

//���Ĥ���� auth
app.get('/user/gpx', function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
});

//���Τ��� auth https
app.post('/user/update_userinfo', function(req, res){
    console.log('CALL /api/update_userinfo');
    res.send('');

});

//���Τ��� https
app.get('/user/delete_data', function(req, res){
    console.log('CALL /api/delete_data');
    res.send('');

});

//���Τ��� https
app.get('/user/set_public', function(req, res){
    console.log('CALL /api/set_public');
    res.send('');

});

//���ȴ� https
app.get('user/getuserinfo', function(req, res){
    console.log('CALL /api/getuserinfo');
//    console.log(util.inspect(req.body));
    console.log('user:' + req.query.user);
    res.send('');
});

//���ȴ� auth ǧ����ˡ�ͤ���
app.post('/api/post', function(req, res){
    console.log('CALL /api/post:' );
//    console.log(util.inspect(req));
//    console.log(util.inspect(req.body));

    //todo mongodb, userId�ɤ������äƤ뤫Ĵ�٤�
    //�ƥ����ѤˤȤꤢ�����ѿ����ݻ�
    _TEST_.valid          = true;
    _TEST_.user           = "testbot2";
    _TEST_.nickname       = "testbot2";
    _TEST_.lat            = req.body.lat;
    _TEST_.lon            = req.body.lon;
    _TEST_.dir            = req.body.gpsd;
    _TEST_.altitude       = req.body.gpsh;
    _TEST_.velocity       = req.body.gpsv;
    _TEST_.type           = req.body.t;
    _TEST_.ustream_status = "offline";

    console.log(util.inspect(_TEST_));
/*
    //�ǥХå��ѤΤ��
    fs.writeFile('writetest.txt', util.inspect(req.body) , function (err) {
        console.log(err);
    });
*/
    res.send('OK');
});

//���ȴ�
app.get('/api/user_list', function(req, res){
    console.log('CALL /api/user_list');
    console.log(util.inspect(req.headers));

    var d={};
    var list = [];
    var user_list ={};
    
    if (false){
        d.result = 0;
        d.errmsg = "err test msg.";
    } else {
        //test bot
        user_list.valid = true;
        user_list.user  = "testbot";
        list.push(user_list);

        user_list ={};
        user_list.valid = true;
        user_list.user  = "testbot2";
        list.push(user_list);

        d.result = 1;
        d.list = list;
    }

    res.set('Content-Type', 'text/javascript; charset=utf-8');
    res.send("(" + JSON.stringify(d) + ")"); //���Τ�����ľ��
    
});

//���ȴ�
app.get('/api/latest', function(req, res){
    console.log('CALL /api/latest');
    console.log(util.inspect(req.headers));

    var d={};
    var points = [];
    var latest ={};
    
    if (false){
        d.result = 0;
        d.errmsg = "err test msg.";
    } else {
        //test bot
        ++_TEST_BOT_DIR_;

        if (_TEST_BOT_DIR_ = 360)
        {
            _TEST_BOT_DIR_ = 0;
        }

        //test �ۤ�����
        latest ={};
        latest.valid          = true;
        latest.user           = "testbot";
        latest.nickname       = "testbot";
        latest.lat            = 34.6873316;
        latest.lon            = 135.5238653;
        latest.dir            = _TEST_BOT_DIR_;
        latest.altitude       = 3600;
        latest.velocity       = 0;
        latest.type           = 0;
        latest.ustream_status = "offline";
        
        points.push(latest); //����
        points.push(_TEST_); //���饤����Ȥ���
        
        //���͸Ǥޤä���mongodb�Ȥ�
        
        d.result = 1;
        d.points = points;
//        d.group_updated = false;

    }
    res.set('Content-Type', 'text/javascript; charset=utf-8');
    res.send("(" + JSON.stringify(d) + ")");//���Τ�����ľ��
});

//�ȤäƤʤ��� auth
app.get('/api/getaddress', function(req, res){
    console.log('CALL /api/getaddress');
    console.log(util.inspect(req.body));
    res.send('OK');

});

//���ȴ�
app.get('/api/getuserinfo', function(req, res){
    console.log('CALL /api/getuserinfo');
    console.log(util.inspect(req.headers));

    res.send('OK');
});

//���Τ���
app.get('/api/getgroupinfo', function(req, res){
    console.log('CALL /api/getgroupinfo');
    console.log(util.inspect(req.body));
    res.send('OK');


});

//���Τ��� https
app.post('/api/creategroup', function(req, res){
    console.log('CALL /api/creategroup');
    console.log(util.inspect(req.body));
    res.send('OK');


});

//���Τ��� https
app.post('/api/updategroup', function(req, res){
    console.log('CALL /api/updategroup');
    console.log(util.inspect(req.body));
    res.send('OK');


});

//���Τ��� https
app.get('/api/deletegroup', function(req, res){
    console.log('CALL /api/deletegroup');
    console.log(util.inspect(req.body));


});

//���Τ��� auth
app.post('/api/addmarker', function(req, res){
    console.log('CALL /api/addmarker');
    console.log(util.inspect(req.body));
    res.send('OK');


});

//���Τ��� auth
app.get('/api/deletemarker', function(req, res){
    console.log('CALL /api/deletemarker');
    console.log(util.inspect(req.body));
    res.send('OK');


});

//�ȤäƤʤ���
app.get('/api/delpost', function(req, res){
    console.log('CALL /api/delpost');
    console.log(util.inspect(req.body));
    res.send('OK');

});

//���ȴ�
app.get('/api/logintest', function(req, res){
    console.log('CALL /api/logintest');
    console.log(util.inspect(req.body));
    res.send('OK');
    
});

app.listen(port);
