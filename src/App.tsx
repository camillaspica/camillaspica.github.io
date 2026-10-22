import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, MoveUpRight } from "lucide-react";
import { useState } from "react";
import portraitImage from "./assets/camilla-portrait.webp";
import bbfNetworkingImage from "./assets/bbf-networking-member-story.webp";
import bbfOpportunityImage from "./assets/bbf-opportunity-member-story.webp";
import bbf15YearVideoImage from "./assets/bbf-15-year-video-post.webp";
import bbfSandraInterviewImage from "./assets/bbf-member-interview-sandra.webp";
import bbfCommunityImpactImage from "./assets/bbf-community-impact-interview.webp";
import bbfMargaretVideoImage from "./assets/bbf-networking-margaret-video.webp";
import bbfVictoriaVideoImage from "./assets/bbf-opportunity-victoria-video.webp";
import bbfMartinStoryImage from "./assets/bbf-knowledge-martin-member-story.webp";
import bbfExpoStoryImage from "./assets/bbf-business-expo-member-story.webp";
import bbfNameSwitchAdImage from "./assets/bbf-nameswitch-sponsored-video.jpeg";
import bbfNameSwitchAdLibraryImage from "./assets/bbf-nameswitch-ad-library.webp";
import bbfNextGenBusinessAdImage from "./assets/bbf-next-gen-business-ad-library.webp";
import bucksSkillsHubRegistrationAdImage from "./assets/bucks-skills-hub-sponsored-registration.jpeg";
import bucksSkillsShowVideo from "./assets/bucks-skills-show-tiktok.mp4";
import bucksSkillsShowPoster from "./assets/bucks-skills-show-tiktok-poster.jpg";
import jpmamAnniversaryImage from "./assets/jpmam-leadership-anniversary.webp";
import jpmamThoughtLeadershipImage from "./assets/jpmam-thought-leadership.webp";
import jpmamTechTrendsImage from "./assets/jpmam-tech-trends-live.webp";
import jpmamSentimentImage from "./assets/jpmam-sentiment-trend.webp";
import jpmamActivationVideoImage from "./assets/jpmam-activation-video-post.webp";
import jpmamTopImpressionsImage from "./assets/jpmam-top-impressions-post.webp";
import jpmamTopEngagementImage from "./assets/jpmam-top-engagement-post.webp";
import novartisAmrPost1Image from "./assets/novartis-amr-post-1.webp";
import novartisAmrPost2Image from "./assets/novartis-amr-post-2.webp";
import novartisAmrPost4Image from "./assets/novartis-amr-post-4.webp";
import novartisFacebookAudienceImage from "./assets/novartis-facebook-audience.webp";
import novartisLinkedInFollowersImage from "./assets/novartis-linkedin-followers.webp";
import novartisDiversityImage1 from "./assets/novartis-diversity-1.webp";
import abbaCampaignPhasesImage from "./assets/abba-campaign-phases.webp";
import abbaPartnerToolkitImage from "./assets/abba-partner-toolkit.webp";
import abbaWebsiteTimelineImage from "./assets/abba-website-timeline.webp";
import abbaAudienceSegmentsImage from "./assets/abba-audience-segments.png";
import abbaAudienceProfilesImage from "./assets/abba-audience-profiles.png";
import abbaAudienceLocationsImage from "./assets/abba-audience-locations.png";
import abbaRevealDatePostImage from "./assets/abba-social-reveal-date.jpg";
import abbaLaunchTeaserPostImage from "./assets/abba-social-launch-teaser.jpg";
import abbaPresalesPostImage from "./assets/abba-social-presales.jpg";
import abbaCountdownPostImage from "./assets/abba-social-countdown.jpg";
import ariaSocialRecruitmentImage from "./assets/aria-social-recruitment.jpg";
import ariaSocialProgrammeDirectorImage from "./assets/aria-social-programme-director.jpg";
import ariaVideoInterviewSafetyImage from "./assets/aria-video-interview-safety.jpg";
import ariaProgrammeDirectorsArticleImage from "./assets/aria-programme-directors-article.jpg";
import ariaVideoFoundingCohortImage from "./assets/aria-video-founding-cohort.jpg";
import bbfOrloSentimentImage from "./assets/bbf-orlo-brand-sentiment.webp";
import bbfOrloBestTimesImage from "./assets/bbf-orlo-best-times.webp";

const testimonials = [
  {
    name: "Marina Jackson",
    role: "Under 19 Skills Manager & Careers Hub Lead · Bucks Skills Hub · June 2026",
    quote: "Working alongside Camilla at Buckinghamshire Business First has been a real pleasure. Her social media work made a noticeable impact, and she always approached tasks with enthusiasm, initiative, and reliability. She’s someone who gets things done and elevates the people around her.",
  },
  {
    name: "Michelle Medhat",
    role: "Director of Operations and Strategic Development · NEF: The Innovation Institute · Freelance client",
    quote: "…She has interacted with senior representatives from business, education and Government, including members of the Innovation Council. She is a lateral thinker and has contributed to a number of developments from different perspectives, a trait essential in marketing communications.…",
  },
  {
    name: "Prof Sa'ad Medhat",
    role: "NEF: The Innovation Institute · Freelance client",
    quote: "[Her social media] expertise has helped my organisation, NEF: The Innovation Institute, to create and position its products and services on LinkedIn and Twitter. … She is a good researcher, a skill that is much needed in underpinning social media campaigns and interactions.",
  },
  {
    name: "Andrew Scadding",
    role: "Trustee · Thai Children's Trust · Volunteer work",
    quote: "A gifted social network fundraiser, a rare talent!",
  },
];

const bbfCampaignPosts = [
  {
    image: bbfNetworkingImage,
    alt: "Buckinghamshire Business First member-story post: “It’s more than networking,” featuring Ash Bennett of Sales Geek.",
    caption: "Member story · Networking",
  },
  {
    image: bbfOpportunityImage,
    alt: "Buckinghamshire Business First member-story post: “It’s more than opportunity,” featuring Carys Dorritt of The Polka.",
    caption: "Member story · Opportunity",
  },
  {
    image: bbf15YearVideoImage,
    alt: "LinkedIn campaign post celebrating 15 years of Buckinghamshire Business First, with a video interview.",
    caption: "BBF15 · Campaign video",
  },
  {
    image: bbfSandraInterviewImage,
    alt: "LinkedIn member interview post featuring Sandra van Rossum of PCB Technical Solutions.",
    caption: "Member interview · Sandra van Rossum",
  },
  {
    image: bbfCommunityImpactImage,
    alt: "LinkedIn interview post about the community impact and history of Buckinghamshire Business First.",
    caption: "Community impact · Interview",
  },
  {
    image: bbfMargaretVideoImage,
    alt: "Part of Something Bigger networking campaign video featuring Margaret Donnelly of Equilibrium Products.",
    caption: "Networking · Margaret Donnelly",
  },
  {
    image: bbfVictoriaVideoImage,
    alt: "Part of Something Bigger opportunity campaign video featuring Victoria Brocklesby of Origin Global.",
    caption: "Opportunity · Victoria Brocklesby",
  },
  {
    image: bbfMartinStoryImage,
    alt: "Part of Something Bigger knowledge member-story post featuring Martin Knowles of Sales Untangled.",
    caption: "Knowledge · Martin Knowles",
  },
  {
    image: bbfExpoStoryImage,
    alt: "Buckinghamshire Business First member at the High Wycombe Business Expo holding a Part of Something Bigger sign.",
    caption: "Community · Business expo",
  },
];

const jpmamSamples = [
  {
    image: jpmamTopImpressionsImage,
    alt: "J.P. Morgan Asset Management Market Watch webconference post included in the first-quarter 2020 top-post impressions review.",
    caption: "Top post sample · Impressions",
  },
  {
    image: jpmamTopEngagementImage,
    alt: "J.P. Morgan Asset Management post about recovery scenarios included in the first-quarter 2020 top-post engagement review.",
    caption: "Top post sample · Engagement",
  },
  {
    image: jpmamActivationVideoImage,
    alt: "J.P. Morgan Asset Management LinkedIn post featuring a retirement strategist in an interview video.",
    caption: "Content activation · Video",
  },
  {
    image: jpmamSentimentImage,
    alt: "Conversation results over time chart from the 2020 J.P. Morgan Asset Management EMEA social reporting framework.",
    caption: "Social listening · Conversation trend",
  },
  {
    image: jpmamAnniversaryImage,
    alt: "Representative J.P. Morgan Asset Management LinkedIn post celebrating the firm's 35th anniversary.",
    caption: "Leadership · Brand story",
  },
  {
    image: jpmamThoughtLeadershipImage,
    alt: "Representative J.P. Morgan Asset Management LinkedIn post announcing a senior industry appointment.",
    caption: "Thought leadership",
  },
  {
    image: jpmamTechTrendsImage,
    alt: "Tech Trends LinkedIn Live broadcast still, shown without the viewer comments panel.",
    caption: "Tech Trends · LinkedIn Live",
  },
];

const novartisSamples = [
  {
    image: novartisAmrPost1Image,
    alt: "Novartis AMR Action Fund social graphic featuring a researcher and explaining the fund's antibiotic-development goal.",
    caption: "AMR Action Fund · Launch message",
  },
  {
    image: novartisAmrPost2Image,
    alt: "Novartis AMR Action Fund social graphic with two laboratory researchers and a message about collaboration across the pharmaceutical industry.",
    caption: "AMR Action Fund · Industry collaboration",
  },
  {
    image: novartisAmrPost4Image,
    alt: "Novartis AMR social graphic connecting COVID-19 and infection risk with the need to address antimicrobial resistance.",
    caption: "AMR awareness · Infection risk",
  },
  {
    image: novartisFacebookAudienceImage,
    alt: "Facebook Insights audience snapshot from the Novartis UK 2020 strategy, showing follower locations and age and gender demographics.",
    caption: "Audience insight · Facebook demographics",
  },
  {
    image: novartisLinkedInFollowersImage,
    alt: "LinkedIn follower-demographics snapshot from the Novartis UK strategy, ranking top follower locations.",
    caption: "Audience insight · LinkedIn locations",
  },
  {
    image: novartisDiversityImage1,
    alt: "Colleagues collaborating around a desk, selected as a visual for Novartis diversity and inclusion messaging.",
    caption: "Diversity & inclusion · #NovartisLife",
  },
];

