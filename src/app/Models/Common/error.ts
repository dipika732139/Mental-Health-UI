import {ErrorInfo} from './error-info'
export class Error {
    public errorCode : number;
    public errorMessage : string;
    public infos : ErrorInfo[]
}
