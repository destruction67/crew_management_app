import { AlertService } from "@/service/alert.service";
import axios from 'axios';

export const AppService={
    caseException: ['status', 'email', 'fb_mail', 'password', 'username', 'confirmPassword', 'personal_email'],
    keyExceptions: [ 'attachments' ],
    capitalizeProperties(__param){
            try {
                Object.keys(__param).forEach(key => {
                    if(this.keyExceptions.includes(key) || !__param[key]) {
                        return __param;
                    } else if(__param[key] && typeof __param[key] === 'string') {
                        if(!this.caseException.includes(key)) {
                            __param[key] = (__param[key]) ? String(__param[key]).toUpperCase() : '';
                        }
                    } else {
                        __param[key] = this.capitalizeProperties(__param[key]);
                    }
                });
            } catch (e) {
                return __param;
            }
            return __param;
    },
    
    generateQueryString(__params){
      let queryString = '';
      let paramArray = [];
      Object.keys(__params).forEach(key=>{
        if(__params[key] || __params[key] === 0) paramArray.push(`${key}=${__params[key]}`);
      })
      if(paramArray){
        return '?' + paramArray.join('&');
      }

      return '';

    },

    dateFormat(date){
        if(!date){
            return '';
        }
        let myDate = (date instanceof Date) ? date :  new Date(date);
        if(myDate != 'Invalid Date') {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(myDate);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(myDate);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(myDate);
            return `${da} ${mo} ${ye}`;
        }

        return null;
    },

    async submitPostData(url, params) {
        return await axios.post(url, params)
            .then(response => {
                return response.data.data ? response.data.data : false;
            }).catch(error => {
                if(error.response.data.hasOwnProperty('errors')){
                    this.handleError(error, url);
                    return this.parseErrors(error.response.data.errors)
                }
                else{
                    return this.handleError(error.response.data.errors);
                }
            });
    },

    async generateReport(url, params){
        // let date=DateService.dateEliteFormat(new Date())
        await axios({
            method: 'post',
            url: url,
            data:params,
            responseType: 'blob'
        }).then(response => {
            let fileName =  `${params.manningName}-circular-logs.pdf`;
            FileService.fileDownload(response, fileName);
        }).catch(error => {
            console.log(error, url);
            this.handleError(error, url);
            return false;
        });
    },

    handleError(error, source) {
        try {
            switch (error.response.status) {
                case 401:
                    AlertService.errorAlertService('UNAUTHORIZED', source);
                    break;

                case 403:
                    AlertService.errorAlertService('UNAUTHORIZED', source);
                    return false;

                case 404:
                    AlertService.errorAlertService('File Not Found', source);
                    break;

                case 500:
                    AlertService.errorAlertService('SYSTEM ERROR', source);
                    break;

                case 400:
                case 422:
                    this.handleRequestErrors(error.response.data.errors, source);
                    return this.parseErrors(error.response.data.errors);
                default:
                    AlertService.errorAlertService('ERROR ' + error.response.status, source);
                    break;
            }
            return false;
            // return { errors: error.response.data.errors };
        } catch (e) {
            AlertService.errorAlertService(source);
            return  false;
        }
    },

    handleRequestErrors(errorMessages, source) {
        let message = "";
        if(errorMessages) {
            Object.keys(errorMessages).forEach((key, index) => {
                message += `${index + 1}. ${errorMessages[key]} \n`;
                // message += `<p class="text-left">${index + 1}. ${errorMessages[key]}</p>`;
            });
        }
        AlertService.errorAlertService(message, source);
    },

    parseErrors(errors) {
        let errorMessages = [];
        Object.keys(errors).forEach(column => errorMessages[column] = errors[column].join(', '));
        return { errors: errorMessages };
    },

}

export default {AppService};
