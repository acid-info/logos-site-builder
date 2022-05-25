import {FC, PropsWithChildren} from "react";
import {LogoHolder} from "./LogoHolder";

export const CodexLogo: FC<PropsWithChildren<any>> = ({onClick}) => (
    <LogoHolder onClick={onClick}>
        <svg width="45" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_251_390)">
                <path d="M20.5 44L-0.0628357 31.8678V12.2222L20.6099 0L41.0314 12.2372V31.8678L20.5 44ZM1.11533 31.2679L20.5 42.7403L39.8847 31.2679V12.8221L20.5943 1.25971L1.11533 12.8221V31.2679Z" fill="black"/>
                <path d="M21.0655 0.629852H19.9502V43.4601H21.0655V0.629852Z" fill="black"/>
                <path d="M11.1376 6.62848H10.0222V37.4765H11.1376V6.62848Z" fill="black"/>
                <path d="M31.072 6.62848H29.9567V37.4765H31.072V6.62848Z" fill="black"/>
                <path d="M30.2369 5.98551L0.32579 21.4058L0.855757 22.3427L30.7669 6.9224L30.2369 5.98551Z" fill="black"/>
                <path d="M40.2156 11.8233L0.328201 30.8669L0.827081 31.8192L40.7144 12.7756L40.2156 11.8233Z" fill="black"/>
                <path d="M0.972251 12.029L0.473404 12.9813L40.3607 32.0248L40.8596 31.0726L0.972251 12.029Z" fill="black"/>
                <path d="M10.8562 6.08735L10.3262 7.02426L40.2374 22.4446L40.7673 21.5077L10.8562 6.08735Z" fill="black"/>
                <path d="M40.1995 21.3991L10.2883 36.8194L10.8183 37.7563L40.7295 22.3359L40.1995 21.3991Z" fill="black"/>
                <path d="M0.891871 21.4991L0.361938 22.4359L30.2731 37.8562L30.803 36.9194L0.891871 21.4991Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_251_390">
                    <rect width="45" height="44" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    </LogoHolder>
)