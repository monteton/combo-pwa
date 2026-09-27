// Данные программы «Осанка и пресс».
// Чтобы поменять видео или упражнения — правьте этот файл, страницы подтянут изменения сами.

const WELCOME_VIDEO = 'https://file-storage.bothelp.io/myuppy/9e/9e34/9e34cf110dca59a06f1bbe1fe1068643/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE.mp4';

// Вступление к разделу «Осанка» (смотрят один раз — открывается кнопкой)
const POSTURE_WELCOME_VIDEO = 'https://file-storage.bothelp.io/myuppy/15/15e6/15e6efc3131fb6f025211aff129f074f/IMG_2512.mov';

// Раздел «Пресс»: видео по технике — кнопки над списком тренировок
const PRESS_TECHNIQUE_VIDEOS = [
  { title: 'Техника выполнения упражнения «Вакуум»', src: 'https://file-storage.bothelp.io/myuppy/ff/ff92/ff9203dac867a73d44af26e3080114c1/IMG_2755.mov' },
  { title: 'Техника выполнения упражнения «Планка»', src: 'https://file-storage.bothelp.io/myuppy/29/2987/2987b541c455029fca5fb447d3a0f3f7/IMG_2756.mov' },
];

// Осанка: 7 тренировок — вступление к тренировке + 4 видео-упражнения
const POSTURE = [
  {
    "id": 1,
    "intro": "https://file-storage.bothelp.io/myuppy/dc/dcb9/dcb9bd56c3c640848037d4ef245accc8/IMG_2505.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/30/300a/300ae9091ad5c72c62bb10088d7ef7e0/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2011.mp4",
      "https://file-storage.bothelp.io/myuppy/69/693d/693dabd67723a1fdbaf0c57fa943b33c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2012.mp4",
      "https://file-storage.bothelp.io/myuppy/c2/c25c/c25c094f82e15182cf9ca2cfc45827af/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2013.mp4",
      "https://file-storage.bothelp.io/myuppy/2c/2ce5/2ce5c309585d1d3a826209df39ab03d0/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2014.mp4"
    ]
  },
  {
    "id": 2,
    "intro": "https://file-storage.bothelp.io/myuppy/a4/a467/a467f7cbd22273cbb07f88418ebed22b/IMG_2506.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/47/4745/47458df4847b78c1b225834593fd9207/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2021.mp4",
      "https://file-storage.bothelp.io/myuppy/e4/e479/e479933bba2e995ca84405e3fd9653eb/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2022.mp4",
      "https://file-storage.bothelp.io/myuppy/c1/c157/c1576131a1faede83df16819b0d435e1/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2023.mp4",
      "https://file-storage.bothelp.io/myuppy/90/907f/907f7e7ec8d07053e20c055380503786/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2024.mp4"
    ]
  },
  {
    "id": 3,
    "intro": "https://file-storage.bothelp.io/myuppy/01/0157/01571fb1216885ab1f2130e5f4018da8/IMG_2507.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/15/151d/151d1a5760c9423c3ee7d3959e2f4e22/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2031.mp4",
      "https://file-storage.bothelp.io/myuppy/39/3979/3979311aa583aaa3e9af1265eb3aaaa9/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2032.mp4",
      "https://file-storage.bothelp.io/myuppy/fe/fee8/fee88f771543697bb71a26e3c65e152e/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2033.mp4",
      "https://file-storage.bothelp.io/myuppy/6c/6c5e/6c5e67b5747226f854f8194f3d0ff38c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2034.mp4"
    ]
  },
  {
    "id": 4,
    "intro": "https://file-storage.bothelp.io/myuppy/29/2983/2983381a7bffd97dd855ebd945854a55/IMG_2508.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/0b/0bb2/0bb249a29ac1fad91776c7fede6fafa2/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2041.mp4",
      "https://file-storage.bothelp.io/myuppy/34/347d/347d5bd6f930905465a933dc50e4c132/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2042.mp4",
      "https://file-storage.bothelp.io/myuppy/b9/b958/b9588db2c6a89fdcadeff5289af955fe/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2043.mp4",
      "https://file-storage.bothelp.io/myuppy/21/2158/2158d7f09c00ad6cc7f468d3690327c8/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2044.mp4"
    ]
  },
  {
    "id": 5,
    "intro": "https://file-storage.bothelp.io/myuppy/34/341d/341d6a157ff68911a932cbc47ea92fd8/IMG_2509.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/8e/8e55/8e558a17957aa3afa7772885050bf94c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2051.mp4",
      "https://file-storage.bothelp.io/myuppy/4e/4e17/4e178cf929fb5e49ee61ac90095fd3b1/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2052.mp4",
      "https://file-storage.bothelp.io/myuppy/62/6289/628961a0181f82ba7002ffd2a476a79c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2053.mp4",
      "https://file-storage.bothelp.io/myuppy/76/76f3/76f37861954d12270676dbe986918250/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2054.mp4"
    ]
  },
  {
    "id": 6,
    "intro": "https://file-storage.bothelp.io/myuppy/7c/7ce5/7ce5391bb5ca8940f91e3ff2a44bbd47/IMG_2510.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/b7/b792/b792f394248f91666a60e491885234ad/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2061.mp4",
      "https://file-storage.bothelp.io/myuppy/b9/b9bf/b9bfebf3f0cd37d6514d596d2db86b0f/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2062.mp4",
      "https://file-storage.bothelp.io/myuppy/6d/6dd7/6dd74fc3171d73c8a8c903bccef8c21f/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2063.mp4",
      "https://file-storage.bothelp.io/myuppy/70/70b7/70b7e80ab3b50dc6e849bc2c26381e0d/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2064.mp4"
    ]
  },
  {
    "id": 7,
    "intro": "https://file-storage.bothelp.io/myuppy/fe/fe1b/fe1be60e58203d74086d5accd4ca8569/IMG_2511.mov",
    "videos": [
      "https://file-storage.bothelp.io/myuppy/08/08c9/08c9f89001e6a3a974832d08064b4f32/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2071.mp4",
      "https://file-storage.bothelp.io/myuppy/86/86f4/86f4ccaebb21380ce26f9de2ea771b14/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2072.mp4",
      "https://file-storage.bothelp.io/myuppy/2b/2b3a/2b3a5802075c607d4ad74492caff801c/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2073.mp4",
      "https://file-storage.bothelp.io/myuppy/ad/ad02/ad0277272584435ffdefaab0541d20dc/%D0%A2%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D1%81%D0%B0%D0%BD%D0%BA%D1%83%2074.mp4"
    ]
  }
];

