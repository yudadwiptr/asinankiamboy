export const WHATSAPP_NUMBER = "6281211909934";
export const WHATSAPP_DISPLAY = "+62 812-1190-9934";

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=asinan+kiamboy+milanial#lrd=0x2e69c700366d9d0b:0xc9fbc0b724c5bbf3,1,,,,";

export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jl.+Mutiara+Bogor+Raya+No.35+Blok+H4+Katulampa+Bogor+Timur+Kota+Bogor";

export const TIKTOK_URL =
  "https://www.tiktok.com/@ruzaqbogor?_r=1&_t=ZS-9AxWwNaV38Z";
export const TIKTOK_HANDLE = "@ruzaqbogor";

export const PRODUCT_PACKAGE = {
  id: "asinan-komplit-box",
  name: "Asinan Kiamboy Milanial",
  subtitle: "1 Box Komplit · 8 Isian Buah Segar & Kuah Pedas Segar Khas",
  tasteNote: "Kuah Pedas Segar Khas (Langsung Tercampur · Tidak Dipisah)",
  price: 35000,
  image: "/assets/hero-asinan-cutout.png",
};

export const ASINAN_INGREDIENTS = [
  {
    id: "kiamboy",
    name: "Plum Kiamboy Asli",
    role: "Bumbu Utama Kuah",
    tagline:
      "Plum kiamboy pilihan dengan perpaduan rasa asam, asin, dan manis autentik yang meresap sempurna",
    cardImage: "/assets/card-kiamboy.jpg",
    shortIngredient: "Kiamboy",
    glowColor: "rgba(230, 57, 70, 0.34)",
  },
  {
    id: "anggur-lengkeng",
    name: "Anggur & Lengkeng Segar",
    role: "Isian Buah Manis",
    tagline:
      "Buah anggur renyah & daging lengkeng kupas tebal yang juicy menyeimbangkan segarnya kuah",
    cardImage: "/assets/card-anggur-lengkeng.jpg",
    shortIngredient: "Anggur & Lengkeng",
    glowColor: "rgba(168, 85, 247, 0.30)",
  },
  {
    id: "sonkit",
    name: "Jeruk Sonkit Murni",
    role: "Perasan Penyegar",
    tagline:
      "Irisan & perasan jeruk sonkit (kalamansi) segar beraroma khas yang langsung bikin mata melek",
    cardImage: "/assets/card-sonkit.jpg",
    shortIngredient: "Jeruk Sonkit",
    glowColor: "rgba(247, 127, 0, 0.34)",
  },
  {
    id: "mangga",
    name: "Mangga Muda Krenyes",
    role: "Isian Buah Renyah",
    tagline:
      "Potongan mangga muda segar pilihan dengan tekstur renyah di setiap gigitan",
    cardImage: "/assets/card-mangga.jpg",
    shortIngredient: "Mangga Muda",
    glowColor: "rgba(245, 158, 11, 0.34)",
  },
  {
    id: "nanas",
    name: "Nanas Madu Segar",
    role: "Isian Buah Tropis",
    tagline:
      "Potongan nanas madu kuning segar dengan rasa manis asam berair yang makin nikmat tersiram kuah kiamboy",
    cardImage: "/assets/card-nanas.jpg",
    shortIngredient: "Nanas Segar",
    glowColor: "rgba(250, 204, 21, 0.34)",
  },
  {
    id: "salak",
    name: "Salak Pondoh Renyah",
    role: "Isian Buah Krenyes",
    tagline:
      "Daging buah salak kupas pilihan yang garing, manis, dan renyah berpadu kuah pedas segar",
    cardImage: "/assets/card-salak.jpg",
    shortIngredient: "Salak Renyah",
    glowColor: "rgba(217, 119, 6, 0.32)",
  },
  {
    id: "rambutan",
    name: "Rambutan Kupas Manis",
    role: "Isian Buah Segar",
    tagline:
      "Daging buah rambutan kupas bersih yang manis lembut berpadu kuah asam pedas segar",
    cardImage: "/assets/card-rambutan.jpg",
    shortIngredient: "Rambutan",
    glowColor: "rgba(236, 72, 153, 0.30)",
  },
  {
    id: "cabai",
    name: "Cabai Rawit Merah",
    role: "Takaran Pedas Pas",
    tagline:
      "Racikan cabai rawit merah segar alami dengan satu standar rasa pedas segar khas di setiap box",
    cardImage: "/assets/card-cabai.jpg",
    shortIngredient: "Cabai Segar",
    glowColor: "rgba(220, 38, 38, 0.38)",
  },
];

// Backward-compatible export alias
export const ASINAN_VARIANTS = ASINAN_INGREDIENTS;

export const CUSTOMER_REVIEWS = [
  {
    id: "intan-nalalita",
    name: "Intan Nalalita",
    initials: "IN",
    avatarBg: "bg-[#E63946]",
    rating: 5,
    timeAgo: "3 months ago",
    badge: "Local Guide · Verified Buyer",
    comment: "Enakkkkkkkk bgt seger asinan nya, pasti repeat order 😍😍😍",
    hasPhotoAttachment: true,
    photoCaption: "1 Foto Pelanggan · Kemasan box asinan rapi di mobil",
    highlightTag: "Repeat Order",
  },
  {
    id: "nadia-putri",
    name: "Nadia Putri Maharani",
    initials: "NP",
    avatarBg: "bg-[#233D26]",
    rating: 5,
    timeAgo: "1 month ago",
    badge: "Verified Google Review",
    comment:
      "Kuah kiamboy campur jeruk sonkitnya juara banget! Manis asem pedesnya balance, nggak bikin sakit tenggorokan. Potongan mangga & rambutannya super gede dan masih krenyes segar.",
    hasPhotoAttachment: false,
    highlightTag: "Kuah Sonkit Juara",
  },
  {
    id: "reza-firmansyah",
    name: "Reza Firmansyah",
    initials: "RF",
    avatarBg: "bg-[#F77F00]",
    rating: 5,
    timeAgo: "2 months ago",
    badge: "Pelanggan Kota Bogor",
    comment:
      "Ambil langsung ke Mutiara Bogor Raya pelayanannya ramah & responsif banget. Box-nya tebel disegel rapat jadi aman dibawa nyetir jauh ke Jakarta tanpa tumpah sedikitpun.",
    hasPhotoAttachment: false,
    highlightTag: "Kemasan Anti Tumpah",
  },
  {
    id: "claudia-wijaya",
    name: "Claudia Wijaya",
    initials: "CW",
    avatarBg: "bg-[#3A5A3E]",
    rating: 5,
    timeAgo: "3 weeks ago",
    badge: "Verified Google Review",
    comment:
      "Porsi buahnya royal banget, anggur sama lengkengnya manis berpadu kuah kiamboy asli. Masukin kulkas bentar sebelum dimakan siang-siang di Bogor langsung melek maksimal!",
    hasPhotoAttachment: false,
    highlightTag: "Porsi Buah Royal",
  },
];

export const STORE_INFO = {
  brandName: "Asinan Kiamboy Milanial",
  address:
    "Jl. Mutiara Bogor Raya No.35 Blok H4, RT.05/RW.17, Katulampa, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16144, Indonesia",
  shortAddress: "Mutiara Bogor Raya Blok H4 No.35, Katulampa, Bogor Timur",
  serviceInfo: "Pickup di outlet · Tersedia pengiriman lokal area Kota Bogor",
  hours: "Setiap Hari · 09.00 – 20.00 WIB",
};

export function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
