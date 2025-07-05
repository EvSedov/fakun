import racketX31Img from "@/assets/images/racket-x31.png";
import racketAbaddonImg from "@/assets/images/racket-abaddon.png";
import racketAzraelImg from "@/assets/images/racket-azrael.png";
import racketAstarothImg from "@/assets/images/racket-astaroth.png";
import racketJerichoImg from "@/assets/images/racket-jericho.png";

export interface IRacketColorOption {
  name: string;
  colors: string | [string, string];
}

export interface IRacketOption {
  color: IRacketColorOption;
  image?: string;
  ozonLink?: string;
}

export interface IRacket {
  id: string;
  name: string;
  price: string;
  colorOptions: Record<string, IRacketOption>;
  selectedColorKey: string;
  description: string;
  characteristics: {
    title: string;
    setCharacteristics: string[];
  }[];
}

export const ALL_RACKET_COLORS: Record<string, IRacketColorOption> = {
  whiteRed: {
    name: "Бело-красный",
    colors: ["#FFFFFF", "#FF0000"] as [string, string],
  },
  blueGold: {
    name: "Сине-золотой",
    colors: ["#0000FF", "#FFD700"] as [string, string],
  },
  black: { name: "Черный", colors: "#000000" },
  redGold: {
    name: "Красно-золотой",
    colors: ["#FF0000", "#FFD700"] as [string, string],
  },
  blackWhite: {
    name: "Черно-белый",
    colors: ["#000000", "#FFFFFF"] as [string, string],
  },
  redWhite: {
    name: "Красно-белый",
    colors: ["#FF0000", "#FFFFFF"] as [string, string],
  },
  greenGold: {
    name: "Зелено-золотой",
    colors: ["#008000", "#FFD700"] as [string, string],
  },
  gold: { name: "Золотой", colors: "#FFD700" },
};

const racketX31 = {
  id: "racket-x31",
  name: "FAKUN X31",
  price: "35 000",
  colorOptions: {
    black: {
      color: ALL_RACKET_COLORS.black,
      image: racketX31Img,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-x31-black-edition-s-sherohovatoy-poverhnostyu-2060278771/?at=GRt2rol94TX6k5BZCoXLr5FVxWXvoI70X463iANkY2Z",
    },
  },
  selectedColorKey: "black",
  description: `FAKUN X31 представляет собой флагманскую модель
                    компании FAKUN, существующую на рынке более 10 лет. В
                    версии "ABADDON" модель достигла совершенства
                    благодаря десятилетнему развитию и тщательной
                    проработке каждой детали, превратившись в настоящее
                    произведение функционального искусства.`,
  characteristics: [
    {
      title: "Основные характеристики",
      setCharacteristics: [
        "Геометрия: каплевидная / негабаритная",
        "Профиль: 38 мм",
        "Материалы: цельный CARBON SMT + 6 слоев стекловолокна FIBERGLASS",
        "Основа (внутренний слой): EVA SOFT",
        "Отделка: косметика, интегрированная в ламинирование",
        "Протектор: периферийная защита (в комплекте)",
        "Уровень: высокий / профессиональный",
        "Вес: 360 грамм",
      ],
    },
    {
      title: "Материалы и конструкция",
      setCharacteristics: [
        "DOUBLE REVERSE LAMINATION - уникальная система производства, обеспечивающая идеальный динамический баланс благодаря точному соотношению смолы и волокон",
        "SIMETRIC ORBIT CONCEPT - орбитальная центровка сверления, разработанная на основе детального анализа гибкости и реакции",
        "Углеродное усиление - стратегически расположенные элементы, обеспечивающие жесткость в ключевых точках, предотвращающие деформацию при ударе и увеличивающие долговечность ракетки",
      ],
    },
    {
      title: "Игровые характеристики",
      setCharacteristics: [
        "Защита: отличная маневренность позволяет эффективно играть в защите и доставать сложные мячи",
        "Атака: высокая скорость передвижения обеспечивает точное размещение мяча",
        "Прочность: очень высокая благодаря используемой технологии производства",
      ],
    },
    {
      title: "Преимущества модели",
      setCharacteristics: [
        "Мощность и точность",
        "Маневренность и взрывная сила удара",
        "Эволюционный дизайн (EVOLUTION + REVOLUTION)",
        "Идеальное соотношение формы и функциональности",
      ],
    },
  ],
};

