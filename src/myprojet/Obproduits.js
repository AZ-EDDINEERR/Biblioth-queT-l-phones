const objectTele = [
  {
    id: 1,
    nom: "iPhone 15 Pro Max",
    prix: "15 990",
    description: "performance inégalée, photo 48 Mpx et design élégant.",
    image:
      "https://www.mediazone.ma/product/images/14610-PQJ420DW/apple-iphone-15-pro-max-maroc.webp",
  },
  {
    id: 2,
    nom: "iPhone 16 Pro Max",
    prix: "18 490",
    description:
      "Boostée par la puce A18 Pro aux performances de CPU inégalées, la gamme Pro inaugure des écrans plus grands et bénéficie de Commande de l’appareil photo   .",
    image:
      "https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0006166469.jpg",
  },
  {
    id: 3,
    nom: " galaxy A56 5G",
    prix: "5 742",
    description:
      "galaxy A56 5G Smartphone 8+128GB/8+256GB/12+256GB, écran 6.7 caméra principale 50MP .",
    image:
      "https://img.kwcdn.com/product/fancy/4507bde5-9696-456a-a3be-5d137db33cd9.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 4,
    nom: "Samsung Galaxy A35 5G",
    prix: "4 150",
    description:
      "Samsung Galaxy A35 5G, 8+256 Go, Bleu Marine, Triple Caméra 50 MP, Haute Qualité.",
    image:
      "https://img.kwcdn.com/product/fancy/3d502d0e-da6f-4e1a-90e2-7b2470001fb3.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 5,
    nom: "Realme P3 5G",
    prix: "3 139 ",
    description:
      "Realme P3 5G 8 Go + 256 GB 5G LTE, Version Globale Débloquée Smartphone Android 15 pour Jeux, 6,67'' Écran FHD 120 Hz Batterie de 5 260 mAh .",
    image:
      "https://img.kwcdn.com/product/fancy/a6f3b4c3-e626-4bbd-98f5-7a9b3a044323.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 6,
    nom: "iPhone 17 Pro ",
    prix: "15 900 ",
    description:
      "écran 120 Hz 6,9'', triple 48 MP, 4K 120 i/s, autonomie 37 h, stockage 2 To .",
    image:
      "https://creativehub.teliacompany.com/transform/5f7bb8aa-9b36-4b2f-94f9-b90895fd202e/iPhone_17_Pro_Max_Cosmic_Orange_PDP_Image_Position_1__WWEN?io=transform:fill,width:500&quality=95",
  },
];
const objectPc = [
  {
    id: 10,
    nom: "Apple MacBook Air M2",
    prix: "11 450",
    description:
      "Ultra-fin et puissant avec la puce Apple M2, idéal pour la productivité et la créativité.",
    image:
      "https://zonetech.ma/wp-content/uploads/2024/01/MacBook-Air-M2-13-Pouces-2022-Prix-Maroc-PC-Portable-Maroc-2.jpg",
  },
  {
    id: 11,
    nom: "Apple MacBook Pro 14” M3",
    prix: "26 900",
    description:
      "MacBook Pro avec puce M3 offrant des performances professionnelles et un écran Liquid Retina XDR.",
    image:
      "https://www.myordi.ma/media/2024/04/Apple-MacBook-Pro-14-inch-M3-Max-1Tb-SSD-MRX53D-A-7.jpg",
  },
  {
    id: 12,
    nom: "Dell XPS 13 Plus",
    prix: "5 220",
    description:
      "Ultrabook Windows premium avec écran InfinityEdge et processeur Intel Core i7.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dx3pKDJVq5tFXBtfIB2_CWI31arlTrq-Qg&s",
  },
  {
    id: 13,
    nom: "Microsoft Surface Laptop 5",
    prix: "13 499",
    description:
      "Portable élégant et performant sous Windows 11 avec écran tactile PixelSense.",
    image:
      "https://fullpix.ma/wp-content/uploads/2024/05/microsoft-surface-laptop-5-intel-core-i7-1255u-16gb-256gb-ssd-pixelsense-13-5.png",
  },
  {
    id: 14,
    nom: "Ordinateur Portable Air 14",
    prix: 1199.0,
    description: "Ultrabook 14'' Intel i7, 16 Go RAM, 512 Go SSD.",
    image:
      "https://www.cdiscount.com/pdt2/4/9/0/1/700x700/auc5699673972490/rw/ordinateur-portable-ordinateur-portable-14-1-pouce.jpg",
  },
  {
    id: 15,
    nom: "Ordinateur portable HP NAFIDA 2   ",
    prix: "5 190 ",
    description:
      "PC convertible premium avec écran OLED tactile et processeur Intel Core i7.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZAqIYsO0GL6nRT0ws1Hi4leENYVcig2_Fg&s",
  },
  {
    id: 16,
    nom: "PC Portable Hp 6L9K1EA 4",
    prix: "5 865 ",
    description:
      "HP 15-dw4004nk Processeur Intel Core i5-1235U Écran 15.6″ FHD Carte graphique NVIDIA GeForce dédiée.8 Go RAM 512 Go SSD.",
    image:
      "https://linksolutions.ma/wp-content/uploads/2024/06/17396-hp-15-dw4004nk-i5-1235u-156-i5-1235u-nvidia-geforce-windows-11-6L9K1EA-linksolutions-ma.webp",
  },
  {
    id: 17,
    nom: "MacBook Air. Suralimenté avec M2",
    prix: "11 990",
    description:
      "Puce Apple M2 16 Go de mémoire unifiée, 256 Go SSD Écran Liquid Retina 13,6",
    image:
      "https://media.power-cdn.net/images/h-8d061ded6d99f20e0d5340f1b189a345/products/3746368/3746368_3_1200x1200_w_g.jpg",
  },
  {
    id: 18,
    nom: "MacBook Pro 16",
    prix: "55 6008",
    description:
      "MacBook Pro 16 pouces Apple M1 Pro Max-10‑core CPU and 32‑core  64GB , 2TB SSD – Space Grey",
    image:
      "https://www.districomputer.ma/wp-content/uploads/2023/03/apple-macbook-pro-16-2021-silver-uno-maroc_2.webp",
  },
];
const prod = [
  {
    id: 3,
    nom: "Casque Bluetooth sans Fil OneOdio",
    prix: "415 07",
    description:
      "Casque Bluetooth sans Fil OneOdio Casque Audio DJ Casque Studio Casque Filaire Casque Monitoring avec Prise 6.35.",
    image:
      "https://www.cdiscount.com/pdt2/5/1/5/1/700x700/auc6918687918515/rw/casque-bluetooth-sans-fil-oneodio-casque-audio-dj.jpg",
  },
  {
    id: 4,
    nom: "TV QLED Google Gaming TV 120 Hz 55",
    prix: "5 499",
    description:
      "Téléviseur QLED 55 -Profitez d'une image 4K UHD ultra-fluide avec un taux de rafraîchissement 120 Hz. ",
    image: "https://www.daiko.ma/cdn/shop/files/551.png?v=1747154543",
  },
  {
    id: 5,
    nom: "Appareil Photo Nikon Z7 mirrorless",
    prix: "1499 99",
    description:
      "Appareil photo hybride 45 MP avec vidéo 4K et stabilisation 5 axes.",
    image:
      "https://www.photo-denfert.com/upload/image/nikon-z7-mirrorless--avec-adaptateur-ftz-p-image-51060-grande.jpg",
  },
  {
    id: 6,
    nom: "Montre Connectée FitTrack",
    prix: "500 00",
    description:
      "Montre connectée avec GPS intégré, suivi cardio et étanche 50m.",
    image:
      "https://www.comparatif-montre.fr/wp-content/uploads/2020/05/WatchFaceOn1_1512x.jpg",
  },
  {
    id: 7,
    nom: 'iPad Pro "',
    prix: "12 999 ",
    description: "Apple iPad Pro 11 Puce M1 2021 (128Go WIFI-cellular) - Gris.",
    image:
      "https://www.mediazone.ma/product/images/11551-00nJbNGB/apple-ipad-pro-11--puce-m1-2021--28128go-wifi-cellular-29---gris-sideral--283-E1-B5-89-generation-29.jpg",
  },
  {
    id: 8,
    nom: 'Samsung Tablette s7 "',
    prix: "9 900",
    description: "Tablette ' avec 256 Go de stockage et stylet inclus.",
    image:
      "https://cdn.primini.ma/250_tablette-samsung-galaxy-tab-s7-12-4-8gb-256gb-sm-t97-1.webp",
  },
  {
    id: 9,
    nom: "Enceinte Bluetooth ",
    prix: "3 499",
    description: "Enceinte Bluetooth étanche IPX7 avec autonomie de 10h.",
    image:
      "https://media.electroplanet.ma/media/catalog/product/cache/14e469c4a70431355c88f88fd8855f6e/3/0/3087268-cb-39460_1.png",
  },
  {
    id: 5,
    nom: "Realme P3 5G",
    prix: "3 139 ",
    description:
      "Realme P3 5G 8 Go + 256 GB 5G LTE, Version Globale Débloquée Smartphone Android 15 pour Jeux, 6,67'' Écran FHD 120 Hz Batterie de 5 260 mAh .",
    image:
      "https://img.kwcdn.com/product/fancy/a6f3b4c3-e626-4bbd-98f5-7a9b3a044323.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 6,
    nom: "iPhone 17 Pro ",
    prix: "15 900 ",
    description:
      "écran 120 Hz 6,9'', triple 48 MP, 4K 120 i/s, autonomie 37 h, stockage 2 To .",
    image:
      "https://creativehub.teliacompany.com/transform/5f7bb8aa-9b36-4b2f-94f9-b90895fd202e/iPhone_17_Pro_Max_Cosmic_Orange_PDP_Image_Position_1__WWEN?io=transform:fill,width:500&quality=95",
  },
];
export default { objectPc, objectTele, prod };
