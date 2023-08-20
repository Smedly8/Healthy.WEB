// import {useApi} from '@/api/useApi.js'
// // import { reject } from 'core-js/fn/promise';

// export async function useFlats() {
//     return new Promise((resolve, reject) => {
//         let data;
//         useApi('api/v1/sc/apartments/?checking_enable=false')
//         .then((r) => {
//             data = r.data.data
//             resolve(data)
//         })

//     })
// }

import { getApi } from '@/api/useApi.js'

export async function getProducts(productId = null, filters = false) {
    return new Promise((resolve, reject) => {
        ////console.log("&"+params);
        ////console.log(url.pathname+"/?"+params);
        let data;
        getApi(`api/v1/stores/1/products/${productId ? productId + '/' : ''}`)
            .then((r) => {
                data = r.data.data;
                data.map(el => {
                    el.rubPrice = Math.round(el.price / 100)
                })

                ////console.log("@@", data);
                resolve(data)
                ////console.log(data);
            })
    })
}



