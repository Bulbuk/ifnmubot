const TelegramApi = require('node-telegram-bot-api');

const token = '6793841527:AAHzb3ARkzQTlag93ekvdbROA997VgTzWF4';

const bot = new TelegramApi(token, {polling: true});


// Messeges for bot

let Text_start = "Чи здається вам, що новий світ нашого Університету є складним і заплутаним лабіринтом? Не хвилюйтесь, я тут, щоб вам допомогти!Я - Чат-бот IFNMU Guide (@IFNMUGuideBot), ваш надійний супутник у світі Івано-Франківського національного медичного університету. Зі мною ви зможете по мітках Google Maps знайти розміщення бібліотеки, університетської клініки, гуртожитків та навчальних корпусів Університету, закладів харчування та ще багато корисної інформації. Маю надію, що я стану корисним для студентів Університету й Коледжу, абітурієнтів та батьків.";

let Text_socials = "Офіційні соціальні мережі університету:";

let Text_library = "м.Івано-Франківськ, вул. Галицька, 7a.";
let Text_sport = "https://maps.app.goo.gl/pv1yPcqxtMHMMRjE9";
let Text_klinika = "Запрошуємо вас отримати високоякісну медичну допомогу у нашій Університетській клініці! Наші висококваліфіковані лікарі та медичний персонал пропонують широкий спектр послуг для вашого здоров'я. Завдяки сучасним обладнанням та передовим методам лікування ми гарантуємо вам найкращу медичну підтримку. Нехай ваше здоров'я буде у надійних руках наших експертів. Студент, який захворів, для відпрацювання пропущених занять повинен мати підтверджену медичну довідку встановленої форми видану, або завірену Університетською клінікою";

let Text_diningRoom = "Харчування студентів – непросте питання, адже студентське життя дуже насичене: молоді люди не лише опановують великий обсяг складного навчального матеріалу, але й займаються спортом, організовують вечори, беруть участь у майстер-класах, гуртках, роботі спільнот, відвідують театри, кіно, інтенсивно спілкуються…";

let Text_studentOrg ="Шукаєш можливостей для особистого розвитку, лідерства та незабутніх спогадів? Приєднуйся до студентських організацій Університету! Тут ти зможеш зустріти нових друзів, займатися проєктами, організовувати заходи та впливати на життя університетського співтовариства. Реалізуй свої ідеї та створи свою незабутню студентську подорож разом з нами! Приєднуйся та почуй себе частиною незабутнього колективу.";

let corp1 = "https://maps.app.goo.gl/UDjmUeZrNLP73GHH6";
let corp2 = "https://maps.app.goo.gl/pv1yPcqxtMHMMRjE9";
let corp3 = "https://maps.app.goo.gl/iE6pKdHGaUm4m7Yq9";
let corp4 = "https://maps.app.goo.gl/fY4izid5etePiaN49";
let corp5 = "https://maps.app.goo.gl/bVsPybtfQoa6qE7n7";
let corp6 = "https://maps.app.goo.gl/BNtppkmUSrZmAK9DA";
let corp7 = "https://maps.app.goo.gl/uTCfvvHmntdMkSS4A";
let corp8 = "https://maps.app.goo.gl/ZwWhUuSbrou5X5Hz7";
let corp9 = "https://maps.app.goo.gl/AQBEKqS1Vb4UfhB68";
let corp10 = "https://maps.app.goo.gl/Rcwv1UX6FZgbSa8BA";
let corp11 = "https://maps.app.goo.gl/ofyg7ydXEDFiJ1WB8";
let corp12 = "https://maps.app.goo.gl/fuBT1zppcXhvoxoD9";
let corp13 = "https://maps.app.goo.gl/EyJo7Xxf9eEFYTve9";
let corp14 = "https://maps.app.goo.gl/zhU3RvTxxQt3Rn1i9";
let corp15 = "https://maps.app.goo.gl/uSTL9dAtQyeiWJZa9";

