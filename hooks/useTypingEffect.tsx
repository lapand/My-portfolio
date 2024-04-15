import { useRef, useState, useEffect } from "react";
import styles from "@/styles/useTypingEffect.module.css";
import triggerFlyingLetters from "@/modules/triggerFlyingLetters";

type WordToColor = {
    word: string;
    color: string;
    className?: string;
    indicesDebut?: number[];
    indicesFin?: number[];
}

export function useTypingEffect(
    textToType: string,
    interKeyStrokeDurationInMs: number,
    wordsToColor: WordToColor[],
    shootingStarRef: HTMLDivElement,
){
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    // Récupère la position de l'élément du DOM correspondant à la dernière lettre

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition(value => value + 1);
            currentPositionRef.current += 1;
            if(currentPositionRef.current > textToType.length){
                clearInterval(intervalId);
            }
        }, interKeyStrokeDurationInMs);
        return () => {
            clearInterval(intervalId);
            currentPositionRef.current = 0;
            setCurrentPosition(0);
        }
    }, [interKeyStrokeDurationInMs, textToType]);

    const typedText = textToType.substring(0, currentPosition);

    // Division et ajout d'un span à chaque lettre

    const parts: JSX.Element[] = typedText.split('').map((letter, i, array) =>
        i < array.length - 1 ?
            <span key={i}>{letter}</span>
        :
            <span 
                key={i} 
                // style={{ opacity: '0' }}
                // ref={node => {
                //     // sauf espaces, les tabulations et les sauts de ligne
                //     if(node && node.textContent && !/^\s*$/.test(node.textContent)){
                //         // console.log(node)
                //         triggerFlyingLetters(node, interKeyStrokeDurationInMs, shootingStarRef);
                //         setTimeout(() => node.style.opacity = '1', interKeyStrokeDurationInMs);
                //     }
                // }}
            >
                {letter}
            </span>
    );

    return parts;

    // // Construction de la chaîne de caractères enrichie en JSX

    // const splitsIndex: number[] = [];
    // const parts: any[] = [];

    // for(let wordToColor of wordsToColor){
    //     let { word, indicesDebut, indicesFin } = wordToColor;
    //     const matches = [...typedText.matchAll(new RegExp(word, 'gi'))];
    //     indicesDebut = matches.map(match => match.index);
    //     indicesFin = indicesDebut.map(debut => debut + word.length);
    //     splitsIndex.push(...indicesDebut, ...indicesFin);
    // }
    
    // // Ajout de l'indice de début de chaîne et tri des indices du plus petit au plus grand
    // splitsIndex.unshift(0);
    // splitsIndex.sort((a, b) => a - b);

    // // Morcellement du texte initial en un tableau de chaînes de caractère en isolant les mots à colorer
    // splitsIndex.forEach((splitIdx, i) => {
    //     splitsIndex[i + 1] ?
    //         parts.push(typedText.slice(splitIdx, splitsIndex[i + 1]))
    //     :
    //         parts.push(typedText.slice(splitIdx));
    // });

    // // Transformation en JSX avec balises span pour ajouter du style aux mots à colorer
    // return parts.map((part, i) => {
    //     for(let wordToColor of wordsToColor){
    //         const { word, color, className } = wordToColor;
    //         if(part === word){
    //             return (
    //                 <span 
    //                 key={i} 
    //                 style={{ color }}
    //                 {...className && { className: styles[className] }}
    //                 >
    //                     {part}
    //                 </span>
    //             );
    //         }
    //     }
    //     return <span key={i}>{part}</span>;
    // });

}
