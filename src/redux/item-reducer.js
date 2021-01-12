import React from 'react'

import chertov from "../img/4ertov.jpg";
import cherep from "../img/grot_4erep.jpg";
import urochishe from "../img/uro4ishe.jpg";

import swf from "../img/swf.jpg";

import vjeep from "../img/jeeps/075.jpg";
import bjeep from "../img/jeeps/225.jpg";
import ujeep from "../img/jeeps/510.jpg";

import extreme from  "../img/extremeLevel.png"
import hard from  "../img/hardLevel.png"
import easy from  "../img/easyLevel.png"

import spring from  "../img/spring.png"
import autumn from  "../img/autumn.png"
import winter from  "../img/winter.png"
import summer from  "../img/summer.png"

import guzeripl from "../img/tours/oshten/day1/guzeripl.jpg"
import armyanka from "../img/tours/oshten/day1/armyanka.jpg"
import instr from "../img/tours/oshten/day1/instruct-shel2.jpg"
import yavorova from "../img/tours/oshten/day1/yavorova.jpg"
import yavorova2 from "../img/tours/oshten/day2/yavorova2.jpg"
import vershina from "../img/tours/oshten/day2/vershina-oshtena.jpg"

let initialState = {
    allItems: [
        {
            id: 1,
            name: 'iceAxe',
            cost: 1000, cat: 0,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiX-k_-_xrz_d-7I7dEb8VvoSCr8wen0TcxZKS97tqZGpZkiKE"
        },
        {
            id: 2,
            name: 'rope',
            cost: 500, cat: 0,
            img: 'https://i2.wp.com/www.canyongear.com.au/wp-content/uploads/2019/10/20191008_164158.jpg?fit=2796%2C2796&ssl=1'
        },
        {
            id: 3,
            name: 'compass',
            cost: 800, cat: 0,
            img: 'https://werdum-army.ru/wp-content/uploads/2018/10/artilleriyskiy-kompas-adrianova-sssr-kupit.jpg'
        },



        {
            id: 100,
            name: 'Jeep',
            cost: 1000, cat: 1,
            img: vjeep
        },
        {
            id: 101,
            name: 'UAZ',
            cost: 500, cat: 1,
            img: bjeep
        },
        {
            id: 102,
            name: 'Land Rover',
            cost: 800, cat: 1,
            img: ujeep
        },



        {
            id: 200,
            name: 'Чертов палец и окрестности',
            cost: 1000,
            img: chertov,
            group: '5',
            season: [summer, autumn, winter, spring],
            cat: 2
        },
        {
            id: 201,
            name: 'Грот Череп, скала Галкина',
            cost: 500,
            img: cherep,
            group: '5',
            season: [summer, autumn, winter, spring],
            cat: 2
        },
        {
            id: 202,
            name: 'Сахрайские водопады',
            cost: 800,
            img: swf,
            group: '5',
            season: [summer, autumn, winter, spring],
            cat: 2
        },


        {
            id: 301, name: 'Фишт', img: 'https://горный-рай.рф/wp-content/uploads/2019/03/DSC_0676-1.jpg',
            level: hard, season: [summer, winter, spring, autumn], cost: '5000', cat: 3,
            description: ''
        },
        {
            id: 302, name: 'Oshten', img: 'https://i1.vpoxod.ru/ckeditor/fc/63/5f/77583.jpg',
            level: easy, season: [winter, summer], cost: '10000', cat: 3,
            description: 'Одна из красивейших вершин гора Оштен, кратер давно угасшего вулкана поразит своими видами даже искушенных туристов. За два дня похода вы проживете новую жизнь, наполнитесь энергией для новых начинаний и свершений.',
            day1: 'Ранним утром внедорожник привезет нас к месту под названием Тайвань. Отсюда начнется наш пеший туристический маршрут. Направляемся в сторону вершины горы Большой Тхач, на поляну Фирсову, затем на поляну Княжескую. Обед организуем в удобном месте рядом с тропой. Разобьем лагерь рядом с Княжеской поляной, в Лагерном гроте. Далее прогулка к гроту Изумрудный, к пещерам Княжеская и Вход в Преисподнюю. Традиционные посиделки у костра за чашечкой ароматного горного чая и интересными легендами.',
            day1_img: [guzeripl, armyanka, instr, yavorova],
            day2: 'Раннее утро начнем со сбора лагеря. Оставим тяжелые рюкзаки и отправимся налегке покорять гору Большой Тхач. Сегодня нас ждут великолепные виды со скальных обрывов и незабываемое восхождение на вершину. Большую часть дороги мы будем идти по тропе, обвивающую хребет горы. Справа от нас будет находится скальный обрыв высотой до 200 м, во все стороны взору откроется бесконечная панорама скальных хребтов, уходящих за горизонт. К полудню вернемся в лагерь, организуем обед, далее спускаемся к месту старта, в Тайвань.',
            day2_img: [yavorova2, vershina]
        },
        {
            id: 303, name: 'Tchach', img: 'https://www.idemvpohod.com/images/stories/marshrutis2/kavkaz/thach7/try3/341241.jpg',
            level: extreme, season: [spring, summer, autumn], cost: '8000', cat: 3
        },
        {
            id: 304, name: 'Фишт', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU' ,
            level: hard, season: [summer], cost: '5000', cat: 3
        },
        {
            id: 305, name: 'Oshten', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: hard, season: [winter, summer], cost: '10000', cat: 3
        },
        {
            id: 306, name: 'Tchach', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: easy, season: [spring, summer, autumn], cost: '8000', cat: 3
        },
        {
            id: 307, name: 'Фишт', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU' ,
            level: hard, season: [summer], cost: '5000', cat: 3
        },
        {
            id: 308, name: 'Oshten', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: hard, season: [winter, summer], cost: '10000', cat: 3
        },
        {
            id: 309, name: 'Tchach', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: easy, season: [spring, summer, autumn], cost: '8000', cat: 3
        },
        {
            id: 310, name: 'Фишт', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU' ,
            level: hard, season: [summer], cost: '5000', cat: 3
        },
        {
            id: 311, name: 'Oshten', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: hard, season: [winter, summer], cost: '10000', cat: 3
        },
        {
            id: 312, name: 'Tchach', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcMudC9lWvhKHfuPyatflRAHI1rZBgineyQ&usqp=CAU',
            level: easy, season: [spring, summer, autumn], cost: '8000', cat: 3
        }
    ]
}

const itemReducer = (state = initialState, action) => {
    return state
}

export default itemReducer