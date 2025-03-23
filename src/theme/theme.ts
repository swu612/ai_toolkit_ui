import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
})

const geistLight = Geist({
    weight: '300',
    subsets: ['latin']
})

const geistMedium = Geist({
    weight: '600',
    subsets: ['latin']
})

const geistBold = Geist({
    weight: '900',
    subsets: ['latin']
})

const geistMonoMedium = Geist_Mono({
    weight: '600',
    subsets: ['latin']
})

const geistMonoBold = Geist_Mono({
    weight: '800',
    subsets: ['latin']
})

export { geistLight, geistMedium, geistBold, geistMonoMedium, geistMonoBold, poppins };