// Пресс: 8 тренировок, одно видео + список упражнений
const PRESS = [
  {
    "id": 1,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/e7/e70f/e70f45884392de112aeed3d154f090b0/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B01.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Планка",
        "reps": "3/45 секунд"
      },
      {
        "name": "Русский твист",
        "reps": "3 подхода по 20 раз"
      },
      {
        "name": "Лодочка",
        "reps": "10 глубоких вдохов-выдохов 3 подхода"
      },
      {
        "name": "Тянемся к носкам",
        "reps": "2 подхода 20 раз"
      }
    ]
  },
  {
    "id": 2,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/66/6644/664492a606d545b3696c8f64992aa0a3/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B02.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Опускание ног",
        "reps": "3/20 раз"
      },
      {
        "name": "Колени к груди",
        "reps": "3 подхода 20 раз"
      },
      {
        "name": "Планка с подъемом рук",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 3,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/69/69c4/69c403ebbfd0fc4b09edfd56007993d7/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B03.mp4",
    "exercises": [
      {
        "name": "Боковая скрутка (руки к пятке)",
        "reps": "3/20"
      },
      {
        "name": "Велосипед",
        "reps": "3/20"
      },
      {
        "name": "Мертвый жук",
        "reps": "3/20"
      },
      {
        "name": "Скалолаз",
        "reps": "4/20"
      }
    ]
  },
  {
    "id": 4,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/f6/f66f/f66f4dddd16c0665dfc7f036e6578ee1/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B04.mp4",
    "exercises": [
      {
        "name": "Боковая планка со скручиванием",
        "reps": "3/12 На каждую сторону"
      },
      {
        "name": "Скручивание",
        "reps": "3/20"
      },
      {
        "name": "Боковые скручивания",
        "reps": "2/12 на каждую сторону"
      },
      {
        "name": "Обратные скручивания",
        "reps": "3/20"
      }
    ]
  },
  {
    "id": 5,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/6e/6e3b/6e3b08058d091747b980f2ddeebd8427/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B05.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Скручивание с поднятыми ногами",
        "reps": "3/15"
      },
      {
        "name": "Ножницы",
        "reps": "3/20"
      },
      {
        "name": "Обратная планка",
        "reps": "2/20"
      },
      {
        "name": "Опускание ног",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 6,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/6a/6a60/6a60f49a0f77a9f207027ef4271a517d/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B06.mp4",
    "exercises": [
      {
        "name": "Хлопок под коленкой",
        "reps": "3/20"
      },
      {
        "name": "Планка с разворотом",
        "reps": "3/12 по 6 на каждую сторону"
      },
      {
        "name": "Скручивание -ноги вверх",
        "reps": "3/20"
      },
      {
        "name": "Опускание ног",
        "reps": "3/20"
      }
    ]
  },
  {
    "id": 7,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/56/56b4/56b4e85e131a6a1e5cf13f982718cd06/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B07.mp4",
    "exercises": [
      {
        "name": "Вакуум",
        "reps": "5-7 раз"
      },
      {
        "name": "Планка динамичная",
        "reps": "3/20"
      },
      {
        "name": "Диагонали",
        "reps": "3/20 по 10 на каждую сторону"
      },
      {
        "name": "Колени к груди",
        "reps": "2/20"
      },
      {
        "name": "Стол",
        "reps": "2/20"
      }
    ]
  },
  {
    "id": 8,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/a1/a178/a178b747cb600009d15bb737c644aa64/%D0%BF%D1%80%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B08.mp4",
    "exercises": [
      {
        "name": "Скалолаз",
        "reps": "3/20"
      },
      {
        "name": "Косые скручивания",
        "reps": "3/20"
      },
      {
        "name": "Обратные скручивания",
        "reps": "3/20"
      },
      {
        "name": "Мертвый жук",
        "reps": "2/20"
      }
    ]
  }
];

