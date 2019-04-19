import {Notice} from 'iview'

export const messageInfo = ({ title, desc = "", duration = 3}) => {
    Notice.info ({
        title: title,
        desc: desc,
        duration: duration
    });
}

export const messageSuccess = ({ title, desc = "", duration = 3}) => {
    Notice.success ({
        title: title,
        desc: desc,
        duration: duration
    });
}


export const messageWarning = ({ title, desc = "", duration = 3}) => {
    Notice.warning({
        title: title,
        desc: desc,
        duration: duration
    });
}

export const messageError = ({ title, desc = "", duration = 3}) => {
    Notice.error ({
        title: title,
        desc: desc,
        duration: duration
    });
}