const abbaSamples = [
  {
    image: abbaRevealDatePostImage,
    alt: "ABBA Voyage social post screenshot with gold eclipse-like artwork, the logo and the 2 September 2021 reveal date.",
    caption: "Planned post · Reveal date",
  },
  {
    image: abbaLaunchTeaserPostImage,
    alt: "ABBA Voyage social post screenshot showing a gold-lit countdown to 2 September 2021.",
    caption: "Planned post · Launch-date teaser",
  },
  {
    image: abbaPresalesPostImage,
    alt: "ABBA Voyage social post screenshot announcing that website pre-sales are open.",
    caption: "Planned post · Ticket pre-sales",
  },
  {
    image: abbaCountdownPostImage,
    alt: "ABBA Voyage social post screenshot announcing a 100-day countdown in gold lettering on black.",
    caption: "Planned post · 100-day countdown",
  },
  {
    image: abbaAudienceSegmentsImage,
    alt: "ABBA Voyage audience research slide describing Pure Pop Fans, ABBA Babies and core ABBA fans, with messaging themes for each group.",
    caption: "Audience insight · Three audience segments",
  },
  {
    image: abbaAudienceProfilesImage,
    alt: "Comparison of three ABBA audience groups by age, demographics, media and music consumption, and relationship with ABBA.",
    caption: "Audience insight · Profile and media habits",
  },
  {
    image: abbaAudienceLocationsImage,
    alt: "ABBA Voyage audience-location research slide showing priority markets, awareness figures and UK audience locations.",
    caption: "Audience insight · Priority markets",
  },
  {
    image: abbaCampaignPhasesImage,
    alt: "ABBA London strategy slide outlining a phased launch and three years of campaign activity.",
    caption: "Campaign structure · Four phases",
  },
  {
    image: abbaPartnerToolkitImage,
    alt: "ABBA London strategy slide proposing partner guidance for fonts, logos, graphics, approved imagery and content.",
    caption: "Partner toolkit · Brand guidance",
  },
  {
    image: abbaWebsiteTimelineImage,
    alt: "Project website roadmap, running from content and UX planning to a planned May 2021 launch.",
    caption: "Website roadmap · Planned May 2021 launch",
  },
];

const ariaSamples = [
  {
    image: ariaVideoInterviewSafetyImage,
    alt: "Screenshot of an ARIA web article with a subtitled interview video, edited to match ARIA’s prescribed simple branding.",
    caption: "Edited video · ARIA simple branding",
  },
  {
    image: ariaVideoFoundingCohortImage,
    alt: "Screenshot of an ARIA article with a subtitled interview video featuring a founding-cohort member.",
    caption: "Edited video · Founding cohort interview",
  },
  {
    image: ariaProgrammeDirectorsArticleImage,
    alt: "Screenshot of ARIA’s Introducing Our Programme Directors article and its key takeaways.",
    caption: "Article · Introducing Programme Directors",
  },
  {
    image: ariaSocialRecruitmentImage,
    alt: "Screenshot of ARIA social posts authored by Camilla: a founding-team recruitment call and an update closing the Programme Director open call.",
    caption: "Authored posts · Founding team recruitment",
  },
  {
    image: ariaSocialProgrammeDirectorImage,
    alt: "Screenshot of ARIA social posts authored by Camilla, inviting Programme Director applicants to identify experts and highlighting a diverse cohort.",
    caption: "Authored posts · Programme Director outreach",
  },
];

const experience = [
  ["SEP 2026 — PRESENT · CONTRACT TO NOV 2026", "ISOQOL", "Social Listening Consultant", "Setting up and running social listening in Brandwatch across LinkedIn, X and the wider web, tracking conversation and sentiment around patient-reported outcomes and quality of life research. Benchmarking share of voice against peer organisations and reporting emerging themes to the communications team."],
  ["FEB 2022 — JUL 2026", "Buckinghamshire Business First", "Social Media Marketing Manager", "Ran LinkedIn, Instagram, Facebook and X day to day for a business growth hub supporting SMEs, from the content calendar to reporting. Led the “Part of Something Bigger” brand positioning campaign, ghostwrote LinkedIn content for the Managing Director, created Net Zero Bucks sustainability content and wrote the employee social media playbook."],
  ["NOV 2022 — FEB 2023 · CONTRACT", "ARIA", "Digital Communications Manager · Launch Team", "Built launch-period digital strategy and produced social, web and email communications ahead of the agency’s public launch."],
  ["MAY 2021 — DEC 2021 · CONTRACT", "2112 Communications", "Social Media Manager", "Managed LinkedIn publishing, paid activation and stakeholder approvals for HSBC Asset Management."],
  ["DEC 2020 — MAR 2021 · CONTRACT", "ABBA Voyage", "Digital Marketing Consultant", "Researched existing and emerging audiences and developed paid media recommendations ahead of launch."],
  ["MAR 2020 — NOV 2020", "dentsu", "Social Media Strategist", "Worked across J.P. Morgan Asset Management, Novartis UK and Unilever, building strategy, audience insight and KPI frameworks. Recruited and managed a multilingual moderation team."],
  ["MAY 2015 — MAR 2020", "Two Lane Social + self-employed clients", "Social Media Manager / Freelance Consultant", "Ran social media for founders of SMEs, start-ups and financial services businesses, from content to advertising. Wrote an email launch sequence that brought in around £7,000 at a 42% open rate, and ran and moderated client webinars. Earlier freelance and volunteer work included NEF: The Innovation Institute and Thai Children's Trust."],
  ["JUL 2015 — MAY 2019", "Hartley-Stone Limited", "Account Manager, Social Media", "Planned and published B2B social content for technology and industrial clients including Vanderbilt, Siemens UK and Lucideon; produced client reports and presentations, and built long-term client relationships."],
];

const capabilities = [
  ["Social listening & audience insight", "Understand what people are saying, searching for and responding to."],
  ["Social and content strategy", "Turn business priorities into a focused, practical plan."],
  ["Accessible communications", "Make complex subjects clearer, more human and easier to act on."],
  ["Stakeholder leadership", "Connect senior voices, subject experts, agencies and delivery teams."],
  ["Analytics & optimisation", "Track meaningful signals, share the learning and improve the work."],
  ["Campaign delivery", "Coordinate content, publishing, paid activation and reporting."],
];

function CampaignArtwork({ project, style }: { project: "bigger" | "aria" | "skills" | "jpmam" | "novartis" | "abba"; style: string }) {
  const artworkLabel = project === "bigger"
    ? `${style} member-story campaign posts`
    : project === "aria"
      ? "ARIA social posts authored by Camilla about founding-team recruitment and Programme Director outreach"
    : project === "jpmam"
      ? "Social strategy framework for J.P. Morgan Asset Management across 12 EMEA markets"
      : project === "novartis"
        ? "Novartis UK social strategy built around patient voice, reputation and talent"
        : project === "abba"
          ? "ABBA Voyage pre-launch audience research and paid media recommendations"
        : project === "skills"
          ? "Buckinghamshire Skills Hub TikTok video ad"
          : `${style} campaign artwork placeholder`;

  return (
    <div className={`cdp-artwork cdp-artwork-${project}`} role={project === "bigger" || project === "aria" || project === "jpmam" || project === "novartis" || project === "abba" || project === "skills" ? "group" : "img"} aria-label={artworkLabel}>
      {project === "bigger" && (
        <div className="cdp-bigger-gallery" tabIndex={0} aria-label="Campaign post gallery. Scroll horizontally to view all nine examples.">
          {bbfCampaignPosts.map((post) => (
            <figure key={post.caption}>
              <img src={post.image} alt={post.alt} />
              <figcaption>{post.caption}</figcaption>
            </figure>
          ))}
          <span className="cdp-bigger-gallery-hint" aria-hidden="true">SCROLL FOR MORE <ArrowRight size={11} /></span>
        </div>
      )}
      {project === "jpmam" && (
        <>
          <span className="cdp-art-note">CONTENT EXAMPLES + SOCIAL LISTENING · 2020</span>
          <div className="cdp-bigger-gallery cdp-jpmam-gallery" tabIndex={0} aria-label="Selected J.P. Morgan Asset Management content examples and social listening snapshots. Scroll horizontally to explore and open an image at full size.">
            {jpmamSamples.map((sample) => (
              <figure key={sample.caption}>
                <a href={sample.image} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${sample.caption}`}>
                  <img src={sample.image} alt={sample.alt} />
                </a>
                <figcaption>{sample.caption}</figcaption>
              </figure>
            ))}
            <span className="cdp-bigger-gallery-hint" aria-hidden="true">SCROLL · CLICK TO ENLARGE <ArrowRight size={11} /></span>
          </div>
        </>
      )}
      {project === "abba" && (
        <>
          <span className="cdp-art-note">ANIARA → ABBA VOYAGE · MARKET RESEARCH + SOCIAL LAUNCH PLANNING · 2020–21</span>
          <div className="cdp-bigger-gallery cdp-abba-gallery" tabIndex={0} aria-label="ABBA Voyage social launch posts planned by Camilla, alongside selected Aniara and ABBA Voyage audience research and strategy examples. Scroll to explore and open images at full size.">
            {abbaSamples.map((sample) => (
              <figure key={sample.caption}>
                <a href={sample.image} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${sample.caption}`}>
                  <img src={sample.image} alt={sample.alt} />
                </a>
                <figcaption>{sample.caption}</figcaption>
              </figure>
            ))}
            <span className="cdp-bigger-gallery-hint" aria-hidden="true">SCROLL · CLICK TO ENLARGE <ArrowRight size={11} /></span>
          </div>
        </>
      )}
      {project === "aria" && (
        <>
          <span className="cdp-art-note">VIDEO EDITS + AUTHORED SOCIAL POSTS · ARIA SIMPLE BRANDING · 2023</span>
          <div className="cdp-bigger-gallery cdp-aria-gallery" tabIndex={0} aria-label="ARIA interview-video screenshots edited to the prescribed simple branding, alongside social posts authored by Camilla. Scroll to explore and open images at full size.">
            {ariaSamples.map((sample) => (
              <figure key={sample.caption}>
                <a href={sample.image} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${sample.caption}`}>
                  <img src={sample.image} alt={sample.alt} />
                </a>
                <figcaption>{sample.caption}</figcaption>
              </figure>
            ))}
            <span className="cdp-bigger-gallery-hint" aria-hidden="true">SCROLL · CLICK TO ENLARGE <ArrowRight size={11} /></span>
          </div>
        </>
      )}
      {project === "skills" && (
        <>
          <span className="cdp-art-note">TIKTOK VIDEO AD · 0:33</span>
          <video
            className="cdp-skills-video"
            controls
            playsInline
            preload="metadata"
            poster={bucksSkillsShowPoster}
            aria-label="Buckinghamshire Skills Hub TikTok ad conceived by Camilla Du Preez, who also helped film it"
          >
            <source src={bucksSkillsShowVideo} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </>
      )}
      {project === "novartis" && (
        <>
          <span className="cdp-art-note">NOVARTIS UK · STRATEGY, CAMPAIGNS + AUDIENCE INSIGHT · 2020</span>
          <div className="cdp-bigger-gallery cdp-novartis-gallery" tabIndex={0} aria-label="Selected Novartis strategy, campaign and audience insight samples. Scroll horizontally to explore and open an image at full size.">
            {novartisSamples.map((sample) => (
              <figure key={sample.caption}>
                <a href={sample.image} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${sample.caption}`}>
                  <img src={sample.image} alt={sample.alt} />
                </a>
                <figcaption>{sample.caption}</figcaption>
              </figure>
            ))}
            <span className="cdp-bigger-gallery-hint" aria-hidden="true">SCROLL · CLICK TO ENLARGE <ArrowRight size={11} /></span>
          </div>
        </>
      )}
    </div>
  );
}