let cafe1 = "https://maps.app.goo.gl/UDjmUeZrNLP73GHH6";
let cafe2 = "https://maps.app.goo.gl/EyJo7Xxf9eEFYTve9";
let cafe3 = "https://maps.app.goo.gl/iE6pKdHGaUm4m7Yq9";
let cafe4 = "https://maps.app.goo.gl/fY4izid5etePiaN49";
let cafe5 = "https://maps.app.goo.gl/NZoMRGnzdPs82tu89";
let cafe6 = "https://maps.app.goo.gl/AQBEKqS1Vb4UfhB68";
let cafe7 = "https://maps.app.goo.gl/i9TQXSoVqn2crqvr5";
let cafe8 = "https://maps.app.goo.gl/Rcwv1UX6FZgbSa8BA";
let cafe9 = "https://maps.app.goo.gl/xYkvc8LFadVsqPS7A";
let cafe10 = "https://maps.app.goo.gl/uTCfvvHmntdMkSS4A";
let cafe11 = "https://maps.app.goo.gl/BNtppkmUSrZmAK9DA";
let cafe12 = "https://maps.app.goo.gl/ieBu9SBdK3dN2AEq8";
let cafe13 = "https://maps.app.goo.gl/pv1yPcqxtMHMMRjE9";


const startOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Student Guide", callback_data: "student_guide"}],
            [{text: "Contacts", callback_data: "contacts"}],
            [{text: "Social Networks", callback_data: "social_networks"}],
        ]
    })
}
const StudentHousesOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Гуртожиток №1-2 (вул. Тролейбусна, 10)", callback_data: "house1"}],
            [{text: "Гуртожиток №3 (вул. Мазепи, 171)", callback_data: "house2"}],
            [{text: "Гуртожиток №4 (Південний бульвар, 32)Social Networks", callback_data: "house3"}],
        ]
    })
}
const StudentOrgOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Студентський профком ІФНМУ", callback_data: "org1"}],
            [{text: "Студентський парламент ІФНМУ", callback_data: "org2"}],
            [{text: "Студентська Рада Коледжу", callback_data: "org3"}],
            [{text: "Студентське наукове товариство", callback_data: "org4"}],
            [{text: "Speaking Club Renovation", callback_data: "org5"}],
            [{text: "Асоціація Студентів Стоматологів (АСС ІФО)", callback_data: "org6"}],
            [{text: "Громадська організація “Українська медична студентська асоціація” (УМСА)", callback_data: "org7"}],
            [{text: "Студентська Асоціація Фахівців з реабілітації ІФНМУ", callback_data: "org8"}],
        ]
    })
}
const CafesOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Кафетерій медичного коледжу", callback_data: "cafe1"}],
            [{text: "Кафетерій кафедри мовознавства", callback_data: "cafe2"}],
            //[{text: "Кафетерій центрального корпусу", callback_data: "cafe3"}],
            [{text: "Кафетерій морфологічного корпусу", callback_data: "cafe4"}],
            [{text: "Кафе «Смайл»", callback_data: "cafe5"}],
            [{text: "Кафе фізіологічного корпусу", callback_data: "cafe6"}],
            [{text: "Кафе «Академка»", callback_data: "cafe7"}],
            [{text: "Кафе фармацевтичного корпусу", callback_data: "cafe8"}],
            [{text: "Кафетерій університетської клініки", callback_data: "cafe9"}],
            [{text: "Кафетерій лекційної аудиторії №16-17", callback_data: "cafe10"}],
            [{text: "Кафетерій лекційної аудиторії №7", callback_data: "cafe11"}],
            [{text: "Кафе «Ластівка»", callback_data: "cafe12"}],
            [{text: "Кафетерій спорткомплексу", callback_data: "cafe13"}],
        ]
    })
}
const CorpusesOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Корпус загальноосвітніх дисциплін", callback_data: "corpuse1"}],
            [{text: "Фізична культура", callback_data: "corpuse2"}],
            [{text: "Центральний корпус, дирекція коледжу", callback_data: "corpuse3"}],
            [{text: "Морфологічний корпус ІФНМУ", callback_data: "corpuse4"}],
            [{text: "Кафедра біологічної та медичної хімії імені академіка Г.О. Бабенка", callback_data: "corpuse5"}],
            [{text: "Кафедра внутрішньої медицини №2 та медсестринства, кафедра соціальної медицини та громадського здоров'я", callback_data: "corpuse6"}],
            [{text: "Кафедра гігієни та екології", callback_data: "corpuse7"}],
            [{text: "Стоматологічний корпус", callback_data: "corpuse8"}],
            [{text: "Фізіологічний корпус", callback_data: "corpuse9"}],
            [{text: "Фармацевтичний факультет", callback_data: "corpuse10"}],
            [{text: "Кафедра медичної інформатики, медичної та біологічної фізики", callback_data: "corpuse11"}],
            [{text: "Івано-Франківська обласна клінічна лікарня", callback_data: "corpuse12"}],
            [{text: "Кафедра мовознавства.Корпус (англ. м.)", callback_data: "corpuse13"}],
            [{text: "Кафедра мовознавства.Корпус (латин. м.)", callback_data: "corpuse14"}],
            [{text: "Кафедра інфекційних хвороб та епідеміології", callback_data: "corpuse15"}],
        ]
    })
}
const StudentGuideOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Бібліотека", callback_data: "library"}],
            [{text: "Спортивний комплекс", callback_data: "gym"}],
            [{text: "Клініка", callback_data: "klinic"}],
            [{text: "Корпуси", callback_data: "corpuses"}],
            [{text: "Студентські їдальні", callback_data: "cafes"}],
            [{text: "Гуртожитки", callback_data: "student_houses"}],
            [{text: "Музей", callback_data: "museum"}],
            [{text: "Студентські організації", callback_data: "student_org"}],
            [{text: "інше", callback_data: "more"}],
        ]
    })
}
const MoreOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Оголошення", callback_data: "anouncment"}],
            [{text: "Розклад занять", callback_data: "timetable"}],
            //[{text: "Реквізити для оплати", callback_data: "cardnum"}],
            [{text: "Розмір плати за навчання", callback_data: "paysize"}],
           
        ]
    })
}
const LibraryOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Cайт бібліотеки", callback_data: "libraryweb"}],
            [{text: "Переглянути на GoogleMaps", callback_data: "libraryGM"}],
            
           
        ]
    })
}
const ContactsItems = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Номер телефону", callback_data: "phone"}],
            [{text: "Ел. пошта", callback_data: "gmail"}],
           
        ]
    })
}
const SocialNetworks = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Instagram", callback_data: "instagram"}],
            [{text: "Telegram", callback_data: "telegram"}],
            [{text: "Facebook", callback_data: "facebook"}],
            [{text: "Youtube", callback_data: "youtube"}],
            [{text: "Twitter", callback_data: "x"}],
        ]
    })
}