// Описания техники упражнений. Ключ — название упражнения, как в списке тренировки.
// Кнопка «Как делать» появится у этого упражнения во всех тренировках, где оно есть.
const EXERCISE_GUIDES = {
  'Вакуум': {
    intro: 'Вакуум — это отличное упражнение: оно помогает проработать поперечную мышцу живота, которая работает как внутренний корсет. Я подобрала для вас чёткую инструкцию, чтобы всё получилось и было безопасно.',
    steps: [
      '<b>Выберите положение.</b> Новичкам лучше начать лёжа на спине: так проще расслабить поясницу и сфокусироваться на движении живота. Когда техника станет уверенной, можно пробовать другие варианты: сидя, стоя или на четвереньках.',
      'Сделайте <b>спокойный глубокий вдох через нос</b> (при этом грудная клетка почти не двигается, а живот «раздувается»).',
      '<b>Полностью выдохните через рот</b>, стараясь выпустить почти весь воздух. На этом этапе важно расслабить не только пресс, но и шею, плечи, лицо — иначе включится лишнее напряжение.',
      'После выдоха <b>мягко втяните живот</b> — представьте, что пытаетесь прижать пупок к позвоночнику, уводя низ живота внутрь и чуть вверх, под рёбра. Делайте это плавно, без рывков и силового натуживания. Не меняйте положение таза и позвоночника.',
      '<b>Удерживайте положение.</b> Начните с комфортного времени — например, 5–10 секунд. Не стремитесь сразу к рекордам: качество движения важнее глубины. Во время удержания можно делать короткие поверхностные вдохи, а не задерживать дыхание силой.',
      '<b>Плавно расслабьте мышцы</b> и сделайте спокойный вдох, чтобы вернуться в исходное состояние. Сделайте паузу (15–30 секунд), если планируете следующий подход.',
    ],
  },
  'Планка': {
    intro: 'Описание техники выполнения классической планки.',
    steps: [
      '<b>Исходное положение.</b> Лягте на живот. Вытяните ноги назад, стопы поставьте на пол на ширине таза, плотно упираясь носками. Локти расположите строго под плечевыми суставами, предплечья направьте вперёд параллельно друг другу.',
      '<b>Подъём корпуса.</b> На плавном выдохе оттолкнитесь от пола предплечьями и носками, поднимая корпус в горизонтальную линию.',
      `<b>Выравнивание тела.</b> Представьте, что тело — это единая прямая линия от головы до пяток.
        <ul class="guide-sub">
          <li><b>Голова</b> — в нейтральном положении, взгляд направлен в пол.</li>
          <li><b>Плечи</b> — расслаблены, не прижимайте их к ушам.</li>
          <li><b>Спина</b> — прямая, без прогиба в пояснице.</li>
          <li><b>Таз</b> — не поднят вверх и не опущен вниз.</li>
          <li><b>Ноги</b> — выпрямлены, пятки слегка вытянуты назад.</li>
        </ul>`,
      '<b>Напряжение мышц.</b> Напрягите пресс (подтяните пупок к позвоночнику) и ягодицы. Это поможет избежать провисания в пояснице. Колени держите прямыми.',
      '<b>Дыхание.</b> Не задерживайте дыхание. Дышите ровно и глубоко: вдох через нос, выдох через рот.',
      '<b>Удержание позы.</b> Сохраняйте прямое положение тела на протяжении всего подхода.',
    ],
  },
};