function CaseStudy({
  project, title, category, brief, description, artwork, variant, metric, measure, note, secondaryMetric, secondaryMeasure, secondaryNote, roleDescription, videoUrl,
}: {
  project: "bigger" | "aria" | "hsbc" | "skills" | "jpmam" | "novartis" | "abba" | "listening" | "community";
  title: string;
  brief?: string;
  category: string;
  description: string;
  artwork?: string;
  variant?: "reverse";
  metric?: string;
  measure?: string;
  note?: string;
  secondaryMetric?: string;
  secondaryMeasure?: string;
  secondaryNote?: string;
  roleDescription?: string;
  videoUrl?: string;
}) {
  return (
    <article id={project} className={`cdp-case ${project === "hsbc" || project === "listening" || project === "community" ? "camilla-case-no-artwork" : ""} ${variant === "reverse" ? "cdp-case-reverse" : ""}`} data-testid={`case-study-${project}`}>
      {project !== "hsbc" && project !== "listening" && project !== "community" && <CampaignArtwork project={project} style={artwork ?? ""} />}
      <div className="cdp-case-copy">
        <div className="cdp-case-category">{category}</div>
        <h3>{title}</h3>
        {brief && (
          <div className="cdp-case-brief">
            <span>THE BRIEF</span>
            <p>{brief}</p>
          </div>
        )}
        <p>{description}</p>
        {roleDescription && (
          <div className="cdp-case-role">
            <span>MY CONTRIBUTION</span>
            <p>{roleDescription}</p>
          </div>
        )}
        {videoUrl && (
          <a className="cdp-case-video-link" href={videoUrl} target="_blank" rel="noreferrer">
            <span>Watch a campaign video I edited</span><ArrowUpRight size={14} />
          </a>
        )}
        {metric && measure && (
          <div className="cdp-case-stat" data-testid={`case-study-stat-${project}`}>
            <strong>{metric}</strong>
            <div><span>{measure}</span>{note && <small>{note}</small>}</div>
          </div>
        )}
        {secondaryMetric && secondaryMeasure && (
          <div className="cdp-case-stat-secondary" data-testid={`case-study-secondary-stat-${project}`}>
            <strong>{secondaryMetric}</strong>
            <div><span>{secondaryMeasure}</span>{secondaryNote && <small>{secondaryNote}</small>}</div>
          </div>
        )}
      </div>
    </article>
  );
}