const start = () => {
    bot.setMyCommands( [
        {command: "/start", description: "Розпочати"},
        {command: "/student_guide", description: "Student Guide"},
        {command: "/contacts", description: "Контакти Приймальної комісії"},
        {command: "/social_networks", description: "Соціальні мережі"}
    ])
    bot.on('message', msg => {


    const text = msg.text;
    const ChatId = msg.chat.id;

    


    if(text === "/start"){
        bot.sendSticker(ChatId, `https://sl.combot.org/emojing/webp/17xf09fa497.webp`)
        return bot.sendMessage(ChatId, Text_start, startOptions);
    }else if(text === "/student_guide"){
        bot.sendMessage(ChatId, "Student guide стане корисним для студентів, які тільки починають навчання у нашому Університеті чи фаховому медичному коледжі, а також для тих, хто вже є студентом, але хоче дізнатися більше про різні послуги та можливості, які надає Університет.", StudentGuideOptions)
    }else if(text === "/contacts"){
        bot.sendMessage(ChatId, "Виберіть, як зв'язатися з приймальною комісією", ContactsItems)
    }else if(text === "/social_networks"){
        bot.sendMessage(ChatId, `Офіційні соціальні мережі університету:`, SocialNetworks)
    }else{
         return bot.sendMessage(ChatId, "Вибачте, я не розумію вас");
    } 
   
})

bot.on('callback_query', msg => {
    const data = msg.data;
    const ChatId = msg.message.chat.id;

    if(data === "student_guide"){
        bot.sendMessage(ChatId, "Student guide стане корисним для студентів, які тільки починають навчання у нашому Університеті чи фаховому медичному коледжі, а також для тих, хто вже є студентом, але хоче дізнатися більше про різні послуги та можливості, які надає Університет.", StudentGuideOptions)
    }else if(data === "contacts"){
        //bot.sendSticker(ChatId, `https://sl.combot.org/phonecalls/webp/4xf09f939e.webp`)
        bot.sendMessage(ChatId, "Виберіть, як зв'язатися з приймальною комісією", ContactsItems)
        
        
    }else if(data === "social_networks"){
        
        bot.sendMessage(ChatId, `Офіційні соціальні мережі університету:`, SocialNetworks)
    }else if(data === "phone"){
        bot.sendMessage(ChatId, "Номер телефону: +380685869320 або +380342750325")
    }else if(data === "gmail"){
        bot.sendMessage(ChatId, "Gmail: pk@ifnmu.edu.ua")
    }else if(data === "telegram"){
       bot.sendMessage(ChatId, "https://t.me/ifnmu2023")
    }else if(data === "instagram"){
        bot.sendMessage(ChatId, "https://www.instagram.com/ifnmu_official?igsh=MXY1c3c2cmp0azRtNg%3D%3D&utm_source=qr")
    }else if(data === "x"){
        bot.sendMessage(ChatId, "https://x.com/ifnmu_official?s=21&t=Cso0x_gqF9hnmqO2SKk6-g")
    }else if(data === "youtube"){
        bot.sendMessage(ChatId, "https://youtube.com/@ifnmu?si=G1eCTcq212Pw7z99")
    }else if(data === "facebook"){
        bot.sendMessage(ChatId, "https://www.facebook.com/ifnmu.edu.ua")
    }else if(data === "more"){
        bot.sendMessage(ChatId, `Інші поширені запитання:`, MoreOptions)
    }else if(data === "library"){
         bot.sendPhoto(ChatId, `http://collegeifnmu.co.uk/StudentGit/img/library2.jpg`)
         bot.sendMessage(ChatId, Text_library, LibraryOptions)
    }else if(data === "gym"){
        bot.sendPhoto(ChatId, `http://collegeifnmu.co.uk/StudentGit/img/sport_compleks2.jpg`,{
            caption: Text_sport,
        } )
        //bot.sendMessage(ChatId, Text_sport)
    }else if(data === "klinic"){
        bot.sendPhoto(ChatId, `http://collegeifnmu.co.uk/StudentGit/img/clinic.jpg`,{
            caption: Text_klinika,
        } )
        //bot.sendMessage(ChatId, Text_klinika)
        bot.sendMessage(ChatId, "https://maps.app.goo.gl/xYkvc8LFadVsqPS7A")
    }else if(data === "student_houses"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/house.jpg");
        bot.sendMessage(ChatId, "Оберіть:", StudentHousesOptions)
    }else if(data === "museum"){
        bot.sendPhoto(ChatId, `http://collegeifnmu.co.uk/StudentGit/img/museum.jpg`,{
            caption: "https://ifnmu.edu.ua/uk/anatomichnyi-muzei",
        });
    }else if(data === "student_org"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/student_org2.jpg", {
            caption: Text_studentOrg,
        })
        bot.sendMessage(ChatId, "Оберіть:", StudentOrgOptions)
    }else if(data === "cafes"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/cafe1.jpg",{
            caption: Text_diningRoom,
        })
        bot.sendMessage(ChatId, "Оберіть:", CafesOptions)
    }else if(data === "corpuses"){
        //bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/corpuse3.jpg")
        bot.sendMessage(ChatId, "Оберіть: ", CorpusesOptions)

    }else if(data === "anouncment"){
        bot.sendMessage(ChatId, "https://www.ifnmu.edu.ua/uk/studentam/oholoshennia-dekanativ/oholoshennia-dekanatu-medychnoho-koledzhu")
    }else if(data === "timetable"){
        bot.sendMessage(ChatId, "https://www.ifnmu.edu.ua/uk/studentam/rozklad-zaniat")
    }else if(data === "cardnum"){
        bot.sendMessage(ChatId, "Error 404");
    }else if(data === "paysize"){
        bot.sendMessage(ChatId, `https://www.ifnmu.edu.ua/uk/publichna-informatsiya/rozmir-platy-za-navchannia-pidhotovku-perepidhotovku-pidvyshchennia-kvalifikatsii-zdobuvachiv-osvity`)
    }else if(data === "house1"){
        bot.sendMessage(ChatId, "https://maps.app.goo.gl/Ehe4fZPgUi7UokcH8")
    }else if(data === "house2"){
        bot.sendMessage(ChatId, "https://maps.app.goo.gl/hJcsbJaj6sgxF6o49")
    }else if(data === "house3"){
        bot.sendMessage(ChatId, "https://maps.app.goo.gl/pW3BaB7nZSh7e44f9")
    }else if(data === "libraryweb"){
        bot.sendMessage(ChatId, "https://www.ifnmu.edu.ua/uk/biblioteka-holovna")
    }else if(data === "libraryGM"){
        bot.sendMessage(ChatId, "https://maps.app.goo.gl/HC4HpBjiqHjqTgiQ7")
    }else if(data === "corpuse1"){
        bot.sendMessage(ChatId, corp1)
    }else if(data === "corpuse2"){
        bot.sendMessage(ChatId, corp2)
    }else if(data === "corpuse3"){
        bot.sendMessage(ChatId, corp3)
    }else if(data === "corpuse4"){
        bot.sendMessage(ChatId, corp4)
    }else if(data === "corpuse5"){
        bot.sendMessage(ChatId, corp5)
    }else if(data === "corpuse6"){
        bot.sendMessage(ChatId, corp6)
    }else if(data === "corpuse7"){
        bot.sendMessage(ChatId, corp7)
    }else if(data === "corpuse8"){
        bot.sendMessage(ChatId, corp8)
    }else if(data === "corpuse9"){
        bot.sendMessage(ChatId, corp9)
    }else if(data === "corpuse10"){
        bot.sendMessage(ChatId, corp10)
    }else if(data === "corpuse11"){
        bot.sendMessage(ChatId, corp11)
    }else if(data === "corpuse12"){
        bot.sendMessage(ChatId, corp12)
    }else if(data === "corpuse13"){
        bot.sendMessage(ChatId, corp13)
    }else if(data === "corpuse14"){
        bot.sendMessage(ChatId, corp14)
    }else if(data === "corpuse15"){
        bot.sendMessage(ChatId, corp15)
    }else if(data === "cafe1"){
        bot.sendMessage(ChatId, cafe1)
    }else if(data === "cafe2"){
        bot.sendMessage(ChatId, cafe2)
    }else if(data === "cafe3"){
        bot.sendMessage(ChatId, cafe3)
    }else if(data === "cafe4"){
        bot.sendMessage(ChatId, cafe4)
    }else if(data === "cafe5"){
        bot.sendMessage(ChatId, cafe5)
    }else if(data === "cafe6"){
        bot.sendMessage(ChatId, cafe6)
    }else if(data === "cafe7"){
        bot.sendMessage(ChatId, cafe7)
    }else if(data === "cafe8"){
        bot.sendMessage(ChatId, cafe8)
    }else if(data === "cafe9"){
        bot.sendMessage(ChatId, cafe9)
    }else if(data === "cafe10"){
        bot.sendMessage(ChatId, cafe10)
    }else if(data === "cafe11"){
        bot.sendMessage(ChatId, cafe11)
    }else if(data === "cafe12"){
        bot.sendMessage(ChatId, cafe12)
    }else if(data === "cafe13"){
        bot.sendMessage(ChatId, cafe13)
    }else if(data === "org1"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/student_org1.jpg",{
            caption: "Студентський профком ІФНМУ https://www.ifnmu.edu.ua/uk/studentskyi-profkom-ifnmu",
        })
    }else if(data === "org2"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/student_org2.png",{
            caption: "Студентський парламент ІФНМУ https://www.ifnmu.edu.ua/uk/studentskyi-parlament https://www.instagram.com/ifnmu_live/",
        })
    }else if(data === "org3"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/student_org3.jpg",{
            caption: "Студентська Рада Коледжу https://www.instagram.com/srmc_ifnmu/?igshid=MzRlODBiNWFlZA%3D%3D",
        })
    }else if(data === "org4"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/student_org4.jpg",{
            caption: "Студентське наукове товариство https://www.ifnmu.edu.ua/uk/golovna-snt",
        })
    }else if(data === "org5"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/english.jpg",{
            caption: "Speaking Club Renovation https://www.instagram.com/speaking.club.renovation/?igshid=MzRlODBiNWFlZA%3D%3D",
        })
    }else if(data === "org6"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/acc_ifo.png",{
            caption: "Асоціація Студентів Стоматологів (АСС ІФО) https://www.instagram.com/acc_ifo/",
        })
    }else if(data === "org7"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/umsa.png",{
            caption: "Громадська організація “Українська медична студентська асоціація” (УМСА) https://www.instagram.com/umsa.frankivsk/ @umsa_if",
        })
    }else if(data === "org8"){
        bot.sendPhoto(ChatId, "http://collegeifnmu.co.uk/StudentGit/img/sars.jpg",{
            caption: "Студентська Асоціація Фахівців з реабілітації ІФНМУ https://www.instagram.com/sars.ifnmu?igsh=MTZta2toejF2a3J0YQ== / https://www.facebook.com/profile.php?id=61560504196796",
        })
    }
    console.log(msg)
})


}
start();