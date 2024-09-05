import Account from '../images/account.png';
import Finance from '../images/finance.png';
import Invoice from '../images/invoice.png';

export const items = [
    {
      id: 1,
      title: "Akun",
      subTitle1: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet buyer",
      subTitle2: "Cara buyer buat tender kilat",
      subTitle3: "Cara login akun buyer B2B PaDi UMKM",
      subTitle4: "Cara Daftar Akun Admin perusahaan",
      imgSrc: {Account}  
    },
    {
      id: 2,
      title: "Pemesanan",
      subTitle1: "Cara Terima dan Checkout Tender Kilat",
      subTitle2: "Cara Belanja B2B dengan Termin",
      subTitle3: "Bagaimana Cara Belanja B2B di PaDi UMKM",
      subTitle4: "Cara Menindaklanjuti Permintaan Pembelian oleh Manager",
      imgSrc: {Invoice}  
    },
    {
      id: 3,
      title: "Pembayaran & Perpajakan",
      subTitle1: "Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM",
      subTitle2: "Pembayaran Tempo",
      subTitle3: "Cara Revisi Pajak",
      subTitle4: " Pembayaran Langsung",
      imgSrc: {Finance} 
    }
  ];
  