function PaidMediaSection() {
  return (
    <section className="camilla-paid-media" id="paid-media" aria-labelledby="paid-media-title">
      <div className="camilla-shell">
        <div className="camilla-paid-heading">
          <div>
            <div className="camilla-kicker">Paid media · Buckinghamshire Business First</div>
            <h2 id="paid-media-title">Built to reach.<br /><em>Measured to move.</em></h2>
          </div>
          <p>Across BBF, I planned and optimised paid campaigns for events, membership, skills programmes and service launches—combining creative testing, audience planning and performance reporting.</p>
        </div>

        <div className="camilla-paid-spotlight">
          <div className="camilla-paid-visual">
            <div className="camilla-kicker">Buckinghamshire Skills Hub · Bucks Skills Show</div>
            <div className="camilla-paid-showcase-gallery">
              <figure>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={bucksSkillsShowPoster}
                  aria-label="TikTok ad for the Bucks Skills Show, conceived by Camilla Du Preez, who also helped film it"
                >
                  <source src={bucksSkillsShowVideo} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption>TikTok creative · Campaign also ran on YouTube</figcaption>
              </figure>
              <figure>
                <img
                  src={bucksSkillsHubRegistrationAdImage}
                  alt="Buckinghamshire Skills Hub sponsored registration ad for the Bucks Skills Show, inviting students, educators and employers to book a place."
                />
                <figcaption>Sponsored ad · 127 reactions · 12 comments · 28 shares</figcaption>
              </figure>
            </div>
          </div>

          <div className="camilla-paid-results">
            <div className="camilla-kicker">Paid activation · Campaign spotlight</div>
            <h3>From creative idea<br />to registrations.</h3>
            <p>I conceived the TikTok ad idea, helped film it and ran the paid ads. The campaign contributed to 20% of event registrations.</p>
            <div className="camilla-paid-primary-result">
              <strong>20%</strong>
              <div><span>Of event registrations</span><small>Campaign contribution</small></div>
            </div>
            <div className="camilla-paid-metrics" aria-label="Bucks Skills Show campaign metrics">
              <div><strong>~250k</strong><span>Impressions</span></div>
              <div><strong>5,000+</strong><span>Clicks</span></div>
              <div><strong>~£0.30</strong><span>Cost per click</span></div>
            </div>
          </div>
        </div>

        <div className="camilla-paid-cases">
          <div className="camilla-paid-cases-heading">
            <div className="camilla-kicker">More paid-media case studies · Buckinghamshire Business First</div>
            <h3>Better decisions.<br /><em>Stronger outcomes.</em></h3>
          </div>
          <div className="camilla-paid-case-grid">
            <article className="camilla-paid-case">
              <div className="camilla-paid-case-kicker">01 / Programme sign-ups</div>
              <h4>Fewer updates.<br />More action.</h4>
              <p><strong>The challenge</strong> Programme teams wanted frequent posts on the main channels; in 2022/23 the four accounts published around 2,300 posts. The data showed that volume was dragging performance.</p>
              <p><strong>What changed</strong> I worked with the team to focus on fewer, member-story-led posts, supported by a small targeted paid push.</p>
              <div className="camilla-paid-case-outcome"><strong>Sign-ups increased</strong><span>Engagement held</span></div>
            </article>

            <article className="camilla-paid-case">
              <div className="camilla-paid-case-kicker">02 / Membership acquisition</div>
              <h4>Acquisition with a path to payback.</h4>
              <p>Delivered around £19 per registration against a £25 target.</p>
              <div className="camilla-paid-case-metrics">
                <div><strong>~£19</strong><span>Cost per registration</span></div>
                <div><strong>£25</strong><span>Target</span></div>
              </div>
              <p className="camilla-paid-case-note">Membership was free to join, with annual paid tiers at £500 and £2,500. If around 3.8% of registrants upgraded to Partner (£500), the £19 would be covered in the first year.</p>
              <figure className="camilla-paid-case-image">
                <img
                  src={bbfNextGenBusinessAdImage}
                  alt="LinkedIn Ad Library screenshot of Buckinghamshire Business First's Next Gen Business Network sponsored image ad."
                />
                <figcaption>LinkedIn Ad Library creative · Next Gen Business Network · 8,742 estimated impressions · 99% UK · 7–23 October 2024</figcaption>
              </figure>
            </article>

          </div>

          <figure className="camilla-paid-ad-feature">
            <div className="camilla-paid-ad-gallery">
              <img
                src={bbfNameSwitchAdImage}
                alt="Sponsored Buckinghamshire Business First Facebook video ad featuring Cécile Mazuet-Eller of NameSwitch, with a Learn More call to action."
              />
              <img
                src={bbfNameSwitchAdLibraryImage}
                alt="Meta Ad Library listing for the Buckinghamshire Business First NameSwitch sponsored video, active since 14 January 2024 across Facebook, Instagram, Messenger and Threads."
              />
            </div>
            <figcaption className="camilla-paid-ad-copy">
              <div className="camilla-paid-case-kicker">Sponsored member story · NameSwitch</div>
              <h4>A member story with a clear next step.</h4>
              <p>Facebook video ad featuring Cécile Mazuet-Eller sharing how Buckinghamshire businesses are growing with the right support.</p>
              <p className="camilla-paid-ad-flight">Meta Ad Library listing: active from 14 January 2024 across Facebook, Instagram, Messenger and Threads.</p>
              <div className="camilla-paid-ad-metrics" aria-label="Engagement totals shown in the sponsored-ad screenshot">
                <div><strong>6.4K</strong><span>Video views</span></div>
                <div><strong>124</strong><span>Reactions</span></div>
                <div><strong>12</strong><span>Comments</span></div>
                <div><strong>18</strong><span>Shares</span></div>
              </div>
              <small>On-post totals shown in the ad screenshot.</small>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const activeTestimonial = testimonials[activeTestimonialIndex];
  const showPreviousTestimonial = () => {
    setActiveTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  const showNextTestimonial = () => {
    setActiveTestimonialIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <main className="camilla">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        .camilla {
          --blue:#536a50; --blue-deep:#3b4d3a; --navy:#292e2a; --yellow:#d4a464;
          --cloud:#f3efe6; --white:#fbf9f3; --body:#454c46; --line:#d8d1c4;
          color:var(--navy); background:var(--cloud); font-family:'DM Sans',sans-serif;
          min-height:100vh; overflow:hidden; -webkit-font-smoothing:antialiased;
        }
        .camilla * { box-sizing:border-box; }
        .camilla a { color:inherit; }
        .camilla-shell { width:min(1280px,calc(100% - 96px)); margin:0 auto; }
        .camilla-kicker { font:500 12px/1.45 'DM Mono',monospace; letter-spacing:.1em; text-transform:uppercase; }
        .camilla-header { height:75px; display:flex; justify-content:space-between; align-items:center; }
        .camilla-brand { text-decoration:none; display:flex; align-items:center; gap:10px; font:600 13px 'Lora',serif; letter-spacing:-.03em; }
        .camilla-monogram { width:30px; height:30px; border-radius:8px; background:var(--yellow); color:var(--navy); display:grid; place-items:center; font:700 12px 'Lora',serif; transform:rotate(-6deg); }
        .camilla-nav { display:flex; align-items:center; gap:29px; }
        .camilla-nav a { text-decoration:none; font-size:13px; font-weight:600; transition:opacity .2s ease; }
        .camilla-nav a:hover { opacity:.65; }
        .camilla-nav .camilla-nav-contact { background:var(--navy); color:var(--white); padding:11px 15px; display:flex; align-items:center; gap:12px; border-radius:3px; }
        .camilla-hero { background:var(--blue-deep); color:var(--white); position:relative; overflow:hidden; }
        .camilla-hero::before { content:""; width:680px; height:680px; border:1px solid rgba(255,255,255,.18); border-radius:50%; position:absolute; right:-145px; top:-285px; }
        .camilla-hero::after { content:""; width:470px; height:470px; border:1px solid rgba(255,255,255,.15); border-radius:50%; position:absolute; right:-40px; top:-180px; }
        .camilla-hero-inner { position:relative; z-index:1; padding:57px 0 0; }
        .camilla-hero-meta { display:flex; justify-content:space-between; align-items:center; gap:20px; color:#e3e8df; }
        .camilla-availability { display:flex; gap:9px; align-items:center; }
        .camilla-availability i { display:inline-block; width:7px; height:7px; border-radius:50%; background:var(--yellow); }
        .camilla-hero h1 { font:600 clamp(63px,10.3vw,139px)/.89 'Lora',serif; letter-spacing:-.085em; max-width:1080px; margin:47px 0 25px; }
        .camilla-hero h1 span { color:var(--yellow); }
        .camilla-hero-foot { display:flex; align-items:end; justify-content:space-between; gap:30px; padding-bottom:37px; }
        .camilla-hero-foot p { max-width:490px; color:#e4e8e1; font-size:15px; line-height:1.7; margin:0; }
        .camilla-hero-foot a { flex:none; color:var(--navy); background:var(--yellow); display:flex; gap:13px; align-items:center; padding:14px 17px; text-decoration:none; border-radius:3px; font-size:13px; font-weight:700; }
        .camilla-hero-art { height:clamp(340px,42vw,550px); display:grid; grid-template-columns:1.15fr .85fr; gap:9px; padding:9px; background:#303e32; position:relative; overflow:hidden; }
        .camilla-hero-photo { min-width:0; position:relative; overflow:hidden; background:#a9b4a2; }
        .camilla-hero-photo img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 44%; }
        .camilla-hero-photo::after { content:""; position:absolute; inset:45% 0 0; background:linear-gradient(180deg,transparent,rgba(25,39,31,.58)); pointer-events:none; }
        .camilla-photo-caption { position:absolute; z-index:1; left:18px; right:18px; bottom:17px; display:flex; justify-content:space-between; gap:12px; color:var(--white); font:500 12px 'DM Mono',monospace; letter-spacing:.1em; text-transform:uppercase; }
        .camilla-hero-message { min-width:0; position:relative; display:flex; flex-direction:column; justify-content:space-between; gap:15px; padding:clamp(20px,4vw,42px); background:var(--yellow); color:var(--navy); }
        .camilla-testimonial-head { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .camilla-testimonial-count { color:#555b50; }
        .camilla-testimonial-controls { display:flex; gap:6px; }
        .camilla-testimonial-controls button { display:grid; place-items:center; width:32px; height:32px; padding:0; border:1px solid rgba(41,46,42,.35); border-radius:50%; background:transparent; color:var(--navy); cursor:pointer; transition:background .2s ease,color .2s ease; }
        .camilla-testimonial-controls button:hover { background:var(--navy); color:var(--white); }
        .camilla-testimonial-controls button:focus-visible, .camilla-testimonial-dots button:focus-visible, .camilla-contact-project a:focus-visible { outline:2px solid var(--navy); outline-offset:3px; }
        .camilla-testimonial-slide { min-height:0; flex:1; display:flex; flex-direction:column; justify-content:center; gap:16px; margin:0; }
        .camilla-testimonial-slide blockquote { margin:0; }
        .camilla-testimonial-slide blockquote p { margin:0; font:500 clamp(15px,1.35vw,18px)/1.42 'Lora',serif; letter-spacing:-.025em; }
        .camilla-testimonial-slide figcaption { display:grid; gap:5px; }
        .camilla-testimonial-slide figcaption strong { font:700 12px/1.3 'DM Sans',sans-serif; }
        .camilla-testimonial-slide figcaption span { color:#555b50; font:500 12px/1.55 'DM Mono',monospace; letter-spacing:.04em; }
        .camilla-testimonial-dots { display:flex; align-items:center; gap:4px; }
        .camilla-testimonial-dots button { display:grid; place-items:center; width:22px; height:22px; border:0; padding:0; background:transparent; cursor:pointer; }
        .camilla-testimonial-dots button span { display:block; width:6px; height:6px; border-radius:50%; background:rgba(41,46,42,.38); transition:width .2s ease,background .2s ease; }
        .camilla-testimonial-dots button[aria-pressed="true"] span { width:16px; border-radius:99px; background:var(--blue-deep); }
        .camilla-marquee { background:var(--yellow); overflow:hidden; }
        .camilla-marquee-track { display:flex; width:max-content; align-items:center; gap:25px; padding:14px 0; animation:camilla-marquee 55s linear infinite; }
        .camilla-marquee span { font:600 13px 'Lora',serif; letter-spacing:.08em; text-transform:uppercase; }
        .camilla-marquee i { font-style:normal; font-size:16px; }
        @keyframes camilla-marquee { to { transform:translateX(-50%); } }
        .camilla-intro { padding:105px 0 91px; display:grid; grid-template-columns:.55fr 1.45fr; gap:8%; }
        .camilla-intro-label { color:var(--blue); }
        .camilla-intro h2 { font:500 clamp(34px,5.1vw,64px)/1.09 'Lora',serif; letter-spacing:-.065em; margin:0; max-width:900px; }
        .camilla-intro h2 em { color:var(--blue); font-style:normal; }
        .camilla-intro-foot { grid-column:2; display:flex; align-items:end; justify-content:space-between; gap:35px; margin-top:4px; }
        .camilla-intro-foot p { color:var(--body); font-size:13px; line-height:1.8; max-width:570px; margin:0; }
        .camilla-text-link { display:inline-flex; align-items:center; gap:9px; text-decoration:none; border-bottom:1px solid var(--blue); padding-bottom:7px; font-size:13px; font-weight:700; white-space:nowrap; }
        .camilla-work { background:var(--white); padding:94px 0 100px; }
        .camilla-work-heading { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:47px; }
        .camilla-work-heading .camilla-kicker { color:var(--blue); }
        .camilla-work-heading h2 { font:500 clamp(44px,6vw,78px)/.94 'Lora',serif; letter-spacing:-.075em; margin:12px 0 0; }
        .camilla-work-heading p { color:var(--body); max-width:320px; font-size:14px; line-height:1.7; margin:0; }
        .camilla-case { display:grid; grid-template-columns:1.14fr .86fr; margin:0 0 24px; min-height:470px; background:var(--cloud); }
        .camilla-case-reverse { grid-template-columns:.86fr 1.14fr; }
        .camilla-case-no-artwork { grid-template-columns:1fr; min-height:auto; }
        .camilla-case-no-artwork .cdp-case-copy > p { max-width:680px; }
        .camilla-case-reverse .cdp-artwork { order:2; }
        .camilla-case-reverse .cdp-case-copy { order:1; }
        .cdp-artwork { position:relative; min-height:470px; overflow:hidden; display:grid; place-items:center; isolation:isolate; }
        .cdp-artwork::before { content:""; position:absolute; inset:0; z-index:-1; opacity:.18; background-image:linear-gradient(rgba(41,46,42,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(41,46,42,.4) 1px,transparent 1px); background-size:35px 35px; mask-image:linear-gradient(to bottom,black,transparent); }
        .cdp-art-note { position:absolute; top:17px; left:19px; z-index:4; font:500 12px 'DM Mono',monospace; letter-spacing:.1em; }
        .cdp-artwork-bigger { min-height:470px; background:#e0e3d4; }
        .cdp-bigger-gallery { position:relative; height:100%; min-height:470px; width:100%; display:flex; justify-content:flex-start; align-items:center; gap:14px; padding:22px; overflow-x:auto; overflow-y:hidden; scroll-snap-type:x mandatory; scrollbar-width:thin; scrollbar-color:rgba(41,46,42,.42) transparent; }
        .cdp-bigger-gallery:focus-visible { outline:2px solid var(--blue); outline-offset:-5px; }
        .cdp-bigger-gallery figure { flex:0 0 205px; height:100%; min-width:0; margin:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; scroll-snap-align:start; }
        .cdp-bigger-gallery img { display:block; height:calc(100% - 22px); max-height:420px; width:100%; object-fit:contain; background:#fbf9f3; box-shadow:0 12px 28px rgba(41,46,42,.16); }
        .cdp-bigger-gallery figcaption { color:var(--navy); font:500 12px 'DM Mono',monospace; letter-spacing:.08em; text-transform:uppercase; text-align:center; }
        .cdp-bigger-gallery-hint { position:absolute; z-index:2; top:10px; right:10px; display:flex; align-items:center; gap:5px; padding:6px 8px; color:var(--navy); background:rgba(251,249,243,.94); font:500 12px 'DM Mono',monospace; letter-spacing:.08em; pointer-events:none; }
        .cdp-jpmam-gallery { padding-top:42px; }
        .cdp-jpmam-gallery figure { flex-basis:270px; }
        .cdp-jpmam-gallery img { max-height:400px; }
        .cdp-novartis-gallery { padding-top:42px; }
        .cdp-novartis-gallery figure { flex-basis:345px; }
        .cdp-novartis-gallery a { display:block; width:100%; cursor:zoom-in; }
        .cdp-novartis-gallery a:focus-visible { outline:2px solid var(--blue); outline-offset:4px; }
        .cdp-novartis-gallery img { height:auto; max-height:300px; width:100%; aspect-ratio:16 / 9; object-fit:contain; }
        .cdp-artwork-aria { background:#aabdc0; }
        .cdp-aria-sphere { width:255px; height:255px; background:var(--navy); color:var(--white); display:flex; flex-direction:column; justify-content:center; align-items:center; border-radius:50%; text-align:center; position:relative; z-index:2; }
        .cdp-aria-sphere span { font:600 75px/.9 'Lora',serif; letter-spacing:-.1em; color:var(--yellow); }
        .cdp-aria-sphere small { font:12px/1.5 'DM Mono',monospace; letter-spacing:.08em; margin-top:13px; }
        .cdp-aria-ring { position:absolute; width:360px; height:130px; border:2px solid var(--blue); border-radius:50%; transform:rotate(-40deg); }
        .cdp-ring-b { width:370px; height:190px; transform:rotate(50deg); border-color:var(--yellow); }
        .cdp-aria-caption { position:absolute; bottom:50px; left:23px; color:var(--navy); font:600 16px/1.1 'Lora',serif; letter-spacing:-.04em; }
        .cdp-artwork-skills { background:#17231d; }
        .cdp-skills-video { display:block; width:auto; max-width:calc(100% - 36px); max-height:430px; aspect-ratio:9 / 16; object-fit:contain; background:#111; box-shadow:0 16px 40px rgba(0,0,0,.32); }
        .cdp-skills-shape { position:absolute; border-radius:50%; border:1px solid var(--navy); }
        .cdp-skills-one { width:280px; height:280px; left:-85px; top:-105px; }
        .cdp-skills-two { width:410px; height:410px; right:-142px; bottom:-175px; border-width:28px; opacity:.28; }
        .cdp-skills-copy { position:relative; z-index:2; transform:rotate(-5deg); }
        .cdp-skills-copy small { font:500 12px 'DM Mono',monospace; letter-spacing:.16em; }
        .cdp-skills-copy strong { display:block; font:700 clamp(63px,8vw,106px)/.76 'Lora',serif; letter-spacing:-.1em; margin:12px 0; }
        .cdp-skills-copy i { font:500 12px 'DM Mono',monospace; letter-spacing:.14em; font-style:normal; }
        .cdp-skills-social { position:absolute; right:17px; top:50%; display:grid; gap:8px; font:500 12px 'DM Mono',monospace; writing-mode:vertical-rl; }
        .cdp-artwork-jpmam { background:#dcd8ca; }
        .cdp-artwork-novartis { background:#e6eef2; }
        .cdp-artwork-abba { background:#080808; color:#fff; }
        .cdp-strategy-art { width:100%; height:100%; min-height:470px; display:flex; flex-direction:column; justify-content:space-between; padding:30px; position:relative; overflow:hidden; }
        .cdp-strategy-art::after { content:""; position:absolute; width:320px; height:320px; border:1px solid rgba(41,46,42,.24); border-radius:50%; right:-138px; bottom:-160px; pointer-events:none; }
        .cdp-novartis-art { background:#e6e1d3; }
        .cdp-strategy-head { display:flex; justify-content:space-between; gap:16px; color:#495249; font:500 12px 'DM Mono',monospace; letter-spacing:.1em; text-transform:uppercase; }
        .cdp-strategy-tags { display:flex; flex-wrap:wrap; gap:7px; position:relative; z-index:1; }
        .cdp-strategy-tags span { border:1px solid rgba(41,46,42,.27); border-radius:99px; padding:8px 10px; color:#4c554d; font:500 12px 'DM Mono',monospace; letter-spacing:.03em; }
        .cdp-novartis-thesis { max-width:470px; color:var(--blue-deep); font:500 clamp(31px,4.2vw,53px)/1.03 'Lora',serif; letter-spacing:-.065em; margin:0; position:relative; z-index:1; }
        .cdp-novartis-pillars { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; position:relative; z-index:1; }
        .cdp-novartis-pillars div { min-height:107px; display:flex; flex-direction:column; justify-content:space-between; padding:12px; background:rgba(251,249,243,.73); border:1px solid rgba(41,46,42,.13); }
        .cdp-novartis-pillars small { color:var(--blue); font:500 12px 'DM Mono',monospace; }
        .cdp-novartis-pillars strong { color:var(--navy); font:500 16px/1.05 'Lora',serif; }
        .cdp-abba-art { background:#e7dece; }
        .cdp-artwork-abba .cdp-art-note { color:#f4f0e7; }
        .cdp-abba-gallery { padding-top:44px; }
        .cdp-abba-gallery figure { flex-basis:410px; }
        .cdp-abba-gallery a { display:block; width:100%; cursor:zoom-in; }
        .cdp-abba-gallery a:focus-visible { outline:2px solid #b59643; outline-offset:4px; }
        .cdp-abba-gallery img { max-height:390px; }
        .cdp-abba-gallery figcaption { color:#f4f0e7; }
        .cdp-case-copy { padding:clamp(30px,5vw,68px); display:flex; flex-direction:column; justify-content:center; }
        .cdp-case-category { color:var(--blue); font:500 12px 'DM Mono',monospace; letter-spacing:.11em; text-transform:uppercase; }
        .cdp-case-copy h3 { font:500 clamp(32px,4vw,51px)/.99 'Lora',serif; letter-spacing:-.065em; margin:18px 0 16px; }
        .cdp-case-copy > p { color:var(--body); font-size:14px; line-height:1.75; max-width:455px; margin:0; }
        .camilla-results { background:var(--cloud); padding:22px 26px 26px; margin:0 0 24px; }
        .camilla-results > .camilla-kicker { color:var(--blue); }
        .camilla-results-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:18px 26px; margin-top:16px; }
        .camilla-results-grid > div { display:grid; align-content:start; gap:5px; border-top:1px solid var(--line); padding-top:13px; }
        .camilla-results-grid strong { color:var(--blue); font:600 clamp(32px,3.6vw,46px)/.95 'Lora',serif; letter-spacing:-.07em; }
        .camilla-results-grid span { color:var(--navy); font-size:14px; font-weight:600; }
        .camilla-results-grid small { color:#626b63; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.03em; }
        .camilla-reporting { margin-top:24px; border-top:1px solid var(--line); padding-top:16px; }
        .camilla-reporting > .camilla-kicker { color:var(--blue); }
        .camilla-reporting-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; margin-top:12px; }
        .camilla-reporting-grid figure { margin:0; }
        .camilla-reporting-grid a { display:block; cursor:zoom-in; }
        .camilla-reporting-grid img { display:block; width:100%; height:auto; background:#fbf9f3; box-shadow:0 10px 24px rgba(41,46,42,.12); }
        .camilla-reporting-grid figcaption { margin-top:8px; color:#596158; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.03em; }
        .camilla-open-roles { margin:16px 0 4px; color:var(--body); font-size:14px; line-height:1.6; }
        .camilla-education-tools span { line-height:1.7; }
        .cdp-case { scroll-margin-top:24px; }
        .cdp-case-brief { margin:0 0 14px; padding-left:12px; border-left:2px solid var(--yellow); }
        .cdp-case-brief > span { display:block; color:var(--blue); font:500 12px 'DM Mono',monospace; letter-spacing:.1em; margin-bottom:4px; }
        .cdp-case-brief p { margin:0; color:var(--navy); font-size:14px; line-height:1.6; max-width:455px; }
        .cdp-case-stat { display:grid; grid-template-columns:auto 1fr; align-items:end; gap:16px; border-top:1px solid var(--line); margin-top:28px; padding-top:15px; }
        .cdp-case-stat > strong { color:var(--blue); font:600 clamp(41px,5vw,61px)/.93 'Lora',serif; letter-spacing:-.08em; white-space:nowrap; }
        .cdp-case-stat > div { padding-bottom:3px; }
        .cdp-case-stat span { display:block; font:500 12px/1.55 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .cdp-case-stat small { display:block; color:#626b63; margin-top:5px; font-size:13px; line-height:1.4; }
        .cdp-case-role { margin-top:13px; color:var(--body); font-size:13px; line-height:1.65; }
        .cdp-case-role > span { display:block; color:var(--blue); font:500 12px 'DM Mono',monospace; letter-spacing:.1em; margin-bottom:4px; }
        .cdp-case-role p { margin:0; }
        .cdp-case-video-link { width:max-content; max-width:100%; display:inline-flex; align-items:center; gap:7px; margin-top:13px; padding-bottom:4px; border-bottom:1px solid var(--blue); color:var(--blue) !important; font-size:13px; font-weight:700; text-decoration:none; }
        .cdp-case-video-link:hover { opacity:.72; }
        .cdp-case-stat-secondary { display:grid; grid-template-columns:auto 1fr; align-items:end; gap:12px; border-top:1px solid var(--line); margin-top:16px; padding-top:13px; }
        .cdp-case-stat-secondary > strong { color:var(--blue); font:600 clamp(29px,3.8vw,42px)/.95 'Lora',serif; letter-spacing:-.07em; white-space:nowrap; }
        .cdp-case-stat-secondary > div { padding-bottom:2px; }
        .cdp-case-stat-secondary span { display:block; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .cdp-case-stat-secondary small { display:block; color:#626b63; margin-top:3px; font-size:13px; line-height:1.4; }
        .cdp-work-small { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .cdp-work-small > .cdp-case { grid-column:1 / -1; grid-template-columns:1.14fr .86fr; margin:0; }
        .camilla-paid-media { padding:92px 0 100px; background:var(--navy); color:var(--white); }
        .camilla-paid-heading { display:grid; grid-template-columns:1.1fr .9fr; gap:8%; align-items:end; margin-bottom:43px; }
        .camilla-paid-heading .camilla-kicker { color:var(--yellow); }
        .camilla-paid-heading h2 { margin:13px 0 0; font:500 clamp(43px,6vw,76px)/.94 'Lora',serif; letter-spacing:-.07em; }
        .camilla-paid-heading h2 em { color:var(--yellow); font-style:normal; }
        .camilla-paid-heading > p { max-width:460px; margin:0 0 3px; color:#d0d6cd; font-size:14px; line-height:1.8; }
        .camilla-paid-spotlight { display:grid; grid-template-columns:.85fr 1.15fr; background:var(--cloud); color:var(--navy); }
        .camilla-paid-visual { min-height:500px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:16px; padding:42px 26px 22px; background:#18231d; }
        .camilla-paid-visual > .camilla-kicker { align-self:flex-start; color:#f2eadb; }
        .camilla-paid-showcase-gallery { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:12px; width:100%; }
        .camilla-paid-showcase-gallery figure { display:grid; align-content:center; gap:12px; min-width:0; margin:0; }
        .camilla-paid-showcase-gallery video { display:block; width:100%; max-width:100%; max-height:420px; aspect-ratio:9 / 16; object-fit:contain; background:#111; }
        .camilla-paid-showcase-gallery img { display:block; width:100%; max-height:420px; aspect-ratio:1; object-fit:contain; background:var(--cloud); }
        .camilla-paid-showcase-gallery figcaption { color:#f2eadb; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.04em; text-transform:uppercase; }
        .camilla-paid-video-caption { align-self:flex-start; color:#d0d6cd; font:500 12px/1.4 'DM Mono',monospace; letter-spacing:.06em; text-transform:uppercase; }
        .camilla-paid-results { padding:clamp(28px,4vw,54px); }
        .camilla-paid-results > .camilla-kicker { color:var(--blue); }
        .camilla-paid-results h3 { margin:16px 0 14px; font:500 clamp(33px,4vw,50px)/1 'Lora',serif; letter-spacing:-.065em; }
        .camilla-paid-results > p { max-width:470px; margin:0; color:var(--body); font-size:13px; line-height:1.75; }
        .camilla-paid-primary-result { display:grid; grid-template-columns:auto 1fr; align-items:center; gap:15px; margin-top:24px; padding:16px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .camilla-paid-primary-result > strong { color:var(--blue); font:600 clamp(43px,5vw,60px)/.9 'Lora',serif; letter-spacing:-.08em; }
        .camilla-paid-primary-result span { display:block; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.04em; text-transform:uppercase; }
        .camilla-paid-primary-result small { display:block; margin-top:4px; color:#626b63; font-size:13px; }
        .camilla-paid-metrics { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:15px 22px; padding-top:18px; }
        .camilla-paid-metrics > div { display:grid; gap:4px; }
        .camilla-paid-metrics strong { color:var(--navy); font:500 clamp(21px,2.7vw,31px)/1 'Lora',serif; letter-spacing:-.05em; }
        .camilla-paid-metrics span { color:#596158; font:500 12px/1.55 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .camilla-paid-metrics span small { display:block; margin-top:2px; color:#737a71; font:400 13px/1.4 'DM Sans',sans-serif; letter-spacing:0; text-transform:none; }
        .camilla-paid-cases { margin-top:59px; }
        .camilla-paid-cases-heading { margin-bottom:22px; }
        .camilla-paid-cases-heading .camilla-kicker { color:var(--yellow); }
        .camilla-paid-cases-heading h3 { margin:12px 0 0; font:500 clamp(32px,4.3vw,51px)/1 'Lora',serif; letter-spacing:-.06em; }
        .camilla-paid-cases-heading h3 em { color:var(--yellow); font-style:normal; }
        .camilla-paid-case-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:13px; }
        .camilla-paid-case { min-width:0; padding:clamp(23px,3vw,35px); background:var(--cloud); color:var(--navy); }
        .camilla-paid-case-kicker { color:var(--blue); font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.08em; text-transform:uppercase; }
        .camilla-paid-case h4 { margin:14px 0 15px; font:500 clamp(25px,3vw,36px)/1.04 'Lora',serif; letter-spacing:-.055em; }
        .camilla-paid-case p { max-width:520px; margin:0 0 12px; color:var(--body); font-size:14px; line-height:1.7; }
        .camilla-paid-case p strong { display:block; margin-bottom:3px; color:var(--blue); font:500 12px 'DM Mono',monospace; letter-spacing:.07em; text-transform:uppercase; }
        .camilla-paid-case-outcome { display:flex; flex-wrap:wrap; align-items:baseline; gap:8px 16px; margin-top:18px; padding-top:14px; border-top:1px solid var(--line); }
        .camilla-paid-case-outcome strong { color:var(--blue); font:500 20px/1.2 'Lora',serif; }
        .camilla-paid-case-outcome span { color:#626b63; font-size:13px; }
        .camilla-paid-case-metrics { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:15px; margin:20px 0 14px; padding:15px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .camilla-paid-case-metrics > div { display:grid; gap:4px; }
        .camilla-paid-case-metrics strong, .camilla-paid-case-wide-metrics strong { color:var(--blue); font:500 clamp(24px,3vw,34px)/1 'Lora',serif; letter-spacing:-.05em; }
        .camilla-paid-case-metrics span, .camilla-paid-case-wide-metrics span { color:#596158; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .camilla-paid-case p.camilla-paid-case-note { margin:0; color:#626b63; font-size:13px; }
        .camilla-paid-case-image { margin:19px 0 0; padding-top:14px; border-top:1px solid var(--line); }
        .camilla-paid-case-image img { display:block; width:100%; height:auto; }
        .camilla-paid-case-image figcaption { margin-top:8px; color:#596158; font:500 12px/1.55 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .camilla-paid-case-wide { grid-column:1 / -1; display:grid; grid-template-columns:.78fr 1.22fr; align-items:center; gap:6%; background:#e6e5d9; }
        .camilla-paid-case-wide h4 { margin-bottom:10px; }
        .camilla-paid-case-wide-copy p { margin-bottom:0; }
        .camilla-paid-case-wide-metrics { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px 25px; }
        .camilla-paid-case-wide-metrics > div { display:grid; gap:5px; padding-top:10px; border-top:1px solid #c4c8b9; }
        .camilla-paid-case-wide-metrics small { color:#626b63; font-size:13px; line-height:1.5; }
        .camilla-paid-case-wide p { font-size:13px; }
        .camilla-paid-ad-feature { display:grid; grid-template-columns:minmax(250px,.78fr) 1.22fr; margin:14px 0 0; background:var(--cloud); color:var(--navy); }
        .camilla-paid-ad-gallery { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:center; gap:10px; padding:clamp(20px,3vw,36px); background:#e8e6dd; }
        .camilla-paid-ad-gallery img { display:block; width:100%; max-height:560px; object-fit:contain; }
        .camilla-paid-ad-copy { align-self:center; padding:clamp(26px,4vw,54px); }
        .camilla-paid-ad-copy h4 { margin:14px 0 12px; font:500 clamp(27px,3.3vw,39px)/1.04 'Lora',serif; letter-spacing:-.055em; }
        .camilla-paid-ad-copy > p { max-width:470px; margin:0; color:var(--body); font-size:14px; line-height:1.7; }
        .camilla-paid-ad-copy > p.camilla-paid-ad-flight { margin-top:10px; color:#596158; }
        .camilla-paid-ad-metrics { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; margin-top:23px; padding-top:15px; border-top:1px solid var(--line); }
        .camilla-paid-ad-metrics > div { display:grid; gap:5px; }
        .camilla-paid-ad-metrics strong { color:var(--blue); font:500 clamp(22px,2.8vw,32px)/1 'Lora',serif; letter-spacing:-.05em; }
        .camilla-paid-ad-metrics span { color:#596158; font:500 12px/1.5 'DM Mono',monospace; letter-spacing:.035em; text-transform:uppercase; }
        .camilla-paid-ad-copy > small { display:block; margin-top:12px; color:#737a71; font-size:13px; line-height:1.5; }
        .camilla-about { background:var(--navy); color:var(--white); padding:91px 0 95px; }
        .camilla-about-top { display:grid; grid-template-columns:.8fr 1.2fr; gap:8%; align-items:end; margin-bottom:48px; }
        .camilla-about-top .camilla-kicker { color:var(--yellow); }
        .camilla-about-top h2 { font:500 clamp(42px,6vw,76px)/.94 'Lora',serif; letter-spacing:-.07em; margin:13px 0 0; }
        .camilla-about-top p { color:#d0d6cd; max-width:460px; font-size:14px; line-height:1.75; margin:0 0 4px; }
        .camilla-cv { border-top:1px solid #58635a; }
        .camilla-role { display:grid; grid-template-columns:165px .82fr 1.18fr; gap:26px; align-items:start; padding:21px 0; border-bottom:1px solid #58635a; }
        .camilla-role-date { color:#c0c8bc; padding-top:5px; }
        .camilla-role h3 { font:500 19px 'Lora',serif; letter-spacing:-.035em; margin:0 0 5px; }
        .camilla-role-title { color:var(--yellow); font-size:13px; line-height:1.5; }
        .camilla-role p { color:#d0d6cd; font-size:13px; line-height:1.7; margin:0; max-width:550px; }
        .camilla-practice { padding:93px 0 0; }
        .camilla-practice-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:9%; }
        .camilla-practice .camilla-kicker { color:var(--blue); }
        .camilla-practice h2 { font:500 clamp(42px,6vw,71px)/.94 'Lora',serif; letter-spacing:-.07em; margin:14px 0 20px; }
        .camilla-practice-intro { color:var(--body); font-size:14px; line-height:1.75; max-width:390px; }
        .camilla-capabilities { border-top:1px solid var(--line); }
        .camilla-capability { border-bottom:1px solid var(--line); padding:17px 0; display:grid; grid-template-columns:1fr auto; gap:16px; align-items:start; }
        .camilla-capability h3 { font:600 14px 'Lora',serif; margin:0; }
        .camilla-capability p { color:#626b63; font-size:13px; line-height:1.55; margin:5px 0 0; }
        .camilla-capability span { color:var(--blue); font:500 12px 'DM Mono',monospace; }
        .camilla-education-section { padding:73px 0 89px; }
        .camilla-education-section h2 { font:500 25px 'Lora',serif; letter-spacing:-.04em; margin:0; border-bottom:1px solid var(--line); padding-bottom:17px; }
        .camilla-education { display:grid; grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr); gap:24px 42px; margin-top:0; padding-top:19px; color:var(--body); font-size:13px; line-height:1.55; }
        .camilla-education h3 { display:block; color:var(--blue); font:500 12px 'DM Mono',monospace; letter-spacing:.1em; margin:0 0 9px; }
        .camilla-education-list, .camilla-certification-list { list-style:none; margin:0; padding:0; }
        .camilla-education-list li + li { margin-top:11px; }
        .camilla-education-list strong, .camilla-education-list span { display:block; }
        .camilla-education-list span { color:#626b63; font-size:13px; }
        .camilla-certification-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:7px 18px; }
        .camilla-education-languages { grid-column:1 / -1; display:flex; align-items:baseline; gap:20px; border-top:1px solid var(--line); padding-top:12px; }
        .camilla-education-languages h3 { margin:0; }
        .camilla-contact { background:var(--yellow); color:var(--navy); padding:68px 0 24px; position:relative; overflow:hidden; }
        .camilla-contact::after { content:"CDP"; position:absolute; right:-12px; top:-108px; font:700 clamp(180px,29vw,380px)/1 'Lora',serif; letter-spacing:-.12em; opacity:.08; pointer-events:none; }
        .camilla-contact-grid { display:grid; grid-template-columns:1.15fr .85fr; gap:8%; align-items:end; position:relative; z-index:1; }
        .camilla-contact .camilla-kicker { color:#4c554d; }
        .camilla-contact h2 { font:500 clamp(62px,9vw,118px)/.84 'Lora',serif; letter-spacing:-.09em; margin:18px 0 23px; }
        .camilla-contact-links { display:grid; }
        .camilla-contact-links a { display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 0; border-bottom:1px solid rgba(41,46,42,.34); text-decoration:none; font:600 13px 'Lora',serif; }
        .camilla-contact-links a:hover { padding-left:6px; }
        .camilla-contact-project { margin-top:23px; padding-top:17px; border-top:1px solid rgba(41,46,42,.34); }
        .camilla-contact-project p { max-width:410px; margin:7px 0 0; color:var(--body); font-size:14px; line-height:1.7; }
        .camilla-contact-project a { margin-top:4px; }
        .camilla-footer { border-top:1px solid rgba(41,46,42,.3); margin-top:80px; padding-top:16px; display:flex; justify-content:space-between; gap:20px; position:relative; z-index:1; color:#4c554d; }
        .camilla-footer a { text-decoration:none; }
        .camilla-reveal { animation:camilla-enter .75s both; }
        .camilla-reveal-delay { animation:camilla-enter .8s .14s both; }
        @keyframes camilla-enter { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @media (prefers-reduced-motion:reduce) { .camilla *, .camilla *::before, .camilla *::after { animation-duration:.01ms!important; animation-iteration-count:1!important; scroll-behavior:auto!important; transition-duration:.01ms!important; } }
        @media (max-width:800px) {
          .camilla-shell { width:min(100% - 40px,620px); }
          .camilla-header { height:64px; }
          .camilla-nav { gap:13px; }
          .camilla-nav a { font-size:12px; }
          .camilla-nav a:nth-child(3), .camilla-nav a:nth-child(4) { display:none; }
          .camilla-hero-inner { padding-top:36px; }
          .camilla-hero h1 { font-size:clamp(62px,12vw,100px); margin:40px 0 20px; }
          .camilla-hero-foot { align-items:start; flex-direction:column; }
          .camilla-hero-art { height:auto; grid-template-columns:1fr; }
          .camilla-hero-photo { height:330px; }
          .camilla-hero-message { padding:22px; }
          .camilla-hero-message { min-height:410px; }
          .camilla-testimonial-slide blockquote p { font-size:17px; }
          .camilla-intro { grid-template-columns:1fr; gap:22px; padding:75px 0; }
          .camilla-intro-foot { grid-column:1; display:block; }
          .camilla-intro-foot p { margin-bottom:20px; }
          .camilla-work, .camilla-about { padding:72px 0; }
          .camilla-work-heading { display:block; margin-bottom:32px; }
          .camilla-work-heading p { margin-top:16px; }
          .camilla-results { padding:20px 18px 22px; }
          .camilla-results-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .camilla-reporting-grid { grid-template-columns:1fr; }
          .camilla-education-tools { flex-direction:column; gap:8px; }
          .camilla-case, .camilla-case-reverse { grid-template-columns:1fr; }
          .camilla-work-small > .camilla-case { grid-template-columns:1fr; }
          .camilla-case-reverse .cdp-artwork, .camilla-case-reverse .cdp-case-copy { order:initial; }
          .camilla-paid-media { padding:72px 0; }
          .camilla-paid-heading, .camilla-paid-spotlight, .camilla-paid-case-wide, .camilla-paid-ad-feature { grid-template-columns:1fr; }
          .camilla-paid-ad-gallery { grid-template-columns:1fr; }
          .camilla-paid-heading { gap:18px; margin-bottom:30px; }
          .camilla-paid-visual { min-height:390px; }
          .camilla-paid-showcase-gallery video, .camilla-paid-showcase-gallery img { max-height:310px; }
          .camilla-paid-metrics { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .camilla-paid-case-grid { grid-template-columns:1fr; }
          .camilla-paid-case-wide { grid-column:auto; }
          .camilla-paid-case-wide-metrics { gap:17px 18px; }
          .camilla-paid-ad-metrics { grid-template-columns:repeat(2,minmax(0,1fr)); gap:17px; }
          .cdp-artwork { min-height:320px; }
          .cdp-artwork-bigger { min-height:320px; }
          .cdp-bigger-gallery { height:320px; gap:10px; padding:14px; }
          .cdp-bigger-gallery figure { flex-basis:178px; }
          .cdp-case-copy { padding:29px 25px 31px; }
          .cdp-case-copy h3 { font-size:38px; }
          .cdp-aria-sphere { width:220px; height:220px; }
          .cdp-aria-sphere span { font-size:65px; }
          .cdp-skills-video { max-height:280px; }
          .cdp-strategy-art { min-height:320px; padding:20px; }
          .cdp-jpmam-gallery figure { flex-basis:220px; }
          .cdp-novartis-gallery figure { flex-basis:260px; }
          .cdp-novartis-thesis { font-size:clamp(29px,8vw,43px); }
          .cdp-novartis-pillars div { min-height:90px; padding:9px; }
          .cdp-novartis-pillars strong { font-size:14px; }
          .cdp-abba-gallery figure { flex-basis:290px; }
          .cdp-strategy-tags span { font-size:13px; }
          .cdp-work-small { grid-template-columns:1fr; gap:24px; }
          .camilla-about-top { grid-template-columns:1fr; gap:18px; margin-bottom:32px; }
          .camilla-role { grid-template-columns:1fr; gap:7px; }
          .camilla-practice { padding-top:72px; }
          .camilla-practice-grid { grid-template-columns:1fr; gap:27px; }
          .camilla-education-section { padding:57px 0 68px; }
          .camilla-education { grid-template-columns:1fr; gap:18px; }
          .camilla-certification-list { grid-template-columns:1fr; }
          .camilla-contact-grid { grid-template-columns:1fr; gap:26px; }
          .camilla-contact { padding-top:58px; }
          .camilla-contact h2 { font-size:clamp(66px,13vw,95px); }
          .camilla-footer { flex-wrap:wrap; margin-top:58px; }
        }
        @media (max-width:400px) {
          .camilla-shell { width:calc(100% - 30px); }
          .camilla-brand { font-size:13px; }
          .camilla-nav { gap:8px; }
          .camilla-nav a:first-child { display:none; }
          .camilla-hero h1 { font-size:clamp(50px,13vw,59px); }
          .camilla-hero-meta { flex-direction:column; align-items:start; }
          .camilla-hero-art { height:auto; grid-template-columns:1fr; gap:6px; padding:6px; }
          .camilla-hero-photo { height:295px; }
          .camilla-hero-message { min-height:430px; padding:18px 16px; }
          .camilla-testimonial-head .camilla-kicker { font-size:13px; }
          .camilla-testimonial-slide blockquote p { font-size:15px; }
          .camilla-photo-caption { left:10px; right:10px; bottom:10px; flex-direction:column; gap:4px; font-size:13px; }
          .cdp-artwork { min-height:275px; }
          .cdp-artwork-bigger { min-height:275px; }
          .cdp-bigger-gallery { height:275px; gap:8px; padding:10px; }
          .cdp-bigger-gallery figure { flex-basis:155px; }
          .cdp-case-stat { grid-template-columns:1fr; gap:6px; }
          .camilla-paid-metrics { gap:14px 10px; }
          .camilla-paid-results { padding:25px 20px; }
        }
      `}</style>

      <header className="camilla-header camilla-shell">
        <a className="camilla-brand" href="#top" aria-label="Camilla Du Preez home"><span className="camilla-monogram">CD</span><span>Camilla Du Preez</span></a>
        <nav className="camilla-nav" aria-label="Main navigation">
            <a href="#work">Selected work</a><a href="#paid-media">Paid media</a><a href="#about">About</a><a href="#experience">Experience</a>
          <a className="camilla-nav-contact" href="#contact">Contact <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <section className="camilla-hero" id="top">
        <div className="camilla-shell camilla-hero-inner">
          <div className="camilla-hero-meta camilla-kicker">
            <span className="camilla-availability"><i /> London · Social Media Marketing Manager · Digital Communications Manager · Social Media Strategist · Paid Social · Professional Community Manager</span>
            <span>10+ years' experience</span>
          </div>
          <h1 className="camilla-reveal">Complex ideas.<br /><span>Clear impact.</span></h1>
          <div className="camilla-hero-foot camilla-reveal-delay">
            <p>Camilla Du Preez makes complex B2B subjects human, useful and worth paying attention to — from first insight to the final measure.</p>
            <a href="#work">Explore the case studies <ArrowDown size={14} /></a>
          </div>
        </div>
        <div className="camilla-hero-art">
          <figure className="camilla-hero-photo">
            <img src={portraitImage} alt="Camilla Du Preez at work with her laptop in a light-filled café" />
            <figcaption className="camilla-photo-caption"><span>Camilla Du Preez</span><span>London · Social &amp; digital communications</span></figcaption>
          </figure>
          <div className="camilla-hero-message" role="region" aria-roledescription="carousel" aria-label="Testimonials" data-testid="hero-testimonial-carousel">
            <div className="camilla-testimonial-head">
              <span className="camilla-kicker camilla-testimonial-count">Kind words · {String(activeTestimonialIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
              <div className="camilla-testimonial-controls">
                <button type="button" aria-label="Previous testimonial" onClick={showPreviousTestimonial} data-testid="testimonial-previous"><ArrowLeft size={14} /></button>
                <button type="button" aria-label="Next testimonial" onClick={showNextTestimonial} data-testid="testimonial-next"><ArrowRight size={14} /></button>
              </div>
            </div>
            <figure className="camilla-testimonial-slide" role="group" aria-roledescription="slide" aria-label={`Testimonial ${activeTestimonialIndex + 1} of ${testimonials.length}`}>
              <blockquote aria-live="polite"><p>“{activeTestimonial.quote}”</p></blockquote>
              <figcaption><strong>{activeTestimonial.name}</strong><span>{activeTestimonial.role}</span></figcaption>
            </figure>
            <div className="camilla-testimonial-dots" aria-label="Choose a testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  key={testimonial.name}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-pressed={index === activeTestimonialIndex}
                  onClick={() => setActiveTestimonialIndex(index)}
                  data-testid={`testimonial-dot-${index + 1}`}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="camilla-marquee" aria-label="Strategy, social listening, accessible communications, audience insight">
        <div className="camilla-marquee-track" aria-hidden="true">
          {Array.from({ length: 2 }).map((_, index) => <span key={index}>Strategy <i>·</i> Social listening <i>·</i> Accessible communications <i>·</i> Audience insight <i>·</i> Measurable progress <i>·</i></span>)}
        </div>
      </div>

      <section className="camilla-shell camilla-intro" id="about">
        <div className="camilla-intro-label camilla-kicker">Agency · in-house · consultancy · freelance</div>
        <h2>Good communication starts with a useful question: <em>what does this audience need to know, feel or do?</em></h2>
        <div className="camilla-intro-foot">
          <p>I’ve spent over ten years in social media and digital communications, mostly in B2B, in-house and agency. I bring listening, audience understanding and clear thinking together with the hands-on craft of making the work happen.</p>
          <a className="camilla-text-link" href="#experience">A little about me <ArrowRight size={14} /></a>
        </div>
      </section>

      <section className="camilla-work" id="work">
        <div className="camilla-shell">
          <div className="camilla-work-heading">
            <div><h2>Selected visuals and impact</h2></div>
            <p>Each project starts with the audience and the business need. Here’s a closer look at the thinking, coordination and outcomes.</p>
          </div>

          <div className="camilla-results" aria-labelledby="camilla-results-title">
            <div className="camilla-kicker" id="camilla-results-title">Channel results · Buckinghamshire Business First · 2022–2026</div>
            <div className="camilla-results-grid">
              <div><strong>+859%</strong><span>LinkedIn link clicks</span><small>Weighted monthly average · 1,333 (2022/23) → 12,780 (2025/26)</small></div>
              <div><strong>+722%</strong><span>Instagram engagement rate</span><small>0.52% → 4.30%</small></div>
              <div><strong>7.94%</strong><span>LinkedIn engagement rate</span><small>Weighted average</small></div>
              <div><strong>12–15%</strong><span>LinkedIn click-through rate</span><small>2024–25 average · up from 7–8% in 2022</small></div>
            </div>
            <div className="camilla-reporting">
              <div className="camilla-kicker">From my reporting · Orlo annual report · Apr 2022 – Mar 2023</div>
              <div className="camilla-reporting-grid">
                <figure>
                  <a href={bbfOrloSentimentImage} target="_blank" rel="noreferrer" aria-label="Open full-size image: brand sentiment and inbound messages">
                    <img src={bbfOrloSentimentImage} alt="Orlo brand sentiment report for Buckinghamshire Business First, April 2022 to March 2023: 2.1k inbound messages, 62.5% positive, 17.8% semi-positive, 15.6% neutral, 3.4% semi-negative and 0.8% negative, split across X, Facebook, Instagram and LinkedIn." />
                  </a>
                  <figcaption>Brand sentiment · 2.1k inbound messages across four networks</figcaption>
                </figure>
                <figure>
                  <a href={bbfOrloBestTimesImage} target="_blank" rel="noreferrer" aria-label="Open full-size image: best times to post heatmap">
                    <img src={bbfOrloBestTimesImage} alt="Orlo best-times-to-post heatmap for Buckinghamshire Business First, rating each hour and weekday, with 9am, 4pm, 10am and 3pm as the strongest slots." />
                  </a>
                  <figcaption>Best times to post · used to plan the content calendar</figcaption>
                </figure>
              </div>
            </div>
          </div>

          <CaseStudy
            project="bigger"
            artwork="Buckinghamshire Business First"
            category="Buckinghamshire Business First · In-house campaign"
            title="Make local business feel like a movement."
            brief="Show local businesses that BBF membership means being part of a wider business community, not just using a support service."
            description="“Part of Something Bigger” connected member stories and event video across PR, video, digital and marketing teams. I owned the weekly rhythm and check-ins to keep the campaign coordinated."
            roleDescription="Created the campaign strategy, copy and design, developed the hashtag approach, and led reporting."
            videoUrl="https://lnkd.in/p/eAA3xgvh"
          />
          <CaseStudy
            project="listening"
            category="ISOQOL · Social listening · Current contract"
            title="Listen first, then decide what to say."
            brief="Give a global scientific society a clear picture of who talks about quality of life research, where, and what they care about."
            description="I set up and run social listening in Brandwatch across LinkedIn, X and the wider web for the International Society for Quality of Life Research. The work covers conversation and sentiment around patient-reported outcomes, the #ISOQOL conversation around the 2026 annual conference, and share of voice against peer organisations."
            roleDescription="Built the Boolean queries that separate ISOQOL from similarly named organisations, mapped the society's audiences and the topics each follows, researched search and AI-search visibility in Semrush, and write insight reports for the communications team."
          />
          <CaseStudy
            project="jpmam"
            artwork="J.P. Morgan Asset Management"
            category="J.P. Morgan Asset Management · dentsu · Social strategy"
            title="One social framework across 12 EMEA markets."
            brief="Bring 12 EMEA markets under one social approach, with shared audience insight, content planning and reporting."
            description="I developed a regional social strategy across 12 EMEA markets, connecting audience and competitor research to content planning, KPIs and reporting. The gallery brings together selected LinkedIn content examples, top-post analysis and a social-listening conversation-trend chart."
            metric="12"
            measure="EMEA markets"
            note="Strategy framework · 2020"
            roleDescription="Audience research, competitor review, content planning and KPI frameworks, working with regional marketing teams."
          />
          <CaseStudy
            project="hsbc"
            category="HSBC Asset Management · B2B LinkedIn"
            title="Reach the people making the decisions."
            brief="Reach treasurers and CFOs on LinkedIn and turn that attention into enquiries, inside a regulated approvals process."
            description="Managed LinkedIn publishing and paid activation for treasurers and CFOs, with compliance workflows, stakeholder approvals and optimisation reporting."
            metric="~600"
            measure="First-stage enquiries a month"
            note="Helped generate through LinkedIn campaigns · treasurers and CFOs"
            roleDescription="Managed LinkedIn paid campaign delivery through Sprinklr, reported performance and recommended optimisations, and handled compliance and multi-stage approvals."
          />
          <CaseStudy
            project="community"
            category="Community management · Buckinghamshire Business First · dentsu · ARIA · freelance"
            title="Know when to answer, and when to hand it on."
            brief="Keep online conversation healthy and on-brand, and make sure sensitive comments reach the right people quickly."
            description="At dentsu I recruited and managed a multilingual moderation team and built social listening and response frameworks. At ARIA I developed community management processes ahead of launch. At BBF I handled inbound messages across X, Facebook, Instagram and LinkedIn. I have also built response matrices for sensitive interactions, setting out which conversations stay with the social team and which are escalated elsewhere in the organisation, and I ran and moderated webinars for freelance clients."
            roleDescription="Hiring and managing moderators, writing response and escalation guidance, and moderating live sessions."
            metric="2.1k"
            measure="Inbound messages in one year at BBF"
            note="Apr 2022 – Mar 2023 · 80% positive or semi-positive · 4% negative or semi-negative"
          />
          <CaseStudy
            project="novartis"
            artwork="Novartis UK"
            category="Novartis UK · dentsu · Social strategy"
            title="Make a complex healthcare story more human."
            brief="Set a 2020 UK social strategy built around the patient journey, reputation, and attracting and retaining talent."
            description="The 2020 UK strategy focused on the patient journey, reputation, and attracting and retaining talent. Selected material pairs AMR Action Fund posts with Facebook and LinkedIn audience snapshots and #NovartisLife diversity campaign assets."
            roleDescription="For Novartis UK, I contributed to audience and competitor research, social strategy and content planning for antimicrobial-resistance communications and the #NovartisLife diversity campaign."
          />
          <CaseStudy
            project="abba"
            artwork="ABBA Voyage"
            category="Aniara (later ABBA Voyage) · Digital Marketing Consultant"
            title="Understand the audience before the spotlight."
            brief="Work out who the audience was, where they were and where to spend, before the show even had its final name."
            description="I joined the project while it was still called Aniara, before the ABBA Voyage name had been decided. I contributed to initial market research and social media launch planning, planned launch posts like these, developed more than £1 million of paid media recommendations, and presented them to investors. Selected materials cover audience segments, priority markets, campaign phases, partner guidance and the website roadmap."
            metric="2020–21"
            measure="Pre-launch strategy"
            note="Audience research · Paid media recommendations"
          />
          <CaseStudy
            project="aria"
            artwork="ARIA"
            category="ARIA · Digital communications launch"
            title="Give a new agency a clear voice."
            brief="Launch a brand-new government research agency with no existing audience, and help it recruit its first Programme Directors."
            description="Built launch-period digital strategy and produced social, web and email communications ahead of the Advanced Research and Invention Agency’s public launch. The gallery includes authored recruitment posts, a Programme Director article and interview-video examples."
            metric="4,500+"
            measure="Social followers from zero"
            note="During a two-month launch period"
            roleDescription="Edited the interview videos to match ARIA’s prescribed simple branding, and authored social posts for founding-team recruitment and Programme Director outreach."
            variant="reverse"
          />

        </div>
      </section>

      <PaidMediaSection />

      <section className="camilla-about" id="experience">
        <div className="camilla-shell">
          <div className="camilla-about-top">
            <div><div className="camilla-kicker">The experience behind the work</div><h2>Close to the detail.<br />Good with the room.</h2></div>
            <p>A decade-plus working across agency, in-house, consultancy and freelance settings. I’m comfortable translating between specialist teams, senior stakeholders and the people a message needs to reach.</p>
          </div>
          <div className="camilla-cv">
            {experience.map(([dates, company, title, copy]) => (
              <article className="camilla-role" key={company}>
                <div className="camilla-role-date camilla-kicker">{dates}</div>
                <div><h3>{company}</h3><div className="camilla-role-title">{title}</div></div>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="camilla-shell camilla-practice">
        <div className="camilla-practice-grid">
          <div><div className="camilla-kicker">How I make it work</div><h2>Sleeves rolled up</h2><p className="camilla-practice-intro">Research, creative craft and delivery detail in the same room. Practical communications people can use, stories people want to read and outcomes teams can understand.</p></div>
          <div className="camilla-capabilities">
            {capabilities.map(([title, copy]) => <article className="camilla-capability" key={title}><div><h3>{title}</h3><p>{copy}</p></div><span>↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="camilla-shell camilla-education-section" aria-labelledby="camilla-education-title">
        <h2 id="camilla-education-title">Education, certifications &amp; tools</h2>
        <div className="camilla-education">
          <div>
            <h3>Education</h3>
            <ul className="camilla-education-list">
              <li><strong>MA International Economics &amp; Business Studies</strong><span>Geneva Graduate Institute</span></li>
              <li><strong>BA (Hons) International Economics &amp; Relations</strong><span>University of Sussex</span></li>
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="camilla-certification-list">
              <li>Squared Online Digital Marketing</li>
              <li>HubSpot Marketing Hub Software</li>
              <li>HubSpot Academy Inbound Marketing Optimization</li>
              <li>6sense Fundamentals of Next-Gen Marketing</li>
              <li>Google Ads</li>
              <li>Google Analytics</li>
              <li>Interaction Design Foundation</li>
              <li>n8n Essentials: Your First Workflows</li>
            </ul>
          </div>
          <div className="camilla-education-languages camilla-education-tools">
            <h3>Tools</h3>
            <span>Sprout Social · Orlo · Sprinklr · Emplifi (SocialBakers) · Brandwatch · Talkwalker · Semrush · Canva · CapCut · Adobe Photoshop · Illustrator · Premiere Pro · After Effects · LinkedIn Campaign Manager · Meta Ads Manager · Google Analytics (GA4) · HubSpot · Salesforce · Mailchimp · WordPress · Monday.com · ChatGPT · Claude</span>
          </div>
          <div className="camilla-education-languages">
            <h3>Languages</h3>
            <span>English (native) · Spanish (fluent) · French (fluent written)</span>
          </div>
        </div>
      </section>

      <footer className="camilla-contact" id="contact">
        <div className="camilla-shell">
          <div className="camilla-contact-grid">
            <div><div className="camilla-kicker">Have a complex story to tell?</div><h2>Let’s make<br />it clear.</h2></div>
            <div className="camilla-contact-links">
              <a href="mailto:camillaadupreez@gmail.com"><span>camillaadupreez@gmail.com</span><MoveUpRight size={16} /></a>
              <a href="https://www.linkedin.com/in/camilladupreez" target="_blank" rel="noreferrer"><span>LinkedIn · Camilla Du Preez</span><MoveUpRight size={16} /></a>
              <p className="camilla-open-roles">Open to new roles in social media, community and digital communications · London</p>
              <div className="camilla-contact-project" data-testid="current-project">
                <div className="camilla-kicker">Currently building</div>
                <p>I’m working on a social listening agent. More screenshots and project details will be added as the work develops.</p>
                <a href="https://github.com/camillaspica" target="_blank" rel="noreferrer" aria-label="Visit Camilla Du Preez on GitHub" data-testid="github-profile-link">
                  <span>GitHub · camillaspica</span><MoveUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="camilla-footer camilla-kicker"><span>Camilla Du Preez · London</span><span>Thoughtful communication. Measurable progress.</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
