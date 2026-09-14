export const siteName = "Udaan Media House";

export const contact = {
  phone1: "+91 99900 04195",
  phone1Href: "tel:+919990004195",
  phone2: "+91 80103 67031",
  phone2Href: "tel:+918010367031",
  email: "hello@digyudaan.com",
  emailHref: "mailto:hello@digyudaan.com",
  address: "Gaur City Centre, Greater Noida, India",
  whatsapp: "https://wa.me/919990004195",
  facebook: "https://www.facebook.com/digyudaan",
  instagram: "https://www.instagram.com/digyudaan_media",
  linkedin: "https://www.linkedin.com/company/digy-udaan-media/",
  twitter: "https://x.com/digyudaan",
  youtube: "https://www.youtube.com/@DigyUdaan-n9z",
};

export const navItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/service", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact-us", label: "Contact Us" },
];

// Service dropdown links (also used to build routes + simple service-detail pages)
export const serviceLinks = [
  { path: "/marketing-consulting", label: "Marketing Consultancy" },
  { path: "/media-planning", label: "Media Planning" },
  { path: "/atl-btl", label: "ATL & BTL Advertising" },
  { path: "/digital-marketing", label: "Digital Marketing" },
  { path: "/outdoor-advertising", label: "Outdoor Advertising" },
  { path: "/lift-advertising", label: "Lift Advertising" },
  { path: "/auto-rickshaw-advertising", label: "Auto Rickshaw Advertising" },
  { path: "/cinema-advertising", label: "Cinema Advertising" },
  { path: "/mall", label: "Mall Advertising" },
  { path: "/paper-printing", label: "Paper Printing & Inserts" },
  { path: "/news-paper", label: "Newspaper Advertising" },
  { path: "/digital-billboard", label: "Digital Billboard Advertising" },
  { path: "/message", label: "Message Marketing" },
];

// Homepage "Our Services" (top 4 highlighted)
export const featuredServices = [
  {
    path: "/marketing-consulting",
    title: "Marketing Consultancy",
    blurb:
      "We have experienced and dedicated marketing consultants for offering you realistic and unique marketing plans.",
  },
  {
    path: "/media-planning",
    title: "Media Planning",
    blurb:
      "For offering the best plan for giving the maximum boost to your product or services through online media, we offer the most coherent plans that are measurable.",
  },
  {
    path: "/atl-btl",
    title: "ATL & BTL Advertisement",
    blurb:
      "We have the experts for both Above the Line and Below the Line, marketing to make sure that your advertisements catch everybody's attention without fail.",
  },
  {
    path: "/digital-marketing",
    title: "Digital Marketing",
    blurb:
      "For ensuring a long term online presence for your company, we have the best plans and strategies that lead your website to the top. The best Search Engine Optimization, On-page, and Off-page work to ensure your digital identity.",
  },
];

// "We've Got You Covered" grid on homepage
export const coverageGrid = [
  { img: "/images/services/1.jpg", title: "Outdoor Advertising", path: "/outdoor-advertising" },
  { img: "/images/services/2.jpg", title: "Lift Advertising", path: "/lift-advertising" },
  { img: "/images/services/3.jpg", title: "Auto Advertising", path: "/auto-rickshaw-advertising" },
  { img: "/images/services/4.jpg", title: "Cinema Advertising", path: "/cinema-advertising" },
  { img: "/images/services/5.jpg", title: "Mall Advertising", path: "/mall" },
  { img: "/images/services/6.jpg", title: "Printing and Inserts", path: "/paper-printing" },
  { img: "/images/services/7.jpg", title: "Digital Marketing", path: "/digital-marketing" },
  { img: "/images/services/8.jpg", title: "Message Marketing", path: "/message" },
];

export const clientLogos = Array.from({ length: 18 }, (_, i) => `/images/client/${i + 1}.png`);

export const counters = [
  { count: 78, label: "Successful projects" },
  { count: 15, label: "Team members" },
  { count: 250, label: "Clients" },
  { count: 200, label: "Satisfied customers" },
];

export const serviceOptions = [
  "Cinema Advertisement",
  "Radio Advertising",
  "News Paper Advertising",
  "Auto Advertisement",
  "Outdoor Advertising",
  "Digital Marketing",
  "BTL Advertisement",
  "Lift Advertisement",
  "Digital Billboard Advertising",
];

