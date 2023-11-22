import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
        wait: true},

    resources: {
      en: {
        translation: {
            navigation: {
                service: 'About',
                prices: 'Services',
                blog: 'Blog',
                contact: 'Contact'
            },
            
            hero: {
                title1: ' with ',
                title2: 'Attitude!',
                discount: "Discount for",
                text: "We provide strategic marketing development and optimize online presence to drive traffic and increase brand's visibility. Discover how we can support your online success today.",
            },

            business: {
                title1: 'SET YOUR GOALS',
                title2: 'GO FOR IT!',
                text: "Our marketing and SEO company is dedicated to improving your digital footprint. We specialize in developing strategic marketing campaigns and optimizing your online presence. With our focus on data-driven insights and innovative strategies, we'll help your business compete in the digital landscape.",
            },

            billing: {
                head1: 'Product Targeting and',
                head2: 'Keyword Analysis',
                text: "With this service you can better understand your target audience's preferences and intent. Allowing us to optimize your content, website and advertising campaigns will rank you higher in search engine results and attract relevant traffic. This approach relies on data-driven algorithms and customer behavior analysis to display relevant products to potential buyers."
            },

            deal: {
                title1: 'Organic growth and',
                title2: 'SEO optimization',
                text: 'If you are going to invest in your product for the long term, there is no way around SEO optimization and content management. High quality information and some know how will achieve amazing web performance based on natural traffic. '
            },
            hook: {
                title1: 'ML Modeling',
                title2: 'Consumer Behavior',
                text: "Unlock the potential of machine learning models in marketing to gain valuable insights into your customers' preferences and purchasing patterns. By leveraging these advanced algorithms, you can deliver personalized content and offers, resulting in higher engagement and conversion rates.",
                text2: 'Continue...'
            },

            testimonials: {
                title1: 'At the finishline',
                title2: '"Brand isn`t what we tell about ourself, but what other say about us"'
            },
            cta: {
                title1: 'What are you waiting for?',
                text: 'Arrange a video call with one of our sales partners. Leave your contact information and we will get back to you shortly!',
                title2: 'Would you like to find out more? ',
                text2: 'A simple message with some contact information is a first step. Once the connection is established, we will provide you with all the necessary information.',
            },
            button: {
                start: 'Start with us',
                learn: 'Learn more',
                connect: 'Contact us',
                sub: 'Submit',
            },
            cookies: {
                yes: 'Yeah!',
                no: 'No, thanks',
                text: "This site uses third-party website tracking technologies to provide its services, constantly improve them and display advertisements according to users' interests. I agree to this and can revoke or change my consent at any time with effect for the future.",
            },
            noidea: {
                title: "Still don't know where to start?",
                text: "In our Blog section you can check different Articles about Web, Marketing and Content-Management. We give all effort to insire people to dive into new areas and try new strategies on their own. And of course we would appreciate your interest in our services.",
                button: 'Try here',
            },
            price_work: {
                text1: 'Say "Hello" to our service team... ',
                text2: "So we can get to know each other and talk about your ideas",
                text3: 'Then we draw up a roadmap and confirm the schedule',
                text4: 'From here on you will receive continuous feedback on the process',
            },
            modular: {
                title1: 'Modular',
                title2: 'Solutions',
                text: 'In the fast-paced world of marketing, adaptability is key. Discover the power of modular solutions that let you build and customize your marketing strategy with ease. Say goodbye to one-size-fits-all approaches and hello to a dynamic, tailored marketing arsenal.'
            },
            blog: {
                title: 'Notes and Patches',
                text: 'Are you one of those beautiful minds who want everything their way, no matter what? Here you can find some tools for mancrafting your own marketing solutions.'
            },
            contact: {
                title: 'Connection required!?',
                form: '"Say Hello, ..."',
                button: 'Drop Message',
                response: "Hurray! We'll get in touch with you shortly!"
            },
            how: {
                title: 'How does it work?',
                step1: 'Step 1: Define Use Case and Scope',
                text1: 'We launch the process by understanding your unique needs and goals. Together, we define the scope of the project to ensure a precise and effective marketing data solution tailored to your requirements.',
                step2: 'Step 2: Set Up Cloud Environment',
                text2: 'We create a secure and scalable cloud environment for your data. Our experts connect your data sources to our pipeline, ensuring a smooth and reliable data flow.',
                step3: 'Step 3: Data Processing & Algorithm Specification',
                text3: 'Our team handles data processing with precision. We employ cutting-edge algorithms to target your audience accurately, providing insights that drive successful marketing strategies.',
                step4: 'Step 4: Integration into your Work-Environment',
                text4: 'We integrate our solutions seamlessly into your existing working environment. This ensures that you can leverage our marketing data expertise without disrupting your day-to-day operations.',
                step5: 'Additional Workshops and Training',
                text5: 'We support your team with detailed workshops and training. Learn how to process the data and make informed decisions independently to unlock the full potential of your team.',
            },
            faq: {
                text1: 'If you still have some questions, you can always leave us a message and our cutomer service will get in touch with you.',
                faq1: 'What is Product Targeting in E-Commerce?',
                res1: 'Product targeting is a strategy in e-commerce where specific products are marketed to a selected target audience. This allows for more effective customer engagement and increases sales opportunities.',
                faq2: 'How can I choose the right products for my targeting efforts?',
                res2: 'The selection of the right products depends on your target audience and goals. You should choose products that best align with the needs and interests of your target customers.',
                faq3: 'What Does Organic Growth Mean in Online Marketing?',
                res3: 'Organic growth refers to the continuous expansion of your online presence through non-paid methods such as search engine optimization (SEO) and content marketing. It leads to sustainable visibility and increased website traffic.',
                faq4: ' Why is SEO Optimization important?',
                res4: 'SEO optimization improves the visibility of your company and increases the chances of being found by potential customers. There are many strategies to increase visibility on the internet. Some strategies (such as artificially generated backlinks) can be detrimental to your business. Schedule an online meeting to learn more about SEO.',
                faq5: 'What is ML Modeling of Consumer Behavior?',
                res5: 'ML modeling of consumer behavior uses machine learning to identify patterns in consumer behavior and make predictions. This is helpful for personalized marketing strategies.',
                faq6: 'How can ML modeling of consumer behavior help my business?',
                res6: 'It allows your business to create personalized offers and recommendations that increase customer loyalty and promote revenue growth.',


            },
            news: {
                title: 'Newsletter Subscription',
                text: "Stay informed! Subscribe now to receive the latest updates, industry insights and exclusive offers delivered straight to your inbox. Don't miss out on valuable information and opportunities to enhance your marketing strategies.",
                response: "Thank's! We'll stay in touch... " 
            },
            partner: {
                title: 'Our Partners',
                text1: 'We help brands measure their marketing and product performance. We are best at high-level analytics and automation based on the Google Cloud Platform.',
                text2: 'Use artificial intelligence to improve marketing ROI by making better decisions. We offer MLaaS for marketing organisations to enable the rapid adoption of artifical intelligence for market leaders.',
                text3: '',
            },
            produkt1: {
                name: 'Marketing Automation',
                text: 'If only i could automate that.',
            },
            produkt2: {
                name: 'SEO Optimization',
                text: '"What was that word again?" -We can help you with that...',
            },
            produkt3: {
                name: 'Web Campaign',
                text: 'Inspiring ideas, big impact... Everybody loves that!',
            },
            produkt4: {
                name: 'ML-Modeling',
                text: 'You want something with AI, but private robots are to expensive? Try our cloud solution!',
            },
            produkt5: {
                name: 'Custom Website',
                text: 'Just about to start? We have a perfect set up for your launch.',
            },

          // here we will place our translations...
        }
      },

      de: {
        translation: {
            navigation: {
                service: 'Über uns',
                prices: 'Leistungen',
                blog: 'Blog',
                contact: 'Kontakt',
            },
            hero: {
                title1: ' mit ',
                title2: 'Attitüde!',
                discount: "Rabat für",
                text: "Wir entwickeln Marketingstrategien und optimieren Online-Präsenz, um die Besucherzahlen und Markenbewusstsein zu steigern. Entdecke noch heute, wie Du deine Reichweite erhöhst.",
            },
            business: {
                title1: 'ZIELE SETZEN',
                title2: 'UND LOS!',
                text: 'Unser Marketing- und SEO-Unternehmen hat es sich zur Aufgabe gemacht, deinen digitalen Fußabdruck zu verbessern. Wir sind auf die Entwicklung strategischer Marketingkampagnen und die Optimierung deiner Online-Präsenz spezialisiert. Mit unserem Schwerpunkt auf datengestützten Erkenntnissen und innovativen Strategien helfen wir Dir, sich in der digitalen Landschaft zu behaupten.',
            },
            billing: {
                head1: 'Product Targeting und',
                head2: 'Keyword Analyse',
                text: "Wir optimieren deine Website und Werbekampagnen, um relevante Besucher anzuziehen und einen höheren Ranking bei Suchmaschienen zu erreichen. Dieser Ansatz basiert auf datengesteuerten Algorithmen, um relevante Produkte potenziellen Käufern anzuzeigen.",
            },
            deal: {
                title1: 'Organisches Wachstum',
                title2: 'und SEO-Optimierung',
                text: 'Wenn Du langfristig in deinen Produkt investieren willst, führt kein Weg an SEO-Optimierung und Content Management vorbei. Qualitativ hochwertige Informationen und ein gewisses Maß an Know-how können für eine erstaunliche Web-Performance sorgen, die auf natürlichem Traffic und loyaler Kundschaft basiert.',
            },
            hook: {
                title1: 'ML-Modelle für',
                title2: 'Deine Erfolgsgeschichte',
                text: 'Nutze das Potenzial von AI, um Einblicke in die Vorlieben und Verhaltensmuster deiner Kunden zu bekommen. Unserer Modelle ermöglichen die Bereitstellung personalisierter Inhalte und Angebote, die zum tieferen Engagement und höheren Konversionsraten führen.',
                text2: 'Weiter lesen...'
            },
            testimonials: {
                title1: 'An der Finishlinie',
                title2: '"Eine Marke ist nicht das, was wir über uns selbst erzählen, sonder das, was die Anderen über uns sagen"'
            },
            cta: {
                title1: 'Worauf wartest du noch?',
                text: "Schreibe 'Hallo' und wir werden uns in kürze bei dir melden. Falls du noch Fragen hast, teile sie uns gerne in einer email mit oder rufe uns an!",
                title2: 'Würdest du gerne mehr erfahren?',
                text2: 'Eine einfache Nachricht mit Kontaktinformationen würde vollkommen ausreichen, um eine Verbindung herzustellen. Danach entwickeln wir zusammen eine maßgeschneiderte Lösung, die deinen Anforderungen entspricht.',
            },
            button: {
                start: 'Starte mit uns',
                learn: 'Mehr erfahren',
                connect: 'Mehr erfahren',
                sub: 'Submit',
            },
            cookies: {
                yes: 'Zustimmen',
                no: 'Nein, danke',
                text: 'Diese Seite nutzt Website Tracking-Technologien von Dritten, um ihre Dienste anzubieten, stetig zu verbessern und Werbung entsprechend der Interessen der Nutzer anzuzeigen. Ich bin damit einverstanden und kann meine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder ändern.',
            },
            noidea: {
                title: 'Immer noch auf der Suche nach dem gewissen Etwas?',
                text: 'In unserer Blog-Sektion kannst Du verschiedene Artikel über Web, Marketing und Content-Management lesen. Wir geben uns alle Mühe, Menschen zu motivieren, in neue Bereiche einzutauchen und neue Strategien auszuprobieren. Und natürlich freuen wir uns über dein Interesse an unserem Service.',
                button: 'Versuche es hier',
            },
            price_work: {
                text1: 'Schreibe uns eine kurze Nachricht',
                text2: "Wir treffen uns online und setzen gemeinsame Ziele fest",
                text3: 'Danach erstellen wir einen Fahrplan und bestätigen den zeitlichen Rahmen',
                text4: 'Ab hier bekommst Du kontinüierliches Feedback zum Projektablauf',
            },
            modular: {
                title1: 'Modulare',
                title2: 'Lösungen',
                text: 'In der schnelllebigen Welt des Marketings ist Anpassungsfähigkeit der Schlüssel. Entdecke die Stärke von modularen Lösungen, mit denen Marketingstrategien mühelos aufgebaut und angepasst werden können. Verabschiede dich von allgemeinen Lösungen und begrüße ein dynamisches, maßgeschneidertes Marketing-Arsenal.'
            },
            blog: {
                title: 'Notitzen und Gedanken',
                text: 'Gehörst Du zu den Menschen, die alles nach eigenem Sinn haben wollen? Hier findest Du nützliche Tools zur Entwicklung deiner eigenen Marketing-Lösungen.'
            },
            contact: {
                title: 'Verbindung fällig?!',
                form: 'Schreibe: "Hallo Elijah, ..."',
                button: 'Versenden',
                response: `Danke für die Nachricht, wir melden uns!`,
            },
            how: {
                title: 'Wie funktioniert es?',
                step1: 'Schritt 1: Horizont des Möglichen definieren',
                text1: 'Wir starten den Prozess, indem wir Deine Anforderungen und Ziele verstehen. Gemeinsam definieren wir den Umfang des Projekts, um eine präzise und effektive Marketinglösung nach Deinen Wünschen zu erstellen.',
                step2: 'Schritt 2: Einrichtung einer Cloud-Umgebung',
                text2: 'Wir erstellen eine sichere und skalierbare Cloud-Umgebung für Deine Daten. Unsere Experten verbinden die Daten mit unserer Pipeline, um einen reibungslosen und zuverlässigen Datenfluss zu gewährleisten.',
                step3: 'Schritt 3: Datenverarbeitung & Anpassung der Algorithmen',
                text3: 'Unser Team führt jegliche Analysen durch. Wir verwenden hochmoderne Algorithmen, um Deine Zielgruppe zu identifizieren und Erkenntnisse zu gewinnen, die erfolgreiche Marketingstrategien fördern.',
                step4: 'Schritt 4: Integration in Deine Arbeitsumgebung',
                text4: 'Wir integrieren unsere Lösungen nahtlos in Deine bestehende Arbeitsumgebung. Dadurch hast du einen optimalen Überblick über die wichtigsten KPIs und kannst datengesteuerte Entscheidungen treffen.',
                step5: 'Zusätzliche Workshops und Schulungen',
                text5: 'Wir unterstützen Dein Team mit umfassenden Workshops und Schulungssitzungen. Erfahre mehr über die Möglichkeiten, wie man aus Daten einen Mehrwert gewinnt.',
            },
            faq: {
                text1:'Falls Du immernoch offene Fragen hast, hinterlasse uns eine Nachricht und unser Kundenservice setzt sich mit Dir in Verbindung.',
                faq1: 'Was ist Produkt Targeting im E-Commerce?',
                res1: 'Produkt Targeting ist eine Strategie im E-Commerce, bei der spezifische Produkte gezielt an eine ausgewählte Zielgruppe vermarktet werden. Dies ermöglicht eine effektivere Kundenansprache und erhöht die Verkaufschancen.',
                faq2: 'Wie kann ich die richtigen Produkte für mein Targeting auswählen?',
                res2: 'Die Auswahl der richtigen Produkte hängt von deinen Zielgruppen und Zielen ab. Es sollten Produkte auswählt werden, die den Bedürfnissen und Interessen deiner Zielkunden am besten entsprechen.',
                faq3: 'Was bedeutet organisches Wachstum im Online-Marketing?',
                res3: 'Organisches Wachstum bezieht sich auf das stetige Wachstum deiner Online-Präsenz durch nicht bezahlte Methoden wie Suchmaschinenoptimierung (SEO) und Content-Marketing. Es führt zu nachhaltiger Sichtbarkeit und Traffic-Steigerung.',
                faq4: 'Warum ist SEO-Optimierung wichtig?',
                res4: 'SEO-Optimierung verbessert die Sichtbarkeit Ihres Unternehmens und erhöht die Chancen, von potenziellen Kunden gefunden zu werden. Es gibt viele Strategien, um die Sichtbarkeit im Internet zu erhöhen. Manche Strategien (wie z.B. künstlich erzeugte Backlinks) können Ihrem Unternehmen schaden. Vereinbaren Sie ein Online-Meeting, um mehr über SEO zu erfahren.',
                faq5: 'Was ist ML-Modellierung des Konsumverhaltens?',
                res5: 'Die ML-Modellierung des Konsumverhaltens verwendet maschinelles Lernen, um Muster im Verhalten von Verbrauchern zu identifizieren und Vorhersagen zu treffen. Dies ist hilfreich für personalisierte Marketingstrategien.',
                faq6: 'Wie kann die ML-Modellierung des Konsumverhaltens meinem Unternehmen helfen?',
                res6: 'Sie ermöglicht es Unternehmen, personalisierte Angebote und Empfehlungen zu erstellen, die die Kundenbindung erhöhen und das Umsatzwachstum fördern.',
            },
            news: {
                title: 'Newsletter Abonieren',
                text: 'Bleibe auf dem Laufenden mit unserem Newsletter! Melde Dich jetzt an, um die neuesten Updates, News und exklusive Angebote direkt in Deinen Posteingang zu erhalten.',
                response: "Danke! Wir halten dich auf dem Laufenden..." 
            },
            partner: {
                title: 'Unsere Partner',
                text1: 'Wir helfen Marken, ihre Marketing- und Produktleistung zu messen. Wir sind die besten in High-Level-Analysen und Automatisierung basiert auf der Google Cloud Platform.',
                text2: 'Wir bieten MLaaS für Marketing-Organisationen an, um die schnelle Einführung von künstlicher Intelligenz für Marktführer zu ermöglichen.Nutzen Sie künstliche Intelligenz, um den Marketing-ROI zu verbessern, indem Sie bessere Entscheidungen treffen. ',
                text3: '',
            },
            produkt1: {
                name: 'Marketing Automatisierung',
                text: 'Modern, Datengesteuert, Smart.',
            },
            produkt2: {
                name: 'SEO Optimierung',
                text: '"Wie war nochmal das Wort?" - Wir können dir dabei helfen...',
            },
            produkt3: {
                name: 'Web Kampagne',
                text: 'Inspirierende Idee, große Wirkung... Alle lieben es!',
            },
            produkt4: {
                name: 'ML-Modellierung',
                text: 'Du willst etwas mit AI aber private Roboter sind zu teuer? Probiere unsere Cloud-Lösungen!',
            },
            produkt5: {
                name: 'Maßgeschneiderte Website',
                text: 'Stehst Du kurz vor dem Start? Wir haben ein perfektes Set-up für dich.',
            },
        }
      }
    }
  });

export default i18n;