const racketAbaddon = {
  id: "racket-abaddon",
  name: "FAKUN ABADDON",
  colorOptions: {
    black: {
      color: ALL_RACKET_COLORS.redGold,
      image: racketAbaddonImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-x31-black-edition-s-sherohovatoy-poverhnostyu-2060278771/?at=r2t4yXjOZTGvDrzkTjM7WlguwPpmwAU9Rmpzf8nENz5&from_sku=2055797983&oos_search=false",
    },
    whiteRed: {
      color: ALL_RACKET_COLORS.whiteRed,
      image: racketAbaddonImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-abaddon-2055797983/?at=r2t4yXjOZTGvDrzkTjM7WlguwPpmwAU9Rmpzf8nENz5",
    },
    gold: {
      color: ALL_RACKET_COLORS.gold,
      image: racketAbaddonImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-abaddon-2055780054/?at=A6tGxMo5Oc5KgM2zuNk1BVrcm3jY9mHWM5D69CxGXOw3",
    },
  },
  selectedColorKey: "whiteRed",
  price: "32 990",
  description:
    "Ракетка FAKUN ASTAROTH представляет собой высокотехнологичное решение для игроков высокого уровня, стремящихся к максимальной эффективности в игре, благодаря инновационным материалам и продуманной конструкции.",
  characteristics: [
    {
      title: "Основные характеристики",
      setCharacteristics: [
        "Геометрия: Каплевидная / Негабаритная",
        "Профиль: 38 мм",
        "Баланс: Центральный",
        "Вес: 355 г",
        "Уровень: Высокий / Профессиональный",
        "Защитное покрытие: Встроенная периферийная защита",
      ],
    },
    {
      title: "Материалы и конструкция",
      setCharacteristics: [
        "Цельный карбон SMT + 6 слоев стекловолокна",
        "Сердцевина: EVA Soft Attack",
        "Технология производства: Double Reverse Lamination",
        "Система сверления: “Symmetric Orbit Concept”",
        "Узлы: Стратегические усиления из углеродного волокна",
        "Дизайн: Интегрированная косметика в структуру ракетки",
      ],
    },
    {
      title: "Игровые характеристики",
      setCharacteristics: [
        "Атакующий стиль: Идеальна для мощных и точных ударов",
        "Защитные действия: Высокая маневренность позволяет эффективно играть в защите",
        "Тактическая игра: Позволяет точно размещать мяч в желаемых зонах корта",
        "Развитие навыков: Подходит для игроков, стремящихся повысить свой уровень",
      ],
    },
    {
      title: "Преимущества модели",
      setCharacteristics: [
        "Мощность и точность: Идеальное сочетание для агрессивной игры",
        "Маневренность: Высокая скорость передвижения ракетки",
        "Контроль: Большая зона удара для точных ударов",
        "Долговечность: Использование материалов военной промышленности",
        "Прочность: Исключительная надежность конструкции",
      ],
    },
  ],
};

