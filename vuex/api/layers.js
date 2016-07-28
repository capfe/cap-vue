
import $ from 'jquery';
import { SERVER } from 'lib/configs';


export default {

    add: (params, cb) => {
        $.ajax({
            url: `${SERVER.root}/layers/add`,
            dataType: 'json',
            data: params,
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
            url: `${SERVER.root}/layers/update`,
            dataType: 'json',
            data: params,
            method: 'POST',
            success (data) {
                if (data.status == 0) {
                    cb(data.data);
                }
            } 
        });
    }
}