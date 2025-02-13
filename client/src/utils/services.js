import {
  accessory,
  braiding,
  ghanaWeaving,
  hairProduct,
  locks,
  makeover,
  pedicure,
  perfume,
  wig
} from '../img/index';

export const services = [
  { name: "Braiding", desc: "Intricate styles to add flair and beauty to your hair.", img: braiding },
  { name: "Ghana Weaving", desc: "Cornrows perfected for a bold, sleek look.", img: ghanaWeaving },
  { name: "Wig Installation & Revamping", desc: "Perfect your wig or breathe new life into an old one.", img: wig },
  { name: "Pedicure", desc: "Pamper your feet with a relaxing and beautifying treatment.", img: pedicure },
  { name: "Party Rockers Makeover", desc: "Get glammed up for your next event with a dazzling look.", img: makeover },
  { name: "Fresh Locks & Dread Relocking", desc: "Start or maintain your locks with expert care.", img: locks },
  { name: "Hair Products", desc: "Quality products to keep your hair healthy and styled.", img: hairProduct },
  { name: "Accessories", desc: "Elevate your look with the perfect finishing touches.", img: accessory },
  { name: "Perfume & Body Sprays", desc: "Find your signature scent to leave a lasting impression.", img: perfume }
];