const racketAzrael = {
  id: "racket-azrael",
  name: "FAKUN AZRAEL",
  colorOptions: {
    redGold: {
      color: ALL_RACKET_COLORS.redGold,
      image: racketAzraelImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-azrael-2055917733/?at=46tRZGWx5SX1Zz9kF4WWG8OSygX1Rks8QBAWDiDWqgwz",
    },
    blackWhite: {
      color: ALL_RACKET_COLORS.blackWhite,
      image: racketAzraelImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-azrael-s-sherohovatoy-poverhnostyu-2055938192/?at=qQtJgGrvNcvV6pWYSwqXElViwBMZMPcZLO7ZMir8y1mD",
    },
  },
  selectedColorKey: "redGold",
  price: "34 990",
  description:
    "FAKUN AZRAEL - это высокотехнологичное решение для игроков высокого уровня, ценящих тактическую игру и точность. Инновационные материалы и продуманная конструкция делают эту ракетку идеальным выбором для профессионалов, стремящихся к максимальной эффективности на корте.",
  characteristics: [
    {
      title: "Основные характеристики",
      setCharacteristics: [
        "Геометрия: Круглая",
        "Профиль: 38 мм",
        "Баланс: Центральный",
        "Вес: 360-365 грамм",
        "Уровень: Высокий/профессиональный",
      ],
    },
    {
      title: "Материалы и конструкция",
      setCharacteristics: [
        "Система производства: DOUBLE REVERSE LAMINATION",
        "Материалы последние разработки авиакосмической промышленности",
        "Динамический баланс: Идеальное соотношение смолы и волокон",
      ],
    },
    {
      title: "Игровые характеристики",
      setCharacteristics: [
        "Благодаря 100% круглому силуэту обеспечивается оптимальное распределение упругости, что делает эту модель максимально тактичной и простой в использовании среди всех ракеток FAKUN",
      ],
    },
    {
      title: "Преимущества модели",
      setCharacteristics: [
        "Система бурения: Орбитальное центровочное с симметричной концепцией",
        "Уникальная особенность ракетки заключается в отсутствии дополнительной косметики. Вся печать интегрирована непосредственно в ламинацию, что исключает: Шпаклевочные материалы, наполнители, краски, наклейки, шелкографию, лаки",
        "Внешний вид: Ракетка сохраняет первоначальный вид благодаря интегрированной технологии печати",
        "Защита: Встроенные периферийные протекторные элементы",
      ],
    },
  ],
};

const racketAstaroth = {
  id: "racket-astaroth",
  name: "FAKUN ASTAROTH",
  colorOptions: {
    black: {
      color: ALL_RACKET_COLORS.black,
      image: racketAstarothImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-astaroth-s-sherohovatoy-poverhnostyu-2060298115/?at=Brtzx3mNKSOElqKMTzrvVl9Ty5ArkOtNMkXKguVE7RM6",
    },
    greenGold: {
      color: ALL_RACKET_COLORS.greenGold,
      image: racketAstarothImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-astaroth-2055803035/?at=w0tg5XQnxTLr74RoSg0YnAMFJoZ6k4fA23x87C1WjJE6",
    },
    redWhite: {
      color: ALL_RACKET_COLORS.redWhite,
      image: racketAstarothImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-astaroth-1953315293/?at=k2toDZ0vBsN4wLvri0rlOjohG5BpqPhm38Y5lHAWL7NY",
    },
    blueGold: {
      color: ALL_RACKET_COLORS.blueGold,
      image: racketAstarothImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-astaroth-2055929783/?at=w0tg5XQnxTXrpGZZi52QGJLsV5KWB8hgmDYzqSEqxkzB",
    },
  },
  selectedColorKey: "black",
  price: "35 000",
  description:
    "Ракетка FAKUN ASTAROTH представляет собой высокотехнологичное решение для игроков высокого уровня, стремящихся к максимальной эффективности в игре, благодаря инновационным материалам и продуманной конструкции.",
  characteristics: [
    {
      title: "Основные характеристики",
      setCharacteristics: [
        "Геометрия: Каплевидная / Негабаритная",
        "Профиль: 38 мм",
        "Баланс: Центральный",
        "Вес: 360 грамм",
        "Уровень: Высокий / Профессиональный",
      ],
    },
    {
      title: "Материалы и конструкция",
      setCharacteristics: [
        "Основной материал: Цельный CARBON SMT + 6 слоев стекловолокна FIBERGLASS",
        "Состав ядра: Смесь ADVANCE (EVA SOFT ATACK + NEW RED PRO + EVA SOFT ATACK)",
        "Технология производства: DOUBLE REVERSE LAMINATION",
        "Бурение: Орбитальное центровочное с симметричной концепцией",
        "Протектор: Периферийная защита (в комплекте)",
      ],
    },
    {
      title: "Игровые характеристики",
      setCharacteristics: [
        "Контроль: Точный",
        "Мощность: Экстраординарная благодаря центру RED PRO",
        "Точность мяча: Высокая, с возможностью выполнения быстрых подач и эффектов",
        "Прочность: Очень высокая благодаря системе производства",
      ],
    },
    {
      title: "Преимущества модели",
      setCharacteristics: [
        "Технологичность: Использование материалов последнего поколения из авиакосмической промышленности",
        "Универсальность: Подходит как для профессиональных игроков, так и для продвинутых любителей",
        "Эффективность: Обеспечивает максимальную мощность при сохранении точного контроля",
        "Долговечность: Отсутствие внешних покрытий гарантирует сохранение первоначального вида",
      ],
    },
  ],
};