// ---------- Combo: дополнительные разделы ----------

// Главная: «Важно перед тренировками» — 2 обязательных видео
const IMPORTANT_VIDEOS = [
  { title: "Видео 1", src: WELCOME_VIDEO },
  { title: "Видео 2", src: "https://file-storage.bothelp.io/myuppy/75/7592/759279c47e0e4b1fac06622e87f7d4a2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F.mp4" },
];

// Ягодицы: 8 тренировок — видео + список упражнений
const GLUTES = [
  {
    "id": 1,
    "duration": 30,
    "video": "https://file-storage.bothelp.io/myuppy/29/299b/299baaf15142938f6d33fa762e53fa70/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B01.mp4",
    "exercises": [
      {
        "name": "Приседания Колодец"
      },
      {
        "name": "Выпады"
      },
      {
        "name": "Румынская тяга"
      },
      {
        "name": "Разведение ног"
      }
    ]
  },
  {
    "id": 2,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/ae/ae11/ae1195a62e1bc06bfc0c1dac6784019c/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B02.mp4",
    "exercises": [
      {
        "name": "Махи+ ягодичный мостик"
      },
      {
        "name": "Пятка в потолок+ султанчик"
      }
    ]
  },
  {
    "id": 3,
    "duration": 35,
    "video": "https://file-storage.bothelp.io/myuppy/c4/c4ab/c4ab6793adfc63be80305aed4bce6cdd/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B03.mp4",
    "exercises": [
      {
        "name": "Приседания-3/20"
      },
      {
        "name": "Болгарский выпад-3/12"
      },
      {
        "name": "Фрогги-3/12"
      },
      {
        "name": "Махи-4/25"
      }
    ]
  },
  {
    "id": 4,
    "duration": 40,
    "video": "https://file-storage.bothelp.io/myuppy/97/97c0/97c0f4229d081a20c717e8d164307766/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B04.mp4",
    "exercises": [
      {
        "name": "Приседания с выпрыгиванием +махи ногой"
      },
      {
        "name": "Приседания реверанс +оазведение ног"
      },
      {
        "name": "Подъем ноги на боку +ягодичный мостик на одной ноге"
      }
    ]
  },
  {
    "id": 5,
    "duration": 30,
    "video": "https://file-storage.bothelp.io/myuppy/a2/a247/a24718b49c904f42701ade865d3af5d5/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B05.mp4",
    "exercises": [
      {
        "name": "Приседания пружинка"
      },
      {
        "name": "Журавлик"
      },
      {
        "name": "Румынская тяга"
      },
      {
        "name": "Ягодичный мост со стулом"
      }
    ]
  },
  {
    "id": 6,
    "duration": 35,
    "video": "https://file-storage.bothelp.io/myuppy/55/55e0/55e07f0dc02c9f4299a4c0890998387b/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B06.mp4",
    "exercises": [
      {
        "name": "Приседания с резинкой"
      },
      {
        "name": "Боковые выпады"
      },
      {
        "name": "Обратные выпады"
      },
      {
        "name": "Отведение ноги с резинкой"
      },
      {
        "name": "Сгибание ноги с резинкой"
      }
    ]
  },
  {
    "id": 7,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/36/36db/36db57638acb5071f663d7929bf37677/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B07.mp4",
    "exercises": [
      {
        "name": "Приседание плие"
      },
      {
        "name": "Ягодичный мост-перекаты"
      }
    ]
  },
  {
    "id": 8,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/1c/1c79/1c79aec1f26fdfd3f1a49422dd700b8f/%D1%8F%D0%B3%D0%BE%D0%B4%D0%B8%D1%86%D1%8B%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B08.mp4",
    "exercises": [
      {
        "name": "Выпады"
      },
      {
        "name": "Приседания колодец"
      },
      {
        "name": "Румынская тяга со скрещенными ногами"
      },
      {
        "name": "Отшагивание с резинкой"
      }
    ]
  }
];

