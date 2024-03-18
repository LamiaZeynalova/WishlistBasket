import { createContext, useEffect, useState } from "react";


const WishlistContext = createContext()


export const WishlistProvider = ({ children }) => {


    const [wishlist, setWishlist] = useState([])
    const [active, setActive] = useState(false)
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || []

        setWishlist(savedWishlist)
    },[])


    const addToWishlist = (product) => {
        setWishlist((currentWishlist) => {
            const isWishlist = currentWishlist.some((item) => item.id === product.id)
            let updateWishlist
            if (isWishlist) {
                updateWishlist = currentWishlist.filter(item => item.id !== product.id)
                setActive(true)
            }
            else{
                updateWishlist=[...currentWishlist,product]
                setActive(false)
            }

            localStorage.setItem("wishlist",JSON.stringify(updateWishlist))
            return updateWishlist
        })
    }


    return (
        <WishlistContext.Provider value={{wishlist,addToWishlist,active}}>
            {children}
        </WishlistContext.Provider>
    )

}

export default WishlistContext