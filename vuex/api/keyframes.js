
import $ from 'jquery';
import { SERVER } from 'lib/configs';


export default {

    add: (params, cb) => {
        $.ajax({
            url: `${SERVER.root}/keyframes/add`,
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

    remove: (params, cb) => {
        $.ajax({
            url: `${SERVER.root}/keyframes/remove`,
            dataType: 'json',
            data: params,
            method: 'POST',
            success (data) {
                if (data.status == 0) {
                    cb(data.data);
                }
            }
        })
    }
}