// Руки: вступление + 6 тренировок
const HANDS_INTRO_VIDEO = "https://file-storage.bothelp.io/myuppy/d1/d19f/d19f272b99b87d28bf3f5ec84fbeab84/%D0%A0%D1%83%D0%BA%D0%B8%20%D0%92%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5.mp4";
const HANDS = [
  {
    "id": 1,
    "duration": 15,
    "video": "https://file-storage.bothelp.io/myuppy/46/46db/46db670c9a90fcbdb44bc20c02c2658f/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%201.mp4",
    "exercises": [
      {
        "name": "Гиперэкстензия",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Тяга резинки к животу",
        "reps": "3 подхода по 15 раз"
      },
      {
        "name": "Французский жим лежа",
        "reps": "3 подхода по 15 раз"
      },
      {
        "name": "Отжимание с колен",
        "reps": "3 подхода по 12 раз"
      }
    ]
  },
  {
    "id": 2,
    "duration": 15,
    "video": "https://file-storage.bothelp.io/myuppy/b7/b73f/b73f4a38bd4a64699e2d014e33b6de8d/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%202.mp4",
    "exercises": [
      {
        "name": "Джампинг Джек",
        "reps": "20 раз 4 подхода"
      },
      {
        "name": "Разведение рук",
        "reps": "12 раз 4 подхода"
      },
      {
        "name": "Армейский жим",
        "reps": "12-20 раз 4 подхода"
      },
      {
        "name": "Французский жим",
        "reps": "12 раз 4 подхода"
      }
    ]
  },
  {
    "id": 3,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/df/df0d/df0dce956e019843afa864207bd93090/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%203.mp4",
    "exercises": [
      {
        "name": "Гиперэкстензия",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Обратные отжимания",
        "reps": "4 подхода по 12 раз"
      },
      {
        "name": "Молот",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Тяга к поясу в наклоне",
        "reps": "4 подхода по 12 раз"
      }
    ]
  },
  {
    "id": 4,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/33/33a0/33a020e8fa2e019667c43aaa36083d12/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%204.mp4",
    "exercises": [
      {
        "name": "Русский твист",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Велосипед сидя",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Ленивые отжимания",
        "reps": "4 подхода по 15 раз"
      },
      {
        "name": "Разведение рук с резинкой за головой",
        "reps": "4 подхода по 15 раз"
      }
    ]
  },
  {
    "id": 5,
    "duration": 20,
    "video": "https://file-storage.bothelp.io/myuppy/7a/7ad8/7ad8c46409ed502752710660c43a0378/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%205.mp4",
    "exercises": [
      {
        "name": "Джампинг джек",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Разведение рук с гантелями",
        "reps": "4 подхода по 15 раз"
      },
      {
        "name": "Тяга гантелей к подбородку",
        "reps": "4 подхода по 12 раз"
      },
      {
        "name": "Круги руками",
        "reps": "4 подхода по 20 раз"
      }
    ]
  },
  {
    "id": 6,
    "duration": 25,
    "video": "https://file-storage.bothelp.io/myuppy/a5/a5d7/a5d72e3c7e7bdfafccd956406648f670/%D0%A0%D1%83%D0%BA%D0%B8%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%206.mp4",
    "exercises": [
      {
        "name": "Гиперэкстензия",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Сгибание рук на бицепс",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Косые скручивания стоя",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Вращение рук",
        "reps": "4 подхода по 20 раз"
      },
      {
        "name": "Разгибание в наклоне",
        "reps": "4 подхода по 15 раз"
      },
      {
        "name": "Французский жим",
        "reps": "4 подхода по 12 раз"
      }
    ]
  }
];

