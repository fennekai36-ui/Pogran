export const HEROES=[
{id:'kael',name:'Каэль',title:'Искатель рассвета',rarity:'R',element:'Пламя',base:1.6,portrait:0,color:'#8daeff',skill:'Каждые 8 секунд наносит удар на 300% своего DPS.'},
{id:'lyra',name:'Лира',title:'Стрела лунного леса',rarity:'R',element:'Природа',base:2.1,portrait:1,color:'#6bdbb7',skill:'Даёт отряду +5% шанса критического удара.'},
{id:'nyx',name:'Никс',title:'Хранительница сумерек',rarity:'R',element:'Тьма',base:2.5,portrait:2,color:'#bc94ff',skill:'Усиливает весь урон по боссам на 25%.'},
{id:'ragnar',name:'Рагнар',title:'Щит багровой клятвы',rarity:'SR',element:'Пламя',base:6.5,portrait:3,color:'#ffb58d',skill:'Даёт отряду +12% урона.'},
{id:'mira',name:'Мира',title:'Голос прилива',rarity:'SR',element:'Лёд',base:7.5,portrait:4,color:'#72dfe0',skill:'Даёт +15% золота за победы.'},
{id:'seraph',name:'Серафина',title:'Наследница звёзд',rarity:'SSR',element:'Свет',base:22,portrait:5,color:'#f2d291',skill:'Даёт отряду +25% урона и усиливает удары искателя на 20%.'},
{id:'tessa',name:'Тесса',title:'Лисья тропа',rarity:'R',element:'Природа',base:2.8,portrait:0,sheet:'heroes2',color:'#8ad3a2',skill:'Критические ручные удары наносят 235% урона вместо 200%.'},
{id:'borin',name:'Борин',title:'Мастер ледяных рун',rarity:'R',element:'Лёд',base:3.1,portrait:1,sheet:'heroes2',color:'#82cfdf',skill:'Усиливает ручные удары на 10%. Отряд вдвое быстрее разрушает барьеры.'},
{id:'isolde',name:'Изольда',title:'Королева инея',rarity:'SR',element:'Лёд',base:8.2,portrait:2,sheet:'heroes2',color:'#9dd5f5',skill:'Замедляет отсчёт времени у боссов на 15%.'},
{id:'cassian',name:'Кассиан',title:'Проводник солнца',rarity:'SR',element:'Свет',base:9,portrait:3,sheet:'heroes2',color:'#eac985',skill:'Даёт отряду +2,5% урона за каждый найденный артефакт.'},
{id:'morgana',name:'Моргана',title:'Королева вороньей ночи',rarity:'SSR',element:'Тьма',base:25,portrait:4,sheet:'heroes2',color:'#c09bea',skill:'Раз в 10 секунд наносит удар на 500% своего DPS и даёт 15 энергии Разлома.'},
{id:'azhar',name:'Азхар',title:'Наследник драконьей крови',rarity:'SSR',element:'Пламя',base:28,portrait:5,sheet:'heroes2',color:'#eea676',skill:'Каждый десятый ручной удар вызывает драконий огонь на 500% его DPS.'}
];
export const ELEMENTS={Пламя:{color:'#efaa7e',icon:'fire'},Лёд:{color:'#8fd4f2',icon:'ice'},Вода:{color:'#6abcec',icon:'water'},Природа:{color:'#80d1a0',icon:'nature'},Тьма:{color:'#bc9de9',icon:'dark'},Свет:{color:'#e9cf8e',icon:'light'},Воздух:{color:'#a8e7df',icon:'air'},Земля:{color:'#c9a06d',icon:'earth'}};
export const CONTRACTS=[{id:'taps',title:'Искры в ладонях',desc:'Нанеси 80 ручных ударов',goal:80,reward:{gold:1000}},{id:'kills',title:'Путь сквозь тени',desc:'Победи 25 противников',goal:25,reward:{gems:60}},{id:'summons',title:'Голоса созвездий',desc:'Сделай 3 призыва',goal:3,reward:{gems:40,dust:50}}];
export const RARITIES={R:{name:'Редкий',color:'#8daeff'},SR:{name:'Эпический',color:'#b394ef'},SSR:{name:'Легендарный',color:'#e8c780'}};
export const ENEMIES=[
{name:'Осколочный слизень',title:'Кристальные заросли',art:0,weakness:'Пламя',ability:'none'},
{name:'Лунный волк',title:'Лес серебряных троп',art:1,weakness:'Природа',ability:'elusive'},
{name:'Древний голем',title:'Забытые руины',art:2,weakness:'Лёд',ability:'armor'},
{name:'Янтарный скорпион',title:'Янтарные пустоши',art:0,sheet:'frontiers',weakness:'Лёд',ability:'armor'},
{name:'Туманная сирена',title:'Озеро несказанных слов',art:1,sheet:'frontiers',weakness:'Свет',ability:'regen'},
{name:'Рунический часовой',title:'Механический архив',art:2,sheet:'frontiers',weakness:'Природа',ability:'armor'},
{name:'Багровый василиск',title:'Багровый разлом',art:3,sheet:'frontiers',weakness:'Лёд',ability:'rage'},
{name:'Морозный фантом',title:'Ледяная обсерватория',art:4,sheet:'frontiers',weakness:'Пламя',ability:'shield'},
{name:'Пожиратель звёзд',title:'Грань пустоты',art:5,sheet:'frontiers',weakness:'Свет',ability:'drain'}];
export const TRIALS=[
{id:'warden',name:'Терновый хранитель',subtitle:'Хранитель лунного леса',art:3,unlock:5,hp:1800,seconds:45,gold:500,gems:80,cooldown:600000,gear:true,relic:true,weakness:'Пламя',ability:'shield'},
{id:'king',name:'Пепельный король',subtitle:'Владыка забытой цитадели',art:4,unlock:20,hp:85000,seconds:45,gold:12000,gems:160,cooldown:900000,gear:true,relic:true,weakness:'Свет',ability:'regen'},
{id:'dragon',name:'Астральный дракон',subtitle:'Последний огонь небес',art:5,unlock:40,hp:4500000,seconds:60,gold:200000,gems:300,cooldown:1800000,gear:true,relic:true,weakness:'Тьма',ability:'rage'},
{id:'glass',name:'Стеклянная королева',subtitle:'Память разбитых миров',art:6,sheet:'frontiers',unlock:60,hp:30000000,seconds:60,gold:1400000,gems:400,cooldown:1800000,gear:true,relic:true,weakness:'Пламя',ability:'prism'},
{id:'colossus',name:'Солнечный колосс',subtitle:'Сердце угасшей империи',art:7,sheet:'frontiers',unlock:90,hp:900000000,seconds:60,gold:40000000,gems:500,cooldown:1800000,gear:true,relic:true,weakness:'Лёд',ability:'armor'},
{id:'leviathan',name:'Беззвёздный левиафан',subtitle:'За пределами последнего света',art:8,sheet:'frontiers',unlock:120,hp:18000000000,seconds:75,gold:1000000000,gems:600,cooldown:1800000,gear:true,relic:true,weakness:'Свет',ability:'regen'}];
export const ABILITIES={none:'',elusive:'Уклонение · автоурон −15%',armor:'Броня · автоурон −20%, ручные удары обходят её',regen:'Каждые 5 секунд восстанавливает 2% HP',rage:'При HP ниже 35% получает на 25% меньше урона',shield:'Барьер · ручные удары разрушают его вдвое быстрее',drain:'Поглощает 2 энергии Разлома в секунду',prism:'Восстанавливает барьер на 70% и 40% HP'};
export const RELICS=[{id:'hourglass',name:'Пески безвременья',desc:'Увеличивает золото за время отсутствия.',stat:'offline',base:.25,icon:'hourglass',color:'#8fb8e8'},{id:'sun',name:'Сердце рассвета',desc:'Усиливает весь урон отряда.',stat:'dps',base:.12,icon:'sun',color:'#e9c782'},{id:'moon',name:'Осколок луны',desc:'Повышает шанс критического удара.',stat:'crit',base:.06,icon:'moon',color:'#b49cfa'},{id:'crown',name:'Корона забытых',desc:'Увеличивает золото за победы.',stat:'gold',base:.18,icon:'crown',color:'#eac67c'},{id:'fang',name:'Клык первородного',desc:'Усиливает урон по боссам.',stat:'boss',base:.2,icon:'fang',color:'#f096ad'},{id:'flame',name:'Вечное пламя',desc:'Усиливает ручные удары.',stat:'tap',base:.25,icon:'flame',color:'#f2a97e'}];
export const EQUIP_SLOTS={weapon:'Оружие',armor:'Доспех',charm:'Талисман'};
export const EQUIP_NAMES={weapon:['Клинок искателя','Лунное копьё','Звёздный разрез'],armor:['Мантия тумана','Доспех рассвета','Покров хранителя'],charm:['Печать пути','Око сумерек','Сердце кометы']};
export const TUTORIAL=['Нажимай на противника — каждый удар приносит победу ближе.','Прокачай Каэля: герои атакуют сами, даже когда ты не нажимаешь.','Потрать кристаллы на призыв и собери отряд из трёх героев.'];
export const VERSION=1;
