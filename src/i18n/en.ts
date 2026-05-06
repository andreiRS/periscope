export const en = {
  meta: {
    home: {
      title: 'Periscope: who is getting recommended to your customers instead of you?',
      description:
        'Periscope is an LLM Visibility Audit for indie SaaS founders. Find out who ChatGPT, Claude, Perplexity, and Gemini recommend to your customers instead of you, and why.',
    },
    imprint: {
      title: 'Imprint | Periscope',
      description: 'Legal notice (Impressum per TMG §5 / DDG §5) for periscope.surdu.de.',
    },
    privacy: {
      title: 'Privacy Policy | Periscope',
      description:
        'Privacy policy for periscope.surdu.de, covering what data is collected when you join the waitlist and how it is processed under the GDPR.',
    },
  },
  header: {
    tagline: 'An LLM Visibility Audit',
  },
  problem: {
    label: '01 / The problem',
    badge: 'Launching soon',
    headline: {
      lead: 'Who is ChatGPT',
      em: 'recommending',
      trail: 'to your customers instead of you?',
    },
    body: 'And right now, those answers name your competitors. In two business days, you get the full list: every brand named instead of you across ChatGPT, Claude, Perplexity, and Gemini, the prompts where you lost, and the fixes most likely to put you back in the answer. 30 to 50 buyer-intent queries, one flat-fee report.',
    waitlistLabel: 'The Waitlist',
    cta: 'Email me to join the waitlist',
    fineprint: {
      lead: 'Or write directly to',
      tail: '. No third-party form. One email when audits open up, then nothing else.',
    },
  },
  artifact: {
    label: '02 / The artifact',
    heading: 'Here is what lands in your inbox.',
    promptHeader: 'Prompt',
    yourBrand: 'Your brand',
    prompts: [
      'best note-taking app for researchers',
      'alternatives to Notion for small teams',
      'tools for managing customer feedback',
      'best help desk for small SaaS',
      'habit tracker that respects privacy',
      'self-hosted analytics for indie founders',
      'email tools for newsletter creators',
      'Shopify alternatives for digital products',
    ],
    caption:
      'Real format. Anonymized data. Yours arrives as Markdown or PDF, inside 2 business days of URL submission.',
  },
  report: {
    label: '03 / The report',
    heading: {
      lead: 'Three things,',
      em: 'in one document.',
    },
    cards: [
      {
        title: 'Visibility matrix',
        body: 'Every prompt, every LLM, every brand named. Your brand vs. the competition, at a glance.',
      },
      {
        title: 'Competitor surface',
        body: 'The named brands filling the slot your product should fill, sorted by frequency.',
      },
      {
        title: 'Prioritized fix list',
        body: 'Ranked by effort: 15 min, 1 day, 1 week. Each fix tied to a likely cause: positioning, schema, content coverage, or third-party mentions.',
      },
    ],
    underneathLead: 'Two things sit underneath all three.',
    underneathBody:
      'The matrix is diagnosed per LLM, because each one biases differently: ChatGPT cites vendor blogs, Perplexity skews household-name, Claude leans on parametric knowledge, Gemini on marketing tone. And every fix ships with a re-run protocol: which prompts to test again, in how many weeks, and the threshold for measuring lift.',
  },
  process: {
    label: '04 / Process',
    heading: {
      lead: 'From URL to report',
      em: 'in 2 business days.',
    },
    steps: [
      'You submit a landing page URL.',
      'I generate 30 to 50 buyer-intent prompts spanning discovery, comparison, and evaluation.',
      'Every prompt runs across ChatGPT, Claude, Perplexity, and Gemini.',
      'Mentions are tallied per brand per LLM into your visibility matrix.',
      'Your site is inspected against the 2 to 3 most likely causes of low visibility, and fixes are ranked by effort.',
    ],
  },
  findings: {
    label: '05 / Early findings',
    heading: {
      lead: 'What early runs',
      em: 'surfaced.',
    },
    items: [
      {
        stat: '0 out of 115.',
        body: 'An indie SaaS 4 days post-launch. Zero mentions across every prompt-LLM combination. The cold start is real and measurable.',
      },
      {
        stat: '6 out of 160 (3.75%).',
        body: 'A Shopify-adjacent tool with active users. The audit also surfaced a positioning gap between their landing page and their app store listing that was invisible to them before the run.',
      },
      {
        stat: 'Cross-LLM brand variance.',
        body: 'The same prompt to ChatGPT, Claude, Perplexity, and Gemini returns different brand sets. There is no single "AI search" channel to optimize for.',
      },
    ],
    note: 'Small sample from beta. The numbers will move; the patterns probably will not.',
  },
  fieldNotes: {
    label: '06 / Field notes',
    heading: {
      lead: 'Four notes',
      em: 'from the runs so far.',
    },
    notes: [
      {
        body: 'LLMs return different brand sets for the same prompt. You cannot optimize for "AI search" as a single channel.',
      },
      {
        body: 'Vendor-published comparison content ("X vs Y vs Z" listicles on the vendor\'s own blog) is currently the most reliable way in.',
      },
      {
        body: 'API and consumer-chat outputs diverge. Consumer UIs may pull live web search; APIs often will not. Both need tracking.',
      },
      {
        body: 'Fixes take weeks to surface in LLM outputs. Re-runs matter more than one-shots.',
      },
    ],
    glossary: [
      {
        term: 'AEO.',
        body: 'Answer Engine Optimization. Getting picked up in AI answers.',
      },
      {
        term: 'GEO.',
        body: 'Generative Engine Optimization. Same idea, different acronym.',
      },
    ],
  },
  waitlistRepeat: {
    label: '07 / Waitlist',
    heading: {
      lead: 'Want one',
      em: 'when audits open up?',
    },
    body: 'Send me an email and I will add you to the list. I will message you the moment the first slots open.',
    cta: 'Email me to join the waitlist',
    fineprint: {
      lead: 'First batch will be small. I will keep the queue honest. Or write directly to',
      tail: '.',
    },
  },
  colophon: {
    label: '08 / Colophon',
    heading: {
      lead: 'Who is',
      em: 'running this.',
    },
    bodyLead:
      'I am Andrei. I am building Periscope after running early audits across a handful of indie SaaS products and watching the same patterns show up. If you want to talk before signing up, my inbox is open at',
    bodyTail: '.',
  },
  footer: {
    imprint: 'Imprint',
    privacy: 'Privacy',
    copyrightName: 'Razvan Andrei Surdu',
  },
  waitlist: {
    email: 'periscope@surdu.eu',
    mailto: {
      subject: 'Periscope waitlist',
      body: "Hi Andrei,\n\nI'd like to be on the Periscope waitlist.\n\nMy site (optional): \n\nThanks",
    },
  },
  imprint: {
    eyebrow: 'Legal',
    title: 'Imprint',
    intro: 'Information per § 5 DDG (formerly TMG) and § 18 Abs. 2 MStV.',
    operator: {
      heading: 'Operator',
      lines: ['Razvan Andrei Surdu', 'Osterbrook 11B', '20537 Hamburg', 'Germany'],
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email:',
    },
    vat: {
      heading: 'VAT',
      body: 'VAT ID (Umsatzsteuer-Identifikationsnummer per § 27 a UStG): not applicable, small business under § 19 UStG.',
    },
    responsible: {
      heading: 'Responsible for content',
      body: 'Per § 18 Abs. 2 MStV: Razvan Andrei Surdu, address as above.',
    },
    odr: {
      heading: 'EU online dispute resolution',
      bodyHtml:
        'The European Commission provides a platform for online dispute resolution at <a href="https://ec.europa.eu/consumers/odr" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">https://ec.europa.eu/consumers/odr</a>. I am not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.',
    },
    liability: {
      heading: 'Liability',
      body: 'Content on this site is prepared with care, but I make no warranty regarding accuracy, completeness, or timeliness. External links point to third-party sites whose content I do not control and for which I assume no liability.',
    },
    lastUpdated: 'Last updated: 2026-05-05',
    backToHome: '← Back to Periscope',
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro: 'Plain language first, formal text below. Information per Art. 13 and 14 GDPR.',
    short: {
      heading: 'Short version',
      itemsHtml: [
        'The waitlist is a plain email to <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>. No form provider sits between you and me. Your address and message land in my inbox.',
        'I will email you once when audits open up, and not again unless you ask.',
        'Pageviews are counted via <a href="https://www.goatcounter.com" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">GoatCounter</a>, a privacy-friendly analytics service. No cookies, no personal data stored, no cross-site tracking. No advertising pixels, no embedded forms.',
        'You can ask me at any time to delete your email. One message to <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a> is enough.',
      ],
    },
    controller: {
      heading: '1. Controller',
      bodyHtml:
        'Razvan Andrei Surdu<br />Osterbrook 11B<br />20537 Hamburg, Germany<br />Email: <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>',
    },
    data: {
      heading: '2. What data is processed and why',
      waitlist: {
        heading: '2.1 Waitlist signup by email',
        leadHtml:
          'The waitlist CTA on this site opens your own email client with a pre-filled message to <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>. When you send it, your email address and the contents of your message arrive in my inbox. The site itself does not transmit any data; the message is sent directly by your mail client.',
        purposeLabel: 'Purpose:',
        purpose:
          'to notify you once when Periscope audits open up, and to reply to any specific question you raise in the message.',
        legalBasisLabel: 'Legal basis:',
        legalBasis:
          'Art. 6 (1) (a) GDPR (consent, given by sending the email) for the waitlist notification; Art. 6 (1) (b) GDPR for any pre-contractual steps you initiate.',
        retentionLabel: 'Retention:',
        retention:
          'until you withdraw consent or the waitlist purpose is no longer relevant, at which point the message and address are deleted. You can ask for deletion at any time.',
      },
      logs: {
        heading: '2.2 Server logs',
        body:
          'The site is hosted on GitHub Pages. GitHub Inc. processes standard server logs (including IP address, timestamp, user agent, requested URL) for the purpose of operating, securing, and protecting the service.',
        legalBasisLabel: 'Legal basis:',
        legalBasis:
          'Art. 6 (1) (f) GDPR (legitimate interest in operating a stable and secure website).',
      },
    },
    recipients: {
      heading: '3. Recipients and processors',
      lead: 'The following providers are involved in operating this site or handling messages you send to me:',
      itemsHtml: [
        '<strong class="font-semibold text-zinc-950">Google Ireland Limited</strong>, Gordon House, Barrow Street, Dublin 4, Ireland. Operates Google Workspace, which hosts the periscope@surdu.eu mailbox and processes incoming and outgoing messages. Processing is governed by the Google Workspace Data Processing Amendment. Cross-border transfers to Google LLC in the United States are covered by the EU–U.S. Data Privacy Framework, to which Google is certified. See <a href="https://policies.google.com/privacy" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Google\'s privacy policy</a> and the <a href="https://workspace.google.com/terms/dpa_terms.html" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Workspace DPA</a>.',
        '<strong class="font-semibold text-zinc-950">GitHub, Inc.</strong>, 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA. Hosting provider for static site delivery. Cross-border transfer is covered by the EU–U.S. Data Privacy Framework. See <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">GitHub\'s privacy statement</a>.',
        '<strong class="font-semibold text-zinc-950">INWX GmbH &amp; Co. KG</strong>, domain registrar for surdu.de.',
        '<strong class="font-semibold text-zinc-950">GoatCounter</strong>, operated by Martin Tournoij (Netherlands). Privacy-friendly pageview analytics. No cookies, no personal data stored, no IP retention, no cross-site tracking. See <a href="https://www.goatcounter.com/help/privacy" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">GoatCounter\'s privacy policy</a>.',
      ],
    },
    cookies: {
      heading: '4. Cookies and analytics',
      body:
        'This site sets no cookies. Pageviews are counted via GoatCounter, a privacy-friendly analytics service operated by Martin Tournoij (Netherlands). GoatCounter does not use cookies, does not store personal data, does not track visitors across sites, and does not retain IP addresses; it generates a salted, daily-rotating hash of your IP and user agent solely to estimate unique visitors. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in basic, aggregate audience measurement). See GoatCounter\'s privacy policy at https://www.goatcounter.com/help/privacy. No advertising, no embedded forms, no third-party widgets are loaded.',
    },
    rights: {
      heading: '5. Your rights',
      lead: 'Under the GDPR you have the right to:',
      items: [
        'access your personal data (Art. 15);',
        'have inaccurate data corrected (Art. 16);',
        'have your data erased (Art. 17);',
        'restrict processing (Art. 18);',
        'data portability (Art. 20);',
        'object to processing based on legitimate interest (Art. 21);',
        'withdraw consent at any time, without affecting the lawfulness of prior processing (Art. 7 (3)).',
      ],
      exerciseHtml:
        'To exercise any of these, email <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>.',
      complaintHtml:
        'You also have the right to lodge a complaint with a data protection supervisory authority. The competent authority for this site is the Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI), <a href="https://datenschutz-hamburg.de" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">datenschutz-hamburg.de</a>.',
    },
    transfers: {
      heading: '6. International transfers',
      lead: 'Two cross-border data flows may occur:',
      items: [
        'Hosting via GitHub Pages may involve transfer of standard server log data to the United States; this transfer is covered by the EU–U.S. Data Privacy Framework, to which GitHub Inc. is certified.',
        'Messages you send to periscope@surdu.eu are processed by Google Workspace under contract with Google Ireland Limited (Dublin). Google may replicate message data to data centers operated by Google LLC in the United States; this transfer is covered by the EU–U.S. Data Privacy Framework, to which Google is certified, and by the Google Workspace Data Processing Amendment.',
      ],
    },
    changes: {
      heading: '7. Changes to this policy',
      body:
        'This policy may be updated as the site evolves. The current version is always available at this URL. Material changes will be reflected in the "Last updated" date below.',
    },
    lastUpdated: 'Last updated: 2026-05-06',
    backToHome: '← Back to Periscope',
  },
};
