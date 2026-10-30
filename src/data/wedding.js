// ============================================================
//  EDIT THIS FILE to change anything on the website.
//  Details were read from the printed card — please double-check
//  names, phone numbers and the 11 Nov event before sharing.
// ============================================================

export const wedding = {
  credit: {
    name: { ta: "பாரதி காமராஜ்", en: "Bharathi Kamaraj" },
    role: {
      ta: "· மணமகளின் சகோதரர்",
      en: "· Bride's Brother",
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
    name: {
      ta: "அக்ஷயா மஹால்",
      en: "Akshaya Mahal",
    },
    lines: {
      ta: [
        "அத்தியந்தல், திருவண்ணாமலை",
        "தமிழ்நாடு - 606603",
        "🥐அக்ஷயா பேக்கரிஅருகில்",
      ],
      en: [
        "Athiyandal, Tiruvannamalai",
        "Tamil Nadu - 606603",
        "🥐Near Akshaya Bakery",
      ],
    },
    mapQuery: "https://maps.app.goo.gl/7JAA2iKzN8yND7Xz9",
  },

  // "அன்புடன் அழைப்போர்" — inviting family members
  // hosts: [{ ta: "D. செல்வராஜ் – ரங்கநாயகி", en: "D. Selvaraj – Ranganayaki" }],
  contacts: ["9786006533", "9944242371"],

  // RSVP messages open WhatsApp chat with this number (10 digits, India)
  rsvpWhatsApp: "6383013648",
  siteUrl: "", // after deploying, put your site link here for the "Share" button
};
