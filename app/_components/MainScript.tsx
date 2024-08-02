'use client'

import { use, useEffect, useState } from "react";


export const Script = async(Props:any) => {


    const [loaded, setLoaded] = useState(true);

    // ページの読み込みが完了したら
    useEffect(() => {

        window.addEventListener('load', function() {
            const rellaxs = document.querySelectorAll('.rellax, .rellax-pconly, .rellax-sponly');
            rellaxs.forEach(function(rellax) {

                // classを追加する
                rellax.classList.add('loaded');

            });
        
        })

    }, [] );





    return (
        <>
        </>
    )
}
    
export default Script;