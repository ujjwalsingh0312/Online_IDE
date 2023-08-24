import React, { useState } from "react";
import apiClient from "../../../shared/services/api-client";

const Question = () => {
    var [data, setdata] = useState(null);
    const getQuestion = async () => {
        try {
            const response = await apiClient.get(process.env.REACT_APP_QUESTION_URL);
            console.log('Response is', response);
            setdata(response)
        }
        catch (err) {
            console.log('Error during code submission ', err);
        }
    }
    return (
        <>
        <button onClick={()=>{getQuestion()}}>Click here for question</button>
        {(data==null)?<h1>'Loading...'</h1>:<h2>{data['data']['question']}</h2>}
        </>
    );
};

export default Question;
