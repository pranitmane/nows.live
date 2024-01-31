'use client';
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Message({ text }: {
    text: string
}) {
    const [textArray, setTextArray] = useState<string[]>([])
    // const textArray: string[] = []

    useEffect(() => {
        const length = textArray.length
        setTimeout(() => {
            if(length < text.length) {
                setTextArray(textArray => [...textArray, text[textArray.length]])
            }
            // if(textArray.length === text.length) {
            //     setTextArray([])
            // }
        }, 200)
    }, [textArray])


    console.log(textArray)


    return (
        <p className={`text-lg text-neutral-100 tracking-widest typing ${roboto.className}`}>
            {textArray.map((letter, index) => {
                return(
                    <span key={index}>{letter}</span>
                )
            })}
        </p>
    );
}

