const status401Intceptions = (error: any) => {
    if (error.response && error.response.status === 401) { 
        console.log(error.response.data);
    }
    return Promise.reject(error);
    
}
export default status401Intceptions


//per far funzionare interceptor bisogna importarlo nel index.tsx in maniera da farlo caricare  in paggina appena si avvia l'App
// import status401Intceptions from "./interceptor/status401Interception";
// axios.interceptors.response.use((config) => config, status401Intceptions);