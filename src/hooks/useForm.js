import { useState } from 'react';

export const useForm = (initialForm,validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange= (ev) => {
        const{name,value} = ev.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleBlur= (ev) => {
        handleChange(ev);
        setErrors(validateForm(form));
    };
    
    const handleSubmit= (ev) => {
        ev.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            setLoading(true);
            const handleAsync = async () => {
                try{
                    let data = await(fetch("https://formsubmit.co/ajax/kevin_narvaez.12@hotmail.com", {
                        method: "POST",
                        body: JSON.stringify(form),
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                    }));    
                    let res = await data.json();
                    console.log(res);
                    setResponse(true);
                    setLoading(false);
                    setTimeout(() => {
                        setResponse(false);
                    }
                    ,5000);
                    setForm(initialForm);
                }
                catch(err){
                    console.log(err);
                }
            };
            handleAsync();
        }
        else{
            setResponse(false);
        }
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}