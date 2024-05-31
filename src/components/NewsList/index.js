import React, {useEffect} from 'react';
import NewsItem from '../NewsItem';

const NewsList = () => {
    // newsAPI = https://newsapi.org/


    const [news, setNews] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const getNewsList = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey=dc8174e9293f434e9cdd22c03b387d57');
            const data = await response.json();
            console.log(data);
            setNews(data.articles);
            setIsLoading(false);
        } catch (e) {
            console.error(e.messages);
        }
    };

    // useEffect를 사용하지 않으면, 계속 매초마다 data를 get해오기 때문에 따로 처리 진행
    useEffect(() => {
        getNewsList();
    }, []);

    const dummy = [
        {
            "source": {
                "id": null,
                "name": "Siècle Digital"
            },
            "author": "Antoine Messina",
            "title": "Le H1st vision, un concentré de technologies françaises dans un concept-car",
            "description": "À l’abri des regards indiscrets, sous un chapiteau blanc installé à l’Orange Gardens, le centre de recherche et développement d’Orange situé dans la banlieue parisienne, dort le H1st vision (Human First vision), le concept-car électrique de la Software Républ…",
            "url": "https://siecledigital.fr/2023/06/14/le-h1st-vision-un-concentre-de-technologies-francaises-dans-un-concept-car/",
            "urlToImage": "https://e2d9x4m5.rocketcdn.me/wp-content/uploads/2023/06/H1st-Vision-Exterieur-1.jpg",
            "publishedAt": "2023-06-14T08:30:18Z",
            "content": "À labri des regards indiscrets, sous un chapiteau blanc installé à lOrange Gardens, le centre de recherche et développement dOrange situé dans la banlieue parisienne, dort le H1st vision (Human First… [+9028 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Google försenar lanseringen av Bard i EU",
            "description": "Skulle släppas denna vecka\n\n\n\n\n\n\n\n\n\n\nGoogle berättade förra veckan att man äntligen skulle släppa sin AI-chattbot Bard här i EU, men den lanseringen ser ut att utebli då det dykt upp frågetecken kring om tjänsten följer EU:s dataskyddslagar.\n\nEnligt den irlän…",
            "url": "https://feber.se/internet/google-forsenar-lanseringen-av-bard-i-eu/452590/",
            "urlToImage": "https://i.ytimg.com/vi/63NfEkYCLz0/hqdefault.jpg",
            "publishedAt": "2023-06-14T08:30:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+27418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "La Tribune.fr"
            },
            "author": "Marie Nidiau",
            "title": "Renault présente la voiture du futur (avec Atos, Dassault Systèmes, Orange, STMicroelectronics et Thales)",
            "description": "Le salon Vivatech ouvre ses portes aujourd'hui et un consortium d'entreprises de pointe françaises (Thales, Orange, Dassault Systèmes, Renault STMicroelectronics et Atos) présente leur voiture du futur. A son bord, vingt innovations allant de l'évaluation de …",
            "url": "https://www.latribune.fr/entreprises-finance/industrie/automobile/renault-presente-la-voiture-du-futur-avec-atos-dassault-systemes-orange-stmicroelectronics-et-thales-965764.html",
            "urlToImage": "https://static.latribune.fr/full_width/806132/renault-presente-un-concept-car-futuriste-avec-hi-fi-devialet.jpg",
            "publishedAt": "2023-06-14T08:30:00Z",
            "content": "C'est le jour J. Aujourd'hui débute le salon Vivatech, rassemblant les géants de la tech et de nombreuses startups. Parmi les acteurs incontournables du secteur, on retrouve les constructeurs automob… [+5767 chars]"
        },
    ]
    return (
        <div>
            {!isLoading ?
                news.map((news, index) => <NewsItem key={index} {...news} />)
                :
                <p>로딩중입니다.</p>
            }
        </div>
    );
};

export default NewsList;