// Уход за лицом: видео по порядку. В старой версии у «Аппарат OLZORI» и «Аппарат GEZATONE» были перепутаны файлы —
// здесь названия соответствуют файлам (урок 2 — GEZATONE, урок 3 — OLZORI)
const FACE_VIDEOS = [
  { title: 'Массаж скребком гуаша', src: 'https://file-storage.bothelp.io/myuppy/cc/cc56/cc56b8ef226eb469b990f1984783b7a2/%D0%A3%D1%80%D0%BE%D0%BA%201%20%D0%9C%D0%B0%D1%81%D1%81%D0%B0%D0%B6%20%D1%81%D0%BA%D1%80%D0%B5%D0%B1%D0%BA%D0%BE%D0%BC%20%D0%B3%D1%83%D0%B0%D1%88%D0%B0.mp4' },
  { title: 'Самомассаж. Гимнастика для лица', src: 'https://file-storage.bothelp.io/myuppy/e3/e3f5/e3f5c48ee666201503d13bff7d9173b4/%D0%A3%D1%80%D0%BE%D0%BA%202%20%D0%A1%D0%B0%D0%BC%D0%BE%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6%20.%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BB%D0%B8%D1%86%D0%B0.mp4' },
  { title: 'Умывание. Массаж', src: 'https://file-storage.bothelp.io/myuppy/89/890e/890e74fb1c8f20ff5ea203f5ecc66154/%D0%A3%D1%80%D0%BE%D0%BA%203%20%D0%A3%D0%BC%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6.mp4' },
  { title: 'Осанка. 1 упражнение', src: 'https://file-storage.bothelp.io/myuppy/7c/7cf4/7cf40b14136ad3e1585656bd729c98a0/%D0%A3%D1%80%D0%BE%D0%BA%204%20%D0%9E%D1%81%D0%B0%D0%BD%D0%BA%D0%B0%201%20%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5.mp4' },
  { title: 'Уход за кожей: маски, упражнения, массаж', src: 'https://file-storage.bothelp.io/myuppy/06/064f/064ff60e452e7b43d7b2e5c4eb5e231c/%D0%A3%D1%80%D0%BE%D0%BA%205%20%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%D0%BA%D0%BE%D0%B6%D0%B5%D0%B8%CC%86%20%D0%9C%D0%B0%D1%81%D0%BA%D0%B8%2C%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F.%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6.mp4' },
  { title: 'Уход за лицом, массаж', src: 'https://file-storage.bothelp.io/myuppy/62/62d1/62d105ef78287a1b5f16fa207b73b7a7/7%20%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%D0%BB%D0%B8%D1%86%D0%BE%D0%BC%20%2C%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6.mp4' },
  { title: 'Средства которыми пользуюсь я и могу рекомендовать вам', src: 'https://file-storage.bothelp.io/myuppy/55/5548/5548548ac6dfe1a5c37e855e4f9f8416/%D0%A1%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%BC%D0%B8%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%81%D1%8C%20%D1%8F%20%D0%B8%20%D0%BC%D0%BE%D0%B3%D1%83%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D0%BC.mp4', bonus: true },
  { title: 'Урок 1 по массажерам', src: 'https://file-storage.bothelp.io/myuppy/0c/0cd2/0cd2caddd8906c3786891151ef7942ac/%D0%A3%D1%80%D0%BE%D0%BA%201%20%D0%9F%D0%BE%20%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B5%D1%80%D0%B0%D0%BC.mp4' },
  { title: 'Аппарат GEZATONE', src: 'https://file-storage.bothelp.io/myuppy/17/175f/175fc9031e3d62a6d0e836bb126a6995/%D0%A3%D1%80%D0%BE%D0%BA%202%20%D0%90%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20GEZATONE.mp4' },
  { title: 'Аппарат OLZORI', src: 'https://file-storage.bothelp.io/myuppy/52/5242/524209c181d35745cb895cf28901a573/%D0%A3%D1%80%D0%BE%D0%BA%203%20%D0%90%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20OLZORI.mp4' },
  { title: 'Аппарат MAMI', src: 'https://file-storage.bothelp.io/myuppy/53/53fe/53fee285515a3b3a5f44d966db4f3336/%D0%A3%D1%80%D0%BE%D0%BA%204%20%D0%90%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20MAMI.mp4' },
];
