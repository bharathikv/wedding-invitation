export const T = {
  ta: {
    langBtn: "English",
    ganesh: "|| ஸ்ரீ கணேசாய நமஃ ||",
    god: "ஸ்ரீ முனீஸ்வரர் துணை",
    invite: "திருமண அழைப்பிதழ்",
    heroDate: "திங்கட்கிழமை · 16 நவம்பர் 2026",
    heroTamilDate: "ஐப்பசி 30",
    heroPlace: "அய்யம்பாளையம், திருவண்ணாமலை",
    scroll: "அழைப்பைக் காண",
    countdownTitle: "மணநாளுக்கு இன்னும்",
    cd: { d: "நாட்கள்", h: "மணி", m: "நிமிடம்", s: "வினாடி" },
    cdDone: "இன்று நம் இல்லத்தில் திருமணம் — வாழ்த்துங்கள்! 🌺",

    greet: "அன்புடையீர், வணக்கம்",
    intro:
      "பெரியோர்களால் நிச்சயிக்கப்பட்டபடி, ஐப்பசி மாதம் 30-ம் தேதி (16.11.2026) திங்கட்கிழமை சுப முகூர்த்த நாளில், காலை 6.00 மணிக்கு மேல் 7.30 மணிக்குள் விருச்சிக லக்னத்தில் எங்கள் இல்லத் திருமணம் நடைபெற இறைவன் திருவருள் கூட்டியுள்ளது.",
    invitation:
      "தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து, மணமக்களை ஆசீர்வதிக்குமாறு அன்புடன் அழைக்கின்றோம்.",

    couple: "மணமக்கள்",
    groom: "மணமகன்",
    bride: "மணமகள்",
    sonOf: "திருமகன்",
    daughterOf: "திருமகள்",

    events: "திருமண நிகழ்வுகள்",
    ev1: {
      title: "திருமண முன் நிகழ்வு",
      day: "புதன்கிழமை",
      date: "11 நவம்பர் 2026",
      tamil: "ஐப்பசி 25",
      time: "பகல் 1.30 – 3.00 மணி",
      note: "மணமகள் M. விகிதா B.A. அவர்களுக்கான நிகழ்வு",
    },
    ev2: {
      title: "திருமண முகூர்த்தம்",
      day: "திங்கட்கிழமை",
      date: "16 நவம்பர் 2026",
      tamil: "ஐப்பசி 30",
      time: "காலை 6.00 – 7.30 மணி",
      note: "விருச்சிக லக்னம்",
    },

    venue: "திருமண மண்டபம் / இடம்",
    addCal: "நாட்காட்டியில் சேர்",
    openMaps: "வழி காட்டு (Google Maps)",
    hosts: "அன்புடன் அழைப்போர்",
    call: "தொடர்புக்கு",

    rsvp: "உங்கள் வருகையை தெரிவியுங்கள்",
    rsvpSub: "உங்கள் வருகை எங்களுக்கு மகிழ்ச்சி தரும்",
    name: "உங்கள் பெயர்",
    guests: "வரும் நபர்கள் எண்ணிக்கை",
    attend: "வருவீர்களா?",
    yes: "ஆம், வருகிறேன்",
    no: "வர இயலாது, வாழ்த்துகள்",
    note: "வாழ்த்து / செய்தி (விருப்பம்)",
    send: "WhatsApp-ல் அனுப்பு",
    share: "அழைப்பை பகிர்",
    rsvpMsg: (n, a, g, note) =>
      `வணக்கம்! திருமண அழைப்பிற்கு நன்றி.\nபெயர்: ${n}\nவருகை: ${a}\nநபர்கள்: ${g}${note ? `\nசெய்தி: ${note}` : ""}`,
    shareMsg: "தங்கராஜ் & விகிதா திருமண அழைப்பிதழ் – 16.11.2026, அய்யம்பாளையம், திருவண்ணாமலை",

    quote: "இரு உள்ளங்கள் இணையும் இனிய நாளில், உங்கள் ஆசிகளே எங்கள் பெரும் செல்வம்.",
    footer: "உங்கள் வருகையை எதிர்நோக்கி",
    made: "அன்புடன் உருவாக்கப்பட்டது",

    blessTitle: "தெய்வ ஆசீர்வாதம்",
    blessSub: "இறைவனின் திருவருளோடு தொடங்கும் புதிய வாழ்க்கை",
    tapHint: "ஆசி பெற தெய்வத்தைத் தொடுங்கள் 🌸",
    gods: [
      { key: "ganesha", name: "ஸ்ரீ விநாயகர்", sub: "தடைகள் நீக்கும் முதல் தெய்வம்", mantra: "ஓம் கம் கணபதயே நமஃ" },
      { key: "lakshmi", name: "ஸ்ரீ மகாலட்சுமி", sub: "செல்வமும் மங்கலமும் அருள்பவள்", mantra: "ஓம் ஸ்ரீ மஹாலக்ஷ்ம்யை நமஃ" },
      { key: "shiva", name: "அண்ணாமலையார்", sub: "திருவண்ணாமலை ஜோதி வடிவம்", mantra: "ஓம் நமசிவாய" },
      { key: "murugan", name: "முருகப் பெருமான்", sub: "தமிழ்க் கடவுள் · வேல் முருகா", mantra: "ஓம் சரவணபவ" },
    ],
  },

  en: {
    langBtn: "தமிழ்",
    ganesh: "|| Shri Ganeshaya Namah ||",
    god: "Sri Muneeswarar Thunai",
    invite: "Wedding Invitation",
    heroDate: "Monday · 16 November 2026",
    heroTamilDate: "Aippasi 30",
    heroPlace: "Ayyampalayam, Tiruvannamalai",
    scroll: "Open the invitation",
    countdownTitle: "Counting down to the wedding",
    cd: { d: "Days", h: "Hours", m: "Minutes", s: "Seconds" },
    cdDone: "Today is the wedding — bless the couple! 🌺",

    greet: "With joy & divine blessings",
    intro:
      "As ordained by our elders, the wedding will be solemnised on Monday, 16 November 2026 (Aippasi 30), an auspicious day, between 6:00 and 7:30 AM in Viruchiga Lagnam, by the grace of the Almighty.",
    invitation:
      "We warmly invite you, with your family and friends, to grace the occasion and bless the couple.",

    couple: "The Couple",
    groom: "The Groom",
    bride: "The Bride",
    sonOf: "Son of",
    daughterOf: "Daughter of",

    events: "Wedding Events",
    ev1: {
      title: "Pre-wedding Ceremony",
      day: "Wednesday",
      date: "11 November 2026",
      tamil: "Aippasi 25",
      time: "1:30 PM – 3:00 PM",
      note: "Ceremony for the bride, M. Vikitha B.A.",
    },
    ev2: {
      title: "Muhurtham — The Wedding",
      day: "Monday",
      date: "16 November 2026",
      tamil: "Aippasi 30",
      time: "6:00 AM – 7:30 AM",
      note: "Viruchiga Lagnam",
    },

    venue: "Venue",
    addCal: "Add to calendar",
    openMaps: "Get directions (Google Maps)",
    hosts: "With love, the families",
    call: "Contact",

    rsvp: "Kindly let us know",
    rsvpSub: "Your presence will make our day complete",
    name: "Your name",
    guests: "Number of guests",
    attend: "Will you attend?",
    yes: "Yes, I'll be there",
    no: "Can't make it — best wishes!",
    note: "Blessings / message (optional)",
    send: "Send on WhatsApp",
    share: "Share invitation",
    rsvpMsg: (n, a, g, note) =>
      `Namaste! Thank you for the wedding invitation.\nName: ${n}\nAttending: ${a}\nGuests: ${g}${note ? `\nMessage: ${note}` : ""}`,
    shareMsg: "Wedding invitation — Thangaraj & Vikitha, 16 Nov 2026, Ayyampalayam, Tiruvannamalai",

    quote: "On the day two hearts become one, your blessings are our greatest treasure.",
    footer: "Awaiting your gracious presence",
    made: "Made with love",

    blessTitle: "Divine Blessings",
    blessSub: "A new life begins with the grace of the Gods",
    tapHint: "Touch a deity to receive blessings 🌸",
    gods: [
      { key: "ganesha", name: "Lord Ganesha", sub: "Remover of obstacles, first to be invoked", mantra: "Om Gam Ganapataye Namaha" },
      { key: "lakshmi", name: "Goddess Lakshmi", sub: "Giver of prosperity & auspiciousness", mantra: "Om Shri Mahalakshmyai Namaha" },
      { key: "shiva", name: "Lord Annamalaiyar", sub: "The sacred flame of Tiruvannamalai", mantra: "Om Namah Shivaya" },
      { key: "murugan", name: "Lord Murugan", sub: "The beloved God of the Tamils · Vel Muruga", mantra: "Om Saravana Bhava" },
    ],
  },
};
