import type { en } from './en';

type Dictionary = typeof en;

export const de: Dictionary = {
  meta: {
    home: {
      title: 'Periscope: Wer wird deinen Kunden statt dir empfohlen?',
      description:
        'Periscope ist ein LLM Visibility Audit für Indie-SaaS-Gründer. Finde heraus, wen ChatGPT, Claude, Perplexity und Gemini deinen Kunden statt dir empfehlen, und warum.',
    },
    imprint: {
      title: 'Impressum | Periscope',
      description: 'Impressum nach § 5 DDG / § 5 TMG für periscope.surdu.de.',
    },
    privacy: {
      title: 'Datenschutzerklärung | Periscope',
      description:
        'Datenschutzerklärung für periscope.surdu.de: welche Daten erfasst werden, wenn du dich auf die Warteliste setzt, und wie sie nach DSGVO verarbeitet werden.',
    },
  },
  header: {
    tagline: 'Ein LLM Visibility Audit',
  },
  problem: {
    label: '01 / Das Problem',
    badge: 'Bald verfügbar',
    headline: {
      lead: 'Wen empfiehlt ChatGPT',
      em: 'deinen Kunden',
      trail: 'statt dir?',
    },
    body: 'Und gerade jetzt nennen diese Antworten deine Wettbewerber. In zwei Werktagen bekommst du die vollständige Liste: jede Marke, die in ChatGPT, Claude, Perplexity und Gemini statt dir genannt wird, die Prompts, bei denen du verloren hast, und die Fixes, die dich am wahrscheinlichsten zurück in die Antwort bringen. 30 bis 50 Buyer-Intent-Prompts, ein Pauschal-Report.',
    waitlistLabel: 'Loslegen',
    cta: 'Was es kostet',
    fineprint: {
      lead: 'Oder schreib direkt an',
      tail: '. Kein Drittanbieter-Formular, kein Skript zwischen uns.',
    },
  },
  artifact: {
    label: '02 / Das Artefakt',
    heading: 'Das landet in deinem Posteingang.',
    promptHeader: 'Prompt',
    yourBrand: 'Deine Marke',
    prompts: [
      'beste Notizen-App für Forschende',
      'Notion-Alternativen für kleine Teams',
      'Tools für Kundenfeedback-Management',
      'beste Helpdesk-Software für kleine SaaS',
      'Habit-Tracker mit Datenschutz',
      'Self-Hosted Analytics für Indie-Gründer',
      'E-Mail-Tools für Newsletter-Autoren',
      'Shopify-Alternativen für digitale Produkte',
    ],
    caption:
      'Echtes Format. Anonymisierte Daten. Deins kommt als Markdown oder PDF, innerhalb von 2 Werktagen nach URL-Eingang.',
  },
  report: {
    label: '03 / Der Report',
    heading: {
      lead: 'Drei Dinge,',
      em: 'in einem Dokument.',
    },
    cards: [
      {
        title: 'Sichtbarkeits-Matrix',
        body: 'Jeder Prompt, jeder LLM, jede genannte Marke. Deine Marke vs. die Konkurrenz, auf einen Blick.',
      },
      {
        title: 'Wettbewerber-Surface',
        body: 'Die Marken, die den Slot füllen, den dein Produkt füllen sollte, sortiert nach Häufigkeit.',
      },
      {
        title: 'Priorisierte Fix-Liste',
        body: 'Sortiert nach Aufwand: 15 Min., 1 Tag, 1 Woche. Jeder Fix verbunden mit einer wahrscheinlichen Ursache: Positioning, Schema, Content-Abdeckung oder Drittanbieter-Erwähnungen.',
      },
    ],
    underneathLead: 'Zwei Dinge stecken unter allen drei.',
    underneathBody:
      'Die Matrix wird pro LLM diagnostiziert, weil jedes anders biased: ChatGPT zitiert Vendor-Blogs, Perplexity neigt zu Household-Names, Claude lehnt sich an parametrisches Wissen, Gemini an Marketing-Ton. Und jeder Fix kommt mit einem Re-Run-Protokoll: welche Prompts wann erneut zu testen sind, in wie vielen Wochen, und der Schwellenwert zur Messung des Lifts.',
  },
  process: {
    label: '04 / Prozess',
    heading: {
      lead: 'Von URL zum Report',
      em: 'in 2 Werktagen.',
    },
    steps: [
      'Du reichst eine Landing-Page-URL ein.',
      'Ich generiere 30 bis 50 Buyer-Intent-Prompts über Discovery, Vergleich und Evaluation.',
      'Jeder Prompt läuft durch ChatGPT, Claude, Perplexity und Gemini.',
      'Erwähnungen werden pro Marke pro LLM in deine Sichtbarkeits-Matrix gezählt.',
      'Deine Seite wird gegen die 2 bis 3 wahrscheinlichsten Ursachen für niedrige Sichtbarkeit geprüft, und Fixes werden nach Aufwand sortiert.',
    ],
  },
  findings: {
    label: '05 / Erste Befunde',
    heading: {
      lead: 'Was die ersten Runs',
      em: 'gezeigt haben.',
    },
    items: [
      {
        stat: '0 von 115.',
        body: 'Ein Indie-SaaS, 4 Tage nach Launch. Null Erwähnungen über jede Prompt-LLM-Kombination. Der Cold Start ist real und messbar.',
      },
      {
        stat: '6 von 160 (3,75 %).',
        body: 'Ein Shopify-nahes Tool mit aktiven Nutzern. Der Audit deckte zudem eine Positioning-Lücke zwischen Landing-Page und App-Store-Listing auf, die vor dem Run unsichtbar war.',
      },
      {
        stat: 'Cross-LLM Marken-Varianz.',
        body: 'Derselbe Prompt liefert in ChatGPT, Claude, Perplexity und Gemini unterschiedliche Markensets. Es gibt keinen einzelnen "AI-Search"-Kanal, für den man optimiert.',
      },
    ],
    note: 'Kleine Stichprobe aus der Beta. Die Zahlen werden sich bewegen; die Muster wahrscheinlich nicht.',
  },
  fieldNotes: {
    label: '06 / Beobachtungen',
    heading: {
      lead: 'Vier Notizen',
      em: 'aus den bisherigen Runs.',
    },
    notes: [
      {
        body: 'LLMs liefern für denselben Prompt unterschiedliche Markensets. Du kannst nicht für "AI-Search" als einen einzelnen Kanal optimieren.',
      },
      {
        body: 'Vendor-publizierte Vergleichsinhalte ("X vs Y vs Z"-Listicles auf dem eigenen Vendor-Blog) sind aktuell der zuverlässigste Weg rein.',
      },
      {
        body: 'API- und Consumer-Chat-Outputs divergieren. Consumer-UIs ziehen ggf. Live-Web-Search; APIs oft nicht. Beides braucht Tracking.',
      },
      {
        body: 'Fixes brauchen Wochen, bis sie in LLM-Outputs auftauchen. Re-Runs zählen mehr als One-Shots.',
      },
    ],
    glossary: [
      {
        term: 'AEO.',
        body: 'Answer Engine Optimization. In AI-Antworten genannt werden.',
      },
      {
        term: 'GEO.',
        body: 'Generative Engine Optimization. Gleiche Idee, anderes Akronym.',
      },
    ],
  },
  pricing: {
    label: '07 / Preis',
    heading: {
      lead: 'Was es kostet,',
      em: 'klar gesagt.',
    },
    body:
      'Ein Audit, ein Pauschalpreis. Willst du mehr Runs? Kauf sie im Voraus und setz sie ein, wenn du ein Redesign launchst oder dein Positioning verschiebst. Kein Abo, keine automatische Verlängerung. Credits verfallen 12 Monate nach Kauf.',
    tiers: [
      {
        name: 'Snapshot',
        price: '199 €',
        savings: '',
        bullets: [
          'Ein vollständiger Audit',
          '30 bis 50 Buyer-Intent-Prompts',
          'ChatGPT, Claude, Perplexity, Gemini',
          'Report in 2 Werktagen',
        ],
        cta: 'Snapshot holen',
        mailtoSubject: 'Periscope Warteliste: Snapshot',
        mailtoBody:
          'Hi Andrei,\n\nich möchte auf die Periscope-Warteliste für die Snapshot-Option (199 €).\n\nMeine Seite (optional): \n\nDanke',
      },
      {
        name: 'Quarterly Pack',
        price: '279 €',
        savings: '37 € sparen',
        bullets: [
          'Alles aus Snapshot',
          '3 Follow-up-Credits',
          'Einlösbar innerhalb 12 Monaten',
        ],
        cta: 'Quarterly Pack holen',
        mailtoSubject: 'Periscope Warteliste: Quarterly Pack',
        mailtoBody:
          'Hi Andrei,\n\nich möchte auf die Periscope-Warteliste für die Option Quarterly Pack (279 €).\n\nMeine Seite (optional): \n\nDanke',
      },
      {
        name: 'Yearly Pack',
        price: '499 €',
        savings: '90 € sparen',
        bullets: [
          'Alles aus Snapshot',
          '10 Follow-up-Credits',
          'Einlösbar innerhalb 12 Monaten',
        ],
        cta: 'Yearly Pack holen',
        mailtoSubject: 'Periscope Warteliste: Yearly Pack',
        mailtoBody:
          'Hi Andrei,\n\nich möchte auf die Periscope-Warteliste für die Option Yearly Pack (499 €).\n\nMeine Seite (optional): \n\nDanke',
      },
    ],
    addon: {
      title: 'Add-on:',
      body:
        'Wettbewerber-Benchmark (+99 €). Füg jedem Audit 2 bis 3 namentliche Wettbewerber hinzu und sieh genau, wo sie dich überholen. Erwähn es in deiner E-Mail.',
    },
    adhoc: 'Einzelne Follow-up-Runs ad-hoc verfügbar zu 39 € pro Run.',
  },
  waitlistRepeat: {
    label: '08 / Fragen',
    heading: {
      lead: 'Hast du eine Frage,',
      em: 'bevor du dich entscheidest?',
    },
    body: 'Unsicher, welche Option passt? Wissen, wie ein Follow-up tatsächlich aussieht, oder ob dein Produkt für einen Audit im richtigen Stadium ist? Schreib mir. Ich dränge dich nicht in eine Option, die du nicht brauchst.',
    cta: 'Stell eine Frage',
    fineprint: {
      lead: 'Oder schreib direkt an',
      tail: '. Klare Frage, klare Antwort.',
    },
  },
  colophon: {
    label: '09 / Colophon',
    heading: {
      lead: 'Wer das hier',
      em: 'macht.',
    },
    bodyLead:
      'Ich bin Andrei. Ich baue Periscope, nachdem ich frühe Audits über eine Handvoll Indie-SaaS-Produkte gefahren habe und immer wieder dieselben Muster gesehen habe. Wenn du vor der Anmeldung reden willst, mein Postfach ist offen unter',
    bodyTail: '.',
  },
  footer: {
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyrightName: 'Razvan Andrei Surdu',
  },
  waitlist: {
    email: 'periscope@surdu.eu',
    mailto: {
      subject: 'Periscope: Frage',
      body: 'Hi Andrei,\n\nbevor ich mich für eine Option entscheide, habe ich eine Frage zu Periscope:\n\n\n\nDanke',
    },
  },
  imprint: {
    eyebrow: 'Rechtliches',
    title: 'Impressum',
    intro: 'Angaben gemäß § 5 DDG (vormals TMG) und § 18 Abs. 2 MStV.',
    operator: {
      heading: 'Anbieter',
      lines: ['Razvan Andrei Surdu', 'Osterbrook 11B', '20537 Hamburg', 'Deutschland'],
    },
    contact: {
      heading: 'Kontakt',
      emailLabel: 'E-Mail:',
    },
    vat: {
      heading: 'Umsatzsteuer',
      body: 'Umsatzsteuer-Identifikationsnummer (gem. § 27 a UStG): nicht zutreffend, Kleinunternehmer nach § 19 UStG.',
    },
    responsible: {
      heading: 'Verantwortlich für den Inhalt',
      body: 'Gemäß § 18 Abs. 2 MStV: Razvan Andrei Surdu, Anschrift wie oben.',
    },
    odr: {
      heading: 'EU-Streitbeilegung',
      bodyHtml:
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit unter <a href="https://ec.europa.eu/consumers/odr" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">https://ec.europa.eu/consumers/odr</a>. Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    },
    liability: {
      heading: 'Haftung',
      body: 'Die Inhalte dieser Seite werden mit Sorgfalt erstellt; eine Gewähr für Richtigkeit, Vollständigkeit oder Aktualität übernehme ich nicht. Externe Links verweisen auf Inhalte Dritter, auf die ich keinen Einfluss habe und für die ich keine Haftung übernehme.',
    },
    lastUpdated: 'Stand: 05.05.2026',
    backToHome: '← Zurück zu Periscope',
  },
  privacy: {
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    intro: 'Plain-Text zuerst, formaler Text darunter. Angaben gemäß Art. 13 und 14 DSGVO.',
    short: {
      heading: 'Kurzfassung',
      itemsHtml: [
        'Die Warteliste ist eine direkte E-Mail an <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>. Kein Formular-Anbieter zwischen dir und mir. Deine Adresse und deine Nachricht landen in meinem Postfach.',
        'Ich schreibe dir einmal, wenn die Audits öffnen, und sonst nicht, außer du fragst.',
        'Pageviews werden über <a href="https://www.goatcounter.com" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">GoatCounter</a> gezählt, einen datenschutzfreundlichen Analytics-Dienst. Keine Cookies, keine personenbezogenen Daten gespeichert, kein seitenübergreifendes Tracking. Keine Werbe-Pixel, keine eingebetteten Formulare.',
        'Du kannst mich jederzeit bitten, deine E-Mail zu löschen. Eine Nachricht an <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a> reicht.',
      ],
    },
    controller: {
      heading: '1. Verantwortlicher',
      bodyHtml:
        'Razvan Andrei Surdu<br />Osterbrook 11B<br />20537 Hamburg, Deutschland<br />E-Mail: <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>',
    },
    data: {
      heading: '2. Welche Daten verarbeitet werden und warum',
      waitlist: {
        heading: '2.1 Anmeldung zur Warteliste per E-Mail',
        leadHtml:
          'Der Warteliste-CTA auf dieser Seite öffnet deinen eigenen E-Mail-Client mit einer vorgefertigten Nachricht an <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>. Wenn du sie sendest, kommen deine E-Mail-Adresse und der Inhalt deiner Nachricht in meinem Postfach an. Die Seite selbst überträgt keine Daten; die Nachricht wird direkt von deinem Mail-Client gesendet.',
        purposeLabel: 'Zweck:',
        purpose:
          'einmalige Benachrichtigung, wenn Periscope-Audits öffnen, und Beantwortung konkreter Fragen aus deiner Nachricht.',
        legalBasisLabel: 'Rechtsgrundlage:',
        legalBasis:
          'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Versand der E-Mail) für die Warteliste-Benachrichtigung; Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen, die du anstößt.',
        retentionLabel: 'Speicherdauer:',
        retention:
          'bis du die Einwilligung widerrufst oder der Zweck der Warteliste entfällt; danach werden Nachricht und Adresse gelöscht. Du kannst jederzeit Löschung verlangen.',
      },
      logs: {
        heading: '2.2 Server-Logs',
        body:
          'Die Seite wird auf GitHub Pages gehostet. GitHub Inc. verarbeitet Standard-Server-Logs (u. a. IP-Adresse, Zeitstempel, User-Agent, angefragte URL) zum Betrieb, zur Sicherheit und zum Schutz des Dienstes.',
        legalBasisLabel: 'Rechtsgrundlage:',
        legalBasis:
          'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen, sicheren Betrieb der Website).',
      },
    },
    recipients: {
      heading: '3. Empfänger und Auftragsverarbeiter',
      lead: 'Folgende Anbieter sind am Betrieb dieser Seite oder an der Verarbeitung deiner Nachrichten beteiligt:',
      itemsHtml: [
        '<strong class="font-semibold text-zinc-950">Google Ireland Limited</strong>, Gordon House, Barrow Street, Dublin 4, Irland. Betreibt Google Workspace, das das Postfach periscope@surdu.eu hostet und ein- und ausgehende Nachrichten verarbeitet. Die Verarbeitung erfolgt nach dem Google-Workspace Data Processing Amendment. Drittlandübermittlungen an Google LLC in den USA sind durch das EU–U.S. Data Privacy Framework abgedeckt, dem Google zertifiziert ist. Siehe <a href="https://policies.google.com/privacy" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Datenschutzerklärung von Google</a> und das <a href="https://workspace.google.com/terms/dpa_terms.html" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Workspace DPA</a>.',
        '<strong class="font-semibold text-zinc-950">GitHub, Inc.</strong>, 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA. Hosting-Provider für die statische Site-Auslieferung. Drittlandübermittlung gedeckt durch das EU–U.S. Data Privacy Framework. Siehe <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Datenschutzerklärung von GitHub</a>.',
        '<strong class="font-semibold text-zinc-950">INWX GmbH &amp; Co. KG</strong>, Domain-Registrar für surdu.de.',
        '<strong class="font-semibold text-zinc-950">GoatCounter</strong>, betrieben von Martin Tournoij (Niederlande). Datenschutzfreundliche Pageview-Analytics. Keine Cookies, keine personenbezogenen Daten gespeichert, keine IP-Speicherung, kein seitenübergreifendes Tracking. Siehe <a href="https://www.goatcounter.com/help/privacy" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">Datenschutzerklärung von GoatCounter</a>.',
      ],
    },
    cookies: {
      heading: '4. Cookies und Analytics',
      body:
        'Diese Seite setzt keine Cookies. Pageviews werden über GoatCounter gezählt, einen datenschutzfreundlichen Analytics-Dienst, betrieben von Martin Tournoij (Niederlande). GoatCounter setzt keine Cookies, speichert keine personenbezogenen Daten, trackt nicht seitenübergreifend und speichert keine IP-Adressen; zur Schätzung eindeutiger Besucher wird ausschließlich ein gesalzener, täglich rotierender Hash aus IP und User-Agent erzeugt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen, aggregierten Reichweitenmessung). Siehe GoatCounters Datenschutzerklärung unter https://www.goatcounter.com/help/privacy. Es werden keine Werbe-Pixel, eingebettete Formulare oder Drittanbieter-Widgets geladen.',
    },
    rights: {
      heading: '5. Deine Rechte',
      lead: 'Nach DSGVO hast du das Recht auf:',
      items: [
        'Auskunft über deine personenbezogenen Daten (Art. 15);',
        'Berichtigung unrichtiger Daten (Art. 16);',
        'Löschung deiner Daten (Art. 17);',
        'Einschränkung der Verarbeitung (Art. 18);',
        'Datenübertragbarkeit (Art. 20);',
        'Widerspruch gegen Verarbeitungen auf Basis berechtigten Interesses (Art. 21);',
        'Widerruf der Einwilligung jederzeit, ohne Auswirkung auf die Rechtmäßigkeit der bisherigen Verarbeitung (Art. 7 Abs. 3).',
      ],
      exerciseHtml:
        'Zur Ausübung dieser Rechte schreib eine E-Mail an <a href="mailto:periscope@surdu.eu" class="underline underline-offset-4 hover:text-zinc-950">periscope@surdu.eu</a>.',
      complaintHtml:
        'Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständige Behörde für diese Seite ist die Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI), <a href="https://datenschutz-hamburg.de" class="underline underline-offset-4 hover:text-zinc-950" rel="noopener">datenschutz-hamburg.de</a>.',
    },
    transfers: {
      heading: '6. Drittlandübermittlungen',
      lead: 'Zwei grenzüberschreitende Datenflüsse können auftreten:',
      items: [
        'Hosting via GitHub Pages kann eine Übermittlung von Standard-Server-Log-Daten in die USA umfassen; diese Übermittlung ist durch das EU–U.S. Data Privacy Framework abgedeckt, dem GitHub Inc. zertifiziert ist.',
        'Nachrichten an periscope@surdu.eu werden von Google Workspace im Auftrag von Google Ireland Limited (Dublin) verarbeitet. Google kann Nachrichten in Rechenzentren von Google LLC in den USA replizieren; diese Übermittlung ist durch das EU–U.S. Data Privacy Framework abgedeckt, dem Google zertifiziert ist, und durch das Google-Workspace Data Processing Amendment.',
      ],
    },
    changes: {
      heading: '7. Änderungen dieser Erklärung',
      body:
        'Diese Erklärung kann angepasst werden, wenn sich die Seite weiterentwickelt. Die jeweils aktuelle Version steht unter dieser URL. Wesentliche Änderungen werden im "Stand"-Datum unten reflektiert.',
    },
    lastUpdated: 'Stand: 06.05.2026',
    backToHome: '← Zurück zu Periscope',
  },
};
