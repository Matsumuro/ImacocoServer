/***********************************************************
 *  ���R�R�Ȃ��I�N���C�A���g�����݊��T�[�o�X�N���v�g       *
 *  ���ʃ��C�u����                                         *
 *  Copyright (c) 2016 @Hamache9821                        *
 *  Released under the MIT license                         *
 *  http://opensource.org/licenses/mit-license.php         *
 ***********************************************************/
module.exports = (function(){
    "use strict";

    // �V�[�N���b�g�͓K���ɕς��Ă�������
    var hashSecretKey = 'some_random_secret';

    //console.log�p�萔
    var black   = '\u001b[30m';
    var red     = '\u001b[31m';
    var green   = '\u001b[32m';
    var yellow  = '\u001b[33m';
    var blue    = '\u001b[34m';
    var magenta = '\u001b[35m';
    var cyan    = '\u001b[36m';
    var white   = '\u001b[37m';
    var reset   = '\u001b[0m';
    var utill = require('util');
    var crypto = require("crypto");

    return {
        inspect :
            function(value){
                console.log(utill.inspect(value));
            },
        getHash :
             function(target){
                var sha = crypto.createHmac('sha256', hashSecretKey);
                sha.update(target);
                return sha.digest('hex');
            },
        setConsolelog :
            function(req, msg){
                var s = '';
                if (msg === undefined){
                    msg = req.headers['x-forwarded-for'] + ' ' + req.headers['user-agent'];
                }

                //�\������
                var dt = new Date();
                var formatted = dt.toFormat(" HH24:MI:SS ");

                switch (req.method){
                    case 'GET':
                        s = '[' + green   + 'CALL' + reset + ']' + dt.toFormat(" HH24:MI:SS ") + req.url + ': ';
                        break;
                    case 'POST':
                        s = '[' + magenta + 'CALL' + reset + ']' + dt.toFormat(" HH24:MI:SS ") + req.url + ': ';
                        break;
                    default:
                        break;
                        s = '[' + yellow  + 'CALL' + reset + ']' + dt.toFormat(" HH24:MI:SS ") + req.url + ': ';
                }

                console.log(s + msg);
                return;
            },
        addMinutes :
            function(date, minutes){
                return new Date(date.getTime() + minutes * 60000);
            }
    }
})();
