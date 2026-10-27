export const HEROES=[
{id:'kael',name:'Каэль',title:'Искатель рассвета',rarity:'R',element:'Клинок',base:1.6,portrait:0,color:'#8daeff',skill:'Каждые 8 секунд наносит удар на 300% своего DPS.'},
{id:'lyra',name:'Лира',title:'Стрела лунного леса',rarity:'R',element:'Ветер',base:2.1,portrait:1,color:'#6bdbb7',skill:'Даёт отряду +5% шанса критического удара.'},
{id:'nyx',name:'Никс',title:'Хранительница сумерек',rarity:'R',element:'Тень',base:2.5,portrait:2,color:'#bc94ff',skill:'Усиливает весь урон по боссам на 25%.'},
{id:'ragnar',name:'Рагнар',title:'Щит багровой клятвы',rarity:'SR',element:'Пламя',base:6.5,portrait:3,color:'#ffb58d',skill:'Даёт отряду +12% урона.'},
{id:'mira',name:'Мира',title:'Голос прилива',rarity:'SR',element:'Свет',base:7.5,portrait:4,color:'#72dfe0',skill:'Даёт +15% золота за победы.'},
{id:'seraph',name:'Серафина',title:'Наследница звёзд',rarity:'SSR',element:'Звёзды',base:22,portrait:5,color:'#f2d291',skill:'Даёт отряду +25% урона и усиливает удары искателя на 20%.'}
];
export const RARITIES={R:{name:'Редкий',color:'#8daeff'},SR:{name:'Эпический',color:'#b394ef'},SSR:{name:'Легендарный',color:'#e8c780'}};
export const ENEMIES=[{name:'Осколочный слизень',title:'Кристальные заросли',art:0},{name:'Лунный волк',title:'Лес серебряных троп',art:1},{name:'Древний голем',title:'Забытые руины',art:2}];
export const TRIALS=[{id:'warden',name:'Терновый хранитель',subtitle:'Хранитель лунного леса',art:3,unlock:5,hp:1800,seconds:45,gold:500,gems:80,cooldown:600000,gear:true,relic:true},{id:'king',name:'Пепельный король',subtitle:'Владыка забытой цитадели',art:4,unlock:20,hp:85000,seconds:45,gold:12000,gems:160,cooldown:900000,gear:true,relic:true},{id:'dragon',name:'Астральный дракон',subtitle:'Последний огонь небес',art:5,unlock:40,hp:4500000,seconds:60,gold:200000,gems:300,cooldown:1800000,gear:true,relic:true}];
export const RELICS=[{id:'hourglass',name:'Пески безвременья',desc:'Увеличивает золото за время отсутствия.',stat:'offline',base:.25,icon:'hourglass',color:'#8fb8e8'},{id:'sun',name:'Сердце рассвета',desc:'Усиливает весь урон отряда.',stat:'dps',base:.12,icon:'sun',color:'#e9c782'},{id:'moon',name:'Осколок луны',desc:'Повышает шанс критического удара.',stat:'crit',base:.06,icon:'moon',color:'#b49cfa'},{id:'crown',name:'Корона забытых',desc:'Увеличивает золото за победы.',stat:'gold',base:.18,icon:'crown',color:'#eac67c'},{id:'fang',name:'Клык первородного',desc:'Усиливает урон по боссам.',stat:'boss',base:.2,icon:'fang',color:'#f096ad'},{id:'flame',name:'Вечное пламя',desc:'Усиливает ручные удары.',stat:'tap',base:.25,icon:'flame',color:'#f2a97e'}];
export const EQUIP_SLOTS={weapon:'Оружие',armor:'Доспех',charm:'Талисман'};
export const EQUIP_NAMES={weapon:['Клинок искателя','Лунное копьё','Звёздный разрез'],armor:['Мантия тумана','Доспех рассвета','Покров хранителя'],charm:['Печать пути','Око сумерек','Сердце кометы']};
export const TUTORIAL=['Нажимай на противника — каждый удар приносит победу ближе.','Прокачай Каэля: герои атакуют сами, даже когда ты не нажимаешь.','Потрать кристаллы на призыв и собери отряд из трёх героев.'];
export const VERSION=1;
