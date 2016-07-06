
import $ from 'jquery';
import { SERVER } from 'lib/configs';


export default {

    addFold: cb => {
        $.ajax({
            url: `${SERVER.root}/static/addFold`,
            dataType: 'json',
            data: {
                parentid: ''
            },
            method: 'POST',
            success (data) {
                if (data.status == 0) {
                    cb(data.data);
                }
            } 
        });
    },

    update: (params, cb) => {
        $.ajax({
            url: `${SERVER.root}/static/update`,
            data: params,
            dataType: 'json',
            method: 'POST',
            success (data) {
                if (data.status == 0) {
                    cb();
                }
            }
        })
    }
}