// Content for the 9 simple, single-template service pages
export const simpleServicePages = {
  "outdoor-advertising": {
    title: "Outdoor Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/1.jpg",
    paragraphs: [
      "If you plan to set up your business or plan to expand your business, then the importance of outdoor advertising cannot be ignored. Outdoor advertising is an excellent way of promoting your products in specific geographic areas. Billboards can be effective ways to display your marketing campaigns. You can use your creativity to impress your audiences with unique outdoor campaigns. With the right marketing message in the billboards, you can grab many eyeballs, and you can quickly fill up your sales pipeline with leads that convert. You can measure the effectiveness of outdoor advertising by comparing your sales figures before and after the outdoor campaign was run. If you think that you are not getting expected results from outdoor advertising, then you can tweak the marketing strategies a little bit to see faster results.",
    ],
  },
  "lift-advertising": {
    title: "Lift Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/lift.jpg",
    paragraphs: [
      "Lift ads can be entertaining, and in lift ads, you can expect better attention from your audiences as there are no distractions when people travel via lifts. While looking at the advertisements in the lift, people will subconsciously register the brand names in their minds, and when the need arises, they will consider the brands for making a purchase. Lift advertising is an excellent marketing strategy that can boost up your conversion rates and can leave a substantial impact on your ROI. Promotional messages are also useful conveyed to the audiences through lift advertising. Residential lift advertising can be used to target local customers. Lift advertising can be cheaper than billboards and can bring you more leads.",
    ],
  },
  "auto-rickshaw-advertising": {
    title: "Auto Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/auto.jpg",
    paragraphs: [
      "Auto advertising is a unique marketing method employed by many companies to boost their sales volume. While people casually look at the marketing messages at the back of auto rickshaws, they get more visibility about a brand which in future can lead to sales. You can use catchy one-liner for auto ads to get faster conversions. Also, do not forget to use intriguing images in your auto advertising campaigns. Auto advertising lights up at day and night brightly can impact your local audiences to a considerable extent.",
    ],
  },
  "cinema-advertising": {
    title: "Cinema Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/cinema.jpg",
    paragraphs: [
      "Cinema advertising is a great way to portray your messages to a captive audience. It would help if you choose your marketing campaigns prudently to have more effects on your target audience—Cinema advertising help to create brand awareness and strengthen your visibility. The cinema advertising helps you to maximize ROI by impacting your sales through better conversions. Through cinema advertising, you can easily display your creativity to the entire world and to take your business to new heights.",
    ],
  },
  mall: {
    title: "Mall Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/5.jpg",
    paragraphs: [
      "A mall gets many visitors and hence advertising in the mall can be a great way to promote your products and services. You can try out more innovative methods to do advertising in the malls. The right ad placements can get you to your dream leads. Malls advertising can create more exposures to the ads and can strengthen your brand value. You can place ads to tailor the needs of different individuals. Through the right advertising strategies, you can entice the customers to invest in your products and services.",
    ],
  },
  "paper-printing": {
    title: "Paper Printing and Inserts",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/paper-printing.jpg",
    paragraphs: [
      "Paper and print advertising have the largest spend share among total marketing budget. The popular formats to advertise in Papers are display ads and classified ads. Advertising rates for papers ads depends on the readership and page number. INS is an accredited body for paper and print advertising agencies in India. The udaan media house is one of the best advertising agency in India with offices in Ghaziabad. We provide the lowest print advertising rate to our clients. You can find the card of advertising as well as discounted.",
    ],
  },
  "news-paper": {
    title: "News Paper Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/newspaper.jpg",
    paragraphs: [
      "News paper advertising play an essential role in boosting your marketing campaigns. Through news paper, you can create high engagements and maximize conversions. News paper advertising generally create a long term effect on the minds of the purchaser. Through news paper advertising, you can maximize your sales.",
    ],
  },
  "digital-billboard": {
    title: "Digital Billboard Advertisement",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/about.jpg",
    paragraphs: [
      "In the era of digitalization if you do not have the right digital strategies, then you are selling yourself short. Digital marketing is a popular marketing technique that exists online and can boost your conversions to a significant extent. The digital marketing is carried out through many digital channels like search engines, social media, emails and many more. Digital marketing has more reachability as compared to traditional marketing techniques. Also, you can expect better results here by investing less. Embrace digital marketing strategies so that your website can rank higher in the SERPs.",
    ],
  },
  message: {
    title: "Message Marketing",
    heroImg: "/images/media-planning.jpg",
    bodyImg: "/images/services/message.jpg",
    paragraphs: [
      "Message marketing helps to get you more leads. You can customize your messages to boost your sales. You need to know about your target audiences so that you can customize the messages for them to get more effective results. Employ the right message marketing strategies to double your conversions and to see faster results.",
    ],
  },
};

export const galleryVideos = [
  "U3qEZdulvzw",
  "qnefrr9E3gg",
  "SATeQ-C5pos",
  "JJPS-qNV--Q",
  "zMp_UPBRtTM",
  "2NiRALXwnvY",
  "E8HRaXGYSUg",
  "to_WDDbGA0k",
  "jK2iPT1_zBU",
];
