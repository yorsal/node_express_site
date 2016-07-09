module.exports = {

	debug: true, //线上环境请使用false
	authKey: 'hellojiajuan0017',
    title: '家圈',
    meta: {
        desc: '',
        keyword: ''
    },

    codeDefine: {
    	success : { code: '1', message: '操作成功'},
		error_database : { code: 'e0000', message: '数据库非法操作'},
		error_system : { code: 'e0001', message: '系统繁忙'},
		limit_system : { code: 'e0002', message: '访问受限，用户权限不够'},
		error_empty : { code: 'e0003', message: '*为必填项'},
		error_upload : { code: 'e0004', message: '上传失败，请检查文件名和文件大小是否符合限制条件'},
		error_login  : { code: 'e0005', message: '登录名或密码错误'}
    },

    devScripts: [
	    'js/inspinia.js',
	    'js/plugins/chosen/chosen.jquery.js',
	    'js/plugins/colorpicker/bootstrap-colorpicker.min.js',
	    'js/plugins/clockpicker/clockpicker.js',

	    'js/plugins/cropper/cropper.min.js',

	    'js/plugins/fullcalendar/moment.min.js',
	    'js/plugins/fullcalendar/fullcalendar.min.js',

	    'js/plugins/daterangepicker/daterangepicker.js',
	    'js/plugins/datapicker/bootstrap-datepicker.js',
	    'js_extend/bootstrap-datetimepicker.js',
	    'js_extend/jquery.caret.js',
	    'js_extend/jquery.atwho.js',

	    'js_extend/jquery.YautoComplete.js',
	    'js_extend/ace_fileinput.js',
	    'js_extend/ace.js',

	    'js_extend/jquery.tagthis.js',
	    'js_extend/jquery.validate.min.js',
	    'js_extend/validate.extend.js',
	    'js_extend/jquery.form.js',
	    'js_extend/jquery.cookie.min.js',

	    'js_extend/jquery.enplaceholder.js',

	    'js_extend/main.js'
    ]
    
    
}