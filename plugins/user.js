const _0x961c7a=_0x1fd9;function _0x1baf(){const _0x51e937=['admin','mentionedJid','\x0a*▢\x20Members\x20:*\x0a\x20\x20\x20•\x20','Makes\x20wa\x20me\x20of\x20quoted\x20or\x20mentioned\x20user.','Makes\x20wa\x20me\x20for\x20user.','find','length','<reply\x20to\x20any\x20person>','sendMessage','join','\x20\x20*---Profile\x20Pic\x20Is\x20Here---*\x0a','\x0a║\x20\x20\x20\x20*Keep\x20Calm\x20Dude🥳*\x20\x20\x20\x20◇\x0a╚════════════════╝\x0a','wa-sticker-formatter','error','admins','2236794JlefYP','getName','split','undefined','\x0a║\x20*👤Num\x20:*\x20','bot','map','participants','reply_message','catch','getpp','153972FOKLrE','3561gOaTHz','node-fetch','user','62690hiaLNF','sender','\x0a\x0acommand\x20:\x20whois','.\x20wa.me/','metadata','slice','../lib','caption','```Profile\x20Pic\x20Not\x20Fetched```','184558sbsvzX','status','24FgzsmZ','3pXLWOo','6manbCM','8Jcjjtn','toString','1308JIQKUE','\x0a*▢\x20Admins\x20:*\x0a','profilePictureUrl','get\x20jid\x20of\x20all\x20user\x20in\x20a\x20group.','wa.me/','*_Please\x20Reply\x20To\x20A\x20Person!_*','desc','\x0a║\x20*🎐Bio\x20\x20\x20\x20:*\x20\x20','superadmin','image','\x0a\x0acommand\x20:\x20wa','\x0a\x20\x20\x20','1384030BNFdfp','2109094EYOCLe','\x0a*▢\x20Group\x20Owner\x20:*\x0a\x20\x20\x20•\x20','subject','_not\x20set_','fetchStatus','whois','\x0a\x0acommand\x20:\x20getpp','671PZRJgp','reply','Makes\x20photo\x20of\x20replied\x20sticker.','chat','isGroup','https://wa.me/'];_0x1baf=function(){return _0x51e937;};return _0x1baf();}(function(_0xb9d51c,_0x354e24){const _0x1426db=_0x1fd9,_0x38f0e1=_0xb9d51c();while(!![]){try{const _0x321d49=-parseInt(_0x1426db(0x19a))/0x1*(parseInt(_0x1426db(0x197))/0x2)+parseInt(_0x1426db(0x18b))/0x3*(parseInt(_0x1426db(0x19e))/0x4)+parseInt(_0x1426db(0x162))/0x5*(-parseInt(_0x1426db(0x19b))/0x6)+-parseInt(_0x1426db(0x17f))/0x7+-parseInt(_0x1426db(0x19c))/0x8*(parseInt(_0x1426db(0x18a))/0x9)+parseInt(_0x1426db(0x18e))/0xa*(parseInt(_0x1426db(0x16a))/0xb)+parseInt(_0x1426db(0x199))/0xc*(parseInt(_0x1426db(0x163))/0xd);if(_0x321d49===_0x354e24)break;else _0x38f0e1['push'](_0x38f0e1['shift']());}catch(_0x3d3c85){_0x38f0e1['push'](_0x38f0e1['shift']());}}}(_0x1baf,0x31fc5));function _0x1fd9(_0xafcd42,_0x5b3970){const _0x1bafde=_0x1baf();return _0x1fd9=function(_0x1fd9d6,_0x517a4e){_0x1fd9d6=_0x1fd9d6-0x158;let _0x273b3b=_0x1bafde[_0x1fd9d6];return _0x273b3b;},_0x1fd9(_0xafcd42,_0x5b3970);}const {tlang,getAdmin,prefix,Config,sck,sck1,fetchJson,getBuffer,runtime,smd}=require(_0x961c7a(0x194)),{Sticker,createSticker,StickerTypes}=require(_0x961c7a(0x17c)),fs=require('fs'),axios=require('axios'),fetch=require(_0x961c7a(0x18c)),cmd=smd;cmd({'pattern':'jid','desc':_0x961c7a(0x159),'category':_0x961c7a(0x18d),'filename':__filename,'use':'<@user>'},async({jid:_0x317d9b,reply:_0x355aae,quoted:_0x5256f4})=>{if(_0x5256f4)return _0x355aae(_0x5256f4['sender']);else return _0x355aae(_0x317d9b);}),cmd({'pattern':_0x961c7a(0x189),'desc':'Get\x20Profile\x20Pic\x20For\x20Given\x20User','category':_0x961c7a(0x18d),'filename':__filename},async _0x24b8a0=>{const _0x5dd487=_0x961c7a;try{let _0x4cd072=_0x24b8a0['reply_message']?_0x24b8a0[_0x5dd487(0x187)][_0x5dd487(0x18f)]:_0x24b8a0['mentionedJid'][0x0]?_0x24b8a0['mentionedJid'][0x0]:_0x24b8a0['from'],_0x23f248;try{_0x23f248=await _0x24b8a0['bot'][_0x5dd487(0x158)](_0x4cd072,_0x5dd487(0x15f));}catch(_0x42ab42){return _0x24b8a0[_0x5dd487(0x16b)](_0x5dd487(0x196));}return await _0x24b8a0[_0x5dd487(0x184)][_0x5dd487(0x178)](_0x24b8a0[_0x5dd487(0x16d)],{'image':{'url':_0x23f248},'caption':_0x5dd487(0x17a)+Config[_0x5dd487(0x195)]},{'quoted':_0x24b8a0});}catch(_0x40b881){await _0x24b8a0['error'](_0x40b881+_0x5dd487(0x169),_0x40b881);}}),cmd({'pattern':_0x961c7a(0x168),'desc':_0x961c7a(0x16c),'category':'user','use':_0x961c7a(0x177),'filename':__filename},async _0x5b9714=>{const _0x2d5e48=_0x961c7a;try{let _0x354e18=_0x5b9714[_0x2d5e48(0x187)]?_0x5b9714['reply_message'][_0x2d5e48(0x18f)]:_0x5b9714['mentionedJid'][0x0]?_0x5b9714['mentionedJid'][0x0]:![];if(!_0x354e18&&_0x5b9714[_0x2d5e48(0x16e)]){const _0x561b75=await _0x5b9714['bot'][_0x2d5e48(0x158)](_0x5b9714[_0x2d5e48(0x16d)],_0x2d5e48(0x15f))[_0x2d5e48(0x188)](_0x1c3876=>'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg')||THUMB_IMAGE,_0x3bf573=_0x5b9714[_0x2d5e48(0x192)],_0x3526c9=_0x5b9714[_0x2d5e48(0x17e)][_0x2d5e48(0x185)]((_0x2df5bb,_0x5c8c6c)=>'\x20\x20'+(_0x5c8c6c+0x1)+_0x2d5e48(0x191)+_0x2df5bb['id'][_0x2d5e48(0x181)]('@')[0x0])[_0x2d5e48(0x179)]('\x0a'),_0x46b7ba=_0x3bf573['owner']||_0x5b9714[_0x2d5e48(0x17e)][_0x2d5e48(0x175)](_0x297d66=>_0x297d66[_0x2d5e48(0x170)]===_0x2d5e48(0x15e))?.['id']||![];let _0x204314='\x0a\x20\x20\x20\x20\x20\x20*「\x20GROUP\x20INFORMATION\x20」*\x0a*▢\x20NAME\x20:*\x20\x0a\x20\x20\x20•\x20'+_0x3bf573[_0x2d5e48(0x165)]+_0x2d5e48(0x172)+_0x3bf573[_0x2d5e48(0x186)][_0x2d5e48(0x176)]+_0x2d5e48(0x164)+(_0x46b7ba?_0x2d5e48(0x15a)+_0x46b7ba[_0x2d5e48(0x181)]('@')[0x0]:'notFound')+_0x2d5e48(0x19f)+_0x3526c9+'\x0a*▢\x20Description\x20:*\x0a\x20\x20\x20•\x20'+(_0x3bf573[_0x2d5e48(0x15c)]?.['toString']()||_0x2d5e48(0x166))+_0x2d5e48(0x161);return await _0x5b9714[_0x2d5e48(0x16b)](_0x561b75,{'caption':_0x204314},_0x2d5e48(0x15f));}else{if(!_0x354e18)return _0x5b9714['reply'](_0x2d5e48(0x15b));try{var _0x12d99e=await _0x5b9714[_0x2d5e48(0x184)][_0x2d5e48(0x167)](_0x354e18),_0x23847e=_0x12d99e[_0x2d5e48(0x198)],_0xfd4a68=_0x12d99e['setAt'][_0x2d5e48(0x19d)](),_0x5d0d88=_0xfd4a68['split']('\x20');_0x5d0d88['length']>0x3&&(_0xfd4a68=_0x5d0d88[_0x2d5e48(0x193)](0x0,0x5)[_0x2d5e48(0x179)]('\x20'));}catch{var _0x23847e=_0x2d5e48(0x182),_0xfd4a68='';}var _0x52ccee=_0x354e18['split']('@')[0x0];let _0x5ae446;try{_0x5ae446=await _0x5b9714['bot'][_0x2d5e48(0x158)](_0x354e18,_0x2d5e48(0x15f));}catch(_0x17156a){_0x5ae446='https://telegra.ph/file/29a8c892a1d18fdb26028.jpg';}var _0xf3d6e0=await _0x5b9714[_0x2d5e48(0x184)][_0x2d5e48(0x180)](_0x354e18);return await _0x5b9714[_0x2d5e48(0x184)][_0x2d5e48(0x178)](_0x5b9714['jid'],{'image':{'url':_0x5ae446},'caption':'\x0a╔════◇\x0a║\x20*『Personal\x27s\x20\x20Information』*\x0a║\x20\x0a║\x20*🍫Name\x20:*\x20'+_0xf3d6e0+_0x2d5e48(0x183)+_0x52ccee+_0x2d5e48(0x15d)+_0x23847e+'\x0a║\x20*🌟SetAt\x20:*\x20'+_0xfd4a68+_0x2d5e48(0x17b)},{'quoted':_0x5b9714});}}catch(_0x31ca34){await _0x5b9714[_0x2d5e48(0x17d)](_0x31ca34+_0x2d5e48(0x190),_0x31ca34);}}),cmd({'pattern':'wa','desc':_0x961c7a(0x173),'category':_0x961c7a(0x18d),'filename':__filename},async _0x3186cd=>{const _0x4a59d8=_0x961c7a;try{let _0x3c71d6=_0x3186cd[_0x4a59d8(0x187)]?_0x3186cd[_0x4a59d8(0x187)][_0x4a59d8(0x18f)]:_0x3186cd[_0x4a59d8(0x171)][0x0]?_0x3186cd[_0x4a59d8(0x171)][0x0]:![];await _0x3186cd['reply'](!_0x3c71d6?'*Please\x20Reply\x20Or\x20Mention\x20A\x20User*':_0x4a59d8(0x16f)+_0x3c71d6[_0x4a59d8(0x181)]('@')[0x0]);}catch(_0x100353){await _0x3186cd[_0x4a59d8(0x17d)](_0x100353+_0x4a59d8(0x160),_0x100353,![]);}}),cmd({'pattern':'mee','desc':_0x961c7a(0x174),'category':_0x961c7a(0x18d),'filename':__filename},async _0x12ac1b=>{const _0x336361=_0x961c7a;try{return await _0x12ac1b[_0x336361(0x16b)](_0x336361(0x16f)+_0x12ac1b[_0x336361(0x18f)][_0x336361(0x181)]('@')[0x0]);}catch{}});