import  axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const urlBase = process.env.REACT_APP_URL;
const getUrl: (url: string) => string=(url:string) =>  {
    return url.startsWith('http') ? url: urlBase+url;
}

const getConfig = (config: AxiosRequestConfig = {}) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            ...(localStorage.getItem('token')? {Authorization:'Bearer '+ localStorage.getItem('token')}:{})
        }

    }

}

export interface HttpCall{
get<T=any,R=AxiosResponse<T>>(url:string,config?:any): Promise<R>;
post<T=any,R=AxiosResponse<T>>(url:string,data:any,config?:any): Promise<R>;
put<T=any,R=AxiosResponse<T>>(url:string,data:any,config?:any): Promise<R>;
patch<T=any,R=AxiosResponse<T>>(url:string,data:any,config?:any): Promise<R>;
delete<T=any,R=AxiosResponse<T>>(url:string,config?:any): Promise<R>;
}
export interface HttpCallData{
get<T=any>(url:string,config?:any): Promise<T>;
post<T=any>(url:string,data:any,config?:any): Promise<T>;
put<T=any>(url:string,data:any,config?:any): Promise<T>;
patch<T=any>(url:string,data:any,config?:any): Promise<T>;
delete<T=any>(url:string,config?:any): Promise<T>;
}
export const HttpBase:HttpCall = {
    get: (url, config) => axios.get(getUrl(url), config),
    post:(url,data, config) => axios.post(getUrl(url),data, config),
    put:(url,data, config) => axios.put(getUrl(url),data, config),
    patch:(url,data, config) => axios.patch(getUrl(url),data, config),
    delete:(url,config) => axios.delete(getUrl(url),config),
 
}
export const Http:HttpCallData = {
    get: (url, config) => HttpBase.get(url, getConfig(config)).then(res=> res.data),
    post:(url,data, config) => HttpBase.post(url,data, getConfig(config)).then(res=> res.data),
    put:(url,data, config) => HttpBase.put(url,data, getConfig(config)).then(res=> res.data),
    patch:(url,data, config) => HttpBase.patch(url,data, getConfig(config)).then(res=> res.data),
    delete:(url,config) => HttpBase.delete(url,getConfig(config)).then(res=> res.data),
 
}