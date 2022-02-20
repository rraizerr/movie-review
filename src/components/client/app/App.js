import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/header";
import Home from "../homePage/home";
import Reviews from "../reviewsListPage/reviews";
import Footer from "../footer/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    state = {
        reviewsData: [
            {
                img: "https://cdn.igromania.ru/mnt/articles/1/7/7/b/1/1/32170/preview/0141b3da8c7f2c50_272x153.jpg",
                title: "Обзор фильма «Анчартед: На картах не значится» — Выбраться из западни",
                description: "Весьма вольная экранизация Uncharted, которая следует не букве, но духу первоисточника.",
                postDate: "13.02.2022",
                author: "Mark Otto",
                src: "/",
                rating: 38,
                id: 1
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/8/e/a/3/8/8/32082/preview/9d2b041d2e53bbd9_272x153.jpg",
                title: "Обзор фильма «Матрица: Воскрешение» — Да ладно, я стебусь, бро",
                description: "Режиссёрский комментарий к оригинальной трилогии, разросшийся до целого фильма.",
                postDate: "18.12.2021",
                author: "Lari Bird",
                src: "/",
                rating: 30,
                id: 2
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/2/e/8/8/2/9/32075/preview/edae52168f16f7e3_272x153.jpg",
                title: "Обзор фильма «Человек-паук: Нет пути домой» — Между прошлым и будущим",
                description: "Лучший сольник Паучка Тома Холланда и один из главных кинокомиксов последних лет.",
                postDate: "16.12.2021",
                author: "Lari Bird",
                src: "/",
                rating: 28,
                id: 3
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/2/4/2/c/1/e/32058/preview/dd88d3651378efb7_272x153.jpg",
                title: "Обзор фильма «Охотники за привидениями: Наследники» — Воскрешая мертвецов",
                description: "Образцовое возрождение франшизы, которое залечивает раны, нанесённые провальным ремейком.",
                postDate: "06.11.2021",
                author: "Lari Bird",
                src: "/",
                rating: 30,
                id: 4
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/7/9/d/a/9/9/32002/preview/9e7696459c437d02_272x153.jpg",
                title: "Обзор фильма «Вечные»: Ничто не вечно под луной",
                description: "Потрясающе красивый блокбастер, который претендует на звание «настоящего» кино, но путается сам в себе.",
                postDate: "08.04.2021",
                author: "Lari Bird",
                src: "/",
                rating: 25,
                id: 5
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/b/9/1/c/0/e/31929/preview/24d874663e2a976e_272x153.jpg",
                title: "Обзор фильма «Веном 2»: Минимум резни, максимум трэша",
                description: "Продолжение самого противоречивого кинокомикса 2018 года может порадовать поклонников оригинала и даже тех, кто терпеть не может первую часть.",
                postDate: "02.10.2021",
                author: "Lari Bird",
                src: "/",
                rating: 20,
                id: 6
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/3/c/f/d/e/f/31903/preview/050e0f52a1cb125b_272x153.jpg",
                title: "Обзор фильма «Дюна»: Губительная красота пустыни",
                description: "Потрясающе красивая и совершенно не мейнстримная научная фантастика, которая обречена на культовый статус и, вероятнее всего, кассовый провал.",
                postDate: "18.09.2021",
                author: "Lari Bird",
                src: "/",
                rating: 18,
                id: 7
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/3/6/9/5/c/1/31876/preview/62eb88f007bcfe4f_272x153.jpg",
                title: "Обзор фильма «Шан-Чи и легенда десяти колец»: Очень тихо крадущийся тигр",
                description: "Первый за долгие годы фильм Marvel, который имеет нешуточные шансы на провал.",
                postDate: "05.09.2021",
                author: "Lari Bird",
                src: "/",
                rating: 20,
                id: 8
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/6/1/3/a/4/e/31841/preview/7525ec71848ea5f6_272x153.jpg",
                title: "Обзор фильма «Главный герой». Первому NPC приготовиться",
                description: "Старомодная, но уютная экшн-комедия, в которой романтики больше, чем отсылок к видеоиграм.",
                postDate: "15.08.2021",
                author: "Lari Bird",
                src: "/",
                rating: 18,
                id: 9
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/6/6/3/a/a/1/31827/preview/f43c9681d6cce263_272x153.jpg",
                title: "Обзор фильма «Отряд самоубийц: Миссия навылет». ХулиГАННское зрелище",
                description: "Кровавый комедийный боевик, в котором Джеймс Ганн делает всё то, за что его полюбили критики и зрители.",
                postDate: "08.08.2021",
                author: "Lari Bird",
                src: "/",
                rating: 20,
                id: 10
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/3/0/6/6/b/1/31747/preview/374b749236c4c6af_272x153.jpg",
                title: "13 самых дорогих сериалов современности: «Игра престолов», «Мандалорец» и другие",
                description: "Проекты, бюджет которых вышел за все известные пределы.",
                postDate: "25.06.2021",
                author: "Lari Bird",
                src: "/",
                rating: 35,
                id: 11
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/0/2/f/0/e/6/31641/preview/fc1ba7f23072770b_272x153.jpg",
                title: "Обзор фильма «Мортал Комбат». А ну иди сюда!",
                description: "Новая экранизация культовой серии файтингов уделывает фильм 1995 года в кровавости и только в ней.",
                postDate: "08.04.2021",
                author: "Lari Bird",
                src: "/",
                rating: 20,
                id: 12
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/1/9/1/5/f/6/31635/preview/4381c77055844c75_272x153.jpg",
                title: "Обзор фильма «Майор Гром: Чумной Доктор». Бэтмент навсегда",
                description: "Фильм, который доказывает, что российские кинокомиксы могут существовать и даже приносить удовольствие.",
                postDate: "04.04.2021",
                author: "Lari Bird",
                src: "/",
                rating: 28,
                id: 13
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/6/1/f/f/9/1/31402/preview/057af1ebb7fb9724_272x153.jpg",
                title: "Обзор фильма «Довод». йинег — налоН",
                description: "Новый фильм Нолана сочетает филигранную режиссуру и мозговыносящий визуал с довольно банальной историей.",
                postDate: "28.08.2020",
                author: "Lari Bird",
                src: "/",
                rating: 25,
                id: 14
            },
            {
                img: "https://cdn.igromania.ru/mnt/articles/f/5/c/a/5/e/31365/preview/2e0511e460805bfb_272x153.jpg",
                title: "Обзор фильма «Бессмертная гвардия». Не кончается пытка",
                description: "Фантастический боевик с Шарлиз Терон, в котором драмы больше, чем экшена.",
                postDate: "17.07.2020",
                author: "Lari Bird",
                src: "/",
                rating: 18,
                id: 15
            }

        ]
    };

    render() {
        const { reviewsData } = this.state;
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home reviewsData={reviewsData} />} />
                    <Route path="reviews" element={<Reviews reviewsData={reviewsData} />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
