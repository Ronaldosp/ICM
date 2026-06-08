const BASE_URL = 'http://localhost:3000'

export const register = (body) =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(BASE_URL+`/register`,{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json'
                }
            }) 

            const data = await response.json();
            console.log(data);
            
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const login = (body) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(BASE_URL+`/login`,{
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json',
                }
            })
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
            
            localStorage.setItem("access_token", data.access_token)

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}