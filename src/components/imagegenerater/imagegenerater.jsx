import React, { useState, useRef } from 'react';
import './imagegenerater.css';
import default_image from '../Assects/default_image.svg'
import OpenAI from 'openai';
import OpenAI from 'openai';

const ImageGenerator = () => {
    const [image_url, setImageUrl] = useState("");
    const inputRef = useRef();

    const handleGenerate = async () => {
        if (inputRef.current.value === "") {
            return;
        }

      
            const response = await fetch(
                " https://api.openai.com/v1/models",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer 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",
                        "User-Agent": "Chrome"
                    },
                    body: JSON.stringify({
                        prompt: inputRef.current.value, 
                        n: 1, 
                        size: "512x512",
                    }),
                }
            );

            const data = await response.json();
            console.log(data)

           
            const imageUrl = data.url || "";

            setImageUrl(imageUrl);
       
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">Ai Image <span>Generator</span></div>
            <div className="loading-img">
                <div className="image"><img src={image_url === "" ? default_image : image_url} alt="ai generator is this" /></div>
            </div>
            <div className="search-box">
                <input className='search-input' type="text" ref={inputRef} placeholder='what you want to see' />
                <div className="generate" onClick={handleGenerate}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;
