import React from 'react'
import style from './BuyCar.module.css'


const BuyCar = () => {
    return (
        <div className={style.buycarIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.57604 19.5659C7.0318 19.5659 7.40224 19.9364 7.40224 20.3921C7.40224 20.8479 7.0318 21.2172 6.57604 21.2172C6.12028 21.2172 5.75092 20.8479 5.75092 20.3921C5.75092 19.9364 6.12028 19.5659 6.57604 19.5659Z" stroke="#C92071" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7287 19.5659C19.1844 19.5659 19.5549 19.9364 19.5549 20.3921C19.5549 20.8479 19.1844 21.2172 18.7287 21.2172C18.2729 21.2172 17.9025 20.8479 17.9025 20.3921C17.9025 19.9364 18.2729 19.5659 18.7287 19.5659Z" stroke="#C92071" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.52985 1.67004L3.77625 2.05884L4.81629 14.4497C4.90053 15.4595 5.74401 16.2349 6.75705 16.2349H18.542C19.5097 16.2349 20.3305 15.5243 20.4698 14.5652L21.4947 7.4826C21.6211 6.60888 20.9439 5.82696 20.0616 5.82696H4.13697" stroke="#C92071" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.8154 9.81869H16.8102" stroke="#C92071" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={style.circle}>
                <circle cx="10.02" cy="9.94001" r="9.18" fill="#EE4266" />
            </svg>
            <h6 className={style.buycarProducts}>0</h6>
        </div>
    )
}

export default BuyCar