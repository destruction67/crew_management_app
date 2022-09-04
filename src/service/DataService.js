'use strict'
export const DataService = {
    caseException: ['status','password', 'username',
        'confirmPassword', 'personal_email',],

    keyExceptions: ['attachments'],
    capitalizeProperties(value) {
        try {
            Object.keys(value).forEach(key => {
                if (this.keyExceptions.includes(key) || !value[key]) {
                    return value
                } else if (value[key] && typeof value[key] === 'string') {
                    if (!this.caseException.includes(key)) {
                        value[key] = (value[key]) ? String(value[key]).toUpperCase() : ''
                    }
                } else {
                    value[key] = this.capitalizeProperties(value[key])
                }

            })
        } catch (e) {
            return value
        }
        return value
    },
    computeAge(date) {
        const birthday = new Date(date).getTime()
        const currentDate = new Date()
        return Math.floor((currentDate - birthday) / 3.15576e+10)
    },
    paramParser(params,paramFields){
        let paramArray = {};
        Object.keys(params).forEach(key=>{
            if(Array.isArray(paramFields)){
                if(paramFields.includes(key)){
                    Object.assign(paramArray,{[key]:params[key]});
                }
            }
            else{
                if( (params[key] || params[key] === 0) ) {
                    Object.assign(paramArray,{[key]:params[key]});
                }
            }
        })
        return paramArray;
    }
}

export default {DataService}
