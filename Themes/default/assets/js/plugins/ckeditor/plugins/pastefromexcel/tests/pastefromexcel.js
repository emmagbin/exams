﻿(function(){bender.editor=!1;bender.test({"test converting internal styles to inline style of respective node when table is copied excel":function(){CKEDITOR.env.ie&&assert.ignore();bender.editorBot.create({name:"editor1",config:{allowedContent:!0,pasteFilter:null,pasteFromWordRemoveFontStyles:!1,pasteFromWordRemoveStyles:!1}},function(a){a=a.editor;var b;a.once("paste",function(a){resume(function(){assert.areEqual('\x3cp style\x3d"color: red;"\x3etext \x3cstrong class\x3d"MsoNormal"\x3etext\x3c/strong\x3e\x3c/p\x3e',
a.data.dataValue,"inline styles should be converted to style attributes of respective node")})},null,null,999);b=new CKEDITOR.plugins.clipboard.dataTransfer(null,a);b.setData("text/html",'\x3chtml\x3e\x3chead\x3e\x3cmeta name\x3dGenerator content\x3d"Microsoft Excel 15"\x3e\x3cstyle\x3ep {color: red;}\x3c/style\x3e\x3c/head\x3e\x3cbody\x3e\x3cp\x3etext \x3cstrong class\x3d"MsoNormal"\x3etext\x3c/strong\x3e\x3c/p\x3e\x3c/body\x3e\x3c/html\x3e');a.fire("paste",{dataTransfer:b});wait()})},"test converting internal styles to inline style of respective node when table is copied excel (table copy)":function(){CKEDITOR.env.ie&&
assert.ignore();bender.editorBot.create({name:"editor2",config:{allowedContent:!0,pasteFilter:null,pasteFromWordRemoveFontStyles:!1,pasteFromWordRemoveStyles:!1}},function(a){a=a.editor;var b;a.once("paste",function(a){resume(function(){CKEDITOR.env.gecko?assert.areEqual('\x3ctable style\x3d"border-collapse: collapse; width: 162pt;" border\x3d"0" cellpadding\x3d"0" cellspacing\x3d"0" width\x3d"216"\x3e \x3ccolgroup\x3e\x3ccol style\x3d"width: 54pt;" span\x3d"3" width\x3d"72"\x3e \x3c/colgroup\x3e\x3ctbody\x3e\x3ctr style\x3d"height: 16.5pt;" height\x3d"22"\x3e  \x3ctd class\x3d"xl63" style\x3d"height: 16.5pt; width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial,sans-serif; text-align: left; border: 0.5pt solid windowtext; background: yellow none repeat scroll 0% 0%;" height\x3d"22" width\x3d"72"\x3eTest\x3c/td\x3e  \x3ctd class\x3d"xl64" style\x3d"width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial,sans-serif; text-align: center; border: 0.5pt solid windowtext; background: yellow none repeat scroll 0% 0%;" width\x3d"72"\x3eCell\x3c/td\x3e  \x3ctd class\x3d"xl65" style\x3d"width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial,sans-serif; text-align: right; border: 0.5pt solid windowtext; background: yellow none repeat scroll 0% 0%;" width\x3d"72"\x3eCell2\x3c/td\x3e \x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e',
a.data.dataValue,"inline styles should be converted to style attributes of respective node"):assert.areEqual('\x3ctable border\x3d"0" cellpadding\x3d"0" cellspacing\x3d"0" width\x3d"216" style\x3d"border-collapse: collapse; width: 162pt;"\x3e \x3ccolgroup\x3e\x3ccol width\x3d"72" span\x3d"3" style\x3d"width: 54pt;"\x3e \x3c/colgroup\x3e\x3ctbody\x3e\x3ctr height\x3d"22" style\x3d"height: 16.5pt;"\x3e  \x3ctd height\x3d"22" class\x3d"xl63" width\x3d"72" style\x3d"height: 16.5pt; width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial, sans-serif; text-align: left; border: 0.5pt solid windowtext; background: yellow;"\x3eTest\x3c/td\x3e  \x3ctd class\x3d"xl64" width\x3d"72" style\x3d"width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial, sans-serif; text-align: center; border: 0.5pt solid windowtext; background: yellow;"\x3eCell\x3c/td\x3e  \x3ctd class\x3d"xl65" width\x3d"72" style\x3d"width: 54pt; padding-top: 1px; padding-right: 1px; padding-left: 1px; font-size: 11pt; font-weight: 400; font-style: normal; text-decoration: none; vertical-align: middle; white-space: nowrap; color: red; font-family: Arial, sans-serif; text-align: right; border: 0.5pt solid windowtext; background: yellow;"\x3eCell2\x3c/td\x3e \x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e',
a.data.dataValue,"inline styles should be converted to style attributes of respective node")})},null,null,999);b=new CKEDITOR.plugins.clipboard.dataTransfer(null,a);b.setData("text/html",'\x3chtml xmlns:v\x3d"urn:schemas-microsoft-com:vml"xmlns:o\x3d"urn:schemas-microsoft-com:office:office"xmlns:x\x3d"urn:schemas-microsoft-com:office:excel"xmlns\x3d"http://www.w3.org/TR/REC-html40"\x3e\x3chead\x3e\x3cmeta http-equiv\x3dContent-Type content\x3d"text/html; charset\x3dutf-8"\x3e\x3cmeta name\x3dProgId content\x3dExcel.Sheet\x3e\x3cmeta name\x3dGenerator content\x3d"Microsoft Excel 15"\x3e\x3clink id\x3dMain-File rel\x3dMain-Filehref\x3d"file:///C:UsersScottAppDataLocalTempmsohtmlclip1clip.htm"\x3e\x3clink rel\x3dFile-Listhref\x3d"file:///C:UsersScottAppDataLocalTempmsohtmlclip1clip_filelist.xml"\x3e\x3cstyle\x3e\x3c!--table\t{mso-displayed-decimal-separator:".";\tmso-displayed-thousand-separator:",";}@page\t{margin:.75in .7in .75in .7in;\tmso-header-margin:.3in;\tmso-footer-margin:.3in;}.font5\t{color:windowtext;\tfont-size:8.0pt;\tfont-weight:400;\tfont-style:normal;\ttext-decoration:none;\tfont-family:"맑은 고딕", monospace;\tmso-font-charset:129;}tr\t{mso-height-source:auto;\tmso-ruby-visibility:none;}col\t{mso-width-source:auto;\tmso-ruby-visibility:none;}br\t{mso-data-placement:same-cell;}td\t{padding-top:1px;\tpadding-right:1px;\tpadding-left:1px;\tmso-ignore:padding;\tcolor:black;\tfont-size:11.0pt;\tfont-weight:400;\tfont-style:normal;\ttext-decoration:none;\tfont-family:"맑은 고딕", monospace;\tmso-font-charset:129;\tmso-number-format:General;\ttext-align:general;\tvertical-align:middle;\tborder:none;\tmso-background-source:auto;\tmso-pattern:auto;\tmso-protection:locked visible;\twhite-space:nowrap;\tmso-rotate:0;}.xl63\t{color:red;\tfont-family:Arial, sans-serif;\tmso-font-charset:0;\ttext-align:left;\tborder:.5pt solid windowtext;\tbackground:yellow;\tmso-pattern:black none;}.xl64\t{color:red;\tfont-family:Arial, sans-serif;\tmso-font-charset:0;\ttext-align:center;\tborder:.5pt solid windowtext;\tbackground:yellow;\tmso-pattern:black none;}.xl65\t{color:red;\tfont-family:Arial, sans-serif;\tmso-font-charset:0;\ttext-align:right;\tborder:.5pt solid windowtext;\tbackground:yellow;\tmso-pattern:black none;}ruby\t{ruby-align:left;}rt\t{color:windowtext;\tfont-size:8.0pt;\tfont-weight:400;\tfont-style:normal;\ttext-decoration:none;\tfont-family:"맑은 고딕", monospace;\tmso-font-charset:129;\tmso-char-type:none;\tdisplay:none;}--\x3e\x3c/style\x3e\x3c/head\x3e\x3cbody link\x3d"#0563C1" vlink\x3d"#954F72"\x3e\x3ctable border\x3d0 cellpadding\x3d0 cellspacing\x3d0 width\x3d216 style\x3d\'border-collapse: collapse;width:162pt\'\x3e \x3ccol width\x3d72 span\x3d3 style\x3d\'width:54pt\'\x3e \x3ctr height\x3d22 style\x3d\'height:16.5pt\'\x3e\x3c!--StartFragment--\x3e  \x3ctd height\x3d22 class\x3dxl63 width\x3d72 style\x3d\'height:16.5pt;width:54pt\'\x3eTest\x3c/td\x3e  \x3ctd class\x3dxl64 width\x3d72 style\x3d\'border-left:none;width:54pt\'\x3eCell\x3c/td\x3e  \x3ctd class\x3dxl65 width\x3d72 style\x3d\'border-left:none;width:54pt\'\x3eCell2\x3c/td\x3e\x3c!--EndFragment--\x3e \x3c/tr\x3e\x3c/table\x3e\x3c/body\x3e\x3c/html\x3e������');
a.fire("paste",{dataTransfer:b});wait()})}})})();