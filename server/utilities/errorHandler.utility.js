class Errorhandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
        Error.captureStackTrace(this, this.constructor)
    }

}
export const errorhandler=Errorhandler;


// without Error.captureStackTrace:
//     If you didint use this line ,the error report would include unnecessary technical details
//     like where the errorhandler class itslef is defined.
//     thats not very helpful when you are trying to debug
 
// with this line you are showing:
// skip all the setup  details and just show me where the eror is