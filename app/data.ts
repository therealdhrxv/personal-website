// Everything on the site lives here.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dhruvpankajpatel.vercel.app").replace(/\/$/, "");

export const profile = {
  name: "Dhruv Pankaj Patel",
  shortName: "Dhruv Patel",
  role: "Software Engineer",
  company: "Intervue.io",
  companyUrl: "https://www.intervue.io",
  location: "Bengaluru, India",
};

// Empty links are hidden.
export const socials = [
  { label: "GitHub", url: "https://github.com/therealdhrxv", icon: "github" },
  { label: "X", url: "https://x.com/therealdhrxv", icon: "x" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/therealdhrxv", icon: "linkedin" },
].filter((s) => s.url);

export const sameAs = socials.map((s) => s.url);
