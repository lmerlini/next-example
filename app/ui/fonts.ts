import { Inter, Lusitana } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] });
export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
