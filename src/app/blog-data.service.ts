import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getPosts(){
    return [
      {
        id: '1',
        title: 'TikTok lança ferramenta que imita rede social BeReal',
        body: 'Alguns meses atrás me deparei com noticias de uma nova rede social que funciona de uma maneira um tanto quanto diferente. Enquanto as outras redes sociais estão cada vez mais entregando conteúdos engessados, que distoam e muito da realidade, a BeReal tinha uma proposta totalmente contrária e que eu cheguei a desacreditar, no início.\n\nPelo que me lembro ter lido na época, ele funcionava assim:\n\nO aplicativo enviava um alerta para o celular dos usuários em um horário aleatório e eles teriam que registrar o que estivessem fazendo naquele momento e postar num intervalo de 2 minutos, se minha memória não falha. Fora desses intervalos de tempo não seria possível postar nada. Na época até baixei o app mas acabei esquecendo de criar um perfil, até enfim desinstalá-lo do celular.\n\nAté que hoje, vendo meu feed do tiktok acabei me deparando com um anúncio me chamando para testar o TikTok Now, uma nova ferramenta que é o BeReal "cag*do e cuspido. Também não baixei o app (ao menos não ainda). Mas achei interessante a decisão do TIkTok de fazer basicamente o que todas as outras grandes redes sociais já vinham fazendo há anos, que é copiar o seu concorrente. \n\nTwitter tem o Spaces, o Spotify tem o Green House, ambas alternativas ao ClubHouse que viralizou ano passado e desde então nunca mais ouvi falar.\n\nA Meta então, nem se fala. Foi a primeira a adotar e popularizar essas práticas quando não conseguiu comprar o Snapchat e lançou os Stories, o mesmo com o mais recente Reels que copia o TikTok. Ainda tivemos o Youtube com o Shorts, e praticamente todas as outras redes sociais existentes, das conhecidas às mais desconhecidas, adotando o formato de videos do tiktok, fenômeno que começou a ser chamado de "tiktokzação" das coisas.\n\nEnfim, essa discussão já é antiga mas acho interessante trazê-la à tona novamente. O quanto vocês acham que essas práticas podem impactar o avanço das tecnologias de midias sociais? Se os "grandões" sempre podem adquirir uma empresa nova no ramo, ou simplesmente copiar a função mais popular do concorrente ou até o seu formato inteiro de interação na plataforma? \n\nSó consigo me lembrar de uma rede social que conseguiu vencer esse sistema e continuar mais popular que os concorrentes, que é justamente o TikTok. Snapchat, Clubhouse, e possivelmente agora o BeReal, que surgiram antes como redes alternativas e foram copiados, acabaram no esquecimento. É mais fácil para o usuário adotar uma nova função na rede social que ele já utiliza que baixar um novo app e começar tudo do zero. \n\nAdotando essa prática, já podemos esperar que o TikTok se assemelhe mais e mais à Meta, e possivelmente ocupando sua posição de "A gigante das midias sociais" que esmaga qualquer chance de outra alternativa aos seus serviços surgir? Lembrando que eles já usaram a carta de "reverse" e copiaram os Stories do Instagram.',
        img: 'https://t.ctcdn.com.br/Qzp_WkmgfHSvePhD-DMMK3QVA6U=/512x288/smart/filters:format(webp)/i600143.jpeg',
      },
      {
        id: '2',
        title: 'Vulnerabilidade antiga no Python atingiria mais de 350 mil projetos',
        body: 'A falha está presente em códigos que utilizam a função `tarfile.extractall()` ou  `tarfile.extract()` de forma não-sanitizada, **permitindo que um invasor sobrescreva arquivos arbitrariamente**.\n\nO problema foi divulgado em 2007 ([CVE-2007-4559](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-4559)), mas **nunca recebeu um patch** – a única atenuação oferecida foi uma atualização na documentação alertando desenvolvedores sobre o risco.\n\nEmbora não haver relatos de ataques através do bug, ele representa um risco do tipo [supply chain](https://en.wikipedia.org/wiki/Supply_chain_attack). na cadeia de fornecimento de software.\n\nPesquisadores da Trellix [redescobriram a vulnerabilidade recentemente](https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/tarfile-exploiting-the-world.html) e estaria presente em milhares de projetos de software, tanto de código aberto quanto fechado.',
        img: 'https://programadoresbrasil.com.br/wp-content/uploads/2021/04/rxezjyf4ojx41.png',
      },
      {
        id: '3',
        title: "MFA Fatigue: a nova tática favorita dos hackers em violações de alto perfil",
        body: "Para acessar VPNs e redes internas corporativas, os hackers geralmente usam credenciais de login de funcionários roubadas. O que, hoje em dia, está longe de ser difícil de conseguir.\n\nAgentes de ameaças podem usar vários métodos, incluindo ataques de phishing, malware, credenciais vazadas em violações de dados ou a compra em mercados da dark web.\n\nPor conta disso, as empresas têm adotado cada vez mais a autenticação multifator - algo que impede que os usuários façam login em uma rede sem passar por uma etapa de verificação adicional.\n\nHackers podem usar vários métodos para contornar a autenticação multifator, mas a maioria gira em torno do roubo de cookies por meio de malware ou estruturas de ataque de phishing man-in-the-middle, como evilginx2.\n\nAgora, uma nova técnica de engenharia social chamada “MFA Fatigue”, também conhecida como “MFA push spam”, está se tornando mais popular entre cibercriminosos, pois não requer infraestrutura de malware ou phishing e provou ser bem-sucedida em diversos ataques.\n\nUm ataque de MFA Fatigue pode ocorrer quando a autenticação multifator de uma organização é configurada para usar notificações por push no dispositivo móvel dos funcionários. \n\nNesses casos, agentes de ameaça executam um script que tenta fazer login com credenciais roubadas repetidamente, criando um fluxo interminável de notificações solicitando que o usuário verifique a tentativa de login.\n\nUma demonstração pode ser conferida [neste vídeo](https://www.youtube.com/watch?v=auGdUGIqESU) criado pela empresa de suporte de segurança cibernética Reformed IT.\n\nO objetivo é manter isso dia e noite, para quebrar a postura de segurança cibernética do alvo e infligir uma sensação de fadiga. Os alvos ficam tão sobrecarregados que podem clicar acidentalmente no botão “aprovar” ou simplesmente aceitar a solicitação de MFA para interromper as notificações.\n\nEm muitos casos, os criminosos também entram em contato com a vítima por e-mail, mensagem ou telefone, fingindo ser do suporte de TI para convencê-la a aceitar a solicitação.\n\nEssa técnica provou ser muito eficaz pelos agentes de ameaças Lapsus$ e Yanluowang, em ataques que violaram organizações grandes e conhecidas, como [Microsoft](https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-they-were-hacked-by-lapsus-extortion-group/),  [Cisco](https://www.bleepingcomputer.com/news/security/cisco-hacked-by-yanluowang-ransomware-gang-28gb-allegedly-stolen/) e, agora, a [Uber](https://www.bleepingcomputer.com/news/security/uber-hacked-internal-systems-breached-and-vulnerability-reports-stolen/).\n\nProfissionais de segurança recomendam que as empresas desabilitem as notificações de MFA por push ou, se isso não for possível, habilitem o recurso de correspondência de números por um aplicativo autenticador.",
        img: 'https://www.bleepstatic.com/content/hl-images/2022/09/19/MFA.jpg'
      },
      {
        id: '4',
        title: "Atenção: Vazamento em massa de chaves PIX!",
        body: "O Banco Central (BC) comunicou na sexta-feira (16) o vazamento dos dados de 137,3 mil chaves Pix. Os clientes afetados são da conta digital Abastece-aí, que opera em parceria com a BV Financeira.\n\nDe acordo com a autoridade financeira, os dados vazados referem-se apenas a informações cadastrais, ou seja, não há risco de movimentação de dinheiro nas contas. Isso porque os dados protegidos pelo sigilo bancário — extratos, saldos e senhas — não foram afetados.",
        img: 'https://tm.ibxk.com.br/2022/09/19/19125332044174.jpg?ims=1120x420'
      },
      {
        id: '5',
        title: "Facebook comprovadamente afeta negativamente a saúde mental",
        body: "Foi publicado o primeiro estudo que consegue estabelecer **causalidade** entre o uso do **Facebook** e piora na **ansiedade** e **depressão** entre estudantes universitários, o link está na Fonte, mas o coração do conteúdo é este:\n\n> \"Nós levantamos a hipótese de que comparações sociais desfavoráveis poderiam explicar os efeitos que encontramos, e que os alunos mais suscetíveis a tais comparações eram mais propensos a sofrer efeitos negativos.\"\n\nFora isso, mais para o fim do artigo outra coisa me chamou atenção:\n\n> \"Também encontramos evidências de que o Facebook havia mudado as crenças dos alunos sobre seus colegas\" ... \"Mais estudantes acreditavam que outros consumiam mais álcool, embora o consumo de álcool não tenha mudado significativamente\".\n\nOu seja, não somente a comparação nesta intensidade está fazendo mal, como também **deformando a realidade**.\n\nPara quem se interessar no assunto, sugiro também ler [a discussão no Hacker News](https://news.ycombinator.com/item?id=32938622).",
        img: 'https://t.ctcdn.com.br/ga5ZqVdvrf0a0qXqlKDJDR-5-y4=/1400x788/smart/i597639.jpeg',
      },
      {
        id: '6',
        title: "Preços de GPUs não vão baixar e a Lei de Moore está morta, diz Nvidia",
        body: "No início desta semana, a Nvidia [anunciou](https://www.eurogamer.net/digitalfoundry-2022-nvidia-announces-rtx-4090-and-4080-graphics-cards-dlss-3) sua próxima série de placas GeForce RTX - e despertou críticas em relação aos preços.\n\nPara a RTX 4090, o valor será R$ 14.999, enquanto a RTX 4080 16GB custará R$ 10.999 e a RTX 4080 12GB, R$ 8.199.\n\nMuitos esperavam preços mais baixos, mas, de acordo com o chefe da Nvidia, Jensen Huang, esses números refletem um mundo onde a Lei de Moore já não é mais válida.\n\nA lei, que foi criada por Gordon Earl Moore - um dos fundadores da Intel - em 1965, diz que o número de transistores dos chips teria um aumento de 100%, pelo mesmo custo, a cada dois anos.\n\nConforme relatado pela [Digital Trends](https://www.digitaltrends.com/computing/nvidia-says-falling-gpu-prices-are-over/), Huang afirmou que “a Lei de Moore está morta”: \"uma wafer de 12 polegadas é muito mais cara hoje. A ideia de que o chip ficará mais barato é algo do passado”.\n\n![uma foto de uma placa RTX 4090 vista de cima](https://assets.reedpopcdn.com/rtx-4090-where-to-buy.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/rtx-4090-where-to-buy.jpg) \n\nA 4090 e a 4080 são as primeiras GPUs da série “Ada Lovelace” da empresa e devem ser até duas vezes mais rápidas que as da geração passada em jogos rasterizados - e até quatro vezes mais rápidas em jogos ray-traced. Uma demonstração pode ser conferida neste [trailer teaser](https://www.youtube.com/watch?v=qyGWFI1cuZQ).",
        img: 'https://assets.reedpopcdn.com/rtx-4090-where-to-buy.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/rtx-4090-where-to-buy.jpg'
      },
      {
        id: '7',
        title: "Após restabelecimento dos sistemas, hackers voltam a atacar Golden Cross",
        body: "Após a operadora de planos de saúde afirmar que estava **normalizando ”gradualmente“** suas operações, a **página de atendimento presencial foi invadida**, ameaçando o vazamento de dados de clientes.\n\nNo local do logotipo da **Golden Cross** na página, os hackers colocaram a frase “Just another :D”, algo como “Apenas outra risada”.\n\n![Nota na página invadida pelos hackers](https://i.imgur.com/50b7YYx.png)\n*Nota na página invadida pelos hackers.*",
        img: 'https://atendimentohoje.com/wp-content/uploads/2020/02/Golden-Cross-Telefone.jpg'
      },
      {
        id: '8',
        title: "Shutterstock está removendo imagens geradas por IA de sua base",
        body: "Artistas estavam utilizando o banco de imagens para monetizar criações realizadas através de ferramentas como **Midjourney**, **DALL-E** e **Stable Diffusion**.\n\nO aparecimento de imagens geradas algoritmicamente em sites desse tipo é especialmente irônico, dado que algumas dessas ferramentas utilizam imagens desses próprios sites para treinamento.",
        img: 'https://www.canalautismo.com.br/wp-content/uploads/2022/07/shutterstock.png'
      },
      {
        id: '9',
        title: "Microsoft corrige novo bug de zero-day que afeta todas as versões do Windows",
        body: "O bug de zero-day, rastreado como CVE-2022-37969, é descrito como uma falha de elevação de privilégio no Windows Common Log File System Driver, um subsistema usado para o registro de dados e eventos. O bug permite que um invasor obtenha o nível mais alto de acesso, conhecido como privilégios de sistema, a um dispositivo vulnerável.\n\nSegundo a Microsoft, os usuários que utilizam o Windows 11 e versões anteriores, o Windows Server 2008 e o Windows Server 2012 estão afetados. Todas as versões receberão patches de segurança, incluindo o Windows 7 - que parou de receber suporte em 2020.\n\nA empresa também esclareceu que a falha exige que um invasor já tenha acesso a um dispositivo comprometido ou tenha a capacidade de executar códigos no sistema de destino.\n\nAs correções chegaram como parte do lançamento mensal regular de correções de segurança da Microsoft - apelidado de Patch Tuesday -, que incluiu um total de 63 vulnerabilidades em vários produtos da Microsoft, incluindo Microsoft Edge, Office e Windows Defender.\n\nDentre elas, houve também o lançamento de patches para uma segunda falha de zero-day (rastreada como CVE-2022-23960) descrita como uma vulnerabilidade de especulação de cache conhecida como “Spectre-BHB” e que afeta o Windows 11 para sistemas baseados em ARM.",
        img: 'https://www.meioemensagem.com.br/wp-content/uploads/2022/03/Microsoft-shutterstock_520693948.jpg'
      },
      {
        id: '10',
        title: "Ethereum ativa “The Merge”, transformando-se em uma blockchain proof-of-stake",
        body: "A atualização ocorreu às 3:44 AM desta quinta-feira (2022-09-15 6:44 AM UTC).\n\nEstima-se que a transição irá **reduzir o consumo de energia** da rede em **99%**.\n\nO **“The Merge”** também reduzirá a emissão de ETH em cerca de 90%.\n\nA mudança agora torna a moeda digital **compatível com diretrizes ESG**, aumentando o apetite de outras empresas a participarem de projetos **DeFi** e **NFTs**.",
        img: 'https://portalmakingof.com.br/wp-content/uploads/2022/08/ethereum-2-the-merge-transition-to-proof-of-stake.png'
      },
      {
        id: '11',
        title: "Meta anuncia a PyTorch Foundation",
        body: "A governança do framework de deep learning agora passa a ser através de uma [organização independente](https://ai.facebook.com/blog/pytorch-foundation/) como parte da **Linux Foundation**, sem fins lucrativos – o conselho administrativo inclui representantes da **Nvidia**, **Meta**, **Google**, **Microsoft**, **Amazon** e **AMD**.\n\nO **PyTorch** é amplamente utilizado em projetos de deep learning, especialmente em linguagem natural e visão computacional – o sistema [**Tesla Autopilot**](https://www.youtube.com/watch?v=oBklltKXtDE) é baseado no framework.",
        img: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/202877783/original/71d02066ee0774e5432868c74f232795be9e74ca.png'
      },
      {
        id: '12',
        title: "Linux Foundation anuncia a OpenWallet Foundation para desenvolver carteiras digitais interoperáveis",
        body: "A missão da OWF é desenvolver uma **engine de código aberto**, segura e multiuso que qualquer pessoa possa usar para construir carteiras interoperáveis para o armazenamento de **identidades tokenizadas**, **dinheiro**, **chaves digitais** ou outros objetos.\n\nA intenção é **facilitar a criação de aplicativos** para **competir** com carteira proprietárias como as embutidas nos dispositivos da **Apple** e **Google**.",
        img: 'https://sempreupdate.com.br/wp-content/uploads/2022/09/linux-foundation-lanca-openwallet-foundation-owf-alternativas-ao-google-play-e-apple-pay.jpg'
      }
    ]
  }

}
