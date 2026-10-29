// ============================================================
//  EDIT THIS FILE to change anything on the website.
//  Details were read from the printed card — please double-check
//  names, phone numbers and the 11 Nov event before sharing.
// ============================================================

export const wedding = {
  credit: {
    name: { ta: "பாரதி K", en: "Bharathi K" },
    role: {
      ta: "ஃபுல் ஸ்டாக் டெவலப்பர் · மணமகளின் சகோதரர்",
      en: "Full Stack Developer · Bride's Brother",
    },
    label: { ta: "வடிவமைப்பு & உருவாக்கம்", en: "Designed & developed by" },
    link: "", // optional: your portfolio / LinkedIn URL
  },
  groom: {
    first: { ta: "தங்கராஜ்", en: "Thangaraj" },
    full: { ta: "ஆர். தங்கராஜ்", en: "R. Thangaraj" },
    role: { ta: "எலக்ட்ரீசியன்", en: "Electrician" },
    // Fill these to show "Son of ..." on the site. Leave "" to hide.
    parents: { ta: "", en: "" },
    photo: "", // e.g. "/groom.jpg" (put file in the public/ folder)
  },
  bride: {
    first: { ta: "விகிதா", en: "Vikitha" },
    full: { ta: "எம். விகிதா", en: "M. Vikitha" },
    role: { ta: "பி.ஏ.", en: "B.A." },
    parents: { ta: "", en: "" }, // "Daughter of ..."
    photo: "",
  },

  // Main muhurtham — Monday, 16 Nov 2026 (Aippasi 30), 6:00–7:30 AM, Viruchiga lagnam
  muhurtham: {
    start: "2026-11-16T06:00:00+05:30",
    end: "2026-11-16T07:30:00+05:30",
  },
  // Pre-wedding ceremony — Wednesday, 11 Nov 2026 (Aippasi 25), 1:30–3:00 PM
  prewedding: {
    start: "2026-11-11T13:30:00+05:30",
    end: "2026-11-11T15:00:00+05:30",
  },

  venue: {
    name: { ta: "அய்யம்பாளையம்", en: "Ayyampalayam" },
    lines: {
      ta: [
        "செங்கம் ரோடு, அத்தியந்தல் அஞ்சல்",
        "திருவண்ணாமலை வட்டம் & மாவட்டம்",
      ],
      en: [
        "Sengam Road, Athiyanthal Post",
        "Tiruvannamalai Taluk & District, Tamil Nadu",
      ],
    },
    mapQuery: "Athiyanthal Sengam Road Tiruvannamalai Tamil Nadu",
  },

  // "அன்புடன் அழைப்போர்" — inviting family members
  hosts: [
    { ta: "D. செல்வராஜ் – ரங்கநாயகி", en: "D. Selvaraj – Ranganayaki" },
    { ta: "D. ராஜலிங்கம்", en: "D. Rajalingam" },
    { ta: "D. மாரிமுத்து – சாந்தா", en: "D. Marimuthu – Santha" },
    { ta: "D. மகாலிங்கம் – ஜெயா", en: "D. Mahalingam – Jaya" },
  ],
  contacts: ["6383013648", "9384511068"],

  // RSVP messages open WhatsApp chat with this number (10 digits, India)
  rsvpWhatsApp: "6383013648",
  siteUrl: "", // after deploying, put your site link here for the "Share" button
};