const racketJericho = {
  id: "racket-jericho",
  name: "FAKUN JERICHO",
  colorOptions: {
    black: {
      color: ALL_RACKET_COLORS.black,
      image: racketJerichoImg,
      ozonLink:
        "https://www.ozon.ru/product/raketka-dlya-padel-tennisa-fakun-jericho-2055755219/?at=qQtJgGrvNc3k6ZGWCAkR1P2u9zEmy7IJV41v0TrDrJRM",
    },
  },
  selectedColorKey: "black",
  price: "31 500",
  description: `Ракетка FAKUN JERICHO - это результат многолетнего
                    развития модели, которая с 2012 года остается верной
                    своему принципу быть "ракеткой, которая нравится
                    всем". Она не специализируется на каком-то одном типе
                    удара, но демонстрирует отличные характеристики во
                    всех аспектах игры.`,
  characteristics: [
    {
      title: "Основные характеристики",
      setCharacteristics: [
        "Геометрия: Круглая",
        "Профиль: 38 мм",
        "Баланс: Низкий",
        "Вес: 330 г",
        "Уровень: Подходит для всех уровней",
        "Защитное покрытие: Встроенная периферийная защита",
      ],
    },
    {
      title: "Материалы и конструкция",
      setCharacteristics: [
        "Интегральный карбон SMT + 6 слоев стекловолокна",
        "Марко: Tubular FIBERFIRE + CARBON AXIAL",
        "Сердцевина: Сверхмягкая резина",
        "Узлы: Стратегические карбоновые стойки",
        "Смола: FAKUN 3D",
      ],
    },
    {
      title: "Игровые характеристики",
      setCharacteristics: [
        "Универсальность: Подходит для любого стиля игры и уровня подготовки",
        "Комфорт: Низкий баланс и небольшой вес защищают суставы",
        "Точность: Широкая зона поражения для надежной защиты и атаки",
        "Контроль: Пятно по центру обеспечивает сбалансированное ощущение при каждом ударе",
        "Долговечность: Использование материалов аэрокосмической промышленности",
        "Надежность: Стратегически расположенные карбоновые узлы предотвращают деформацию",
      ],
    },
    {
      title: "Преимущества модели",
      setCharacteristics: [
        "Динамический баланс: Идеальное распределение веса благодаря точному соотношению смолы и волокон",
        "Легкость управления: Благодаря продуманной балансировке в кулаке",
        "Стабильность: Оптимальное соотношение жесткости и гибкости",
        "Качество: Отсутствие дополнительных покрытий (шпатлевок, красок, наклеек) сохраняет идеальный вес и баланс",
      ],
    },
  ],
};

export const racketsData: IRacket[] = [
  racketX31,
  racketAbaddon,
  racketAzrael,
  racketAstaroth,
  racketJericho,
];
