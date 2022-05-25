import {FC, PropsWithChildren} from "react";
import {LogoHolder} from "./LogoHolder";

export const WakuLogo: FC<PropsWithChildren<any>> = ({onClick}) => (
    <LogoHolder onClick={onClick}>
        <svg width="45" height="45" viewBox="0 0 68 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.2178 18.8289C64.3955 18.829 64.5701 18.8728 64.724 18.9558C64.8779 19.0389 65.0057 19.1584 65.0945 19.3022C65.1648 19.4094 65.2116 19.5287 65.232 19.6531C65.2524 19.7774 65.2462 19.9043 65.2136 20.0263C65.1809 20.1484 65.1225 20.2631 65.0418 20.3638C64.9612 20.4645 64.8599 20.5492 64.7438 20.613C58.7845 24.0688 53.2219 28.0891 48.1443 32.6101C53.1893 37.1724 58.7409 41.2186 64.7048 44.6801C64.923 44.818 65.0766 45.0284 65.1341 45.2685C65.1917 45.5087 65.1489 45.7602 65.0145 45.9719C64.8801 46.1835 64.6644 46.3391 64.4112 46.4069C64.1581 46.4748 63.8868 46.4497 63.6528 46.3368C57.2506 42.6196 51.3164 38.241 45.9622 33.2837C45.7754 33.1066 45.6707 32.8679 45.6707 32.6192C45.6707 32.3706 45.7754 32.1319 45.9622 31.9548C51.3264 27.0141 57.2745 22.6593 63.6918 18.9745C63.8471 18.8768 64.0306 18.826 64.2178 18.8289V18.8289Z" fill="black"/>
            <path d="M3.63594 18.8291C3.82345 18.8238 4.00786 18.8749 4.16202 18.9747C10.5793 22.6596 16.5272 27.0143 21.8915 31.9549C22.0783 32.132 22.183 32.3707 22.183 32.6194C22.183 32.868 22.0783 33.1067 21.8915 33.2838C16.5373 38.2411 10.6032 42.6196 4.20102 46.3368C3.96704 46.4497 3.69571 46.4748 3.44259 46.4069C3.18946 46.3391 2.9736 46.1835 2.83922 45.9719C2.70483 45.7603 2.66203 45.5087 2.71959 45.2686C2.77715 45.0285 2.93072 44.818 3.14887 44.6802C9.11274 41.2187 14.6643 37.1725 19.7094 32.6103C14.6318 28.0893 9.06933 24.069 3.10998 20.6132C2.99391 20.5495 2.89251 20.4648 2.81186 20.3641C2.73122 20.2633 2.67292 20.1486 2.64027 20.0266C2.60762 19.9045 2.60129 19.7777 2.62172 19.6533C2.64215 19.529 2.68886 19.4097 2.75919 19.3024C2.84805 19.1586 2.97595 19.0392 3.12984 18.9561C3.28373 18.873 3.45821 18.8292 3.63594 18.8291V18.8291Z" fill="black"/>
            <path d="M33.9586 43.9339C34.219 43.9375 34.4687 44.0378 34.6581 44.215C39.7815 49.3805 44.3024 55.101 48.1356 61.2686C48.2038 61.379 48.2493 61.5018 48.2691 61.6298C48.2889 61.7578 48.2828 61.8884 48.2511 62.014C48.2194 62.1396 48.1628 62.2577 48.0846 62.3614C48.0064 62.4651 47.908 62.5523 47.7954 62.6179C47.6825 62.686 47.5573 62.7313 47.4267 62.7512C47.2962 62.7711 47.163 62.7652 47.0347 62.7338C46.9065 62.7025 46.7857 62.6463 46.6795 62.5685C46.5732 62.4907 46.4835 62.3928 46.4155 62.2806C42.8345 56.5434 38.6596 51.1922 33.9586 46.3139C29.2216 51.1666 25.0204 56.5066 21.4263 62.2431C21.3601 62.3547 21.2721 62.4522 21.1675 62.5298C21.0629 62.6073 20.9438 62.6635 20.8171 62.6949C20.6904 62.7263 20.5586 62.7323 20.4296 62.7127C20.3005 62.693 20.1766 62.6481 20.0652 62.5804C19.8384 62.4475 19.6736 62.2314 19.6064 61.9788C19.5391 61.7263 19.5749 61.4577 19.706 61.2311C23.5729 55.0781 28.1186 49.3709 33.2592 44.215C33.4465 44.0345 33.6974 43.9337 33.9586 43.9339Z" fill="black"/>
            <path d="M47.2851 2.51055C47.4653 2.51661 47.641 2.56817 47.7955 2.6604C47.9081 2.72597 48.0064 2.81314 48.0846 2.91679C48.1628 3.02044 48.2194 3.1385 48.2511 3.26408C48.2828 3.38966 48.2889 3.52025 48.2691 3.64819C48.2493 3.77614 48.2039 3.89888 48.1357 4.00926C44.3077 10.1785 39.7862 15.8977 34.6581 21.0574C34.471 21.2382 34.22 21.3394 33.9587 21.3394C33.6974 21.3394 33.4464 21.2382 33.2593 21.0574C28.1188 15.9031 23.5729 10.1978 19.706 4.04674C19.5749 3.82027 19.5391 3.55173 19.6064 3.29927C19.6736 3.04681 19.8384 2.83075 20.0652 2.69788C20.1766 2.63025 20.3005 2.58531 20.4296 2.56567C20.5586 2.54602 20.6904 2.55208 20.8171 2.58348C20.9438 2.61487 21.063 2.67099 21.1676 2.74853C21.2722 2.82608 21.3601 2.9235 21.4263 3.03511C25.0204 8.76977 29.2217 14.108 33.9587 18.9591C38.6597 14.0824 42.8345 8.73293 46.4155 2.99763C46.5048 2.84816 46.6321 2.72452 46.7847 2.63905C46.9373 2.55358 47.1098 2.50927 47.2851 2.51055V2.51055Z" fill="black"/>
            <path d="M1.00424 35.1464C8.32879 35.2504 15.6189 36.1822 22.7387 37.9242C22.8644 37.9556 22.9827 38.0117 23.0869 38.0894C23.1911 38.167 23.2792 38.2647 23.3461 38.3768C23.413 38.4889 23.4573 38.6132 23.4767 38.7426C23.496 38.8721 23.4899 39.0041 23.4587 39.1311C21.6425 46.3025 19.0299 53.2433 15.6707 59.8211C15.5301 60.0227 15.3218 60.1657 15.0846 60.2233C14.8474 60.281 14.5975 60.2494 14.3817 60.1344C14.1658 60.0194 13.9987 59.8289 13.9117 59.5985C13.8246 59.3681 13.8234 59.1135 13.9084 58.8823C17.0138 52.7691 19.4902 46.3496 21.2985 39.725C14.6435 38.1537 7.83801 37.3249 1.00424 37.2537V37.2537C0.873254 37.2562 0.743162 37.2323 0.621419 37.1834C0.499676 37.1345 0.388786 37.0615 0.295273 36.9688C0.201759 36.876 0.127499 36.7653 0.0768006 36.6432C0.0261018 36.5211 -1.83837e-05 36.39 5.84326e-06 36.2575C5.84326e-06 35.9882 0.105775 35.73 0.294116 35.5396C0.482457 35.3491 0.737882 35.2422 1.00424 35.2422V35.1464Z" fill="black"/>
            <path d="M52.9975 5.0209C53.1563 5.0201 53.3126 5.05953 53.4523 5.13555C53.569 5.19594 53.6727 5.27922 53.757 5.38051C53.8414 5.4818 53.9049 5.59905 53.9437 5.7254C53.9825 5.85176 53.9959 5.98466 53.9831 6.11631C53.9704 6.24795 53.9316 6.37571 53.8692 6.49206C50.7718 12.6303 48.3203 19.0786 46.5549 25.7316C53.2204 27.2279 60.0211 28.0282 66.8492 28.1199V28.1199C66.9802 28.1173 67.1104 28.1412 67.2321 28.1899C67.3538 28.2387 67.4647 28.3115 67.5582 28.404C67.6518 28.4965 67.726 28.6069 67.7767 28.7287C67.8274 28.8505 67.8535 28.9813 67.8535 29.1134C67.8535 29.3819 67.7476 29.6395 67.5593 29.8294C67.3709 30.0193 67.1155 30.126 66.8492 30.126C59.5249 30.0869 52.2304 29.1827 45.1149 27.4321C44.9892 27.4008 44.8707 27.3448 44.7665 27.2673C44.6623 27.1899 44.5742 27.0925 44.5073 26.9807C44.4404 26.8689 44.3962 26.7449 44.3769 26.6158C44.3575 26.4868 44.3636 26.3551 44.3948 26.2284C46.189 19.0679 48.7759 12.1335 52.1069 5.55586C52.193 5.39346 52.3216 5.25783 52.4785 5.16356C52.6354 5.0693 52.8149 5.01998 52.9975 5.0209Z" fill="black"/>
            <path d="M27.3751 42.6784C27.5904 42.6798 27.7991 42.7504 27.9688 42.8791C28.1386 43.0078 28.2599 43.1875 28.3137 43.3902C30.1262 50.2227 31.1338 57.2334 31.317 64.2872C31.3172 64.5424 31.2155 64.7877 31.0335 64.9715C30.8514 65.1553 30.6032 65.2633 30.3409 65.2728C30.2111 65.2752 30.0823 65.2524 29.9617 65.2058C29.8411 65.1592 29.7312 65.0897 29.6386 65.0013C29.5459 64.913 29.4724 64.8075 29.4221 64.6912C29.3719 64.5748 29.346 64.4499 29.3461 64.3237C29.1424 57.7481 28.2429 51.2103 26.6618 44.8137C20.1628 46.6119 13.8723 49.0583 7.89071 52.114C7.66564 52.2021 7.41519 52.2071 7.18656 52.1282C6.95793 52.0493 6.76685 51.8919 6.64923 51.6856C6.53161 51.4793 6.49551 51.2383 6.54783 51.008C6.60016 50.7777 6.73731 50.5739 6.93336 50.435C13.3453 47.1208 20.1205 44.5189 27.1311 42.6784H27.3751Z" fill="black"/>
            <path d="M37.489 0.000371038C37.6181 -0.00205822 37.7464 0.0207074 37.8663 0.0673655C37.9863 0.114024 38.0956 0.183617 38.1877 0.272085C38.2799 0.360553 38.3531 0.466128 38.403 0.582607C38.453 0.699085 38.4787 0.824128 38.4787 0.950449C38.6854 7.53053 39.5992 14.0711 41.205 20.464C47.6765 18.6348 53.9349 16.1486 59.878 13.0459C59.9906 12.9851 60.1144 12.9467 60.2423 12.9331C60.3701 12.9195 60.4995 12.9308 60.6228 12.9665C60.7461 13.0022 60.8611 13.0615 60.9608 13.141C61.0606 13.2205 61.1431 13.3186 61.2037 13.4296C61.2666 13.5387 61.307 13.6589 61.3222 13.7833C61.3375 13.9076 61.3274 14.0337 61.2927 14.1543C61.258 14.2748 61.1993 14.3875 61.1199 14.4858C61.0406 14.584 60.9421 14.666 60.8302 14.7269C54.4657 18.0649 47.7388 20.6941 40.7754 22.5652C40.5255 22.627 40.2608 22.591 40.0376 22.4647C39.8144 22.3385 39.6504 22.132 39.5805 21.8892C37.7677 15.0494 36.7467 8.0318 36.5368 0.968738C36.5343 0.842441 36.5575 0.716918 36.6051 0.59953C36.6528 0.482141 36.724 0.375246 36.8144 0.285077C36.9048 0.194908 37.0128 0.123277 37.1318 0.0743912C37.2508 0.0255058 37.3786 0.000347677 37.5077 0.000371038H37.489Z" fill="black"/>
            <path d="M39.908 42.6787H40.1796C47.3682 44.719 54.2928 47.514 60.8241 51.0115C61.0569 51.1417 61.2261 51.3534 61.2951 51.6007C61.3641 51.848 61.3274 52.1111 61.1928 52.333C61.1246 52.4445 61.0337 52.5421 60.9254 52.6201C60.817 52.6981 60.6934 52.7549 60.5616 52.7874C60.4298 52.8198 60.2927 52.8272 60.1579 52.8091C60.0231 52.7909 59.8934 52.7476 59.7764 52.6817C53.6936 49.4331 47.2688 46.7941 40.6065 44.8078C38.769 51.1934 37.6567 57.7462 37.2886 64.355C37.2688 64.6082 37.147 64.8444 36.9485 65.0152C36.7499 65.1859 36.4897 65.2781 36.2214 65.2727C35.9521 65.2632 35.6975 65.1539 35.5124 64.9686C35.3274 64.7832 35.2266 64.5365 35.2319 64.2816C35.6282 57.191 36.8715 50.1656 38.9379 43.3395C39.0013 43.1443 39.1303 42.9741 39.3055 42.8548C39.4806 42.7355 39.6923 42.6737 39.908 42.6787V42.6787Z" fill="black"/>
            <path d="M31.6475 0.000194152C31.782 0.00485665 31.9142 0.0347887 32.0364 0.0882289C32.1585 0.141669 32.2681 0.217546 32.3587 0.311405C32.4493 0.405265 32.5189 0.515207 32.5638 0.634805C32.6087 0.754404 32.6278 0.881252 32.62 1.00788C32.2645 8.08334 31.0507 15.0972 29.0022 21.9127C28.9665 22.0326 28.9057 22.1446 28.8235 22.242C28.7412 22.3394 28.6391 22.4204 28.5231 22.4801C28.4071 22.5399 28.2796 22.5772 28.1481 22.5899C28.0166 22.6025 27.8838 22.5904 27.7574 22.554C20.5395 20.5474 13.5843 17.7818 7.02334 14.3093C6.90746 14.2452 6.80635 14.1599 6.72584 14.0586C6.64533 13.9572 6.58713 13.8417 6.55454 13.7189C6.52194 13.5961 6.51562 13.4684 6.53602 13.3433C6.55641 13.2181 6.60304 13.0981 6.67325 12.9901C6.8112 12.7703 7.03558 12.6105 7.29769 12.5454C7.5598 12.4802 7.8386 12.515 8.07373 12.642C14.1794 15.8814 20.6344 18.4979 27.3294 20.447C29.154 14.0692 30.2687 7.52983 30.6555 0.934582C30.6651 0.689661 30.7727 0.457228 30.9567 0.283924C31.1406 0.11062 31.3874 0.00927453 31.6475 0.000194152V0.000194152Z" fill="black"/>
            <path d="M66.8672 35.1464C66.9983 35.1464 67.1281 35.1727 67.249 35.2239C67.3699 35.2751 67.4794 35.3501 67.5713 35.4445C67.6631 35.5389 67.7353 35.6508 67.7838 35.7738C67.8322 35.8967 67.8559 36.0281 67.8533 36.1603C67.8533 36.4242 67.7494 36.6772 67.5644 36.8638C67.3795 37.0503 67.1287 37.1552 66.8672 37.1552V37.1552C60.0354 37.2263 53.2292 38.0085 46.5566 39.4892C48.3027 46.1585 50.7437 52.6226 53.8389 58.7734C53.9599 59.0098 53.9839 59.2846 53.9059 59.5387C53.8278 59.7928 53.6539 60.0058 53.4216 60.1317C53.3061 60.1947 53.1793 60.2338 53.0487 60.2467C52.918 60.2596 52.7861 60.2461 52.6607 60.2069C52.5353 60.1677 52.4188 60.1036 52.3183 60.0184C52.2178 59.9332 52.1352 59.8287 52.0752 59.7108C48.7513 53.1443 46.1748 46.2194 44.3948 39.0683C44.3636 38.9414 44.3575 38.8096 44.3769 38.6803C44.3962 38.5511 44.4405 38.4269 44.5074 38.315C44.5744 38.203 44.6625 38.1055 44.7668 38.028C44.8711 37.9504 44.9897 37.8944 45.1155 37.863C52.2419 36.1365 59.5385 35.2252 66.8672 35.1464Z" fill="black"/>
            <path d="M14.8371 5.02126C15.0174 5.01955 15.1946 5.0687 15.3486 5.16317C15.5027 5.25763 15.6274 5.39364 15.7088 5.5558C19.0663 12.1207 21.6665 19.0513 23.4587 26.2123C23.4899 26.3389 23.496 26.4705 23.4767 26.5995C23.4573 26.7284 23.413 26.8523 23.3461 26.964C23.2792 27.0757 23.1912 27.173 23.087 27.2504C22.9828 27.3278 22.8644 27.3838 22.7387 27.415C15.6114 29.1371 8.31453 30.0465 0.985559 30.126C0.854553 30.126 0.724815 30.0997 0.604017 30.0486C0.483218 29.9975 0.373785 29.9227 0.282036 29.8285C0.190287 29.7343 0.118084 29.6226 0.0696956 29.4999C0.0213071 29.3773 -0.00233176 29.2461 0.000187592 29.1141C0.00504812 28.8473 0.112435 28.5928 0.299731 28.4041C0.487028 28.2154 0.739694 28.1072 1.00453 28.1023C7.82781 28.0172 14.6234 27.211 21.2797 25.6969C19.5007 19.0569 17.0432 12.6206 13.9465 6.49126C13.8631 6.33809 13.8212 6.16544 13.8252 5.99075C13.8292 5.81607 13.8789 5.64555 13.9692 5.49641C14.0596 5.34727 14.1874 5.22479 14.3398 5.14136C14.4921 5.05793 14.6637 5.0165 14.8371 5.02126V5.02126Z" fill="black"/>
        </svg>

    </LogoHolder>
)