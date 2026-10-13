(function () {
  if (window.CCI18N) return;
  const D = {
    // Shared
    "Home": "Accueil",
    "About": "À propos",
    "Our Approach": "Notre approche",
    "Book a call": "Réserver un appel",
    "Let’s Talk": "Discutons",
    "Middle East": "Moyen-Orient",
    "Canada · France · Middle East": "Canada · France · Moyen-Orient",
    "Canada · France · Middle East · © 2026 CEM Connect": "Canada · France · Moyen-Orient · © 2026 CEM Connect",

    // Home
    "Smarter business.": "Une entreprise plus efficace.",
    "Less complexity.": "Moins de complexité.",
    "Better experiences.": "Des clients mieux servis.",
    "We help businesses uncover AI opportunities, improve efficiency and rethink customer experiences with practical strategies built for real-world challenges.": "Nous aidons les entreprises à tirer parti de l’IA, à gagner en efficacité et à repenser l’expérience client, avec des solutions concrètes, pensées pour leur réalité.",
    "Explore Our Services": "Découvrir nos services",
    "Sound familiar?": "Ces situations vous parlent ?",
    "We start where it costs you most.": "Nous partons de ce qui vous freine le plus.",
    "Real problems, not technology for its own sake.": "Des enjeux concrets, pas de la technologie pour la technologie.",
    "Rising operational costs": "Des coûts opérationnels en hausse",
    "Efficiency": "Efficacité",
    "Repetitive manual processes": "Trop de tâches manuelles et répétitives",
    "AI adoption": "Adoption de l’IA",
    "Workflows that slow teams down": "Des processus qui freinent vos équipes",
    "Friction in customer journeys": "Des points de friction dans le parcours client",
    "Customer experience": "Expérience client",
    "Not sure where to start with AI": "L’IA, mais par où commencer ?",
    "AI strategy": "Stratégie IA",
    "Our Expertise": "Notre expertise",
    "Two areas.": "Deux expertises.",
    "Real business impact.": "Un impact concret.",
    "All services": "Tous les services",
    "Less manual work.": "Moins de tâches manuelles.",
    "More efficiency.": "Plus d’efficacité.",
    "Identify where AI can simplify operations, reduce inefficiencies and support your teams.": "Identifiez où l’IA peut simplifier vos opérations, réduire les inefficacités et accompagner vos équipes.",
    "Explore AI Adoption": "Découvrir l’adoption de l’IA",
    "Better journeys.": "Des parcours plus fluides.",
    "Understand customer pain points, simplify interactions and improve the journeys that matter.": "Identifiez les points de friction, simplifiez les interactions et améliorez les parcours qui comptent pour vos clients.",
    "Explore CX Transformation": "Découvrir la transformation CX",
    "From business challenges": "Du constat",
    "to action.": "à l’action.",
    "We work closely with your team to identify opportunities, set clear priorities and support the next steps.": "Nous travaillons main dans la main avec vos équipes pour repérer les opportunités, fixer les bonnes priorités et passer à l’action.",
    "Discover": "Comprendre",
    "Strategize": "Définir",
    "Transform": "Transformer",
    "Enable": "Accompagner",
    "Understand": "Analyser",
    "Prioritize": "Prioriser",
    "Act": "Agir",
    "Adopt": "S’approprier",
    "Discover Our Approach": "Découvrir notre approche",
    "Cross-Market Perspective": "Perspective multimarché",
    "Across markets, connected by experience.": "Plusieurs marchés, une même expérience.",
    "Bringing a cross-market perspective to AI adoption and customer experience transformation.": "Un regard nourri par plusieurs marchés, au service de l’adoption de l’IA et de l’expérience client.",
    "Let’s find your": "Trouvons ensemble",
    "quickest win.": "par où commencer.",
    "A 30-minute call to talk through your priorities and where to start.": "30 minutes pour faire le point sur vos priorités et définir les premières étapes.",

    // Services
    "Two areas of expertise.": "Deux domaines d’expertise.",
    "Built around": "Au service de",
    "your business.": "votre entreprise.",
    "CEM Connect helps organizations adopt AI with purpose and transform customer experiences through practical strategy, clear priorities and actionable guidance.": "CEM Connect aide les organisations à adopter l’IA de façon réfléchie et à transformer leur expérience client, avec une stratégie pragmatique, des priorités claires et des conseils directement applicables.",
    "AI Adoption & Strategy": "Adoption et stratégie IA",
    "Customer Experience Transformation": "Transformation de l’expérience client",
    "01 AI Adoption & Strategy": "01 — Adoption et stratégie IA",
    "02 Customer Experience Transformation": "02 — Transformation de l’expérience client",
    "Make AI practical for your business.": "Rendre l’IA concrète pour votre organisation.",
    "AI creates opportunities across the business — but meaningful adoption starts with understanding where it can actually make a difference.": "L’IA ouvre des possibilités partout dans l’organisation — mais une adoption réussie commence par savoir où elle peut vraiment faire la différence.",
    "We help organizations assess their readiness, identify relevant use cases and build a practical path toward AI adoption that aligns with their business priorities and teams.": "Nous aidons les organisations à évaluer leur maturité, à identifier les usages pertinents et à construire un chemin réaliste vers l’adoption de l’IA, en phase avec leurs priorités et leurs équipes.",
    "Key outputs": "Livrables clés",
    "AI Readiness & Opportunity Assessment": "Évaluation de la maturité et des opportunités IA",
    "Understand where your organization stands today and where AI could create meaningful value.": "Savoir où en est votre organisation aujourd’hui et où l’IA peut réellement créer de la valeur.",
    "We assess current AI usage, business processes, organizational readiness and potential use cases to identify the most relevant opportunities and priorities.": "Nous analysons vos usages actuels de l’IA, vos processus, la maturité de votre organisation et les cas d’usage possibles pour faire ressortir les opportunités et priorités les plus pertinentes.",
    "AI readiness overview": "État des lieux de la maturité IA",
    "Business process observations": "Analyse des processus",
    "Prioritized AI opportunities": "Opportunités IA priorisées",
    "Recommended next steps": "Prochaines étapes recommandées",
    "AI Strategy & Roadmap": "Stratégie et feuille de route IA",
    "Turn identified opportunities into a clear and realistic path forward.": "Transformer les opportunités identifiées en une trajectoire claire et réaliste.",
    "We help define AI priorities, evaluate potential approaches and structure an actionable adoption roadmap aligned with business objectives and organizational capacity.": "Nous vous aidons à définir vos priorités, à comparer les approches possibles et à bâtir une feuille de route d’adoption réaliste, alignée sur vos objectifs et vos capacités.",
    "Prioritized AI initiatives": "Initiatives IA priorisées",
    "AI adoption roadmap": "Feuille de route d’adoption de l’IA",
    "Recommended tools and approaches": "Outils et approches recommandés",
    "Implementation priorities": "Priorités de mise en œuvre",
    "AI Training & Adoption": "Formation et adoption de l’IA",
    "Help teams understand how AI can support their work and build confidence using it responsibly.": "Aider les équipes à comprendre ce que l’IA peut apporter à leur travail et à l’utiliser en confiance, de façon responsable.",
    "We deliver practical training and adoption support tailored to business needs, roles and real workplace use cases.": "Nous proposons des formations pratiques et un accompagnement adaptés à vos besoins, aux différents métiers et aux situations réelles de travail.",
    "Practical AI workshops": "Ateliers pratiques sur l’IA",
    "Role-relevant use cases": "Cas d’usage par métier",
    "Usage guidance": "Bonnes pratiques d’utilisation",
    "Adoption recommendations": "Recommandations d’adoption",
    "AI Adoption Program": "Programme d’adoption de l’IA",
    "A structured path from exploration to adoption.": "De l’exploration à l’adoption, un parcours structuré.",
    "For organizations looking for more comprehensive support, the CEM Connect AI Adoption Program brings assessment, opportunity identification, strategy and team enablement into one structured engagement.": "Pour les organisations qui souhaitent un accompagnement complet, le Programme d’adoption de l’IA de CEM Connect réunit diagnostic, identification des opportunités, stratégie et montée en compétences des équipes au sein d’une même mission.",
    "Assess": "Évaluer",
    "Identify": "Identifier",
    "Understand the organization, current processes, AI usage and readiness.": "Comprendre l’organisation, ses processus, ses usages de l’IA et sa maturité.",
    "Identify and prioritize practical AI opportunities based on business needs.": "Repérer et hiérarchiser les opportunités de l’IA les plus utiles pour votre activité.",
    "Translate opportunities into clear priorities and an actionable adoption roadmap.": "Traduire les opportunités en priorités claires et en une feuille de route réaliste.",
    "Build team confidence through practical training, guidance and adoption support.": "Donner confiance aux équipes par la formation, le conseil et un accompagnement au quotidien.",
    "Discuss Your AI Priorities": "Parlons de vos priorités IA",
    "Better experiences start with understanding the journey.": "Une meilleure expérience commence par la compréhension du parcours.",
    "Great customer experiences are built by understanding where customers struggle, what they expect and how the business can respond.": "Une expérience client réussie se construit en comprenant où vos clients rencontrent des difficultés, ce qu’ils attendent et comment y répondre.",
    "We help organizations uncover friction across customer journeys and translate insights into practical transformation priorities.": "Nous aidons les organisations à mettre en lumière les points de friction de leurs parcours clients et à en tirer des priorités d’action concrètes.",
    "Customer Experience Assessment": "Évaluation de l’expérience client",
    "Build a clearer understanding of the current customer experience and where improvement matters most.": "Avoir une vision claire de l’expérience client actuelle et des améliorations prioritaires.",
    "We review key interactions, customer journeys and experience gaps to identify friction and opportunities for improvement.": "Nous analysons les moments clés, les parcours et les écarts d’expérience pour identifier les points de friction et les pistes d’amélioration.",
    "Customer experience assessment": "Évaluation de l’expérience client",
    "Key pain points and friction": "Principaux points de friction",
    "Experience improvement opportunities": "Pistes d’amélioration de l’expérience",
    "Prioritized recommendations": "Recommandations priorisées",
    "Customer Journey Transformation": "Transformation des parcours clients",
    "Turn customer insights into better journeys and more intuitive experiences.": "Faire de la connaissance client des parcours plus fluides et plus intuitifs.",
    "We help organizations map and rethink customer journeys, identify improvement opportunities and define future-state experiences aligned with customer and business needs.": "Nous aidons les organisations à cartographier et repenser leurs parcours clients, à identifier les pistes d’amélioration et à définir l’expérience cible, en conciliant attentes des clients et objectifs de l’organisation.",
    "Current-state journey analysis": "Analyse du parcours actuel",
    "Future-state customer journeys": "Parcours clients cibles",
    "Improvement opportunities": "Pistes d’amélioration",
    "Transformation roadmap": "Feuille de route de transformation",
    "CX & Digital Project Management": "Gestion de projets CX et numériques",
    "Turn transformation priorities into structured initiatives.": "Transformer les priorités en projets structurés.",
    "We support CX and digital transformation projects through business requirements, prioritization, stakeholder coordination and delivery oversight.": "Nous accompagnons vos projets CX et digitaux : expression des besoins, priorisation, coordination des parties prenantes et suivi de la mise en œuvre.",
    "Business requirements": "Expression des besoins",
    "Project priorities and roadmap": "Priorités et feuille de route du projet",
    "Stakeholder coordination": "Coordination des parties prenantes",
    "Delivery support": "Suivi de la mise en œuvre",
    "Where we can help": "Nos champs d’intervention",
    "From friction to better experiences.": "Moins de friction, de meilleures expériences.",
    "Customer Journeys": "Parcours clients",
    "Digital Onboarding": "Intégration des nouveaux clients",
    "Service Experiences": "Expériences de service",
    "Digital Products": "Produits numériques",
    "Process Improvement": "Amélioration des processus",
    "Start with the challenge.": "Parlons de vos priorités.",
    "Whether you’re exploring how AI could support your organization or looking to improve a customer journey, we start by understanding the business challenge first.": "Que vous exploriez ce que l’IA peut apporter à votre organisation ou souhaitiez améliorer un parcours client, nous commençons toujours par comprendre votre enjeu.",

    // Approach
    "From challenge to": "De l’enjeu à",
    "action.": "l’action.",
    "We start with the business challenge — not the technology. Our approach combines insight, strategy and practical guidance to help organizations move from understanding what needs to change to making it happen.": "Nous partons de votre enjeu — pas de la technologie. Notre approche allie analyse, stratégie et accompagnement concret pour vous aider à passer de ce qui doit changer à ce qui change vraiment.",
    "How we work": "Notre façon de travailler",
    "A practical approach to transformation.": "Une approche pragmatique de la transformation.",
    "Every engagement is different, but our way of working follows the same principle: understand first, prioritize what matters and turn recommendations into practical action.": "Chaque mission est différente, mais notre principe reste le même : comprendre d’abord, se concentrer sur l’essentiel et transformer les recommandations en actions concrètes.",
    "Our methodology": "Notre méthodologie",
    "Understand before acting.": "Comprendre avant d’agir.",
    "We begin by understanding the business context, current processes, customer needs, team realities and transformation priorities.": "Nous commençons par comprendre votre contexte, vos processus, les besoins de vos clients, la réalité de vos équipes et vos priorités.",
    "Business objectives": "Objectifs de l’organisation",
    "Current processes": "Processus actuels",
    "Customer and employee needs": "Besoins des clients et des employés",
    "Challenges and friction": "Difficultés et points de friction",
    "Existing tools and ways of working": "Outils et façons de travailler existants",
    "Turn insight into direction.": "Donner un cap.",
    "We translate what we learn into clear priorities, practical recommendations and an actionable path forward.": "Nous traduisons ce que nous avons appris en priorités claires, en recommandations concrètes et en une feuille de route réaliste.",
    "Opportunity identification": "Identification des opportunités",
    "Prioritization": "Priorisation",
    "Recommendations": "Recommandations",
    "Future-state direction": "Vision cible",
    "Actionable roadmap": "Feuille de route opérationnelle",
    "Move from plans to action.": "Passer du plan à l’action.",
    "We support transformation initiatives by helping structure requirements, align stakeholders, coordinate priorities and guide projects through execution.": "Nous accompagnons vos projets de transformation : structurer les besoins, aligner les parties prenantes, coordonner les priorités et guider la mise en œuvre.",
    "Project planning": "Planification de projet",
    "Stakeholder alignment": "Alignement des parties prenantes",
    "Implementation coordination": "Coordination de la mise en œuvre",
    "Delivery guidance": "Pilotage de la mise en œuvre",
    "Build capability for lasting change.": "Ancrer le changement dans la durée.",
    "Transformation only creates value when people can adopt it. We help teams build the knowledge, confidence and ways of working needed to sustain change.": "Une transformation ne crée de la valeur que si les équipes se l’approprient. Nous les aidons à développer les connaissances, la confiance et les réflexes nécessaires pour la faire durer.",
    "Practical training": "Formation pratique",
    "Team enablement": "Montée en compétences",
    "Adoption support": "Accompagnement à l’adoption",
    "Knowledge transfer": "Transfert de connaissances",
    "Continuous improvement": "Amélioration continue",
    "How we partner": "Notre façon de collaborer",
    "Built to work with your team.": "Aux côtés de vos équipes.",
    "We work alongside your teams throughout the engagement — bringing structure, outside perspective and practical guidance while keeping your people close to the decisions that shape the transformation.": "Nous travaillons avec vos équipes tout au long de la mission — en apportant méthode, regard extérieur et conseils concrets, tout en les gardant au cœur des décisions qui façonnent la transformation.",
    "Collaborative": "Collaboratif",
    "We work with the people closest to the challenge, bringing together the right perspectives throughout the engagement.": "Nous travaillons avec les personnes au plus près de l’enjeu, en réunissant les bons points de vue tout au long de la mission.",
    "Practical": "Pragmatique",
    "Recommendations are designed around your organization’s reality, resources and priorities — not theoretical frameworks.": "Nos recommandations partent de votre réalité, de vos ressources et de vos priorités — pas de modèles théoriques.",
    "Flexible": "Flexible",
    "The scope and level of support adapt to the challenge, whether you need focused guidance or support across a broader transformation initiative.": "Le périmètre et le niveau d’accompagnement s’adaptent à votre besoin, d’un conseil ciblé à un soutien sur un projet de transformation plus large.",
    "What you can expect": "Ce que vous obtenez",
    "Clarity at every step.": "De la clarté à chaque étape.",
    "Clear priorities": "Des priorités claires",
    "Actionable recommendations": "Des recommandations concrètes",
    "Structured roadmaps": "Des feuilles de route structurées",
    "Hands-on guidance": "Un accompagnement concret",
    "Tell us what you’re trying to improve, explore or transform. We’ll start by understanding where you are today.": "Dites-nous ce que vous souhaitez améliorer, explorer ou transformer. Nous commencerons par comprendre où vous en êtes.",

    // About
    "About CEM Connect": "À propos de CEM Connect",
    "Consulting built around": "Un conseil au service de",
    "CEM Connect is an independent consulting practice focused on AI adoption and customer experience transformation.": "CEM Connect est un cabinet de conseil indépendant spécialisé dans l’adoption de l’IA et la transformation de l’expérience client.",
    "Close collaboration.": "Une collaboration étroite.",
    "Practical support.": "Un accompagnement concret.",
    "We believe consulting works best when it stays close to the business. That’s why every engagement is built around direct collaboration, with a consultant working closely alongside your team from understanding the challenge to shaping the way forward.": "Nous sommes convaincus qu’un bon conseil reste au plus près du terrain. C’est pourquoi chaque mission repose sur une collaboration directe : un consultant travaille aux côtés de votre équipe, de la compréhension de l’enjeu jusqu’à la définition de la suite.",
    "Cross-market perspective": "Perspective multimarché",
    "A perspective shaped across markets.": "Un regard forgé sur plusieurs marchés.",
    "Drawing on experience across Canada, France and the Middle East, CEM Connect approaches each organization with a clear understanding of its market, its customers and the way it operates.": "Une expérience acquise au Canada, en France et au Moyen-Orient, qui permet à CEM Connect d’aborder chaque organisation en tenant compte de son marché, de ses clients et de son fonctionnement.",
    "Let’s start a conversation.": "Parlons-en.",
    "Tell us what you’re looking to improve, explore or transform.": "Dites-nous ce que vous souhaitez améliorer, explorer ou transformer.",

    // Contact
    "Start with a": "Tout commence par une",
    "conversation.": "conversation.",
    "Tell us what you’re working on, what you’re exploring or where you need support.": "Parlez-nous de vos projets, de vos réflexions ou des sujets sur lesquels vous avez besoin d’aide.",
    "Book a discovery call.": "Réservez un premier échange.",
    "A 30-minute conversation to discuss your priorities and explore how CEM Connect could support you.": "30 minutes pour parler de vos priorités et voir comment CEM Connect peut vous accompagner.",
    "Prefer email?": "Vous préférez écrire ?",
    "Send us a note and we’ll get back to you.": "Envoyez-nous un message, nous vous répondrons rapidement."
  };
  const norm = s => s.replace(/\s+/g, ' ').trim().toLowerCase();
  const map = new Map();
  for (const k in D) map.set(norm(k), D[k]);
  const orig = new WeakMap();
  const touched = new Set();
  let cur = 'en', mo = null, root = null;
  function tx(node) {
    const o = orig.has(node) ? orig.get(node) : node.nodeValue;
    const pe = node.parentElement;
    const fr = (pe && pe.hasAttribute('data-fr') && norm(o)) ? pe.getAttribute('data-fr') : map.get(norm(o));
    if (fr === undefined) return;
    if (!orig.has(node)) { orig.set(node, o); touched.add(node); }
    const v = o.match(/^\s*/)[0] + fr + o.match(/\s*$/)[0];
    if (node.nodeValue !== v) node.nodeValue = v;
  }
  function walk(el) {
    if (el.nodeType === 3) return tx(el);
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) tx(n);
  }
  function apply(r, lang) {
    root = r || document.body; cur = lang;
    document.documentElement.lang = lang;
    if (lang === 'fr') {
      walk(root);
      if (!mo) {
        mo = new MutationObserver(ms => { if (cur !== 'fr') return; ms.forEach(m => m.addedNodes.forEach(a => (a.nodeType === 1 || a.nodeType === 3) && walk(a))); });
        mo.observe(root, { childList: true, subtree: true });
      }
    } else {
      if (mo) { mo.disconnect(); mo = null; }
      touched.forEach(n => { if (orig.has(n)) { n.nodeValue = orig.get(n); orig.delete(n); } });
      touched.clear();
    }
  }
  window.CCI18N = { apply };
})();
