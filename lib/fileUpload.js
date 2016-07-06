
import utils from './utils';
import $ from 'jquery';


function nop () {};

class FileUpload {

    constructor (opts) {
        this.init(opts);
    }

    init (opts) {

        const data = opts.data || {};
        const fd = new FormData();
        for (let key in data) {
            fd.append(key, data[key]);
        }

        $.ajax({
            url: opts.url,
            method: 'POST',
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            data: fd,
            success (data) {
                opts.success && opts.success(data.data)
            },
            fail () {
                opts.fail || nop
            }
        })
    }

    fileUpload () {

    }

    validate () {

    }
}


export default FileUpload;